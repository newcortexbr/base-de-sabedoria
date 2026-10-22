---
id: ac-instalacao-propagacao-dns
titulo: "o que é a propagação do DNS e quanto tempo demora"
publico:
  - cliente
produto: portal-da-cidade
modulo: instalacao
aba: Minha plataforma
tipo_problema:
  - aguardando-propagacao
  - propagacao-demorando
  - quanto-tempo-demora
  - site-ainda-nao-abre
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
entender a espera depois de apontar o domínio (etapa `Conexão DNS`, tela `Testando o acesso ao portal`) e o tempo que ela pode levar.

## pré-requisitos
- ter trocado os nameservers (domínio próprio) ou criado o registro (subdomínio).

## explicação
- propagação é o tempo que a internet leva para "aprender" o novo endereço do seu domínio. cada servidor de DNS do mundo atualiza no seu tempo.
- a tela diz: `A mudança de DNS está propagando. Isso pode levar algumas horas.` e `Pode levar de alguns minutos até 24 horas, conforme o registrador.`
- em `Minha plataforma`, o quadro `Propagação pelos servidores de DNS` mostra, ao vivo, quais servidores já enxergam o seu domínio, com as colunas `Servidor`, `O que ele responde` e `Situação`. quando todos enxergam, aparece `Todos os servidores já enxergam seu domínio`.
- enquanto isso a tela mostra `Testando o acesso ao portal`. você não precisa ficar na tela.
- é normal o site abrir no seu celular e não no computador (ou o contrário) durante a propagação.

## passos
1. Aguarde. Não refaça a troca de nameservers. [guia=fora]
2. Volte a `Minha plataforma` depois de algumas horas. [guia=menu:/negocios/[licenseId]/plataforma]

## resultado
quando a propagação termina, a instalação passa para a etapa `Portal no ar` e aparece a pergunta final para você confirmar se o portal está no ar.

## desvios
- `Não foi possível consultar os servidores agora. Tentamos de novo em instantes.`: é só a consulta ao vivo que falhou; a instalação continua.
- `Sem resposta no momento` em um servidor: ele ainda não atualizou.

## quando pedir ajuda
se passarem mais de 24 horas e a etapa não avançar, abra um chamado em `Suporte`.

## fontes
- `src/app/(cliente)/inicio/pendencia-instalacao.ts:1`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:697`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:769`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:820`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PropagacaoAoVivo.tsx:22`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PropagacaoAoVivo.tsx:113`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PropagacaoAoVivo.tsx:133`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PropagacaoAoVivo.tsx:172`

## lacunas
- a frase sobre o site abrir em um aparelho e não em outro é explicação geral de DNS, não texto da tela.
- o certificado de segurança (https) pode demorar um pouco depois da propagação; não há prazo no código.
