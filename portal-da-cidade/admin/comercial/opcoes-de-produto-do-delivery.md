---
id: opcoes-de-produto-do-delivery
titulo: "criar tamanhos e adicionais de um produto do delivery"
publico:
  - admin
modulo: delivery
categoria: admin
aba: nao-se-aplica
tipo_problema: cadastro
tags:
  - criar
  - delivery
  - produto
  - tamanho
  - adicional
  - preco
  - empresa
status: rascunho-documental
revisado_em: 2026-10-24
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
- A empresa ter ficha completa; a cortesia do portal também atende a essa condição.
- A categoria da empresa ter `Delivery` marcado em `Gerenciar Categorias`.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas`. [guia=menu:/painel/guia/empresas]
2. Na linha da empresa, clique no lápis (`Editar`). [guia=guia-empresas.editar]
3. Em `Conteúdo da ficha`, no cartão `Cardápio do delivery`, clique em `Gerenciar`. O formulário da empresa é salvo antes de abrir a tela. [guia=guia-empresas-editar.gerenciar-cardapio-delivery]
4. Para tamanhos e adicionais, clique em `Editar` na linha do produto que você quer. Os grupos de opções só existem depois que o produto foi criado. [guia=delivery-cardapio.editar-produto]
5. Em `Grupos de opções`, clique em `+ Novo grupo`. [guia=delivery-cardapio.novo-grupo] [t=95]
6. Escreva o nome do grupo (por exemplo, Tamanho). [guia=delivery-cardapio.nome-grupo]
7. Em `Mín. seleções (0 = opcional)`, informe o mínimo de escolhas; zero deixa o grupo opcional. [guia=delivery-cardapio.minimo]
8. Em `Máx. seleções (1 = radio, 0 = ∞)`, informe o limite; 1 permite uma escolha e zero indica sem limite. [guia=delivery-cardapio.maximo]
9. Clique em `Criar grupo`. [guia=delivery-cardapio.criar-grupo]
10. No grupo criado, clique em `+ Adicionar opção`. [guia=delivery-cardapio.adicionar-opcao] [t=93]
11. Escreva o nome da opção. [guia=delivery-cardapio.nome-opcao]
12. Preencha `Preço (0 = incluso)`; um valor maior que zero é somado ao preço base. [guia=delivery-cardapio.preco-opcao]
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

- `portal-cidade/frontend/src/components/painel/EmpresaEditor.tsx:982,1735-1744`.
- `portal-cidade/frontend/src/app/painel/delivery/cardapio/page.tsx:24-54,118,136-171,244-301,455`.

## lacunas

Os campos de criar grupo e os limites foram conferidos no código. O vídeo apresenta grupos e opções, mas não demonstra cada campo de criação.

não verificado visualmente nesta tarefa; passos conferidos com o vídeo de suporte e com o código da tela. O nome exato do campo de preço base não foi confirmado no código.
