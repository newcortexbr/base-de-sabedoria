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
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - yuJhd0nadEE
---

## objetivo

aqui você cancela a renovação do plano. Você continua com ele até o fim do período pago e depois passa ao Grátis.

## pré-requisitos

- Ter um plano pago ativo numa seção que tenha plano Grátis.

## passos

1. No menu da esquerda, na parte `Minha conta`, clique em `Planos e assinaturas`. [t=10] [guia=menu:/minha-conta/planos]
2. Clique na seção do seu plano, em `Suas assinaturas`. [t=36] [guia=planos.secao]
3. No cartão do plano Grátis, clique em `Voltar ao grátis`. [t=87] [guia=planos.voltar-ao-gratis]
4. Leia o que você vai perder e clique em `Confirmar volta ao Grátis`. [t=89] [guia=planos.confirmar-gratis]

## resultado

a próxima cobrança é cancelada. A tela mostra "Você fica no … até a data e depois passa ao Grátis. A renovação foi cancelada."

## desvios

- Mudou de ideia antes da data: clique em `Continuar neste plano` no seu plano atual; a renovação volta a valer.
- Antes de confirmar, `Cancelar` fecha o aviso sem mudar nada.
- Se havia uma descida já paga, a tela avisa que ela será descartada e que o valor não é devolvido.
- Banners têm um botão próprio para parar a renovação; veja "parar a renovação de um banner".

## quando pedir ajuda

peça ajuda se a seção não tiver plano Grátis e você quiser cancelar.

## fontes

- `portal-cidade/frontend/src/app/minha-conta/planos/[secao]/page.tsx` — `Voltar ao grátis` (387), `Continuar neste plano` (355), aviso e `Confirmar volta ao Grátis` (544-600).

## lacunas

- tela não validada no navegador. Não confirmei no código como cancelar numa seção sem plano Grátis.
