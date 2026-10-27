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
3. Escreva o texto em `Conteúdo da matéria *`. [t=62] [guia=noticias-cadastrar.conteudo]
4. Em `Status`, escolha `Publicado`. [t=92] [guia=noticias-cadastrar.status]
5. Clique em `Adicionar`. [t=98] [guia=noticias-cadastrar.salvar]

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
