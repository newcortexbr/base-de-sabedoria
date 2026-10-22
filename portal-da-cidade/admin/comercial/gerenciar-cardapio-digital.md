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
revisado_em: 2026-10-21
validacao: docs-e-codigo
videos:
  - VV8BxCbIfz4
  - gmYWNfgX8LM
---

## objetivo

aqui você monta o cardápio com fotos e preços de um restaurante, bar ou lanchonete do Guia.

## pré-requisitos

- Ter acesso administrativo ao portal.
- O módulo Guia Comercial estar disponível no portal.
- A categoria da empresa ter `Cardápio` marcado em `Gerenciar Categorias`; sem isso o cartão não aparece.

## veja também
- para ajustar botões, tema e imprimir o QR code, veja o artigo "configurar botões, tema e QR code do cardápio digital".

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas`. [guia=menu:/painel/guia/empresas]
2. Na linha da empresa que você quer, clique no lápis (`Editar`). [guia=guia-empresas.editar] [t=17]
3. Desça até `Conteúdo da ficha` e, no cartão `Cardápio`, clique em `Gerenciar`. O formulário da empresa é salvo antes de abrir a tela. [guia=guia-empresas-editar.gerenciar-cardapio] [t=22]
4. Para criar uma seção (por exemplo, Bebidas), clique em `+ Nova seção`. [guia=guia-empresas-cardapio.nova-secao] [t=85]
5. Escreva o nome da seção. [guia=guia-empresas-cardapio.nome-secao] [t=88]
6. Clique em `Criar`. [guia=guia-empresas-cardapio.criar-secao] [t=88]
7. No fim da seção, clique em `+ Adicionar prato`. [guia=guia-empresas-cardapio.adicionar-prato] [t=109]
8. Envie a foto do prato (JPG ou PNG, até 10 MB). [guia=guia-empresas-cardapio.foto] [t=112]
9. Escreva o `Nome do prato *`. [guia=guia-empresas-cardapio.nome-prato] [t=115]
10. Escreva a `Descrição` (ingredientes ou modo de preparo). [guia=guia-empresas-cardapio.descricao] [t=119]
11. Informe o `Preço (R$)`. [guia=guia-empresas-cardapio.preco] [t=123]
12. Para promoção, preencha também o `Preço promocional (R$)`. [guia=guia-empresas-cardapio.preco-promocional] [t=125]
13. Se quiser, marque as `Tags` (viram selos no prato). [guia=guia-empresas-cardapio.tags] [t=132]
14. Clique em `Salvar prato`. [guia=guia-empresas-cardapio.salvar-prato] [t=138]
15. Para mudar um prato depois, clique no lápis dele. [guia=guia-empresas-cardapio.nome-prato]

## resultado

o prato aparece na seção e, quando publicado, no cardápio da página da empresa no portal. se você preencheu o preço promocional, o site mostra o preço antigo riscado ao lado do novo.

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
