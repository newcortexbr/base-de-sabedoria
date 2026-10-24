---
id: cancelar-notificacao-push-agendada
titulo: "cancelar uma notificação push agendada"
publico:
  - admin
modulo: notificações
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - -ZLL7Cqwcok
---

## objetivo

Cancele um aviso que ainda está agendado.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Sistema` do menu da esquerda, clique em `Notificações Push`. [t=9] [guia=menu:/painel/notificacoes]
2. No `Histórico`, clique em `Cancelar` na linha da notificação agendada. [guia=notificacoes.cancelar]
3. Na confirmação, clique em `Cancelar notificação`. [guia=confirmacao.confirmar]

## resultado

A notificação cancelada deixa de aguardar envio. Uma notificação já enviada não pode ser desfeita.

## fontes

- `frontend/src/app/painel/notificacoes/page.tsx:241`
- `frontend/src/app/painel/notificacoes/page.tsx:394`

- Catálogo: `portal-da-cidade/videos.json`; legendas: `videos/legendas/-ZLL7Cqwcok.srt`.

## lacunas

- Conferido por leitura do código no HEAD b2f62d3f. Sem execução do produto ou validação visual nesta auditoria.
