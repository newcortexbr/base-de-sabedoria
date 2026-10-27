---
id: cliente-ver-planos-e-assinaturas
titulo: "ver meus planos, preços e assinaturas"
publico:
  - cliente
modulo: planos
categoria: conta
aba: nao-se-aplica
tipo_problema:
  - quanto custa o plano
  - ver preço dos planos
  - qual plano eu tenho
  - quando vence meu plano
  - minha assinatura
tags:
  - ver
  - plano
  - assinatura de plano
  - preco
  - renovacao
  - vencimento
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - yuJhd0nadEE
---

## objetivo

aqui você vê o que assina hoje, quando renova e quanto custa cada plano deste portal. Cada portal define os próprios preços, por isso o valor certo é sempre o que aparece nesta tela.

## pré-requisitos

- Estar logado na área do cliente.

## passos

1. No menu da esquerda, na parte `Minha conta`, clique em `Planos e assinaturas`. [t=10] [guia=menu:/minha-conta/planos]
2. Em `Suas assinaturas`, veja cada plano que você tem, o valor e a data em que renova. [t=13] [guia=planos.suas-assinaturas]
3. Em `Disponível para assinar`, veja as áreas do portal que você ainda não usa e o que mais o portal vende. [t=27] [guia=planos.disponiveis]
4. Clique numa linha para ver os planos e os preços dela. [t=36] [guia=planos.secao]
5. Dentro da seção, o topo confirma sua assinatura e até quando ela vale. Os planos aparecem lado a lado e o seu vem marcado como `Seu Plano`. [t=44] [guia=fora]
6. Em cada cartão, os itens com visto são o que o plano inclui e os itens em vermelho são o que ele não tem. As estrelas marcam os recursos de destaque. [t=49] [guia=fora]
7. Clique em `Comparar todos os planos` para ver uma tabela com cada recurso, plano por plano. [t=57] [guia=planos.comparar]

## resultado

você vê seus planos e a situação de cada um: `Ativo`, `Aguardando pagamento`, `Vencido` ou `Cancelado`.

## desvios

- Quem ainda não assina nada vê o grupo `À venda neste portal` no lugar de `Disponível para assinar`.
- Aparece "Este portal não tem planos à venda no momento.": o portal ainda não pôs planos à venda.
- Para trocar de plano, use o botão no cartão do plano que você quer. Subir para um plano mais completo vale assim que o pagamento é confirmado (veja "subir de plano"). Descer vale só no fim do período já pago (veja "mudar para um plano mais simples").
- `Voltar ao grátis` mostra tudo o que se perde quando o período pago termina; leia antes de confirmar (veja "cancelar o plano").
- o plano de cada seção também aparece no menu da esquerda, ao lado do nome, e na tela `Início`; o botão `Mudar plano` leva aos planos.
- Eventos, Banners Publicitários e Notícias não têm plano mensal: você paga por item, na tela de cada um.

## quando pedir ajuda

peça ajuda se a tela não carregar ou se um plano pago não aparecer depois do pagamento confirmado.

## fontes

- `portal-cidade/frontend/src/app/minha-conta/planos/page.tsx:125-147` — títulos, linhas, selos e resumo "renova em".
- `portal-cidade/frontend/src/app/minha-conta/secoes-do-cliente.ts:237` — `MODULOS_POR_ITEM` (eventos, publicidade, noticias).
- `portal-cidade/frontend/src/app/minha-conta/_planos/VitrineDePlanos.tsx:172-179` — `Comparar todos os planos`.
- `portal-cidade/frontend/src/app/minha-conta/planos/[secao]/page.tsx:454-470` — textos de topo da seção.

## lacunas

- tela não validada no navegador; passos vêm do código e do vídeo.
- "estrelas" e "visto/vermelho" dos cartões vêm do vídeo; não conferidos no código.
