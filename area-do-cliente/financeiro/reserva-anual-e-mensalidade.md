---
id: ac-reserva-anual-e-mensalidade
titulo: "por que tenho duas cobranças: reserva territorial (anual) e mensalidade"
publico:
  - cliente
modulo: financeiro
aba: Pagamentos
tipo_problema:
  - duas cobranças
  - cobrança duplicada
  - anual e mensal
  - reserva territorial
  - mensalidade
  - o que estou pagando
  - assinatura
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo

entender as duas cobranças de cada negócio e por que elas nunca vêm juntas.

## explicação

cada negócio (produto + cidade) tem duas obrigações, cobradas separadamente:

- `Reserva territorial` — cobrança anual. "Pagamento anual para manter a reserva da sua cidade." A primeira é a da contratação (no histórico aparece como "Reserva territorial · contratação"); depois vem a renovação a cada ano.
- `Mensalidade` — cobrança mensal. "Manutenção, atualizações, suporte e ferramentas adicionais." Ela só começa depois que o portal é instalado.

São duas assinaturas diferentes. Não é cobrança em dobro: são coisas diferentes, e a anual e a mensal nunca são juntadas numa mesma cobrança. Também não existe pagamento único para quitar tudo.

As duas precisam estar em dia. Atraso em qualquer uma delas, além do prazo, suspende o portal e as ferramentas daquele negócio (veja `ac-atraso-e-suspensao`).

Se você tem o mesmo produto em duas cidades, cada cidade tem as suas duas cobranças.

## quando pedir ajuda

peça ajuda se aparecer mais de uma cobrança do mesmo tipo para o mesmo mês (ou o mesmo ano), ou um valor diferente do contratado.

## fontes

- `src/app/(cliente)/negocios/[licenseId]/pagamentos/page.tsx:216` — títulos "Reserva territorial" e "Mensalidade" e suas descrições; `:246` — "As duas obrigações precisam estar em dia..."; `:48` — nomes no histórico; `:288` — mensalidade depois da instalação.
- `src/app/(cliente)/inicio/page.tsx:71` — "Cobrança mensal" / "Cobrança anual"; `:523` — "Os dois pagamentos precisam estar em dia.".
- `docs/DECISIONS.md:20` — DEC-03: anual e mensal nunca na mesma assinatura; não existe pagamento único.
- `docs/DECISIONS.md:307` — DEC-114: duas assinaturas criadas na confirmação do pagamento.

## lacunas

valores, dia de vencimento e reajuste não aparecem no código como regra para o cliente; vêm do produto contratado.
