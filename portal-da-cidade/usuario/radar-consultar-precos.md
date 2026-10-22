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
revisado_em: 2026-10-22
validacao: docs-e-codigo
---

## objetivo

achar onde o produto ou o combustível está mais barato na sua cidade.

## passos

1. Abra o Radar de Preços do portal (`/radar-de-precos`). [guia=menu:/radar-de-precos]
2. Escolha a categoria: supermercados, farmácias ou postos.
3. Digite o produto (por exemplo, arroz ou protetor solar) e, se quiser, escolha o bairro.
4. Veja os mercados do mais barato para o mais caro, com a data de cada preço. O botão `Abrir no Maps` mostra o caminho.
5. Em postos, escolha Gasolina, Etanol ou Diesel e a ordem (menor preço, maior preço ou mais recentes). Cada posto aparece num cartão, com selo no menor preço.
6. Para saber qual mercado sai mais barato para toda a sua compra, use a lista de compras (`/radar-de-precos/lista`): monte a lista e o portal soma em cada mercado.

## resultado

você vê preços atualizados e o melhor lugar para comprar.

## desvios

- preço pode ter mudado desde a data mostrada. Confira no local.
- só aparecem preços que o portal já conferiu.

## fontes

- `portal-cidade/frontend/src/components/radar/PostosRadar.tsx:23`
- `portal-cidade/frontend/src/components/radar/ConsultaRadar.tsx:140`
- `portal-cidade/frontend/src/app/radar-de-precos/lista/page.tsx:11`

## lacunas

não verificado visualmente. Rotas públicas conferidas em `app/radar-de-precos/`.
