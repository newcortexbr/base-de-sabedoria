---
id: usuario-radar-enviar-preco
titulo: "enviar um preço para o Radar de Preços"
publico:
  - usuario
modulo: radar
categoria: radar
aba: nao-se-aplica
tipo_problema: orientacao
status: rascunho-documental
revisado_em: 2026-10-22
validacao: docs-e-codigo
videos:
  - 3FZrdVUN_Yk
---

## objetivo

mandar a foto de um preço ou de um encarte para ajudar outras pessoas a economizar.

## pré-requisitos

- uma foto do produto com o preço, ou do encarte.
- não precisa criar conta.

## passos

1. No Radar de Preços, clique em `Enviar foto ou encarte` (em `Encontrou um preço?`, no topo e no fim da página), ou abra `/radar-de-precos/enviar`. [guia=menu:/radar-de-precos/enviar]
2. Escolha a categoria.
3. Toque em `Toque para tirar ou escolher a foto` e mande a foto.
4. Informe o `Preço *`.
5. Em `Onde você viu o preço? *`, escolha o estabelecimento. Se ele não estiver na lista, escreva o `Estabelecimento *` e o `Endereço *`.
6. Escreva `Seu nome *` e `Seu WhatsApp *`.
7. Clique em `Enviar preço`.

## resultado

aparece a confirmação do envio. A equipe do portal confere a foto antes de o preço aparecer no Radar, então pode demorar.

## desvios

- o envio é conferido por uma pessoa do portal; fotos que não mostram o preço são recusadas.
- o nome e o WhatsApp servem só para a equipe conferir.

## fontes

- `portal-cidade/frontend/src/components/radar/EnviarRadar.tsx:166`
- `portal-cidade/frontend/src/components/radar/ChamadaEnvio.tsx:15`
- `portal-cidade/docs/RADAR-CONTRATO.md`

## lacunas

não verificado visualmente. A frase de uso do WhatsApp só pela equipe é inferência (não há texto de privacidade conferido).
