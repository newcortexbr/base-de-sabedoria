---
id: ac-reembolso
titulo: "quero reembolso ou estorno"
publico:
  - cliente
modulo: financeiro
aba: Pagamentos
tipo_problema:
  - reembolso
  - estorno
  - devolução
  - dinheiro de volta
  - contestação
  - chargeback
  - paguei duas vezes
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo

saber como pedir reembolso e o que acontece com o negócio.

## explicação

- A Área do Cliente não tem botão de reembolso, e o chat de suporte não faz nem promete reembolso.
- Reembolso é analisado e feito manualmente pela equipe da New Córtex.
- Quando um reembolso (total ou parcial) acontece, o negócio ligado àquela cobrança é suspenso na hora, sem a espera de dias do atraso.
- Contestar a compra direto no cartão (chargeback) também suspende o negócio na hora.
- No histórico, a cobrança passa a aparecer como "Reembolsada", "Reembolsada em parte" ou "Contestada no cartão".

## passos

1. No menu, clique em `Suporte` e depois em `Abrir novo chamado`.
2. Em `Negócio vinculado`, escolha o negócio da cobrança.
3. Em `Assunto`, escolha `Pagamentos`.
4. Em `Título`, escreva "Pedido de reembolso". Em `Mensagem`, diga qual cobrança (vencimento e valor, como aparecem em `Pagamentos`) e o motivo.
5. Se tiver comprovante, clique em `Anexar arquivo` e anexe.
6. Clique em `Enviar chamado`.

## resultado

a equipe analisa e responde pelo chamado.

## quando pedir ajuda

sempre: o pedido de reembolso é feito por chamado.

## fontes

- `docs/DECISIONS.md:52` — DEC-26: reembolso é manual pela equipe; o sistema não movimenta dinheiro.
- `docs/DECISIONS.md:412` — DEC-214: reembolso e contestação suspendem na hora.
- `src/domain/financeiro/handlers/refund.ts` e `chargeback.ts` — suspensão no ato.
- `src/app/(cliente)/negocios/[licenseId]/labels.ts:96` — rótulos "Reembolsada", "Reembolsada em parte", "Contestada no cartão".

## lacunas

não existe política de reembolso (prazo, condições, valores) escrita nas docs ou no código. O chat não deve prometer prazo nem aprovação.
