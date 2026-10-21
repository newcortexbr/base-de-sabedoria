---
id: ac-situacoes-das-cobrancas
titulo: "o que significa cada situação de cobrança e de negócio"
publico:
  - cliente
modulo: financeiro
aba: Pagamentos
tipo_problema:
  - em atraso
  - a vencer
  - em dia
  - suspenso
  - vencida
  - em aberto
  - pago
  - cancelada
  - o que significa
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo

entender os nomes de situação que aparecem em `Pagamentos`, no `Início` e em `Meus negócios`.

## explicação

cartões de `Situação dos pagamentos`:

- `Em dia` — nada em aberto.
- `A vencer` — há uma cobrança que ainda não venceu.
- `Em atraso` — há cobrança vencida; o texto diz há quantos dias.
- `Suspenso` — atrasou além do prazo e o portal e as ferramentas estão parados.
- `Após a instalação` — a mensalidade só começa quando o portal for instalado.
- `Sem cobrança` — ainda não há cobrança desta obrigação.

coluna `Situação` do histórico:

- `A vencer` — em aberto e no prazo.
- `Em atraso` — em aberto e vencida.
- `Pago` — paga.
- `Reembolsada` / `Reembolsada em parte` — devolvida, total ou em parte.
- `Contestada no cartão` — contestação feita no cartão de crédito.
- `Cancelada` — cobrança cancelada, não precisa pagar.

negócio (em `Meus negócios`):

- `Portal no ar` — instalado e funcionando.
- `Instalação pendente` — falta informar o domínio para começar.
- `Em instalação` — instalação em andamento.
- `Suspenso` — "Portal e ferramentas suspensos até a regularização."
- `Inativo` — "Fale com o suporte sobre este negócio."

No `Início`, cada cobrança aparece também como "Vence em dd/mm" ou "Vencida há N dias".

## quando pedir ajuda

peça ajuda se a situação mostrada não bate com o que você pagou.

## fontes

- `src/app/(cliente)/negocios/[licenseId]/pagamentos/page.tsx:99`–`:137` — selos dos cartões; `:203` — situação no histórico.
- `src/app/(cliente)/negocios/[licenseId]/labels.ts:77`–`:99` — rótulos de situação e de pagamento.
- `src/app/(cliente)/negocios/page.tsx:42`–`:55` — selos do negócio.
- `src/app/(cliente)/inicio/page.tsx:78` — "Em dia", "Vence em", "Vencida há".

## lacunas

`Inativo` aparece para negócio cancelado (qualquer situação que não é ativa nem suspensa) e não explica o motivo na tela.
