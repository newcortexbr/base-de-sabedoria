---
id: pj-erros-de-login
titulo: "não consigo entrar no Dados PJ: mensagens da tela de login"
publico:
  - cliente
modulo: acesso
aba: Login
tipo_problema:
  - login-nao-funciona
  - erro-de-login
  - link-expirado
  - muitas-tentativas
  - popup-bloqueado
  - dados-pj
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
videos: []
produto: dados-pj
---

## objetivo
resolver as mensagens que aparecem na tela de login do Dados PJ.

## pré-requisitos
- conta na Área do Cliente.

## explicação
cada mensagem e o que fazer:
- `Seu link de acesso expirou. Clique em Entrar novamente.`: o login demorou demais. clique em `Entrar com a Área do Cliente` de novo.
- `Muitas tentativas agora. Aguarde alguns minutos e tente de novo.`: espere alguns minutos.
- `A Área do Cliente está instável no momento. Tente novamente em instantes.`: problema temporário; tente de novo.
- `Não foi possível liberar seu acesso. Fale com o suporte.` (com o link `Falar no WhatsApp`): a conta precisa de ajuste da equipe. fale com o suporte.
- `Esta é uma conta da equipe. Use o acesso administrativo.`: o e-mail é de funcionário, não de cliente.
- `Não foi possível entrar pela Área do Cliente. Tente novamente.`: falha genérica; tente de novo.

## passos
1. leia a mensagem em vermelho na tela `Acessar plataforma`.
2. siga a ação da lista acima.
3. se a janelinha não abrir, libere janelas (pop-ups) para o site do Dados PJ ou use o caminho pela Área do Cliente (`pj-entrar-pela-area-do-cliente`).
4. persistindo, abra um chamado em `Suporte` na Área do Cliente.

## resultado
você entra ou sabe a quem pedir ajuda.

## se der errado
- entrou e logo voltou ao login: a sessão foi encerrada (licença suspensa ou sessão expirada). veja `pj-licenca-suspensa-ou-sem-acesso`.
