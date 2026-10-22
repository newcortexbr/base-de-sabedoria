---
id: ac-nota-fiscal
titulo: "preciso de nota fiscal ou recibo"
publico:
  - cliente
modulo: financeiro
aba: Pagamentos
tipo_problema:
  - nota-fiscal
  - nf
  - recibo
  - comprovante-para-contabilidade
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
saber o que a Área do Cliente oferece de comprovante e como pedir nota fiscal.

## pré-requisitos
- cobrança paga.

## explicação
- a Área do Cliente mostra o comprovante de cada cobrança paga (botão `Ver comprovante`), mas não mostra nem emite nota fiscal.
- para nota fiscal, o pedido é por chamado.

## passos
1. Para o comprovante: em `Pagamentos`, no `Histórico de cobranças`, clique em `Ver comprovante` na linha da cobrança paga (veja `ac-ver-comprovante`). [guia=pagamentos.acao-do-historico]
2. Para a nota fiscal: clique em `Suporte` → `Abrir novo chamado`. [guia=suporte.novo-chamado]
3. Em `Assunto`, escolha `Pagamentos`. Em `Negócio vinculado`, escolha a cidade. [guia=chamado-novo.negocio]
4. Em `Mensagem`, diga qual cobrança (vencimento e valor, como aparecem em `Pagamentos`) e os dados que precisam sair na nota. [guia=chamado-novo.mensagem]
5. Clique em `Enviar chamado`. [guia=chamado-novo.enviar]

## resultado
você tem o comprovante na hora, e o pedido de nota fiscal fica com a equipe.

## desvios
- "Sem comprovante": a cobrança não está paga, foi reembolsada, contestada ou cancelada.

## quando pedir ajuda
para qualquer pedido de nota fiscal, abra um chamado em `Suporte`.

## fontes
- `src/app/(cliente)/negocios/[licenseId]/pagamentos/PagamentosCliente.tsx:157` — `Ver comprovante` / `Sem comprovante`.
- `src/app/(cliente)/api/cobranca/handler.ts:53` — o comprovante é o do Asaas.

## lacunas
o código e os docs não dizem se a New Córtex emite nota fiscal, nem em quanto tempo. O artigo só indica o caminho do pedido.
