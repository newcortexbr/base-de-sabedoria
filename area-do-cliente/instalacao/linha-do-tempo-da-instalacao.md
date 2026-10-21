---
id: ac-instalacao-linha-do-tempo
titulo: "como funciona a instalação do meu portal, etapa por etapa"
publico:
  - cliente
produto: portal-da-cidade
modulo: instalacao
aba: Minha plataforma
tipo_problema:
  - etapas-da-instalacao
  - status-da-instalacao
  - quanto-tempo-demora
  - quem-faz-o-que
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
entender as etapas da instalação do seu portal, o que cada situação quer dizer e quem precisa agir.

## pré-requisitos
- ter um negócio do Portal da Cidade com a licença ativa.

## explicação
a instalação fica em `Minha plataforma` (`/negocios/<negócio>/plataforma`). no topo há três etapas: `Seu domínio`, `Conexão DNS` e `Portal no ar`. a tela se atualiza sozinha enquanto a instalação anda.

as situações, na ordem, com quem age:
1. `Aguardando domínio` — você age. informe o endereço do site (domínio próprio ou subdomínio).
2. `Domínio declarado` — sistema. recebemos o endereço.
3. `Em provisionamento` — sistema. o portal está sendo montado.
4. `Aguardando zona de DNS` — sistema. só para domínio próprio: preparamos o DNS do seu domínio.
5. `Aguardando troca de nameservers` — você age. só para domínio próprio: troque os 2 nameservers no site onde registrou o domínio. (no subdomínio, você cria 1 registro CNAME.)
6. `Aguardando propagação` — automático. a mudança está se espalhando pela internet; pode levar de minutos a 24 horas.
7. `Plataforma pronta` — você age. abra o painel do portal, entre e confirme `Sim, já está no ar` ou `Não, ainda não consigo`.
8. `Aguardando sua confirmação` — você age. mesma confirmação.
9. `Concluída` — pronto. o portal está no ar e os acessos ficam em `Minha plataforma`.

situações fora do caminho normal:
- `Falhou` — equipe age. a tela diz `Sua instalação está em tratamento`; você não precisa fazer nada.
- `Em atendimento do suporte` — equipe age. acontece quando você responde que não conseguiu acessar; um chamado é aberto.

## resultado
você sabe em que etapa está e se a próxima ação é sua ou da equipe.

## desvios
- antes da instalação começar, a situação aparece como `Pendente`.
- a troca de domínio depois da instalação é feita pela equipe, mediante chamado.

## quando pedir ajuda
se a instalação ficar parada na mesma etapa por mais de 24 horas depois de você ter feito a sua parte, abra um chamado em `Suporte`.

## fontes
- `area-clientes/src/app/(cliente)/negocios/[licenseId]/labels.ts:28`
- `area-clientes/src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:299`
- `area-clientes/src/domain/instalacao/state-machine.ts:73`
- `area-clientes/src/app/(cliente)/inicio/pendencia-instalacao.ts:1`
- `area-clientes/src/app/(cliente)/negocios/[licenseId]/plataforma/etapa-real.ts:174`
- `area-clientes/src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:820`
- `area-clientes/docs/REQUIREMENTS.md:362`

## lacunas
- o tempo total típico da instalação não está documentado.
- a situação `Aguardando sua confirmação` hoje quase não acontece (a entrega automática de acessos que a usaria não está ligada); na prática a pergunta aparece em `Plataforma pronta`.
- o limite de 24 horas para pedir ajuda é recomendação deste artigo, baseada no texto da tela sobre propagação.
