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
1. abra `Guia Comercial` pelo menu do portal.
2. no campo `Buscar por nome, categoria ou item do cardápio…`, digite o que procura.
3. se o portal atender mais de uma cidade, escolha uma cidade nos filtros; se atender uma só, esse filtro pode não aparecer.
4. para ver opções próximas, use `Perto de mim` e permita a localização no navegador, se desejar.
5. consulte os resultados e abra o cartão da empresa que parece corresponder.

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
