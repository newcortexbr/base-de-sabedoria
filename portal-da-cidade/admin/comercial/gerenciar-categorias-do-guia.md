---
id: gerenciar-categorias-do-guia
titulo: revisar categorias do Guia
publico:
  - admin
modulo: guia
categoria: admin
aba: nao-se-aplica
tipo_problema: configuracao
status: rascunho-documental
revisado_em: 2026-10-19
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

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Gerenciar Categorias`. [guia=menu:/painel/guia/categorias] [t=14]
2. Para criar uma nova, clique em `+ Nova Categoria`. Ela abre uma janela com o formulário. [guia=guia-categorias.nova] [t=35]
3. Escreva o nome da categoria. [guia=guia-categorias.nome] [t=37]
4. Escolha um ícone na lista (ela tem busca). [guia=guia-categorias.icone] [t=37]
5. Marque `Ativa` para a categoria aparecer no site. [guia=guia-categorias.ativa] [t=42]
6. Marque a opção de aparecer no formulário de orçamento só quando as empresas da categoria prestam serviço (por exemplo, pintor ou eletricista). [guia=guia-categorias.aceita-orcamento] [t=45]
7. Escolha uma cor. [guia=guia-categorias.cor] [t=57]
8. Em `O que as empresas desta categoria oferecem`, marque `Cardápio` (restaurante, bar, lanchonete), `Delivery` (pedido pelo site) ou `Quartos` (hotel, pousada). Serviços, equipe e catálogo de produtos já vêm marcados para todas. [guia=guia-categorias.oferece] [t=62]
9. Clique em `Salvar` e confira a mensagem que aparece. [guia=guia-categorias.salvar]

## resultado

A configuração escolhida fica registrada para a categoria.

## desvios

uma categoria inativa não é publicada e também oculta suas empresas. A decisão registrada recomenda mover empresas antes de aposentar uma categoria com cadastros.

## quando pedir ajuda

peça ajuda se houver empresas vinculadas ou se a ação puder ocultar cadastros que devem continuar publicados. Não peça à IA para alterar categoria ou situação de empresas.

## fontes

- `portal-cidade/docs/DECISIONS.md:101-109`
- `portal-cidade/frontend/src/app/painel/guia/empresas/page.tsx:67-73`

## lacunas

A tela de categorias foi localizada no código, mas seus controles atuais não foram revisados em detalhe; não descrevemos criação, exclusão ou campos específicos.
