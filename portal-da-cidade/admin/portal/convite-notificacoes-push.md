---
id: convite-notificacoes-push
titulo: "ligar ou desligar o convite para receber notificações push"
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

Escolha se o site convida visitantes a receber avisos.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Sistema` do menu da esquerda, clique em `Notificações Push`. [t=9] [guia=menu:/painel/notificacoes]
2. Marque ou desmarque `Convidar visitantes a receber notificações`. [t=24] [guia=notificacoes.convidar]

## resultado

A chave é salva ao ser alterada. Para mudar a frase do convite, veja “mudar o texto do convite de notificações push”.

## fontes

- `frontend/src/app/painel/notificacoes/page.tsx:301`

- Catálogo: `portal-da-cidade/videos.json`; legendas: `videos/legendas/-ZLL7Cqwcok.srt`.

## lacunas

- Conferido por leitura do código no HEAD b2f62d3f. Sem execução do produto ou validação visual nesta auditoria.
