---
id: aprovar-cadastro-de-empresa
titulo: "aprovar o cadastro de empresa feito pelo próprio cliente"
publico:
  - admin
modulo: aprovações
categoria: aprovações
aba: Aprovações
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-22
validacao: docs-e-codigo
---

## objetivo

aqui você libera ou recusa a empresa que o próprio cliente cadastrou no Guia Comercial. Enquanto você não aprova, ela não aparece no site.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.
- A opção `Exigir minha aprovação antes de publicar` estar ligada (veja "escolher as regras de aprovação e denúncias do portal"). Desligada, não há fila.

## explicação

- por que toda empresa que chega pede a sua aprovação: porque a opção `Exigir minha aprovação antes de publicar` está ligada. Ela vem ligada por padrão em todo portal. Se você pensou "toda empresa chega e eu tenho que aprovar" ou "por que preciso aprovar empresa", é isso.
- para parar de aprovar uma a uma, desligue essa opção: em `Aprovações e Denúncias`, no quadro `Como funciona neste portal`, desmarque `Exigir minha aprovação antes de publicar`. Daí em diante a empresa do cliente vai ao ar na hora. Ela vale para o portal todo (vagas, classificados e demais envios de clientes também); não dá para desligar só para empresas. Empresas que já estão pendentes continuam na fila até você aprovar ou recusar.
- o cliente cria a conta, contrata um plano do Guia e preenche a empresa na área dele. Ao clicar em `Publicar no guia`, o cadastro vai para você, como `Pendente`.
- com a aprovação desligada, a empresa do cliente vai ao ar na hora.
- empresa cadastrada por você, no painel, vai ao ar direto, sem passar por esta fila.

## passos

1. No menu da esquerda, logo no começo, clique em `Aprovações e Denúncias`; na aba `Aprovações` ficam os envios esperando. O número ao lado mostra quantos são. [guia=menu:/painel/aprovacoes]
2. Procure o item do tipo `Empresa` e clique em `Ver detalhe`. Confira razão social, categoria, descrição, endereço, contatos, logo, capa e fotos. [guia=aprovacoes.ver-detalhe]
3. Se estiver certo, clique em `Aprovar`. A empresa entra no Guia. [guia=aprovacoes.aprovar]
4. Se não estiver, clique em `Recusar`, escreva o motivo (obrigatório) e confirme. O cliente recebe o motivo, corrige e envia de novo. [guia=aprovacoes.recusar] [guia=aprovacoes.motivo] [guia=aprovacoes.confirmar-recusa]

## resultado

aprovada: a empresa passa a `Ativo` e aparece no site. Recusada: fica `Reprovado` e fora do site.

## desvios

- para achar empresas paradas, vá em `Guia Comercial` > `Listar Empresas` e escolha `Pendente` ou `Reprovado` no filtro. [guia=menu:/painel/guia/empresas] [guia=guia-empresas.filtro-status]
- empresa `Reprovado` que o cliente corrige e salva volta sozinha para `Pendente` e reaparece na fila. Mudança comum numa empresa já publicada não pede aprovação de novo.

## quando pedir ajuda

peça ajuda se a empresa aprovada não aparecer no Guia depois de alguns minutos.

## fontes

- `portal-cidade/backend/comercial/views_public.py:784`
- `portal-cidade/backend/guia/moderacao.py:130`
- `portal-cidade/backend/portais/moderacao.py:54` (`precisa_de_aprovacao`)
- `portal-cidade/backend/portais/models.py:97` (`fila_aprovacao_ativa`, padrão ligado)
- `portal-cidade/frontend/src/app/painel/aprovacoes/AprovacoesClient.tsx:244`
- `portal-cidade/frontend/src/app/painel/guia/empresas/page.tsx:128`

## lacunas

não verificado visualmente. A volta de `Reprovado` para `Pendente` vem de `comercial/views_public.py:830` e não foi testada. Quando a empresa aprovada aparece no site depende do cache da página; não foi medido.

