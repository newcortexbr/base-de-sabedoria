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

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas` (`/painel/guia/empresas`).
2. Na linha da empresa, clique no lápis (`Editar`).
3. Desça até `Conteúdo da ficha` e, no cartão `Cardápio do delivery`, clique em `Gerenciar`. O formulário da empresa é salvo antes de abrir a tela.
4. À esquerda, em `Seções`, clique no botão de mais, escreva o nome da seção e clique em `Criar`.
5. Escolha a seção e clique em `Novo produto`.
6. Preencha o `Nome *` e a `Descrição`.
7. Em preço base, informe o valor. Deixe zero quando o preço depender do tamanho.
8. Marque `Disponível` para o produto aparecer na loja. Marque `Destaque` se quiser mais visibilidade.
9. Envie a foto e clique em `Criar produto`.
10. Para tamanhos e adicionais, abra o produto (`Editar produto`) e clique em `+ Novo grupo`.
11. Dê o nome do grupo, diga se é opcional ou obrigatório e o limite de escolhas.
12. Clique em `+ Adicionar opção` para cada opção. Preço 0 = incluso; com valor = custo a mais.
13. Clique em `Salvar alterações`.

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
