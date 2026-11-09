#!/usr/bin/env node
// Atualização automática dos vídeos (workflow atualizar-videos.yml, de 5 em 5 h no i7).
// Compara a planilha (todas as abas, inclusive novas) com o que a base já tem e, só para vídeo novo:
// baixa a legenda (yt-dlp), grava conteudo/meta/legendas, pede o resumo ao Claude, põe o vídeo no
// catálogo do produto da aba e, no portal, liga a até 3 artigos. Termina rodando os conferidores.
// Uso: node scripts/atualizar-videos.mjs   (ANTHROPIC_API_KEY no ambiente; YTDLP = caminho do yt-dlp)
// Saída: imprime "produtos=<lista>" dos catálogos alterados (vazio = nada novo).
import { execFileSync } from 'node:child_process'
import { copyFileSync, existsSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import Anthropic from '@anthropic-ai/sdk'
import { zodOutputFormat } from '@anthropic-ai/sdk/helpers/zod'
import { z } from 'zod'

const RAIZ = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const V = join(RAIZ, 'videos')
const PLANILHA = '1T-8uwGcdqZxnH0W3l86UP6S8v5IeeIX7fwVUuH7f5Uc'
const MODELO = 'claude-opus-5-5'
const YTDLP = process.env.YTDLP || 'yt-dlp'
const lerJson = p => JSON.parse(readFileSync(p, 'utf8'))
const node = (...a) => execFileSync(process.execPath, a, { cwd: RAIZ, stdio: 'inherit' })
const dormir = ms => new Promise(r => setTimeout(r, ms))

// 1. Abas: as que a planilha tem e o abas.json não ganham registro sem produto (ninguém escolhe em silêncio).
const ABAS = join(V, 'abas.json')
const abas = lerJson(ABAS)
const html = await (await fetch(`https://docs.google.com/spreadsheets/d/${PLANILHA}/htmlview`)).text()
const desescapa = s => s.replace(/\\x([0-9a-f]{2})/gi, (_, h) => String.fromCharCode(parseInt(h, 16))).replace(/\\u([0-9a-f]{4})/gi, (_, h) => String.fromCharCode(parseInt(h, 16)))
const slug = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
for (const [, nome, gid] of html.matchAll(/items\.push\(\{name: "([^"]*)",[^}]*?gid=(\d+)/g)) {
  if (abas.abas.some(a => a.gid === Number(gid))) continue
  abas.abas.push({ gid: Number(gid), slug: slug(desescapa(nome)), nome: desescapa(nome), produto: '' })
  console.log(`aba nova: ${desescapa(nome)} (gid ${gid}) — defina o produto em videos/abas.json`)
}
writeFileSync(ABAS, JSON.stringify(abas, null, 2) + '\n')

// 2. Baixa todas as abas e regenera o índice; novo = id sem transcrição.
node('scripts/videos.mjs')
const novos = lerJson(join(V, 'indice.json')).por_video.filter(v => !v.conteudo)
if (!novos.length) { console.log('nada novo'); console.log('produtos='); process.exit(0) }
console.log(`${novos.length} vídeo(s) novo(s): ${novos.map(v => v.youtube_id).join(' ')}`)

// 3. Legenda automática do YouTube -> transcrição em parágrafos de ~40 s (mesmo formato do lote de 2026-11-09).
function transcrever(id) {
  const dir = mkdtempSync(join(tmpdir(), 'legenda-'))
  execFileSync(YTDLP, ['-q', '--no-warnings', '--skip-download', '--write-info-json', '--write-subs', '--write-auto-subs',
    '--sub-langs', 'pt-orig,pt', '--sleep-subtitles', '4', '--convert-subs', 'srt', '-o', join(dir, '%(id)s.%(ext)s'), '--', id], { stdio: 'inherit' })
  const info = lerJson(join(dir, `${id}.info.json`))
  const manual = !!info.subtitles?.pt
  const idioma = manual ? 'pt' : existsSync(join(dir, `${id}.pt-orig.srt`)) ? 'pt-orig' : 'pt'
  const srt = join(dir, `${id}.${idioma}.srt`)
  if (!existsSync(srt)) throw new Error(`${id}: sem legenda pt`)
  const ts = t => { const [h, m, r] = t.split(':'); return +h * 3600 + +m * 60 + parseInt(r) }
  const pars = []; let ini = null, buf = [], ant = ''
  for (const bloco of readFileSync(srt, 'utf8').trim().split(/\n\s*\n/)) {
    const l = bloco.trim().split('\n'); if (l.length < 3) continue
    const linhas = l.slice(2).map(x => x.trim()).filter(Boolean); if (!linhas.length) continue
    const txt = linhas.at(-1); if (txt === ant) continue; ant = txt   // legenda automática "rola": só a linha nova
    const t = ts(l[1].split(' --> ')[0]); ini ??= t; buf.push(txt)
    if (t - ini >= 41) { pars.push([ini, buf.join(' ')]); ini = null; buf = [] }
  }
  if (buf.length) pars.push([ini, buf.join(' ')])
  const fonte = manual ? 'manual' : 'automatica', hoje = new Date().toISOString().slice(0, 10)
  const mmss = s => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`
  writeFileSync(join(V, 'conteudo', `${id}.md`), `---\nvideo_id: ${id}\ntitulo_youtube: ${JSON.stringify(info.title)}\nduracao_s: ${info.duration}\nfonte_legenda: ${fonte}\nidioma: ${idioma}\nbaixado_em: ${hoje}\nurl: https://youtu.be/${id}\n---\n\n# ${info.title}\n\n` +
    pars.map(([s, p]) => `[${mmss(s)}] ${p.replace(/\s+/g, ' ')}`).join('\n\n') + '\n')
  writeFileSync(join(V, 'meta', `${id}.json`), JSON.stringify({ id, title: info.title, duration: info.duration, upload_date: info.upload_date, channel: info.channel, description: info.description || '', availability: info.availability, legenda: { fonte, idioma } }, null, 2) + '\n')
  copyFileSync(srt, join(V, 'legendas', `${id}.srt`))
  return info.title
}

// 4. Resumo no formato de videos/resumos/ (o chat recomenda o vídeo por ele; só as 6 primeiras perguntas vão ao prompt).
const claude = new Anthropic()
const Resumo = z.object({ resumo: z.string(), perguntas: z.array(z.string()), cobre: z.array(z.string()), telas: z.array(z.string()), nao_cobre: z.array(z.string()) })
const exemplo = readFileSync(join(V, 'resumos', '09n3Eiwn418.json'), 'utf8')
async function perguntar(prompt, formato) {
  const r = await claude.messages.parse({ model: MODELO, max_tokens: 16000, output_config: { effort: 'low', format: zodOutputFormat(formato) }, messages: [{ role: 'user', content: prompt }] })
  if (r.stop_reason === 'refusal' || !r.parsed_output) throw new Error(`resposta inválida do modelo (${r.stop_reason})`)
  return r.parsed_output
}
const resumir = (id, titulo, transcricao) => perguntar(`Você escreve a ficha de um vídeo tutorial para o chat de suporte decidir quando recomendá-lo a um usuário leigo.
Português do Brasil. Use só o que a transcrição sustenta; nomes de menu e botão exatamente como falados (legenda automática: corrija nomes óbvios, ex. "chat GPT" -> ChatGPT).
- resumo: 2 a 3 frases, o que o vídeo ensina e ressalvas importantes.
- perguntas: 10 a 14, como um leigo perguntaria ("como ...", "por que ..."). As 6 primeiras são as mais específicas deste vídeo; perguntas genéricas que outro vídeo responde melhor (ex.: conectar o ChatGPT) vão para o fim.
- cobre: ações concretas mostradas, verbo no infinitivo.
- telas: caminhos de menu ("Menu › Item").
- nao_cobre: 2 a 4 assuntos vizinhos que o vídeo não ensina.
Exemplo de ficha de outro vídeo: ${exemplo}

Vídeo ${id}: ${titulo}
<transcricao>
${transcricao}
</transcricao>`, Resumo)

// 5. Portal: o chat só oferece vídeo citado em artigo do perfil; o Claude escolhe até 3 artigos do público da aba.
const Escolha = z.object({ caminhos: z.array(z.string()) })
async function vincular(id, ficha, publico) {
  const artigos = lerJson(join(RAIZ, 'indice.json')).artigos.filter(a => a.caminho.startsWith(`portal-da-cidade/${publico}/`))
  const lista = artigos.map(a => `${a.caminho} | ${a.titulo}`).join('\n')
  const { caminhos } = await perguntar(`Escolha de 1 a 3 artigos de suporte em que este vídeo ajuda quem chega com a dúvida do artigo. Prefira o artigo central do assunto; não escolha artigo só vizinho. Responda com caminhos copiados exatamente da lista.
Vídeo: ${JSON.stringify(ficha)}
<artigos>
${lista}
</artigos>`, Escolha)
  for (const c of caminhos.filter(c => artigos.some(a => a.caminho === c)).slice(0, 3)) {
    const p = join(RAIZ, c), t = readFileSync(p, 'utf8'), fim = t.indexOf('\n---', 4), fm = t.slice(0, fim + 1)
    if (fm.includes(`  - ${id}\n`)) continue
    const m = fm.match(/\nvideos:\n(?:  - .*\n)*/)
    const novo = m ? fm.slice(0, m.index + m[0].length) + `  - ${id}\n` + t.slice(m.index + m[0].length) : `${fm}videos:\n  - ${id}${t.slice(fim)}`
    writeFileSync(p, novo); console.log(`  ${id} -> ${c}`)
  }
}

const produtos = new Set(), porGid = new Map(abas.abas.map(a => [a.slug, a]))
for (const v of novos) {
  const id = v.youtube_id, linha = v.linhas.find(l => l.topico) ?? v.linhas[0], aba = porGid.get(linha.aba)
  try {
    const tituloYt = transcrever(id)
    const catalogo = aba?.produto && join(RAIZ, aba.produto, 'videos.json')
    if (!catalogo || !existsSync(catalogo)) { console.log(`${id}: aba ${linha.aba} sem catálogo de produto; só a transcrição`); continue }
    const transcricao = readFileSync(join(V, 'conteudo', `${id}.md`), 'utf8').split('\n---\n')[1]
    const ficha = await resumir(id, linha.topico || tituloYt, transcricao)
    writeFileSync(join(V, 'resumos', `${id}.json`), JSON.stringify({ id, titulo: tituloYt, ...ficha }))
    const cat = lerJson(catalogo)
    if (!cat.videos.some(x => x.id === id)) cat.videos.push({ id, titulo: (linha.topico || tituloYt).trim().replace(/\s+/g, ' ') })
    writeFileSync(catalogo, JSON.stringify(cat, null, 2) + '\n')
    if (aba.produto === 'portal-da-cidade' && aba.publico) await vincular(id, { titulo: linha.topico, ...ficha }, aba.publico)
    produtos.add(aba.produto)
  } catch (e) { console.error(`${id}: ${e.message} (fica para a próxima rodada)`) }
  await dormir(3000)
}

// 6. Regenera e confere tudo; qualquer falha derruba a rodada (o workflow não comita).
node('scripts/resumos.mjs'); node('scripts/indice.mjs'); node('scripts/videos.mjs', '--offline')
for (const s of ['indice', 'resumos', 'tags']) node(`scripts/${s}.mjs`, '--conferir')
node('scripts/videos.mjs', '--offline', '--conferir')
console.log(`produtos=${[...produtos].join(',')}`)
