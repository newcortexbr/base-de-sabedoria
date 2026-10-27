---
id: rss-publicar-direto
titulo: "escolher se as notícias de uma fonte de RSS vão ao ar sozinhas"
publico:
  - admin
modulo: notícias
categoria: conteúdo
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - publicar
  - automatico
  - noticia
  - fonte
  - rascunho
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - r5rFCgAV0mg
---

## objetivo

Aqui você escolhe se as próximas notícias importadas por uma fonte entram publicadas ou como rascunho para revisão.

## pré-requisitos

- Entrar no painel como administrador.
- Ter a fonte cadastrada.

## passos

1. Na seção `Conteúdo` do menu lateral, em `Notícias Automáticas`, clique em `Fontes de RSS`. [t=9] [guia=menu:/painel/noticias/fontes-rss]
2. Na linha da fonte, clique no lápis `Editar`; em fonte da plataforma, o aviso do lápis é `Configurar (título e URL são da plataforma)`. [t=75] [guia=fontes-rss.editar]
3. Ajuste `Publicar direto no site`: marcado recebe notícias publicadas; desmarcado recebe rascunhos. [t=83] [guia=fontes-rss-cadastrar.publicar-direto]
4. Clique em `Salvar`. [guia=fontes-rss-cadastrar.enviar]

## resultado

As próximas importações seguem a escolha. A opção não é o liga/desliga da fonte: `Status *` é um controle separado.

## desvios

- Fonte `Desligada` não importa, mesmo com publicação direta marcada.
- Salvar uma fonte ligada solicita uma rodada; ela pode publicar notícias nessa ocasião se houver material novo.
- Não é necessário alterar a quantidade para mudar a publicação direta.
- Para rever título, endereço ou quantidade, veja “editar endereço e quantidade de uma fonte de RSS”.

## fontes

- `frontend/src/app/painel/noticias/fontes-rss/page.tsx:282` — lápis e aviso por origem.
- `frontend/src/components/painel/FonteRssForm.tsx:376` — checkbox.
- `frontend/src/components/painel/FonteRssForm.tsx:141` — envio dos controles separados.
- `backend/noticias/api_admin.py:1440` — rodada ao salvar.
- Vídeo `r5rFCgAV0mg`, legenda em 75s–91s.

## lacunas

Não executada importação. Não se afirma que mudar essa opção altere notícias importadas anteriormente.
