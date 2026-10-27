---
id: mostrar-convite-do-grupo-whatsapp-no-portal
titulo: "mostrar o convite do grupo de WhatsApp no portal"
publico:
  - admin
modulo: configurações
categoria: admin
aba: nao-se-aplica
tipo_problema: configuracao
tags:
  - whatsapp
  - grupo
  - convite
  - ligar
  - desligar
  - link
  - portal
  - telefone
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - 8M4kdEfP7Eg
---

## objetivo

aqui você liga ou desliga o convite para o grupo ou canal de WhatsApp do portal.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.
- Ter o link de convite do grupo ou canal que deseja divulgar.

## passos

1. Na parte `Sistema` do menu da esquerda, clique em `Configurações` para abrir as opções, se estiverem fechadas. [t=6] [guia=configuracoes.abrir-menu]
2. Clique em `Configurações Gerais`. [t=9] [guia=menu:/painel/configuracoes]
3. Em `Grupo de WhatsApp`, cole o convite em `Link do grupo ou canal`. [t=87] [guia=configuracoes.grupo-link]
4. Marque `Exibir o convite no site`. [t=91] [guia=configuracoes.grupo-exibir]
5. Clique em `Salvar grupo de WhatsApp`. [t=92] [guia=configuracoes.salvar-grupo]

### desligar o convite

1. Na mesma tela, desmarque `Exibir o convite no site`. [guia=configuracoes.grupo-exibir]
2. Clique em `Salvar grupo de WhatsApp`. [guia=configuracoes.salvar-grupo]

## resultado

aparece `Salvo com sucesso`. Nas páginas públicas permitidas, o convite usa `Participe do nosso grupo no WhatsApp` e `Entrar no grupo →`. Precisa estar ligado e com link válido; a exibição também considera o histórico do visitante e a prioridade dos outros convites.

## desvios

O link deve começar com https:// e usar chat.whatsapp.com ou whatsapp.com/channel. Um link inválido impede salvar e mostra o motivo. Não confunda com o grupo exclusivo de parceiros, configurado em outra tela.

## fontes

- `portal-cidade/frontend/src/app/painel/configuracoes/page.tsx:136` — validação e salvamento.
- `portal-cidade/frontend/src/app/painel/configuracoes/page.tsx:864` — opções.
- `portal-cidade/frontend/src/components/convites/CartaoWhatsApp.tsx:36` — textos do convite.
- `portal-cidade/frontend/src/components/convites/ConvitesDoSite.tsx:106` — condições e histórico.

## lacunas

Sem validação no navegador ou teste do convite no WhatsApp.
