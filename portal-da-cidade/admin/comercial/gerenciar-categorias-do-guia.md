---
id: gerenciar-categorias-do-guia
titulo: revisar categorias do Guia
publico:
  - admin
modulo: guia
categoria: admin
aba: nao-se-aplica
tipo_problema: configuracao
tags:
  - categoria
  - subcategoria
  - criar
  - editar
  - guia
  - empresa
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - 09n3Eiwn418
---

## objetivo

aqui você vê, cria e muda as categorias do Guia. Categoria desligada esconde do site as empresas que estão nela.

## pré-requisitos

- Ter acesso administrativo ao portal.
- O Guia estar ativo.

## veja também
- para mudar uma categoria que já existe, veja o artigo "editar uma categoria do Guia".

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Gerenciar Categorias`. [guia=menu:/painel/guia/categorias] [t=22]
2. Para criar uma nova, clique em `+ Nova Categoria`. Ela abre uma janela com o formulário. [guia=guia-categorias.nova] [t=35]
3. Preencha `Nome *`. [guia=guia-categorias.nome] [t=37]
4. Escolha o `Ícone`. [guia=guia-categorias.icone] [t=37]
5. Marque `Ativa` para a categoria aparecer no site. [guia=guia-categorias.ativa] [t=42]
6. Ajuste `Aparece no formulário de Orçamento` para decidir se a categoria participa dos pedidos de orçamento. [guia=guia-categorias.aceita-orcamento] [t=47]
7. Escolha a `Cor`. [guia=guia-categorias.cor] [t=57]
8. Ajuste `Cardápio — restaurante, bar, lanchonete`, se necessário. [guia=guia-categorias.cardapio] [t=71]
9. Ajuste `Delivery — aceita pedido pelo site`, se necessário. [guia=guia-categorias.delivery] [t=73]
10. Ajuste `Acomodações — hotel, pousada, hospedagem`, se necessário. [guia=guia-categorias.acomodacoes] [t=78]
11. Clique em `Salvar` e confira a mensagem que aparece. [guia=guia-categorias.salvar]

## explicação

A tabela mostra os recursos, o total de empresas, a participação no orçamento e a situação. Serviços, equipe e catálogo vêm marcados e travados para todas as categorias. A disponibilidade nas empresas depende também da ficha completa; a cortesia do portal não exige plano pago.

## subcategorias

As subcategorias ficam em `Gerenciar Subcategorias`, no mesmo menu. Este artigo cobre apenas categorias.

## resultado

A configuração escolhida fica registrada para a categoria.

## desvios

uma categoria inativa não é publicada e também oculta suas empresas. A decisão registrada recomenda mover empresas antes de aposentar uma categoria com cadastros.

## quando pedir ajuda

peça ajuda se houver empresas vinculadas ou se a ação puder ocultar cadastros que devem continuar publicados. Não peça à IA para alterar categoria ou situação de empresas.

## fontes

- `portal-cidade/frontend/src/app/painel/guia/categorias/page.tsx:122-219,262-341`.
- `portal-cidade/frontend/src/components/painel/EmpresaEditor.tsx:943-980`.

## lacunas

Sem validação no navegador. O rótulo atual `Acomodações — hotel, pousada, hospedagem` substitui `Quartos` usado no vídeo.
