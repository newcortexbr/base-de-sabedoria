---
id: cliente-pausar-vender-ou-excluir-anuncio
titulo: pausar, marcar como vendido ou excluir um anúncio
publico:
  - cliente
modulo: classificados
categoria: classificados
aba: Classificados
tipo_problema:
  - anuncios-proprios
  - status-do-anuncio
tags:
  - pausar
  - vendido
  - excluir
  - classificado
  - anuncio
  - despublicar
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - S-YcDWiimEo
---

## objetivo

tirar um anúncio do ar por um tempo (pausar), marcar que o item foi vendido ou apagar o anúncio.

## pré-requisitos

- ter vínculo de anunciante e estar na área do cliente autenticada.

## passos

1. No menu da esquerda, clique em `Classificados` (na empresa, fica na parte `O que eu publico`). [t=9] [guia=menu:/minha-conta/classificados]
2. No anúncio, para pausar clique no ícone `Pausar` (anúncio `Ativo`); para colocar de volta, clique no ícone `Reativar` (anúncio `Pausado`). [t=99] [guia=meus-anuncios.pausar]
3. Quando o item for vendido, clique no ícone `Marcar como vendido` do anúncio. [t=99] [guia=meus-anuncios.vendido]
4. Confirme na janela do navegador `Marcar "…" como vendido? O anúncio sai do site.` [guia=fora]
5. Para apagar, clique no ícone de lixeira `Excluir` e confirme na janela do navegador. [t=99] [guia=meus-anuncios.excluir]

## resultado

anúncio pausado fica `Pausado`; vendido fica `Vendido` e sai do site; excluído some da lista e não pode ser recuperado. O quadro `Vendidos` do topo conta os vendidos.

## desvios

- pausar, reativar e marcar como vendido só aparecem em anúncio `Ativo` ou `Pausado`; excluir aparece em todos.
- se o plano não deixar reativar (limite de anúncios no ar), a tela mostra a mensagem do servidor acima da lista.

## fontes

- `frontend/src/app/minha-conta/classificados/page.tsx:147-210` — pausar, vender e excluir; `:337-360` ícones.

## lacunas

tela não validada no navegador nesta tarefa.
