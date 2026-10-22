---
id: comissao-de-parceiro-pelo-asaas
titulo: mandar a comissão do parceiro direto pelo Asaas
publico:
  - admin
modulo: parceiros
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
videos:
  - 8gIDPdapN0E
---

## objetivo

aqui você faz a comissão cair sozinha na carteira Asaas do parceiro. Para pagar por Pix ou transferência, veja outro artigo.

## pré-requisitos

- Ter acesso administrativo ao portal.
- O Programa de Parceiros estar ligado no portal.
- O parceiro ter carteira Asaas.

## passos

1. No menu da esquerda, na parte `Comercial`, clique em `Parceiros`. [guia=menu:/painel/parceiros] [t=6]
2. Em `Como você paga os parceiros`, ligue `Mandar a comissão direto pelo Asaas`. [guia=parceiros.split-asaas] [t=143]

## resultado

as comissões dos parceiros com carteira Asaas passam a cair sozinhas: quando o cliente paga pelo link, a parte do parceiro vai direto para a carteira dele.

## desvios

- No painel, em `Precisa da sua atenção`, o portal avisa quais parceiros ainda não informaram a carteira Asaas; esses são pagos por fora.
- Parceiro sem carteira Asaas sempre é pago por fora; veja o artigo "pagar a comissão de um parceiro por fora do portal".

## quando pedir ajuda

peça ajuda humana se o pagamento automático não cair.

## fontes

- `portal-cidade/frontend/src/app/painel/parceiros/page.tsx:1`
- `portal-cidade/frontend/src/components/painel/parceiros/ModalBaixaComissao.tsx:70,146,151`
- `portal-cidade/frontend/src/components/painel/parceiros/CartaoGrupoWhatsapp.tsx:1`
- vídeo `8gIDPdapN0E`.

## lacunas

não verificado visualmente nesta tarefa; passos conferidos com o vídeo de suporte e com o código da tela. Os planos de parceiro (Start, Pro, Premium) e a edição de percentuais não foram detalhados.
