---
id: editorial-categorias
titulo: "criar categorias de notícias"
publico:
  - admin
modulo: notícias
categoria: conteúdo
aba: Categorias
tipo_problema: classificação
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - gAa2NdnitZU
---

## objetivo

Aqui você cria categorias de notícias. As categorias de Artigos, Turismo e Guia são organizadas em telas próprias.

## pré-requisitos

- Entrar no painel como administrador.

## passos

1. Na seção `Conteúdo` do menu lateral, em `Notícias`, clique em `Gerenciar Categorias`. [t=145] [guia=menu:/painel/noticias/categorias]
2. Clique em `+ Cadastrar Categoria`. [guia=noticias-categorias.cadastrar]
3. Preencha `Nome *`. [guia=noticias-categorias.nome]
4. Escolha a `Cor` pelo seletor de cor. [guia=noticias-categorias.cor]
5. Clique em `Salvar`. [guia=noticias-categorias.salvar]

## resultado

A tela mostra `Categoria salva` e atualiza a lista com nome, cor, quantidade de notícias e situação.

## desvios

- Subcategorias ficam em `Gerenciar Subcategorias`.
- Para trocar nome ou cor, pausar ou excluir, veja “editar, pausar ou excluir categorias de notícias”.
- Se o nome for recusado, leia o erro antes de tentar novamente.
- A tela não oferece campo de ordem nem destaque de categoria.

## fontes

- `frontend/src/components/painel/Sidebar.tsx:106` — menu.
- `frontend/src/app/painel/noticias/categorias/page.tsx:48` — dados enviados e salvamento.
- `frontend/src/app/painel/noticias/categorias/page.tsx:83` — nome, cor e botão.
- Vídeo `gAa2NdnitZU`, legenda em 145s–152s: visão geral das categorias.

## lacunas

Não executado no navegador. O vídeo apresenta a lista de categorias, sem detalhar seu cadastro.
