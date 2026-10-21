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
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
videos:
  - Mu5xmUB7w9o
---

## objetivo
aqui você compra um banner para aparecer numa página do portal, escolhe por quanto tempo e envia a arte.

## pré-requisitos

- Estar logado na área do cliente como empresa.
- Ter a arte do banner em PNG ou JPG.

## passos

1. No menu da esquerda da sua área, clique em `Banners Publicitários`. [guia=menu:/minha-conta/publicidade]
2. Clique em `Novo banner`, no topo. [guia=fora]
3. Em `Onde sua marca vai aparecer?`, escolha a página e depois a posição. [guia=fora]
4. Em `Por quanto tempo?`, escolha o período. [guia=fora]
5. Em `Envie a arte`, clique em `Clique para escolher a arte` e escolha o arquivo. [guia=fora]
6. Se quiser, preencha o `Link de destino`, para onde o clique leva. [guia=fora]
7. Confira o resumo em `Seu pedido` e clique em `Pagar e publicar`. [guia=fora]
8. Pague com Pix ou cartão na janela que abre. [guia=fora]

## resultado
depois de pago, o banner entra em análise do portal antes de ir ao ar. Na lista, ele aparece como `Aguardando aprovação` e depois `Publicado`.

## desvios

- A renovação é automática. Para parar, veja "parar a renovação de um banner".
- Banner `Reprovado`: leia o `Motivo da reprovação`, clique em `Corrigir e reenviar` e envie de novo.
- Fechou sem pagar: clique em `Continuar pagamento` na linha do banner.

## quando pedir ajuda

peça ajuda se a lista de posições não carregar ou se o pagamento confirmado não mudar a situação do banner.

## fontes

- `portal-cidade/frontend/src/app/minha-conta/publicidade/nova/page.tsx` — títulos das etapas, campos, "Pagar e publicar", renovação automática.
- `portal-cidade/frontend/src/app/minha-conta/publicidade/page.tsx` — situações, "Corrigir e reenviar", "Continuar pagamento", aviso de análise.
- `portal-cidade/frontend/src/app/minha-conta/secoes-do-cliente.ts:260,311` — nome "Banners Publicitários" no menu.

## lacunas

tela não validada no navegador nesta tarefa. Não há prazo de análise definido no código.
