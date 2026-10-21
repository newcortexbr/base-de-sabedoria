#!/usr/bin/env node
// Gera indice.json na raiz: um registro por artigo de cada produto (pastas da raiz com artigos .md).
// Sem dependências. Uso: node scripts/indice.mjs  (rodar a cada mudança de artigo; a CI pode conferir com --conferir)
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join, relative, resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const RAIZ = resolve(dirname(fileURLToPath(import.meta.url)), '..')
// Pastas que não são artigos de atendimento (relatórios, mapa de telas).
const FORA = new Set(['interno', 'mapa', 'conteudo', 'scripts', '.git', 'node_modules'])
const VAZIAS = new Set('como que para por com uma umas uns dos das nos nas meu minha meus minhas seu sua isso esse essa este esta onde quando qual quais quero queria posso pode fazer tem ter nao sim mais muito sobre aqui ali'.split(' '))

const normalizar = t => t.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
const termos = t => [...new Set(normalizar(t).split(/[^a-z0-9]+/).filter(p => p.length >= 3 && !VAZIAS.has(p)))]

function arquivosMd(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap(e => {
    if (e.isDirectory()) return FORA.has(e.name) ? [] : arquivosMd(join(dir, e.name))
    return e.name.endsWith('.md') && !/^README/i.test(e.name) ? [join(dir, e.name)] : []
  })
}

function ler(caminho) {
  const m = readFileSync(caminho, 'utf8').match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
  if (!m) return null
  const [, cabeca, corpo] = m
  const campo = n => (cabeca.match(new RegExp(`^${n}:\\s*(.+)$`, 'm'))?.[1].trim() ?? '').replace(/^(["'])(.*)\1$/, '$2')
  const lista = n => [...(cabeca.match(new RegExp(`^${n}:\\s*\\n((?:\\s+-\\s*.+\\n?)+)`, 'm'))?.[1] ?? '').matchAll(/-\s*(.+)/g)].map(x => x[1].trim())
  const id = campo('id'), titulo = campo('titulo')
  if (!id || !titulo) return null
  const objetivo = (corpo.match(/## objetivo\n([\s\S]*?)(\n## |$)/)?.[1] ?? '').trim()
  const tipos = lista('tipo_problema')
  return {
    id, titulo, objetivo,
    publico: lista('publico'),
    produto: campo('produto') || null,
    modulo: campo('modulo'), aba: campo('aba'), tipos, videos: lista('videos'),
    status: campo('status'), revisado_em: campo('revisado_em'),
    termos: termos([titulo, campo('modulo'), campo('aba'), ...tipos, objetivo].join(' ').replace(/-/g, ' ')),
  }
}

const produtos = readdirSync(RAIZ, { withFileTypes: true })
  .filter(e => e.isDirectory() && !FORA.has(e.name) && !e.name.startsWith('.'))
  .map(e => e.name).sort()

const artigos = []
const ids = new Map()
for (const produto of produtos) {
  for (const arq of arquivosMd(join(RAIZ, produto)).sort()) {
    const a = ler(arq)
    if (!a) continue
    const caminho = relative(RAIZ, arq)
    if (ids.has(a.id)) { console.error(`id repetido: ${a.id} em ${caminho} e ${ids.get(a.id)}`); process.exitCode = 1 }
    ids.set(a.id, caminho)
    artigos.push({ ...a, base: produto, caminho })
  }
}

const indice = {
  gerado_em: new Date().toISOString().slice(0, 10),
  produtos: Object.fromEntries(produtos.map(p => [p, artigos.filter(a => a.base === p).length])),
  total: artigos.length,
  artigos,
}
const saida = join(RAIZ, 'indice.json')
const novo = JSON.stringify(indice, null, 1) + '\n'
if (process.argv.includes('--conferir')) {
  const atual = existsSync(saida) ? readFileSync(saida, 'utf8') : ''
  const semData = s => s.replace(/"gerado_em": "[^"]*"/, '')
  if (semData(atual) !== semData(novo)) { console.error('indice.json desatualizado: rode node scripts/indice.mjs'); process.exit(1) }
  console.log('indice.json em dia')
} else {
  writeFileSync(saida, novo)
  // README de produto com a marca abaixo é gerado daqui (agrupado por módulo); os outros são escritos à mão.
  const MARCA = '<!-- gerado por scripts/indice.mjs: não editar à mão -->'
  for (const p of produtos) {
    const arq = join(RAIZ, p, 'README.md')
    if (existsSync(arq) && !readFileSync(arq, 'utf8').startsWith(MARCA)) continue
    const doProduto = artigos.filter(a => a.base === p)
    const modulos = [...new Set(doProduto.map(a => a.modulo || 'geral'))].sort()
    const linhas = [MARCA, `# índice — ${p}`, '', `${doProduto.length} artigos. artigo com \`produto\` só vale para quem tem aquele produto.`, '']
    for (const m of modulos) {
      const lista = doProduto.filter(a => (a.modulo || 'geral') === m)
      linhas.push(`## ${m} (${lista.length})`, '')
      for (const a of lista) linhas.push(`- [${a.titulo}](${relative(join(RAIZ, p), join(RAIZ, a.caminho))}) — \`${a.id}\`${a.produto ? ` · produto \`${a.produto}\`` : ''}`)
      linhas.push('')
    }
    writeFileSync(arq, linhas.join('\n'))
  }
  console.log(`indice.json: ${artigos.length} artigos (${produtos.map(p => `${p} ${indice.produtos[p]}`).join(', ')})`)
}
