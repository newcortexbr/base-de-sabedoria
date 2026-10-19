---
id: gerenciar-categorias-do-guia
titulo: revisar categorias do Guia
publico:
  - admin
modulo: guia
categoria: admin
aba: nao-se-aplica
tipo_problema: configuracao
status: rascunho-documental
revisado_em: 2026-10-19
validacao: docs-e-codigo
videos:
  - 09n3Eiwn418
---

## objetivo

acessar as categorias do Guia para revisar sua configuração.

## pré-requisitos

- Ter acesso administrativo ao portal.
- O Guia estar ativo.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Gerenciar Categorias` (`/painel/guia/categorias`).
2. Procure na lista a categoria que você quer ver. A coluna `Empresas` mostra quantas empresas estão nela.
3. Antes de desligar uma categoria, veja se há empresas nela. Se houver, pense em passar essas empresas para outra categoria, porque elas somem do site junto com a categoria.
4. Para mudar, clique em `Editar` na linha. Para criar uma nova, clique em `+ Nova Categoria`.
5. Dê um nome, escolha um ícone e uma cor. Deixe a categoria ativa para ela aparecer no site.
6. Marque a opção de aparecer no formulário de orçamento só quando as empresas da categoria prestam serviço (por exemplo, pintor ou eletricista).
7. Em `O que as empresas desta categoria oferecem`, marque `Cardápio` (restaurante, bar, lanchonete), `Delivery` (pedido pelo site) ou `Quartos` (hotel, pousada). Serviços, equipe e catálogo de produtos já vêm marcados para todas.
8. Clique em `Salvar` e confira a mensagem que aparece.

## resultado

A configuração escolhida fica registrada para a categoria.

## desvios

uma categoria inativa não é publicada e também oculta suas empresas. A decisão registrada recomenda mover empresas antes de aposentar uma categoria com cadastros.

## quando pedir ajuda

peça ajuda se houver empresas vinculadas ou se a ação puder ocultar cadastros que devem continuar publicados. Não peça à IA para alterar categoria ou situação de empresas.

## fontes

- `portal-cidade/docs/DECISIONS.md:101-109`
- `portal-cidade/frontend/src/app/painel/guia/empresas/page.tsx:67-73`

## lacunas

A tela de categorias foi localizada no código, mas seus controles atuais não foram revisados em detalhe; não descrevemos criação, exclusão ou campos específicos.
