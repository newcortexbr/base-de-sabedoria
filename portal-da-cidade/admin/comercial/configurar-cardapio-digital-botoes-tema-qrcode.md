---
id: configurar-cardapio-digital-botoes-tema-qrcode
titulo: "configurar botões, tema e QR code do cardápio digital"
publico:
  - admin
modulo: guia
categoria: admin
aba: nao-se-aplica
tipo_problema: cadastro
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
videos:
  - VV8BxCbIfz4
---

## objetivo
aqui você escolhe os botões que aparecem no cardápio, o tema claro ou escuro e gera o QR code para imprimir.

## pré-requisitos

- Ter acesso administrativo ao portal.
- O módulo Guia Comercial estar disponível no portal.
- A categoria da empresa ter `Cardápio` marcado em `Gerenciar Categorias`; sem isso o cartão não aparece.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas`. [guia=menu:/painel/guia/empresas]
2. Na linha da empresa que você quer, clique no lápis (`Editar`). [guia=guia-empresas.editar]
3. Desça até `Conteúdo da ficha` e, no cartão `Cardápio`, clique em `Gerenciar`. O formulário da empresa é salvo antes de abrir a tela. [guia=guia-empresas-editar.gerenciar-cardapio]
4. No topo, ligue ou desligue o botão `Fazer meu pedido` (ele leva o cliente ao delivery da loja). [guia=guia-empresas-cardapio.botoes]
5. Ligue ou desligue o botão `Chamar no WhatsApp` (ele abre a conversa com o número da empresa). Se o cardápio for só para consulta nas mesas, deixe os dois desligados. [guia=guia-empresas-cardapio.botoes]
6. Em `Aparência do cardápio`, escolha o tema claro ou escuro. [guia=guia-empresas-cardapio.tema]
7. Para imprimir o QR code, escolha o tamanho da placa (`A4` para parede, `A5` para balcão, `A6` para mesa ou adesivo de 10 por 10 cm). [guia=guia-empresas-cardapio.tamanho-placa]
8. Clique em `Gerar QR Code para imprimir`. [guia=guia-empresas-cardapio.gerar-qrcode]
9. Se preferir, baixe a imagem do QR code ou copie o link para mandar no WhatsApp e nas redes sociais. [guia=guia-empresas-cardapio.gerar-qrcode]

## resultado
O cardápio mostra os botões e o tema escolhidos, e o QR code fica pronto para imprimir. no portal, a página da empresa mostra o bloco `cardápio digital` com o número de seções e de itens e o botão `ver cardápio completo`. a página do cardápio tem capa, logo, busca, seções em abas e, no rodapé, os botões que você ligou.

## desvios

- Cada seção e cada prato pode estar `Publicado` ou `Despublicado`; clique no selo para trocar.
- Use as setas para mudar a ordem das seções, o lápis para renomear ou editar e a lixeira para excluir.
- A própria empresa também pode cuidar do cardápio pela área do cliente; a tela é a mesma.
- Cardápio digital é só para consulta. A venda com carrinho fica no `Cardápio do delivery`; o botão `Fazer meu pedido` apenas leva o cliente até lá. Com os dois botões desligados, o cardápio fica só para consulta.

## quando pedir ajuda

peça ajuda se o cartão `Cardápio` não aparecer mesmo com a categoria marcada, ou se a foto ou o prato não salvarem.

## fontes

- `portal-cidade/frontend/src/components/painel/EmpresaEditor.tsx:933-946,1655-1686` — cartões de `Conteúdo da ficha`.
- `portal-cidade/frontend/src/app/painel/guia/empresas/[id]/cardapio/page.tsx:1` — tela `Gerenciar Cardápio`.
- vídeo `VV8BxCbIfz4` (tutorial Gerenciar Cardápio).

## lacunas

não verificado visualmente nesta tarefa; passos conferidos com o vídeo de suporte e com o código da tela. O botão do prato é `+ Adicionar prato`, como no vídeo.
