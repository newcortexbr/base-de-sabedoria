---
id: ac-ferramentas-abrir
titulo: "abrir uma ferramenta (entrar sem senha nova)"
publico:
  - cliente
modulo: ferramentas
aba: Ferramentas
tipo_problema:
  - abrir-ferramenta
  - login-unico
  - senha-da-ferramenta
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
abrir uma ferramenta a partir da área do cliente.

## pré-requisitos
- negócio com licença ativa.
- a ferramenta com a etiqueta `Disponível`.

## passos
1. No menu do negócio, clique em `Ferramentas` (`/negocios/<negócio>/ferramentas`).
2. No cartão da ferramenta, clique em `Acessar ferramenta`. Ela abre em uma nova aba.
3. Se a ferramenta usar o login da área do cliente, aparece rapidamente a tela `Entrando no <ferramenta>…` (`Estamos confirmando seu acesso. Você será levado ao <ferramenta> em instantes.`).

## resultado
você entra na ferramenta já identificado, com a mesma conta da área do cliente.

## explicação
- nas ferramentas com login único (como o Extrator Maps e o DadosPJ), você não cria nem digita outra senha. a senha fica só na área do cliente.
- se você não estiver logado na área do cliente, ela pede o login e depois leva você à ferramenta.
- outras ferramentas podem ser só um link externo; nelas, o acesso segue as regras do próprio serviço.

## desvios
- se a tela mostrar `Não foi possível entrar no <ferramenta>`, leia o motivo e veja `ac-ferramentas-nao-abre`.
- se a nova aba não abrir, confira se o navegador bloqueou janelas.

## quando pedir ajuda
se a ferramenta abrir pedindo uma senha que você não tem, abra um chamado em `Suporte`.

## fontes
- `src/app/(cliente)/negocios/[licenseId]/ferramentas/page.tsx:33`
- `src/app/(cliente)/negocios/[licenseId]/ferramentas/page.tsx:159`
- `src/app/(cliente)/sso/autorizar/route.ts:189`
- `src/app/(cliente)/sso/autorizar/route.ts:237`
- `src/domain/conteudo/tools.ts:1`
- `docs/SSO-RPS.md:1`

## lacunas
não testado em tela.
