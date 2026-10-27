---
id: convite-notificacoes-push
titulo: "ligar ou desligar o convite para receber notificações push"
publico:
  - admin
modulo: notificações
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - ligar
  - desligar
  - notificacao
  - push
  - convite
  - painel
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - -ZLL7Cqwcok
---

## objetivo

Escolha se o site convida visitantes a receber avisos.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Sistema` do menu da esquerda, clique em `Notificações Push`. [t=9] [guia=menu:/painel/notificacoes]
2. Marque ou desmarque `Convidar visitantes a receber notificações`. [t=24] [guia=notificacoes.convidar]

## como o convite aparece ao visitante

- com a chave ligada, o site mostra um convite discreto, com `Não, obrigado` e `Sim, quero`. se aceitar, o navegador pede a permissão e a pessoa vira inscrita.
- vem depois dos convites do app e do grupo de WhatsApp, quando houver, e não aparece em áreas logadas (`/painel`, `/minha-conta`).
- se a pessoa recusar (ou negar a permissão do navegador), o convite só volta depois de 5 dias.
- desligada, ninguém novo é convidado; quem já aceitou continua inscrito.
- navegadores sem suporte, e iPhone sem o portal instalado como app, não recebem o convite.

## resultado

A chave é salva ao ser alterada. Para mudar a frase do convite, veja “mudar o texto do convite de notificações push”.

## fontes

- `frontend/src/app/painel/notificacoes/page.tsx:301`

- Catálogo: `portal-da-cidade/videos.json`; legendas: `videos/legendas/-ZLL7Cqwcok.srt`.

## lacunas

- Conferido por leitura do código no HEAD b2f62d3f. Sem execução do produto ou validação visual nesta auditoria.
