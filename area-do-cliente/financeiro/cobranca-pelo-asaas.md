---
id: ac-cobranca-pelo-asaas
titulo: "recebi uma cobrança do Asaas: é da New Córtex?"
publico:
  - cliente
modulo: financeiro
aba: Pagamentos
tipo_problema:
  - asaas
  - cobranca-desconhecida
  - boleto-estranho
  - golpe
  - e-confiavel
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
entender quem é o Asaas e conferir se uma cobrança é sua.

## pré-requisitos
- nenhum.

## explicação
- o Asaas é a empresa que processa as cobranças da New Córtex. Quando você clica em `Ver cobrança`, `Regularizar` ou `Pagar agora`, a página que abre é do Asaas.
- a mesma cobrança aparece na Área do Cliente, em `Pagamentos`, com o mesmo valor e vencimento.

## passos
1. Entre na Área do Cliente digitando o endereço no navegador (não pelo link do e-mail). [guia=fora]
2. No menu da esquerda, clique em `Pagamentos` do negócio. [guia=menu:/negocios/[licenseId]/pagamentos]
3. Compare o valor e o vencimento com os da cobrança que você recebeu. [guia=fora]
4. Se bater, pague pelo botão da própria Área do Cliente (`Ver próxima cobrança` ou `Regularizar pagamento`). [guia=pagamentos.pagar]
5. Se não bater, não pague e abra um chamado em `Suporte` com `Assunto` `Pagamentos` e um print da cobrança recebida. [guia=fora]

## resultado
você paga só o que aparece em `Pagamentos` e pelo caminho da Área do Cliente.

## desvios
- cobrança que não aparece em `Pagamentos` de nenhum negócio: trate como suspeita e abra um chamado.

## quando pedir ajuda
sempre que a cobrança recebida não bater com a de `Pagamentos`.

## fontes
- `src/app/(cliente)/api/cobranca/handler.ts:9` — "Pagar agora" leva à fatura do Asaas da cobrança do cliente.
- `src/app/(cliente)/negocios/[licenseId]/pagamentos/page.tsx:75` — cobranças do negócio com valor e vencimento.

## lacunas
o código não define quais e-mails o próprio Asaas envia ao cliente nem com qual remetente.
