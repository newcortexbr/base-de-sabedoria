---
id: acesso-parceiro-entrar-recuperar
titulo: entrar ou recuperar senha da área de parceiro
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

entrar na área de parceiro (representante). Se esqueceu a senha, veja o artigo "esqueci minha senha: recuperar a senha da área de parceiro".

## pré-requisitos

- Ter uma conta de parceiro neste portal.
- Ter acesso ao e-mail cadastrado.

## passos

1. Abra a página de entrada da área do representante do seu portal (tela `Entrar na sua conta`, com o selo `Área do representante`). [guia=fora]
2. Escreva seu e-mail em `E-mail`. [guia=parceiro-login.email]
3. Escreva sua senha em `Senha`. [guia=parceiro-login.senha]
4. Clique em `Entrar`. [guia=parceiro-login.entrar]

## resultado

com e-mail e senha corretos, a área do parceiro abre. A recuperação da senha é separada da área do cliente.

## desvios

- `Muitas tentativas seguidas. Espere alguns minutos e tente de novo.`: aguarde antes de tentar de novo.
- senha ou e-mail errados: a tela mostra a recusa do servidor ou `E-mail ou senha inválidos.`.
- esqueceu a senha: clique em `Esqueci minha senha`, logo abaixo do botão `Entrar`.
- ainda não é representante: abaixo do botão há o link `Cadastre-se`.
- se você entra só por outra conta ou serviço e nunca criou senha no portal, este fluxo não cria uma senha; peça ajuda ao suporte.

## quando pedir ajuda

se a senha estiver correta e o acesso continuar recusado, peça ao suporte do portal para verificar a conta de parceiro. Não envie senha nem código.

## fontes

- `portal-cidade/frontend/src/app/parceiro/login/ParceiroLoginClient.tsx:28-39,207-236` — textos, erros, `Cadastre-se`.
- `portal-cidade/docs/DECISIONS.md:12092-12100`.

## lacunas

- o endereço/atalho que leva à tela de entrada do representante não foi localizado no site público.
- fluxo real e e-mail não validados em tela.
