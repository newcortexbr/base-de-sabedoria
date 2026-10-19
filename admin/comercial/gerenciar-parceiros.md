---
id: gerenciar-parceiros
titulo: cadastrar parceiros e pagar comissões
publico:
  - admin
modulo: parceiros
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-19
validacao: docs-e-codigo
videos:
  - 8gIDPdapN0E
---

## objetivo

cadastrar quem vende o portal por você e acompanhar as comissões deles.

## pré-requisitos

- Ter acesso administrativo ao portal.
- O Programa de Parceiros estar ligado no portal.

## passos

1. No menu da esquerda, na parte `Comercial`, clique em `Parceiros` (`/painel/parceiros`).
2. Para cadastrar, clique em `Novo parceiro`.
3. Preencha o `Nome *`, o `E-mail (login) *`, a `Senha inicial *`, o `Telefone` e o `WhatsApp`, e escolha o `Plano`.
4. Clique em `Salvar` (em plano pago, o botão é `Salvar e gerar link`, que gera o link de pagamento do parceiro).
5. Para pagar uma comissão por fora, pague o parceiro por Pix ou transferência primeiro.
6. Depois, em `Comissões para pagar por fora`, abra a comissão e clique em `Marcar paga`. Isso não pode ser desfeito.
7. Se quiser que a comissão caia sozinha na carteira Asaas do parceiro, em `Como você paga os parceiros`, ligue `Mandar a comissão direto pelo Asaas`.
8. Para o grupo de WhatsApp dos parceiros, cole o link em `Link do grupo` e clique em `Salvar`.

## resultado

o parceiro recebe acesso à área dele; as comissões aparecem separadas entre pagar por fora e automático pelo Asaas.

## desvios

- Parceiro sem carteira Asaas sempre é pago por fora.
- Na lista `Seus parceiros`, os ícones editam dados e plano, trocam a senha ou excluem.
- Ligar ou desligar o programa inteiro é outra tarefa; veja o artigo de módulos.

## quando pedir ajuda

peça ajuda humana antes de marcar comissão como paga se houver dúvida, ou se o pagamento automático não cair.

## fontes

- `portal-cidade/frontend/src/app/painel/parceiros/page.tsx:1`
- `portal-cidade/frontend/src/components/painel/parceiros/ModalBaixaComissao.tsx:70,146,151`
- `portal-cidade/frontend/src/components/painel/parceiros/CartaoGrupoWhatsapp.tsx:1`
- vídeo `8gIDPdapN0E`.

## lacunas

não verificado visualmente nesta tarefa; passos conferidos com o vídeo de suporte e com o código da tela. Os planos de parceiro (Start, Pro, Premium) e a edição de percentuais não foram detalhados.
