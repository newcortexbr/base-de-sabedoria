---
id: ac-o-que-a-area-do-cliente-nao-faz
titulo: "o que a Área do Cliente não faz"
publico:
  - cliente
modulo: geral
aba: nao-se-aplica
tipo_problema:
  - dá para fazer
  - não encontro a opção
  - comprar domínio
  - certificado
  - prova
  - cadastrar funcionário
  - botão de cancelar
  - reembolso automático
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo

evitar procurar uma opção que não existe e saber o caminho certo em cada caso.

## explicação

a Área do Cliente não:

- compra, paga, transfere ou registra domínio por você. Você compra o domínio no registrador da sua escolha; a área só orienta a ligar o domínio ao portal.
- faz reembolso, estorno ou cancelamento sozinha. Tudo isso é pedido por chamado e feito pela equipe (veja `ac-reembolso` e `ac-cancelar-um-negocio`).
- deixa você mudar nome, CPF/CNPJ ou e-mail. Só o telefone é editável por você.
- tem cadastro de sócios ou funcionários: é um login por conta.
- tem botão para apagar a conta: o pedido é por chamado (veja `ac-encerrar-conta`).
- tem prova, quiz, certificado ou aula obrigatória no treinamento. Você pode marcar aula como concluída e ver o progresso, mas nada é bloqueado em sequência.
- tem chat ao vivo com atendente humano. O atendimento humano é por chamado; o chat do balão é um assistente com IA que pode abrir o chamado para você.
- tem página com as cobranças de todos os negócios juntas, nem nota fiscal em tela.
- vende cidade que já tem dono: cada produto só tem um dono por cidade.

## fontes

- `docs/PRODUCT.md:88` — não compra domínio; `:37` — um usuário por conta; `:74` — sem prova, quiz, certificado ou bloqueio sequencial.
- `docs/DECISIONS.md:52` — DEC-26: cancelamento e reembolso pela equipe.
- `docs/DECISIONS.md:771` — DEC-567: não há "encerrar conta" para o cliente.
- `src/app/(cliente)/minha-conta/actions.ts:29` — nome, documento e e-mail não mudam pela tela.
- `src/app/(public)/indisponivel/page.tsx:63` — cidade com dono não é vendida.
- `CLAUDE.md` (regra NUNCA, RF-305 e DEC-561) — progresso e "marcar aula como concluída" existem; prova e certificado não.

## lacunas

`docs/PRODUCT.md` ainda diz "sem chat, sem lives, sem IA", mas o código atual já tem Lives e o chat com IA está em construção; as docs estão desatualizadas nesse ponto.
