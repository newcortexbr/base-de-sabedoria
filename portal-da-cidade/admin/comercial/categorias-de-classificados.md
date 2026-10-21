---
id: admin-categorias-de-classificados
titulo: "criar categorias de classificados"
publico:
  - admin
modulo: classificados
categoria: admin
aba: nao-se-aplica
tipo_problema:
  - categoria de anúncio
  - subcategoria de classificados
  - criar categoria classificados
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
aqui você cria as categorias e subcategorias que organizam os anúncios classificados.

## pré-requisitos

- Ter acesso de administrador ao painel.

## passos

1. No menu da esquerda, clique em `Classificados` e depois em `Categorias`. [guia=menu:/painel/classificados/categorias]
2. Clique em `+ Nova Categoria`. [guia=fora]
3. Escreva o `Nome *` e, se quiser, escolha a `Cor` e o `Ícone`. [guia=fora]
4. Clique em `Salvar`. [guia=fora]

## resultado
a categoria entra na lista como `Ativa`.

## desvios

- Para criar subcategoria, clique em `▼ Subs` na linha da categoria e depois em `+ Nova Subcategoria`.
- Desmarcar `Ativa` desliga a categoria sem apagar.
- Excluir uma categoria deixa os anúncios dela sem categoria.

## quando pedir ajuda

peça ajuda antes de excluir uma categoria com muitos anúncios.

## fontes

- `portal-cidade/frontend/src/app/painel/classificados/categorias/page.tsx:69-317` — botões, campos e confirmação.

## lacunas

tela não validada no navegador nesta tarefa.
