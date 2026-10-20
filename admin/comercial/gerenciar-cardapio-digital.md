---
id: gerenciar-cardapio-digital
titulo: montar o cardápio digital de uma empresa do Guia
publico:
  - admin
modulo: guia
categoria: admin
aba: nao-se-aplica
tipo_problema: cadastro
status: rascunho-documental
revisado_em: 2026-10-19
validacao: docs-e-codigo
videos:
  - VV8BxCbIfz4
---

## objetivo

aqui você monta o cardápio com fotos e preços de um restaurante, bar ou lanchonete do Guia.

## pré-requisitos

- Ter acesso administrativo ao portal.
- O módulo Guia Comercial estar disponível no portal.
- A categoria da empresa ter `Cardápio` marcado em `Gerenciar Categorias`; sem isso o cartão não aparece.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas`. [guia=menu:/painel/guia/empresas]
2. Na linha da empresa que você quer, clique no lápis (`Editar`). [guia=guia-empresas.editar] [t=17]
3. Desça até `Conteúdo da ficha` e, no cartão `Cardápio`, clique em `Gerenciar`. O formulário da empresa é salvo antes de abrir a tela. [guia=guia-empresas-editar.gerenciar-cardapio] [t=22]
4. No topo, ligue ou desligue o botão `Fazer meu pedido`. [guia=guia-empresas-cardapio.botoes] [t=30]
5. Ligue ou desligue o botão `Chamar no WhatsApp`. Se o cardápio for só para consulta nas mesas, deixe os dois desligados. [guia=guia-empresas-cardapio.botoes]
6. Em `Aparência do cardápio`, escolha o tema claro ou escuro. [guia=guia-empresas-cardapio.tema] [t=46]
7. Para imprimir o QR code, escolha o tamanho da placa (`A4`, `A5`, `A6` ou adesivo). [guia=guia-empresas-cardapio.tamanho-placa] [t=56]
8. Clique em `Gerar QR Code para imprimir`. [guia=guia-empresas-cardapio.gerar-qrcode] [t=65]
9. Para criar uma seção (por exemplo, Bebidas), clique em `+ Nova seção`. [guia=guia-empresas-cardapio.nova-secao] [t=85]
10. Escreva o nome da seção. [guia=guia-empresas-cardapio.nome-secao] [t=88]
11. Clique em `Criar`. [guia=guia-empresas-cardapio.criar-secao] [t=88]
12. No fim da seção, clique em `+ Adicionar prato`. [guia=guia-empresas-cardapio.adicionar-prato] [t=109]
13. Envie a foto do prato (JPG ou PNG, até 10 MB). [guia=guia-empresas-cardapio.foto] [t=112]
14. Escreva o `Nome do prato *`. [guia=guia-empresas-cardapio.nome-prato] [t=115]
15. Escreva a `Descrição` (ingredientes ou modo de preparo). [guia=guia-empresas-cardapio.descricao] [t=119]
16. Informe o `Preço (R$)`. [guia=guia-empresas-cardapio.preco] [t=123]
17. Para promoção, preencha também o `Preço promocional (R$)`. [guia=guia-empresas-cardapio.preco-promocional] [t=125]
18. Se quiser, marque as `Tags` (viram selos no prato). [guia=guia-empresas-cardapio.tags] [t=132]
19. Clique em `Salvar prato`. [guia=guia-empresas-cardapio.salvar-prato] [t=138]

## resultado

o prato aparece na seção e, quando publicado, no cardápio da página da empresa no portal.

## desvios

- Cada seção e cada prato pode estar `Publicado` ou `Despublicado`; clique no selo para trocar.
- Use as setas para mudar a ordem das seções, o lápis para renomear ou editar e a lixeira para excluir.
- A própria empresa também pode cuidar do cardápio pela área do cliente; a tela é a mesma.
- Cardápio digital é só para consulta. A venda com carrinho fica no `Cardápio do delivery`.

## quando pedir ajuda

peça ajuda se o cartão `Cardápio` não aparecer mesmo com a categoria marcada, ou se a foto ou o prato não salvarem.

## fontes

- `portal-cidade/frontend/src/components/painel/EmpresaEditor.tsx:933-946,1655-1686` — cartões de `Conteúdo da ficha`.
- `portal-cidade/frontend/src/app/painel/guia/empresas/[id]/cardapio/page.tsx:1` — tela `Gerenciar Cardápio`.
- vídeo `VV8BxCbIfz4` (tutorial Gerenciar Cardápio).

## lacunas

não verificado visualmente nesta tarefa; passos conferidos com o vídeo de suporte e com o código da tela. O botão do prato é `+ Adicionar prato`, como no vídeo.
