---
id: ac-trocar-forma-de-pagamento
titulo: "trocar o cartão ou a forma de pagamento"
publico:
  - cliente
modulo: financeiro
aba: Pagamentos
tipo_problema:
  - trocar-cartao
  - cartao-vencido
  - forma-de-pagamento
  - pix
  - boleto
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
saber como pagar de outro jeito ou trocar o cartão de uma cobrança.

## pré-requisitos
- estar logado com a conta ativa.

## explicação
- a Área do Cliente não tem tela para cadastrar cartão nem para escolher a forma de pagamento. Ela mostra as cobranças e leva você à página de pagamento do Asaas, empresa que processa as cobranças da New Córtex.
- as formas de pagamento oferecidas aparecem nessa página do Asaas e dependem da cobrança.

## passos
1. No menu da esquerda, clique em `Pagamentos` do negócio certo. [guia=menu:/negocios/[licenseId]/pagamentos]
2. No cartão da cobrança, clique em `Ver próxima cobrança` (se estiver `A vencer`) ou em `Regularizar pagamento` (se estiver `Em atraso`). [guia=pagamentos.pagar]
3. Na página do Asaas que abrir, veja as formas de pagamento oferecidas para essa cobrança e pague pela que preferir. [guia=fora]
4. Se a forma que você quer não aparecer, ou se quer trocar o cartão das próximas cobranças, abra um chamado em `Suporte` com `Assunto` `Pagamentos`. [guia=fora]

## resultado
a cobrança é paga pela forma escolhida, ou o pedido de troca fica registrado com a equipe.

## desvios
- "Não conseguimos abrir a sua fatura agora. Tente de novo em alguns minutos ou fale com o suporte.": a página de pagamento não abriu. Tente mais tarde.
- não envie número de cartão no chamado nem no chat.

## quando pedir ajuda
para trocar o cartão das próximas cobranças ou mudar a forma de pagamento, abra um chamado em `Suporte`.

## fontes
- `src/app/(cliente)/negocios/[licenseId]/pagamentos/page.tsx:75` — botões `Ver próxima cobrança` e `Regularizar pagamento`.
- `src/app/(cliente)/api/cobranca/handler.ts:9` — o botão leva à fatura do Asaas.
- `docs/DECISIONS.md` PEND-23 — formas de pagamento do Asaas não são descritas pela Área do Cliente.

## lacunas
o código não diz se a equipe consegue trocar o cartão ou a forma de pagamento de uma assinatura em andamento, nem em quanto tempo.
