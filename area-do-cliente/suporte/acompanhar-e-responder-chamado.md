---
id: ac-acompanhar-e-responder-chamado
titulo: "acompanhar um chamado e responder a equipe"
publico:
  - cliente
modulo: suporte
aba: Suporte
tipo_problema:
  - acompanhar chamado
  - responder chamado
  - ver resposta
  - meus chamados
  - protocolo
  - aguardando você
  - equipe respondeu
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo

ver a resposta da equipe e continuar a conversa no mesmo chamado.

## pré-requisitos

- Estar logado.
- Ter aberto um chamado.

## passos

1. No menu da esquerda, clique em `Suporte`. [guia=menu:/suporte]
2. Na lista `Acompanhamento`, use os filtros `Todos`, `Em andamento` ou `Resolvidos`, se precisar. [guia=fora]
3. Clique no chamado. Abre a página do chamado (`/suporte/<código do chamado>`). [guia=fora]
4. Leia o `Histórico do atendimento`. As mensagens da equipe aparecem como "Equipe New Córtex". [guia=fora]
5. Na caixa `Responder`, escreva em `Sua resposta (aceita markdown)`. Embaixo aparece a `Prévia` de como vai ficar. [guia=chamado.resposta]
6. Se precisar, clique em `Anexar arquivo`. [guia=chamado-novo.anexar]
7. Clique em `Enviar resposta`. [guia=chamado.enviar-resposta]

## resultado

a sua mensagem entra no histórico e o chamado volta para a equipe. Se ele estava `Resolvido` ou `Aguardando você`, volta a ficar em andamento.

## desvios

- Ao lado, em `Dados do chamado`, ficam `Protocolo`, `Assunto`, `Negócio` (ou "Geral"), `Aberto em` e, se for continuação, `Continuação de` com `Ver chamado anterior`.
- O selo `Aguardando você` quer dizer que a equipe espera uma resposta sua.
- "Escreva uma mensagem antes de enviar.": a resposta está vazia.
- "Não foi possível enviar sua resposta. Atualize a página e tente de novo.": falha momentânea.
- Chamado `Fechado`: veja `ac-responder-chamado-fechado`.
- Para voltar à lista, clique em `Voltar aos chamados`.
- A resposta da equipe também chega por e-mail, com o assunto "Resposta ao seu chamado ...".

## quando pedir ajuda

se a equipe não responder, responda no mesmo chamado em vez de abrir outro. Abrir vários chamados para o mesmo problema atrasa o atendimento.

## fontes

- `src/app/(cliente)/suporte/SuporteCliente.tsx:86` — selos da lista; `:100` — "Acompanhamento"; `:120` — filtros.
- `src/app/(cliente)/suporte/[ticketId]/page.tsx:109` — `Voltar aos chamados`; `:118` — "Histórico do atendimento"; `:136` — "Equipe New Córtex"; `:176` — "Responder"; `:194`–`:221` — "Dados do chamado".
- `src/app/(cliente)/suporte/[ticketId]/ReplyForm.tsx:59` — campo de resposta; `:73` — "Prévia"; `:85` — `Enviar resposta`.
- `src/app/(cliente)/suporte/[ticketId]/actions.ts:32` e `:40` — mensagens de erro.
- `src/domain/suporte/ticket-service.ts:197` e `:234` — responder chamado resolvido ou aguardando volta para em andamento.
- `src/ui/emails/templates.ts:210` — e-mail de resposta.

## lacunas

o endereço do chamado usa um código interno, não o número do protocolo. "Aceita markdown" é jargão; o cliente pode escrever texto normal.
