---
id: gerenciar-cardapio-digital
titulo: montar o cardápio digital de uma empresa do Guia
publico:
  - admin
modulo: guia
categoria: admin
aba: nao-se-aplica
tipo_problema: cadastro
tags:
  - criar
  - cardapio
  - prato
  - foto
  - preco
  - guia
  - empresa
status: rascunho-documental
revisado_em: 2026-10-24
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
- A empresa ter ficha completa; a cortesia do portal também atende a essa condição.
- A categoria da empresa ter `Cardápio` marcado em `Gerenciar Categorias`; sem isso o cartão não aparece.

## veja também
- para ajustar botões, tema e imprimir o QR code, veja o artigo "configurar botões, tema e QR code do cardápio digital".

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas`. [guia=menu:/painel/guia/empresas]
2. Na linha da empresa, clique no lápis (`Editar`). [guia=guia-empresas.editar] [t=17]
3. Em `Conteúdo da ficha`, no cartão `Cardápio`, clique em `Gerenciar`. O formulário da empresa é salvo antes de abrir a tela. [guia=guia-empresas-editar.gerenciar-cardapio] [t=20]
4. Para criar uma seção (por exemplo, Bebidas), clique em `+ Nova seção`. [guia=guia-empresas-cardapio.nova-secao] [t=88]
5. Escreva o nome da seção. [guia=guia-empresas-cardapio.nome-secao] [t=88]
6. Clique em `Criar`. [guia=guia-empresas-cardapio.criar-secao] [t=90]
7. No fim da seção, clique em `+ Adicionar prato`. [guia=guia-empresas-cardapio.adicionar-prato] [t=111]
8. Em `Adicionar foto`, escolha a imagem do prato. [guia=guia-empresas-cardapio.foto] [t=113]
9. Escreva o `Nome do prato *`. [guia=guia-empresas-cardapio.nome-prato] [t=117]
10. Escreva a `Descrição` (ingredientes ou modo de preparo). [guia=guia-empresas-cardapio.descricao] [t=120]
11. Informe o `Preço (R$)`. [guia=guia-empresas-cardapio.preco] [t=122]
12. Para promoção, preencha também o `Preço promocional (R$)`. [guia=guia-empresas-cardapio.preco-promocional] [t=126]
13. Se quiser, marque as `Tags` (viram selos no prato). [guia=guia-empresas-cardapio.tags] [t=131]
14. Clique em `Salvar prato`. [guia=guia-empresas-cardapio.salvar-prato] [t=140]

## resultado

O prato é salvo na seção escolhida e aparece o aviso `Prato salvo`. A publicação também depende do estado da seção e da disponibilidade do cardápio na ficha da empresa.

## desvios

- Cada seção e cada prato pode estar `Publicado` ou `Despublicado`; clique no selo para trocar.
- Use as setas para mudar a ordem das seções, o lápis para renomear ou editar e a lixeira para excluir.
- A própria empresa também pode cuidar do cardápio pela área do cliente; a tela é a mesma.
- Cardápio digital é só para consulta. A venda com carrinho fica no `Cardápio do delivery`.

## quando pedir ajuda

peça ajuda se o cartão `Cardápio` não aparecer mesmo com a categoria marcada, ou se a foto ou o prato não salvarem.

## fontes

- `portal-cidade/frontend/src/components/painel/EmpresaEditor.tsx:949-974,1735-1744`.
- `portal-cidade/frontend/src/app/painel/guia/empresas/[id]/cardapio/page.tsx:100-124,172-271,478-492,649-669`.

## lacunas

A tela informa `JPG ou PNG, máx. 10MB` (`cardapio/page.tsx:185`), mas não foi auditada a validação desse limite no servidor.

Conferência documental no código b2f62d3f e nas legendas dos vídeos citados. Sem execução no navegador; não foram medidos cache, entrega de pedidos, impressão ou upload reais.
