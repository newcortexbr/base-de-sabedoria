---
id: acesso-entrar-area-cliente
titulo: entrar na área do cliente
publico:
  - cliente
  - parceiro
  - jornalista
  - visitante
categoria: conta
aba: nao-se-aplica
tipo_problema: orientacao
tags:
  - entrar
  - area do cliente
  - conta
  - cliente
  - senha
  - acesso negado
modulo: acesso
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
---

## objetivo

acessar os recursos da sua conta pela área do cliente.

## pré-requisitos

- Ter uma conta criada para este portal e saber o e-mail e a senha cadastrados.
- Jornalistas, colunistas e anunciantes usam esta mesma entrada; parceiros têm uma área de entrada própria.

## passos

1. No topo do site do portal, clique em `Minha conta` para abrir a tela `Entrar na sua conta`. [guia=site.minha-conta]
2. Escreva seu e-mail no campo `E-mail`. [guia=login.email]
3. Escreva sua senha no campo `Senha`. Para conferir o que digitou, clique no olho ao lado. [guia=login.senha]
4. Clique no botão `Entrar`. [guia=login.entrar]
5. Se o e-mail e a senha estiverem certos, abre a sua área, com o menu à esquerda. [guia=fora]

## resultado

você entra na área do cliente. O menu depende do perfil da conta (empresa, anunciante pessoa física, colunista ou jornalista); o perfil não é escolhido na tela de entrada.

## desvios

- `E-mail ou senha inválidos. Verifique suas credenciais.`: confira o e-mail e a senha. A tela dá a mesma frase para e-mail que não é de cliente (por exemplo, o de administrador do painel).
- `Muitas tentativas seguidas…`: espere alguns minutos; a senha continua valendo.
- `Sua sessão expirou. Entre de novo.`: entre outra vez.
- Esqueceu a senha: clique em `Esqueci minha senha` (veja "recuperar a senha da área do cliente").
- Se a conta for de jornalista, não use o login do painel: o acesso editorial é por esta entrada.

## quando pedir ajuda

se os dados estiverem corretos e a recusa continuar, peça ao suporte do portal para verificar a conta. Não envie sua senha.

## fontes

- `portal-cidade/frontend/src/app/minha-conta/login/page.tsx:60-66,206-232` — textos da tela e do olho.
- `portal-cidade/frontend/src/app/minha-conta/login/mensagem-de-falha.ts` — mensagens de erro.
- `portal-cidade/frontend/src/components/layout/AtalhoMinhaConta.tsx:34-54` — atalho `Minha conta` do topo.
- `portal-cidade/docs/DECISIONS.md:12092-12100,12300-12310` e `portal-cidade/docs/PRODUCT.md:22-27`.

## lacunas

- onde o atalho `Minha conta` aparece (todas as páginas ou só algumas) não foi verificado.
- não foi identificada tela de login de visitante/leitor comum.
- bloqueio de conta e vínculo inativo: a frase exata da recusa não foi verificada.
