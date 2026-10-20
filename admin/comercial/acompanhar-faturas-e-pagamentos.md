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
revisado_em: 2026-10-19
validacao: docs-e-codigo
videos:
  - 1RHf0fcXgyE
---

## objetivo

aqui você consulta as faturas dos clientes e vê o que já foi pago. Ver a fatura, cobrar o cliente e confirmar o pagamento são coisas diferentes.

## pré-requisitos

- Ter acesso administrativo.
- Identificar o cliente ou a fatura sem compartilhar dados pessoais com a IA.

## passos

1. No menu da esquerda, na parte `Comercial`, clique em `Financeiro`. [guia=menu:/painel/financeiro] [t=9]
2. No topo da página, veja quanto há `A receber dos clientes` e, se houver, quanto você tem `A pagar` a parceiros. [guia=financeiro.resumo] [t=21]
3. Logo abaixo, clique numa das abas para ver as faturas: `A vencer`, `Vencidas`, `Pagas` ou `Canceladas`. [guia=financeiro.abas] [t=35]
4. Use os filtros de datas, de módulo e `Como paga` para reduzir a lista. [guia=financeiro.filtros] [t=42]
5. Para achar uma fatura, escreva o nome do cliente em `Buscar por cliente…`. [guia=financeiro.busca] [t=48]
6. Confira as informações da linha da fatura antes de fazer qualquer coisa: cliente, plano, se a cobrança já foi enviada, vencimento e valor. [guia=financeiro.fatura] [t=55]
7. Para reenviar o link, clique em `Copiar link de pagamento` na linha da fatura. [guia=financeiro.copiar-link] [t=60]
8. Para cobrar pelo WhatsApp, clique em `Cobrar pelo WhatsApp` na linha da fatura: abre a conversa com a mensagem pronta. [guia=financeiro.cobrar] [t=65]
9. Se a linha avisar `Cobrança ainda não enviada`, clique em `Enviar agora` para mandar a cobrança. Em caso de dúvida, peça ajuda a uma pessoa. [guia=financeiro.enviar-agora]
10. Se o cliente pagou por fora (dinheiro, transferência), use só o botão `Já recebi`, quando ele aparecer na linha. O plano continua ativo. [guia=financeiro.ja-recebi] [t=72]

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
