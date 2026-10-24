---
id: acesso-recuperar-senha-cliente
titulo: "esqueci minha senha: recuperar a senha da área do cliente"
publico:
  - cliente
  - jornalista
permissoes:
  - cliente
  - jornalista
categoria: conta
aba: nao-se-aplica
tipo_problema: orientacao
modulo: acesso
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
---

## objetivo

criar uma senha nova para uma conta da área do cliente quando você não consegue entrar.

## pré-requisitos

- Este fluxo é só para quem não consegue entrar. Se você já está logado e quer trocar a senha, use "trocar a senha estando logado" (menu `Segurança`).
- Ter acesso ao e-mail cadastrado.
- O fluxo atende contas de cliente e de jornalista; administrador e parceiro não recuperam senha por aqui.

## passos

1. Na tela `Entrar na sua conta`, clique em `Esqueci minha senha`, abaixo do campo da senha. [guia=login.esqueci-senha]
2. Escreva o e-mail do cadastro em `E-mail do cadastro`. [guia=recuperar.email]
3. Clique em `Enviar código`. [guia=recuperar.enviar-codigo]
4. Abra seu e-mail e copie o código de 6 números, que vale por 15 minutos. [guia=fora]
5. Digite os 6 números nas caixinhas da tela `Confira seu e-mail`. Se não chegou, clique em `Reenviar código`. [guia=recuperar.codigo]
6. Clique em `Continuar`. [guia=recuperar.continuar]
7. Escreva a senha nova em `Nova senha` (mínimo de 8 caracteres). [guia=recuperar.nova-senha]
8. Repita a senha em `Repita a nova senha`. [guia=recuperar.repita-senha]
9. Clique em `Salvar e entrar`. [guia=recuperar.salvar]

## resultado

a senha é trocada e o portal já entra na sua conta. Se não entrar sozinho, a tela de entrada mostra `Senha trocada. Entre com a senha nova.`.

## desvios

- A tela diz "Se o e-mail tiver cadastro, o código chega em instantes": ela não revela quais e-mails têm conta.
- `Digite os 6 dígitos do código.`: faltou algum número.
- `As senhas não são iguais.`: a repetição está diferente da senha nova.
- código incorreto ou vencido: volte ao código ou clique em `Reenviar código`; `Trocar e-mail` corrige o endereço.
- `Muitas tentativas…`: aguarde alguns minutos.
- se você entra só por outra conta ou serviço e nunca criou senha no portal, este fluxo não cria uma; peça ajuda ao suporte.

## quando pedir ajuda

se não tiver mais acesso ao e-mail ou o código continuar inválido, procure o suporte do portal. Não envie senha nem código.

## fontes

- `portal-cidade/frontend/src/app/minha-conta/login/page.tsx:96-163,226-294` — telas, botões e mensagens.
- `portal-cidade/frontend/src/lib/politica-de-senha.ts:1-12` — mínimo de 8 caracteres.
- `portal-cidade/backend/comercial/recuperar_senha.py:1-15,40-62,134-200` — quem pode recuperar.

## lacunas

- a entrega do e-mail depende da fila de e-mails do portal; não verificada.
- as regras do servidor além do mínimo de 8 caracteres (senha comum, só números) não foram verificadas nesta tela.
- não cobre senha do administrador nem login do painel.
