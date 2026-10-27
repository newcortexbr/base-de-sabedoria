---
id: editar-jornalista
titulo: "mudar o nome de um jornalista"
publico:
  - admin
modulo: notícias
categoria: admin
aba: Notícias
tipo_problema: cadastro
tags:
  - jornalista
  - nome
  - renomear
  - noticia
  - cadastro
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - gAa2NdnitZU
---

## objetivo

Aqui você muda o nome do cadastro de um jornalista. O e-mail de login fica desabilitado na edição.

## pré-requisitos

- Entrar no painel como administrador.

## passos

1. Na seção `Conteúdo` do menu lateral, em `Notícias`, clique em `Jornalistas`. [t=109] [guia=menu:/painel/noticias/jornalistas]
2. Na linha da pessoa, clique no lápis `Editar`. [t=135] [guia=jornalistas.editar]
3. Altere o campo `Nome *`. [guia=jornalistas.nome]
4. Clique em `Salvar`. [guia=jornalistas.salvar]

## resultado

A tela mostra `Jornalista atualizado` e recarrega a lista.

## desvios

Trocar o nome do cadastro não é o mesmo que editar a ficha pública de autor. Não é possível trocar o e-mail por este formulário.

## fontes

- `frontend/src/app/painel/noticias/jornalistas/page.tsx:82` — atualização envia somente nome.
- `frontend/src/app/painel/noticias/jornalistas/page.tsx:123` — campo de nome; e-mail desabilitado.
- Vídeo `gAa2NdnitZU`, legenda em 109s e 135s.

## lacunas

Não executado no navegador. O efeito sobre a assinatura pública não foi verificado; este artigo trata apenas do nome do cadastro.
