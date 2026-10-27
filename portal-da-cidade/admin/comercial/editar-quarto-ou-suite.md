---
id: editar-quarto-ou-suite
titulo: "mudar o preço da diária de um quarto ou suíte"
publico:
  - admin
modulo: guia
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - editar
  - preco
  - diaria
  - quarto
  - guia
  - empresa
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - reZ3e1a4o-o
---

## objetivo

Aqui você altera a diária de um quarto já cadastrado.

## pré-requisitos

- Ter acesso administrativo ao portal e à empresa.
- O recurso estar disponível em `Conteúdo da ficha` (depende da ficha completa e, para quartos, da categoria).

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas`. [guia=menu:/painel/guia/empresas]
2. Na linha da empresa, clique no lápis (`Editar`). [guia=guia-empresas.editar]
3. Em `Conteúdo da ficha`, clique em `Gerenciar` no cartão `Quartos e suítes`. O formulário é salvo antes de abrir a tela. [guia=guia-empresas-editar.gerenciar-quartos]
4. No quarto, clique em `Editar`. [guia=guia-empresas-quartos.editar]
5. Altere `Preço por noite`. [guia=guia-empresas-quartos.preco] [t=83]
6. Se necessário, altere ou limpe `Preço promocional`. [guia=guia-empresas-quartos.preco-promocional] [t=85]
7. Clique em `Salvar quarto`. [guia=guia-empresas-quartos.salvar] [t=106]

## resultado

A diária fica salva no quarto escolhido.

## quando pedir ajuda

Peça ajuda se o salvamento falhar ou o recurso não aparecer.

## fontes

- `portal-cidade/frontend/src/components/painel/EmpresaEditor.tsx:948-984,1735-1744`.
- `portal-cidade/frontend/src/app/painel/guia/empresas/[id]/quartos/page.tsx:188-211,506-508`.

## lacunas

Sem execução no navegador. Não foi medido o tempo de atualização da página pública.
