---
id: ac-cancelar-um-negocio
titulo: "cancelar um negócio (uma cidade) ou parar as cobranças"
publico:
  - cliente
modulo: financeiro
aba: Pagamentos
tipo_problema:
  - cancelar
  - cancelamento
  - parar de pagar
  - cancelar assinatura
  - cancelar mensalidade
  - desistir
  - não quero mais
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo

saber como pedir o cancelamento de um negócio e o que acontece depois.

## explicação

- Não existe botão de cancelar na Área do Cliente. Só a equipe da New Córtex cancela um negócio.
- Ao cancelar, as duas cobranças futuras daquele negócio (reserva territorial e mensalidade) são canceladas no Asaas. Cancelar não devolve dinheiro já pago; reembolso é outro pedido (veja `ac-reembolso`).
- O negócio passa a aparecer como "Cancelada" e a cidade deixa de ser sua.
- Atraso no pagamento nunca cancela sozinho: ele só suspende (veja `ac-atraso-e-suspensao`).
- Para cancelar tudo e apagar a conta, veja `ac-encerrar-conta`.

## passos

1. No menu, clique em `Suporte` e depois em `Abrir novo chamado`.
2. Em `Negócio vinculado`, escolha o negócio que quer cancelar.
3. Em `Assunto`, escolha `Pagamentos`.
4. Em `Título`, escreva "Cancelar negócio". Em `Mensagem`, confirme o pedido e o motivo, se quiser.
5. Clique em `Enviar chamado`.

## resultado

a equipe responde pelo chamado.

## quando pedir ajuda

sempre: o cancelamento é feito pela equipe.

## fontes

- `docs/DECISIONS.md:52` — DEC-26: cancelamento de licença é exclusivo da equipe (ADMIN).
- `docs/DECISIONS.md:307` — DEC-114: cancelar a licença cancela as duas assinaturas no provedor, sem estorno.
- `docs/DECISIONS.md:412` — DEC-214: nenhum caminho automático cancela.
- `src/app/(cliente)/negocios/[licenseId]/labels.ts:17` — rótulo "Cancelada".

## lacunas

não há regra escrita de multa, fidelidade, aviso prévio ou o que acontece com o portal já publicado depois do cancelamento. O chat não deve prometer nada disso.
