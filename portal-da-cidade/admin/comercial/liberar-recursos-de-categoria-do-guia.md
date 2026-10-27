---
id: liberar-recursos-de-categoria-do-guia
titulo: "liberar cardápio, delivery ou acomodações para uma categoria"
publico:
  - admin
modulo: guia
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - categoria
  - guia
  - cardapio
  - delivery
  - ligar
  - desligar
  - empresa
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - 09n3Eiwn418
---

## objetivo

Aqui você escolhe os recursos da categoria. As empresas também precisam ter ficha completa; a cortesia do portal permite isso.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.
- O módulo Guia Comercial estar disponível.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Gerenciar Categorias`. [guia=menu:/painel/guia/categorias]
2. Na categoria desejada, clique em `Editar`. [guia=guia-categorias.editar] [t=112]
3. Ajuste `Cardápio — restaurante, bar, lanchonete`. [guia=guia-categorias.cardapio] [t=71]
4. Ajuste `Delivery — aceita pedido pelo site`. [guia=guia-categorias.delivery] [t=73]
5. Ajuste `Acomodações — hotel, pousada, hospedagem`. [guia=guia-categorias.acomodacoes] [t=78]
6. Clique em `Salvar`. [guia=guia-categorias.salvar]
7. Se aparecer o aviso sobre recursos retirados das empresas, clique em `Alterar` para confirmar. [guia=confirmacao.confirmar]

## resultado

As opções da categoria são gravadas. Desmarcar um recurso oculta o conteúdo público correspondente, sem apagar o conteúdo cadastrado.

## quando pedir ajuda

Peça ajuda se o controle não aparecer ou se a tela mostrar erro ao salvar.

## fontes

- `portal-cidade/frontend/src/app/painel/guia/categorias/page.tsx:67-82,187-219`.
- `portal-cidade/frontend/src/components/painel/EmpresaEditor.tsx:948-980`.

## lacunas

Sem validação no navegador. O vídeo é uma referência da tela; só os passos demonstrados têm tempo marcado.
