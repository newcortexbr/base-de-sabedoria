---
id: ac-trocar-senha-logado
titulo: "trocar a senha estando dentro da Área do Cliente"
publico:
  - cliente
modulo: acesso
aba: Minha conta
tipo_problema:
  - trocar senha
  - alterar senha
  - mudar senha
  - código por e-mail
  - código de verificação
  - código inválido
  - senha atual não confere
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo

trocar a sua senha quando você já está dentro da Área do Cliente. A troca pede a senha atual e um código enviado para o seu e-mail.

## pré-requisitos

- Estar logado.
- Saber a senha atual. Se não sabe, saia e use `ac-esqueci-a-senha`.
- Ter acesso ao e-mail cadastrado (ele aparece mascarado no quadro, para você conferir).

## passos

1. No rodapé do menu da esquerda, clique no seu nome (embaixo dele está escrito `Minha conta`). Abre a página `Minha conta` (`/minha-conta`).
2. No quadro `Senha de acesso`, clique em `Alterar minha senha`. Abre a janela `Trocar senha de acesso`.
3. No campo `Senha atual`, escreva a senha que você usa hoje.
4. Clique em `Enviar código por e-mail`.
5. Abra o seu e-mail e copie o código recebido.
6. De volta à janela, escreva o código no campo `Código enviado por e-mail`.
7. No campo `Nova senha`, escreva a senha nova.
8. No campo `Repita a nova senha`, escreva a senha nova de novo.
9. Clique em `Salvar nova senha`.

## resultado

aparece "Senha alterada. Por segurança, sua sessão foi encerrada — você será levado ao login em instantes. Entre novamente com a nova senha." Em seguida você vai para a tela de login. Outros aparelhos onde a conta estava aberta também são desconectados.

## desvios

- "A senha atual não confere.": a senha atual digitada está errada.
- "Código inválido ou expirado. Peça um novo código.": o código está errado, já foi usado ou venceu. Ele vale por poucos minutos (o padrão é 10 minutos) e só uma vez.
- "Muitas tentativas. Este código foi cancelado — peça um novo.": o código foi digitado errado vezes demais (o padrão é 5). Peça outro.
- "Você pediu códigos demais na última hora. Tente de novo mais tarde.": o limite de pedidos de código foi atingido (o padrão é 3 por hora).
- "A confirmação de senha não confere.": os dois campos da senha nova estão diferentes.
- "A senha é muito curta. Escolha uma senha mais forte.": use mais caracteres (o padrão mínimo é 10).
- Não tem mais acesso ao e-mail? Na própria janela há o link `Fale com o suporte`.

## quando pedir ajuda

peça ajuda se o código não chega mesmo depois de conferir o spam, ou se você não tem mais acesso ao e-mail cadastrado.

## fontes

- `src/ui/shells/ClientShell.tsx:264` — atalho do rodapé com o nome e "Minha conta".
- `src/app/(cliente)/minha-conta/SenhaDeAcesso.tsx:22` — quadro "Senha de acesso", botão `Alterar minha senha`, janela "Trocar senha de acesso" e link "Fale com o suporte".
- `src/app/(cliente)/minha-conta/TrocaDeSenhaForm.tsx:56` — mensagem de sucesso; `:66` — aviso sobre o código; `:76`, `:87`, `:96`, `:113` — campos; `:128` — botões `Enviar código por e-mail` / `Salvar nova senha`.
- `src/app/(cliente)/minha-conta/actions.ts:106` — mensagens de erro do código e da senha atual; `:162` — campos vazios e confirmação.
- `src/domain/acesso/password-change-otp.ts:41` — validade (600 s), tentativas (5) e pedidos por hora (3), todos configuráveis.

## lacunas

tela não validada no navegador. Os números são os padrões do código; produção pode ter outros.
