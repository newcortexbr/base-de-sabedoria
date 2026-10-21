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
a instalação fica em `Minha plataforma` (`/negocios/<negócio>/plataforma`). no topo há três etapas: `ETAPA 1` `Seu domínio`, `ETAPA 2` `Conexão DNS` e `ETAPA 3` `Portal no ar`. enquanto o sistema trabalha, aparece `Atualizando ao vivo · verificado há Ns` e a tela se atualiza sozinha.

o caminho, na ordem, com o que aparece na tela e quem age:
1. escolher o endereço — você age. etapa `Seu domínio`. a tela pergunta `Qual endereço sua plataforma vai ter?`. no `Início` e em `Meus negócios`: `Falta informar o domínio` / `Instalação pendente`, botão `Iniciar instalação` ou `Continuar instalação`. veja `ac-instalacao-informar-dominio` ou `ac-instalacao-usar-subdominio`.
2. preparar a plataforma — sistema. ainda na etapa `Seu domínio`. a tela mostra `Preparando sua plataforma`. no `Início`: `Instalação em andamento`. veja `ac-instalacao-em-andamento`.
3. apontar o domínio — você age. ainda na etapa `Seu domínio`.
   - domínio próprio: a tela mostra `Falta apontar o seu domínio.` e o quadro `Seus servidores DNS`; troque os 2 nameservers no registrador (veja `ac-instalacao-trocar-nameservers`). no `Início`: `Falta trocar os nameservers`, botão `Ver o que fazer`.
   - subdomínio: a tela mostra `Falta apontar o seu subdomínio.` e o quadro `Apontamento do subdomínio`; crie 1 registro no painel de DNS (veja `ac-instalacao-usar-subdominio`).
4. esperar a propagação — automático. etapa `Conexão DNS`. a tela mostra `Testando o acesso ao portal` e o quadro de propagação; pode levar de minutos a 24 horas (veja `ac-instalacao-propagacao-dns`).
5. confirmar o acesso — você age. etapa `Portal no ar`. aparece a animação `Estamos montando o seu portal` e depois `Sua plataforma está no ar!` com a pergunta `Já consegue acessar sua plataforma?`. responda `Sim, já está no ar` ou `Não, ainda não consigo` (veja `ac-instalacao-confirmar-portal-no-ar`). no `Início`: `Falta a sua confirmação`, botão `Conferir e confirmar`.
6. concluída — pronto. a tela mostra `Instalação concluída` e, depois, o portal com os seus acessos e links (veja `ac-instalacao-concluida-acessos`).

fora do caminho normal:
- `Sua instalação está em tratamento` — a equipe age; você não precisa fazer nada. no `Início`: `A instalação travou`. veja `ac-instalacao-falhou`.
- `Chamado aberto com o suporte` — acontece quando você responde `Não, ainda não consigo`; a equipe age. no `Início`: `A instalação precisa do Suporte`. veja `ac-instalacao-em-atendimento-suporte`.

nomes internos: o chat de suporte pode chamar estas situações pelos nomes do sistema. eles correspondem assim ao caminho acima:
- `Aguardando domínio` = passo 1;
- `Domínio declarado`, `Em provisionamento` e `Aguardando zona de DNS` = passo 2;
- `Aguardando troca de nameservers` = passo 3 (também no subdomínio, mesmo sem nameserver para trocar);
- `Aguardando propagação` = passo 4;
- `Plataforma pronta` e `Aguardando confirmação do cliente` = passo 5;
- `Concluída` = passo 6;
- `Falhou` = `Sua instalação está em tratamento`;
- `Requer suporte` = `Chamado aberto com o suporte`.

## resultado
você sabe em que etapa está e se a próxima ação é sua ou da equipe.

## desvios
- antes de você informar o domínio, `Meus negócios` mostra `Instalação pendente` e `Domínio ainda não informado`.
- `Minha plataforma` só abre com o negócio funcionando. com o negócio suspenso ou cancelado, o link leva de volta à `Visão geral` do negócio.
- a troca de domínio depois da instalação é feita pela equipe, mediante chamado.

## quando pedir ajuda
se a instalação ficar parada na mesma etapa por mais de 24 horas depois de você ter feito a sua parte, abra um chamado em `Suporte`.

## fontes
- `src/app/(cliente)/negocios/[licenseId]/plataforma/etapa-real.ts:329` — qual das três etapas fica marcada em cada situação; `:416` — quando a tela se atualiza sozinha.
- `src/app/(cliente)/negocios/[licenseId]/plataforma/page.tsx:296` — negócio não ativo volta à visão geral; `:556`–`:614` — títulos de cada passo.
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:356` — `Atualizando ao vivo`; `:759`, `:769`, `:908`, `:1053`, `:1079`, `:1100`, `:1156` — telas de cada passo.
- `src/app/(cliente)/inicio/pendencia-instalacao.ts:33` — avisos do `Início` e de `Meus negócios` por situação.
- `src/domain/suporte/assistente/rotulos.ts:10` — nomes internos que o chat recebe.
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:299`
- `src/domain/instalacao/state-machine.ts:73`
- `src/app/(cliente)/inicio/pendencia-instalacao.ts:1`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/etapa-real.ts:174`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:820`
- `docs/REQUIREMENTS.md:362`

## lacunas
- o tempo total típico da instalação não está documentado.
- os nomes de situação de `labels.ts:28` ("Aguardando zona de DNS", "Em atendimento do suporte"...) não aparecem em nenhuma tela do cliente; o chat usa outra lista (`rotulos.ts`), com "Requer suporte" e "Aguardando confirmação do cliente". a lista de eventos da instalação ("Você informou o endereço da sua plataforma"...) é montada no servidor mas não é desenhada (`PlataformaFlow.tsx:207`).
- a situação `Aguardando confirmação do cliente` hoje quase não acontece (a entrega automática de acessos que a usaria não está ligada); na prática a pergunta aparece logo que a plataforma fica pronta.
- o limite de 24 horas para pedir ajuda é recomendação deste artigo, baseada no texto da tela sobre propagação.
