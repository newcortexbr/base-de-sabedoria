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
revisado_em: 2026-10-24
validacao: docs-e-codigo
---

## objetivo

criar uma senha nova para a área de parceiro quando você esqueceu a atual. Você recebe um código de 6 números no e-mail.

## pré-requisitos

- Ter uma conta de parceiro neste portal.
- Ter acesso ao e-mail cadastrado.

## passos

1. Na tela de entrada do representante, clique em `Esqueci minha senha`, logo abaixo do botão `Entrar`. [guia=parceiro-login.esqueci-senha]
2. Escreva o e-mail do cadastro em `E-mail do cadastro`. [guia=parceiro-recuperar.email]
3. Clique em `Enviar código`. [guia=parceiro-recuperar.enviar-codigo]
4. Abra seu e-mail e copie o código de 6 números, que vale por 15 minutos. [guia=fora]
5. Digite os 6 números na tela `Confira seu e-mail`. Se não chegou, clique em `Reenviar código`. [guia=parceiro-recuperar.codigo]
6. Clique em `Continuar`. [guia=parceiro-recuperar.continuar]
7. Escreva a senha nova em `Nova senha` (mínimo de 8 caracteres). [guia=parceiro-recuperar.nova-senha]
8. Repita a senha em `Repita a nova senha`. [guia=parceiro-recuperar.repita-senha]
9. Clique em `Salvar nova senha`. [guia=parceiro-recuperar.salvar]
10. De volta à tela de entrada, que mostra `Senha trocada. Entre com a senha nova.`, escreva o e-mail e a senha nova e clique em `Entrar`. [guia=parceiro-login.entrar]

## resultado

a senha da área de parceiro é trocada e você volta a entrar nela.

## desvios

- `Digite os 6 dígitos do código.` e `As senhas não são iguais.` aparecem quando faltam números ou a repetição difere.
- `Trocar e-mail` corrige o endereço; `Voltar para o login` cancela.
- este fluxo não troca a senha da área do cliente.

## quando pedir ajuda

se o código não chegar ou continuar inválido, procure o suporte do portal. Não envie senha nem código.

## fontes

- `portal-cidade/frontend/src/app/parceiro/login/ParceiroLoginClient.tsx:102-165,229-296` — telas, botões e mensagens.
- `portal-cidade/frontend/src/lib/politica-de-senha.ts:1-12`.
- `portal-cidade/backend/comercial/recuperar_senha.py:4-15,40-62,134-157`.

## lacunas

- entrega do e-mail não verificada.
