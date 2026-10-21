---
id: ac-situacoes-do-chamado
titulo: "o que significa cada situação do chamado e quando ele fecha"
publico:
  - cliente
modulo: suporte
aba: Suporte
tipo_problema:
  - situação do chamado
  - chamado fechado
  - chamado resolvido
  - em análise
  - aguardando você
  - fechou sozinho
  - fechamento automático
  - prazo de resposta
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo

entender os selos dos chamados e o que acontece com um chamado resolvido.

## explicação

selos na lista `Acompanhamento`:

- `Aberto` — chamado recebido, ainda não analisado.
- `Em análise` — a equipe está cuidando.
- `Equipe respondeu` — a última mensagem é da equipe; leia a resposta.
- `Aguardando você` — a equipe precisa de uma resposta ou informação sua.
- `Resolvido` — a equipe considera o problema resolvido. Se não estiver, responda no próprio chamado e ele volta para análise.
- `Fechado` — encerrado. Não recebe mais mensagens; responder cria um chamado novo ligado a ele.

No filtro, `Resolvidos` junta `Resolvido` e `Fechado`; `Em andamento` mostra o resto.

Fechamento: não existe fechamento automático por tempo. Um chamado só fica `Fechado` quando a equipe fecha.

Prazo: a Área do Cliente não define prazo de resposta.

## quando pedir ajuda

se o chamado está `Aguardando você`, responda nele. Se está parado há muito tempo, mande uma nova mensagem no mesmo chamado.

## fontes

- `src/app/(cliente)/suporte/SuporteCliente.tsx:79` — `Resolvidos` = resolvido e fechado; `:86`–`:91` — selos da lista.
- `src/ui/ticket/TicketStatusBadge.tsx:18` — "Aberto", "Em andamento", "Aguardando você", "Resolvido", "Fechado".
- `src/domain/operacao/feature-flags.ts:18` — a rotina de fechamento automático saiu em 20/09/2026; "chamado só fecha à mão".
- `src/domain/suporte/ticket-service.ts:197` — responder resolvido reabre; fechado nunca reabre.

## lacunas

a lista usa "Em análise" e o selo do detalhe usa "Em andamento" para a mesma situação. Existe um modelo de e-mail "Ticket ... resolvido" que fala em fechar "em N dias", mas nada no código o envia hoje (`src/ui/emails/templates.ts:198`); se voltar a ser enviado, vai prometer um fechamento automático que não existe.
