---
id: usuario-encontrar-usar-cupom
titulo: encontrar e consultar um cupom de desconto
publico:
  - usuario
modulo: cupons
categoria: cupons
aba: nao-se-aplica
tipo_problema:
  - busca-de-cupom
  - uso-de-cupom
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - pBHdF3bd1QI
  - v7uO6kjwVOA
---

## objetivo
encontrar cupons publicados por empresas, ver o código e conferir as condições.

## pré-requisitos
- a seção `Cupons de Desconto` precisa estar ligada no portal.

## passos

1. No menu do topo do portal, clique em `Cupons` (em alguns portais o item é `Cupons de Desconto`, dentro do menu `Guia Comercial`). [guia=topo.cupons] [t=60]
2. No campo `Buscar cupom ou empresa...`, escreva o nome da empresa ou do cupom e clique em `Buscar`. [guia=cupons.busca] [t=60]
3. Se quiser ver só um tipo de loja, escolha uma categoria (ou deixe `Todas as categorias`). [guia=cupons.categoria] [t=63]
4. Leia no cartão o desconto, o `Válido até` e as `Condições:`. [guia=cupons.cartao] [t=67]
5. Clique em `Pegar cupom`. O código aparece no próprio cartão. [guia=cupons.pegar] [t=70]
6. Clique no código para copiá-lo (o botão mostra `Copiar` e depois `Copiado`). [guia=cupons.copiar] [t=75]
7. Use o cupom do jeito que a empresa indicar (por exemplo, apresentando o código no estabelecimento). [guia=fora] [t=78]

## resultado esperado
você localiza os cupons disponíveis que correspondem à busca e fica com o código copiado.

## desvios
- cada cartão mostra a foto de capa (ou a inicial da empresa), o selo da categoria, o selo do desconto, a empresa, a oferta, `Válido até`, `Condições:` e o bairro e a cidade. cupom vencido sai do portal.
- sem resultados, tente outro termo ou selecione `Todas as categorias`.
- `Pegar cupom` não abre outra página: só mostra o código no cartão. Clicar na foto ou no nome da empresa abre a página dela no Guia.
- a ordem dos cupons gira entre as empresas; não é ranking.
- o modo de resgate depende do cupom e da empresa.

## quando pedir ajuda
se o detalhe do cupom estiver indisponível ou contraditório, confirme as condições com a empresa identificada no cupom; para erro da página, contate o suporte do portal.

## fontes
- `portal-cidade/frontend/src/app/cupons/page.tsx:40-130`
- `portal-cidade/frontend/src/components/cupons/CupomCard.tsx:71-148`
- `portal-cidade/frontend/src/components/layout/HeaderClient.tsx:186-196,576`
- vídeo `pBHdF3bd1QI` (60–78 s).

## lacunas
não há procedimento único de resgate no código consultado; não presumir cadastro, compra ou apresentação de tela específica. O título do menu varia: `Cupons` quando é item próprio, `Cupons de Desconto` quando entra no menu `Guia Comercial`.
