---
id: ac-pedir-novo-convite
titulo: "pedir um novo link de ativação (convite expirou ou não chegou)"
publico:
  - cliente
modulo: acesso
aba: nao-se-aplica
tipo_problema:
  - reenviar convite
  - novo link de ativação
  - convite expirou
  - não recebi o e-mail de boas-vindas
  - link já usado
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo

receber um novo e-mail para criar a sua senha quando o primeiro link expirou, já foi usado ou se perdeu.

## pré-requisitos

- A conta ainda não foi ativada (você nunca criou a senha). Se já criou a senha e esqueceu, use `ac-esqueci-a-senha`.

## passos

1. Abra a página `Solicitar novo convite` (`/reenviar-convite`). Se você abriu um link de ativação vencido, chega nela clicando em `Solicitar novo convite`. [guia=fora]
2. No campo `E-mail`, escreva o e-mail cadastrado para você. [guia=fora]
3. Clique em `Solicitar novo convite`. [guia=fora]
4. Aparece "Verifique seu e-mail". Abra a sua caixa de entrada e use o link novo (veja `ac-ativar-conta-pelo-convite`). [guia=fora]

## resultado

um novo e-mail de boas-vindas é enviado. O link antigo deixa de funcionar.

## desvios

- A tela sempre diz "Se houver uma conta com esse e-mail, enviaremos as instruções." — mesmo quando o e-mail não está cadastrado ou a conta já está ativa. É de propósito, por segurança. Se a conta já está ativa, nenhum convite sai: use `Esqueci minha senha`.
- "Muitas tentativas. Tente novamente em instantes.": muitos pedidos seguidos para o mesmo e-mail. Espere alguns minutos.
- "Não foi possível enviar. Tente novamente.": falha de conexão. Tente de novo.

## quando pedir ajuda

peça ajuda se, depois de pedir o convite e conferir o spam, nenhum e-mail chegar em cerca de 15 minutos. Pode ser que o e-mail cadastrado esteja diferente do que você está digitando.

## fontes

- `src/app/(public)/reenviar-convite/page.tsx:33` — título "Solicitar novo convite".
- `src/app/(public)/reenviar-convite/ReenviarConviteForm.tsx:11` — mensagem genérica e de excesso de tentativas; `:53` — "Verifique seu e-mail"; `:94` — botão `Solicitar novo convite`.
- `src/app/(public)/ativar/AtivarForm.tsx:62` — link para esta página a partir do convite vencido.
- `src/domain/acesso/auth-cliente.ts:218` — convite só vale para conta ainda não ativada.
- `src/domain/acesso/types.ts:97` — limite de pedidos por e-mail (padrão 5 por minuto).

## lacunas

a página de login não tem link para esta tela; o cliente só a encontra pelo link do convite vencido ou se alguém passar o endereço. Os "15 minutos" são orientação de atendimento, não regra do código.
