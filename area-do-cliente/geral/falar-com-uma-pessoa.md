---
id: ac-falar-com-uma-pessoa
titulo: "quero falar com uma pessoa da equipe"
publico:
  - cliente
modulo: geral
aba: Suporte
tipo_problema:
  - falar-com-atendente
  - falar-com-humano
  - whatsapp
  - telefone
  - contato
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
saber como chegar à equipe da New Córtex.

## pré-requisitos
- ter entrado na Área do Cliente.

## explicação
o atendimento da equipe é por chamado. Existem três caminhos até ele:
- pela tela `Suporte`, com `Abrir novo chamado` (veja `ac-abrir-chamado`);
- pelo chat do balão no canto: diga "quero falar com um atendente" e ele abre o chamado por você (veja `ac-chat-de-suporte-com-ia`);
- na instalação: se você responder `Não, ainda não consigo` na confirmação final, o chamado é aberto sozinho e, quando a equipe deixou configurado, aparece o botão `Falar com o suporte agora`, que abre o WhatsApp do suporte.

a Área do Cliente não mostra telefone nem chat ao vivo com atendente. Para dúvidas de compra (antes de ser cliente), a página de cidade indisponível tem `Falar com o comercial`.

## passos
1. No menu da esquerda, clique em `Suporte`.
2. Clique em `Abrir novo chamado`.
3. Escolha o `Assunto` e o `Negócio vinculado`, escreva o `Título` e a `Mensagem`.
4. Clique em `Enviar chamado`.

## resultado
o chamado fica registrado com número, e a resposta da equipe chega na página do chamado e por e-mail.

## desvios
- conta bloqueada também abre chamado: `Suporte` continua disponível.
- já tem um chamado sobre o assunto: responda nele em vez de abrir outro (veja `ac-acompanhar-e-responder-chamado`).

## quando pedir ajuda
este artigo já é o caminho para pedir ajuda.

## fontes
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:1100` — `Chamado aberto com o suporte` e `Falar com o suporte agora` (WhatsApp, só se configurado).
- `src/app/(cliente)/api/instalacao/confirmacao/deps.ts:34` — o WhatsApp do suporte vem da configuração e pode estar vazio.
- `src/domain/suporte/assistente/chat/texto.ts:88` — pedido de falar com pessoa faz o chat abrir chamado.
- `src/app/(cliente)/suporte/novo/NovoTicketForm.tsx:264` — confirmação do chamado aberto.

## lacunas
não há horário de atendimento nem prazo de resposta no código (veja `ac-suporte-prazo-de-resposta`).
