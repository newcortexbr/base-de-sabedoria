---
id: ac-reativar-depois-de-pagar
titulo: "paguei: quando meu negócio volta a funcionar?"
publico:
  - cliente
modulo: financeiro
aba: Pagamentos
tipo_problema:
  - reativar
  - paguei e continua suspenso
  - liberar acesso
  - voltar a funcionar
  - reativação
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo

saber como e quando um negócio suspenso por atraso volta a funcionar.

## explicação

a reativação é automática e acontece quando:

1. o Asaas confirma o pagamento da cobrança vencida; e
2. não sobra nenhuma outra cobrança vencida daquele negócio (reserva territorial ou mensalidade).

Aí o negócio volta a funcionar: o portal, as ferramentas e o treinamento voltam, e você recebe o e-mail "Licença reativada". Não precisa abrir chamado.

O tempo depende da forma de pagamento: a reativação só acontece depois da confirmação do pagamento pelo Asaas.

Não reativa sozinho quando a suspensão não foi por atraso — por exemplo, por reembolso, contestação no cartão ou decisão da equipe. Nesses casos é a equipe que decide.

## passos

1. No menu, clique em `Pagamentos` do negócio e confira se todas as cobranças vencidas estão `Pago`. [guia=menu:/negocios/[licenseId]/pagamentos]
2. Se ainda houver alguma `Em atraso`, pague também (veja `ac-pagar-cobranca-pendente`). [guia=fora]
3. Atualize a página depois que o pagamento for confirmado. [guia=fora]

## resultado

em `Meus negócios` o selo `Suspenso` some (volta a `Portal no ar` ou à etapa da instalação), em `Pagamentos` os cartões voltam a `Em dia` ou `A vencer`, e o aviso `Portal suspenso` some do `Início`.

## desvios

- Pagou só uma de duas cobranças vencidas: o negócio continua suspenso até pagar a outra.
- Em casos raros, se a sua cidade tiver sido vendida para outra pessoa enquanto o negócio estava suspenso, a reativação não acontece e a equipe analisa o caso.

## quando pedir ajuda

peça ajuda se o pagamento aparece como `Pago`, não há outra cobrança vencida, e o negócio continua suspenso. Use `Assunto` `Pagamentos`.

## fontes

- `src/domain/financeiro/handlers/reactivation.ts:1` — reativação depois da confirmação do pagamento; `:165` — só reativa suspensão por atraso.
- `src/ui/emails/templates.ts:166` — e-mail "Licença reativada".
- `src/app/(cliente)/negocios/page.tsx:42` — selos do cartão em `Meus negócios`; `src/app/(cliente)/inicio/page.tsx:215` — pílula `Portal suspenso`.
- `src/app/(cliente)/inicio/page.tsx:235` — "Assim que o pagamento for confirmado, o acesso é reativado.".
- `src/domain/financeiro/handlers/reactivation.ts:531` — caso de território revendido vai para análise da equipe.

## lacunas

prazo de confirmação por forma de pagamento não está no código.
