---
id: bloquear-cliente
titulo: "bloquear ou liberar o acesso de um cliente"
publico:
  - admin
modulo: clientes
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - bloquear
  - desbloquear
  - cliente
  - conta
  - acesso
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - -FASO6flcCw
---

## objetivo

aqui você bloqueia ou libera o acesso comercial de um cliente sem apagar seu cadastro.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Comercial` do menu da esquerda, clique em `Meus Clientes`. [t=10] [guia=menu:/painel/clientes]
2. Escreva o nome, o documento ou o telefone em `Buscar por nome, documento ou telefone…`. [t=44] [guia=clientes.busca]
3. Pressione Enter no campo de busca para carregar os resultados. [guia=clientes.busca]
4. Na coluna `Ações` do cliente, clique no cadeado `Bloquear`. Se o cliente já estiver bloqueado, o botão é `Desbloquear`. [t=67] [guia=clientes.bloquear]
5. Na confirmação, clique em `Bloquear` (ou `Desbloquear`, conforme a ação escolhida). [guia=confirmacao.confirmar]

## resultado

aparece `Cliente bloqueado` ou `Cliente desbloqueado`. O cadastro permanece. A lista identifica quem está bloqueado com `Bloqueado`. O bloqueio impede o acesso às funções que exigem um cliente ativo neste portal.

## desvios

O bloqueio não exclui o cadastro. Para apagar, veja “excluir um cliente”.

Se a operação falhar, leia o motivo no aviso acima da lista.

## fontes

- `portal-cidade/frontend/src/app/painel/clientes/page.tsx:402` — confirmação e resultado.
- `portal-cidade/frontend/src/app/painel/clientes/page.tsx:713` — busca enviada por Enter.
- `portal-cidade/backend/comercial/permissions.py:18` — exigência de cliente ativo.

## lacunas

Validação documental no código fixado; sem teste no navegador. Não se verificou o alcance do bloqueio sobre sessões já abertas e outras áreas de acesso.
