---
id: editorial-visibilidade
titulo: "publicação e visibilidade: notícias"
publico:
  - admin
modulo: notícias
categoria: conteúdo
aba: não-se-aplica
tipo_problema: visibilidade
tags:
  - noticia
  - no ar
  - status
  - publicar
  - despublicar
  - rascunho
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - gAa2NdnitZU
---

## objetivo

Aqui você verifica a situação de uma notícia pelo painel. `Publicado` com data futura fica como `agendado` e não é exibido ao público antes da data.

## pré-requisitos

- Entrar no painel como administrador.

## passos

1. Na seção `Conteúdo` do menu lateral, em `Notícias`, clique em `Listar Notícias`. [t=23] [guia=menu:/painel/noticias]
2. Digite o título em `Buscar por título...`. [t=25] [guia=noticias.buscar]
3. Confira a situação na coluna `Status`. [t=36] [guia=noticias.status-linha]
4. Para conferir a configuração, clique no lápis `Editar` da notícia. [guia=noticias.editar]
5. Confira o valor de `Status`. [guia=noticias-cadastrar.status]
6. Se `Agendar notícia` estiver ligado, confira a data e a hora em `Publicar em`. [guia=noticias-cadastrar.publicar-em]

## resultado

`Rascunho` e `Arquivado` ficam fora da consulta pública. `agendado` indica uma notícia publicada com data futura. Destaque não substitui publicação.

## desvios

- Para publicar em outra data, veja “agendar uma notícia”.
- Para esconder uma notícia publicada, veja “tirar uma notícia do ar”.
- Se a consulta pública falhar, confira o status e a data em `Editar` antes de presumir que é atraso do site.
- Para Artigos e Eventos, consulte os artigos de visibilidade próprios desses módulos.

## fontes

- `frontend/src/app/painel/noticias/page.tsx:24` — status agendado.
- `frontend/src/app/painel/noticias/page.tsx:568` — situação na linha.
- `frontend/src/components/painel/noticias/NoticiaFormBase.tsx:572` — controle de agendamento e data.
- `backend/noticias/views.py:180` — filtro público.
- `backend/noticias/views.py:230` — detalhe público exige publicado e data atingida.
- Vídeo `gAa2NdnitZU`, legenda em 23s–38s.

## lacunas

Não executada consulta pública. Estado do módulo, domínio e cache no ambiente publicado não foram verificados.
