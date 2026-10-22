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
revisado_em: 2026-10-22
validacao: docs-e-codigo
---

## objetivo

aqui você apaga de vez uma notícia, ou várias de uma vez.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

**uma notícia**

1. No menu da esquerda, na parte `Conteúdo`, clique em `Notícias` e depois em `Listar Notícias`. [guia=menu:/painel/noticias]
2. Ache a notícia pelo campo de busca. [guia=noticias.buscar]
3. Na linha da notícia, clique na lixeira. [guia=noticias.excluir]
4. Em `Excluir notícia?`, clique em `Excluir`.

**várias notícias**

1. Na lista, marque as caixinhas das notícias. Aparece uma barra no topo com a quantidade marcada.
2. Clique em `Excluir` na barra e confira o número em `Excluir N notícias?`. Só vale para as marcadas **nesta página**.
3. Confirme em `Excluir N`.

## resultado

a notícia sai da lista e do site.

## desvios

- excluir **não tem volta**. Se só quer tirar do ar, mude a situação da notícia para rascunho ou arquivada (veja "editar uma notícia").
- notícia trazida por RSS que você exclui pode voltar se a fonte ainda estiver ligada e a trouxer de novo; desligue a fonte se não quiser (veja "ligar ou desligar uma fonte de RSS").

## fontes

- `portal-cidade/frontend/src/app/painel/noticias/page.tsx:595`
- `portal-cidade/frontend/src/app/painel/noticias/page.tsx:621`
- `portal-cidade/frontend/src/app/painel/noticias/page.tsx:636`

## lacunas

não verificado visualmente. A volta de notícia excluída pelo RSS é inferência do desenho do RSS (identificador externo), não foi testada.
