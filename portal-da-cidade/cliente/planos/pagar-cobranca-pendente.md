---
id: cliente-pagar-cobranca-pendente
titulo: "pagar uma cobrança que ficou pendente"
publico:
  - cliente
modulo: planos
categoria: conta
aba: nao-se-aplica
tipo_problema:
  - ver fatura
  - pagar fatura
  - segunda via
  - boleto
  - pix do plano
  - aguardando pagamento
  - plano vencido
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
---

## objetivo

aqui você paga uma cobrança que está esperando pagamento ou em atraso. A área do cliente não tem uma lista de faturas: a cobrança em aberto aparece no `Início` e na tela da seção, com o botão de pagar.

## pré-requisitos

- Estar logado na área do cliente.

## passos

1. No menu da esquerda, clique em `Início`. [guia=menu:/minha-conta]
2. No quadro `Esperando pagamento`, clique em `Pagar agora` na seção que você quer pagar. [guia=inicio.pagar-agora]
3. Na janela de pagamento, escolha Pix ou cartão. [guia=fora]
4. No Pix, leia o QR Code com o app do banco ou clique em `Copiar código Pix` e cole no app. [guia=pagamento.copiar-pix]

## resultado

quando o pagamento é confirmado, aparece "Pagamento confirmado!" e o plano fica `Ativo`.

## desvios

- Plano em atraso: abra `Planos e assinaturas`, clique na seção e use `Pagar agora` no aviso "Pagamento em atraso. Enquanto não for pago, sua empresa fica no plano Grátis."
- Se aparecer `Gerar link de pagamento`, clique nele primeiro; depois aparece `Pagar agora` (se der erro, o botão vira `Tentar gerar o link de novo`).
- Se a tela disser "Fale com o portal para receber o link desta cobrança.", o pagamento é combinado direto com o portal.
- Em alguns casos `Pagar agora` abre o link de pagamento em outra aba, em vez da janela.

## quando pedir ajuda

peça ajuda se pagou e o plano não ficou ativo, ou se o link de pagamento não for gerado.

## fontes

- `portal-cidade/frontend/src/app/minha-conta/_inicio/BlocoAvisos.tsx:84-115` — quadro `Esperando pagamento`.
- `portal-cidade/frontend/src/components/minha-conta/InstrucoesDePagamento.tsx:48-61,155-190` — `Pagar agora`, `Gerar link de pagamento`.
- `portal-cidade/frontend/src/app/minha-conta/planos/[secao]/page.tsx:480-490` — aviso "Pagamento em atraso…".
- `portal-cidade/frontend/src/components/pagamento/JanelaDePagamento.tsx:379-391` — QR Code e `Copiar código Pix`.

## lacunas

- tela não validada no navegador. Não há tela de histórico de faturas para o cliente; a validade do link de pagamento é definida pelo Asaas e não aparece no código do portal.
- as abas Pix e cartão da janela não foram detalhadas.
