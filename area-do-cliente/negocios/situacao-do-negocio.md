---
id: ac-negocio-situacoes
titulo: "o que significa cada situação do meu negócio"
publico:
  - cliente
modulo: negocios
aba: Meus negócios
tipo_problema:
  - status-da-licenca
  - licenca-suspensa
  - licenca-cancelada
  - portal-no-ar
  - instalacao-pendente
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
entender as etiquetas de situação que aparecem nos cartões de `Meus negócios` e na `Visão geral`.

## pré-requisitos
- ter entrado na área do cliente.

## explicação
a situação da licença (o seu direito de usar o produto naquela cidade) pode ser:
- `Ativa`: tudo certo, você usa normalmente.
- `Suspensa`: há pendência de pagamento (ou outro motivo tratado pela equipe). o portal e as ferramentas daquele negócio ficam suspensos até a regularização. a cidade continua sendo sua enquanto isso.
- `Cancelada`: a licença foi encerrada. no cartão de `Meus negócios` ela aparece como `Inativo`, com a frase `Fale com o suporte sobre este negócio.`

no cartão de `Meus negócios`, a etiqueta junta a licença e a instalação do site:
- `Portal no ar`: `Tudo pronto para gerenciar seu portal.`
- `Instalação pendente`: `Comece informando o domínio do seu portal.` (você ainda precisa informar o endereço do site).
- `Em instalação`: a instalação do site está andando; a frase do cartão diz o que falta.
- `Suspenso`: `Portal e ferramentas suspensos até a regularização.`
- `Inativo`: licença cancelada.

na `Visão geral` do negócio, as etiquetas equivalentes são `Portal ativo`, `Instalação pendente`, `Em instalação` e `Portal suspenso`.

## resultado
você sabe se precisa agir (informar domínio, pagar, falar com o suporte) ou se está tudo certo.

## desvios
- para as etapas da instalação do site, veja o artigo sobre a linha do tempo da instalação.
- para negócio suspenso, veja o artigo específico.

## quando pedir ajuda
se a etiqueta parecer errada (por exemplo, `Suspenso` com pagamentos em dia), abra um chamado em `Suporte`.

## fontes
- `area-clientes/src/app/(cliente)/negocios/[licenseId]/labels.ts:15`
- `area-clientes/src/app/(cliente)/negocios/page.tsx:43`
- `area-clientes/src/app/(cliente)/negocios/page.tsx:46`
- `area-clientes/src/app/(cliente)/negocios/page.tsx:49`
- `area-clientes/src/app/(cliente)/negocios/page.tsx:52`
- `area-clientes/src/app/(cliente)/negocios/page.tsx:55`
- `area-clientes/src/app/(cliente)/negocios/[licenseId]/page.tsx:100`
- `area-clientes/src/domain/acesso/sso-rps.ts:120`

## lacunas
o motivo da suspensão (atraso, reembolso, contestação no cartão, decisão manual) existe no sistema, mas não foi confirmado se ele aparece para o cliente em alguma tela.
