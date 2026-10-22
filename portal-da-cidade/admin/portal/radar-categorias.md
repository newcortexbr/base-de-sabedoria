---
id: radar-categorias
titulo: "mudar as categorias do Radar de Preços"
publico:
  - admin
modulo: radar
categoria: radar
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-22
validacao: docs-e-codigo
---

## objetivo

aqui você muda o nome, o ícone, a ordem ou liga e desliga as categorias do Radar.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## explicação

são só três categorias, e elas já vêm criadas: `Supermercados`, `Farmácias` e `Postos de combustível`. Não existe botão para criar nova nem para apagar. Em postos, os produtos são só `Gasolina`, `Etanol` e `Diesel`.

## passos

1. No menu da esquerda, clique em `Radar de Preços` e depois em `Categorias`. [guia=menu:/painel/radar/categorias]
2. Clique no lápis na linha da categoria. [guia=radar-categorias.editar]
3. Mude o nome, escolha outro ícone, ajuste a ordem (um número inteiro) ou desmarque `Ativa` para esconder a categoria. [guia=radar-categorias.salvar]
4. Salve. [guia=radar-categorias.salvar]

## resultado

a categoria muda no Radar do site. Categoria inativa não aparece para o morador consultar nem enviar preço.

## fontes

- `portal-cidade/frontend/src/app/painel/radar/categorias/page.tsx:45`
- `portal-cidade/backend/radar/categorias.py`
- `commit 927d6c4d`

## lacunas

não verificado visualmente. O rótulo exato do botão de salvar não foi transcrito.
