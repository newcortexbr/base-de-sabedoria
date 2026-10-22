---
id: ac-entrar-na-area-do-cliente
titulo: "entrar na Área do Cliente com e-mail e senha"
publico:
  - cliente
modulo: acesso
aba: nao-se-aplica
tipo_problema:
  - entrar
  - fazer login
  - logar
  - acessar minha conta
  - credenciais inválidas
  - onde entro
  - criar cadastro
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo

entrar na Área do Cliente New Córtex (a "Central de Negócios") com o e-mail e a senha da sua conta.

## pré-requisitos

- Ter uma conta já ativada. A conta é criada pela New Córtex depois da contratação; não existe cadastro aberto.
- Ter criado a sua senha pelo link do e-mail de boas-vindas (veja `ac-ativar-conta-pelo-convite`).

## passos

1. Abra a página de entrada da Área do Cliente (`/login`). O quadro se chama `Entrar na sua conta`. [guia=fora]
2. No campo `E-mail`, escreva o e-mail cadastrado para você. [guia=fora]
3. No campo `Senha`, escreva a sua senha. Para conferir o que digitou, clique no ícone de olho (`Mostrar senha`). [guia=fora]
4. Clique em `Entrar`. Enquanto confere, o botão mostra `Entrando…`. [guia=fora]

## resultado

você entra no `Início` (`/inicio`). Se você estava tentando abrir uma página específica quando o sistema pediu login, volta direto para essa página.

Se a sua conta estiver bloqueada, você entra, mas cai na tela de `Suporte` (`/suporte`) — veja `ac-conta-bloqueada`.

## desvios

- "Informe o seu e-mail." ou "Informe a sua senha.": um dos campos ficou vazio.
- "Credenciais inválidas.": e-mail ou senha não conferem. A mesma mensagem aparece quando a conta ainda não foi ativada (a senha ainda não foi criada) — por segurança o sistema não diz qual dos dois é. Confira o e-mail, tente de novo ou use `Esqueci minha senha`. Se você nunca criou a senha, peça um novo convite (`ac-pedir-novo-convite`).
- "Muitas tentativas. Tente novamente em instantes.": houve tentativas erradas demais em pouco tempo. Veja `ac-muitas-tentativas-de-login`.
- "Não foi possível entrar. Tente novamente.": falha de conexão ou do sistema. Tente de novo em alguns minutos.

## quando pedir ajuda

peça ajuda se você tem certeza do e-mail e da senha, já tentou `Esqueci minha senha` e continua sem entrar, ou se não sabe qual e-mail foi cadastrado. Sem conseguir entrar não dá para abrir chamado pela área; fale com quem atendeu você na contratação.

## fontes

- `src/app/(public)/login/page.tsx:42` — título "Entrar na sua conta" e texto "O acesso é criado pela New Córtex após a contratação. Não há cadastro aberto.".
- `src/app/(public)/login/LoginForm.tsx:57` — mensagens de campo vazio; `:123`, `:147` — campos "E-mail" e "Senha"; `:167` — "Mostrar senha"; `:181` — link "Esqueci minha senha"; `:186` — botão "Entrar"/"Entrando…"; `:107` — erro genérico.
- `src/app/(public)/api/auth/login/route.ts:19` — "Credenciais inválidas." e "Muitas tentativas. Tente novamente em instantes.".
- `src/domain/acesso/auth-cliente.ts:202` — conta bloqueada entra; conta não ativada não entra.
- `src/domain/acesso/rbac.ts:107` — destino depois do login (`/inicio` para conta ativa, `/suporte` para bloqueada, ou a página pedida).

## lacunas

tela não validada no navegador nesta tarefa. A página de login não tem link para "reenviar convite"; esse link só aparece quando um link de ativação expirado é aberto.
