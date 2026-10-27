---
id: configurar-cardapio-digital-botoes-tema-qrcode
titulo: "configurar botões, tema e QR code do cardápio digital"
publico:
  - admin
modulo: guia
categoria: admin
aba: nao-se-aplica
tipo_problema: cadastro
tags:
  - qr code
  - cardapio
  - botao
  - tema
  - imprimir
  - link
  - editar
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - VV8BxCbIfz4
---

## objetivo
aqui você escolhe os botões que aparecem no cardápio, o tema claro ou escuro e gera o QR code para imprimir.

## pré-requisitos

- Ter acesso administrativo ao portal.
- O módulo Guia Comercial estar disponível no portal.
- A empresa ter ficha completa; a cortesia do portal também atende a essa condição.
- A categoria da empresa ter `Cardápio` marcado em `Gerenciar Categorias`; sem isso o cartão não aparece.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas`. [guia=menu:/painel/guia/empresas]
2. Na linha da empresa, clique no lápis (`Editar`). [guia=guia-empresas.editar]
3. Em `Conteúdo da ficha`, clique em `Gerenciar` no cartão `Cardápio`. O formulário da empresa é salvo antes de abrir a tela. [guia=guia-empresas-editar.gerenciar-cardapio] [t=22]
4. Ajuste `Fazer meu pedido` para mostrar ou ocultar esse botão no cardápio. [guia=guia-empresas-cardapio.botao-pedido] [t=34]
5. Ajuste `Chamar no WhatsApp` para mostrar ou ocultar esse botão. [guia=guia-empresas-cardapio.botao-whatsapp] [t=37]
6. Em `Aparência do cardápio`, escolha `Claro` ou `Escuro`. [guia=guia-empresas-cardapio.tema] [t=49]
7. Em `Tamanho da placa`, escolha o formato para impressão. [guia=guia-empresas-cardapio.tamanho-placa] [t=61]
8. Clique em `Gerar QR Code para imprimir`. [guia=guia-empresas-cardapio.gerar-qrcode] [t=69]

## baixar a imagem

1. Depois de abrir o cardápio pelos três primeiros passos, clique em `Baixar imagem`. [guia=guia-empresas-cardapio.baixar-imagem] [t=72]

## copiar o link

1. Depois de abrir o cardápio pelos três primeiros passos, clique em `Copiar link`. [guia=guia-empresas-cardapio.copiar-link] [t=74]

## resultado

As opções de botão e tema são gravadas ao alterá-las. O comando de QR code abre a impressão da placa.

## desvios

- Cada seção e cada prato pode estar `Publicado` ou `Despublicado`; clique no selo para trocar.
- Use as setas para mudar a ordem das seções, o lápis para renomear ou editar e a lixeira para excluir.
- A própria empresa também pode cuidar do cardápio pela área do cliente; a tela é a mesma.
- Cardápio digital é só para consulta. A venda com carrinho fica no `Cardápio do delivery`; o botão `Fazer meu pedido` apenas leva o cliente até lá. Com os dois botões desligados, o cardápio fica só para consulta.

## campos
- `Fazer meu pedido` leva o cliente ao delivery da loja. `Chamar no WhatsApp` abre a conversa com o número da empresa. os dois ficam no rodapé do cardápio.
- se o restaurante usa o cardápio só nas mesas, desligue os dois botões: o cliente vê pratos e preços sem botão de pedido.
- `Aparência do cardápio`: `Claro` ou `Escuro`; um aviso `em uso` mostra o tema atual. o escuro combina com fotos de carne (ex.: churrascaria).
- `Tamanho da placa`: `A4` (parede), `A5` (balcão, padrão), `A6` (mesa) ou `Adesivo` (10 × 10 cm). cole a placa nas mesas, no balcão ou na vitrine.
- `Baixar imagem` baixa o QR code; `Copiar link` copia o endereço do cardápio, para enviar por WhatsApp e redes sociais.

## quando pedir ajuda

peça ajuda se o cartão `Cardápio` não aparecer mesmo com a categoria marcada, ou se a foto ou o prato não salvarem.

## fontes

- `portal-cidade/frontend/src/components/painel/EmpresaEditor.tsx:949-974,1735-1744`.
- `portal-cidade/frontend/src/components/guia/CardapioBotoes.tsx:15-16,71-78`.
- `portal-cidade/frontend/src/components/guia/CardapioTema.tsx:65-105`.
- `portal-cidade/frontend/src/components/guia/CardapioQRCode.tsx:112-161`.

## lacunas

Conferência documental no código b2f62d3f e nas legendas dos vídeos citados. Sem execução no navegador; não foram medidos cache, entrega de pedidos, impressão ou upload reais.
