---
id: excluir-categoria-do-guia
titulo: "excluir uma categoria do Guia"
publico:
  - admin
modulo: guia-comercial
categoria: guia-comercial
aba: Guia Comercial
tipo_problema: operacao
tags:
  - excluir
  - categoria
  - guia
  - empresa
  - remover
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - 09n3Eiwn418
---

## objetivo

aqui você apaga uma categoria do Guia que não é mais usada.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.
- Nenhuma empresa estar nessa categoria.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Gerenciar Categorias`. [guia=menu:/painel/guia/categorias]
2. Na linha de uma categoria sem empresas, clique em `Excluir`. [guia=guia-categorias.excluir]
3. Na pergunta `Excluir esta categoria?`, clique em `Excluir`. [guia=confirmacao.confirmar]

## resultado

a categoria some da lista e do site, e aparece o aviso `Categoria excluída`.

## desvios

- com empresa dentro, o portal não apaga e avisa: "Esta categoria não pode ser excluída: N empresa(s) ainda estão vinculadas a ela. Mova essas empresas para outra categoria antes de excluir."
- se você só quer esconder, desmarque `Ativa` em vez de excluir: as empresas dela também deixam de aparecer no site. Veja "editar uma categoria do Guia".
- excluir não tem volta.

## fontes

- `portal-cidade/frontend/src/app/painel/guia/categorias/page.tsx:243-249,341`.
- `portal-cidade/frontend/src/components/painel/ModalAvisoConfirmacao.tsx:135`.
- `portal-cidade/backend/guia/views_admin.py:176`.

## lacunas

Sem validação no navegador. O vídeo apresenta o botão de exclusão, mas não demonstra a confirmação nem o bloqueio por empresas vinculadas.
