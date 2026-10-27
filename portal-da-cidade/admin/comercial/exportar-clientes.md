---
id: exportar-clientes
titulo: "exportar a lista de clientes"
publico:
  - admin
modulo: clientes
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - exportar
  - cliente
  - lista
  - cadastro
  - planilha
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - -FASO6flcCw
---

## objetivo

aqui você baixa a carteira em Excel, CSV ou PDF, ou todos os cadastros em CSV.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

### exportar a lista filtrada

1. Na parte `Comercial` do menu da esquerda, clique em `Meus Clientes`. [t=10] [guia=menu:/painel/clientes]
2. Escreva o nome, o documento ou o telefone em `Buscar por nome, documento ou telefone…`. [t=44] [guia=clientes.busca]
3. Pressione Enter no campo de busca para carregar os resultados. [guia=clientes.busca]
4. Se quiser restringir por situação, escolha uma opção em `Filtrar por status`. [t=48] [guia=clientes.filtro-situacao]
5. Clique em `Exportar`. [t=90] [guia=clientes.exportar]
6. Clique em `Excel` para baixar a lista em planilha. [t=90] [guia=clientes.exportar-excel]

Para CSV ou PDF, use uma das sequências abaixo no lugar do passo 6.

### baixar a lista filtrada em CSV

1. Clique em `Exportar`. [t=90] [guia=clientes.exportar]
2. Clique em `CSV`. [t=90] [guia=clientes.exportar-csv]

### baixar a lista filtrada em PDF

1. Clique em `Exportar`. [t=90] [guia=clientes.exportar]
2. Clique em `PDF`. [t=90] [guia=clientes.exportar-pdf]

### baixar todos os cadastros, sem os filtros

1. Na parte `Comercial` do menu da esquerda, clique em `Meus Clientes`. [t=10] [guia=menu:/painel/clientes]
2. Clique em `Exportar`. [t=90] [guia=clientes.exportar]
3. Clique em `Todos os cadastros (CSV)`. [t=90] [guia=clientes.exportar-todos]

## resultado

Excel, CSV e PDF usam a lista carregada, com busca e filtro aplicados. `Todos os cadastros (CSV)` pede a carteira sem esses filtros, inclusive clientes do plano gratuito. Os arquivos são `meus-clientes.xlsx`, `meus-clientes.csv`, `meus-clientes.pdf` ou `todos-os-cadastros.csv`, com as colunas Cliente, Documento, WhatsApp, E-mail, Planos, Vencimento e Receita.

## desvios

Falha ao gerar a lista filtrada: `Não foi possível gerar o arquivo de exportação. Tente novamente.` Na exportação de todos, o aviso informa o motivo da falha ao carregar.

## fontes

- `portal-cidade/frontend/src/app/painel/clientes/page.tsx:440` — dados e nomes dos arquivos.
- `portal-cidade/frontend/src/app/painel/clientes/page.tsx:568` — menu de formatos.
- `portal-cidade/frontend/src/app/painel/clientes/exportar.ts:38` — colunas.

## lacunas

Sem validação de download no navegador ou abertura dos arquivos gerados.
