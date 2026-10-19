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

1. No menu da esquerda, na parte `Comercial`, clique em `Financeiro` (`/painel/financeiro`). No topo da página você vê quanto há `A receber dos clientes` e, se houver, quanto você tem `A pagar` a parceiros.
2. Logo abaixo, clique numa das abas para ver as faturas: `A vencer`, `Vencidas`, `Pagas` ou `Canceladas`.
3. Para achar uma fatura, escreva o nome do cliente em `Buscar por cliente…` ou use os filtros de datas, de módulo e `Como paga`.
4. Confira as informações da linha da fatura antes de fazer qualquer coisa. Se o cliente pagou por fora (dinheiro, transferência), use só o botão `Já recebi`, quando ele aparecer.
5. Se precisar mandar a cobrança, veja primeiro os avisos da linha (por exemplo, `Cobrança ainda não enviada`) e use os botões que aparecem ali, como `Enviar agora`, `Copiar link de pagamento` ou `Cobrar pelo WhatsApp`. Em caso de dúvida, pare e peça ajuda a uma pessoa.

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
