---
id: ac-mudar-data-de-vencimento
titulo: "mudar o dia de vencimento das cobranças"
publico:
  - cliente
modulo: financeiro
aba: Pagamentos
tipo_problema:
  - mudar-vencimento
  - dia-do-vencimento
  - data-de-pagamento
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
saber onde ver o vencimento e como pedir para mudar o dia.

## pré-requisitos
- estar logado.

## explicação
- a Área do Cliente mostra o vencimento de cada cobrança, mas não tem opção para mudar o dia.
- cada negócio tem duas cobranças com datas próprias: a `Mensalidade` (mensal) e a `Reserva territorial` (anual). Veja `ac-reserva-anual-e-mensalidade`.

## passos
1. No menu da esquerda, clique em `Pagamentos` do negócio. [guia=menu:/negocios/[licenseId]/pagamentos]
2. Veja o vencimento de cada cobrança no cartão dela. [guia=fora]
3. Para pedir outro dia, clique em `Suporte` → `Abrir novo chamado`. [guia=suporte.novo-chamado]
4. Em `Assunto`, escolha `Pagamentos`. Em `Negócio vinculado`, escolha a cidade. [guia=chamado-novo.negocio]
5. Em `Mensagem`, diga qual cobrança (mensalidade ou reserva territorial) e o dia que você quer. [guia=chamado-novo.mensagem]
6. Clique em `Enviar chamado`. [guia=chamado-novo.enviar]

## resultado
o pedido fica com a equipe, que responde no chamado.

## desvios
- antes da instalação, o vencimento pode aparecer como `após a instalação` na `Visão geral`.
- enquanto o pedido não for respondido, o vencimento atual continua valendo, e o atraso conta normalmente (veja `ac-atraso-e-suspensao`).

## quando pedir ajuda
sempre: a mudança, se possível, é feita pela equipe.

## fontes
- `src/app/(cliente)/negocios/[licenseId]/pagamentos/page.tsx:75` — cartões com vencimento; nenhuma ação de alterar data.
- `src/app/(cliente)/inicio/page.tsx:514` — valor e "vence em" no `Início`.

## lacunas
não há regra no código ou nos docs dizendo se a mudança de vencimento é aceita. O artigo não promete a mudança.
