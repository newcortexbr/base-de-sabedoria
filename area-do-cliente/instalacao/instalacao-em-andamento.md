---
id: ac-instalacao-em-andamento
titulo: 'a instalação diz "Instalação em andamento": preciso fazer alguma coisa?'
publico:
  - cliente
produto: portal-da-cidade
modulo: instalacao
aba: Minha plataforma
tipo_problema:
  - instalacao-em-andamento
  - dominio-declarado
  - em-provisionamento
  - aguardando-zona-de-dns
  - instalacao-demorando
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
entender as etapas em que o sistema está trabalhando e você só precisa esperar.

## pré-requisitos
- ter informado o domínio ou subdomínio.

## explicação
nestas situações a ação é do sistema, não sua. no `Início` e em `Meus negócios` aparece `Instalação em andamento` (ou `Em instalação`), com uma destas frases:
- `Recebemos o domínio e a instalação já está em andamento.`
- `Estamos preparando a plataforma.` (montando o portal, a área administrativa, os dados iniciais e o certificado de segurança).
- `Estamos preparando o DNS do seu domínio.`
- `A mudança de DNS está propagando. Isso pode levar algumas horas.` (veja `ac-instalacao-propagacao-dns`).
- `A plataforma está pronta e estamos concluindo os últimos passos.`

na tela `Minha plataforma` aparece `Preparando sua plataforma`: `Estamos organizando tudo para receber seu domínio. Os dados de DNS aparecerão aqui automaticamente quando estiverem prontos.` a página se atualiza sozinha.

## passos
1. Aguarde. Você pode fechar a tela. [guia=fora]
2. Volte a `Minha plataforma` mais tarde. Quando chegar a sua vez, a tela mostra o que fazer (trocar nameservers ou criar o registro do subdomínio). [guia=menu:/negocios/[licenseId]/plataforma]

## resultado
a instalação avança sozinha para a etapa em que você precisa agir.

## desvios
- no subdomínio, você já pode criar o registro mostrado na tela enquanto o portal é preparado: `Estamos preparando a sua plataforma. Você já pode criar o registro acima enquanto isso.`
- se aparecer `A instalação travou` ou `Sua instalação está em tratamento`, veja `ac-instalacao-falhou`.

## quando pedir ajuda
se ficar muitas horas na mesma situação sem mudar, abra um chamado em `Suporte`.

## fontes
- `src/app/(cliente)/inicio/pendencia-instalacao.ts:1`
- `src/app/(cliente)/negocios/[licenseId]/labels.ts:28`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:759`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:880`
- `src/domain/instalacao/state-machine.ts:74`

## lacunas
não há prazo documentado para essas etapas; "muitas horas" é orientação deste artigo.
