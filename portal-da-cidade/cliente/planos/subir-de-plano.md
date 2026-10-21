---
id: cliente-subir-de-plano
titulo: "subir para um plano mais completo"
publico:
  - cliente
modulo: planos
categoria: conta
aba: nao-se-aplica
tipo_problema:
  - trocar de plano
  - fazer upgrade
  - mudar para plano maior
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
aqui você troca o plano que tem por um mais completo da mesma seção.

## pré-requisitos

- Ter um plano ativo na seção.

## passos

1. No menu da esquerda da sua área, clique em `Planos e assinaturas`. [guia=menu:/minha-conta/planos]
2. Clique na seção do seu plano, em `Suas assinaturas`. [guia=fora]
3. No plano mais completo, clique em `Fazer upgrade`. [guia=fora]
4. Confira o valor e clique em `Confirmar`. [guia=fora]
5. Clique em `Ir para o pagamento` e pague. [guia=fora]

## resultado
o plano novo vale assim que o pagamento é confirmado. Até lá, seu plano atual continua valendo.

## desvios

- A cobrança do plano novo é cheia: não há desconto do que você já pagou no plano atual.
- Mudou de ideia antes de pagar: clique em `Desistir` no aviso da troca.

## quando pedir ajuda

peça ajuda se pagou e o plano novo não entrou.

## fontes

- `portal-cidade/frontend/src/app/minha-conta/planos/[secao]/page.tsx` — "Fazer upgrade", "A cobrança é integral, sem desconto proporcional…", aviso "Troca para … aguardando pagamento" e "Desistir".

## lacunas

tela não validada no navegador nesta tarefa.
