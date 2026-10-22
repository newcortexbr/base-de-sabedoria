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
revisado_em: 2026-10-21
validacao: docs-e-codigo
videos:
  - yuJhd0nadEE
---

## objetivo
aqui você assina um plano de uma seção, como o Guia Comercial, Vagas ou Classificados, e paga.

## pré-requisitos

- Estar logado na área do cliente.
- Ainda não ter plano pago nessa seção (a tela mostra `Você ainda não assina esta seção` e o cartão `Seu Plano` marca o `Grátis`). Se já tiver plano, veja "subir para um plano mais completo" (o novo plano começa a valer assim que o pagamento é confirmado) ou "descer de plano" (a descida só começa no fim do período já pago, pelo botão `Mudar para este plano`, e pede confirmação em `Confirmar descida`; `Cancelar` desfaz).

## passos

1. No menu da esquerda da sua área, clique em `Planos e assinaturas`. [guia=menu:/minha-conta/planos]
2. Clique na seção que você quer, em `Disponível para assinar`. [guia=fora]
3. No plano escolhido, clique em `Quero este`. [guia=fora]
4. Se a tela pedir, preencha o CPF ou CNPJ e o e-mail para a cobrança. [guia=fora]
5. Clique em `Ir para o pagamento`. [guia=fora]
6. Pague com Pix ou com cartão, na janela de pagamento que abre. [guia=fora]

## resultado
quando o pagamento é confirmado, a janela mostra "Pagamento confirmado!" e o plano fica `Ativo`. a assinatura aparece em `Suas assinaturas` e a seção fica liberada no menu da esquerda. o plano contratado também aparece no menu, ao lado do nome da seção, e na tela início, onde o botão `Mudar plano` leva direto para `Planos e assinaturas`.

## desvios

- Fechou a janela sem pagar: a seção fica `Aguardando pagamento`. Veja "pagar uma cobrança que ficou pendente".
- Se a janela disser que o pagamento online não está disponível neste portal, fale com o portal para receber a cobrança.
- O preço é o que aparece no plano: cada portal define os seus.

## quando pedir ajuda

peça ajuda se a cobrança não for gerada ou se o plano não ficar ativo depois do pagamento confirmado.

## fontes

- `portal-cidade/frontend/src/app/minha-conta/planos/[secao]/page.tsx` — `acaoDe` ("Quero este"), checkout ("Ir para o pagamento"), validação de CPF/CNPJ e e-mail.
- `portal-cidade/frontend/src/components/pagamento/JanelaDePagamento.tsx` — abas Pix e cartão, "Pagamento confirmado!", aviso de pagamento online indisponível.

## lacunas

tela não validada no navegador nesta tarefa. A opção de cartão depende do que o portal oferece; nem todo portal tem cartão.
