---
id: ac-instalacao-trocar-dominio
titulo: "trocar o domínio do meu portal"
publico:
  - cliente
produto: portal-da-cidade
modulo: instalacao
aba: Minha plataforma
tipo_problema:
  - trocar-dominio
  - dominio-errado
  - mudar-endereco-do-site
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
saber como mudar o endereço do seu portal depois que o domínio foi informado.

## pré-requisitos
- ter o novo domínio já registrado e pago.

## explicação
- depois que você clica em `Continuar` informando o domínio, a área do cliente não oferece botão para trocá-lo.
- a troca de domínio existe, mas é feita só pela equipe, a partir de um chamado.
- na troca, a equipe prepara a configuração de DNS do domínio novo. o portal não é refeito: o conteúdo continua.
- depois, a instalação volta para a etapa de DNS e você precisa trocar os nameservers do domínio novo (ou criar o registro, se for subdomínio), como na primeira vez.

## passos
1. No menu, clique em `Suporte` e abra um chamado pedindo a troca de domínio. [guia=menu:/suporte]
2. Informe o domínio atual e o domínio novo, e confirme que o novo já está registrado no seu nome. [guia=fora]
3. Quando o suporte avisar, abra `Minha plataforma` e siga a etapa de DNS que aparecer. [guia=menu:/negocios/[licenseId]/plataforma]

## resultado
o portal passa a responder no domínio novo depois da propagação.

## desvios
- se você digitou errado e a instalação ainda está no começo, avise o suporte o quanto antes.

## quando pedir ajuda
sempre: a troca é feita pela equipe.

## fontes
- `docs/REQUIREMENTS.md:362`
- `src/domain/instalacao/state-machine.ts:104`
- `src/domain/instalacao/state-machine.ts:128`

## lacunas
- não confirmado se o domínio antigo continua funcionando por algum tempo após a troca.
- não há prazo da troca no código.
