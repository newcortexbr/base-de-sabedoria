---
id: noticias-cadastrar-rapido
titulo: "cadastrar uma notícia pelo caminho mais curto"
publico:
  - admin
modulo: notícias
categoria: notícias
aba: Notícias
tipo_problema: publicacao
status: rascunho-documental
revisado_em: 2026-10-22
validacao: docs-e-codigo
---

## objetivo

aqui você coloca uma notícia no ar com o mínimo de campos.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No menu da esquerda, clique em `Notícias` e depois em `Cadastrar Notícia` (o primeiro item). [guia=menu:/painel/noticias/cadastrar]
2. Escreva o `Título *`. [guia=noticias-cadastrar.titulo]
3. Escreva o texto em `Conteúdo da matéria *`. [guia=noticias-cadastrar.conteudo]
4. Em `Status`, escolha `Publicado`. Sem isso a notícia fica como `Rascunho`, guardada e fora do site. [guia=noticias-cadastrar.status]
5. Clique em `Adicionar`. [guia=noticias-cadastrar.salvar]

## resultado

a notícia entra no ar. Tudo que não tem asterisco é opcional: subtítulo, categoria, foto de capa, tags e destaque podem ficar para depois.

## desvios

- notícia sem categoria e sem foto aparece pior nas listas do site; vale preencher quando der (veja "publicar e acompanhar notícias").
- o rascunho é salvo sozinho enquanto você escreve.

## fontes

- `portal-cidade/frontend/src/components/painel/Sidebar.tsx:101`
- `portal-cidade/frontend/src/components/painel/noticias/NoticiaFormBase.tsx:205`
- `portal-cidade/frontend/src/components/painel/noticias/NoticiaFormBase.tsx:424`
- `portal-cidade/backend/noticias/models.py:671`

## lacunas

não verificado visualmente. O texto exato do botão (`Adicionar`) vem do artigo "publicar e acompanhar notícias" e não foi reconferido no código. Que `Conteúdo da matéria *` é exigido pelo servidor não foi confirmado; o `*` está no rótulo. O salvamento automático foi inferido de `autosave` no formulário.
