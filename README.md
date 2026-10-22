# base de sabedoria New Cortex

um diretório por produto na raiz. cada um tem o próprio `README.md` com o índice legível.

| produto | pasta | quem lê |
|---|---|---|
| Portal da Cidade | [`portal-da-cidade/`](portal-da-cidade/README.md) | chat de suporte do portal (admin, cliente, usuário) |
| Área do Cliente | [`area-do-cliente/`](area-do-cliente/README.md) | chat de suporte da Área do Cliente (cliente New Cortex) |
| Extrator Maps | [`extrator-maps/`](extrator-maps/README.md) | cliente que usa o Extrator Google Maps (ids `ext-*`) |
| Dados PJ | [`dados-pj/`](dados-pj/README.md) | cliente que usa o Dados PJ (ids `pj-*`) |

## busca rápida

`indice.json` (raiz) tem um registro por artigo de todos os produtos: `id`, `base` (pasta do produto), `caminho`, `titulo`, `objetivo`, `produto` (quando o artigo vale só para um produto da New Cortex), `modulo`, `aba`, `tipos`, `videos` e `termos` (palavras sem acento, já normalizadas). ids são únicos na base inteira.

- gerar depois de mexer em artigo: `node scripts/indice.mjs`
- conferir sem gravar (CI): `node scripts/indice.mjs --conferir`

próximo passo previsto (não feito): carregar `indice.json` num SQLite com FTS5 para busca por relevância, com cache por id.

## regras

- `interno/` e `mapa/` dentro de um produto não são artigos de atendimento: nunca vão ao chat.
- formato de artigo: frontmatter (`id`, `titulo`, `publico`, `modulo`, `aba`, `tipo_problema`, `videos`, opcional `produto`) e seções `## objetivo`, `## passos` etc. Ver o README de cada produto.
- na Área do Cliente, artigo com `produto:` só aparece para quem tem aquele produto.

## vídeos

`videos/` reúne os vídeos da planilha de vídeos da New Cortex (7 abas). Não é produto e fica fora do `indice.json` de artigos.

- `videos/indice.json` e `videos/README.md`: índice **mutável**, um registro por linha da planilha (status, link, produto, legenda, artigos que citam) e uma visão `por_video`. Regenerar com `node scripts/videos.mjs` (baixa as abas e grava snapshots em `videos/planilha/`; `--offline` usa os snapshots; `--conferir` só compara).
- `videos/conteudo/<id>.md`: transcrição = conteúdo do vídeo (**durável**).
- `videos/legendas/` e `videos/meta/<id>.json`: legenda bruta baixada e metadados do YouTube (título, duração, data, fonte da legenda).
- `catalogo-videos.md` está superado por `videos/`.
