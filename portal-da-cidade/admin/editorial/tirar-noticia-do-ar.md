---
id: tirar-noticia-do-ar
titulo: "tirar uma notícia do ar ou publicar pela lista"
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

Aqui você muda entre notícia publicada e rascunho pela chave da lista, sem excluir o texto.

## pré-requisitos

- Entrar no painel como administrador.

## passos

### tirar do ar

1. Na seção `Conteúdo` do menu lateral, em `Notícias`, clique em `Listar Notícias`. [t=23] [guia=menu:/painel/noticias]
2. Na linha de uma notícia publicada, clique na chave `Despublicar`; ela volta a `Rascunho` e sai do site. [t=40] [guia=noticias.alternar-publicacao]

### publicar

1. Na seção `Conteúdo` do menu lateral, em `Notícias`, clique em `Listar Notícias`. [t=23] [guia=menu:/painel/noticias]
2. Na linha de uma notícia não publicada, clique na chave `Publicar`. [t=40] [guia=noticias.alternar-publicacao]

## resultado

Despublicar muda para `Rascunho` e limpa a data de publicação. Publicar muda para `Publicado` e define a data para agora.

## desvios

- Para marcar uma data futura, use “agendar uma notícia”; a chave da lista publica para agora.
- Para arquivar, abra `Editar`, escolha `Arquivado` em `Status` e salve, conforme os controles do formulário.
- A chave não exclui a notícia.

## fontes

- `frontend/src/app/painel/noticias/page.tsx:583` — chave Publicar/Despublicar.
- `backend/noticias/api_admin.py:1038` — alternância de status e data.
- Vídeo `gAa2NdnitZU`: chave em 38s–43s.

## lacunas

Não executada alteração de status nem conferida a página pública após o clique.
