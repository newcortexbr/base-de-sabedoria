---
id: usuario-fazer-pedido-delivery
titulo: consultar o cardápio e fazer pedido pelo delivery
publico:
  - usuario
modulo: delivery
categoria: delivery
aba: nao-se-aplica
tipo_problema:
  - pedido-delivery
  - loja-nao-disponivel
status: rascunho-documental
revisado_em: 2026-10-15
validacao: docs-e-codigo
---

## objetivo
consultar uma loja com delivery e acompanhar um pedido quando houver código de rastreio.

## pré-requisitos
- abrir o perfil público da empresa e procurar o botão ou link de delivery.

## passos

1. Na página da empresa, no `Guia Comercial`, clique em `Pedir pelo Delivery Online`, se esse botão aparecer.
2. Na página do delivery, veja o cardápio, os horários, a taxa e onde a loja entrega.
3. Escolha os itens, clique em `Adicionar` em cada um e, no fim, clique em `Finalizar pedido`. Siga o que a página pedir.
4. Depois de confirmar, a página mostra o código do seu pedido. Guarde esse código.
5. Para acompanhar, abra a página do pedido (`/pedido/[codigo]`), que já aparece logo depois de confirmar.

## resultado esperado
se a loja estiver configurada e aceitar pedidos, a página permite seguir o fluxo disponível e o código pode mostrar o andamento do pedido.

## desvios
- a mensagem `Delivery em breve!` indica que a loja ainda não configurou o delivery online; use `Pedir pelo WhatsApp` se aparecer.
- loja, área de entrega, formas de pedido e disponibilidade dependem de cada estabelecimento.
- não compartilhe o código de rastreio publicamente.

## quando pedir ajuda
para atraso, item ou taxa, contate a loja pelo canal público dela. se a página ou consulta do código falhar, fale com o suporte do portal sem divulgar o código completo em canal público.

## fontes
- `portal-cidade/frontend/src/app/delivery/[slug]/page.tsx:38`
- `portal-cidade/frontend/src/app/delivery/[slug]/page.tsx:56`
- `portal-cidade/frontend/src/app/delivery/[slug]/page.tsx:86`
- `portal-cidade/frontend/src/app/pedido/[codigo]/page.tsx:1`
- `portal-cidade/docs/PRODUCT.md:39`

## lacunas
os controles interativos de montar e enviar pedido ficam em `DeliveryClient`; não se detalham rótulos de etapas sem confirmação de cada variação da loja.
