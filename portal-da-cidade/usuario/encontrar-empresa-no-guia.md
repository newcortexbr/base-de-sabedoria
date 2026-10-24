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
revisado_em: 2026-10-24
validacao: docs-e-codigo
---

## objetivo
localizar empresas e serviços publicados no Guia Comercial.

## pré-requisitos
- estar no site do portal da cidade desejada.
- saber o nome, ramo ou serviço que procura ajuda, mas não é obrigatório.

## passos

1. No menu do topo do portal, clique em `Guia Comercial`. [guia=topo.guia]
2. No campo `Buscar por nome, categoria ou item do cardápio…`, escreva o que você procura. [guia=caixa-busca.campo]
3. Clique na lupa (botão `Buscar`) no fim do campo. [guia=caixa-busca.buscar]
4. Se o portal tiver mais de uma cidade, clique na cidade desejada na linha `Filtrar` (ou em `Todas as cidades`). [guia=guia.cidades]
5. Para ver empresas perto de você, clique em `Perto de mim` e deixe o navegador usar sua localização. [guia=guia.perto-de-mim]
6. Veja os resultados e clique no cartão da empresa que você procura. [guia=guia.empresa]

## resultado esperado
é exibida uma lista de empresas compatíveis com a busca, com a quantidade de resultados. A posição varia conforme destaque e plano; empresas grátis aparecem depois das pagas.

## desvios
- sem resultados, apague parte do termo e tente um nome, categoria ou serviço diferente; `Limpar ×` remove a busca e os filtros.
- não aparece filtro de cidade em portal de cidade única.
- `Perto de mim` só aparece em conexão segura (https); se o navegador negar a localização, o botão passa a mostrar `Permitir localização`.
- sem escrever nada, a página do Guia também mostra as `Categorias` para navegar clicando.
- nem todo perfil mostra os mesmos blocos: categoria e plano podem limitar o conteúdo exibido.

## quando pedir ajuda
se uma empresa conhecida não aparecer após tentar nome e categoria, contate o suporte do portal informando somente o nome público da empresa e a cidade.

## fontes
- `portal-cidade/frontend/src/app/guia/page.tsx:143-149`
- `portal-cidade/frontend/src/components/guia/CartaoBuscaFiltros.tsx:69-139`
- `portal-cidade/frontend/src/components/layout/ProximoButton.tsx:61-72`
- `portal-cidade/frontend/src/components/guia/CardPagoGuia.tsx:26`
- `portal-cidade/frontend/src/components/layout/HeaderClient.tsx:547,563`

## lacunas
não executado em tela nesta rodada: filtro de cidade (portal de cidade única) e `Perto de mim` (geolocalização). Nenhum vídeo do catálogo mostra a busca pública do Guia.
