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
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
videos:
  - yuJhd0nadEE
---

## objetivo
aqui você vê o que assina hoje, quando renova e quanto custa cada plano deste portal. Cada portal define os próprios preços, por isso o valor certo é sempre o que aparece nesta tela.

## pré-requisitos

- Estar logado na área do cliente.

## passos

1. No menu da esquerda da sua área, clique em `Planos e assinaturas`. [guia=menu:/minha-conta/planos]
2. Em `Suas assinaturas`, veja cada plano que você tem, o valor e a data em que renova. [guia=fora]
3. Em `Disponível para assinar`, veja as áreas do portal que você ainda não usa e o que mais o portal vende. Clique numa linha para ver os planos e os preços dela. [guia=fora]
4. Dentro da seção, o topo confirma sua assinatura e até quando ela vale. Os planos aparecem lado a lado e o seu vem marcado como `Seu Plano`. [guia=fora]
5. Em cada cartão, os itens com visto são o que o plano inclui e os itens em vermelho são o que ele não tem. As estrelas marcam os recursos de destaque. [guia=fora]

## resultado
você vê seus planos e a situação de cada um: `Ativo`, `Aguardando pagamento`, `Vencido` ou `Cancelado`.

## desvios

- Aparece "Este portal não tem planos à venda no momento.": o portal ainda não pôs planos à venda.
- Dentro de uma seção, clique em `Comparar todos os planos` para ver uma tabela com cada recurso, plano por plano.
- Para trocar de plano, use o botão no cartão do plano que você quer. Subir para um plano mais completo vale assim que o pagamento é confirmado. Descer vale só no fim do período já pago (botão `Mudar para este plano` e depois `Confirmar descida`; `Cancelar` desfaz).
- `Voltar ao Grátis` mostra tudo o que se perde quando o período pago termina; leia antes de confirmar. até lá você continua com o plano atual.
- o plano de cada seção também aparece no menu da esquerda, ao lado do nome, e na tela início; o botão `Mudar plano` leva direto para `Planos e assinaturas`.
- Eventos, Banners Publicitários e Notícias não têm plano mensal: você paga por item, na tela de cada um.

## quando pedir ajuda

peça ajuda se a tela não carregar ou se um plano pago não aparecer depois do pagamento confirmado.

## fontes

- `portal-cidade/frontend/src/app/minha-conta/planos/page.tsx` — títulos, selos e resumo "renova em".
- `portal-cidade/frontend/src/app/minha-conta/secoes-do-cliente.ts` — `MODULOS_POR_ITEM` (eventos, publicidade, noticias).
- `portal-cidade/frontend/src/app/minha-conta/_planos/VitrineDePlanos.tsx` — "Comparar todos os planos".

## lacunas

tela não validada no navegador nesta tarefa; passos vêm do código. O passo 2 e o 3 não têm marca na tela (`fora`).
