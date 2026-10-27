---
id: excluir-cliente
titulo: "excluir um cliente"
publico:
  - admin
modulo: clientes
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - excluir
  - cliente
  - cadastro
  - desfazer
  - conta
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - -FASO6flcCw
---

## objetivo

aqui você exclui um cadastro de cliente. A confirmação avisa que a ação não pode ser desfeita.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Comercial` do menu da esquerda, clique em `Meus Clientes`. [t=10] [guia=menu:/painel/clientes]
2. Escreva o nome, o documento ou o telefone em `Buscar por nome, documento ou telefone…`. [t=44] [guia=clientes.busca]
3. Pressione Enter no campo de busca. [guia=clientes.busca]
4. Na coluna `Ações` do cliente, clique na lixeira com a descrição `Excluir`. [t=69] [guia=clientes.excluir]
5. Na confirmação, clique em `Excluir`. [guia=confirmacao.confirmar]

## resultado

aparece `Cliente excluído` e o cliente sai da lista.

## desvios

Se houver histórico protegido de contratações e faturas, a exclusão é recusada mesmo depois de cancelar. A mensagem é: `Não é possível excluir: este cliente tem histórico de contratações e faturas, que fica guardado como registro do dinheiro — mesmo depois de cancelado.` Use o bloqueio se só precisar suspender o acesso.

Se a operação falhar, leia o motivo no aviso acima da lista.

## fontes

- `portal-cidade/frontend/src/app/painel/clientes/page.tsx:418` — confirmação e resultado.
- `portal-cidade/frontend/src/app/painel/clientes/page.tsx:713` — busca enviada por Enter.
- `portal-cidade/backend/comercial/views_admin.py:431` — proteção do histórico.

## lacunas

Validação documental no código fixado; sem teste no navegador.
