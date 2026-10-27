---
id: excluir-categoria-ou-subcategoria-de-classificados
titulo: "excluir categoria ou subcategoria de Classificados"
publico:
  - admin
modulo: classificados
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - excluir
  - categoria
  - subcategoria
  - classificado
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
---

## objetivo

aqui você apaga uma categoria ou subcategoria de Classificados.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Classificados` e depois em `Categorias`. [guia=menu:/painel/classificados/categorias]
2. Para a categoria inteira: na linha dela, clique em `Excluir`. [guia=classificados-categorias.excluir]
3. Na pergunta `Excluir esta categoria? Os anúncios vinculados ficarão sem categoria.`, clique em `Excluir`. [guia=confirmacao.confirmar]

## excluir só uma subcategoria

1. Na linha da categoria, clique em `▼ Subs`. [guia=classificados-categorias.subs]
2. Na subcategoria, clique em `Excluir`. [guia=classificados-categorias.excluir-sub]
3. Na pergunta `Excluir esta subcategoria?`, clique em `Excluir`. [guia=confirmacao.confirmar]

## resultado

A categoria ou subcategoria some da lista. Anúncios da categoria apagada ficam sem categoria.

## perguntas comuns

**Os anúncios são apagados?** Não. Ficam sem categoria.
**Quero só esconder.** Edite a categoria e desmarque a opção de ativa, em vez de excluir. [guia=classificados-categorias.ativa]

## fontes

- portal-cidade/frontend/src/app/painel/classificados/categorias/page.tsx:107,215-240,289-297,331-336.
- portal-cidade/frontend/src/components/painel/Sidebar.tsx:164-170.

## lacunas

- O que acontece com os anúncios de uma subcategoria apagada não é dito na tela.
