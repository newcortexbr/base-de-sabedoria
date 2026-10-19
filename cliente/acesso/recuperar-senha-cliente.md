---
id: acesso-recuperar-senha-cliente
titulo: esqueci minha senha: recuperar a senha da área do cliente
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
revisado_em: 2026-10-15
validacao: docs-e-codigo
---

## objetivo

criar uma nova senha para uma conta elegível da área do cliente.

## pré-requisitos

- Este fluxo é só para quem não consegue entrar. Se você já está logado e quer trocar a senha, use o artigo `cliente/acesso/trocar-senha-cliente.md` (menu “Segurança”).
- Acessar `/minha-conta/login` no portal correto.
- Ter acesso ao e-mail cadastrado.
- O fluxo atende contas de cliente e jornalistas ativos; contas de administrador e parceiro não recuperam senha por esta porta.

## passos

1. Na página de entrada (`/minha-conta/login`), clique em `Esqueci minha senha`, logo abaixo do campo da senha.
2. Escreva o e-mail do cadastro em `E-mail do cadastro` e clique em `Enviar código`.
3. Abra seu e-mail. Você recebe um código de 6 números, que vale por 15 minutos.
4. Digite os 6 números na tela e clique em `Continuar`. Se o e-mail não chegou, clique em `Reenviar código`.
5. Escreva a senha nova em `Nova senha` (pelo menos 8 letras ou números) e repita em `Repita a nova senha`.
6. Clique em `Salvar e entrar`. Se a sua área não abrir sozinha, volte à página de entrada e entre com a senha nova.

## resultado

sua senha é alterada. Depois, entre novamente com a senha nova se o portal não abrir sua conta automaticamente.

## desvios

- A mensagem confirma que o código foi enviado apenas se o e-mail tiver cadastro elegível; isso evita revelar quais endereços têm conta.
- Se aparecer que o código está incorreto ou expirou, confira os dígitos ou peça outro código.
- Se receber aviso de muitas tentativas, aguarde alguns minutos antes de tentar novamente.
- Se você entra apenas com outra conta ou serviço e nunca criou uma senha no portal, este fluxo não cria uma senha. Use a forma de entrada original ou peça ajuda ao suporte.

## quando pedir ajuda

se não tiver mais acesso ao e-mail ou o código continuar inválido, procure o suporte do portal. Não envie senha nem código de recuperação.

## fontes

- `portal-cidade/frontend/src/app/minha-conta/login/page.tsx:96-112,130-163,226-248,252-294`
- `portal-cidade/backend/comercial/recuperar_senha.py:1-15,40-62,134-157,160-200`
- `portal-cidade/docs/DECISIONS.md:12138-12152`

## lacunas

- A entrega do e-mail depende do serviço de mensagens do portal; não foi verificada nesta tarefa.
- O fluxo descrito não cobre senha do administrador nem recuperação pelo login do painel.
