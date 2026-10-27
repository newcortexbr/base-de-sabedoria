---
id: usuario-radar-consultar-precos
titulo: "comparar preços no Radar de Preços"
publico:
  - usuario
modulo: radar
categoria: radar
aba: nao-se-aplica
tipo_problema: orientacao
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - O3sdByn6xK8
---

## objetivo

achar onde o produto ou o combustível está mais barato na sua cidade.

## pré-requisitos

- a seção `Radar de Preços` precisa estar ligada no portal.

## passos

1. No menu do topo do portal, clique em `Radar de Preços`. [guia=topo.radar]
2. Em `O que você quer consultar?`, clique em uma categoria: `Supermercados`, `Farmácias` ou `Postos de combustível`. As ofertas aparecem logo abaixo, na mesma página. [guia=radar.categoria] [t=27]
3. Se preferir pesquisar, em `Consulte um preço`, escreva o produto no campo `Buscar produto` (por exemplo, arroz 5 kg ou protetor solar). [guia=radar.busca] [t=45]
4. Se quiser, filtre pela categoria e pelo bairro (`Todas as categorias`, `Todos os bairros`). [guia=radar.busca] [t=51]
5. Clique em `Buscar preços`. [guia=radar.buscar] [t=54]
6. Veja o preço de cada mercado, do mais barato para o mais caro, com o endereço e a data da atualização. O botão `Abrir no Maps` mostra o caminho. [guia=radar.resultados] [t=54]
7. Em postos, em `Preços dos postos`, escolha o combustível em `Comparar` e a ordem em `Ordenar` (`Menor preço`, `Maior preço` ou `Mais recentes`). Cada posto aparece num cartão, com o selo `MENOR` no mais barato. [guia=radar.postos] [t=60]

## resultado

você vê preços atualizados e o melhor lugar para comprar. Para somar a compra inteira, veja o artigo "comparar uma lista de compras no Radar de Preços".

## desvios

- no topo da página há três atalhos: consultar preços, `Comparar lista` e `Enviar preço`. Para divulgar um preço bom, envie a foto da etiqueta ou do encarte em `Enviar preço`: a equipe confere antes de publicar.
- cada oferta mostra preço, estabelecimento, data e validade.
- em postos, compare o mesmo combustível no mesmo tipo de pagamento.
- preço pode ter mudado desde a data mostrada. Confira no local.
- só aparecem preços que a equipe do portal já conferiu.
- sem resultado aparece `Nenhum preço para essa busca.` com o botão `Limpar busca e filtros`.
- se falhar, aparece `Não foi possível carregar os preços agora.` com o botão `Tentar de novo`.

## fontes

- `portal-cidade/frontend/src/components/radar/ConsultaRadar.tsx:109-196`
- `portal-cidade/frontend/src/components/radar/PostosRadar.tsx:24-27,43,87-124`
- `portal-cidade/frontend/src/components/radar/CartaoProduto.tsx:44-60`
- `portal-cidade/frontend/src/components/radar/NavegacaoRadar.tsx:7-11`
- `portal-cidade/backend/radar/migrations/0005_recomecar_radar.py:13-15`
- vídeo `O3sdByn6xK8`.

## lacunas

não verificado visualmente nesta rodada. Os nomes das categorias vêm da migração do backend; o administrador do portal pode ter alterado. O vídeo cita "até 10 produtos" na lista de compras, mas o código limita a 30 (veja o artigo da lista de compras).
