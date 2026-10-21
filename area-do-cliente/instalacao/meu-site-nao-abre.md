---
id: ac-instalacao-site-nao-abre
titulo: "meu portal (site) não abre"
publico:
  - cliente
produto: portal-da-cidade
modulo: instalacao
aba: Minha plataforma
tipo_problema:
  - site-nao-abre
  - site-fora-do-ar
  - portal-fora-do-ar
  - site-nao-seguro
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
descobrir por que o seu portal não abre e o que fazer.

## pré-requisitos
- ter entrado na área do cliente.

## passos
1. Em `Meus negócios` (`/negocios`), veja a etiqueta do cartão da cidade.
2. Se for `Suspenso`: o portal sai do ar enquanto houver pagamento em atraso. Clique em `Regularizar pagamento`.
3. Se for `Instalação pendente` ou `Em instalação`: o portal ainda não foi publicado. Clique no botão do cartão (por exemplo `Ver o que fazer`) e siga a etapa indicada.
4. Se a etapa for `Aguardando propagação`: aguarde; pode levar de alguns minutos até 24 horas.
5. Se for `Portal no ar`: abra `Minha plataforma` e clique em `Acesse seu portal` para ter certeza de que está usando o endereço certo.
6. Tente abrir o site em outro aparelho ou em outra rede (por exemplo, no celular com dados móveis).

## resultado
você identifica se o problema é pagamento, instalação em andamento ou algo que precisa do suporte.

## desvios
- se você usa subdomínio com a Cloudflare, a nuvem do registro precisa estar cinza (DNS only); com a nuvem laranja o endereço não responde.
- se você mexeu no DNS do domínio depois da instalação (por exemplo, trocou os nameservers de volta), o site pode sair do ar.
- se o endereço com `www` dá aviso de "não seguro" logo depois da instalação, aguarde algumas horas: o certificado do `www` é emitido quando ele passa a apontar para o portal.

## quando pedir ajuda
se o cartão mostra `Portal no ar` e o site não abre em nenhum aparelho por mais de uma hora, abra um chamado em `Suporte` com o endereço e um print do erro.

## fontes
- `area-clientes/src/app/(cliente)/negocios/page.tsx:43`
- `area-clientes/src/app/(cliente)/negocios/page.tsx:49`
- `area-clientes/src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:820`
- `area-clientes/src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaInstalada.tsx:120`
- `area-clientes/src/app/(cliente)/negocios/[licenseId]/plataforma/page.tsx:240`
- `area-clientes/src/domain/acesso/sso-rps.ts:120`
- `area-clientes/docs/DECISIONS.md:760`

## lacunas
- o prazo de "uma hora" é orientação deste artigo.
- a área do cliente não mostra se o site está respondendo depois da conclusão; a análise do erro é do suporte.
