---
id: juntar-produtos-radar
titulo: "juntar produtos repetidos do Radar"
publico:
  - admin
modulo: radar
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - VhMHVZujDvQ
---

## objetivo

Passe os preços de um produto duplicado para o cadastro que deve permanecer.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Conteúdo` do menu, em `Radar de Preços`, clique em `Produtos e preços`. [guia=menu:/painel/radar/produtos]
2. Clique em `Ver preços` no produto desejado. [guia=radar-produtos.apagar]
3. Em `Juntar com outro produto`, escolha o produto que fica.  [t=43] [guia=radar-produto.destino]
4. Clique em `Juntar`.  [t=43] [guia=radar-produto.juntar]

## resultado

Os preços passam ao produto escolhido e o duplicado é apagado. Não há uma segunda confirmação nesta tela.

## fontes

- `frontend/src/components/painel/radar/DetalheDoProduto.tsx:93`

- Catálogo: `portal-da-cidade/videos.json`; legendas: `videos/legendas/VhMHVZujDvQ.srt`.

## lacunas

- Conferido por leitura do código no HEAD b2f62d3f. Sem execução do produto ou validação visual nesta auditoria.
