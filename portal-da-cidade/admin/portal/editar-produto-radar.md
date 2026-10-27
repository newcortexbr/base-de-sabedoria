---
id: editar-produto-radar
titulo: "editar um produto do Radar de Preços"
publico:
  - admin
modulo: radar
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - editar
  - produto
  - radar
  - categoria
  - preco
  - renomear
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - VhMHVZujDvQ
---

## objetivo

Corrija o nome ou a categoria de um produto do Radar.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Conteúdo` do menu, em `Radar de Preços`, clique em `Produtos e preços`. [guia=menu:/painel/radar/produtos]
2. Clique em `Editar produto`, no lápis da linha.  [t=48] [guia=radar-produtos.editar-produto]
3. Altere `Nome *` se necessário.  [t=48] [guia=radar-produtos.nome]
4. Escolha `Categoria *` se necessário.  [t=48] [guia=radar-produtos.categoria]
5. Clique em `Salvar`. [guia=radar-produtos.salvar]

## resultado

O produto é salvo com o nome e a categoria informados. Este formulário não tem campo de foto.

## fontes

- `frontend/src/app/painel/radar/produtos/page.tsx:171`
- `frontend/src/app/painel/radar/produtos/page.tsx:253`

- Catálogo: `portal-da-cidade/videos.json`; legendas: `videos/legendas/VhMHVZujDvQ.srt`.

## lacunas

- Conferido por leitura do código no HEAD b2f62d3f. Sem execução do produto ou validação visual nesta auditoria.
