---
id: opcoes-de-produto-do-delivery
titulo: "criar tamanhos e adicionais de um produto do delivery"
publico:
  - admin
modulo: delivery
categoria: admin
aba: nao-se-aplica
tipo_problema: cadastro
status: rascunho-documental
revisado_em: 2026-10-19
validacao: docs-e-codigo
videos:
  - 2ShbACG2mHE
  - TgIUmqrRuBY
---

## objetivo
aqui você cria grupos de opções, como tamanho ou adicionais, para um produto do cardápio do delivery que já existe.

## pré-requisitos

- Ter acesso administrativo ao portal.
- O módulo Guia Comercial estar disponível no portal.
- A categoria da empresa ter `Delivery` marcado em `Gerenciar Categorias`.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas`. [guia=menu:/painel/guia/empresas]
2. Na linha da empresa que você quer, clique no lápis (`Editar`). [guia=guia-empresas.editar]
3. Desça até `Conteúdo da ficha` e, no cartão `Cardápio do delivery`, clique em `Gerenciar`. O formulário da empresa é salvo antes de abrir a tela. [guia=guia-empresas-editar.gerenciar-cardapio-delivery]
4. Para tamanhos e adicionais, clique em `Editar` na linha do produto que você quer. Os grupos de opções só existem depois que o produto foi criado. [guia=delivery-cardapio.editar-produto]
5. Em `Grupos de opções`, clique em `+ Novo grupo`. [guia=delivery-cardapio.novo-grupo]
6. Escreva o nome do grupo (por exemplo, Tamanho). [guia=delivery-cardapio.nome-grupo]
7. Em `Mín. seleções`, deixe 0 se o grupo for opcional ou 1 se for obrigatório. [guia=delivery-cardapio.minimo]
8. Em `Máx. seleções`, informe o limite de escolhas. [guia=delivery-cardapio.maximo]
9. Clique em `Criar grupo`. [guia=delivery-cardapio.criar-grupo]
10. No grupo criado, clique em `+ Adicionar opção`. [guia=delivery-cardapio.adicionar-opcao]
11. Escreva o nome da opção. [guia=delivery-cardapio.nome-opcao]
12. Informe o preço: 0 = incluso; com valor = custo a mais. [guia=delivery-cardapio.preco-opcao]
13. Clique em `Salvar` ao lado da opção. Repita os três últimos passos para cada opção. [guia=delivery-cardapio.salvar-opcao]
14. Grupos e opções são salvos na hora. Se mudou os dados do próprio produto, clique em `Salvar alterações`. [guia=delivery-cardapio.salvar-produto]

## resultado
O produto passa a mostrar os grupos e as opções na loja do delivery.

## desvios

- Produto `Indisponível` não aparece na loja.
- Os grupos de opções só podem ser criados depois que o produto existe.
- Cardápio do delivery é diferente do cardápio digital (que é só consulta).

## quando pedir ajuda

peça ajuda se o cartão não aparecer, se o produto não salvar ou se o cliente não conseguir escolher as opções.

## fontes

- `portal-cidade/frontend/src/components/painel/EmpresaEditor.tsx:933-946,1655-1686` — cartões de `Conteúdo da ficha`.
- `portal-cidade/frontend/src/app/painel/delivery/cardapio/page.tsx:1` — tela `Cardápio de Delivery`.
- vídeo `2ShbACG2mHE`.

## lacunas

não verificado visualmente nesta tarefa; passos conferidos com o vídeo de suporte e com o código da tela. O nome exato do campo de preço base não foi confirmado no código.
