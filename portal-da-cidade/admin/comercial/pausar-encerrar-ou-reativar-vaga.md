---
id: admin-pausar-encerrar-ou-reativar-vaga
titulo: "pausar, encerrar ou reativar uma vaga de emprego pelo painel"
publico:
  - admin
modulo: vagas
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - pausar
  - reativar
  - vaga
  - status
  - no ar
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
---

## objetivo

tirar uma vaga do ar por um tempo, encerrá-la ou colocá-la de volta, sem excluir.

## passos

1. No menu, clique em `Vagas de Emprego`. [guia=menu:/painel/vagas]
2. Para encerrar ou reativar, clique no botão da coluna `Status` da vaga. [guia=vagas.alterar-status]
3. Para pausar, clique em `Editar`, troque `Status` para `Pausada` e clique em `Salvar alterações`. [guia=vagas.editar]

## explicação

- botão da coluna `Status`: vaga `ativa` passa a `encerrada` (aviso `Vaga encerrada`); qualquer outro estado passa a `ativa` (`Vaga publicada`). Vaga `pendente` ou `reprovada` pede confirmação em `Publicar`, porque isso aprova a vaga.
- `Pausada` e `Encerrada` tiram a vaga do site sem apagar; para voltar, use `Ativa`.
- `Expira em` encerra a vaga sozinha na data.
- apagar de vez: veja "excluir uma vaga de emprego".

## fontes

- `portal-cidade/frontend/src/app/painel/vagas/page.tsx:127-143`
- `portal-cidade/frontend/src/app/painel/vagas/VagaForm.tsx:548-560`
