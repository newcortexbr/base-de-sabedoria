---
id: noticias-cadastrar-rapido
titulo: "cadastrar uma notícia pelo caminho mais curto"
publico:
  - admin
modulo: notícias
categoria: notícias
aba: Notícias
tipo_problema: publicacao
tags:
  - noticia
  - publicar
  - categoria
  - foto
  - descricao
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - gAa2NdnitZU
---

## objetivo

Aqui você publica uma notícia pelo caminho mais curto, preenchendo o título e o texto.

## pré-requisitos

- Entrar no painel como administrador.

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
15. Em `Status`, escolha `Publicado` para postar agora, ou `Rascunho` para guardar sem publicar: a notícia fica salva e não aparece no site. [t=92] [guia=noticias-cadastrar.status]
16. Clique em `Adicionar`. [t=98] [guia=noticias-cadastrar.salvar]

## resultado

A tela mostra `Notícia cadastrada` e volta para a lista. No cadastro novo, com `Publicado` e sem agendamento, a data de publicação é definida para agora.

## desvios

- O formulário novo começa em `Rascunho`; deixar esse status não publica a notícia.
- Categoria e capa podem ser acrescentadas depois.
- Não conte com salvamento automático antes do primeiro cadastro: o formulário novo ainda não tem uma notícia gravada.

## fontes

- `frontend/src/components/painel/Sidebar.tsx:104` — caminho direto.
- `frontend/src/components/painel/noticias/NoticiaFormBase.tsx:219` — status inicial.
- `frontend/src/components/painel/noticias/NoticiaFormBase.tsx:338` — salvamento automático exige registro existente.
- `frontend/src/components/painel/noticias/NoticiaFormBase.tsx:626` — botão Adicionar/Salvar.
- `backend/noticias/models.py:675` — título e conteúdo; categoria e capa opcionais.
- Vídeo `gAa2NdnitZU`, legenda em 49s–101s.

## lacunas

Não executado no navegador. A presença de texto útil no editor e a resposta real de validação não foram testadas.
