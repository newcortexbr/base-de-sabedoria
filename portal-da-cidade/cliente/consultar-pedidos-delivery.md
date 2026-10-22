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
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
videos:
  - viWXA8_mZf4
---

## objetivo
abrir a área de pedidos de delivery associada à empresa, acompanhar os pedidos e contatar o cliente.

Para cancelar um pedido, veja o artigo "cancelar um pedido de delivery da empresa".


## pré-requisitos
- ter vínculo com uma empresa com delivery e estar na área de cliente autenticada.

## passos

1. No menu da esquerda da sua área, na parte `Delivery`, clique em `Pedidos` (`/minha-conta/delivery/pedidos`). A página se chama `Pedidos do delivery`. a bolinha vermelha no menu `Delivery` mostra quantos pedidos estão aguardando. [guia=menu:/minha-conta/delivery/pedidos]
2. No topo, escolha o período (`Hoje`, `Ontem`, `7 dias` ou `30 dias`) ou escolha um intervalo de datas. [guia=delivery-pedidos.periodo]
   no topo, quadros mostram o total de pedidos, o valor vendido e os pedidos aguardando.
3. Escolha quais pedidos quer ver (`Todos`, `Aguardando`, `Concluídos` ou `Cancelados`). [guia=delivery-pedidos.periodo]
4. Em cada pedido, veja o código, a hora, a observação do cliente, o nome, o telefone, o endereço completo, os itens, a forma de pagamento, o total e a situação. [guia=delivery-pedidos.pedido]
   use `chamar cliente` para abrir o WhatsApp com o cliente e `ver pedido` para abrir a página como o cliente a vê.
5. Quando entregar um pedido que está `Aguardando`, clique em `Concluir`. [guia=delivery-pedidos.concluir]
6. Confirme. Atenção: depois de concluído, o pedido não volta para `Aguardando`, e o contador de pedidos aguardando diminui. [guia=delivery-pedidos.concluir]

dica: deixe a tela aberta durante o expediente e clique em `atualizar` para ver pedidos novos.

## resultado esperado
a lista mostra os pedidos conforme período e situação. concluir ou cancelar altera o estado do pedido; cancelar não pode ser desfeito.

## desvios
- a interface pode não apresentar a opção para todos os clientes; delivery acompanha o Guia e os direitos/configuração do negócio.
- pedidos da própria loja não se confundem com o acompanhamento público feito por código.
- ações irreversíveis pedem confirmação; confira o pedido antes de confirmar.

## quando pedir ajuda
se a área estiver ausente apesar de a empresa operar delivery, contate o suporte do portal. para um pedido de consumidor, a empresa deve usar os dados do pedido para responder ao cliente.

## fontes
- `portal-cidade/frontend/src/app/minha-conta/delivery/pedidos/page.tsx:1`
- `portal-cidade/frontend/src/app/painel/delivery/pedidos/page.tsx:1`
- `portal-cidade/docs/PRODUCT.md:39`
- `portal-cidade/docs/PRODUCT.md:53`

## lacunas
não foi inspecionado o conteúdo da tela de pedidos para confirmar ações, estados e rótulos; o artigo limita-se à navegação e consulta, sem prometer recursos.
