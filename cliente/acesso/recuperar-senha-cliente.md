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

1. Na tela de login, escolha “Esqueci minha senha”.
2. Informe o e-mail do cadastro e solicite o código.
3. Consulte o e-mail e informe os seis dígitos recebidos. O código vale por 15 minutos; se não chegar, use “Reenviar código”.
4. Crie uma senha com pelo menos oito caracteres e repita-a.
5. Salve. A tela tenta entrar com a nova senha; se isso não ocorrer, volte ao login e entre com ela.

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
