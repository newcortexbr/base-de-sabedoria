---
id: desfazer-importacao-de-empresas
titulo: "desfazer uma importação de empresas do Guia"
publico:
  - admin
modulo: guia
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - desfazer
  - importar
  - empresa
  - guia
  - excluir
  - lote
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - jl7GHmHVJcM
---

## objetivo

Aqui você apaga as empresas criadas por um lote de importação. Confira o lote e a quantidade antes de confirmar.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.
- O módulo Guia Comercial estar disponível.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas`. [guia=menu:/painel/guia/empresas]
2. Clique em `Importar do Google Maps`. [guia=guia-empresas.importar]
3. Em `Importações anteriores`, clique na linha do lote desejado. [guia=guia-empresas-importar.abrir-lote]
4. No resultado do lote, clique em `Desfazer importação`. [guia=guia-empresas-importar.desfazer] [t=440]
5. Na confirmação, clique em `Apagar`. Ela informa quantas empresas serão apagadas. [guia=confirmacao.confirmar]

## resultado

O resultado informa quantas empresas foram apagadas. Esta operação remove cadastros, não apenas os esconde.

## quando pedir ajuda

Peça ajuda se o controle não aparecer ou se a tela mostrar erro ao salvar.

## fontes

- `portal-cidade/frontend/src/app/painel/guia/empresas/importar/page.tsx:223-231,555-566,644`.

## lacunas

Sem exclusão real. Não foi auditada a limpeza de mídia nem a possibilidade de recuperar dados.
