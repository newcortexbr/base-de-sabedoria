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
revisado_em: 2026-10-24
validacao: docs-e-codigo
---

## objetivo

criar uma conta nova para cadastrar sua empresa no portal. Quem já tem conta não precisa disto: veja "entrar na área do cliente".

## pré-requisitos

- Ter acesso ao e-mail que vai usar, pois o portal envia um código de 6 números para confirmar.

## explicação

- a tela de entrada (`Entrar na sua conta`) só serve para quem já tem conta. Ela não cria conta.
- a conta nasce no formulário `Cadastre sua empresa`, na página aberta pelo botão `Quero anunciar` da página inicial.
- a senha precisa ter pelo menos 8 caracteres.

## passos

1. Na página inicial do portal, clique em `Quero anunciar`. [guia=home.quero-anunciar]
2. No formulário `Cadastre sua empresa`, escreva seu nome e sobrenome em `Nome completo`. [guia=conta.formulario]
3. Escreva o nome do negócio em `Nome da empresa`. [guia=conta.formulario]
4. Escreva o número com DDD em `WhatsApp`. [guia=conta.formulario]
5. Escreva o `E-mail`. [guia=conta.formulario]
6. Crie a `Senha`, com pelo menos 8 caracteres. [guia=conta.formulario]
7. Clique em `Criar conta`. [guia=conta.criar]
8. Abra seu e-mail e digite os 6 números na tela `Confirme seu e-mail`. Se não chegou, clique em `Reenviar código`. [guia=conta.codigo]
9. Clique em `Confirmar e continuar`. [guia=conta.confirmar]
10. O portal abre a sua área sozinho. Se aparecer `Conta criada!`, clique em `Entrar na minha conta` e entre com o e-mail e a senha que acabou de criar. [guia=conta.entrar]

## resultado

a conta existe e você está na área do cliente.

## desvios

- e-mail já usado neste portal: a tela sugere entrar com e-mail e senha. Use "entrar na área do cliente" ou "recuperar a senha" em vez de criar outra conta.
- `Trocar e-mail` na tela do código volta ao formulário para corrigir o endereço.
- a conta vale só para este portal; em outro portal da rede é preciso criar outra.
- para ser colunista o cadastro é outro: veja "virar colunista".

## quando pedir ajuda

se o código não chegar, peça ajuda ao suporte do portal e informe o e-mail usado. Não envie senha nem código.

## fontes

- `portal-cidade/frontend/src/components/shared/ChamadaAnuncie.tsx:105-120` — botão `Quero anunciar` (leva a `/anuncie`).
- `portal-cidade/frontend/src/app/anuncie/page.tsx:86-99` — título, `Nome da empresa`, `Criar conta`.
- `portal-cidade/frontend/src/components/lp/FormularioLP.tsx:405-441,515-581` — campos, `Confirme seu e-mail`, `Confirmar e continuar`, `Conta criada!`.

## lacunas

- não existe, no topo do site, um link chamado `Anuncie Aqui` (esse é só o título da página); o caminho verificado é o botão `Quero anunciar`.
- o redirecionamento automático para a área após o código é deduzido do texto "Não conseguimos entrar automaticamente agora"; não testado em tela.
- o campo de CPF/CNPJ só aparece em cadastro com plano pago, não neste.
