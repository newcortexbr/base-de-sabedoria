---
id: agendar-noticia
titulo: "agendar uma notícia"
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

Aqui você marca quando uma notícia deve ficar disponível ao público ou antecipa uma notícia já agendada.

## pré-requisitos

- Entrar no painel como administrador.
- Ter a notícia cadastrada.

## passos

### marcar ou mudar data

1. Na seção `Conteúdo` do menu lateral, em `Notícias`, clique em `Listar Notícias`. [t=23] [guia=menu:/painel/noticias]
2. Na linha da notícia, clique em `Editar`. [guia=noticias.editar]
3. Em `Status`, escolha `Publicado`. [t=92] [guia=noticias-cadastrar.status]
4. Ligue `Agendar notícia`, caso esteja desligado. [t=92] [guia=noticias-cadastrar.agendar]
5. Preencha o dia e a hora futuros em `Publicar em`. [guia=noticias-cadastrar.publicar-em]
6. Clique em `Salvar`. [guia=noticias-cadastrar.salvar]

### publicar agora uma notícia agendada

1. Na seção `Conteúdo` do menu lateral, em `Notícias`, clique em `Listar Notícias`. [t=23] [guia=menu:/painel/noticias]
2. Na linha da notícia agendada, clique em `Editar`. [guia=noticias.editar]
3. Desligue `Agendar notícia`. [guia=noticias-cadastrar.agendar]
4. Clique em `Salvar`. [guia=noticias-cadastrar.salvar]

## resultado

Com data futura, a lista mostra `agendado` e a consulta pública esconde a notícia até a data. Desligar o agendamento de uma notícia que estava agendada remove a data futura ao salvar, permitindo publicar agora.

## desvios

- A chave de agendamento só aparece com status `Publicado`.
- Em notícia já publicada e sem agendamento futuro, editar o texto com a chave desligada mantém a data original.
- Para guardar sem publicar, use `Rascunho`; não marque uma data só para esconder o texto.

## fontes

- `frontend/src/components/painel/noticias/NoticiaFormBase.tsx:229` — detecção da notícia agendada.
- `frontend/src/components/painel/noticias/NoticiaFormBase.tsx:305` — envio ou remoção da data.
- `frontend/src/components/painel/noticias/NoticiaFormBase.tsx:549` — chave e campo.
- `backend/noticias/views.py:180` — filtro de data pública.
- Vídeo `gAa2NdnitZU`: publicação e agendamento em 92s.

## lacunas

Não executada passagem do horário agendado no produto. O fuso exibido pelo navegador não foi conferido em ambiente real.
