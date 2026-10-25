---
id: editorial-noticias-editar
titulo: "editar uma notícia"
publico:
  - admin
modulo: notícias
categoria: conteúdo
aba: Notícias
tipo_problema: publicação
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - gAa2NdnitZU
---

## objetivo

Aqui você corrige o texto de uma notícia existente pelo painel.

## pré-requisitos

- Entrar no painel como administrador. O jornalista edita suas matérias pela área do cliente.

## passos

1. Na seção `Conteúdo` do menu lateral, em `Notícias`, clique em `Listar Notícias`. [t=23] [guia=menu:/painel/noticias]
2. Digite o título em `Buscar por título...`. [t=25] [guia=noticias.buscar]
3. Na linha da notícia, clique no lápis `Editar`. [guia=noticias.editar]
4. Se necessário, corrija `Título *`. [guia=noticias-cadastrar.titulo]
5. Se necessário, corrija `Subtítulo`. [guia=noticias-cadastrar.subtitulo]
6. Se necessário, corrija `Título curto`. [guia=noticias-cadastrar.titulo-curto]
7. Se necessário, corrija `Chamada da matéria`. [guia=noticias-cadastrar.chamada]
8. Se necessário, corrija `Conteúdo da matéria *`. [guia=noticias-cadastrar.conteudo]
9. Se necessário, ajuste `Tags / Palavras-chave`. [guia=noticias-cadastrar.tags]
10. Se necessário, corrija `Fonte da matéria`. [guia=noticias-cadastrar.fonte]
11. Se necessário, escolha outra `Categoria`. [guia=noticias-cadastrar.categoria]
12. Se necessário, escolha a `Subcategoria` da categoria escolhida. [guia=noticias-cadastrar.subcategoria]
13. Clique em `Salvar`. [guia=noticias-cadastrar.salvar]

## resultado

A tela mostra `Notícia salva` e volta para a lista. Corrigir texto de uma notícia publicada sem alterar o agendamento mantém a data original.

## desvios

- Para foto, legenda e créditos, use os campos de `Foto de Capa` descritos em “notícias: cadastrar e controlar a publicação”.
- Para status, agendamento, destaque e Google, use os artigos próprios.
- Se houver erro, leia a mensagem e permaneça na tela até conseguir salvar.
- Matéria publicada guarda o rascunho automático neste navegador, sem publicá-lo. O botão `Salvar` confirma a alteração no servidor.

## fontes

- `frontend/src/app/painel/noticias/page.tsx:595` — Editar.
- `frontend/src/app/painel/noticias/[id]/editar/page.tsx:41` — mesmo formulário na edição.
- `frontend/src/components/painel/noticias/NoticiaFormBase.tsx:327` — preservação da data.
- `frontend/src/components/painel/noticias/NoticiaFormBase.tsx:377` — gravação e mensagem.
- Vídeo `gAa2NdnitZU`, legenda em 23s–28s: acesso à lista e busca. Não detalha edição.

## lacunas

Não executado no navegador nem verificado o conteúdo público após salvar.
