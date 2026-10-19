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
revisado_em: 2026-10-15
validacao: docs-e-codigo
videos:
  - zHOxx6KFIrk
---

## objetivo
encontrar anúncios de produtos, imóveis, veículos ou serviços.

## pré-requisitos
- abrir a seção `Classificados` do portal.

## passos
1. no campo `O que você procura?`, digite o nome do item ou serviço e clique em `Buscar` (a tecla Enter não aplicou a busca no teste).
2. escolha uma `Categoria` se quiser restringir a busca.
3. escolha uma `Condição`, uma opção em `Troca` ou a ordenação, se esses filtros forem úteis.
4. se estiver dentro de uma categoria, refine por subcategoria ou faixa de preço (`Mín.` e `Máx.`) no bloco `Filtrar resultados` e clique em `Aplicar filtros`.
5. abra um anúncio para ler os detalhes e usar o contato que o anunciante publicou.

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
