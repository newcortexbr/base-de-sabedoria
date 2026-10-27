---
id: excluir-subcategoria-do-guia
titulo: "excluir uma subcategoria do Guia"
publico:
  - admin
modulo: guia
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - excluir
  - subcategoria
  - guia
  - empresa
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
---

## objetivo

aqui você apaga uma subcategoria do Guia Comercial.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Gerenciar Subcategorias`. [guia=menu:/painel/guia/subcategorias]
2. Na linha da subcategoria, clique na lixeira (`Excluir`). [guia=guia-subcategorias.excluir]
3. Confira o aviso e clique em `Excluir`. [guia=confirmacao.confirmar]

## resultado

A subcategoria some. As empresas dela não são apagadas: ficam sem subcategoria, e o aviso mostra quantas.

## perguntas comuns

**As empresas são apagadas?** Não. Ficam sem subcategoria; dê uma nova a elas editando cada empresa.

## fontes

- portal-cidade/frontend/src/app/painel/guia/subcategorias/page.tsx:138-152,393,421.
- portal-cidade/frontend/src/components/painel/Sidebar.tsx:125-131.
