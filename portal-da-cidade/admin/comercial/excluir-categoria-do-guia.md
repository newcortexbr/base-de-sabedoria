---
id: excluir-categoria-do-guia
titulo: "excluir uma categoria do Guia"
publico:
  - admin
modulo: guia-comercial
categoria: guia-comercial
aba: Guia Comercial
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-22
validacao: docs-e-codigo
---

## objetivo

aqui você apaga uma categoria do Guia que não é mais usada.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.
- Nenhuma empresa estar nessa categoria.

## passos

1. Antes, confira se a categoria está vazia: em `Guia Comercial` > `Gerenciar Categorias`, veja a coluna de empresas. [guia=menu:/painel/guia/categorias]
2. Se ainda há empresas, mude cada uma para outra categoria (em `Listar Empresas`, lápis da empresa). [guia=menu:/painel/guia/empresas]
3. Na linha da categoria, clique em `Excluir`. [guia=guia-categorias.tabela]
4. Na pergunta `Excluir esta categoria?`, clique em `Excluir`.

## resultado

a categoria some da lista e do site, e aparece o aviso `Categoria excluída`.

## desvios

- com empresa dentro, o portal não apaga e avisa: "Esta categoria não pode ser excluída: N empresa(s) ainda estão vinculadas a ela. Mova essas empresas para outra categoria antes de excluir."
- se você só quer esconder, desmarque `Ativa` em vez de excluir: as empresas dela também deixam de aparecer no site. Veja "editar uma categoria do Guia".
- excluir não tem volta.

## fontes

- `portal-cidade/frontend/src/app/painel/guia/categorias/page.tsx:243`
- `portal-cidade/backend/guia/views_admin.py:176`

## lacunas

não verificado visualmente. O botão `Excluir` não tem marca do guia no código.
