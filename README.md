# base de sabedoria New Cortex

um diretório por produto na raiz. cada um tem o próprio `README.md` com o índice legível.

| produto | pasta | quem lê |
|---|---|---|
| Portal da Cidade | [`portal-da-cidade/`](portal-da-cidade/README.md) | chat de suporte do portal (admin, cliente, usuário) |
| Área do Cliente | [`area-do-cliente/`](area-do-cliente/README.md) | chat de suporte da Área do Cliente (cliente New Cortex) |

## busca rápida

`indice.json` (raiz) tem um registro por artigo de todos os produtos: `id`, `base` (pasta do produto), `caminho`, `titulo`, `objetivo`, `produto` (quando o artigo vale só para um produto da New Cortex), `modulo`, `aba`, `tipos`, `videos` e `termos` (palavras sem acento, já normalizadas). ids são únicos na base inteira.

- gerar depois de mexer em artigo: `node scripts/indice.mjs`
- conferir sem gravar (CI): `node scripts/indice.mjs --conferir`

próximo passo previsto (não feito): carregar `indice.json` num SQLite com FTS5 para busca por relevância, com cache por id.

## regras

- `interno/` e `mapa/` dentro de um produto não são artigos de atendimento: nunca vão ao chat.
- formato de artigo: frontmatter (`id`, `titulo`, `publico`, `modulo`, `aba`, `tipo_problema`, `videos`, opcional `produto`) e seções `## objetivo`, `## passos` etc. Ver o README de cada produto.
- na Área do Cliente, artigo com `produto:` só aparece para quem tem aquele produto.
