---
id: editar-produto-do-delivery
titulo: "mudar o preço ou a disponibilidade de um produto do delivery"
publico:
  - admin
modulo: delivery
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - editar
  - preco
  - produto
  - delivery
  - disponibilidade
  - empresa
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - 2ShbACG2mHE
---

## objetivo

Aqui você altera o preço base e decide se um produto já cadastrado pode aparecer na loja.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.
- O módulo Guia Comercial estar disponível.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas`. [guia=menu:/painel/guia/empresas]
2. Na linha da empresa, clique no lápis (`Editar`). [guia=guia-empresas.editar]
3. Em `Conteúdo da ficha`, clique em `Gerenciar` no cartão `Cardápio do delivery`. O formulário da empresa é salvo antes de abrir a tela. [guia=guia-empresas-editar.gerenciar-cardapio-delivery]
4. Escolha a seção do produto. [guia=delivery-cardapio.secao]
5. No produto, clique em `Editar`. [guia=delivery-cardapio.editar-produto] [t=42]
6. Altere `Preço base (R$) — deixe 0 se o preço é definido pelos tamanhos`. [guia=delivery-cardapio.preco] [t=48]
7. Ajuste `Disponível`. [guia=delivery-cardapio.disponivel] [t=59]
8. Clique em `Salvar alterações`. [guia=delivery-cardapio.salvar-produto]

## resultado

As mudanças do produto são gravadas. Produtos indisponíveis são retirados da listagem pública do delivery.

## quando pedir ajuda

Peça ajuda se o controle não aparecer ou se a tela mostrar erro ao salvar.

## fontes

- `portal-cidade/frontend/src/app/painel/delivery/cardapio/page.tsx:243-301,412,455`.
- `portal-cidade/backend/delivery/serializers.py:50`.

## lacunas

Sem validação no navegador. O vídeo é uma referência da tela; só os passos demonstrados têm tempo marcado.
