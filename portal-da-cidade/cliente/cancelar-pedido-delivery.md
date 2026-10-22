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
revisado_em: 2026-10-21
validacao: docs-e-codigo
videos:
  - viWXA8_mZf4
---

## objetivo

cancelar um pedido de delivery na área do cliente. O cancelamento não pode ser desfeito.

## pré-requisitos

- ter vínculo com uma empresa com delivery e estar na área de cliente autenticada.

## passos

1. No menu da esquerda da sua área, na parte `Delivery`, clique em `Pedidos` (`/minha-conta/delivery/pedidos`). [guia=menu:/minha-conta/delivery/pedidos]
2. Clique em `Cancelar` no pedido. [guia=delivery-pedidos.cancelar]
3. Escreva o motivo do cancelamento. [guia=delivery-pedidos.cancelar]
4. Clique em `Cancelar pedido`. O cancelamento não pode ser desfeito. [guia=delivery-pedidos.cancelar]

## resultado

o pedido cancelado passa a aparecer no filtro `Cancelados`, com o motivo registrado.

## fontes

- `portal-cidade/frontend/src/app/minha-conta/delivery/pedidos/page.tsx:1`
- `portal-cidade/frontend/src/app/painel/delivery/pedidos/page.tsx:1`
- `portal-cidade/docs/PRODUCT.md:39`
- `portal-cidade/docs/PRODUCT.md:53`
