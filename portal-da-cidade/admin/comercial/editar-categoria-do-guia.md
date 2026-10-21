---
id: editar-categoria-do-guia
titulo: "editar uma categoria do Guia"
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
aqui você muda o nome, o ícone ou a situação de uma categoria do Guia.

## pré-requisitos

- Ter acesso administrativo ao portal.
- O Guia estar ativo.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Gerenciar Categorias`. [guia=menu:/painel/guia/categorias]
2. Procure na lista a categoria que você quer ver. A coluna `Empresas` mostra quantas empresas estão nela. [guia=guia-categorias.tabela]
3. Antes de desligar uma categoria, veja se há empresas nela. Se houver, pense em passar essas empresas para outra categoria, porque elas somem do site junto com a categoria. [guia=guia-categorias.tabela]
4. Para mudar uma categoria, clique em `Editar` na linha dela. [guia=guia-categorias.editar]
5. Faça as mudanças e clique em `Salvar`. [guia=guia-categorias.salvar]

## resultado
A categoria fica com as mudanças.

## desvios

uma categoria inativa não é publicada e também oculta suas empresas. A decisão registrada recomenda mover empresas antes de aposentar uma categoria com cadastros.

## quando pedir ajuda

peça ajuda se houver empresas vinculadas ou se a ação puder ocultar cadastros que devem continuar publicados. Não peça à IA para alterar categoria ou situação de empresas.

## fontes

- `portal-cidade/docs/DECISIONS.md:101-109`
- `portal-cidade/frontend/src/app/painel/guia/empresas/page.tsx:67-73`

## lacunas

A tela de categorias foi localizada no código, mas seus controles atuais não foram revisados em detalhe; não descrevemos criação, exclusão ou campos específicos.
