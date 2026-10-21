---
id: grupo-whatsapp-parceiros
titulo: "guardar o link do grupo de WhatsApp dos parceiros"
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
aqui você guarda o link de convite do grupo de WhatsApp dos parceiros.

## pré-requisitos

- Ter acesso administrativo ao portal.
- O Programa de Parceiros estar ligado no portal.

## passos

1. No menu da esquerda, na parte `Comercial`, clique em `Parceiros`. [guia=menu:/painel/parceiros]
2. Para o grupo de WhatsApp dos parceiros, cole o link de convite em `Link do grupo`. [guia=parceiros.link-grupo]
3. Clique em `Salvar` ao lado do link. [guia=parceiros.salvar-grupo]

## resultado
O link do grupo fica salvo.

## desvios

- Para pagar comissões, veja os artigos "pagar a comissão de um parceiro por fora do portal" e "mandar a comissão do parceiro direto pelo Asaas".
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
