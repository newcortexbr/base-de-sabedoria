---
id: cliente-parar-renovacao-de-banner
titulo: "parar a renovação de um banner"
publico:
  - cliente
modulo: publicidade
categoria: conta
aba: nao-se-aplica
tipo_problema:
  - cancelar banner
  - parar de pagar o banner
  - não renovar banner
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
aqui você impede que um banner seja cobrado de novo no próximo período.

## pré-requisitos

- Ter um banner publicado.

## passos

1. No menu da esquerda da sua área, clique em `Banners Publicitários`. [guia=menu:/minha-conta/publicidade]
2. Na linha do banner, clique em `Parar renovação`. [guia=fora]
3. Confirme na janela que aparece. [guia=fora]

## resultado
o banner continua no ar até o fim do período já pago e não é cobrado de novo.

## desvios

- O período atual não é reembolsado.

## quando pedir ajuda

peça ajuda se aparecer "Não foi possível cancelar a renovação agora." mais de uma vez.

## fontes

- `portal-cidade/frontend/src/app/minha-conta/publicidade/page.tsx:109-119,228` — "Parar renovação" e texto da confirmação.

## lacunas

tela não validada no navegador nesta tarefa.
