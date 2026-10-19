---
id: acompanhar-faturas-e-pagamentos
titulo: consultar faturas e registrar pagamentos recebidos
publico:
  - admin
modulo: financeiro
categoria: admin
aba: A vencer, Vencidas, Pagas ou Canceladas
tipo_problema: pagamento
status: rascunho-documental
revisado_em: 2026-10-15
validacao: docs-e-codigo
videos:
  - 1RHf0fcXgyE
---

## objetivo

consultar faturas de clientes e entender a diferença entre acompanhar, cobrar e confirmar um pagamento.

## pré-requisitos

- Ter acesso administrativo.
- Identificar o cliente ou a fatura sem compartilhar dados pessoais com a IA.

## passos

1. Abra `Financeiro` em `/painel/financeiro`.
2. Escolha uma das abas `A vencer`, `Vencidas`, `Pagas` ou `Canceladas`.
3. Use os filtros e localize a fatura correta.
4. Confira o registro e as informações exibidas antes de qualquer ação. Se o cliente já pagou por fora, siga apenas a ação de confirmação que a tela oferecer.
5. Se precisar enviar ou gerar cobrança, verifique a situação do Asaas e os avisos da fatura antes de continuar. Em caso de dúvida, pare e peça orientação humana.

## resultado

A tela mostra o estado efetivo da fatura informado pelo sistema. Confirmar recebimento e enviar uma cobrança são ações diferentes.

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
