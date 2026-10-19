---
id: acesso-trocar-senha-cliente
titulo: trocar a senha estando logado na área do cliente
publico:
  - cliente
  - jornalista
permissoes:
  - cliente
  - jornalista
categoria: conta
aba: nao-se-aplica
tipo_problema:
  - trocar a senha
  - alterar a senha
  - troco minha senha
modulo: acesso
status: rascunho-documental
revisado_em: 2026-10-17
validacao: docs-e-codigo
---

## objetivo

trocar a senha de uma conta que já está conectada na área do cliente.

## pré-requisitos

- Estar logado na área do cliente do portal correto.
- Saber a senha atual.

## passos

1. No menu da esquerda da sua área, na parte `Minha conta`, clique em `Segurança` (`/minha-conta/seguranca`).
2. No quadro `Senha`, escreva a senha que você usa hoje em `Senha atual`.
3. Escreva a senha nova em `Nova senha` e repita em `Confirmar nova senha`. Para ver o que digitou, clique em `Mostrar senhas`.
4. Clique em `Salvar nova senha`. Depois disso, você precisa entrar de novo com a senha nova, e os outros aparelhos em que você entrou saem da conta.

## resultado

cliente: a senha é alterada e você continua conectado neste aparelho. Os outros aparelhos em que você entrou são desconectados.

jornalista: a sessão é encerrada. A tela mostra “Senha trocada” e o botão “Entrar de novo”; entre com a senha nova.

## desvios

- Senha atual errada: o erro aparece no campo “Senha atual”.
- Confirmação diferente: a tela mostra “As senhas não conferem.” e nada é salvo.
- A nova senha precisa atender à regra mostrada abaixo do campo “Nova senha”; o servidor pode recusar a senha se ela for considerada fraca.
- Aviso de muitas tentativas: aguarde alguns minutos e tente de novo.
- Administrador do painel não troca a senha aqui: use “Alterar Senha” dentro do painel.

## quando pedir ajuda

se não souber a senha atual, esta tela não resolve. Use “Esqueci minha senha” na tela de entrada (`cliente/acesso/recuperar-senha-cliente.md`). Não envie senha nem código ao suporte.

## fontes

- `portal-cidade/frontend/src/app/minha-conta/seguranca/page.tsx:30-75,94-135`
- `portal-cidade/frontend/src/app/minha-conta/perfil-da-area.ts:46,56,67`
- `portal-cidade/frontend/src/lib/painel-menu.ts:121`

## lacunas

- Tela não validada no navegador nesta tarefa; passos vêm do código.
- O e-mail de aviso citado pela tela depende da fila de e-mails do portal; entrega não verificada.
