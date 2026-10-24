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
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - Ps1cgdLQ1FI
---

## objetivo
encontrar anúncios de produtos, imóveis, veículos ou serviços e falar com quem anunciou.

## pré-requisitos
- estar no site do portal. A seção `Classificados` precisa estar ligada no portal.

## passos

1. No menu do topo do portal, clique em `Classificados`. [guia=topo.classificados]
2. No campo `O que você procura?`, escreva o nome do item ou serviço. [guia=caixa-busca.campo] [t=109]
3. Abaixo do campo, se quiser, escolha uma categoria em `Todas as categorias`. [guia=caixa-busca.filtros] [t=112]
4. Se quiser, escolha também a condição (por padrão `Qualquer condição`), se aceita troca (`Troca: tanto faz`, `Aceita troca` ou `Não aceita troca`) e a ordem dos resultados. [guia=caixa-busca.filtros] [t=115]
5. Clique na lupa (botão `Buscar`) no fim do campo de busca. [guia=caixa-busca.buscar]
6. Dentro de uma categoria, use o quadro de filtros ao lado da lista (no celular, toque em `Filtrar resultados`) para escolher a subcategoria e a faixa de preço nos campos `Mín.` e `Máx.`. [guia=classificados.filtros]
7. Clique em `Aplicar filtros`. [guia=classificados.aplicar-filtros]
8. Clique no anúncio que interessa para abrir os detalhes. [guia=classificados.anuncio]
9. Na página do anúncio, clique em `WhatsApp` (ou em `Ligar`, quando o anunciante só deixou telefone) para falar com ele. [guia=classificados.contato]

## resultado esperado
são mostrados os anúncios que correspondem aos filtros, com a quantidade encontrada. A lista mostra uma leva de anúncios e o botão `Carregar mais anúncios` traz as seguintes.

## desvios
- `Limpar ×` (na tela de busca) ou `Limpar filtros ×` (dentro de uma categoria) remove os filtros e mostra todos os anúncios.
- sem resultados aparece `Nenhum anúncio encontrado.` com o link `Ver todos →`.
- a página do anúncio pode mostrar também o e-mail do anunciante; só aparecem os contatos que ele deixou público.
- não conclua uma compra nem transfira valores com base apenas nesta orientação; combine os detalhes com o anunciante.

## quando pedir ajuda
se a página falhar, informe o título público do anúncio e o endereço da página ao suporte. para dúvidas sobre o item, fale com o anunciante usando o contato publicado.

## fontes
- `portal-cidade/frontend/src/app/classificados/page.tsx:143-167,197-269,284-318`
- `portal-cidade/frontend/src/components/busca/CaixaDeBusca.tsx:71-104`
- `portal-cidade/frontend/src/components/classificados/FiltrosSidebar.tsx:42-190`
- `portal-cidade/frontend/src/components/classificados/ListaInfinitaAnuncios.tsx:105-136`
- `portal-cidade/frontend/src/app/classificados/[cidade]/[slug]/page.tsx:158-167,395-425`
- `portal-cidade/frontend/src/lib/condicao-anuncio.ts:26-31`

## lacunas
não executado em tela: os filtros, a ordenação, a subcategoria e o contato do anunciante. O vídeo `Ps1cgdLQ1FI` só cita de passagem a busca e os filtros (109–117 s). Não há verificação de identidade ou garantia de negociação descrita por estas fontes. Não testado se `Enter` envia a busca; o formulário é um envio comum (GET) com botão de lupa.
