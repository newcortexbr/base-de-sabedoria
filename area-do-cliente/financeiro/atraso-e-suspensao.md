---
id: ac-atraso-e-suspensao
titulo: "o que acontece se eu atrasar um pagamento (suspensão)"
publico:
  - cliente
modulo: financeiro
aba: Pagamentos
tipo_problema:
  - atraso
  - cobrança vencida
  - portal suspenso
  - negócio suspenso
  - licença suspensa
  - perdi acesso ao treinamento
  - aviso antes da suspensão
  - quantos dias de atraso
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo

entender o que acontece, dia a dia, quando uma cobrança de um negócio passa do vencimento.

## explicação

toda noite, logo depois da meia-noite (00:01), a Área do Cliente confere as cobranças vencidas de cada negócio.

1. Cobrança vencida: o cartão em `Pagamentos` mostra `Em atraso`, "Vencida há N dias" e "Depois de 5 dias de atraso o portal é suspenso." (o número é o prazo configurado; o padrão é 5) O `Início` também mostra um aviso com `Pagar agora`.
2. Avisos por e-mail: com o prazo padrão de 5 dias, você recebe e-mail no 1º dia de atraso ("Cobrança vencida"), no 3º ("Cobrança ainda em aberto") e no 4º ("Aviso antes da suspensão", com a data da suspensão).
3. Suspensão: com mais de 5 dias de atraso (padrão) em qualquer uma das duas cobranças (reserva territorial ou mensalidade), o negócio fica `Suspenso`. Você recebe o e-mail "Licença suspensa".
4. Enquanto suspenso: o portal e as ferramentas daquele negócio ficam parados ("Portal e ferramentas suspensos por pendência financeira."), e os links do portal ficam indisponíveis.
5. Treinamento: se todos os seus negócios daquele produto estiverem suspensos, você também perde o acesso ao treinamento do produto até regularizar. Se pelo menos um negócio do produto estiver ativo, o treinamento continua.

A suspensão por atraso nunca cancela o negócio sozinha. Cancelamento só é feito pela equipe.

Outras causas de suspensão, que acontecem na hora, sem esperar os dias: reembolso, reembolso parcial, contestação no cartão ou decisão manual da equipe. Nesses casos, pagar não reativa sozinho; fale com o suporte.

A sua conta continua funcionando durante a suspensão: você entra, vê `Pagamentos`, `Suporte` e `Minha conta`.

O que cada tela diz sobre o prazo:

- `Pagamentos`: "Atraso superior a N dias em qualquer uma das cobranças suspende o portal e as ferramentas até a regularização." O N é o prazo que vale de verdade.
- `Início` e `Meus negócios`: falam sempre em "5 dias", escrito fixo na tela. Com o prazo padrão, os três dizem a mesma coisa. Se algum dia mostrarem números diferentes, vale o de `Pagamentos`.
- Com o negócio suspenso, o `Início` mostra `Portal suspenso` e "Portal e ferramentas suspensos por pendência financeira." Essa frase aparece em qualquer suspensão, mesmo quando o motivo não é atraso (por exemplo, reembolso ou decisão da equipe).

## passos

1. Para resolver, pague a cobrança vencida (veja `ac-pagar-cobranca-pendente`). [guia=fora]

## resultado

depois que o pagamento é confirmado e não sobra outra cobrança vencida, o negócio volta sozinho (veja `ac-reativar-depois-de-pagar`).

## quando pedir ajuda

peça ajuda se o negócio foi suspenso e você não tinha nada em atraso, ou se o motivo não é pagamento.

## fontes

- `src/domain/financeiro/delinquency.ts:1` — rotina diária das 00:01; nenhum caminho automático cancela.
- `src/domain/financeiro/delinquency.ts:128` — dias dos avisos derivados do prazo (padrão 1, 3 e 4).
- `src/db/seeds/config.ts:18` — prazo de suspensão: 5 dias (configurável).
- `src/ui/emails/templates.ts:120`–`:175` — e-mails de cobrança vencida, aviso antes da suspensão, suspensão e reativação.
- `src/app/(cliente)/negocios/[licenseId]/pagamentos/page.tsx:94` — selos `Em atraso` / `Suspenso` e texto dos dias; `:309` — "Atraso superior a N dias ... suspende o portal e as ferramentas".
- `src/app/(cliente)/inicio/page.tsx:225` — aviso no Início.
- `src/ui/status/businessLabels.ts:69` — motivos de suspensão: "Pagamento em atraso", "Reembolso", "Reembolso parcial", "Contestação no cartão", "Decisão manual".
- `docs/DECISIONS.md:48` — DEC-22: todas as licenças do produto suspensas = perde o conteúdo; `:412` — DEC-214: reembolso e contestação suspendem na hora.
- `src/app/(cliente)/negocios/[licenseId]/_conteudo/Regularizacao.tsx:30` — tela "Como voltar a ter acesso" no treinamento bloqueado.

## lacunas

o `Início` escreve "Atraso superior a 5 dias" fixo no texto (`inicio/page.tsx:236` e `:524`) e `Meus negócios` escreve "Após mais de 5 dias" fixo (`negocios/page.tsx:277`), enquanto `Pagamentos` usa o prazo configurado. Se a equipe mudar o prazo, as telas vão dizer números diferentes. O `Início` diz "por pendência financeira" para toda suspensão (`inicio/page.tsx:231`), mesmo quando o motivo é outro. O motivo da suspensão não aparece para o cliente em tela; só no e-mail.
