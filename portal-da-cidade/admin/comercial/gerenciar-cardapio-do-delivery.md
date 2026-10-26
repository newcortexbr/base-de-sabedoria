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
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - 2ShbACG2mHE
  - TgIUmqrRuBY
---

## objetivo

aqui você cadastra os produtos que o cliente pode pedir com entrega, com tamanhos e adicionais.

## pré-requisitos

- Ter acesso administrativo ao portal.
- O módulo Guia Comercial estar disponível no portal.
- A empresa ter ficha completa; a cortesia do portal também atende a essa condição.
- A categoria da empresa ter `Delivery` marcado em `Gerenciar Categorias`.

## veja também
- para criar tamanhos e adicionais (grupos de opções), veja o artigo "criar tamanhos e adicionais de um produto do delivery".

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas`. [guia=menu:/painel/guia/empresas]
2. Na linha da empresa, clique no lápis (`Editar`). [guia=guia-empresas.editar]
3. Em `Conteúdo da ficha`, no cartão `Cardápio do delivery`, clique em `Gerenciar`. O formulário da empresa é salvo antes de abrir a tela. [guia=guia-empresas-editar.gerenciar-cardapio-delivery] [t=22]
4. À esquerda, em `Seções`, clique no botão `+` para criar uma seção. [guia=delivery-cardapio.nova-secao] [t=29]
5. Escreva o nome da seção (por exemplo, Açaí). [guia=delivery-cardapio.nome-secao]
6. Clique em `Criar`. [guia=delivery-cardapio.criar-secao]
7. Escolha a seção na lista da esquerda. [guia=delivery-cardapio.secao]
8. Clique em `+ Novo produto`. [guia=delivery-cardapio.novo-produto] [t=45]
9. Escreva o `Nome *` do produto. [guia=delivery-cardapio.nome] [t=45]
10. Se quiser, escreva a `Descrição`. [guia=delivery-cardapio.descricao]
11. Informe o valor em `Preço base (R$) — deixe 0 se o preço é definido pelos tamanhos`. Deixe zero quando o preço depender do tamanho. [guia=delivery-cardapio.preco] [t=48]
12. Marque `Disponível` para o produto aparecer na loja. [guia=delivery-cardapio.disponivel] [t=59]
13. Marque `Destaque` se quiser mais visibilidade. [guia=delivery-cardapio.destaque] [t=61]
14. Envie a foto do produto. [guia=delivery-cardapio.foto] [t=63]
15. Clique em `Criar produto`. [guia=delivery-cardapio.salvar-produto] [t=66]

## resultado

O produto é criado na seção escolhida. Produtos disponíveis entram na listagem pública do delivery quando a loja e as demais condições de exibição permitem.

## desvios

- Produto `Indisponível` não aparece na loja.
- Os grupos de opções só podem ser criados depois que o produto existe.
- Cardápio do delivery é diferente do cardápio digital (que é só consulta).

## quando pedir ajuda

peça ajuda se o cartão não aparecer, se o produto não salvar ou se o cliente não conseguir escolher as opções.

## fontes

- `portal-cidade/frontend/src/components/painel/EmpresaEditor.tsx:950,982-984,1735-1744`.
- `portal-cidade/frontend/src/app/painel/delivery/cardapio/page.tsx:243-301,375-455`.
- `portal-cidade/backend/delivery/serializers.py:50`.

## lacunas

Conferência documental no código b2f62d3f e nas legendas dos vídeos citados. Sem execução no navegador; não foram medidos cache, entrega de pedidos, impressão ou upload reais.
