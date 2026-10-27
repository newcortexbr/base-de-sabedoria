---
id: adicionar-ou-remover-cidades-do-portal
titulo: "adicionar ou remover cidades da cobertura do portal"
publico:
  - admin
modulo: configurações
categoria: admin
aba: nao-se-aplica
tipo_problema: configuracao
tags:
  - cidade
  - cobertura
  - portal
  - ver
  - contato
  - criar
  - remover
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - 8M4kdEfP7Eg
---

## objetivo

aqui você consulta a cobertura do portal e encontra o contato para solicitar uma mudança de cidade. O administrador não adiciona nem remove cidades diretamente nesta tela.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Sistema` do menu da esquerda, clique em `Configurações`. Só é preciso se as opções estiverem fechadas. [t=6] [guia=configuracoes.abrir-menu]
2. Clique em `Configurações Gerais`. [t=9] [guia=menu:/painel/configuracoes]
3. No quadro `Cidades do Portal`, clique em `Chamar no WhatsApp`. [t=27] [guia=configuracoes.cidades-comercial]
4. No WhatsApp, informe ao time comercial qual cidade deseja adicionar ou remover. [guia=fora]

## resultado

abre o WhatsApp da plataforma com uma mensagem inicial de pedido de inclusão. O campo `Nome da cidade` e o botão `Adicionar` ficam desabilitados; abrir o contato não altera a cobertura.

## fontes

- `portal-cidade/frontend/src/app/painel/configuracoes/page.tsx:512` — cobertura contratada.
- `portal-cidade/frontend/src/app/painel/configuracoes/page.tsx:551` — campo e botão desabilitados.
- `portal-cidade/frontend/src/app/painel/configuracoes/page.tsx:573` — contato comercial.

## lacunas

Sem validação no navegador ou contato com a plataforma. Preço, prazo e aprovação de mudança de cobertura não são definidos nesta tela.
