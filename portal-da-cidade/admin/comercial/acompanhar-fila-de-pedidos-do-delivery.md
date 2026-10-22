---
id: acompanhar-fila-de-pedidos-do-delivery
titulo: acompanhar a fila de pedidos do delivery
publico:
  - admin
modulo: delivery
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
videos:
  - TgIUmqrRuBY
  - 2ShbACG2mHE
---

## objetivo

aqui você acompanha os pedidos que chegam no delivery de uma empresa, do recebimento até a entrega. Para ajustar taxa, tempo e pagamento, veja outro artigo.

## pré-requisitos

- Ter acesso administrativo ao portal.
- O módulo Guia Comercial estar disponível no portal.
- A categoria da empresa ter `Delivery` marcado em `Gerenciar Categorias`.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas`. [guia=menu:/painel/guia/empresas]
2. Na linha da empresa que você quer, clique no lápis (`Editar`). [guia=guia-empresas.editar]
3. Desça até `Conteúdo da ficha` e, no cartão `Fila de pedidos`, clique em `Gerenciar`. O formulário da empresa é salvo antes de abrir a tela. [guia=guia-empresas-editar.gerenciar-fila-de-pedidos] [t=14]
4. A lista mostra os pedidos do mais recente para o mais antigo. Cada pedido traz o código, o nome do cliente, a hora e o valor total. As abas filtram pela situação: recebido, em preparo, saiu para entrega, entregue e cancelado. [guia=delivery-pedidos.periodo]
5. Clique em `Ativar som` para ouvir um aviso quando chegar pedido novo. [guia=delivery-pedidos.ativar-som] [t=52]
6. A lista se atualiza sozinha a cada 20 segundos. Para ver na hora, clique em `↻ Atualizar`. [guia=delivery-pedidos.atualizar] [t=59]
7. Em cada pedido recebido, clique em `Iniciar preparo`. [guia=delivery-pedidos.acao-em_preparo] [t=37]
8. Quando o entregador sair, clique em `Saiu para entrega`. [guia=delivery-pedidos.acao-saiu_para_entrega] [t=40]
9. Na chegada, clique em `Marcar entregue`. [guia=delivery-pedidos.acao-entregue] [t=42]

## resultado

os pedidos andam de `Recebido` até `Entregue`.

## desvios

- Pedidos entregues e cancelados ficam em `Finalizados / Cancelados`, guardados como histórico.
- Do lado do cliente, a loja aparece com a taxa, o tempo, se está aberta, o cupom e os produtos por seção. O cliente escolhe os adicionais respeitando os limites de cada grupo, o carrinho mostra subtotal, taxa e total, e o pedido finalizado vai para esta fila.
- A empresa também acompanha pela área do cliente, em Delivery.
- Para ajustar taxa, tempo, pagamento e áreas de entrega, veja o artigo "configurar o delivery de uma empresa".

## quando pedir ajuda

peça ajuda se os pedidos não aparecerem ou se um pagamento parecer errado.

## fontes

- `portal-cidade/frontend/src/components/painel/EmpresaEditor.tsx:933-946,1655-1686` — cartões de `Conteúdo da ficha`.
- `portal-cidade/frontend/src/app/painel/delivery/configuracoes/page.tsx:1`
- `portal-cidade/frontend/src/app/painel/delivery/pedidos/page.tsx:1`
- vídeo `TgIUmqrRuBY`.

## lacunas

não verificado visualmente nesta tarefa; passos conferidos com o vídeo de suporte e com o código da tela. Rótulos `Ativar som`, `↻ Atualizar` e `Saiu para entrega` confirmados em `app/painel/delivery/pedidos/page.tsx`.
