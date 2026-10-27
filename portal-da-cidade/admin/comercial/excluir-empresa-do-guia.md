---
id: excluir-empresa-do-guia
titulo: "excluir uma empresa do Guia"
publico:
  - admin
modulo: guia
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - excluir
  - empresa
  - guia
  - remover
  - situacao
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - wukhVMFEHWg
---

## objetivo

Aqui você apaga uma empresa. Para apenas tirar do ar, use o artigo de mudar a situação.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.
- O módulo Guia Comercial estar disponível.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas`. [guia=menu:/painel/guia/empresas]
2. Na linha da empresa, clique na lixeira (`Excluir`). [guia=guia-empresas.excluir]
3. Na pergunta `Excluir a empresa "…"?`, confira o nome e clique em `Excluir`. [guia=confirmacao.confirmar]

## resultado

Se a operação for aceita, o cadastro é excluído e a lista é recarregada.

## quando pedir ajuda

Peça ajuda se o controle não aparecer ou se a tela mostrar erro ao salvar.

## fontes

- `portal-cidade/frontend/src/app/painel/guia/empresas/page.tsx:95-110,222`.

## lacunas

Sem exclusão real. Não foi auditada a remoção de registros relacionados nem o tempo até os arquivos de mídia serem limpos.
