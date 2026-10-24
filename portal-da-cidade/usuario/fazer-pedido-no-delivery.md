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
revisado_em: 2026-10-24
validacao: docs-e-codigo
---

## objetivo
escolher itens no cardápio de uma loja com delivery do portal, fazer o pedido e mandá-lo para a loja pelo WhatsApp.

## pré-requisitos
- abrir o perfil público da empresa e procurar o botão de delivery.
- a loja precisa ter ligado o delivery no painel dela.

## passos

1. Na página da empresa, no `Guia Comercial`, clique em `Pedir pelo Delivery Online` (no celular, no atalho `Delivery`). [guia=empresa-publica.delivery]
2. Na página da loja, veja o cardápio, o horário e a taxa de entrega e clique no produto que quer. [guia=delivery.produto]
3. Na janela do produto, escolha as opções (se houver), a quantidade nos botões `−` e `+` e, se quiser, escreva uma observação. [guia=delivery.adicionar]
4. Clique em `Adicionar`. [guia=delivery.adicionar]
5. Repita para os outros itens e depois clique em `Ver carrinho`. [guia=delivery.ver-carrinho]
6. Em `Seu carrinho`, confira os itens e clique em `Finalizar pedido`. [guia=delivery.finalizar]
7. Em `Seus dados`, preencha `Nome completo *` e `Telefone / WhatsApp *`. [guia=delivery.dados]
8. Preencha o endereço: `Cidade *`, `Bairro *`, `Rua / Avenida *` e `Número *` (`CEP` e `Complemento` são opcionais). [guia=delivery.endereco]
9. Em `Forma de pagamento`, escolha uma das formas que a loja aceita (`PIX`, `Cartão na entrega` ou `Dinheiro`). [guia=delivery.pagamento]
10. Clique em `Confirmar pedido`. [guia=delivery.confirmar]
11. Na página do pedido, anote o código que aparece no topo e clique em `Enviar pedido para a loja` para mandar o pedido pelo WhatsApp da loja. [guia=pedido.enviar]

## resultado esperado
o pedido fica registrado e a página mostra o código, o resumo, o endereço e a forma de pagamento. Quando o pedido é enviado, o botão passa a `Enviar de novo` e aparece `Falar com a loja`.

## desvios
- a mensagem `Delivery em breve!` indica que a loja ainda não configurou o delivery online; use `Pedir pelo WhatsApp`, se aparecer.
- a loja pode também mostrar `Pedir pelo iFood` ou `Pedir pelo site da loja`; esses botões saem do portal.
- loja fechada deixa montar o carrinho, mas o botão vira `Loja fechada` e só libera quando ela abre.
- se a loja tem pedido mínimo, o carrinho avisa `Pedido mínimo: ...` e o botão fica bloqueado até alcançar o valor.
- se a loja tem cupom, o campo `Digite o código` e o botão `Aplicar` ficam na tela de finalização.
- a página do pedido é o comprovante do pedido e o botão para avisar a loja; ela não mostra o andamento do preparo.
- não compartilhe o código do pedido publicamente.

## quando pedir ajuda
para atraso, item ou taxa, contate a loja pelo canal público dela. se a página falhar, fale com o suporte do portal sem divulgar o código completo em canal público.

## fontes
- `portal-cidade/frontend/src/app/delivery/[slug]/page.tsx:56-74`
- `portal-cidade/frontend/src/app/delivery/[slug]/DeliveryClient.tsx:237-247,255-340,549-790,849-860,1001,1209-1225`
- `portal-cidade/frontend/src/app/guia/empresa/[cidade]/[slug]/BotoesDeDelivery.tsx:13-35`
- `portal-cidade/frontend/src/app/guia/empresa/[cidade]/[slug]/delivery-botoes.ts`
- `portal-cidade/frontend/src/app/pedido/[codigo]/PedidoTrackingClient.tsx:140-262,335-380`

## lacunas
não executado em tela. A janela do produto (opções e observação) e as formas de pagamento dependem do que cada loja configurou. Não verificado se o navegador abre o WhatsApp sozinho ao confirmar (o código tenta e, se o navegador impedir, mostra o botão).
