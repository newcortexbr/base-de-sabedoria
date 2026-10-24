---
id: cliente-contratar-plano
titulo: "contratar um plano"
publico:
  - cliente
modulo: planos
categoria: conta
aba: nao-se-aplica
tipo_problema:
  - contratar plano
  - assinar plano
  - quero um plano pago
  - como pago o plano
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - yuJhd0nadEE
---

## objetivo

aqui você assina um plano de uma seção, como o Guia Comercial, Vagas ou Classificados, e paga.

## pré-requisitos

- Estar logado na área do cliente.
- Ainda não ter plano pago nessa seção (a tela mostra `Você ainda não assina esta seção` e o cartão do `Grátis` aparece como seu plano). Se já tiver plano, veja "subir para um plano mais completo" ou "mudar para um plano mais simples".

## passos

1. No menu da esquerda, na parte `Minha conta`, clique em `Planos e assinaturas`. [t=10] [guia=menu:/minha-conta/planos]
2. Clique na seção que você quer. Ela fica em `Disponível para assinar` (ou em `À venda neste portal`, se você ainda não assina nada). [t=96] [guia=planos.secao]
3. No plano escolhido, clique em `Quero este`. [t=106] [guia=planos.quero-este]
4. Se aparecer a janela de cobrança, escreva o `CPF ou CNPJ` (e o `E-mail`, se pedido). Quem já tem esses dados na ficha pula esta etapa. [t=109] [guia=planos.cobranca-documento]
5. Na janela de cobrança, clique em `Ir para o pagamento`. [t=112] [guia=planos.ir-para-pagamento]
6. Pague com Pix ou com cartão, na janela de pagamento que abre. [guia=fora]

## resultado

quando o pagamento é confirmado, a janela mostra "Pagamento confirmado!" e o plano fica `Ativo`. A assinatura aparece em `Suas assinaturas` e a seção fica liberada no menu da esquerda. O plano contratado também aparece no menu, ao lado do nome da seção, e na tela `Início`, onde o botão `Mudar plano` leva para os planos. Ao pagar, a tela sai dos planos e abre a tela da seção.

## desvios

- Fechou a janela sem pagar: a seção fica `Aguardando pagamento`. Veja "pagar uma cobrança que ficou pendente". Para desistir, clique em `Desistir` no aviso da seção.
- Se a janela disser que o pagamento online não está disponível neste portal, fale com o portal para receber a cobrança.
- O preço é o que aparece no plano: cada portal define os seus.

## quando pedir ajuda

peça ajuda se a cobrança não for gerada ou se o plano não ficar ativo depois do pagamento confirmado.

## fontes

- `portal-cidade/frontend/src/app/minha-conta/planos/[secao]/page.tsx` — `Quero este` (linha 362), `abrirCheckout` e janela de cobrança (270-282, 700-735), aviso `Você ainda não assina esta seção` (454), `Desistir` (502-531), mudança de tela ao pagar (235-242).
- `portal-cidade/frontend/src/app/minha-conta/planos/page.tsx:125-134` — `Suas assinaturas`, `Disponível para assinar`, `À venda neste portal`.
- `portal-cidade/frontend/src/components/pagamento/JanelaDePagamento.tsx` — abas Pix e cartão, "Pagamento confirmado!".

## lacunas

- tela não validada no navegador. A opção de cartão depende do que o portal oferece.
- a seção de entrada pode abrir direto na tela da seção, sem passar por `Planos e assinaturas` (por exemplo, pelo botão `Mudar plano` do `Início`).
