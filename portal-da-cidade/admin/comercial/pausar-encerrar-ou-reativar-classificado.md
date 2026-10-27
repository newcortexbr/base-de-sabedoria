---
id: admin-pausar-encerrar-ou-reativar-classificado
titulo: "pausar, encerrar ou reativar um anúncio classificado pelo painel"
publico:
  - admin
modulo: classificados
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - pausar
  - reativar
  - classificado
  - anuncio
  - status
  - no ar
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
---

## objetivo

tirar um anúncio classificado do ar por um tempo, encerrá-lo ou colocá-lo de volta, sem excluir.

## passos

1. No menu, clique em `Classificados`. [guia=menu:/painel/classificados]
2. Para encerrar ou reativar, clique no botão de status na linha do anúncio. [guia=fora]
3. Para pausar, clique em `Editar`, troque o status para `Pausado` e clique em `Salvar alterações`. [guia=classificados.editar]

## explicação

- botão de status da lista: anúncio `ativo` passa a `encerrado`; qualquer outro estado passa a `ativo`.
- `Pausado` e `Encerrado` tiram o anúncio do site sem apagar fotos nem texto; para voltar, use `Ativo`.
- vendido tem botão próprio; veja "marcar um classificado como vendido".
- apagar de vez: veja "excluir um anúncio classificado".

## fontes

- `portal-cidade/frontend/src/app/painel/classificados/page.tsx:182-192`
- `portal-cidade/frontend/src/app/painel/classificados/AnuncioForm.tsx:546-552`
