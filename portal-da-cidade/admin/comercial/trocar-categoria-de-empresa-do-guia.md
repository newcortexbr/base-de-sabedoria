---
id: trocar-categoria-de-empresa-do-guia
titulo: "trocar a categoria e a subcategoria de uma empresa"
publico:
  - admin
modulo: guia
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - wukhVMFEHWg
---

## objetivo

Aqui você muda a classificação de uma empresa. A categoria influencia os recursos de cardápio, delivery e acomodações.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.
- O módulo Guia Comercial estar disponível.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas`. [guia=menu:/painel/guia/empresas]
2. Na linha da empresa, clique no lápis (`Editar`). [guia=guia-empresas.editar]
3. Escolha a `Categoria *`. [guia=empresa-editor:categoria] [t=120]
4. Escolha a `Subcategoria *` da nova categoria. [guia=empresa-editor:subcategoria] [t=120]
5. Clique em `Salvar Alterações`. [guia=empresa-editor.salvar]

## resultado

A ficha passa a usar a classificação salva. Se a categoria não tem subcategorias, a tela orienta cadastrar uma antes de salvar.

## quando pedir ajuda

Peça ajuda se o controle não aparecer ou se a tela mostrar erro ao salvar.

## fontes

- `portal-cidade/frontend/src/components/painel/EmpresaEditor.tsx:1062-1095`.
- `portal-cidade/frontend/src/components/painel/EmpresaEditor.tsx:949-951`.

## lacunas

Sem validação no navegador. O vídeo é uma referência da tela; só os passos demonstrados têm tempo marcado.
