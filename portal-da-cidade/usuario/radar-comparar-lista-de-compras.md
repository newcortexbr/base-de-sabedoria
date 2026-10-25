---
id: usuario-radar-comparar-lista
titulo: "comparar uma lista de compras no Radar de Preços"
publico:
  - usuario
modulo: radar
categoria: radar
aba: nao-se-aplica
tipo_problema: orientacao
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - msl8PXbZ9Ak
---

## objetivo

descobrir em qual mercado ou farmácia a sua lista de compras inteira sai mais barata.

## pré-requisitos

- a seção `Radar de Preços` precisa estar ligada no portal.

## passos

1. No menu do topo do portal, clique em `Radar de Preços`. [guia=topo.radar]
2. Na página do Radar, clique em `Comparar lista`. [guia=radar.nav-lista] [t=5]
3. Em `Sua lista`, escolha `Lista do mercado` ou `Lista da farmácia`. Cada uma é montada separadamente. [guia=radar.lista-tipo] [t=10]
4. No campo `Adicionar produto`, digite o nome do produto. [guia=radar.lista-busca] [t=20]
5. Toque no produto nas sugestões para incluí-lo. As sugestões já mostram o menor preço encontrado. Repita com os outros itens. [guia=radar.lista-sugestoes] [t=22]
6. Em cada item, ajuste a quantidade nos botões `Diminuir quantidade` e `Aumentar quantidade` (`−` e `+`). [guia=radar.lista-quantidade] [t=33]
7. Para tirar um item, toque na lixeira (`Remover`). [guia=radar.lista-remover] [t=38]
8. Em `Resultado`, veja o total da lista em cada mercado, com o mais barato em primeiro lugar. [guia=radar.lista-resultado] [t=41]

## resultado

o portal soma a lista em cada estabelecimento que tem todos os itens e mostra primeiro onde sai mais barato. Mudar a quantidade atualiza o resultado.

## desvios

- a lista aceita até 30 produtos; com 30 o campo mostra `A lista já tem 30 itens`.
- mercados que não têm todos os itens aparecem em `Mercados sem todos os itens (não concorrem)`, com o valor `só o que tem`.
- se nenhum mercado tem tudo, aparece `Nenhum mercado tem todos os itens da sua lista.`
- quantidade zero mostra `Informe uma quantidade maior que zero.` e o resultado não é calculado.
- preço pode ter mudado desde a data da atualização; confira no local.

## fontes

- `portal-cidade/frontend/src/components/radar/ListaRadar.tsx:16-19,99-218`
- `portal-cidade/frontend/src/components/radar/calculos.ts:3`
- `portal-cidade/frontend/src/components/radar/NavegacaoRadar.tsx:7-11`
- vídeo `msl8PXbZ9Ak`.

## lacunas

não verificado visualmente. O vídeo `O3sdByn6xK8` diz "até 10 produtos"; o código limita a 30 (`MAX_ITENS_DA_LISTA`). Não foi conferido se a lista fica guardada ao fechar a página.
