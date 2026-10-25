---
id: excluir-produto-radar
titulo: "excluir um produto e todos os preços do Radar"
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

Apague um produto junto com seus preços cadastrados.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Conteúdo` do menu, em `Radar de Preços`, clique em `Produtos e preços`. [guia=menu:/painel/radar/produtos]
2. Clique na lixeira `Apagar produto` da linha.  [t=58] [guia=radar-produtos.excluir]
3. Na janela `Apagar este produto?`, clique em `Apagar`. [t=60] [guia=confirmacao.confirmar]

## resultado

O produto e todos os preços dele são apagados.

## fontes

- `frontend/src/app/painel/radar/produtos/page.tsx:172`
- `frontend/src/app/painel/radar/produtos/page.tsx:213`

- Catálogo: `portal-da-cidade/videos.json`; legendas: `videos/legendas/VhMHVZujDvQ.srt`.

## lacunas

- Conferido por leitura do código no HEAD b2f62d3f. Sem execução do produto ou validação visual nesta auditoria.
