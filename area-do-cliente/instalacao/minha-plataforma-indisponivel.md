---
id: ac-instalacao-minha-plataforma-indisponivel
titulo: "clico em Minha plataforma e volto para a Visão geral"
publico:
  - cliente
produto: portal-da-cidade
modulo: instalacao
aba: Minha plataforma
tipo_problema:
  - minha-plataforma-nao-abre
  - volta-para-visao-geral
  - instalacao-bloqueada
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
entender por que `Minha plataforma` não abre e como voltar a usá-la.

## pré-requisitos
- ter um negócio em `Meus negócios`.

## explicação
- `Minha plataforma` só abre quando o negócio está funcionando. Com o negócio suspenso ou cancelado, quem clica em `Minha plataforma` é levado de volta à `Visão geral` daquele negócio.
- na `Visão geral` aparece a situação (`Portal suspenso`) e o caminho para regularizar.

## passos
1. Em `Meus negócios`, veja a etiqueta do cartão da cidade. [guia=menu:/negocios]
2. Se for `Suspenso`, clique em `Regularizar pagamento` e pague a pendência (veja `ac-pagar-cobranca-pendente`). [guia=pagamentos.pagar]
3. Depois que o pagamento for confirmado, clique de novo em `Minha plataforma`. [guia=menu:/negocios/[licenseId]/plataforma]
4. Se for `Inativo`, o negócio foi cancelado: fale com o suporte. [guia=fora]

## resultado
com o negócio funcionando, `Minha plataforma` volta a abrir normalmente, na etapa em que a instalação estava.

## desvios
- se o negócio aparece funcionando e mesmo assim você volta para a `Visão geral`, recarregue a página.

## quando pedir ajuda
se, com o negócio sem pendência, `Minha plataforma` continuar sem abrir, abra um chamado em `Suporte`.

## fontes
- `src/app/(cliente)/negocios/[licenseId]/plataforma/page.tsx:296` — negócio que não está ativo volta para a `Visão geral`.
- `src/app/(cliente)/negocios/page.tsx:42` — etiquetas `Suspenso` e `Inativo` em `Meus negócios`.
