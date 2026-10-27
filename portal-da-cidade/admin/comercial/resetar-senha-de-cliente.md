---
id: resetar-senha-de-cliente
titulo: "trocar a senha de um cliente"
publico:
  - admin
modulo: clientes
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - senha
  - editar
  - cliente
  - conta
  - recuperar
  - acesso
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - -FASO6flcCw
---

## objetivo

aqui você escolhe uma senha nova para um cliente que já tem login próprio.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.
- O cadastro precisa estar vinculado a um usuário de acesso.

## passos

1. Na parte `Comercial` do menu da esquerda, clique em `Meus Clientes`. [t=10] [guia=menu:/painel/clientes]
2. Escreva o nome, o documento ou o telefone em `Buscar por nome, documento ou telefone…`. [t=44] [guia=clientes.busca]
3. Pressione Enter no campo de busca. [guia=clientes.busca]
4. Na coluna `Ações`, clique na chave com a descrição `Resetar senha`. [t=61] [guia=clientes.resetar-senha]
5. Na janela `Resetar senha —` seguida do nome do cliente, preencha `Nova senha` com pelo menos 6 caracteres. [guia=clientes.nova-senha]
6. Clique em `Redefinir`. [guia=clientes.redefinir-senha]

## resultado

aparece `Senha redefinida` e a janela fecha. O servidor solicita um e-mail de aviso sem a senha. Combine com o cliente um canal para passar a senha escolhida.

## desvios

- Sem usuário vinculado: `Este cliente ainda não tem login próprio (autocadastro) para redefinir a senha.`
- Menos de 6 caracteres: `A senha deve ter pelo menos 6 caracteres.`
- A política de senha do servidor também é aplicada. Se houver recusa, o motivo aparece na janela.

## fontes

- `portal-cidade/frontend/src/app/painel/clientes/page.tsx:247` — janela e envio.
- `portal-cidade/backend/comercial/views_admin.py:388` — vínculo de usuário, política e aviso por e-mail.

## lacunas

Sem validação no navegador ou de entrega do e-mail. Não se verificou quando uma sessão já aberta perde o acesso.
