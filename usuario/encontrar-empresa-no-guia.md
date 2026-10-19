---
id: usuario-encontrar-empresa-guia
titulo: encontrar uma empresa no guia comercial
publico:
  - usuario
modulo: guia-comercial
categoria: guia-comercial
aba: nao-se-aplica
tipo_problema:
  - encontrar-empresa
  - busca-sem-resultado
status: rascunho-documental
revisado_em: 2026-10-15
validacao: docs-e-codigo
videos:
  - d2EweodukHg
---

## objetivo
localizar empresas e serviços publicados no Guia Comercial.

## pré-requisitos
- estar no site do portal da cidade desejada.
- saber o nome, ramo ou serviço que procura ajuda, mas não é obrigatório.

## passos

1. No menu do topo do portal, clique em `Guia Comercial`.
2. No campo `Buscar por nome, categoria ou item do cardápio…`, escreva o que você procura.
3. Se o portal tiver mais de uma cidade, escolha a cidade nos filtros. Se tiver só uma, esse filtro pode não aparecer.
4. Para ver empresas perto de você, clique em `Perto de mim` e deixe o navegador usar sua localização, se quiser.
5. Veja os resultados e clique no cartão da empresa que você procura.

## resultado esperado
é exibida uma lista de empresas compatíveis com a busca. a posição pode variar conforme destaque e plano; empresas grátis podem aparecer depois das pagas.

## desvios
- sem resultados, apague parte do termo e tente um nome, categoria ou serviço diferente; `Limpar ×` remove a busca e os filtros.
- não aparece filtro de cidade em portal de cidade única.
- nem todo perfil mostra os mesmos blocos: categoria e plano podem limitar o conteúdo exibido.

## quando pedir ajuda
se uma empresa conhecida não aparecer após tentar nome e categoria, contate o suporte do portal informando somente o nome público da empresa e a cidade.

## fontes
- `portal-cidade/frontend/src/app/guia/page.tsx:73`
- `portal-cidade/frontend/src/components/guia/CartaoBuscaFiltros.tsx:69`
- `portal-cidade/frontend/src/app/guia/empresa/[cidade]/[slug]/page.tsx:73`
- `portal-cidade/docs/PRODUCT.md:38`

## lacunas
executado em tela: passos 1, 2 e 5. não executado: filtro de cidade (portal de cidade única) e `Perto de mim` (geolocalização).
