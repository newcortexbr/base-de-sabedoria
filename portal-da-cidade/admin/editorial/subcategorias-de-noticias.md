---
id: admin-subcategorias-de-noticias
titulo: "criar subcategorias de notícias"
publico:
  - admin
modulo: noticias
categoria: admin
aba: nao-se-aplica
tipo_problema:
  - subcategoria de notícia
  - criar subcategoria
  - assunto dentro da categoria
tags:
  - subcategoria
  - noticia
  - categoria
  - criar
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - gAa2NdnitZU
---

## objetivo

Aqui você cria um assunto dentro de uma categoria de notícias, como Futebol dentro de Esportes.

## pré-requisitos

- Entrar no painel como administrador.
- Ter a categoria criada.

## passos

1. Na seção `Conteúdo` do menu lateral, em `Notícias`, clique em `Gerenciar Subcategorias`. [t=150] [guia=menu:/painel/noticias/subcategorias]
2. Clique em `+ Cadastrar Subcategoria`. [guia=noticias-subcategorias.cadastrar]
3. Em `Categoria *`, escolha a categoria. [guia=noticias-subcategorias.categoria]
4. Preencha `Nome *`. [guia=noticias-subcategorias.nome]
5. Clique em `Salvar`. [guia=noticias-subcategorias.salvar]

## resultado

A tela mostra `Subcategoria salva` e atualiza a lista.

## desvios

Para mudar nome ou categoria, pausar ou excluir, veja “editar, pausar ou excluir subcategorias de notícias”. O filtro `Todas as categorias` reduz a lista à categoria escolhida.

## fontes

- `frontend/src/components/painel/Sidebar.tsx:107` — menu.
- `frontend/src/app/painel/noticias/subcategorias/page.tsx:47` — envio do nome e categoria.
- `frontend/src/app/painel/noticias/subcategorias/page.tsx:85` — ordem dos campos.
- Vídeo `gAa2NdnitZU`, legenda em 150s–155s: função das subcategorias.

## lacunas

Não executado no navegador. O vídeo cita subcategorias, sem detalhar o formulário.
