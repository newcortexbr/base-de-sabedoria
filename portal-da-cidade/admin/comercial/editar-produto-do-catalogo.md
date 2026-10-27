---
id: editar-produto-do-catalogo
titulo: "mudar o preço de um produto do catálogo"
publico:
  - admin
modulo: guia
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - editar
  - preco
  - produto
  - catalogo
  - guia
  - empresa
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - Z45xwGT8U38
  - X2BpMhoYKiA
---

## objetivo

Aqui você altera o preço de um produto já cadastrado na vitrine da empresa.

## pré-requisitos

- Ter acesso administrativo ao portal e à empresa.
- O recurso estar disponível em `Conteúdo da ficha` (depende da ficha completa e, para quartos, da categoria).

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas`. [guia=menu:/painel/guia/empresas]
2. Na linha da empresa, clique no lápis (`Editar`). [guia=guia-empresas.editar]
3. Em `Conteúdo da ficha`, clique em `Gerenciar` no cartão `Catálogo de produtos`. O formulário é salvo antes de abrir a tela. [guia=guia-empresas-editar.gerenciar-catalogo]
4. Escolha a seção do produto. [guia=guia-empresas-catalogo.secao]
5. No produto, clique no lápis (`Editar`). [guia=guia-empresas-catalogo.editar-produto]
6. Altere `Preço (R$)`. [guia=guia-empresas-catalogo.preco] [t=99]
7. Clique em `Salvar produto`. [guia=guia-empresas-catalogo.salvar] [t=122]

## resultado

O preço fica salvo no produto escolhido.

## quando pedir ajuda

Peça ajuda se o salvamento falhar ou o recurso não aparecer.

## fontes

- `portal-cidade/frontend/src/components/painel/EmpresaEditor.tsx:948-984,1735-1744`.
- `portal-cidade/frontend/src/app/painel/guia/empresas/[id]/catalogo/page.tsx:262,318-319,672`.

## lacunas

Sem execução no navegador. Não foi medido o tempo de atualização da página pública.
