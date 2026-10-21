---
id: ac-negocio-exclusividade-territorial
titulo: "a minha cidade é exclusiva? como funciona a exclusividade"
publico:
  - cliente
modulo: negocios
aba: Meus negócios
tipo_problema:
  - exclusividade-territorial
  - concorrente-na-cidade
  - cidade-ja-vendida
  - duvida-geral
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
entender a regra de exclusividade por cidade.

## pré-requisitos
- nenhum.

## explicação
- cada produto só pode ter um dono por cidade. se você tem o Portal da Cidade em uma cidade, ninguém mais consegue comprar o Portal da Cidade nessa mesma cidade.
- essa regra é garantida pelo próprio sistema no momento da venda, mesmo que duas pessoas tentem comprar ao mesmo tempo.
- quando alguém tenta comprar uma cidade que já tem dono, vê a página `O Portal da Cidade de <cidade> já tem dono.`, com a frase `A licença é exclusiva por município, e esta cidade já foi vendida.`
- se o seu negócio for suspenso por atraso, a cidade continua sendo sua enquanto você pode regularizar.
- durante a compra, a cidade fica reservada por um tempo curto para quem está pagando (veja o artigo sobre reserva).

## resultado
você sabe que a sua cidade não é vendida para outra pessoa enquanto a sua licença existir.

## desvios
- se a licença for cancelada, a cidade pode voltar a ficar disponível para venda.

## quando pedir ajuda
se você encontrar outro Portal da Cidade da New Córtex na sua cidade, abra um chamado em `Suporte` com o endereço que você viu.

## fontes
- `area-clientes/docs/PRODUCT.md:44`
- `area-clientes/src/app/(public)/indisponivel/page.tsx:63`
- `area-clientes/src/app/(public)/indisponivel/page.tsx:67`
- `area-clientes/src/app/(public)/comprar/ComprarPage.tsx:57`
- `area-clientes/src/domain/acesso/sso-rps.ts:120`

## lacunas
não foi confirmado o prazo para uma cidade cancelada voltar a ficar disponível.
