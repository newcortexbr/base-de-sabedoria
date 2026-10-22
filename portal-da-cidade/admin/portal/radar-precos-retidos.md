---
id: radar-precos-retidos
titulo: "resolver preços retidos do Radar de Preços"
publico:
  - admin
modulo: radar
categoria: radar
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-22
validacao: docs-e-codigo
---

## objetivo

aqui você decide o que fazer com preços que o portal leu das fotos mas não publicou porque pareceram estranhos.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## explicação

o portal segura um preço quando ele é mais que o dobro ou menos que a metade do preço que o produto já tinha naquele mercado, ou quando é muito diferente do que o morador digitou. A lista mostra o produto, o preço lido, o preço atual e o motivo.

## passos

1. No menu da esquerda, clique em `Radar de Preços` e depois em `Preços retidos`. [guia=menu:/painel/radar/retidos]
2. Se o preço lido está certo, clique em `Publicar`. [guia=radar-retidos.publicar]
3. Se está errado, clique em `Corrigir`, ajuste o `Nome do produto`, a `Categoria` ou o `Preço (R$)` e salve para publicar. [guia=radar-retidos.corrigir]
4. Se a foto não serve, clique em `Descartar` e confirme em `Descartar este preço?`. [guia=radar-retidos.descartar]

## resultado

preço publicado entra no site na hora. Descartado some da lista e não vai ao ar.

## quando pedir ajuda

peça ajuda se a lista não carregar ou se publicar der erro.

## fontes

- `portal-cidade/frontend/src/app/painel/radar/retidos/page.tsx:131`
- `portal-cidade/docs/RADAR-CONTRATO.md`

## lacunas

não verificado visualmente.
