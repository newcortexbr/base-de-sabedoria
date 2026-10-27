---
id: editorial-noticias
titulo: "notícias: cadastrar e controlar a publicação"
publico:
  - admin
modulo: notícias
categoria: conteúdo
aba: Notícias
tipo_problema: publicação
tags:
  - noticia
  - publicar
  - editar
  - agendar
  - despublicar
  - categoria
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - gAa2NdnitZU
---

## objetivo

Aqui você cadastra uma notícia completa pelo painel. A publicação imediata, o agendamento e o destaque têm controles separados.

## pré-requisitos

- Entrar no painel como administrador. Jornalistas usam a área do cliente e seus artigos próprios de orientação.

## passos

1. Na seção `Conteúdo` do menu lateral, em `Notícias`, clique em `Cadastrar Notícia`. [t=49] [guia=menu:/painel/noticias/cadastrar]
2. Preencha `Título *`. [t=52] [guia=noticias-cadastrar.titulo]
3. Se quiser, preencha `Subtítulo`. [t=52] [guia=noticias-cadastrar.subtitulo]
4. Se quiser, preencha `Título curto`, usado nos cartões da página inicial. [t=54] [guia=noticias-cadastrar.titulo-curto]
5. Se quiser, preencha `Chamada da matéria`, o resumo da notícia. [t=57] [guia=noticias-cadastrar.chamada]
6. Escreva o texto em `Conteúdo da matéria *`. [t=62] [guia=noticias-cadastrar.conteudo]
7. Se quiser, preencha `Tags / Palavras-chave`; Enter ou vírgula confirma cada palavra ou expressão. [t=70] [guia=noticias-cadastrar.tags]
8. Se quiser, preencha `Fonte da matéria`. [t=72] [guia=noticias-cadastrar.fonte]
9. Em `Categoria`, escolha a editoria. [t=74] [guia=noticias-cadastrar.categoria]
10. Se quiser, escolha a `Subcategoria`, após escolher a categoria. [t=77] [guia=noticias-cadastrar.subcategoria]
11. Em `Foto de Capa`, envie a imagem pelo quadro `Arraste ou clique aqui`. [t=80] [guia=noticias-cadastrar.foto-capa]
12. Se quiser, escolha o `Ponto de foco da imagem` no seletor que aparece abaixo da capa. [t=84] [guia=imagem.foco]
13. Se quiser, preencha `Legenda`. [t=87] [guia=noticias-cadastrar.legenda]
14. Se quiser, preencha `Créditos`. [t=89] [guia=noticias-cadastrar.creditos]
15. Em `Status`, escolha `Publicado`. [t=92] [guia=noticias-cadastrar.status]
16. Clique em `Adicionar`. [t=98] [guia=noticias-cadastrar.salvar]

## começar pela lista de notícias

Na tela `Notícias`, o botão `+ Cadastrar Notícia` abre o mesmo formulário. [guia=noticias.cadastrar]

## resultado

A tela mostra `Notícia cadastrada` e volta para a lista. Com `Publicado` e sem agendamento, a notícia pode ser consultada publicamente.

## desvios

- Para guardar sem publicar, escolha `Rascunho` em vez de `Publicado`.
- Para publicar em outra data ou destacar na página inicial, veja “agendar uma notícia” e “colocar uma notícia em destaque”.
- Para ajustar o texto para o Google ou o endereço da página, veja “mudar SEO e endereço de uma notícia”.
- O clique no quadro da capa escolhe o arquivo; o ponto de foco é ajustado no seletor separado abaixo.
- O formulário novo não salva sozinho antes do primeiro cadastro. Notícias já existentes têm salvamento automático próprio; ele não substitui confirmar a publicação.

## fontes

- `frontend/src/components/painel/noticias/NoticiaFormBase.tsx:424` — campos de conteúdo.
- `frontend/src/components/painel/noticias/NoticiaFormBase.tsx:496` — categoria e subcategoria.
- `frontend/src/components/painel/noticias/NoticiaFormBase.tsx:556` — publicação.
- `frontend/src/components/painel/noticias/NoticiaFormBase.tsx:637` — capa e foco separado.
- `backend/noticias/views.py:180` — listagem pública exige publicado e data já atingida.
- Vídeo `gAa2NdnitZU`, legenda em 49s–101s.

## lacunas

Não executado no navegador. Resultado visual da capa e publicação real não verificados.
