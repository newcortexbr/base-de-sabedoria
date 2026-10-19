---
id: usuario-buscar-anuncios-classificados
titulo: buscar anúncios nos classificados
publico:
  - usuario
modulo: classificados
categoria: classificados
aba: nao-se-aplica
tipo_problema:
  - buscar-anuncio
  - filtros-de-classificados
status: rascunho-documental
revisado_em: 2026-10-19
validacao: docs-e-codigo
---

## objetivo
encontrar anúncios de produtos, imóveis, veículos ou serviços.

## pré-requisitos
- abrir a seção `Classificados` do portal.

## passos

1. No topo da página de `Classificados`, escreva no campo `O que você procura?` o nome do item ou serviço e clique em `Buscar`. (No teste, apertar Enter não fez a busca.)
2. Se quiser ver só um tipo de anúncio, escolha uma categoria (ou deixe `Todas as categorias`).
3. Se ajudar, escolha também a condição do item (por exemplo `Qualquer condição`), se aceita troca (`Troca: tanto faz`, `Aceita troca`, `Não aceita troca`) e a ordem dos resultados.
4. Dentro de uma categoria, use o quadro `Filtrar resultados`, ao lado da lista, para escolher subcategoria ou faixa de preço (`Mín.` e `Máx.`). Depois clique em `Aplicar filtros`.
5. Clique num anúncio para ver os detalhes e o contato que o anunciante deixou.

## resultado esperado
são mostrados anúncios que correspondem aos filtros. o anúncio pode informar botão para ligar ou outros dados de contato.

## desvios
- `Limpar ×` (na busca) ou `Limpar filtros ×` (dentro de uma categoria) remove os filtros e mostra todos os anúncios disponíveis.
- anúncio vencido pode deixar de aparecer.
- não conclua uma compra nem transfira valores com base apenas nesta orientação; combine os detalhes com o anunciante.

## quando pedir ajuda
se a página falhar, informe o título público do anúncio e o endereço da página ao suporte. para dúvidas sobre o item, fale com o anunciante usando o contato publicado.

## fontes
- `portal-cidade/frontend/src/app/classificados/page.tsx:50`
- `portal-cidade/frontend/src/app/classificados/page.tsx:144`
- `portal-cidade/frontend/src/app/classificados/page.tsx:151`
- `portal-cidade/docs/PRODUCT.md:44`

## lacunas
não executado em tela: filtros `Condição`, `Troca` e ordenação, subcategoria, contato do anunciante e anúncio vencido. não há verificação de identidade ou garantia de negociação descrita por estas fontes.
