#!/usr/bin/env node
// Confere 'tags:' dos artigos de portal-da-cidade/admin e cliente: 4 a 10, do vocabulário, sem duplicata.
// Uso: node scripts/tags.mjs [--conferir]  (sem flag só lista as faltas)
import { readdirSync, readFileSync } from 'node:fs'
import { join, relative, resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const RAIZ = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const vocab = new Set(JSON.parse(readFileSync(join(RAIZ, 'scripts/tags-vocabulario.json'), 'utf8')).map(t => t.tag))
const md = d => readdirSync(d, { withFileTypes: true }).flatMap(e =>
  e.isDirectory() ? md(join(d, e.name)) : e.name.endsWith('.md') && !/^README/i.test(e.name) ? [join(d, e.name)] : [])

const faltas = []
for (const pasta of ['admin', 'cliente']) {
  for (const arq of md(join(RAIZ, 'portal-da-cidade', pasta)).sort()) {
    const cab = readFileSync(arq, 'utf8').match(/^---\n([\s\S]*?)\n---/)?.[1] ?? ''
    const bloco = cab.match(/^tags:\s*\n((?:\s+-\s*.+\n?)+)/m)?.[1]
    const nome = relative(RAIZ, arq)
    if (!bloco) { faltas.push(`${nome}: sem tags`); continue }
    const t = [...bloco.matchAll(/-\s*(.+)/g)].map(x => x[1].trim().replace(/^(["'])(.*)\1$/, '$2'))
    if (t.length < 4 || t.length > 10) faltas.push(`${nome}: ${t.length} tags (precisa 4 a 10)`)
    const fora = t.filter(x => !vocab.has(x)); if (fora.length) faltas.push(`${nome}: fora do vocabulário: ${fora.join(', ')}`)
    const dup = t.filter((x, i) => t.indexOf(x) !== i); if (dup.length) faltas.push(`${nome}: duplicada: ${[...new Set(dup)].join(', ')}`)
  }
}
faltas.forEach(f => console.log(f))
console.log(`${faltas.length} problema(s)`)
if (process.argv.includes('--conferir') && faltas.length) process.exit(1)
