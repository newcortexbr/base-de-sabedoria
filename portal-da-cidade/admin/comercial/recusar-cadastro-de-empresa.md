---
id: recusar-cadastro-de-empresa
titulo: "recusar o cadastro de uma empresa (motivo enviado ao cliente)"
publico:
  - admin
modulo: aprovações
categoria: aprovações
aba: Aprovações
tipo_problema: operacao
tags:
  - recusar
  - empresa
  - guia
  - cadastro
  - autocadastro
  - pendente
  - aprovacao
  - desfazer
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - JYDoZB_vyX8
---

## objetivo

Recuse uma empresa pendente e diga ao cliente o que corrigir.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No menu da esquerda, clique em `Aprovações e Denúncias`. [guia=menu:/painel/aprovacoes] [t=5]
2. Na linha do envio do tipo `Empresa`, clique em `Recusar`. [guia=aprovacoes.recusar]
3. Escreva o motivo. [guia=aprovacoes.motivo]
4. Clique em `Confirmar recusa`. [guia=aprovacoes.confirmar-recusa]

## resultado

A empresa fica `Reprovado` e o cliente recebe por e-mail o motivo que você escreveu.

## perguntas comuns

**o motivo é obrigatório?** Sim.
**cancelar perde o texto?** Sim.
**posso desfazer a recusa?** Não pelo painel.

## fontes

- frontend/src/app/painel/aprovacoes/AprovacoesClient.tsx:168-191,414-456
- backend/guia/moderacao.py:110-117; portais/emails/moderacao.py

## lacunas

- Conferido por leitura do código no HEAD 66d38db2. Sem recusa real nem verificação da entrega do e-mail.
