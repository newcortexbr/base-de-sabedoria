---
id: ac-suporte-fechar-chamado
titulo: "posso fechar ou cancelar o meu chamado?"
publico:
  - cliente
modulo: suporte
aba: Suporte
tipo_problema:
  - fechar-chamado
  - cancelar-chamado
  - ja-resolvi
  - encerrar-chamado
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
saber o que fazer quando o problema do chamado já foi resolvido.

## pré-requisitos
- ter um chamado aberto.

## explicação
- não existe botão para você fechar ou cancelar um chamado. Quem resolve e fecha é a equipe.
- o chamado não fecha sozinho com o tempo.

## passos
1. No menu da esquerda, clique em `Suporte`.
2. Clique no chamado.
3. Em `Responder`, escreva que o problema foi resolvido e que o chamado pode ser encerrado.
4. Clique em `Enviar resposta`.

## resultado
a equipe recebe o aviso e marca o chamado como `Resolvido` ou `Fechado`.

## desvios
- se o problema voltar depois de `Resolvido`, responda no mesmo chamado: ele volta para a equipe.
- se o chamado já estiver `Fechado`, não dá para responder; abra um novo (veja `ac-responder-chamado-fechado`).

## quando pedir ajuda
não é preciso: a mensagem no chamado basta.

## fontes
- `src/app/(cliente)/suporte/[ticketId]/page.tsx:179` — chamado encerrado não aceita resposta; `:191` — `Responder`; não há botão de fechar.
- `src/domain/operacao/feature-flags.ts:18` — o fechamento automático saiu; chamado só fecha à mão.
- `src/domain/suporte/ticket-service.ts:197` — responder chamado resolvido reabre.
