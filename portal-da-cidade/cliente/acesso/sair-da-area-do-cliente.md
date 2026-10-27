---
id: acesso-sair-area-cliente
titulo: sair da área do cliente
publico:
  - cliente
  - jornalista
categoria: conta
aba: nao-se-aplica
tipo_problema:
  - como sair da conta
  - fazer logout
  - trocar de conta
tags:
  - sair
  - conta
  - cliente
  - area do cliente
  - entrar
modulo: acesso
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
---

## objetivo

sair da sua conta na área do cliente, por exemplo para entrar com outro e-mail.

## pré-requisitos

- estar logado na área do cliente.

## passos

1. No fim do menu da esquerda, onde aparecem seu nome e e-mail, clique no ícone `Sair`. [guia=menu-cliente.sair]

## resultado

a sessão é encerrada neste aparelho; para voltar, entre de novo com e-mail e senha (veja "entrar na área do cliente").

## desvios

- no celular, abra primeiro o menu pelo botão do topo; o `Sair` fica no fim da gaveta.
- trocar a senha desconecta os outros aparelhos; veja "trocar a senha estando logado".

## fontes

- `portal-cidade/frontend/src/app/minha-conta/ClienteSidebar.tsx:224-233` — bloco com nome, e-mail e botão `Sair`.

## lacunas

- para onde a tela vai depois de sair não foi verificado.
- o botão tem só o ícone (rótulo `Sair` no título e na acessibilidade).
