---
id: ac-esqueci-a-senha
titulo: "esqueci a senha: criar uma nova pelo e-mail"
publico:
  - cliente
modulo: acesso
aba: nao-se-aplica
tipo_problema:
  - esqueci a senha
  - recuperar senha
  - redefinir senha
  - não lembro a senha
  - link de recuperação
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo

criar uma senha nova quando você não lembra a atual, recebendo um link por e-mail.

## pré-requisitos

- A conta já foi ativada alguma vez. Se você nunca criou a senha, use `ac-pedir-novo-convite`.
- Ter acesso ao e-mail cadastrado.

## passos

1. Na tela de login (`/login`), clique em `Esqueci minha senha`. Abre a página `/recuperar`. [guia=fora]
2. No campo `E-mail`, escreva o e-mail da sua conta. [guia=fora]
3. Clique em `Enviar link de recuperação`. [guia=fora]
4. Aparece "Verifique seu e-mail". Abra o e-mail com o assunto "Redefinição de senha da Área do Cliente" e clique no link. Abre a tela `Criar nova senha`. [guia=fora]
5. No campo `Nova senha`, escreva a senha nova (com o mínimo de caracteres indicado; o padrão é 10). [guia=fora]
6. No campo `Confirmar senha`, repita a senha. [guia=fora]
7. Clique em `Salvar nova senha`. [guia=fora]
8. Quando aparecer "Senha alterada com sucesso", clique em `Ir para o login` e entre com a senha nova. [guia=fora]

## resultado

a senha antiga deixa de funcionar e você entra com a nova. Por segurança, se a conta estava aberta em outro aparelho, ela é desconectada lá.

## desvios

- A tela sempre diz "Se houver uma conta com esse e-mail, enviaremos as instruções." — mesmo que o e-mail não exista. É proteção contra quem tenta descobrir contas.
- "Este link não é mais válido": o link venceu (o padrão é 2 horas), já foi usado ou foi substituído por um pedido mais novo. Clique em `Solicitar novo link` e use sempre o e-mail mais recente.
- "As senhas não coincidem.": os dois campos estão diferentes.
- "Muitas tentativas. Tente novamente em instantes.": muitos pedidos seguidos. Espere alguns minutos.
- Conta que nunca foi ativada não recebe link de recuperação. Peça um novo convite.

## quando pedir ajuda

peça ajuda se você não tem mais acesso ao e-mail cadastrado — só a equipe pode trocar o e-mail da conta — ou se o link não chega mesmo depois de conferir o spam.

## fontes

- `src/app/(public)/login/LoginForm.tsx:181` — link "Esqueci minha senha".
- `src/app/(public)/recuperar/page.tsx:46` — títulos "Esqueci minha senha" / "Criar nova senha".
- `src/app/(public)/recuperar/RecuperarForm.tsx:12` — mensagem genérica; `:69` — "Verifique seu e-mail"; `:110` — `Enviar link de recuperação`; `:134` — senhas diferentes; `:158` — link inválido e `Solicitar novo link`; `:175` — "Senha alterada com sucesso"; `:250` — `Salvar nova senha`.
- `src/ui/emails/templates.ts:103` — assunto do e-mail.
- `src/domain/acesso/types.ts:94` — validade do link (padrão 2 horas).
- `src/domain/acesso/auth-cliente.ts:218` — recuperação só para conta já ativada.
- `src/domain/acesso/types.ts:69` — trocar a senha encerra as outras sessões.

## lacunas

tela não validada no navegador. Prazos são os padrões do código e podem estar configurados de outro jeito em produção.
