---
id: ac-negocio-o-que-e
titulo: "o que é um negócio (licença) na área do cliente"
publico:
  - cliente
modulo: negocios
aba: Meus negócios
tipo_problema:
  - o-que-e-licenca
  - o-que-e-negocio
  - tenho-duas-cidades
  - duvida-geral
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
entender o que a área do cliente chama de "negócio" e por que você pode ter mais de um.

## pré-requisitos
- ter entrado na área do cliente.

## explicação
- um negócio é a sua licença de um produto em uma cidade. ele é sempre a combinação produto + cidade + estado (UF). exemplo: Portal da Cidade em Linhares/ES.
- cada cidade é um negócio separado. se você tem o Portal da Cidade em duas cidades, você tem dois negócios, cada um com o seu próprio site (instalação, domínio) e as suas próprias cobranças.
- você usa um único login para todos os seus negócios.
- o treinamento é do produto, não da cidade: as mesmas aulas aparecem dentro de cada negócio do mesmo produto. você não precisa assistir duas vezes.
- dentro de cada negócio, o menu da esquerda mostra: `Visão geral`, `Minha plataforma`, `Treinamentos`, `Ferramentas`, `Lives` e `Pagamentos`.
- o nome do negócio aparece como produto + cidade/UF (por exemplo, "Portal da Cidade" e "Linhares/ES").

## resultado
você sabe que cada cidade comprada é um negócio próprio, com site e pagamentos próprios, mas com treinamento compartilhado.

## desvios
- se você comprou uma cidade e ela não aparece em `Meus negócios`, veja o artigo sobre negócio que não aparece.

## quando pedir ajuda
se algum negócio estiver com a cidade ou o produto errado, abra um chamado em `Suporte`.

## fontes
- `area-clientes/docs/PRODUCT.md:48`
- `area-clientes/docs/PRODUCT.md:53`
- `area-clientes/src/app/(cliente)/negocios/[licenseId]/labels.ts:174`
- `area-clientes/src/app/(cliente)/negocios/[licenseId]/labels.ts:185`
- `area-clientes/src/ui/nav/clientMenu.ts:22`

## lacunas
não conferido em tela com uma conta real de dois negócios.
