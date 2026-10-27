---
id: cancelar-pedido-do-delivery
titulo: "cancelar um pedido do delivery"
publico:
  - admin
modulo: delivery
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - cancelar
  - pedido
  - delivery
  - status
  - empresa
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - TgIUmqrRuBY
---

## objetivo

Aqui você marca um pedido recebido ou em preparo como cancelado.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.
- O módulo Guia Comercial estar disponível.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas`. [guia=menu:/painel/guia/empresas]
2. Na linha da empresa, clique no lápis (`Editar`). [guia=guia-empresas.editar]
3. Em `Conteúdo da ficha`, clique em `Gerenciar` no cartão `Fila de pedidos`. O formulário da empresa é salvo antes de abrir a tela. [guia=guia-empresas-editar.gerenciar-fila-de-pedidos]
4. No pedido em `Recebido` ou `Em preparo`, clique em `Cancelar`. [guia=delivery-pedidos.acao-cancelado]

## resultado

Se a atualização for aceita, o pedido passa a cancelado. Não há `Cancelar` para pedido que já saiu para entrega.

## quando pedir ajuda

Peça ajuda se o controle não aparecer ou se a tela mostrar erro ao salvar.

## fontes

- `portal-cidade/frontend/src/app/painel/delivery/pedidos/page.tsx:38-40,293`.

## lacunas

Sem cancelamento real. Este botão altera a situação do pedido; não foi verificado estorno financeiro. O vídeo não demonstra clicar em cancelar.
