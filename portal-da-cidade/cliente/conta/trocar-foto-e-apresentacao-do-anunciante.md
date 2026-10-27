---
id: cliente-trocar-foto-e-apresentacao-anunciante
titulo: "trocar minha foto e o texto 'Sobre você' (anunciante pessoa física)"
publico:
  - cliente
modulo: conta
categoria: conta
aba: Meus dados
tipo_problema:
  - trocar minha foto de anunciante
  - mudar o sobre você
  - apresentação nos anúncios
tags:
  - editar
  - foto
  - perfil
  - anunciante
  - classificado
  - pessoa fisica
  - bio
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
---

## objetivo

trocar a foto e a apresentação que aparecem junto dos seus anúncios no site.

## pré-requisitos

- estar logado como pessoa física (anunciante de Classificados).

## passos

1. No menu da esquerda, clique em `Meus dados`. [guia=menu:/minha-conta/meus-dados]
2. No quadro `Foto e apresentação`, clique em `Adicionar foto` (ou `Trocar foto`) e escolha a imagem. [guia=empresa.logo]
3. Em `Sobre você`, escreva quem você é e o que costuma anunciar, em poucas linhas. [guia=empresa.descricao]
4. Clique em `Salvar` no quadro `Foto e apresentação`. [guia=meus-dados.salvar-apresentacao]

## resultado

aparece "Foto e apresentação salvas." A foto e o texto aparecem junto dos seus anúncios.

## desvios

- escolheu a foto errada antes de salvar: clique em `Remover seleção`.
- nome e WhatsApp ficam no quadro `Contato` (veja "atualizar meus dados de contato").

## fontes

- `portal-cidade/frontend/src/app/minha-conta/meus-dados/ApresentacaoDoAnunciante.tsx:20-41` — quadro e mensagem.
- `portal-cidade/frontend/src/app/minha-conta/_completar/FormularioAnunciante.tsx:107-147` — campos e botão `Salvar`.
- `portal-cidade/frontend/src/app/minha-conta/minha-empresa/CamposDeEmpresa.tsx:74-83,94-110` — `Adicionar foto`/`Trocar foto`, `Sobre você`.

## lacunas

- tela não validada no navegador; limite de tamanho da foto e do texto não verificados.
- as marcas `empresa.logo` e `empresa.descricao` são as mesmas da tela `Minha empresa`.
