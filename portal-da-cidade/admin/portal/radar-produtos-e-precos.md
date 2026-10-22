---
id: radar-produtos-e-precos
titulo: "ver e lançar preços no Radar de Preços"
publico:
  - admin
modulo: radar
categoria: radar
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-22
validacao: docs-e-codigo
---

## objetivo

aqui você vê os produtos e preços que estão no Radar e lança um preço por conta própria, sem esperar foto de morador.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.
- Ter o mercado cadastrado e aprovado em `Mercados`.

## passos

1. No menu da esquerda, clique em `Radar de Preços` e depois em `Produtos e preços`. [guia=menu:/painel/radar/produtos]
2. Use a busca para achar um produto. A lista mostra os mercados, o menor preço e quando foi atualizado.
3. Para lançar um preço, clique em `Adicionar preço`, escolha o produto (ou escreva um novo e sua categoria), o mercado e o preço, e salve. Se o preço daquele mercado já existe, ele é atualizado.
4. Para corrigir o nome, a categoria ou a foto de um produto, abra a linha dele e edite. Para tirar o preço de um mercado, apague o preço na linha.
5. Se o mesmo produto aparece duas vezes, use a opção de juntar e escolha o produto certo; os preços passam para ele.

## resultado

preço lançado por você entra no site na hora, sem passar por aprovação.

## desvios

- o nome do produto não pode repetir: o portal avisa `Já existe um produto com esse nome.`

## fontes

- `portal-cidade/frontend/src/app/painel/radar/produtos/page.tsx:96`
- `portal-cidade/docs/RADAR-CONTRATO.md`

## lacunas

não verificado visualmente. Os nomes exatos dos botões de editar, apagar e juntar produto não foram transcritos um a um.
