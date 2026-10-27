---
id: ligar-aviso-baixar-app-do-portal
titulo: 'ligar o aviso "Baixar app" do portal'
publico:
  - admin
modulo: configurações
categoria: admin
aba: nao-se-aplica
tipo_problema: configuracao
tags:
  - ligar
  - desligar
  - app
  - portal
  - notificacao
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - 8M4kdEfP7Eg
---

## objetivo

aqui você liga ou desliga o convite para instalar o portal no celular.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Sistema` do menu da esquerda, clique em `Configurações` para abrir as opções, se estiverem fechadas. [t=6] [guia=configuracoes.abrir-menu]
2. Clique em `Configurações Gerais`. [t=9] [guia=menu:/painel/configuracoes]
3. Em `Aplicativo do portal`, marque `Mostrar o aviso "Baixar app"` para ligar, ou desmarque para desligar. [t=60] [guia=configuracoes.aviso-app]

## resultado

aparece `Salvo com sucesso`; não há botão adicional para salvar. O convite automático é destinado a quem usa celular e ainda não instalou, nas páginas públicas permitidas. O app usa o nome e a logo do portal.

## desvios

- O aviso não é automático no computador, painel, área do cliente, área do parceiro ou páginas de pedido e cardápio.
- Quem escolhe `Não quero` pode receber novo convite depois de 30 dias.
- Falha ao salvar devolve a caixa ao estado anterior e mostra o motivo.

## o que o visitante vê

O convite mostra `<nome do portal> no seu celular` e `Instale e abra com um toque, sem digitar endereço.`. Se o visitante tocar em instalar, o portal ganha um ícone na tela inicial do celular, com a logo e o nome do portal, e abre com um toque como um aplicativo.

## fontes

- `portal-cidade/frontend/src/app/painel/configuracoes/page.tsx:28` — regras exibidas.
- `portal-cidade/frontend/src/app/painel/configuracoes/page.tsx:123` — salvamento e retorno em caso de erro.
- `portal-cidade/frontend/src/app/painel/configuracoes/page.tsx:830` — opção.
- `portal-cidade/frontend/src/components/convites/ConvitesDoSite.tsx:108` — condições de exibição.
- `portal-cidade/frontend/src/components/convites/regras.ts:44` — reaparecimento.

## lacunas

Sem validação em Android ou iPhone. A instalação depende das capacidades do navegador; ligar o aviso não garante a instalação.
