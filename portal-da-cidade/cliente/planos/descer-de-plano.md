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
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
aqui você passa para um plano pago mais simples. A troca acontece no fim do período que você já pagou.

## pré-requisitos

- Ter um plano ativo na seção.

## passos

1. No menu da esquerda da sua área, clique em `Planos e assinaturas`. [guia=menu:/minha-conta/planos]
2. Clique na seção do seu plano, em `Suas assinaturas`. [guia=fora]
3. No plano mais simples, clique em `Mudar para este plano`. [guia=fora]
4. Leia a data da troca e clique em `Confirmar descida`. [guia=fora]

## resultado
seu plano atual vale até o fim do período, e o novo começa nessa data. A fatura do plano novo vence nesse dia; sem pagamento, você passa ao Grátis.

## desvios

- Para desistir, clique em `Desistir` no aviso "Descida para…".
- Se a descida já estiver paga e você desistir, o valor pago não é devolvido.

## quando pedir ajuda

peça ajuda se a data da troca não aparecer.

## fontes

- `portal-cidade/frontend/src/app/minha-conta/planos/[secao]/page.tsx` — "Mudar para este plano", "Confirmar descida", textos da descida e de desistência.

## lacunas

tela não validada no navegador nesta tarefa.
