---
id: cliente-consultar-pedidos-delivery
titulo: consultar pedidos de delivery da empresa
publico:
  - cliente
modulo: delivery
categoria: delivery
aba: Delivery
tipo_problema:
  - pedidos-delivery
  - pedido-ausente
tags:
  - ver
  - pedido
  - delivery
  - filtrar
  - whatsapp
  - empresa
  - cliente
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - viWXA8_mZf4
---

## objetivo

ver os pedidos de delivery da empresa, filtrar por período e situação, falar com o cliente pelo WhatsApp e marcar o pedido como concluído.

Para cancelar um pedido, veja o artigo "cancelar um pedido de delivery da empresa".

## pré-requisitos

- ter vínculo com uma empresa que tem delivery e estar na área do cliente autenticada.

## passos

1. Na parte `Delivery` do menu da esquerda, clique em `Pedidos`. A página se chama `Pedidos do delivery` e o número vermelho ao lado de `Pedidos` mostra quantos pedidos estão aguardando. [t=33] [guia=menu:/minha-conta/delivery/pedidos]
2. No topo, escolha o período: `Hoje`, `Ontem`, `7 dias` ou `30 dias`. [t=43] [guia=delivery-pedidos.periodo]
3. Se preferir, escolha as datas em `De` e `Até`. [t=47] [guia=delivery-pedidos.datas]
4. Escolha a situação: `Todos`, `Aguardando`, `Concluídos` ou `Cancelados`. Os quadros `Pedidos`, `Vendido` e `Aguardando você` mostram o resumo do período. [t=49] [guia=delivery-pedidos.situacao]
5. Em cada pedido, veja o código, a situação, a hora, os itens, a observação, o nome, o telefone, o endereço, a forma de pagamento e o total. [t=60] [guia=delivery-pedidos.pedido]
6. Para falar com o cliente, clique em `Chamar cliente`: abre o WhatsApp com uma mensagem pronta. [t=71] [guia=delivery-pedidos.chamar-cliente]
7. Para ver o pedido como o cliente vê, clique em `Ver pedido`. [t=74] [guia=delivery-pedidos.ver-pedido]
8. Depois de entregar um pedido `Aguardando`, clique em `Concluir`. [t=78] [guia=delivery-pedidos.concluir]
9. Confirme na janela do navegador. Depois de concluído, o pedido não volta para `Aguardando`. [t=81] [guia=fora]
10. Para buscar pedidos novos, clique em `Atualizar`, no alto da página. [t=99] [guia=delivery-pedidos.atualizar]

## resultado

a lista mostra os pedidos do período e da situação escolhidos. Ao concluir, o pedido sai de `Aguardando` e o contador diminui.

## desvios

- a lista também se atualiza sozinha de tempos em tempos; `Atualizar` força na hora.
- `Concluir` e `Cancelar` só aparecem em pedido `Aguardando`.
- aparece `Nenhum pedido neste período.` quando não há pedido no filtro; se aparecer o aviso de plano, use `Ver planos do Guia Comercial`.
- o item `Delivery` do menu só aparece quando a empresa tem delivery liberado pelo plano do Guia Comercial.
- acompanhamento público do pedido pelo cliente é outra tela (`Ver pedido`).

## quando pedir ajuda

se o menu `Delivery` não aparece apesar de a empresa operar delivery, contate o suporte do portal.

## fontes

- `frontend/src/app/minha-conta/delivery/pedidos/page.tsx:24-38` — períodos e situações; `:192-205` concluir e confirmação; `:262-272` título e `Atualizar`; `:394-452` cartão do pedido.
- `frontend/src/app/minha-conta/ClienteSidebar.tsx:195-207` — item `Pedidos` e contador.

## lacunas

tela não validada no navegador nesta tarefa. O texto da mensagem pronta do WhatsApp é gerado no código (`hrefWhatsappComMensagem`); não foi conferido com telefone real.
