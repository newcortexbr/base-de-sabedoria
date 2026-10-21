---
id: cliente-cancelar-plano
titulo: "cancelar o plano e voltar ao grátis"
publico:
  - cliente
modulo: planos
categoria: conta
aba: nao-se-aplica
tipo_problema:
  - cancelar plano
  - cancelar assinatura
  - parar de pagar
  - voltar ao grátis
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
aqui você cancela a renovação do plano. Você continua com ele até o fim do período pago e depois passa ao Grátis.

## pré-requisitos

- Ter um plano pago ativo numa seção que tenha plano Grátis.

## passos

1. No menu da esquerda da sua área, clique em `Planos e assinaturas`. [guia=menu:/minha-conta/planos]
2. Clique na seção do seu plano, em `Suas assinaturas`. [guia=fora]
3. No plano Grátis, clique em `Voltar ao grátis`. [guia=fora]
4. Leia o que você vai perder e clique em `Confirmar volta ao Grátis`. [guia=fora]

## resultado
a próxima cobrança é cancelada. A tela mostra até quando o plano atual vale.

## desvios

- Mudou de ideia antes da data: clique em `Continuar neste plano` no seu plano atual.
- Banners têm um botão próprio para parar a renovação; veja "parar a renovação de um banner".

## quando pedir ajuda

peça ajuda se a seção não tiver plano Grátis e você quiser cancelar.

## fontes

- `portal-cidade/frontend/src/app/minha-conta/planos/[secao]/page.tsx` — "Voltar ao grátis", "Confirmar volta ao Grátis", "Continuar neste plano", "A próxima cobrança é cancelada".

## lacunas

tela não validada no navegador nesta tarefa. Não confirmei no código como cancelar numa seção sem plano Grátis.
