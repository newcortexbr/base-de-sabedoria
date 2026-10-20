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
revisado_em: 2026-10-15
validacao: docs-e-codigo
---

## objetivo

acessar a área de parceiro ou recuperar a senha usada nessa área.

## pré-requisitos

- Ter uma conta de parceiro ativa neste portal.
- Ter acesso ao e-mail cadastrado.

## passos

1. Abra a página de entrada do representante, no endereço `/parceiro/login`. [guia=fora]
2. Escreva seu e-mail em `E-mail` e sua senha em `Senha`, e clique em `Entrar`. [guia=fora]
3. Se esqueceu a senha, clique em `Esqueci minha senha`, logo abaixo do botão `Entrar`. [guia=fora]
4. Escreva o e-mail do cadastro e clique em `Enviar código`. [guia=fora]
5. Abra seu e-mail, digite na tela o código de 6 números (vale por 15 minutos) e clique em `Continuar`. Se não chegou, clique em `Reenviar código`. [guia=fora]
6. Escreva a senha nova em `Nova senha`, repita em `Repita a nova senha` e clique em `Salvar nova senha`. [guia=fora]
7. Volte à página de entrada e entre com a senha nova. [guia=fora]

## resultado

com credenciais válidas e vínculo ativo, a área de parceiro é aberta. A recuperação da senha dessa área é separada da recuperação da área do cliente.

## desvios

- Se o sistema indicar muitas tentativas, aguarde alguns minutos antes de tentar novamente.
- Código incorreto ou expirado pode ser solicitado novamente.
- O formulário informa que pode reenviar o código; por segurança, a resposta não confirma se o e-mail tem cadastro.
- Se você entra apenas com outra conta ou serviço e nunca criou uma senha no portal, este fluxo não cria uma senha. Use a forma de entrada original ou peça ajuda ao suporte.

## quando pedir ajuda

se sua senha estiver correta e o acesso continuar recusado, peça ao suporte do portal para verificar se o vínculo de parceiro está ativo. Não envie senha nem código.

## fontes

- `portal-cidade/frontend/src/app/parceiro/login/ParceiroLoginClient.tsx:87-117,136-165,207-251,254-295`
- `portal-cidade/backend/comercial/recuperar_senha.py:4-15,40-62,134-157`
- `portal-cidade/docs/DECISIONS.md:12092-12100`

## lacunas

- Não foi documentado neste artigo como solicitar o primeiro cadastro de parceiro; o cadastro é tratado fora do escopo de recuperação e login.
- O e-mail e o fluxo real não foram validados em tela.
