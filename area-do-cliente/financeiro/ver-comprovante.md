---
id: ac-ver-comprovante
titulo: "ver o comprovante de uma cobrança paga"
publico:
  - cliente
modulo: financeiro
aba: Pagamentos
tipo_problema:
  - comprovante
  - recibo
  - nota
  - comprovante de pagamento
  - sem comprovante
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo

abrir o comprovante de uma cobrança que já foi paga.

## pré-requisitos

- Estar logado com a conta ativa.
- A cobrança precisa estar `Pago`.

## passos

1. No menu da esquerda, clique em `Pagamentos` do negócio certo. [guia=menu:/negocios/[licenseId]/pagamentos]
2. Desça até `Histórico de cobranças`. [guia=pagamentos.historico]
3. Na linha da cobrança paga, clique em `Ver comprovante`. Ele abre em uma nova aba, na página do Asaas. [guia=pagamentos.acao-do-historico]

## resultado

você vê a cobrança paga na página do Asaas.

## desvios

- "Sem comprovante": aparece na coluna `Detalhes` das cobranças `Reembolsada`, `Reembolsada em parte`, `Contestada no cartão` ou `Cancelada`. Cobrança ainda não paga mostra `Ver cobrança` ou `Regularizar` no lugar.
- "Esta cobrança não está paga, então ainda não tem comprovante.": idem.
- "Não conseguimos abrir o comprovante agora. Tente de novo em alguns minutos ou fale com o suporte.": falha momentânea.

## quando pedir ajuda

peça ajuda se precisar de nota fiscal ou documento diferente do comprovante. Use `Assunto` `Pagamentos`.

## fontes

- `src/app/(cliente)/negocios/[licenseId]/pagamentos/page.tsx:209` — `Ver comprovante` em `/api/cobranca/<id>/comprovante`.
- `src/app/(cliente)/negocios/[licenseId]/pagamentos/PagamentosCliente.tsx:161` — abre em nova aba; `:164` — "Sem comprovante".
- `src/app/(cliente)/negocios/[licenseId]/pagamentos/aviso.ts:6` — avisos.
- `src/domain/financeiro/pay-now.ts` — `resolveReceipt` abre a página da fatura no provedor só se paga.

## lacunas

o "comprovante" é a página da fatura no Asaas, não um documento gerado pela New Córtex. Nota fiscal não aparece em nenhuma tela do cliente.
