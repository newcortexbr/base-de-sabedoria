---
id: gerenciar-parceiros
titulo: cadastrar um parceiro
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

aqui você cadastra quem vende o portal por você. Ele recebe acesso à área própria de parceiro.

## pré-requisitos

- Ter acesso administrativo ao portal.
- O Programa de Parceiros estar ligado no portal.

## veja também
- para guardar o link do grupo dos parceiros, veja o artigo "guardar o link do grupo de WhatsApp dos parceiros".

## passos

1. No menu da esquerda, na parte `Comercial`, clique em `Parceiros`. [guia=menu:/painel/parceiros] [t=6] No topo, uma chave liga ou desliga o programa de parceiros.
2. Para cadastrar, clique em `Novo parceiro`. [guia=parceiros.novo] [t=73]
3. Escreva o `Nome *`. [guia=parceiros.nome] [t=75]
4. Escreva o `E-mail (login) *`, que o parceiro usa para entrar. [guia=parceiros.email] [t=75]
5. Escreva a `Senha inicial *` (mínimo de 6 caracteres). [guia=parceiros.senha] [t=77]
6. Preencha o `Telefone`. [guia=parceiros.telefone] [t=77]
7. Preencha o `WhatsApp`. [guia=parceiros.whatsapp] [t=77]
8. Escolha o `Plano do parceiro`. [guia=parceiros.plano] [t=80]
9. Clique em `Salvar` (em plano pago, o botão é `Salvar e gerar link`, que gera o link de pagamento do parceiro). [guia=parceiros.salvar]

## resultado

o parceiro recebe acesso à área dele.

## desvios

- Para pagar comissões, veja os artigos "pagar a comissão de um parceiro por fora do portal" e "mandar a comissão do parceiro direto pelo Asaas".
- Na lista `Seus parceiros` há busca por nome, e-mail ou número e filtros por plano, forma de recebimento e situação. Os ícones da linha editam dados e plano, trocam a senha, desativam ou excluem o parceiro.
- Existem três planos de parceiro: Start (gratuito e opcional), Pro e Premium (pagos). Em editar o plano você ajusta nome, periodicidade, valor, o percentual de venda e o percentual residual (o que o parceiro recebe todo mês enquanto o cliente renovar). Você pode mudar o plano de um parceiro a qualquer momento.
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
