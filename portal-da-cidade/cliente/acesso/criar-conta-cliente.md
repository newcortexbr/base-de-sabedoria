---
id: cliente-criar-conta-area-do-cliente
titulo: "criar minha conta na área do cliente (sem ainda ter conta)"
publico:
  - cliente
  - visitante
modulo: acesso
categoria: conta
aba: nao-se-aplica
tipo_problema: orientacao
status: rascunho-documental
revisado_em: 2026-10-22
validacao: docs-e-codigo
---

## objetivo

criar uma conta nova para anunciar ou cadastrar sua empresa. Quem já tem conta não precisa disto: veja "entrar na área do cliente".

## pré-requisitos

- Ter acesso ao e-mail que vai usar, pois o portal envia um código para confirmar.

## explicação

- a tela de entrada (`Entrar na sua conta`) só serve para quem já tem conta. Ela não cria conta.
- a conta nasce no formulário de cadastro da página `Anuncie Aqui` do portal, por isso criar conta e entrar são dois passos separados.

## passos

1. No site do portal, clique em `Anuncie Aqui`. [guia=fora]
2. Escolha o que quer anunciar (por exemplo, sua empresa no Guia) e vá ao formulário de cadastro. [guia=fora]
3. Preencha nome, `E-mail`, `WhatsApp`, `Senha` e os dados da empresa que forem pedidos. [guia=conta.formulario]
4. Clique no botão de criar conta. [guia=conta.criar]
5. Abra seu e-mail, copie o código de 6 números e digite em `Confirme seu e-mail`. Se não chegou, clique em `Reenviar código`. [guia=conta.codigo]
6. Quando aparecer `Conta criada!`, clique em `Entrar na minha conta` e entre com o e-mail e a senha que acabou de criar. [guia=conta.entrar]

## resultado

a conta existe e você entra na área do cliente.

## desvios

- e-mail já usado neste portal: use "entrar" ou "recuperar a senha" em vez de criar outra conta.
- a conta vale só para este portal; em outro portal da rede é preciso criar outra.

## quando pedir ajuda

se o código não chegar, peça ajuda ao suporte do portal e informe o e-mail usado. Não envie senha nem código.

## fontes

- `portal-cidade/frontend/src/app/anuncie/page.tsx:55`
- `portal-cidade/frontend/src/components/lp/FormularioLP.tsx:297`
- `portal-cidade/frontend/src/app/minha-conta/login/page.tsx:209`

## lacunas

não verificado visualmente; os textos dos botões podem mudar.
