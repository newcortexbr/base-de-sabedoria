---
id: ac-pagar-cobranca-pendente
titulo: "pagar uma cobrança em aberto ou vencida"
publico:
  - cliente
modulo: financeiro
aba: Pagamentos
tipo_problema:
  - pagar
  - pagar agora
  - regularizar pagamento
  - segunda via
  - boleto
  - pix
  - cartão
  - cobrança vencida
  - fatura
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo

abrir a página de pagamento de uma cobrança e pagar.

## pré-requisitos

- Estar logado com a conta ativa.

## passos

1. No menu da esquerda, clique em `Pagamentos` do negócio certo.
2. No cartão da cobrança (`Reserva territorial` ou `Mensalidade`), clique em `Regularizar pagamento` (se estiver `Em atraso`) ou em `Ver próxima cobrança` (se estiver `A vencer`). No `Histórico de cobranças`, o mesmo está em `Regularizar` ou `Ver cobrança`.
3. A página de pagamento do Asaas (empresa que processa as cobranças da New Córtex) abre.
4. Escolha uma das formas de pagamento oferecidas nessa página (elas dependem da cobrança) e conclua o pagamento lá. Para trocar o cartão ou a forma, veja `ac-trocar-forma-de-pagamento`.

## resultado

quando o pagamento é confirmado, a cobrança passa a `Pago` na Área do Cliente. Se o negócio estava suspenso só por atraso e não sobrou outra cobrança vencida, ele é reativado sozinho (veja `ac-reativar-depois-de-pagar`).

## desvios

- Atalho pelo `Início`: quando há cobrança vencida, aparece um aviso com o botão `Pagar agora`.
- "Não conseguimos abrir a sua fatura agora. Tente de novo em alguns minutos ou fale com o suporte.": a página de pagamento não pôde ser aberta. Tente mais tarde.
- "Esta cobrança não está mais em aberto. Confira a situação dela na lista abaixo.": ela já foi paga ou cancelada.
- A confirmação não é imediata em todas as formas de pagamento; boleto costuma levar mais tempo que Pix para ser compensado.
- Com mais de uma cobrança vencida, o cartão mostra quantas são. Pague todas para o negócio voltar.

## quando pedir ajuda

peça ajuda se você pagou e a cobrança não ficou `Pago` depois do prazo de compensação, ou se a página de pagamento não abre. Use `Assunto` `Pagamentos` e, se tiver, anexe o comprovante.

## fontes

- `src/app/(cliente)/negocios/[licenseId]/pagamentos/page.tsx:108` — `Regularizar pagamento`; `:118` — `Ver próxima cobrança`; `:207` — `Regularizar` / `Ver cobrança` no histórico.
- `src/app/(cliente)/inicio/page.tsx:239` — `Pagar agora`.
- `src/app/(cliente)/inicio/dashboard.ts:141` — o link de pagar passa por `/api/cobranca/<id>/pagar`.
- `src/domain/financeiro/pay-now.ts` — leva à página de pagamento do provedor só se a cobrança é do cliente e está em aberto.
- `src/app/(cliente)/negocios/[licenseId]/pagamentos/aviso.ts:4` — avisos de falha e de cobrança quitada.
- `src/domain/ports/subscription-provider.ts:29` — tipo de cobrança "UNDEFINED" (a forma é escolhida na página do Asaas).

## lacunas

as formas de pagamento exatas (Pix, boleto, cartão) são definidas na conta do Asaas, não no código da Área do Cliente; não foi confirmado quais estão ligadas. Prazo de compensação de cada forma não está no código.
