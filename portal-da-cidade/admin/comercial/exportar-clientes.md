---
id: exportar-clientes
titulo: "exportar a lista de clientes"
publico:
  - admin
modulo: clientes
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
videos:
  - -FASO6flcCw
---

## objetivo
aqui você baixa a lista de clientes em CSV, Excel ou PDF.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No menu da esquerda, na parte `Comercial`, clique em `Meus Clientes`. [guia=menu:/painel/clientes]
2. Clique em `Exportar`. [guia=clientes.exportar]
3. Escolha o formato: `Excel`, `CSV` ou `PDF`. Para baixar todos os cadastros, inclusive os do plano grátis e sem os filtros da tela, escolha `Todos os cadastros (CSV)`. [guia=clientes.exportar-menu]

## resultado
O arquivo é baixado com as colunas Cliente, Documento, WhatsApp, E-mail, Planos, Vencimento e Receita. Excel, CSV e PDF levam só os clientes que a tela está mostrando, com a busca e o filtro aplicados.

## desvios

- Excluir e bloquear pedem confirmação; confira antes.
- O arquivo exportado tem dados de contato: guarde com cuidado.

## quando pedir ajuda

peça ajuda se a página não carregar, se o salvamento der erro ou se a opção esperada não aparecer.

## fontes

- `portal-cidade/frontend/src/app/painel/clientes/page.tsx:436-470,583-621` — formatos e "Todos os cadastros (CSV)".
- `portal-cidade/frontend/src/app/painel/clientes/exportar.ts:38` — colunas.
- `suporte-kb/mapa/admin/telas/painel-clientes.md`

## lacunas

não foi feita validação visual no navegador. Os textos dos botões podem mudar.
