---
id: ac-email-nao-chega
titulo: "o e-mail da Área do Cliente não chegou"
publico:
  - cliente
modulo: acesso
aba: nao-se-aplica
tipo_problema:
  - e-mail não chega
  - não recebi o e-mail
  - não recebi o link
  - não recebi o código
  - caixa de spam
  - lixo eletrônico
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo

saber o que fazer quando não chega o e-mail de boas-vindas, de recuperação de senha ou o código de troca de senha.

## explicação

a Área do Cliente manda estes e-mails para o endereço cadastrado na sua conta:

- boas-vindas para criar a senha ("Bem-vindo! Crie sua senha da Área do Cliente New Córtex");
- link para criar senha nova ("Redefinição de senha da Área do Cliente");
- código para trocar a senha estando logado;
- avisos de cobrança vencida, de suspensão e de reativação de um negócio;
- resposta da equipe a um chamado ("Resposta ao seu chamado ...").

As telas de convite e de "esqueci a senha" sempre dizem "Se houver uma conta com esse e-mail, enviaremos as instruções.", mesmo quando o e-mail digitado não existe. Então a mensagem na tela não garante que o e-mail saiu.

## passos

1. Espere alguns minutos e confira as pastas de spam, lixo eletrônico, "Promoções" e "Atualizações".
2. Confira se você digitou o mesmo e-mail que foi cadastrado na contratação (sem espaço, sem letra trocada).
3. Peça de novo pela mesma tela (`Solicitar novo convite`, `Enviar link de recuperação` ou `Enviar código por e-mail`). Use sempre o e-mail mais recente: cada pedido novo cancela o link ou código anterior.
4. Se pedir várias vezes seguidas e aparecer "Muitas tentativas", espere alguns minutos antes de tentar de novo.

## resultado

o e-mail chega na caixa de entrada ou no spam.

## desvios

- Conta ainda não ativada não recebe link de "esqueci a senha"; ela precisa de um novo convite.
- Conta já ativada não recebe convite; ela precisa de "esqueci a senha".
- Se o e-mail cadastrado está errado ou você perdeu o acesso a ele, só a equipe pode trocar.

## quando pedir ajuda

peça ajuda se, depois de conferir o spam e pedir de novo, nada chegar. Informe o e-mail que você está usando e o tipo de e-mail esperado.

## fontes

- `src/ui/emails/templates.ts:79` — boas-vindas; `:103` — recuperação; `:120`–`:175` — avisos de cobrança, suspensão e reativação; `:210` — resposta a chamado.
- `src/app/(public)/recuperar/RecuperarForm.tsx:12` e `src/app/(public)/reenviar-convite/ReenviarConviteForm.tsx:11` — mensagem genérica.
- `src/domain/acesso/auth-cliente.ts:218` — convite só para conta não ativada; recuperação só para conta ativada.
- `src/domain/acesso/types.ts:66` — link novo invalida o anterior.
- `src/domain/suporte/ticket-service.ts:74` — aviso de resposta de chamado sai sempre.

## lacunas

o endereço remetente vem de configuração (`EMAIL_FROM`) e não aparece no código; não dá para dizer ao cliente de qual endereço o e-mail sai.
