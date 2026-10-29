#!/usr/bin/env node
// Embute videos/resumos/<id>.json (resumo, cobre, telas, nao_cobre) em cada <produto>/videos.json, que é o que o portal lê.
// Uso: node scripts/resumos.mjs [--conferir]   (--conferir só compara, sem gravar)
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs'
import { join, resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const RAIZ = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const conferir = process.argv.includes('--conferir')
const CAMPOS = ['resumo', 'cobre', 'telas', 'nao_cobre']
let desatualizado = false

for (const produto of readdirSync(RAIZ, { withFileTypes: true }).filter(d => d.isDirectory())) {
  const arq = join(RAIZ, produto.name, 'videos.json')
  if (!existsSync(arq)) continue
  const cat = JSON.parse(readFileSync(arq, 'utf8'))
  let n = 0
  for (const v of cat.videos ?? []) {
    const r = join(RAIZ, 'videos', 'resumos', v.id + '.json')
    for (const c of CAMPOS) delete v[c]
    if (!existsSync(r)) continue
    const d = JSON.parse(readFileSync(r, 'utf8'))
    for (const c of CAMPOS) if (d[c] !== undefined) v[c] = d[c]
    n++
  }
  const novo = JSON.stringify(cat, null, 2) + '\n'
  if (novo !== readFileSync(arq, 'utf8')) { desatualizado = true; if (!conferir) writeFileSync(arq, novo) }
  console.log(produto.name + ': ' + n + ' vídeo(s) com resumo')
}
if (conferir && desatualizado) { console.error('videos.json desatualizado: rode node scripts/resumos.mjs'); process.exit(1) }
