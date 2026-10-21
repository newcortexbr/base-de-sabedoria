---
id: pagar-comissao-de-parceiro-por-fora
titulo: pagar a comissão de um parceiro por fora do portal
publico:
  - admin
modulo: parceiros
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-20
validacao: docs-e-codigo
videos:
  - 8gIDPdapN0E
---

## objetivo

aqui você marca como paga uma comissão que você pagou ao parceiro por Pix ou transferência, fora do portal. Para a comissão cair sozinha na carteira Asaas dele, veja outro artigo.

## pré-requisitos

- Ter acesso administrativo ao portal.
- O Programa de Parceiros estar ligado no portal.

## passos

1. Pague o parceiro por Pix ou transferência primeiro, fora do portal. [guia=fora] [t=37]
2. No menu da esquerda, na parte `Comercial`, clique em `Parceiros`. [guia=menu:/painel/parceiros] [t=6]
3. Em `Comissões para pagar por fora`, clique em `Marcar paga` na linha da comissão que você pagou. [guia=parceiros.marcar-paga] [t=39]
4. Na janela que abre, anexe o comprovante, se quiser. [guia=parceiros.confirmar-marcar-paga]
5. Clique em `Marcar paga` na janela. Isso não pode ser desfeito. [guia=parceiros.confirmar-marcar-paga]

## resultado

a comissão sai da lista de comissões para pagar por fora e fica registrada como paga.

## desvios

- Parceiro sem carteira Asaas sempre é pago por fora.
- Para mandar a comissão direto pelo Asaas, veja o artigo "mandar a comissão do parceiro direto pelo Asaas".

## quando pedir ajuda

peça ajuda humana antes de marcar comissão como paga se houver dúvida.

## fontes

- `portal-cidade/frontend/src/app/painel/parceiros/page.tsx:1`
- `portal-cidade/frontend/src/components/painel/parceiros/ModalBaixaComissao.tsx:70,146,151`
- `portal-cidade/frontend/src/components/painel/parceiros/CartaoGrupoWhatsapp.tsx:1`
- vídeo `8gIDPdapN0E`.

## lacunas

não verificado visualmente nesta tarefa; passos conferidos com o vídeo de suporte e com o código da tela. Os planos de parceiro (Start, Pro, Premium) e a edição de percentuais não foram detalhados.
