---
id: acesso-parceiro-recuperar-senha
titulo: esqueci minha senha: recuperar a senha da área de parceiro
publico:
  - parceiro
permissoes:
  - parceiro-comercial
categoria: conta
aba: nao-se-aplica
tipo_problema: orientacao
modulo: acesso
status: rascunho-documental
revisado_em: 2026-10-15
validacao: docs-e-codigo
---

## objetivo

criar uma nova senha para a área de parceiro, quando você esqueceu a atual. Você recebe um código de 6 números no e-mail.

## pré-requisitos

- Ter uma conta de parceiro ativa neste portal.
- Ter acesso ao e-mail cadastrado.

## passos

1. Na página de entrada do representante (`/parceiro/login`), clique em `Esqueci minha senha`, logo abaixo do botão `Entrar`. [guia=fora]
2. Escreva o e-mail do cadastro. [guia=fora]
3. Clique em `Enviar código`. [guia=fora]
4. Abra seu e-mail e digite na tela o código de 6 números (vale por 15 minutos). Se não chegou, clique em `Reenviar código`. [guia=fora]
5. Clique em `Continuar`. [guia=fora]
6. Escreva a senha nova em `Nova senha`. [guia=fora]
7. Repita a senha nova em `Repita a nova senha`. [guia=fora]
8. Clique em `Salvar nova senha`. [guia=fora]
9. Volte à página de entrada e entre com a senha nova. [guia=fora]

## fontes


- `portal-cidade/frontend/src/app/parceiro/login/ParceiroLoginClient.tsx:87-117,136-165,207-251,254-295`
- `portal-cidade/backend/comercial/recuperar_senha.py:4-15,40-62,134-157`
- `portal-cidade/docs/DECISIONS.md:12092-12100`
