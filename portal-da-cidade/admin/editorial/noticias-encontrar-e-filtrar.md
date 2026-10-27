---
id: editorial-noticias-encontrar-e-filtrar
titulo: "encontrar e filtrar notícias na lista"
publico:
  - admin
modulo: notícias
categoria: conteúdo
aba: Notícias
tipo_problema: publicação
tags:
  - noticia
  - lista
  - ver
  - categoria
  - status
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - gAa2NdnitZU
---

## objetivo

Aqui você encontra notícias pelo título, situação, categoria, subcategoria e período de publicação.

## pré-requisitos

- Entrar no painel como administrador.

## passos

1. Na seção `Conteúdo` do menu lateral, em `Notícias`, clique em `Listar Notícias`. [t=23] [guia=menu:/painel/noticias]
2. Digite o título em `Buscar por título...`. [t=25] [guia=noticias.buscar]
3. Se quiser, escolha `Publicado`, `Rascunho` ou `Arquivado` na caixa `Todos os status`. [t=28] [guia=noticias.status]
4. Se quiser, escolha uma opção em `Todas as categorias`. [t=28] [guia=noticias.categoria]
5. Se quiser, escolha uma opção em `Todas as subcategorias`. [t=30] [guia=noticias.subcategoria]
6. Se quiser limitar o início do período, preencha `Publicada de`. [t=30] [guia=noticias.publicada-de]
7. Se quiser limitar o fim do período, preencha `Publicada até`. [t=30] [guia=noticias.publicada-ate]
8. Confira a situação da notícia na coluna `Status`. [t=36] [guia=noticias.status-linha]

## resultado

A lista reúne as notícias que atendem aos filtros. Publicadas com data futura mostram `agendado`; as outras situações aparecem como `Publicado`, `Rascunho` ou `Arquivado`.

## desvios

- `Todos os status` remove o filtro de situação.
- O filtro `Publicado` também pode incluir notícias agendadas.
- O botão `Limpar filtros`, acompanhado da quantidade de filtros ativos, limpa os filtros da lista.
- Esses filtros pertencem à lista administrativa; não são a busca pública do site.

## fontes

- `frontend/src/app/painel/noticias/page.tsx:24` — identificação de agendado.
- `frontend/src/app/painel/noticias/page.tsx:391` — busca.
- `frontend/src/app/painel/noticias/page.tsx:401` — filtros e datas.
- `frontend/src/app/painel/noticias/page.tsx:568` — status da linha.
- Vídeo `gAa2NdnitZU`, legenda em 23s–38s.

## lacunas

Não executado no navegador; não verificadas combinações reais de filtros com dados do portal.
