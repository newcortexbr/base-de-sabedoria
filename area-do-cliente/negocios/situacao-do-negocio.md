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
no cartão de `Meus negócios`, uma etiqueta só resume o negócio (o seu direito de usar o produto naquela cidade) e a instalação do site:
- `Portal no ar`: `Tudo pronto para gerenciar seu portal.`
- `Instalação pendente`: `Comece informando o domínio do seu portal.` (você ainda precisa informar o endereço do site).
- `Em instalação`: a instalação do site está andando; a frase do cartão diz o que falta.
- `Suspenso`: `Portal e ferramentas suspensos até a regularização.` há pendência de pagamento (ou outro motivo tratado pela equipe). a cidade continua sendo sua enquanto isso.
- `Inativo`: `Fale com o suporte sobre este negócio.` aparece quando o negócio foi cancelado.

as mesmas situações aparecem com outros nomes em outras telas:
- na `Visão geral` do negócio: `Portal ativo` (o mesmo que `Portal no ar`), `Instalação pendente`, `Em instalação` e `Portal suspenso`.
- no `Início`: `Portal no ar`, `Instalação pendente` e `Portal suspenso`.

`Portal no ar` / `Portal ativo` aparecem assim que a plataforma fica pronta, mesmo antes de você confirmar o acesso no fim da instalação (veja `ac-instalacao-confirmar-portal-no-ar`).

## resultado
você sabe se precisa agir (informar domínio, pagar, falar com o suporte) ou se está tudo certo.

## desvios
- para as etapas da instalação do site, veja `ac-instalacao-linha-do-tempo`.
- para negócio suspenso, veja `ac-negocio-suspenso`.

## quando pedir ajuda
se a etiqueta parecer errada (por exemplo, `Suspenso` com pagamentos em dia), abra um chamado em `Suporte`.

## fontes
- `src/app/(cliente)/negocios/[licenseId]/labels.ts:15`
- `src/app/(cliente)/negocios/page.tsx:43`
- `src/app/(cliente)/negocios/page.tsx:46`
- `src/app/(cliente)/negocios/page.tsx:49`
- `src/app/(cliente)/negocios/page.tsx:52`
- `src/app/(cliente)/negocios/page.tsx:55`
- `src/app/(cliente)/negocios/[licenseId]/page.tsx:100`
- `src/domain/acesso/sso-rps.ts:120`

## lacunas
o motivo da suspensão (atraso, reembolso, contestação no cartão, decisão manual) existe no sistema, mas não aparece em nenhuma tela do cliente. Os rótulos "Ativa", "Suspensa" e "Cancelada" de `labels.ts:15` existem no código, mas nenhuma tela do cliente os mostra (`negocios/cartao.ts`, que os usaria, não é importado por nenhuma tela).
