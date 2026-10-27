---
id: corrigir-preco-radar
titulo: "corrigir ou remover o preço de um estabelecimento no Radar"
publico:
  - admin
modulo: radar
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - editar
  - remover
  - excluir
  - preco
  - radar
  - mercado
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - VhMHVZujDvQ
---

## objetivo

Corrija o preço de um produto em um estabelecimento sem alterar os demais.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Conteúdo` do menu, em `Radar de Preços`, clique em `Produtos e preços`. [guia=menu:/painel/radar/produtos]
2. Clique em `Ver preços` no produto desejado. [guia=radar-produtos.apagar]
3. Na linha do estabelecimento, clique em `Editar`.  [t=32] [guia=radar-preco.editar]
4. Preencha o campo `Novo preço em` seguido do nome do estabelecimento.  [t=32] [guia=radar-preco.valor]
5. Clique em `Salvar`.  [guia=radar-preco.salvar]

## resultado

O preço daquele estabelecimento é atualizado.

## remover somente um preço

1. Na parte `Conteúdo` do menu, em `Radar de Preços`, clique em `Produtos e preços`. [guia=menu:/painel/radar/produtos]
2. Clique em `Ver preços` no produto desejado. [guia=radar-produtos.apagar]
3. Na linha do estabelecimento, clique na lixeira `Remover o preço em` seguida do nome dele.  [t=34] [guia=radar-preco.remover]

A remoção é direta e não abre confirmação nesta tela. O produto e os preços de outros estabelecimentos permanecem.

## fontes

- `frontend/src/components/painel/radar/DetalheDoProduto.tsx:43`

- Catálogo: `portal-da-cidade/videos.json`; legendas: `videos/legendas/VhMHVZujDvQ.srt`.

## lacunas

- Conferido por leitura do código no HEAD b2f62d3f. Sem execução do produto ou validação visual nesta auditoria.
