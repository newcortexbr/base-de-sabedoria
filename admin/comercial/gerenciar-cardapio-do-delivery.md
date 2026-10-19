---
id: gerenciar-cardapio-do-delivery
titulo: montar o cardápio do delivery de uma empresa do Guia
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

cadastrar os produtos que o cliente pode pedir pelo portal com entrega, com tamanhos e adicionais.

## pré-requisitos

- Ter acesso administrativo ao portal.
- O módulo Guia Comercial estar disponível no portal.
- A categoria da empresa ter `Delivery` marcado em `Gerenciar Categorias`.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas` (`/painel/guia/empresas`). [guia=menu:/painel/guia/empresas]
2. Na linha da empresa que você quer, clique no lápis (`Editar`). [guia=guia-empresas.editar]
3. Desça até `Conteúdo da ficha` e, no cartão `Cardápio do delivery`, clique em `Gerenciar`. O formulário da empresa é salvo antes de abrir a tela. [guia=guia-empresas-editar.gerenciar-cardapio-delivery] [t=22]
4. À esquerda, em `Seções`, clique no botão `+` para criar uma seção. [guia=delivery-cardapio.nova-secao] [t=29]
5. Escreva o nome da seção (por exemplo, Açaí). [guia=delivery-cardapio.nome-secao]
6. Clique em `Criar`. [guia=delivery-cardapio.criar-secao]
7. Escolha a seção na lista da esquerda. [guia=delivery-cardapio.secao]
8. Clique em `+ Novo produto`. [guia=delivery-cardapio.novo-produto] [t=43]
9. Escreva o `Nome *` do produto. [guia=delivery-cardapio.nome] [t=46]
10. Se quiser, escreva a `Descrição`. [guia=delivery-cardapio.descricao]
11. Em `Preço base (R$)`, informe o valor. Deixe zero quando o preço depender do tamanho. [guia=delivery-cardapio.preco] [t=49]
12. Marque `Disponível` para o produto aparecer na loja. [guia=delivery-cardapio.disponivel] [t=59]
13. Marque `Destaque` se quiser mais visibilidade. [guia=delivery-cardapio.destaque] [t=61]
14. Envie a foto do produto. [guia=delivery-cardapio.foto] [t=64]
15. Clique em `Criar produto`. [guia=delivery-cardapio.salvar-produto] [t=66]
16. Para tamanhos e adicionais, clique em `Editar` na linha do produto que você quer. Os grupos de opções só existem depois que o produto foi criado. [guia=delivery-cardapio.editar-produto] [t=69]
17. Em `Grupos de opções`, clique em `+ Novo grupo`. [guia=delivery-cardapio.novo-grupo]
18. Escreva o nome do grupo (por exemplo, Tamanho). [guia=delivery-cardapio.nome-grupo]
19. Em `Mín. seleções`, deixe 0 se o grupo for opcional ou 1 se for obrigatório. [guia=delivery-cardapio.minimo]
20. Em `Máx. seleções`, informe o limite de escolhas. [guia=delivery-cardapio.maximo]
21. Clique em `Criar grupo`. [guia=delivery-cardapio.criar-grupo]
22. No grupo criado, clique em `+ Adicionar opção`. [guia=delivery-cardapio.adicionar-opcao]
23. Escreva o nome da opção. [guia=delivery-cardapio.nome-opcao]
24. Informe o preço: 0 = incluso; com valor = custo a mais. [guia=delivery-cardapio.preco-opcao]
25. Clique em `Salvar` ao lado da opção. Repita os três últimos passos para cada opção. [guia=delivery-cardapio.salvar-opcao]
26. Grupos e opções são salvos na hora. Clique em `Salvar alterações` só se tiver mudado os dados do próprio produto. [guia=delivery-cardapio.salvar-produto]

## resultado

os produtos disponíveis aparecem na loja de delivery da empresa; os pedidos chegam na `Fila de pedidos`.

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
