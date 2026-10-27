---
id: cliente-configurar-delivery-da-empresa
titulo: "montar a loja de delivery da empresa: ligar os pedidos, WhatsApp, taxa, pagamento, bairros e cardápio de venda"
publico:
  - cliente
modulo: delivery
categoria: delivery
aba: Guia Comercial
tipo_problema:
  - configurar-delivery
  - delivery-em-breve
tags:
  - configurar
  - delivery
  - cardapio
  - produto
  - whatsapp
  - pagamento
  - pix
  - bairro
  - ligar
  - empresa
status: rascunho-documental
revisado_em: 2026-10-27
validacao: codigo-e-video
videos:
  - qpocVX6gjVA
---

## objetivo

abrir a loja de delivery da empresa no portal: o cliente monta o carrinho e o pedido chega no seu WhatsApp.

## pré-requisitos

- empresa no Guia Comercial com categoria que tem delivery. Sem isso, o cartão `Cardápio do delivery` não aparece.

## explicação

- o `Cardápio` comum da ficha é só para consulta dos pratos. O `Cardápio do delivery` é a loja de vendas, com carrinho e pedido, numa página própria (`/delivery/<empresa>`).
- a configuração tem três abas: `Cardápio`, `Entrega e pagamento` e `Onde entrego`. Comece por `Entrega e pagamento`.

## passos

1. No menu da esquerda, clique em `Guia Comercial`. [guia=menu:/minha-conta/guia]
2. Em `Páginas da sua empresa`, no cartão `Cardápio do delivery`, clique em `Configurar`. [guia=guia.delivery-configurar]
3. Ligue a chave `Receber pedidos pelo delivery do portal`. [guia=fora]
4. Na aba `Entrega e pagamento`, preencha o WhatsApp, a entrega e o pagamento e clique em `Salvar configuração`. [guia=fora]
5. Na aba `Onde entrego`, clique em `Adicionar cidade`, escolha os bairros e clique em `Salvar área`. [guia=fora]
6. Na aba `Cardápio`, crie as seções e os produtos. [guia=guia.delivery-aba-cardapio]

## chave Receber pedidos pelo delivery do portal

- ligada: a página da empresa ganha o botão `Pedir pelo Delivery Online`.
- desligada: o botão some; o cardápio continua salvo.
- ligada sem WhatsApp: aparece "Sua loja está aberta, mas os pedidos não têm para onde ir" — o cliente fecha o pedido e você não é avisado.

## aba Entrega e pagamento

- `WhatsApp que recebe os pedidos` (obrigatório): cada pedido chega nele com itens, endereço e forma de pagamento.
- `Taxa de entrega` e `Pedido mínimo` em reais.
- `Tempo mínimo (min)` e `Tempo máximo (min)`: a faixa de entrega mostrada ao cliente; o mínimo não pode passar do máximo (até 999).
- `Pagamento`: marque `Dinheiro`, `Cartão` e/ou `Pix`. Com Pix, informe a `Chave Pix` (CPF, e-mail, telefone ou chave aleatória).
- `Mensagem de boas-vindas` (opcional, até 300 caracteres): aparece no topo da loja. Ex.: "Peça já! Entrega rápida em toda a região."

## aba Onde entrego

- uma linha por cidade: marque `Município todo` para entregar em qualquer bairro, ou clique só nos bairros atendidos.
- no fechamento do pedido, o cliente só consegue escolher os bairros que você atende.

## aba Cardápio

1. Clique em `Nova seção` e dê um nome (ex.: Pizzas, Bebidas, Pratos para entrega).
2. Clique em `Novo produto`: `Nome do produto`, `Descrição`, `Preço` (deixe 0 se o preço depende do tamanho escolhido) e foto.
3. `Destacar no cardápio`: o produto aparece nos destaques, no topo da loja.
4. Confira a seção, deixe `Publicado no site` ligado e clique em `Salvar`. [guia=guia.delivery-produto-salvar]

Na lista, os produtos ficam por seção, com preço, chave para tirar do ar sem apagar e os botões de editar e excluir.

## resultado

a loja mostra no topo a capa, a taxa, o tempo e o pedido mínimo; depois os destaques e as seções. O cliente toca no `+`, escolhe a quantidade, pode deixar uma observação e adiciona ao carrinho. Como o pedido chega e a fila: veja "consultar pedidos de delivery da empresa".

## desvios

- página da loja diz "Delivery em breve": a chave `Receber pedidos pelo delivery do portal` está desligada ou a configuração não foi salva.

## fontes

- `portal-cidade/frontend/src/app/minha-conta/guia/ConfigDoDelivery.tsx` — chave, abas, campos e limites.
- `portal-cidade/frontend/src/app/minha-conta/guia/AreasDoDelivery.tsx` — `Onde entrego`.
- `portal-cidade/frontend/src/app/minha-conta/guia/ConteudoDoLayout.tsx:276-295,1908` — cartão e campos do produto.
