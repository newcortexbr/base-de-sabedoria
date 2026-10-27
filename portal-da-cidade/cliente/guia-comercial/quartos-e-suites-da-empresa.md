---
id: cliente-guia-quartos-e-suites
titulo: "cadastrar quartos e suítes da hospedagem: seções, diária, diária promocional, comodidades e fotos"
publico:
  - cliente
modulo: guia-comercial
categoria: guia-comercial
aba: Guia Comercial
tipo_problema:
  - quartos
tags:
  - criar
  - quarto
  - diaria
  - preco
  - foto
  - comodidade
  - guia
  - empresa
status: rascunho-documental
revisado_em: 2026-10-27
validacao: codigo-e-video
videos:
  - aSRf0hwUrrc
---

## objetivo

mostrar os quartos da hospedagem com fotos, diárias e o que cada um oferece; o hóspede reserva pelo WhatsApp.

## pré-requisitos

- empresa no Guia Comercial com categoria de hospedagem (hotéis, pousadas, chalés, casas de temporada). Sem isso, o cartão `Quartos e suítes` não aparece.

## passos

1. No menu da esquerda, clique em `Guia Comercial`. [guia=menu:/minha-conta/guia]
2. Role até `Páginas da sua empresa` e, no cartão `Quartos e suítes`, clique em `Começar` (ou `Gerenciar`, se já tiver itens). [guia=fora]
3. Clique em `Nova seção`, dê um nome e salve. [guia=fora]
4. Na seção, clique em `Novo quarto`, preencha e clique em `Salvar`. [guia=fora]

## campos do quarto

- `Nome do quarto` (obrigatório) e `Subtítulo` curto (ex.: até 3 pessoas, vista para o mar).
- `Descrição`: camas e o que torna o quarto especial.
- `Diária` (valor por noite); `Diária promocional` só em promoção — a diária normal aparece riscada.
- `O que o quarto tem`: digite cada item (Wi-Fi, ar-condicionado, cozinha, varanda) e clique em adicionar.
- fotos: até 8; a primeira é a capa.

## seções e itens

- seção: `Nova seção` → nome (ex.: Suítes, Chalés, Quartos standard) → `Salvar`; a nova seção entra no fim da lista. Cada seção tem a chave para publicar ou tirar do ar e os botões `Novo quarto`, `Renomear` e excluir.
- só o que está com `Publicado no site` ligado aparece no perfil. A chave ao lado de cada quarto tira do ar sem apagar (fotos e dados ficam salvos); há também editar e excluir.

## resultado

na ficha da hospedagem, o bloco `Quartos e suítes` tem abas por seção; cada quarto mostra foto, subtítulo, descrição, comodidades e diária por noite (promocional em destaque, antiga riscada). O botão de WhatsApp abre conversa para reservar. No celular, a ficha ganha a aba de quartos. Recomendado: manter diárias e fotos atualizadas.

## fontes

- `portal-cidade/frontend/src/app/minha-conta/guia/ConteudoDoLayout.tsx:95-110,240-256,327`
