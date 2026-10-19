---
id: operar-delivery-pedidos-e-configuracoes
titulo: acompanhar pedidos e configurar o delivery de uma empresa
publico:
  - admin
modulo: delivery
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-19
validacao: docs-e-codigo
videos:
  - TgIUmqrRuBY
  - 2ShbACG2mHE
---

## objetivo

acompanhar a fila de pedidos do delivery e ajustar taxa, tempo, pagamento e áreas de entrega.

## pré-requisitos

- Ter acesso administrativo ao portal.
- O módulo Guia Comercial estar disponível no portal.
- A categoria da empresa ter `Delivery` marcado em `Gerenciar Categorias`.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas` (`/painel/guia/empresas`).
2. Na linha da empresa, clique no lápis (`Editar`).
3. Desça até `Conteúdo da ficha` e, no cartão `Configurações do delivery`, clique em `Gerenciar`. O formulário da empresa é salvo antes de abrir a tela.
4. Em `Status`, ligue `Delivery ativo (página pública visível)`. Desligado, a página de pedidos sai do ar.
5. Em `Entrega`, preencha a `Taxa de entrega (R$)` (0 = grátis), o `Pedido mínimo (R$)`, o `Tempo mínimo (min)`, o `Tempo máximo (min)` e o `Raio de entrega (km)`.
6. Em `Formas de Pagamento`, ligue as que a loja aceita: `Dinheiro (troco na entrega)`, `Cartão na entrega` ou `PIX`. Com PIX, preencha a `Chave PIX` da loja.
7. Em `Áreas de Atendimento`, escolha a `Cidade` e a `Cobertura` (`Município todo` ou `Bairros específicos`) e clique em `Adicionar área`. Repita para cada área.
8. Em `Mensagem de Boas-Vindas`, escreva um recado curto para o topo da loja.
9. Clique em `Salvar configurações`.
10. Para ver os pedidos, volte à edição da empresa e, no cartão `Fila de pedidos`, clique em `Gerenciar`.
11. Ligue o som de aviso para ouvir quando chegar pedido novo.
12. Em cada pedido, avance a situação: `Iniciar preparo`, depois saiu para entrega e por fim `Marcar entregue`.

## resultado

a loja mostra taxa, tempo e mensagem configurados; os pedidos andam de `Recebido` até `Entregue`.

## desvios

- O cliente só escolhe no checkout as áreas cadastradas em `Áreas de Atendimento`.
- Pedidos entregues e cancelados ficam em `Finalizados / Cancelados`.
- A empresa também acompanha pela área do cliente, em Delivery.

## quando pedir ajuda

peça ajuda se os pedidos não aparecerem, se a loja não abrir mesmo com `Delivery ativo` ligado ou se um pagamento parecer errado.

## fontes

- `portal-cidade/frontend/src/components/painel/EmpresaEditor.tsx:933-946,1655-1686` — cartões de `Conteúdo da ficha`.
- `portal-cidade/frontend/src/app/painel/delivery/configuracoes/page.tsx:1`
- `portal-cidade/frontend/src/app/painel/delivery/pedidos/page.tsx:1`
- vídeo `TgIUmqrRuBY`.

## lacunas

não verificado visualmente nesta tarefa; passos conferidos com o vídeo de suporte e com o código da tela. Os rótulos exatos dos botões de ativar som, atualizar e "saiu para entrega" não foram confirmados no código.
