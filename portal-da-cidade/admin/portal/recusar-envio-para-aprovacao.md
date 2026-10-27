---
id: recusar-envio-para-aprovacao
titulo: "recusar um envio que aguarda aprovação (motivo, e-mail ao cliente)"
publico:
  - admin
modulo: aprovações
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - recusar
  - aprovacao
  - fila
  - pendente
  - moderacao
  - notificacao
  - desfazer
  - cliente
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - JYDoZB_vyX8
---

## objetivo

Recuse um envio e diga ao cliente o que corrigir.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No começo do menu da esquerda, clique em `Aprovações e Denúncias`. [guia=menu:/painel/aprovacoes]
2. Clique na aba `Aprovações`. [guia=aprovacoes-aba:aprovacoes]
3. Na linha do envio, clique em `Recusar`. [guia=aprovacoes.recusar]
4. Escreva o motivo. [guia=aprovacoes.motivo]
5. Clique em `Confirmar recusa`. [guia=aprovacoes.confirmar-recusa]

Também dá para recusar de dentro do detalhe: clique em `Ver detalhe` e depois em `Recusar`. [guia=aprovacoes.recusar-detalhe]

## resultado

Aparece `Publicação recusada`, o envio sai da lista e o cliente recebe por e-mail o motivo que você escreveu, com o link para a área dele.

## perguntas comuns

**o motivo é obrigatório?** Sim. Sem motivo aparece `Informe o motivo da recusa.` Não há limite de tamanho nem textos prontos.
**o cliente vê exatamente o que escrevo?** Sim, o texto vai no e-mail e fica gravado no item.
**cancelar ou clicar fora perde o texto?** Sim. A janela fecha e o motivo escrito se perde.
**recusar dentro do detalhe perde o que li?** Não. O detalhe fecha e abre a janela do motivo; você pode abrir o detalhe de novo depois.
**o que o cliente faz depois?** O e-mail leva à área do cliente. O portal não tem, nesta tela, um passo a passo do reenvio para cada tipo.
**posso desfazer uma recusa?** Não. O item fica recusado até o cliente reenviar.

## fontes

- frontend/src/app/painel/aprovacoes/AprovacoesClient.tsx:168-191,398-404,414-456
- backend/portais/views_admin.py:966-976
- backend/portais/emails/moderacao.py (e-mail com motivo e link /minha-conta)

## lacunas

- Conferido por leitura do código no HEAD 66d38db2 (wt-suporte-tool). Sem execução do produto nem validação visual.
- Como cada tipo é reenviado pelo cliente não foi verificado; banner não tem reenvio.
