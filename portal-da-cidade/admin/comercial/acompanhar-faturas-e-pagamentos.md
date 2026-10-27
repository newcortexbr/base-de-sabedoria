---
id: acompanhar-faturas-e-pagamentos
titulo: "consultar faturas e pagamentos"
publico:
  - admin
modulo: financeiro
categoria: admin
aba: nao-se-aplica
tipo_problema: pagamento
tags:
  - ver
  - fatura
  - pagamento
  - filtrar
  - vencimento
  - pendente
  - cliente
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - 1RHf0fcXgyE
---

## objetivo

Aqui você consulta as faturas e separa o que está a vencer, vencido, pago ou cancelado.

## pré-requisitos

- Ter acesso administrativo ao portal.

## passos

1. No menu da esquerda, na parte `Comercial`, clique em `Financeiro`. [t=11] [guia=menu:/painel/financeiro]
2. Clique na aba da situação: `A vencer`, `Vencidas`, `Pagas` ou `Canceladas`. [t=38] [guia=financeiro.aba]
3. Escreva o nome em `Buscar por cliente…`. [t=48] [guia=financeiro.busca]
4. Confira cliente, plano, vencimento e valor na linha da fatura. [t=55] [guia=financeiro.fatura]

## resultado

A lista mostra as faturas da situação escolhida e do cliente buscado.

## filtros disponíveis

`Módulo`, `De` e `Até` reduzem a lista. Quando aparece, `Como paga` oferece `Todas`, `Aguardando Pix` e `Link do Asaas`. O selo de cobrança automática não comprova pagamento de uma fatura.

## veja também

- `copiar-link-de-pagamento.md`: reenviar o link.
- `cobrar-fatura-pelo-whatsapp.md`: abrir uma cobrança no WhatsApp.
- `marcar-fatura-como-recebida.md`: registrar dinheiro que já entrou.

## visão geral da tela

- Responde "quem preciso cobrar hoje?": todas as faturas, em ordem de vencimento.
- Selo no canto: `Cobrança automática ligada` ou `desligada` (Asaas conectado: a fatura vai sozinha ao cliente com o link).
- Cartões `A receber dos clientes`: vencido, ainda a vencer e recebido no mês. Cartão `A pagar`: comissões devidas a parceiros que venderam planos, com atalho `Ver e pagar`.
- Cada fatura mostra cliente, plano contratado, se a cobrança já foi enviada, vencimento e valor.
- `Vencidas` lista as em atraso, para priorizar a cobrança. `Pagas` é o histórico do que entrou. Cliente que pagou por fora: `Já recebi`.

## quando pedir ajuda

Peça ajuda se a tela mostrar erro ou se o resultado não corresponder ao que você salvou. Não envie senhas, chaves ou comprovantes ao assistente.

## fontes

- `portal-cidade/frontend/src/app/painel/financeiro/page.tsx:510`
- `portal-cidade/frontend/src/app/painel/financeiro/page.tsx:526`
- `portal-cidade/frontend/src/app/painel/financeiro/page.tsx:548`
- `portal-cidade/frontend/src/app/painel/financeiro/LinhaDaFatura.tsx:119`

## lacunas

Conferência documental com o código em b2f62d3f e as transcrições/legendas do catálogo. Sem validação no navegador, execução financeira ou teste de integração nesta auditoria. Tempos indicam trechos da legenda; passos sem tempo não foram localizados no vídeo.
