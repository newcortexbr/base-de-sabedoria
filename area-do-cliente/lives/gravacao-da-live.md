---
id: ac-lives-gravacao
titulo: "assistir à gravação de uma live que já passou"
publico:
  - cliente
modulo: lives
aba: Lives
tipo_problema:
  - gravacao-da-live
  - perdi-a-live
  - live-gravada
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
ver uma live que você perdeu.

## pré-requisitos
- ter um negócio com licença ativa.

## passos
1. No menu do negócio, clique em `Lives` (`/negocios/<negócio>/lives`). [guia=menu:/negocios/[licenseId]/lives]
2. Em `Agenda de lives`, volte ao mês da live com `Mês anterior` e clique no dia dela. [guia=fora]
3. No cartão da live, clique em `Assistir à gravação`. [guia=fora]

## resultado
a gravação abre no YouTube, em uma nova aba.

## desvios
- `Esta live foi encerrada e a gravação não está disponível.`: não há gravação publicada para essa live.

## quando pedir ajuda
se você precisa de uma gravação que não aparece, abra um chamado em `Suporte` com a data e o título da live.

## fontes
- `src/app/(cliente)/negocios/[licenseId]/lives/LivesCliente.tsx:122`
- `src/app/(cliente)/negocios/[licenseId]/lives/LivesCliente.tsx:130`

## lacunas
não há prazo no código para a gravação ser publicada depois da live.
