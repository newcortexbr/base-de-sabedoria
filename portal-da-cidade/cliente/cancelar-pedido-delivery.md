---
id: cliente-cancelar-pedido-delivery
titulo: cancelar um pedido de delivery da empresa
publico:
  - cliente
modulo: delivery
categoria: delivery
aba: Delivery
tipo_problema:
  - pedidos-delivery
  - pedido-ausente
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - viWXA8_mZf4
---

## objetivo

cancelar um pedido de delivery que ainda está aguardando, escrevendo o motivo. O cancelamento não pode ser desfeito.

## pré-requisitos

- ter vínculo com uma empresa que tem delivery e estar na área do cliente autenticada.
- só pedidos em `Aguardando` têm o botão `Cancelar`.

## passos

1. Na parte `Delivery` do menu da esquerda, clique em `Pedidos`. [t=33] [guia=menu:/minha-conta/delivery/pedidos]
2. No pedido que quer cancelar, clique em `Cancelar`. [t=86] [guia=delivery-pedidos.cancelar]
3. Na janela `Cancelar o pedido`, escreva o motivo em `Motivo do cancelamento` (até 300 letras; é obrigatório). [t=88] [guia=delivery-pedidos.motivo]
4. Clique em `Cancelar pedido`. [t=91] [guia=delivery-pedidos.confirmar-cancelamento]

## resultado

o pedido passa a aparecer no filtro `Cancelados`, com a mensagem `Cancelado pela loja` e o motivo escrito.

## desvios

- na janela, `Voltar` fecha sem cancelar.
- sem motivo, aparece `Informe o motivo do cancelamento.` e o pedido não é cancelado.
- o item `Delivery` do menu só aparece quando a empresa tem delivery liberado pelo plano do Guia Comercial.

## fontes

- `frontend/src/app/minha-conta/delivery/pedidos/page.tsx:449` — botão `Cancelar`; `:466-493` janela, motivo e `Cancelar pedido`; `:94-98` texto de quem cancelou.
- `frontend/src/app/minha-conta/ClienteSidebar.tsx:195-207` — grupo `Delivery` e item `Pedidos`.

## lacunas

tela não validada no navegador nesta tarefa. A janela de cancelamento só é aberta pelo botão `Cancelar`; não há prazo máximo para cancelar no código da tela.
