---
id: lancar-preco-pela-foto-radar
titulo: "lançar preço pela foto no Radar"
publico:
  - admin
modulo: radar
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - criar
  - preco
  - radar
  - foto
  - ia
  - produto
  - enviar
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - VhMHVZujDvQ
---

## objetivo

Envie uma foto diretamente pelo painel para leitura dos preços.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Conteúdo` do menu, em `Radar de Preços`, clique em `Produtos e preços`. [guia=menu:/painel/radar/produtos]
2. Clique em `Adicionar preço`. [t=65] [guia=radar-produtos.adicionar-preco]
3. Escolha `Categoria *`. [guia=radar-adicionar.categoria]
4. Clique em `Pela foto`.  [t=82] [guia=radar-adicionar.pela-foto]
5. Escolha `Estabelecimento *`. [t=82] [guia=radar-adicionar.estabelecimento]
6. Escolha a imagem em `Foto *`.  [t=82] [guia=radar-adicionar.foto]
7. Clique em `Enviar para a IA ler`. [guia=radar-adicionar.salvar]

## resultado

A imagem segue para leitura direta, sem a etapa de aprovação das contribuições de moradores. Confira o resultado mostrado no painel.

## fontes

- `frontend/src/components/painel/radar/AdicionarPreco.tsx:158`
- `frontend/src/components/painel/radar/AdicionarPreco.tsx:191`

- Catálogo: `portal-da-cidade/videos.json`; legendas: `videos/legendas/VhMHVZujDvQ.srt`.

## lacunas

- Conferido por leitura do código no HEAD b2f62d3f. Sem execução do produto ou validação visual nesta auditoria.
