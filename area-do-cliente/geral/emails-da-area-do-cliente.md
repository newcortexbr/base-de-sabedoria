---
id: ac-emails-da-area-do-cliente
titulo: "quais e-mails a Área do Cliente me manda"
publico:
  - cliente
modulo: geral
aba: nao-se-aplica
tipo_problema:
  - emails
  - avisos
  - notificacoes
  - recebi-um-email
  - e-golpe
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
reconhecer os e-mails que a Área do Cliente envia e saber o que fazer com cada um.

## pré-requisitos
- nenhum.

## explicação
os e-mails da Área do Cliente, pelo assunto:
- "Bem-vindo! Crie sua senha da Área do Cliente New Córtex": convite para criar a senha (veja `ac-ativar-conta-pelo-convite`).
- "Seu acesso a <produto> está liberado": você comprou mais um produto ou cidade e já tinha conta.
- "Boa notícia: <cidade> está reservada para você": a cidade foi reservada na compra; o e-mail tem o link para pagar (veja `ac-negocio-reserva-na-compra`).
- "Redefinição de senha da Área do Cliente": link para criar uma senha nova (veja `ac-esqueci-a-senha`).
- "Seu código para alterar a senha": o código pedido na troca de senha dentro da conta (veja `ac-trocar-senha-logado`).
- "O e-mail de acesso da sua conta foi alterado": aviso de que a equipe trocou o e-mail da sua conta.
- "Cobrança vencida — <produto>", "Cobrança ainda em aberto — <produto>" e "Aviso antes da suspensão — <produto>": avisos de atraso (veja `ac-atraso-e-suspensao`).
- "Licença suspensa — <produto>" e "Licença reativada — <produto>": o negócio foi suspenso ou voltou a funcionar.
- "Resposta ao seu chamado <assunto>": a equipe respondeu um chamado (veja `ac-acompanhar-e-responder-chamado`).
- "Seu chamado <assunto> foi encerrado": a equipe fechou o chamado.

o boleto, o Pix e o recibo de pagamento vêm da página de pagamento do Asaas, empresa que processa as cobranças da New Córtex (veja `ac-cobranca-pelo-asaas`).

## passos
1. Se recebeu um e-mail e ficou em dúvida, não clique no link.
2. Entre na Área do Cliente digitando o endereço no navegador.
3. Confira a mesma informação lá dentro: cobranças em `Pagamentos`, chamados em `Suporte`, situação em `Meus negócios`.

## resultado
você sabe se o e-mail é verdadeiro e o que ele pede.

## desvios
- não recebeu o e-mail esperado: veja `ac-email-nao-chega`.
- recebeu "O e-mail de acesso da sua conta foi alterado" sem ter pedido: abra um chamado em `Suporte` na hora.
- a Área do Cliente nunca pede a sua senha por e-mail.

## quando pedir ajuda
se o e-mail pedir algo que você não encontra dentro da Área do Cliente, abra um chamado em `Suporte` antes de agir.

## fontes
- `src/ui/emails/templates.ts:79`, `:103`, `:111`, `:124`, `:133`, `:150`, `:160`, `:169`, `:210`, `:229`, `:245`, `:374`, `:389` — assuntos dos e-mails enviados ao cliente.

## lacunas
o endereço remetente dos e-mails está em configuração e não foi conferido. O modelo "Ticket ... resolvido" existe, mas nada o envia hoje.
