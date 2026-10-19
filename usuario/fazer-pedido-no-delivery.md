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
1. no perfil da empresa, abra o acesso ao delivery se estiver disponível.
2. consulte o cardápio, os horários, a taxa e a área de entrega apresentados pela loja.
3. siga as opções apresentadas na página para montar e enviar o pedido.
4. guarde o código exibido após a confirmação, se o pedido fornecer um.
5. para acompanhar o pedido, abra `Acompanhar pedido`/página pública de pedido e informe o código recebido.

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
