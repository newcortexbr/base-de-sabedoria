---
id: ac-instalacao-falhou
titulo: "a instalação falhou ou travou"
publico:
  - cliente
produto: portal-da-cidade
modulo: instalacao
aba: Minha plataforma
tipo_problema:
  - instalacao-falhou
  - instalacao-travou
  - erro-na-instalacao
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
entender o que fazer quando a instalação aparece como `Sua instalação está em tratamento` ou `A instalação travou`.

## pré-requisitos
- nenhum.

## explicação
- no cartão de `Meus negócios`, a instalação aparece como `A instalação travou`: `Algo falhou na instalação e a nossa equipe já consegue ver. Fale com o Suporte se quiser acompanhar.`
- em `Minha plataforma`, a tela mostra `Sua instalação está em tratamento` e `Identificamos um problema no provisionamento`. `Nossa equipe técnica já foi notificada e está tratando o caso. Você não precisa fazer nada agora — avisamos assim que a instalação for retomada.`
- não existe botão de "tentar de novo" para o cliente. quem retoma a instalação é a equipe.
- quando a equipe retoma, a instalação volta a andar sozinha a partir da preparação do portal.

## passos
1. Não informe o domínio de novo e não mexa no DNS por causa da falha. [guia=fora]
2. Se quiser acompanhar, clique em `Falar com o suporte` e abra um chamado. [guia=fora]

## resultado
a equipe corrige e a instalação volta para a preparação da plataforma (`Preparando sua plataforma`) e segue o caminho normal.

## desvios
- os detalhes técnicos do erro não aparecem para o cliente, de propósito.

## quando pedir ajuda
se a tela continuar em `Sua instalação está em tratamento` por mais de um dia útil, abra um chamado em `Suporte`.

## fontes
- `src/app/(cliente)/inicio/pendencia-instalacao.ts:1`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:1156`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:1163`
- `src/domain/instalacao/state-machine.ts:172`
- `docs/REQUIREMENTS.md:230`

## lacunas
- não há prazo de correção no código; "um dia útil" é orientação deste artigo.
- não foi confirmado se o cliente recebe e-mail quando a instalação é retomada.
