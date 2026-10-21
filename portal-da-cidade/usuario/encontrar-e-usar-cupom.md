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
revisado_em: 2026-10-15
validacao: docs-e-codigo
---

## objetivo
encontrar cupons publicados por empresas e conferir suas condições.

## pré-requisitos
- abrir `Cupons` no portal.

## passos

1. No topo da página `Cupons de Desconto`, escreva no campo `Buscar cupom ou empresa...` o nome da empresa ou do cupom e clique em `Buscar`.
2. Se quiser ver só um tipo de loja, escolha uma categoria (ou deixe `Todas as categorias`).
3. Na lista, clique em `Pegar cupom` no cupom que você quer.
4. Leia as condições e até quando o cupom vale, que aparecem no próprio cupom. Use `Copiar` para copiar o código.
5. Use o cupom do jeito que a empresa indicar (por exemplo, mostrando no estabelecimento).

## resultado esperado
você localiza os cupons disponíveis que correspondem à busca e pode consultar os detalhes exibidos.

## desvios
- sem resultados, tente outro termo ou selecione `Todas as categorias`.
- a vitrine apresenta cupons disponíveis das empresas do Guia; a ordem pode variar.
- o modo de resgate depende do cupom e da empresa.

## quando pedir ajuda
se o detalhe do cupom estiver indisponível ou contraditório, confirme as condições com a empresa identificada no cupom; para erro da página, contate o suporte do portal.

## fontes
- `portal-cidade/frontend/src/app/cupons/page.tsx:46`
- `portal-cidade/frontend/src/app/cupons/page.tsx:94`
- `portal-cidade/frontend/src/app/cupons/page.tsx:127`
- `portal-cidade/docs/PRODUCT.md:46`

## lacunas
não há procedimento único de resgate no código consultado; não presumir código, cadastro, compra ou apresentação de tela específica.
