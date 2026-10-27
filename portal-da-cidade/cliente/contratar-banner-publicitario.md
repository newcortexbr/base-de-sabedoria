---
id: cliente-contratar-banner-publicitario
titulo: "contratar um banner publicitário"
publico:
  - cliente
modulo: publicidade
categoria: conta
aba: nao-se-aplica
tipo_problema:
  - anunciar banner
  - comprar banner
  - publicidade no portal
  - colocar minha propaganda
tags:
  - contratar
  - banner
  - publicidade
  - anunciante
  - pagamento
  - imagem
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - Mu5xmUB7w9o
  - bDAKcYvx4wo
---

## objetivo
aqui você compra um banner para aparecer numa página do portal, escolhe por quanto tempo e envia a arte.

## pré-requisitos

- Estar logado na área do cliente como empresa.
- Ter a arte do banner em PNG ou JPG, no tamanho que a tela indicar (até 5MB).

## passos

1. Na parte `O que eu publico` do menu da esquerda, clique em `Banners Publicitários`. [t=11] [guia=menu:/minha-conta/publicidade]
2. Clique em `Novo banner`, no topo. [t=38] [guia=publicidade.novo]
3. Em `Onde sua marca vai aparecer?`, clique na aba da página do portal e depois no cartão da posição. Cada cartão mostra o tamanho da arte em pixels. [t=46] [guia=publicidade-nova.posicoes]
4. Em `Por quanto tempo?`, escolha o período. [t=67] [guia=publicidade-nova.periodo]
5. Em `Envie a arte`, clique em `Clique para escolher a arte` e escolha o arquivo. `Apagar a arte` remove a imagem para enviar outra. [t=73] [guia=publicidade-nova.arte]
6. Se quiser, preencha o `Link de destino`, para onde o clique leva (WhatsApp, Instagram ou site). [t=82] [guia=publicidade-nova.link]
7. Se quiser, preencha o `Nome interno do banner`, só para você reconhecê-lo. [t=89] [guia=publicidade-nova.nome]
8. Confira o espelho ao lado (botões `Computador` e `Celular`) e o resumo do pedido. [t=95] [guia=publicidade-nova.espelho]
9. Clique em `Pagar e publicar`. [t=111] [guia=publicidade-nova.pagar]
10. Pague com Pix ou cartão na janela que abre. No Pix, copie a chave e envie o comprovante pelo WhatsApp. [t=117] [guia=pagamento.janela]
11. Clique em `Ir para Meus Banners` para acompanhar o banner na lista. [t=125] [guia=fora]

## resultado
depois de pago, se o portal exigir aprovação, o banner fica `Aguardando aprovação` até o dono do portal conferir a arte; depois aparece `Publicado · vence em` e a data. Os filtros da lista são `Todos`, `No ar`, `Vencidos`, `Em análise`, `A pagar` e `Reprovados`.

## onde o banner aparece e como é a tela

- o banner aparece nas páginas do portal que tiverem posição à venda (por exemplo: topo da página inicial, dentro das notícias, vagas, classificados, agenda de eventos, topo do Guia Comercial, pontos turísticos). cada posição fala com o público daquela página.
- quem toca no banner vai ao `Link de destino` (WhatsApp, Instagram, site ou outro link externo). pode trocar a arte quando mudar a promoção.
- no alto da lista, três quadros mostram quantos banners estão no ar, em análise e aguardando pagamento.
- a tela `Novo banner` tem três passos (posição, período, arte e link) e o resumo do pedido fica sempre à direita: página, posição, tamanho e período. o espelho mostra a arte no lugar e na proporção reais, em `Computador` e `Celular`.
- na aba da página, cada cartão desenha a página e marca o lugar exato do banner, com o tamanho da arte em pixels. os períodos disponíveis dependem da posição.
- o resumo informa que a renovação é automática.
- o pagamento abre na própria tela, por Pix ou cartão, conforme o portal.
- depois do pagamento a situação segue: `Aguardando pagamento` → `Aguardando aprovação` → `Publicado · vence em` (data); ou reprovado, com o motivo logo abaixo.

## desvios

- A renovação é automática. Para parar, veja "parar a renovação de um banner".
- O botão `Ver preços`, na faixa `Como você paga` da lista, mostra as opções do portal. Os banners são contratados um de cada vez.
- Banner reprovado: leia o `Motivo da reprovação`, clique em `Corrigir e reenviar`, troque a arte ou o link e salve; ele volta para análise.
- O botão `Editar` da linha também serve para banner publicado (trocar arte, link ou nome).
- Fechou sem pagar: na linha do banner, clique em `Continuar pagamento`.
- Outras posições e patrocínios são combinados com o dono do portal pelo WhatsApp (citado no vídeo).
- Sem posição à venda, a tela mostra `Nenhuma posição de publicidade disponível para venda neste portal no momento.`
- Prazo de análise: quando o portal exige aprovação, depois de pago todo banner entra em análise do dono do portal antes de ir ao ar. O prazo depende do portal; a tela não informa prazo. **O que fazer:** acompanhe em `Banners Publicitários` o cartão `Em análise` (`esperando o portal aprovar`) e a situação de cada banner. Se demorar, fale com o portal.

## quando pedir ajuda

peça ajuda se a lista de posições não carregar ou se o pagamento confirmado não mudar a situação do banner.

## fontes

- `frontend/src/app/minha-conta/publicidade/nova/page.tsx:204-232` — título e tela de banner enviado; `:248-360` passos 1 a 3; `:362-398` resumo, `Pagar e publicar`.
- `frontend/src/app/minha-conta/publicidade/page.tsx:43-50` — filtros; `:171-173` aviso de análise; `:209-216` `Corrigir e reenviar`, `Editar`, `Continuar pagamento`.
- `frontend/src/app/minha-conta/_gestao/FaixaDoPlano.tsx:53-57` — `Como você paga` e `Ver preços`.
- `frontend/src/app/minha-conta/secoes-do-cliente.ts:260,310-311` — nome `Banners Publicitários` no menu.

## lacunas

tela não validada no navegador nesta tarefa. Preço e períodos vêm da configuração do portal.
