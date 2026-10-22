---
id: ext-login-nao-funciona
titulo: "não consigo entrar no Extrator: e-mail ou senha inválidos, esqueci a senha, voltei para o login"
publico:
  - cliente
modulo: acesso
aba: Login
tipo_problema:
  - login
  - senha-invalida
  - esqueci-senha
  - muitas-tentativas
  - extrator-maps
status: rascunho-documental
revisado_em: 2026-10-21
validacao: codigo
videos: []
---

## objetivo
descobrir por que o login do Extrator falha e o que fazer.

## pré-requisitos
- conhecer o e-mail da sua conta da Área do Cliente.

## explicação
- `E-mail ou senha inválidos.` é uma mensagem única de propósito: ela aparece para e-mail inexistente, senha errada, conta bloqueada e também para conta vinculada à Área do Cliente que tenta entrar por senha. o sistema não diferencia.
- se a sua conta veio da Área do Cliente (compra do Portal da Cidade), ela não tem senha utilizável no Extrator. nesse caso o caminho certo é o botão `Entrar com a Área do Cliente`, não e-mail e senha.
- `Muitas tentativas. Tente novamente em N segundos.` (ou `... em alguns minutos.`): limite de tentativas por IP (30 em 15 minutos, bloqueio de 15 minutos). espere e tente de novo.
- `Não foi possível entrar. Tente novamente.` e `Não foi possível conectar. Tente novamente.` são erro genérico e de rede.
- `Esqueci minha senha`: só vale para conta criada diretamente pelo administrador do Extrator. a tela `/esqueci-senha` explica que não existe link automático: o botão `Avisar a NEW CORTEX` registra o pedido e a equipe gera uma senha temporária entregue pelo canal de sempre; no primeiro acesso o painel pede a troca. para conta vinculada à Área do Cliente esse fluxo não resolve: a senha é a da Área do Cliente (veja `ac-esqueci-a-senha`).
- quem entra pela Área do Cliente pode voltar para a tela de login sem nenhuma mensagem (o motivo fica registrado só para a equipe). causas prováveis: conta ainda sem vínculo no Extrator, conta bloqueada, ou muitas tentativas (limite de 20 por minuto por IP).

## passos
1. confira se você usa o botão `Entrar com a Área do Cliente` (e não e-mail e senha), com o mesmo e-mail da Área do Cliente.
2. se o pop-up foi bloqueado, libere pop-ups para o site ou deixe a página inteira redirecionar.
3. se apareceu `Muitas tentativas`, aguarde o tempo indicado.
4. se você tem conta antiga com senha própria do Extrator, use `Esqueci minha senha` e clique em `Avisar a NEW CORTEX`; aguarde a senha temporária.
5. se continuar voltando ao login, abra um chamado no `Suporte` da Área do Cliente (ou o botão `Suporte pelo WhatsApp`) informando o e-mail da conta.

## resultado
você entra, ou a equipe identifica o vínculo ou bloqueio da sua conta.

## se der errado
- caso seu e-mail já tinha uma conta antiga no Extrator, o sistema não cria duplicada e o vínculo fica pendente para a equipe resolver: precisa de suporte.
- conta bloqueada: veja `ext-licenca-suspensa-ou-conta-bloqueada`.
