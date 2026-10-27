---
id: cadastrar-causa-doacao
titulo: "cadastrar uma causa de doação"
publico:
  - admin
modulo: doacoes
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - criar
  - editar
  - excluir
  - causa
  - doacao
  - instituicao
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - grm3bUrPBxM
---

## objetivo

Crie a causa que organiza as instituições e aparece como filtro de Doações.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Conteúdo` do menu, em `Doações`, clique em `Causas`. [t=104] [guia=menu:/painel/doacoes/causas]
2. Clique em `Nova causa`.  [t=121] [guia=doacoes-causas.nova]
3. Preencha `Nome da causa *`.  [t=124] [guia=doacoes-causas.nome]
4. Clique em `Criar causa`.  [t=124] [guia=doacoes-causas.salvar]

## resultado

A causa fica disponível para o cadastro de instituições.

## editar uma causa

1. Na parte `Conteúdo` do menu, em `Doações`, clique em `Causas`. [t=104] [guia=menu:/painel/doacoes/causas]
2. Clique no lápis `Editar` da causa.  [t=118] [guia=doacoes-causas.editar]
3. Altere `Nome da causa *`. [guia=doacoes-causas.nome]
4. Clique em `Salvar`. [guia=doacoes-causas.salvar]

## excluir uma causa

1. Na parte `Conteúdo` do menu, em `Doações`, clique em `Causas`. [t=104] [guia=menu:/painel/doacoes/causas]
2. Clique na lixeira `Excluir` da causa.  [t=118] [guia=doacoes-causas.excluir]
3. Na confirmação, clique em `Excluir`. [guia=confirmacao.confirmar]

Se houver instituições usando a causa, confira o aviso da tela; não exclua instituições para contornar um erro sem decidir isso antes.

## uso

As causas organizam as instituições e viram os filtros da página pública de Doações. No topo da aba `Causas`, quadros mostram o total de causas, quantas estão em uso e quantas instituições existem; cada cartão mostra a causa e o número de instituições, com editar e excluir.

## fontes

- `frontend/src/app/painel/doacoes/causas/page.tsx:66`

- Catálogo: `portal-da-cidade/videos.json`; legendas: `videos/legendas/grm3bUrPBxM.srt`.

## lacunas

- Conferido por leitura do código no HEAD b2f62d3f. Sem execução do produto ou validação visual nesta auditoria.
