---
id: ver-historico-notificacoes-push
titulo: "ver quantas pessoas recebem e abrem as notificações push"
publico:
  - admin
modulo: notificações
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - ver
  - notificacao
  - push
  - numeros
  - painel
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - -ZLL7Cqwcok
---

## objetivo

Consulte os inscritos e os resultados dos avisos enviados.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Sistema` do menu da esquerda, clique em `Notificações Push`. [t=9] [guia=menu:/painel/notificacoes]
2. Consulte os indicadores no quadro `Notificações`. [t=12] [guia=notificacoes.resumo]
3. Consulte os envios no `Histórico`. [t=43] [guia=notificacoes.historico]

## o que cada número mostra

- quadro `Notificações`: `inscritos` (pessoas que aceitaram receber), `enviadas no mês` e `abriram (média)` (percentual médio de quem abriu; `—` sem envios).
- `Histórico`: colunas `Notificação` (título e mensagem), `Enviada` (dia e hora), `Entregues` e `Abriram`. mostra as últimas notificações.

## resultado

O resumo mostra os totais do portal; o histórico mostra a situação e os números de cada aviso.

## fontes

- `frontend/src/app/painel/notificacoes/page.tsx:280`
- `frontend/src/app/painel/notificacoes/page.tsx:357`

- Catálogo: `portal-da-cidade/videos.json`; legendas: `videos/legendas/-ZLL7Cqwcok.srt`.

## lacunas

- Conferido por leitura do código no HEAD b2f62d3f. Sem execução do produto ou validação visual nesta auditoria.
