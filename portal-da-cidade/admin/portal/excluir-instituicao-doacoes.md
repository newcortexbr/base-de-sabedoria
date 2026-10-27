---
id: excluir-instituicao-doacoes
titulo: "excluir uma instituição de doações"
publico:
  - admin
modulo: doacoes
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - excluir
  - remover
  - instituicao
  - doacao
  - causa
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - grm3bUrPBxM
---

## objetivo

Exclua uma instituição para retirá-la da página de Doações.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Conteúdo` do menu, em `Doações`, clique em `Instituições`. [t=17] [guia=menu:/painel/doacoes]
2. Na linha da instituição, clique na lixeira `Excluir`.  [t=35] [guia=doacoes.excluir]
3. Na janela `Excluir instituição`, clique em `Excluir`. [guia=confirmacao.confirmar]

## resultado

A instituição é excluída. Esta ação apaga o cadastro; não é uma pausa de publicação.

## fontes

- `frontend/src/app/painel/doacoes/page.tsx:127`

- Catálogo: `portal-da-cidade/videos.json`; legendas: `videos/legendas/grm3bUrPBxM.srt`.

## lacunas

- Conferido por leitura do código no HEAD b2f62d3f. Sem execução do produto ou validação visual nesta auditoria.
