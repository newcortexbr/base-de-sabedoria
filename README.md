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
- admin e cliente nunca dividem artigo: o que existe para os dois tem um artigo de admin (painel) e outro de cliente (área do cliente). artigo de admin não reusa artigo, caminho, rótulo nem vídeo da área do cliente. `node scripts/indice.mjs` falha se um artigo de admin tiver outro público ou vídeo só das abas de cliente da planilha.
- formato de artigo: frontmatter (`id`, `titulo`, `publico`, `modulo`, `aba`, `tipo_problema`, `videos`, opcional `produto`) e seções `## objetivo`, `## passos` etc. Ver o README de cada produto.
- na Área do Cliente, artigo com `produto:` só aparece para quem tem aquele produto.

## vídeos

`videos/` reúne os vídeos da planilha de vídeos da New Cortex (7 abas). Não é produto e fica fora do `indice.json` de artigos.

- `videos/indice.json` e `videos/README.md`: índice **mutável**, um registro por linha da planilha (status, link, produto, legenda, artigos que citam) e uma visão `por_video`. Regenerar com `node scripts/videos.mjs` (baixa as abas e grava snapshots em `videos/planilha/`; `--offline` usa os snapshots; `--conferir` só compara).
- `videos/conteudo/<id>.md`: transcrição = conteúdo do vídeo (**durável**).
- `videos/legendas/` e `videos/meta/<id>.json`: legenda bruta baixada e metadados do YouTube (título, duração, data, fonte da legenda).
- `catalogo-videos.md` está superado por `videos/`.
- `videos/abas.json`: aba da planilha (gid) -> produto da base. Aba nova entra sozinha com `produto` vazio: os vídeos dela são transcritos, mas só entram num catálogo depois que alguém preencher o produto.

### atualização automática

O workflow `atualizar-videos` roda de 5 em 5 h no i7 (runner `vps`) e chama `node scripts/atualizar-videos.mjs`: lê as abas da planilha, acha os ids sem `videos/conteudo/`, baixa só essas legendas, pede o resumo ao Claude (`claude-opus-5-5`), põe o vídeo no `<produto>/videos.json` e, no portal, liga a até 3 artigos do público da aba. Depois roda os conferidores, comita na `main` com `[skip ci]` e `scripts/pr-produtos.sh` abre PR na Área do Cliente (sempre), no Extrator e no Dados PJ (quando o produto deles mudou). O portal lê a base direto no deploy.

Secrets do repo: `ANTHROPIC_API_KEY` (obrigatório) e `PRODUTOS_TOKEN` (PAT com contents e pull requests de escrita em `area-clientes`, `extrator_maps` e `dadospj-backend`; sem ele os PRs são pulados com aviso). Local: `npm ci` e `ANTHROPIC_API_KEY=... node scripts/atualizar-videos.mjs`.

## tags

Artigos de `portal-da-cidade/admin` e `cliente` levam `tags:` no frontmatter (lista YAML como `tipo_problema`): 4 a 10 itens, minúsculas, sem acento, só do vocabulário `scripts/tags-vocabulario.json` (`{"tag","sinonimos"}`, sinônimos são como o leigo fala). Entram nos termos de busca de `indice.json`. `node scripts/tags.mjs` lista as faltas; `--conferir` sai com 1 se houver.
