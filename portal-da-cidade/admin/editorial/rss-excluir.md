---
id: rss-excluir
titulo: "excluir uma fonte de RSS"
publico:
  - admin
modulo: notícias
categoria: conteúdo
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - rss
  - fonte
  - noticia
  - automatico
  - remover
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - r5rFCgAV0mg
---

## objetivo

Aqui você exclui uma fonte própria de RSS. Fontes da plataforma só podem ser desligadas pelo portal.

## pré-requisitos

- Entrar no painel como administrador.
- A fonte deve mostrar `Própria` na coluna `Origem`.

## passos

1. Na seção `Conteúdo` do menu lateral, em `Notícias Automáticas`, clique em `Fontes de RSS`. [t=9] [guia=menu:/painel/noticias/fontes-rss]
2. Na linha da fonte própria, clique na lixeira `Excluir`. [guia=fontes-rss.excluir]
3. Na confirmação `Excluir a fonte "…"?`, clique em `Excluir`. [guia=confirmacao.confirmar]

## resultado

A tela mostra `Fonte excluída` e recarrega a lista. As notícias já importadas por ela não são apagadas. A exclusão da fonte não pode ser desfeita.

## desvios

Se a origem for `Plataforma`, a lixeira não aparece; use “ligar ou desligar uma fonte de RSS”.

## fontes

- `frontend/src/app/painel/noticias/fontes-rss/page.tsx:149` — exclusão.
- `frontend/src/app/painel/noticias/fontes-rss/page.tsx:289` — distinção de origem.
- `frontend/src/app/painel/noticias/fontes-rss/page.tsx:323` — aviso e confirmação.
- Vídeo `r5rFCgAV0mg`, legenda em 9s–13s: acesso à lista, sem demonstração de exclusão.

## lacunas

Exclusão não executada no navegador.
