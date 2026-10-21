---
id: ac-lives-horario-fuso
titulo: "em que horário (fuso) as lives acontecem"
publico:
  - cliente
modulo: lives
aba: Lives
tipo_problema:
  - horario-da-live
  - fuso-horario
  - horario-errado
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
entender o horário mostrado nas lives.

## pré-requisitos
- nenhum.

## explicação
- todos os horários das lives são mostrados no horário de Brasília. o cartão da live diz, por exemplo, `Terça-feira, 21 de outubro · 19h · horário de Brasília`.
- se você está em um estado com fuso diferente (por exemplo, Amazonas, Acre, Mato Grosso, Rondônia, Roraima, Mato Grosso do Sul ou Fernando de Noronha), converta para o seu horário local.
- se você adicionar a live ao Google Agenda (ou assinar a agenda), o calendário converte para o fuso do seu aparelho.

## resultado
você sabe a hora certa de entrar.

## desvios
- se a live mudar de horário, a agenda da área do cliente mostra o horário novo. quem assinou a agenda recebe a mudança sozinho.

## quando pedir ajuda
se o horário do cartão e o do seu calendário não baterem, abra um chamado em `Suporte`.

## fontes
- `src/domain/lives/agenda.ts:7`
- `src/domain/lives/agenda.ts:8`
- `src/app/(cliente)/negocios/[licenseId]/lives/page.tsx:75`
- `src/app/(cliente)/negocios/[licenseId]/lives/LivesCliente.tsx:236`

## lacunas
a lista de estados com fuso diferente é conhecimento geral, não texto da tela.
