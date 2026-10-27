---
id: rss-ligar-desligar
titulo: "ligar ou desligar uma fonte de RSS"
publico:
  - admin
modulo: notícias
categoria: conteúdo
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - desligar
  - rss
  - fonte
  - noticia
  - automatico
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - r5rFCgAV0mg
---

## objetivo

Aqui você pausa ou retoma as importações de uma fonte pela lista de RSS.

## pré-requisitos

- Entrar no painel como administrador.

## passos

1. Na seção `Conteúdo` do menu lateral, em `Notícias Automáticas`, clique em `Fontes de RSS`. [t=9] [guia=menu:/painel/noticias/fontes-rss]
2. Na linha da fonte, clique na chave da coluna `Status`, cujo aviso é `Clique para desativar` quando ligada e `Clique para ativar` quando desligada. [t=17] [guia=fontes-rss.status]

## resultado

A chave verde indica fonte ligada; a cinza indica desligada. Desligada, a fonte não importa novas notícias.

## desvios

- A pausa não exclui as notícias já importadas.
- Ligar uma fonte pode importar uma leva imediatamente. Com `Publicar direto no site` marcado, essa leva pode ir ao ar; desligado, entra como rascunho.
- Aguarde o retorno do primeiro clique; a chave fica indisponível durante a alteração.
- A mesma configuração aparece como `Status *` na edição da fonte.

## fontes

- `frontend/src/app/painel/noticias/fontes-rss/page.tsx:130` — alteração e retorno.
- `frontend/src/app/painel/noticias/fontes-rss/page.tsx:266` — chave.
- `frontend/src/components/painel/FonteRssForm.tsx:345` — Ligada/Desligada.
- `backend/noticias/api_admin.py:1440` — rodada ao salvar fonte ativa.
- Vídeo `r5rFCgAV0mg`, legenda em 9s e 17s.

## lacunas

Não executadas ativação, pausa ou importação no navegador.
