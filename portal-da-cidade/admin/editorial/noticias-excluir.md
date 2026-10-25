---
id: noticias-excluir
titulo: "excluir uma notícia"
publico:
  - admin
modulo: notícias
categoria: notícias
aba: Notícias
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - gAa2NdnitZU
---

## objetivo

Aqui você exclui uma notícia ou um grupo selecionado na página atual. A confirmação informa que a ação não pode ser desfeita.

## pré-requisitos

- Entrar no painel como administrador.

## passos

### uma notícia

1. Na seção `Conteúdo` do menu lateral, em `Notícias`, clique em `Listar Notícias`. [t=23] [guia=menu:/painel/noticias]
2. Digite o título em `Buscar por título...`. [t=25] [guia=noticias.buscar]
3. Na linha da notícia, clique na lixeira `Excluir`. [guia=noticias.excluir]
4. Na janela `Excluir notícia?`, clique em `Excluir`. [guia=confirmacao.confirmar]

### várias notícias

1. Na seção `Conteúdo` do menu lateral, em `Notícias`, clique em `Listar Notícias`. [t=23] [guia=menu:/painel/noticias]
2. Marque a caixa ao lado de cada notícia que deseja excluir nesta página. [guia=noticias.selecionar]
3. Clique em `Excluir N selecionadas`, na barra da seleção; N é a quantidade marcada. [guia=noticias.excluir-selecionadas]
4. Após conferir os títulos na confirmação `Excluir N notícias?`, clique em `Excluir N`. [guia=confirmacao.confirmar]

## resultado

As notícias excluídas saem da lista. A seleção em lote é limitada à página atual; mudar de página ou filtros limpa a seleção.

## desvios

- Com uma selecionada, o botão diz `Excluir 1 selecionada` e a confirmação diz `Excluir 1 notícia?`.
- Para apenas esconder, veja “tirar uma notícia do ar”, sem excluir.
- Se parte do lote falhar, leia o resultado da exclusão antes de tentar novamente.

## fontes

- `frontend/src/app/painel/noticias/page.tsx:489` — botão com quantidade.
- `frontend/src/app/painel/noticias/page.tsx:550` — seleção por notícia.
- `frontend/src/app/painel/noticias/page.tsx:622` — confirmação individual.
- `frontend/src/app/painel/noticias/page.tsx:636` — confirmação em lote.
- Vídeo `gAa2NdnitZU`, legenda em 23s–28s: lista e busca; não detalha exclusão.

## lacunas

Não executadas exclusões. Não foi confirmada a reimportação por RSS de notícia excluída; não se promete que excluir bloqueie importações futuras.
