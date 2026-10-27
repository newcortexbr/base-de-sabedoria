---
id: editar-preco-de-prato-do-cardapio
titulo: "mudar o preço de um prato do cardápio digital"
publico:
  - admin
modulo: guia
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - editar
  - preco
  - prato
  - cardapio
  - guia
  - empresa
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - VV8BxCbIfz4
---

## objetivo

Aqui você muda o preço de um prato que já existe. Este é o cardápio digital para consulta.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.
- O módulo Guia Comercial estar disponível.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas`. [guia=menu:/painel/guia/empresas]
2. Na linha da empresa, clique no lápis (`Editar`). [guia=guia-empresas.editar]
3. Em `Conteúdo da ficha`, clique em `Gerenciar` no cartão `Cardápio`. O formulário da empresa é salvo antes de abrir a tela. [guia=guia-empresas-editar.gerenciar-cardapio]
4. No prato, clique no lápis (`Editar`). [guia=guia-empresas-cardapio.editar-prato] [t=143]
5. Altere `Preço (R$)`. [guia=guia-empresas-cardapio.preco] [t=122]
6. Se necessário, altere ou limpe `Preço promocional (R$)`. [guia=guia-empresas-cardapio.preco-promocional] [t=126]
7. Clique em `Salvar prato`. [guia=guia-empresas-cardapio.salvar-prato] [t=140]

## resultado

O prato é atualizado. Editar o preço preserva o estado de publicação atual.

## quando pedir ajuda

Peça ajuda se o controle não aparecer ou se a tela mostrar erro ao salvar.

## fontes

- `portal-cidade/frontend/src/app/painel/guia/empresas/[id]/cardapio/page.tsx:75-77,217-271,478`.

## lacunas

Sem validação no navegador. O vídeo é uma referência da tela; só os passos demonstrados têm tempo marcado.
