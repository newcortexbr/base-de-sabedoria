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
revisado_em: 2026-10-19
validacao: docs-e-codigo
videos:
  - -ZLL7Cqwcok
---

## objetivo
aqui você cancela um aviso agendado antes de ele sair. Depois de enviado, o aviso não pode ser desfeito.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No menu da esquerda, na parte `Sistema`, clique em `Notificações Push`. [guia=menu:/painel/notificacoes]
2. No quadro `Histórico`, ache o aviso agendado. [guia=notificacoes.historico]
3. Um aviso agendado ainda pode ser cancelado no quadro `Histórico`, no botão `Cancelar` da linha dele. [guia=notificacoes.cancelar]

## resultado
O aviso cancelado não é enviado.

## desvios

- Se aparecer o aviso de que o envio não está disponível, o botão de enviar fica apagado e não funciona.
- Notificação enviada não volta.

## quando pedir ajuda

peça ajuda se a página não carregar, se o salvamento der erro ou se a opção esperada não aparecer.

## fontes

- `portal-cidade/frontend/src/app/painel/notificacoes/page.tsx`
- `suporte-kb/mapa/admin/telas/painel-notificacoes.md`

## lacunas

não foi feita validação visual no navegador. Os textos dos botões podem mudar.
