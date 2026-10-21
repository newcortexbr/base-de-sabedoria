---
id: ac-suporte-prazo-de-resposta
titulo: "quanto tempo o suporte demora para responder"
publico:
  - cliente
modulo: suporte
aba: Suporte
tipo_problema:
  - demora
  - prazo-de-resposta
  - ninguem-respondeu
  - quando-vao-responder
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
saber como acompanhar a resposta do seu chamado e o que fazer enquanto espera.

## pré-requisitos
- ter aberto um chamado.

## explicação
- a Área do Cliente não mostra prazo de resposta.
- a resposta da equipe aparece na página do chamado, no `Histórico do atendimento`, e chega por e-mail com o assunto "Resposta ao seu chamado ...". Na lista de `Suporte`, o chamado ganha o selo `Equipe respondeu`.
- se você abriu o chamado pelo chat, a resposta também aparece na conversa do chat.

## passos
1. No menu da esquerda, clique em `Suporte`.
2. Veja o selo do chamado na lista (veja `ac-situacoes-do-chamado`).
3. Para acrescentar informação ou cobrar retorno, clique no chamado e escreva em `Responder`.
4. Clique em `Enviar resposta`.

## resultado
você acompanha o chamado e a equipe recebe a sua mensagem no mesmo lugar.

## desvios
- não abra outro chamado sobre o mesmo assunto: isso divide a conversa. Responda no mesmo.
- `Aguardando você`: a equipe está esperando uma resposta sua; enquanto você não responde, o chamado não anda.

## quando pedir ajuda
se o assunto for urgente (por exemplo, portal fora do ar), diga isso no `Título` ou na resposta.

## fontes
- `src/app/(cliente)/suporte/SuporteCliente.tsx:86` — selos da lista, incluindo `Equipe respondeu` e `Aguardando você`.
- `src/ui/emails/templates.ts:210` — e-mail "Resposta ao seu chamado ...".
- `src/domain/suporte/assistente/chat/chamado.ts:16` — resposta também aparece no chat.

## lacunas
não há prazo de atendimento nem horário de funcionamento da equipe no código ou nos docs.
