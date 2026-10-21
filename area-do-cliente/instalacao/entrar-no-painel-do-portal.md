---
id: ac-instalacao-entrar-no-painel-do-portal
titulo: "entrar no painel do meu portal com a conta da área do cliente"
publico:
  - cliente
produto: portal-da-cidade
modulo: instalacao
aba: Minha plataforma
tipo_problema:
  - entrar-no-painel
  - senha-do-portal
  - login-unico
  - acessar-meu-portal
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
entrar no painel administrativo do seu portal sem senha nova.

## pré-requisitos
- `Minha plataforma` já mostrar `Sua plataforma está no ar!` ou o portal instalado, com o botão `Acessar meu portal`.
- licença ativa (não suspensa).

## passos
1. Em `Meus negócios` (`/negocios`), clique em `Acessar meu negócio` no cartão da cidade.
2. Clique em `Minha plataforma`.
3. Clique em `Acessar meu portal` (na confirmação final) ou em `Acesse seu painel` (depois da instalação concluída). Abre em nova aba.
4. Na tela de login do painel, clique em `Entrar com a Área do Cliente`.

## resultado
você entra no painel com a mesma conta que usa na área do cliente. não existe senha separada para o painel.

## explicação
- não há senha inicial enviada por e-mail ou WhatsApp para o painel. a entrada é sempre pelo botão `Entrar com a Área do Cliente`.
- se você ainda não estiver logado na área do cliente, ela pede o login primeiro e depois devolve você ao painel.

## desvios
- com o negócio suspenso, o painel e o site ficam fora do ar até a regularização.
- se a sua conta estiver bloqueada, a entrada é recusada.

## quando pedir ajuda
se o botão `Entrar com a Área do Cliente` der erro ou voltar para o login, abra um chamado em `Suporte` com um print.

## fontes
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:1056`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:880`
- `src/app/(cliente)/AcessarPortalButton.tsx:35`
- `src/app/(cliente)/AcessarPortalButton.tsx:61`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaInstalada.tsx:135`
- `src/app/(cliente)/sso/autorizar/route.ts:195`
- `src/domain/acesso/sso-rps.ts:120`

## lacunas
- o texto exato do botão e da tela de login do painel é do sistema do portal, não da área do cliente; aqui ele aparece como citado na própria área do cliente.
- o endereço exato do painel não foi conferido.
