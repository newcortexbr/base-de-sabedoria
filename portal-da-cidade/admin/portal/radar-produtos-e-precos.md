---
id: radar-produtos-e-precos
titulo: "ver e lançar preços no Radar de Preços"
publico:
  - admin
modulo: radar
categoria: radar
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - criar
  - ver
  - radar
  - produto
  - preco
  - filtrar
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - VhMHVZujDvQ
---

## objetivo

Adicione um preço digitado ao catálogo do Radar.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Conteúdo` do menu, em `Radar de Preços`, clique em `Produtos e preços`. [guia=menu:/painel/radar/produtos]
2. Clique em `Adicionar preço`. [t=65] [guia=radar-produtos.adicionar-preco]
3. Escolha `Categoria *`.  [guia=radar-adicionar.categoria]
4. Clique na aba `Digitar`.  [t=69] [guia=radar-adicionar.digitar]
5. Escolha `Estabelecimento *`.  [t=74] [guia=radar-adicionar.estabelecimento]
6. Em `Produto *`, busque um produto ou escreva o nome de um novo.  [t=71] [guia=radar-adicionar.produto]
7. Preencha `Preço (R$) *`.  [t=76] [guia=radar-adicionar.preco]
8. Clique em `Salvar preço`.  [t=79] [guia=radar-adicionar.salvar]

## resultado

O preço é salvo no produto escolhido; um produto novo é criado na categoria selecionada.

## consultar preços de um produto

1. Na parte `Conteúdo` do menu, em `Radar de Preços`, clique em `Produtos e preços`. [guia=menu:/painel/radar/produtos]
2. Preencha `Buscar produto` com o nome.  [t=20] [guia=radar-produtos.busca]
3. Clique em `Ver preços` na linha do produto. [guia=radar-produtos.apagar]

A marca existente `radar-produtos.apagar` está no botão `Ver preços`: ele abre o detalhe e não apaga nada. Para editar o nome/categoria, veja “editar um produto do Radar de Preços”; para enviar uma imagem diretamente, veja “lançar preço pela foto no Radar”. Para alterar valores, juntar duplicados ou apagar o cadastro, veja “corrigir ou remover o preço de um estabelecimento no Radar”, “juntar produtos repetidos do Radar” e “excluir um produto e todos os preços do Radar”.

## tela
- `Produtos e preços` é o catálogo do Radar: todos os produtos com o preço em cada mercado. o topo mostra o total de produtos, de preços e de mercados.
- a tabela mostra por produto: categoria, em quantos mercados tem preço, menor preço e data da última atualização.
- a busca acha produto pelo nome; o filtro mostra só uma categoria.
- produtos criados pela leitura da IA ganham a etiqueta `criado pela IA`.
- em `Digitar`, produto novo pede a categoria; a foto é opcional.
- no site, cada produto vira um card com o menor preço, os mercados e o botão abrir no Maps.

## fontes

- `frontend/src/components/painel/radar/AdicionarPreco.tsx:97`
- `frontend/src/components/painel/radar/AdicionarPreco.tsx:137`
- `frontend/src/app/painel/radar/produtos/page.tsx:161`

- Catálogo: `portal-da-cidade/videos.json`; legendas: `videos/legendas/VhMHVZujDvQ.srt`.

## lacunas

- Conferido por leitura do código no HEAD b2f62d3f. Sem execução do produto ou validação visual nesta auditoria.
