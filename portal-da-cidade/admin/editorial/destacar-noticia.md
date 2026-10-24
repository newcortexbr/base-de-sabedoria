---
id: destacar-noticia
titulo: "colocar uma notícia em destaque"
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

Aqui você marca uma notícia para a janela principal da página inicial. Destaque é separado do status de publicação.

## pré-requisitos

- Entrar no painel como administrador.
- Ter a notícia cadastrada.

## passos

1. Na seção `Conteúdo` do menu lateral, em `Notícias`, clique em `Listar Notícias`. [t=23] [guia=menu:/painel/noticias]
2. Na linha da notícia, clique em `Editar`. [guia=noticias.editar]
3. Ligue `Destaque na janela principal`. [t=94] [guia=noticias-cadastrar.destaque]
4. Clique em `Salvar`. [guia=noticias-cadastrar.salvar]

## resultado

A notícia fica marcada para destaque. A consulta pública de destaques exige notícia publicada e data de publicação já atingida.

## desvios

Para retirar só o destaque, desligue a mesma chave na edição e salve. Isso não muda o status da notícia.

## fontes

- `frontend/src/components/painel/noticias/NoticiaFormBase.tsx:576` — controle de destaque.
- `backend/noticias/views.py:180` — filtro público e parâmetro de destaque.
- Vídeo `gAa2NdnitZU`: destaque em 94s–98s.

## lacunas

Não conferida a posição final na página inicial; depende da consulta e configuração da página do portal.
