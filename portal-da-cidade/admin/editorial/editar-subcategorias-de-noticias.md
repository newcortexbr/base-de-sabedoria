---
id: editar-subcategorias-de-noticias
titulo: "editar, pausar ou excluir subcategorias de notícias"
publico:
  - admin
modulo: notícias
categoria: conteúdo
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - gAa2NdnitZU
---

## objetivo

Aqui você muda o nome ou a categoria de uma subcategoria, altera sua situação ou a exclui.

## pré-requisitos

- Entrar no painel como administrador.

## passos

### mudar nome ou categoria

1. Na seção `Conteúdo` do menu lateral, em `Notícias`, clique em `Gerenciar Subcategorias`. [t=150] [guia=menu:/painel/noticias/subcategorias]
2. Na linha da subcategoria, clique no lápis `Editar`. [guia=noticias-subcategorias.editar]
3. Se necessário, escolha outra `Categoria *`. [guia=noticias-subcategorias.categoria]
4. Se necessário, altere `Nome *`. [guia=noticias-subcategorias.nome]
5. Clique em `Salvar`. [guia=noticias-subcategorias.salvar]

### ligar ou desligar

1. Na seção `Conteúdo` do menu lateral, em `Notícias`, clique em `Gerenciar Subcategorias`. [t=150] [guia=menu:/painel/noticias/subcategorias]
2. Na coluna `Ativo`, clique em `Ativo` para desativar ou em `Inativo` para ativar. [guia=noticias-subcategorias.ativo]

### excluir

1. Na seção `Conteúdo` do menu lateral, em `Notícias`, clique em `Gerenciar Subcategorias`. [t=150] [guia=menu:/painel/noticias/subcategorias]
2. Na linha da subcategoria, clique na lixeira `Excluir`. [guia=noticias-subcategorias.excluir]
3. Na janela `Excluir subcategoria?`, clique em `Excluir`. [guia=confirmacao.confirmar]

## resultado

A lista reflete a alteração. Excluir remove a subcategoria; o vínculo das notícias com ela aceita ficar vazio. Desativar não é exclusão.

## desvios

- Não use desativação de subcategoria para retirar uma notícia do ar.
- O filtro `Todas as categorias` ajuda a localizar subcategorias de uma categoria.

## fontes

- `frontend/src/app/painel/noticias/subcategorias/page.tsx:47` — alteração de nome e categoria.
- `frontend/src/app/painel/noticias/subcategorias/page.tsx:137` — ativo.
- `frontend/src/app/painel/noticias/subcategorias/page.tsx:204` — editar e excluir.
- `backend/noticias/models.py:672` — notícia mantém vínculo anulável.
- Vídeo `gAa2NdnitZU`: visão geral das subcategorias em 150s.

## lacunas

Não executadas alterações. Não foi comprovado o efeito de mudar a categoria de uma subcategoria sobre notícias já vinculadas; confira as notícias antes de fazer essa mudança.
