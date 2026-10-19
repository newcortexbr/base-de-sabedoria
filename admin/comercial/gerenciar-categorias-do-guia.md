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
revisado_em: 2026-10-15
validacao: docs-e-codigo
---

## objetivo

acessar as categorias do Guia para revisar sua configuração.

## pré-requisitos

- Ter acesso administrativo ao portal.
- O Guia estar ativo.

## passos

1. No painel, abra `Guia` → `Categorias`, rota `/painel/guia/categorias`.
2. Localize a categoria que deseja revisar.
3. Antes de desativar uma categoria, verifique se há empresas vinculadas e considere movê-las para outra categoria.
4. Use as ações apresentadas na tela e confira a confirmação do sistema.

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
