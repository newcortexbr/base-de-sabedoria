---
id: editar-categorias-de-noticias
titulo: "editar, pausar ou excluir categorias de notícias"
publico:
  - admin
modulo: notícias
categoria: conteúdo
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - categoria
  - noticia
  - pausar
  - excluir
  - ordenar
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - gAa2NdnitZU
---

## objetivo

Aqui você troca nome e cor, liga ou desliga e exclui categorias de notícias. Cada ação tem um caminho separado abaixo.

## pré-requisitos

- Entrar no painel como administrador.

## passos

### mudar nome ou cor

1. Na seção `Conteúdo` do menu lateral, em `Notícias`, clique em `Gerenciar Categorias`. [t=145] [guia=menu:/painel/noticias/categorias]
2. Na linha da categoria, clique no lápis `Editar`. [guia=noticias-categorias.editar]
3. Se necessário, altere `Nome *`. [guia=noticias-categorias.nome]
4. Se necessário, escolha outra `Cor` no seletor. [guia=noticias-categorias.cor]
5. Clique em `Salvar`. [guia=noticias-categorias.salvar]

### ligar ou desligar

1. Na seção `Conteúdo` do menu lateral, em `Notícias`, clique em `Gerenciar Categorias`. [t=145] [guia=menu:/painel/noticias/categorias]
2. Na coluna `Ativo`, clique em `Ativo` para desativar ou em `Inativo` para ativar. [guia=noticias-categorias.ativo]

### excluir

1. Na seção `Conteúdo` do menu lateral, em `Notícias`, clique em `Gerenciar Categorias`. [t=145] [guia=menu:/painel/noticias/categorias]
2. Na linha da categoria, clique na lixeira `Excluir`. [guia=noticias-categorias.excluir]
3. Após ler o aviso sobre notícias e subcategorias, clique em `Excluir` na confirmação. [guia=confirmacao.confirmar]

## resultado

Editar grava nome e cor. Desativar muda a situação da categoria, sem excluí-la. Excluir remove a categoria e suas subcategorias; as notícias vinculadas ficam sem esses vínculos.

## desvios

- Categoria inativa deixa de aparecer no catálogo público de categorias. Isso não é comando para tirar as notícias do ar.
- Exclusão não é a mesma ação que desativação; para esconder uma notícia, veja “tirar uma notícia do ar”.
- Se houver erro de nome repetido, corrija o campo indicado.

## fontes

- `frontend/src/app/painel/noticias/categorias/page.tsx:170` — alternância.
- `frontend/src/app/painel/noticias/categorias/page.tsx:192` — aviso de exclusão.
- `frontend/src/app/painel/noticias/categorias/page.tsx:262` — ações da linha.
- `backend/noticias/models.py:120` — subcategorias acompanham exclusão da categoria.
- `backend/noticias/models.py:671` — notícias usam vínculo anulável.
- `backend/noticias/views.py:102` — catálogo público filtra categorias ativas.
- Vídeo `gAa2NdnitZU`: visão geral das categorias em 145s.

## lacunas

Não executadas edições ou exclusões. Efeito visual em páginas públicas após a alteração não conferido.
