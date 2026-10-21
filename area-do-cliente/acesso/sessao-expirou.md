---
id: ac-sessao-expirou
titulo: "o sistema me mandou de volta para o login (sessão expirou)"
publico:
  - cliente
modulo: acesso
aba: nao-se-aplica
tipo_problema:
  - sessão expirou
  - deslogou sozinho
  - caiu no login
  - pede login de novo
  - fui desconectado
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo

entender por que a Área do Cliente pediu login de novo e como voltar para onde você estava.

## explicação

por segurança, a entrada na Área do Cliente vale por um tempo limitado (o padrão é 12 horas). Depois disso, ou se algo abaixo acontecer, qualquer página leva você para a tela de login:

- o tempo da sessão acabou;
- a senha foi trocada (por você, em outro aparelho, ou por "esqueci a senha") — isso desconecta todos os aparelhos;
- você clicou em `Sair`;
- os cookies do navegador foram apagados ou você está numa janela anônima que foi fechada.

Ao entrar de novo, o sistema leva você direto para a página que você estava tentando abrir.

Se aparecer "Sua sessão expirou. Atualize a página e entre novamente." ao enviar um anexo, é o mesmo caso: atualize a página, entre e envie o arquivo de novo.

## passos

1. Na tela de login, escreva o `E-mail` e a `Senha`. [guia=fora]
2. Clique em `Entrar`. [guia=fora]

## resultado

você volta para a página em que estava.

## desvios

- Se a senha não funciona mais, alguém pode tê-la trocado. Use `Esqueci minha senha` e, se suspeitar de acesso de outra pessoa, abra um chamado.

## quando pedir ajuda

peça ajuda se a área desconecta você em poucos minutos, repetidamente, sem você trocar a senha.

## fontes

- `src/proxy.ts:101` — sem sessão válida, redireciona para `/login` guardando a página pedida.
- `src/domain/acesso/types.ts:88` — duração da sessão (padrão 12 horas, configurável).
- `src/domain/acesso/types.ts:69` — trocar a senha invalida as sessões abertas.
- `src/ui/ticket/AttachmentUploader.tsx:165` — mensagem de sessão expirada no anexo.
- `src/ui/shells/SignOutButton.tsx:52` — botão `Sair`.

## lacunas

o tempo real da sessão em produção depende de configuração.
