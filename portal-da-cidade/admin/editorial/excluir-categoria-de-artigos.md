---
id: excluir-categoria-de-artigos
titulo: "excluir uma categoria de Artigos"
publico:
  - admin
modulo: Artigos
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - excluir
  - categoria
  - artigo
  - remover
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
---

## objetivo

aqui você apaga uma categoria de Artigos.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Artigos` e depois em `Categorias`. [guia=menu:/painel/blog/categorias]
2. Na linha da categoria, clique na lixeira (`Excluir`). [guia=blog-categorias.excluir]
3. Na janela `Excluir categoria`, clique em `Excluir`. [guia=confirmacao.confirmar]

## resultado

A categoria some. Os artigos dela ficam sem categoria e continuam publicados normalmente.

## perguntas comuns

**Os artigos da categoria são apagados?** Não. Só ficam sem categoria.

## fontes

- portal-cidade/frontend/src/app/painel/blog/categorias/page.tsx:156-166,229,243-252.
- portal-cidade/frontend/src/components/painel/Sidebar.tsx:192-199.

## lacunas

- Excluir não tem desfazer na tela; o código não oferece restauração.
