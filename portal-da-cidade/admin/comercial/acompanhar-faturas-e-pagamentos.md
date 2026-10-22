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
revisado_em: 2026-10-21
validacao: docs-e-codigo
videos:
  - 1RHf0fcXgyE
---

## objetivo

aqui você consulta as faturas dos clientes e vê o que já foi pago. Ver a fatura, cobrar o cliente e confirmar o pagamento são coisas diferentes.

## pré-requisitos

- Ter acesso administrativo.
- Identificar o cliente ou a fatura sem compartilhar dados pessoais com a IA.

## veja também
- para reenviar o link de pagamento, veja o artigo "copiar o link de pagamento de uma fatura".
- para cobrar um cliente pelo WhatsApp, veja o artigo "cobrar uma fatura pelo WhatsApp".
- para mandar uma cobrança que ainda não foi enviada, veja o artigo "enviar agora a cobrança de uma fatura".
- para marcar que o cliente pagou por fora, veja o artigo "marcar uma fatura como recebida por fora".

## passos

1. No menu da esquerda, na parte `Comercial`, clique em `Financeiro`. [guia=menu:/painel/financeiro] [t=9]
2. No topo da página, um selo mostra se a cobrança automática está ligada. veja também os cartões de `A receber dos clientes` (vencido, a vencer e recebido no mês) e, se houver, quanto você tem `A pagar` a parceiros, com o atalho `Ver e pagar` para as comissões devidas. [guia=financeiro.resumo] [t=21]
3. Logo abaixo, clique numa das abas para ver as faturas: `A vencer`, `Vencidas`, `Pagas` ou `Canceladas`. [guia=financeiro.abas] [t=35]
4. Use os filtros de datas, de módulo e `Como paga` (Pix manual ou link do Asaas) para reduzir a lista. a aba `Vencidas` serve para priorizar a cobrança. [guia=financeiro.filtros] [t=42]
5. Para achar uma fatura, escreva o nome do cliente em `Buscar por cliente…`. [guia=financeiro.busca] [t=48]
6. Confira as informações da linha da fatura antes de fazer qualquer coisa: cliente, plano, se a cobrança já foi enviada, vencimento e valor. [guia=financeiro.fatura] [t=55]

## resultado

A tela mostra o estado efetivo da fatura informado pelo sistema. Confirmar recebimento e enviar uma cobrança são ações diferentes.

## desvios

com o Asaas conectado, a cobrança da fatura é criada no Asaas sozinha quando a fatura é emitida; o botão de gerar cobrança só serve para tentar de novo se essa primeira falhou. o cliente é cadastrado no Asaas com as notificações do próprio Asaas ligadas. conectar o Asaas não prova que uma fatura foi paga. Sem conexão, o Financeiro pode servir para acompanhar quem cobrar e registrar depois um recebimento feito por fora. O valor da cobrança é determinado pelo sistema, não por instrução da IA.

## quando pedir ajuda

peça ajuda humana quando houver divergência entre pagamento recebido e estado da fatura, dúvida sobre cobrança pelo Asaas, Pix, comissão, cancelamento ou valor. Não invente valor, prazo, desconto, estorno ou promessa ao cliente.

## fontes

- `portal-cidade/frontend/src/app/painel/financeiro/page.tsx:3-13,45-58,61-76`
- `portal-cidade/frontend/src/app/painel/financeiro/regras.ts:4-15`
- `portal-cidade/docs/PRODUCT.md:196-205`
- `portal-cidade/CLAUDE.md:41-42`

## lacunas

não descrevemos valores, reembolsos, cancelamento de cobrança, taxas, prazo de compensação ou procedimento de contestação. O artigo não autoriza a IA a consultar ou alterar faturas.
