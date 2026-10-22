---
id: ext-creditos-como-funcionam
titulo: "como funcionam os créditos: custo por registro, mínimo, boas-vindas e validade"
publico:
  - cliente
modulo: creditos
aba: Créditos
tipo_problema:
  - creditos
  - custo-por-registro
  - creditos-de-boas-vindas
  - saldo
  - extrator-maps
status: rascunho-documental
revisado_em: 2026-10-21
validacao: codigo-e-video
videos:
  - F136_v1JyRY
  - R9FCgunNxFE
---

## objetivo
entender quanto cada extração consome e de onde vêm os créditos.

## pré-requisitos
- nenhum.

## explicação
- 1 crédito = 1 registro retornado, sem taxa oculta. a cobrança é por página de resultado efetivamente devolvida. pedir 100 e vir 40 consome 40.
- crédito é reservado durante a extração; se uma página falha, a reserva é devolvida e "Nenhum crédito fica reservado.".
- cada combinação cidade × nicho × bairro é uma busca, com limite próprio (`ext-quantidade-e-custo-maximo`).
- boas-vindas: a conta criada pela compra do Portal da Cidade recebe 200 créditos grátis. já foi 500 até 28/09/2026; contas criadas antes mantêm o que receberam. o vídeo (gravado antes) cita 500 e depois corrige para 200.
- mínimo para iniciar uma extração: 25 créditos (trava da tela). aviso de saldo baixo no `Dashboard`: abaixo de 200.
- não foi encontrada regra de validade para créditos no código.
- compra: pacotes pelo Asaas (`ext-comprar-creditos`). o crédito só entra depois da confirmação do pagamento.
- extrato com todos os movimentos: `ext-extrato-de-creditos`.
- reembolso: manual e feito fora do Extrator; estorno de compra remove os créditos e bloqueia a conta (`ext-licenca-suspensa-ou-conta-bloqueada`).

## passos
1. veja o `Saldo de créditos` no `Dashboard`.
2. antes de extrair, confira o gasto máximo na etapa `Confirmação`.
3. quando o saldo estiver baixo, compre mais.

## resultado
você controla o gasto.

## se der errado
- não recebeu as boas-vindas: abra um chamado em `Suporte` (a equipe tem lista de contas sem os créditos de boas-vindas). veja também `ac-ferramentas-extrator-maps`.
- créditos descontados e extração falhou: confira o `Extrato de créditos`; o bônus e o estorno aparecem lá.
