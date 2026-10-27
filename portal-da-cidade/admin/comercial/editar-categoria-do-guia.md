---
id: editar-categoria-do-guia
titulo: "editar uma categoria do Guia"
publico:
  - admin
modulo: guia
categoria: admin
aba: nao-se-aplica
tipo_problema: configuracao
tags:
  - editar
  - categoria
  - guia
  - situacao
  - empresa
  - nome
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - 09n3Eiwn418
---

## objetivo
aqui você muda o nome, o ícone ou a situação de uma categoria do Guia.

## pré-requisitos

- Ter acesso administrativo ao portal.
- O Guia estar ativo.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Gerenciar Categorias`. [guia=menu:/painel/guia/categorias] [t=14]
2. Na linha da categoria, clique em `Editar`. [guia=guia-categorias.editar] [t=112]
3. Altere `Nome *`, se necessário. [guia=guia-categorias.nome]
4. Escolha o `Ícone`, se necessário. [guia=guia-categorias.icone]
5. Ajuste `Ativa` para mostrar ou ocultar a categoria. [guia=guia-categorias.ativa]
6. Ajuste `Aparece no formulário de Orçamento`, se necessário. [guia=guia-categorias.aceita-orcamento]
7. Escolha a `Cor`, se necessário. [guia=guia-categorias.cor]
8. Clique em `Salvar`. [guia=guia-categorias.salvar]
9. Se aparecer a confirmação de desativação, clique em `Desativar`. A categoria e as empresas dela saem do Guia. [guia=confirmacao.confirmar]

## resultado
A categoria fica com as mudanças.

## sobre os recursos da categoria

Em `O que as empresas desta categoria oferecem`, os controles são `Cardápio — restaurante, bar, lanchonete`, `Delivery — aceita pedido pelo site` e `Acomodações — hotel, pousada, hospedagem`. Serviços, equipe e catálogo valem para todas as categorias. A disponibilidade também depende da ficha completa; cortesia do portal não exige plano pago. Veja "liberar cardápio, delivery ou acomodações para uma categoria".

## ao tirar um recurso

Se a categoria já tem empresas, o portal avisa quantas serão afetadas. O conteúdo não é apagado: deixa de aparecer no site e volta ao marcar o recurso de novo.

## desvios

uma categoria inativa não é publicada e também oculta suas empresas. A decisão registrada recomenda mover empresas antes de aposentar uma categoria com cadastros.

## quando pedir ajuda

peça ajuda se houver empresas vinculadas ou se a ação puder ocultar cadastros que devem continuar publicados. Não peça à IA para alterar categoria ou situação de empresas.

## fontes

- `portal-cidade/frontend/src/app/painel/guia/categorias/page.tsx:44-82,122-219,340`.

## lacunas

Sem validação no navegador. A confirmação de desativação só aparece ao desligar uma categoria ativa que tenha empresas.
