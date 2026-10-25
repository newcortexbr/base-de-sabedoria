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
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - yuJhd0nadEE
---

## objetivo

aqui você troca o plano que tem por um mais completo da mesma seção.

## pré-requisitos

- Ter um plano pago ativo na seção.

## passos

1. No menu da esquerda, na parte `Minha conta`, clique em `Planos e assinaturas`. [t=10] [guia=menu:/minha-conta/planos]
2. Clique na seção do seu plano, em `Suas assinaturas`. [t=36] [guia=planos.secao]
3. No plano mais completo, clique em `Fazer upgrade`. [t=66] [guia=planos.fazer-upgrade]
4. Confira o valor e clique em `Confirmar`. [guia=planos.confirmar-upgrade]
5. Se a janela de cobrança aparecer, escreva o `CPF ou CNPJ` e o `E-mail` e clique em `Ir para o pagamento`. Quem já tem esses dados na ficha vai direto ao pagamento. [guia=planos.ir-para-pagamento]
6. Pague na janela de pagamento. [guia=fora]

## resultado

o plano novo vale assim que o pagamento é confirmado. Até lá, seu plano atual continua valendo, e o aviso "Troca para … aguardando pagamento" mostra o botão para pagar.

## desvios

- A cobrança do plano novo é cheia: a tela diz "A cobrança é integral, sem desconto proporcional do que já foi pago no plano atual."
- Mudou de ideia antes de pagar: clique em `Desistir` no aviso da troca; ou em `Cancelar` na confirmação.

## quando pedir ajuda

peça ajuda se pagou e o plano novo não entrou.

## fontes

- `portal-cidade/frontend/src/app/minha-conta/planos/[secao]/page.tsx` — `Fazer upgrade` (371), confirmação (622-645), aviso e `Desistir` (519-533), checkout (700-735).

## lacunas

- tela não validada no navegador.
- pelo cartão do plano atual no `Início`, o botão `Fazer upgrade` também existe (`_inicio/SeuPlano.tsx:87`); aqui só a tela da seção foi descrita.
