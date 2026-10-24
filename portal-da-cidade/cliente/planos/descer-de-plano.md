---
id: cliente-descer-de-plano
titulo: "mudar para um plano mais simples"
publico:
  - cliente
modulo: planos
categoria: conta
aba: nao-se-aplica
tipo_problema:
  - trocar de plano
  - plano mais barato
  - diminuir plano
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - yuJhd0nadEE
---

## objetivo

aqui você passa para um plano pago mais simples. A troca acontece no fim do período que você já pagou.

## pré-requisitos

- Ter um plano pago ativo na seção, com outro plano pago mais barato disponível.

## passos

1. No menu da esquerda, na parte `Minha conta`, clique em `Planos e assinaturas`. [t=10] [guia=menu:/minha-conta/planos]
2. Clique na seção do seu plano, em `Suas assinaturas`. [t=36] [guia=planos.secao]
3. No plano mais simples, clique em `Mudar para este plano`. [t=73] [guia=planos.mudar-para-este]
4. Leia a data da troca e clique em `Confirmar descida`. [t=81] [guia=planos.confirmar-descida]

## resultado

seu plano atual vale até o fim do período, e o novo começa nessa data. A fatura do plano novo vence nesse dia; sem pagamento, você passa ao Grátis. O aviso "Descida para…" mostra a data e o botão de pagar.

## desvios

- Antes de confirmar, `Cancelar` desfaz.
- Depois de confirmada, clique em `Desistir` no aviso "Descida para…". Se a descida já estiver paga, a tela pergunta e mostra `Desistir sem reembolso` ou `Manter a descida`: o valor pago não é devolvido.

## quando pedir ajuda

peça ajuda se a data da troca não aparecer.

## fontes

- `portal-cidade/frontend/src/app/minha-conta/planos/[secao]/page.tsx` — `Mudar para este plano` (380), `Confirmar descida` (653), aviso "Descida para…" e `Desistir` (536-572).

## lacunas

- tela não validada no navegador.
- com uma descida já paga, a tela não oferece outra troca até desistir dela (`page.tsx:379`).
