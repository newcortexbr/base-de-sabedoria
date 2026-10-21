---
id: marcar-fatura-como-recebida
titulo: "marcar uma fatura como recebida por fora"
publico:
  - admin
modulo: financeiro
categoria: admin
aba: A vencer, Vencidas, Pagas ou Canceladas
tipo_problema: pagamento
status: rascunho-documental
revisado_em: 2026-10-19
validacao: docs-e-codigo
videos:
  - 1RHf0fcXgyE
---

## objetivo
aqui você marca uma fatura como recebida quando o cliente pagou por fora. Use só o botão `Já recebi`.

## pré-requisitos

- Ter acesso administrativo.
- Identificar o cliente ou a fatura sem compartilhar dados pessoais com a IA.

## passos

1. No menu da esquerda, na parte `Comercial`, clique em `Financeiro`. [guia=menu:/painel/financeiro]
2. Para achar uma fatura, escreva o nome do cliente em `Buscar por cliente…`. [guia=financeiro.busca]
3. Se o cliente pagou por fora (dinheiro, transferência), use só o botão `Já recebi`, quando ele aparecer na linha. O plano continua ativo. [guia=financeiro.ja-recebi]

## resultado
A fatura passa a constar como recebida.

## desvios

conectar uma conta Asaas não prova que uma fatura foi paga nem que toda fatura está sendo cobrada automaticamente. Sem conexão, o Financeiro pode servir para acompanhar quem cobrar e registrar depois um recebimento feito por fora. O valor da cobrança é determinado pelo sistema, não por instrução da IA.

## quando pedir ajuda

peça ajuda humana quando houver divergência entre pagamento recebido e estado da fatura, dúvida sobre cobrança pelo Asaas, Pix, comissão, cancelamento ou valor. Não invente valor, prazo, desconto, estorno ou promessa ao cliente.

## fontes

- `portal-cidade/frontend/src/app/painel/financeiro/page.tsx:3-13,45-58,61-76`
- `portal-cidade/frontend/src/app/painel/financeiro/regras.ts:4-15`
- `portal-cidade/docs/PRODUCT.md:196-205`
- `portal-cidade/CLAUDE.md:41-42`

## lacunas

não descrevemos valores, reembolsos, cancelamento de cobrança, taxas, prazo de compensação ou procedimento de contestação. O artigo não autoriza a IA a consultar ou alterar faturas.
