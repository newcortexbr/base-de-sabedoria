---
id: ac-responder-chamado-fechado
titulo: "responder um chamado que já está fechado"
publico:
  - cliente
modulo: suporte
aba: Suporte
tipo_problema:
  - chamado fechado
  - reabrir chamado
  - problema voltou
  - continuar chamado
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo

continuar um assunto cujo chamado já foi fechado.

## pré-requisitos

- Estar logado.

## passos

1. No menu, clique em `Suporte` e abra o chamado `Fechado`. [guia=menu:/suporte]
2. Na caixa `Responder`, leia o aviso "Este chamado está fechado. Responder abre um novo chamado, referenciando este." [guia=fora]
3. Escreva a mensagem. [guia=chamado.resposta]
4. Clique em `Responder e abrir novo chamado`. [guia=chamado.enviar-resposta]

## resultado

um chamado novo é aberto com a sua mensagem. Nele, em `Dados do chamado`, aparece `Continuação de` com o link `Ver chamado anterior`. O chamado antigo continua fechado e sem alteração.

## desvios

- Chamado `Resolvido` (ainda não fechado) não cria chamado novo: a resposta reabre o mesmo.

## quando pedir ajuda

—

## fontes

- `src/app/(cliente)/suporte/[ticketId]/ReplyForm.tsx:54` — aviso de chamado fechado; `:85` — `Responder e abrir novo chamado`.
- `src/domain/suporte/ticket-service.ts:197` — responder fechado cria chamado novo ligado ao antigo.
- `src/app/(cliente)/suporte/[ticketId]/page.tsx:219` — "Continuação de" / "Ver chamado anterior".

## lacunas

tela não validada no navegador.
