#!/usr/bin/env node
// Índice MUTÁVEL dos vídeos da planilha New Cortex. Sem dependências.
// Uso: node scripts/videos.mjs [--offline] [--conferir]
//   (padrão)   baixa as abas, grava videos/planilha/<aba>.csv, videos/indice.json e videos/README.md
//   --offline  usa os snapshots de videos/planilha/ em vez de baixar
//   --conferir compara com o que está gravado, sem gravar (ignora a data)
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs'
import { join, resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

// ---- configuração ----
const PLANILHA = '1T-8uwGcdqZxnH0W3l86UP6S8v5IeeIX7fwVUuH7f5Uc'
const ABAS = [ // [slug do snapshot, gid, produto]
  ['painel-admin', 1014831656, 'portal-da-cidade'],
  ['area-empresa-parceiro-portal', 1923457458, 'portal-da-cidade'],
  ['sistema-dados-pj', 935621533, 'dados-pj'],
  ['extrator-google-maps', 1086361894, 'extrator-maps'],
  ['claude-videos-basicos-area-do-cliente', 615353814, 'area-do-cliente'],
  ['conteudos-treinamento-do-franqueado', 1344777380, 'treinamento-do-franqueado'],
  ['paginas-de-vendas', 646835390, 'vendas'],
]
// Observações apuradas por linha (chave "slug:id_planilha"), herdadas do catálogo de 2026-10-21.
const OBS = {
  'painel-admin:5': 'coluna Drive aponta a versão antiga JdJr7pXVx98 (fica no catálogo como 2º nos artigos do Guia).',
  'painel-admin:6': 'mesmo vídeo da aba extrator-google-maps, linha 3.',
  'claude-videos-basicos-area-do-cliente:1': 'sem link: pendente na Área do Cliente.',
}
// ----------------------

const RAIZ = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const V = join(RAIZ, 'videos')
const args = process.argv.slice(2)
const offline = args.includes('--offline'), conferir = args.includes('--conferir')

function csv(t) { // RFC 4180 simples (aspas, vírgulas e quebras dentro de campo)
  const rows = []; let row = [], cur = '', q = false
  for (let i = 0; i < t.length; i++) {
    const c = t[i]
    if (q) { if (c === '"') { if (t[i + 1] === '"') { cur += '"'; i++ } else q = false } else cur += c }
    else if (c === '"') q = true
    else if (c === ',') { row.push(cur); cur = '' }
    else if (c === '\n' || c === '\r') { if (c === '\r' && t[i + 1] === '\n') i++; row.push(cur); rows.push(row); row = []; cur = '' }
    else cur += c
  }
  if (cur || row.length) { row.push(cur); rows.push(row) }
  return rows.filter(r => r.some(x => x.trim())).map(r => r.map(s => s.trim()))
}
const ytId = s => s?.match(/(?:youtu\.be\/|[?&]v=|\/shorts\/)([A-Za-z0-9_-]{11})/)?.[1] ?? null
const lerJson = (p, d) => { try { return JSON.parse(readFileSync(p, 'utf8')) } catch { return d } }
const norm = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()

async function obterCsv(slug, gid) {
  const arq = join(V, 'planilha', slug + '.csv')
  if (offline) return readFileSync(arq, 'utf8')
  const r = await fetch(`https://docs.google.com/spreadsheets/d/${PLANILHA}/export?format=csv&gid=${gid}`)
  if (!r.ok) throw new Error(`aba ${slug} (gid ${gid}): HTTP ${r.status}`)
  let t = new TextDecoder('utf-8').decode(await r.arrayBuffer()).replace(/^\uFEFF/, '')
  if (/Ã[\u0080-\u00bf]/.test(t)) t = Buffer.from(t, 'latin1').toString('utf8') // mojibake: UTF-8 lido como latin1
  return t
}

const indiceArt = lerJson(join(RAIZ, 'indice.json'), { artigos: [] })
const acMapa = lerJson(join(RAIZ, 'area-do-cliente', 'videos-por-artigo.json'), {})
const artigosDe = id => [...new Set([
  ...indiceArt.artigos.filter(a => (a.videos ?? []).includes(id)).map(a => a.id),
  ...Object.entries(acMapa).filter(([, v]) => Array.isArray(v) && v.includes(id)).map(([k]) => k),
])].sort()

function enriquecer(id) {
  const meta = lerJson(join(V, 'meta', id + '.json'), null)
  const conteudo = existsSync(join(V, 'conteudo', id + '.md')) ? `videos/conteudo/${id}.md` : null
  return {
    titulo_youtube: meta?.titulo_youtube ?? null, duracao_s: meta?.duracao_s ?? null,
    upload_date: meta?.upload_date ?? null, legenda_fonte: meta?.legenda?.fonte ?? null,
    conteudo,
  }
}

const registros = [], csvs = {}
for (const [slug, gid, produto] of ABAS) {
  const texto = await obterCsv(slug, gid)
  csvs[slug] = texto
  const [cab = [], ...linhas] = csv(texto)
  const col = (...nomes) => cab.findIndex(c => nomes.some(n => norm(c).startsWith(n)))
  const ci = { id: col('id'), top: col('topico'), grav: col('status de grav'), edi: col('status de edi'), thumb: col('status de cria'), pub: col('status de publ'), drive: col('link drive', 'link da p'), yt: col('link youtube') }
  const v = (l, k) => ci[k] < 0 ? null : (l[ci[k]] || null)
  linhas.forEach((l, i) => {
    const idp = v(l, 'id'), topico = v(l, 'top'), yt = ytId(v(l, 'yt'))
    let obs = OBS[`${slug}:${idp}`] ?? null
    if (!obs && !topico && !yt) obs = 'linha sem tópico na planilha (reservada).'
    else if (!obs && topico && !yt) obs = 'sem link do YouTube.'
    const artigos = yt ? artigosDe(yt) : []
    if (yt && !artigos.length && !obs) obs = 'publicado, sem artigo vinculado.'
    registros.push({
      aba: slug, gid, linha: i + 2, id_planilha: idp ? Number(idp) : null, topico,
      status: { gravacao: v(l, 'grav'), edicao: v(l, 'edi'), thumbnail: v(l, 'thumb'), publicacao: v(l, 'pub') },
      youtube_id: yt, link_drive_ou_pagina: v(l, 'drive'), produto, observacao: obs,
      ...(yt ? enriquecer(yt) : {}), artigos,
    })
  })
}

const pub = r => r.status.publicacao === 'Publicado'
const tot = rs => ({
  linhas: rs.length, com_topico: rs.filter(r => r.topico).length, com_link: rs.filter(r => r.youtube_id).length,
  publicadas: rs.filter(pub).length, com_legenda: rs.filter(r => r.conteudo).length, com_artigo: rs.filter(r => r.artigos.length).length,
})
const por_video = {}
for (const r of registros.filter(r => r.youtube_id)) {
  const o = (por_video[r.youtube_id] ??= { youtube_id: r.youtube_id, ...enriquecer(r.youtube_id), artigos: r.artigos, linhas: [] })
  o.linhas.push({ aba: r.aba, linha: r.linha, id_planilha: r.id_planilha, topico: r.topico, produto: r.produto })
}
// vídeo do YouTube citado só na coluna Drive/página (ex.: versão antiga): entra como secundário.
for (const r of registros) {
  const sec = ytId(r.link_drive_ou_pagina)
  if (!sec || sec === r.youtube_id) continue
  const o = (por_video[sec] ??= { youtube_id: sec, ...enriquecer(sec), artigos: artigosDe(sec), linhas: [] })
  o.linhas.push({ aba: r.aba, linha: r.linha, id_planilha: r.id_planilha, topico: r.topico, produto: r.produto, papel: 'secundario (coluna drive/pagina)' })
}
const por = (chave, vals) => Object.fromEntries(vals.map(x => [x, tot(registros.filter(r => r[chave] === x))]))
const indice = {
  gerado_em: new Date().toISOString().slice(0, 10),
  planilha: `https://docs.google.com/spreadsheets/d/${PLANILHA}`,
  totais: { geral: { ...tot(registros), ids_distintos: Object.keys(por_video).length },
    por_aba: por('aba', ABAS.map(a => a[0])), por_produto: por('produto', [...new Set(ABAS.map(a => a[2]))]) },
  registros,
  por_video: Object.values(por_video),
}

const L = ['<!-- gerado por scripts/videos.mjs -->', '# vídeos New Cortex', '',
  `fonte: [planilha de vídeos](${indice.planilha}). índice mutável: \`videos/indice.json\` (regenerar com \`node scripts/videos.mjs\`; \`--offline\` usa \`videos/planilha/\`). transcrições (conteúdo durável) em \`videos/conteudo/<id>.md\`; metadados em \`videos/meta/<id>.json\`; legendas brutas em \`videos/legendas/\`.`, '',
  '## por aba', '', '| aba | produto | linhas | com tópico | com link | publicadas | com legenda | com artigo |', '|---|---|---|---|---|---|---|---|']
for (const [slug, , prod] of ABAS) { const t = indice.totais.por_aba[slug]; L.push(`| ${slug} | ${prod} | ${t.linhas} | ${t.com_topico} | ${t.com_link} | ${t.publicadas} | ${t.com_legenda} | ${t.com_artigo} |`) }
L.push('', '## por produto', '', '| produto | linhas | com tópico | com link | publicadas | com legenda | com artigo |', '|---|---|---|---|---|---|---|')
for (const [p, t] of Object.entries(indice.totais.por_produto)) L.push(`| ${p} | ${t.linhas} | ${t.com_topico} | ${t.com_link} | ${t.publicadas} | ${t.com_legenda} | ${t.com_artigo} |`)
const g = indice.totais.geral
L.push('', `total: ${g.linhas} linhas, ${g.com_topico} com tópico, ${g.com_link} com link (${g.ids_distintos} ids distintos), ${g.publicadas} publicadas, ${g.com_legenda} com legenda, ${g.com_artigo} com artigo.`, '', '## tópicos sem link', '')
for (const r of registros.filter(r => r.topico && !r.youtube_id)) L.push(`- ${r.aba} #${r.id_planilha}: ${r.topico}`)
L.push('', '## links com observação', '')
for (const r of registros.filter(r => r.youtube_id && r.observacao)) L.push(`- ${r.aba} #${r.id_planilha} \`${r.youtube_id}\`: ${r.observacao}`)
L.push('')

const jsonNovo = JSON.stringify(indice, null, 1) + '\n', mdNovo = L.join('\n')
const semData = s => s.replace(/"gerado_em": "[^"]*"/, '')
if (conferir) {
  const a = existsSync(join(V, 'indice.json')) ? readFileSync(join(V, 'indice.json'), 'utf8') : ''
  const m = existsSync(join(V, 'README.md')) ? readFileSync(join(V, 'README.md'), 'utf8') : ''
  const snaps = ABAS.every(([s]) => !existsSync(join(V, 'planilha', s + '.csv')) || readFileSync(join(V, 'planilha', s + '.csv'), 'utf8') === csvs[s])
  if (semData(a) !== semData(jsonNovo) || m !== mdNovo || !snaps) { console.error('videos/ desatualizado: rode node scripts/videos.mjs'); process.exit(1) }
  console.log('videos/ em dia')
} else {
  mkdirSync(join(V, 'planilha'), { recursive: true })
  if (!offline) for (const [s] of ABAS) writeFileSync(join(V, 'planilha', s + '.csv'), csvs[s])
  writeFileSync(join(V, 'indice.json'), jsonNovo); writeFileSync(join(V, 'README.md'), mdNovo)
  console.log(`${g.linhas} linhas, ${g.ids_distintos} ids distintos`)
}
