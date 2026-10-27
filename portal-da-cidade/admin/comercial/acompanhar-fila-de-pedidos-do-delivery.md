---
id: acompanhar-fila-de-pedidos-do-delivery
titulo: acompanhar a fila de pedidos do delivery
publico:
  - admin
modulo: delivery
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - ver
  - delivery
  - pedido
  - fila
  - entregar
  - empresa
  - status
status: rascunho-documental
revisado_em: 2026-10-24
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
- A empresa ter ficha completa; a cortesia do portal também atende a essa condição.
- A categoria da empresa ter `Delivery` marcado em `Gerenciar Categorias`.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas`. [guia=menu:/painel/guia/empresas]
2. Na linha da empresa, clique no lápis (`Editar`). [guia=guia-empresas.editar]
3. Em `Conteúdo da ficha`, clique em `Gerenciar` no cartão `Fila de pedidos`. O formulário da empresa é salvo antes de abrir a tela. [guia=guia-empresas-editar.gerenciar-fila-de-pedidos] [t=14]
4. Clique em `Todos` para acompanhar os pedidos e permitir os avisos de novos pedidos. [guia=delivery-pedidos.filtro-todos] [t=30]
5. Se quiser o aviso sonoro, clique em `🔔 Ativar som`. [guia=delivery-pedidos.ativar-som] [t=52]
6. Para recarregar a lista na hora, clique em `↻ Atualizar`. [guia=delivery-pedidos.atualizar] [t=61]
7. No pedido recebido, clique em `Iniciar preparo`. [guia=delivery-pedidos.acao-em_preparo] [t=39]
8. Quando o entregador sair, clique em `Saiu para entrega` no pedido. [guia=delivery-pedidos.acao-saiu_para_entrega] [t=41]
9. Quando a entrega terminar, clique em `Marcar entregue`. [guia=delivery-pedidos.acao-entregue] [t=46]

## resultado

os pedidos andam de `Recebido` até `Entregue`.

## desvios

- A lista atualiza a cada 20 segundos enquanto a tela está aberta.
- Pedidos entregues e cancelados ficam em `Finalizados / Cancelados`.
- O aviso sonoro de novos pedidos depende do filtro `Todos` e da tela aberta; não se promete som após sair dela.
- Cancelar e imprimir um pedido têm artigos próprios.

## quando pedir ajuda

peça ajuda se os pedidos não aparecerem ou se um pagamento parecer errado.

## fontes

- `portal-cidade/frontend/src/components/painel/EmpresaEditor.tsx:983,1735-1744`.
- `portal-cidade/frontend/src/app/painel/delivery/pedidos/page.tsx:38-40,91-94,181-213,293,314`.

## lacunas

Conferência documental no código b2f62d3f e nas legendas dos vídeos citados. Sem execução no navegador; não foram medidos cache, entrega de pedidos, impressão ou upload reais.
