---
id: cliente-pausar-ou-excluir-vaga
titulo: pausar, reativar ou excluir uma vaga da empresa
publico:
  - cliente
modulo: vagas
categoria: vagas
aba: Vagas
tipo_problema:
  - vagas-proprias
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - 525qfVrQ4iY
---

## objetivo

tirar uma vaga do ar por um tempo (pausar), colocá-la de volta (reativar) ou apagá-la de vez (excluir).

## pré-requisitos

- ter vínculo de contratante e estar na área do cliente autenticada.

## passos

1. Na parte `O que eu publico` do menu da esquerda, clique em `Vagas de Emprego`. [t=6] [guia=menu:/minha-conta/vagas]
2. Na vaga, para pausar clique no ícone `Pausar` (vaga `Ativa`); para colocar de volta, clique no ícone `Reativar` (vaga `Pausada`). [t=138] [guia=minhas-vagas.pausar]
3. Para apagar, clique no ícone de lixeira `Excluir` da vaga. [t=138] [guia=minhas-vagas.excluir]
4. Confirme na janela do navegador `Excluir a vaga "…" permanentemente?`. [guia=fora]

## resultado

vaga pausada vira `Pausada` e sai do site; reativar volta para `Ativa`. Vaga excluída some da lista e não pode ser recuperada.

## desvios

- o ícone de pausar só aparece em vaga `Ativa` ou `Pausada`; o de excluir aparece em todas.
- se o plano não deixar reativar (limite de vagas no ar), a tela mostra a mensagem do servidor acima da lista.
- pausada, a página pública da vaga deixa de abrir (observado em 2026-10-15).

## fontes

- `frontend/src/app/minha-conta/vagas/page.tsx:165-200` — pausar, reativar e excluir; `:311-325` ícones.

## lacunas

tela não validada no navegador nesta tarefa para `Excluir`.
