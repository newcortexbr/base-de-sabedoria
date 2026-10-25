---
id: noticias-seo-e-endereco
titulo: "mudar SEO e endereço de uma notícia"
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

Aqui você muda o título e a descrição usados para apresentar a notícia em buscadores e o endereço da página.

## pré-requisitos

- Entrar no painel como administrador.
- Ter a notícia cadastrada.

## passos

1. Na seção `Conteúdo` do menu lateral, em `Notícias`, clique em `Listar Notícias`. [t=23] [guia=menu:/painel/noticias]
2. Na linha da notícia, clique em `Editar`. [guia=noticias.editar]
3. Em `SEO`, se necessário, preencha `Título SEO`. [guia=noticias-cadastrar.titulo-seo]
4. Se necessário, preencha `Descrição SEO`. [guia=noticias-cadastrar.descricao-seo]
5. Se necessário, altere `Endereço da página`. [guia=noticias-cadastrar.endereco]
6. Clique em `Salvar`. [guia=noticias-cadastrar.salvar]

## resultado

O formulário envia os campos de SEO e, na edição, o endereço. Deixar o título SEO em branco usa o título da notícia; descrição SEO em branco usa a chamada, conforme a ajuda da tela.

## desvios

- `Título SEO` aceita até 60 caracteres; `Descrição SEO`, até 160.
- `Endereço da página` só aparece na edição.
- A tela avisa que mudar o endereço pode afetar links compartilhados. Não use a mudança de endereço como promessa de correção imediata no Google.

## fontes

- `frontend/src/components/painel/noticias/NoticiaFormBase.tsx:693` — título SEO.
- `frontend/src/components/painel/noticias/NoticiaFormBase.tsx:705` — descrição SEO.
- `frontend/src/components/painel/noticias/NoticiaFormBase.tsx:717` — endereço.
- `frontend/src/components/painel/noticias/NoticiaFormBase.tsx:281` — envio do endereço na edição.
- Vídeo `gAa2NdnitZU`: contexto de acesso à lista em 23s; não detalha SEO.

## lacunas

Não verificados atualização nos buscadores nem redirecionamentos após troca do endereço.
