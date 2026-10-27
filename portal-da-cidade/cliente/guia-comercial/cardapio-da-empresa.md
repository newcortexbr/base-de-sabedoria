---
id: cliente-guia-cardapio-da-empresa
titulo: "montar o cardápio digital da empresa: seções, pratos, preço promocional, selos, fotos, botões, tema e QR code"
publico:
  - cliente
modulo: guia-comercial
categoria: guia-comercial
aba: Guia Comercial
tipo_problema:
  - cardapio
tags:
  - criar
  - cardapio
  - prato
  - preco
  - foto
  - qr code
  - tema
  - botao
  - guia
  - empresa
status: rascunho-documental
revisado_em: 2026-10-27
validacao: codigo-e-video
videos:
  - gmYWNfgX8LM
---

## objetivo

montar o cardápio para o cliente consultar pratos e preços (não é a loja de pedidos; para vender com carrinho, veja "montar a loja de delivery da empresa").

## pré-requisitos

- empresa no Guia Comercial com categoria que tem cardápio (restaurantes, bares, lanchonetes). Sem isso, o cartão `Cardápio` não aparece.

## passos

1. No menu da esquerda, clique em `Guia Comercial`. [guia=menu:/minha-conta/guia]
2. Role até `Páginas da sua empresa` e, no cartão `Cardápio`, clique em `Começar` (ou `Gerenciar`, se já tiver itens). [guia=fora]
3. Clique em `Nova seção`, dê um nome e salve. [guia=fora]
4. Na seção, clique em `Novo prato`, preencha e clique em `Salvar`. [guia=fora]

## campos do prato

- `Nome do prato` (obrigatório) e `Descrição` curta.
- `Preço`; `Preço promocional` só se estiver em promoção — o preço normal aparece riscado.
- selos: `Mais pedido`, `Novidade`, `Vegetariano`, `Recomendado`.
- uma foto. Recomendado: prato com foto chama muito mais atenção.

## seções e itens

- seção: `Nova seção` → nome (ex.: Entradas, Carnes, Bebidas, Sobremesas) → `Salvar`; a nova seção entra no fim da lista. Cada seção tem a chave para publicar ou tirar do ar e os botões `Novo prato`, `Renomear` e excluir.
- só o que está com `Publicado no site` ligado aparece no perfil. A chave ao lado de cada prato tira do ar sem apagar (fotos e dados ficam salvos); há também editar e excluir.
- o topo da tela mostra o total de seções e de pratos.

## botões, tema e QR code

Só aparecem com plano que libera a ficha completa.

- `Botões do cardápio`: escolha os botões do rodapé — `Fazer meu pedido` (leva ao delivery) e `Chamar no WhatsApp`. Cardápio só para consulta nas mesas: desligue os dois.
- tema `Claro` ou `Escuro`; o aviso `Em uso` mostra o atual.
- `QR Code do cardápio`: escolha o `Tamanho da placa` (A4, A5, A6 ou adesivo) e clique em `Gerar QR Code para imprimir`; também dá para `Baixar imagem` ou `Copiar link`. Cole nas mesas, no balcão ou na vitrine. Só fica disponível quando a empresa está no ar.

## resultado

no portal, o cardápio mostra as seções em abas no topo, a busca e cada prato com foto, descrição, selos e preço; o cliente filtra por seção. Na ficha da empresa, o cardápio ganha um botão de destaque no topo. Recomendado: manter fotos e preços sempre atualizados.

## fontes

- `portal-cidade/frontend/src/app/minha-conta/guia/ConteudoDoLayout.tsx:95-110,199-219,1661-1685`
- `portal-cidade/frontend/src/components/guia/CardapioQRCode.tsx`, `CardapioTema.tsx`, `CardapioBotoes.tsx`
