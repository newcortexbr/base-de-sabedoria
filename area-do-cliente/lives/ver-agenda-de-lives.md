---
id: ac-lives-ver-agenda
titulo: "ver a agenda das lives"
publico:
  - cliente
modulo: lives
aba: Lives
tipo_problema:
  - agenda-de-lives
  - proxima-live
  - quando-tem-live
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
saber quando são as próximas lives (encontros ao vivo).

## pré-requisitos
- ter um negócio com licença ativa.

## passos
1. No menu da esquerda, clique em `Meus negócios` (`/negocios`) e depois em `Acessar meu negócio`.
2. No menu do negócio, clique em `Lives` (`/negocios/<negócio>/lives`).
3. Veja o destaque `Próxima live`, com dia, hora e título.
4. Em `Agenda de lives`, use as setas `Mês anterior` e `Próximo mês` para trocar de mês.
5. Clique em um dia com ponto azul para ver a live daquele dia.

## resultado
você vê a lista `Próximas lives` ou `Lives do dia`, com data, horário e o botão de acesso.

## explicação
- `Os dias com ponto azul têm live programada.`
- para voltar à lista completa depois de escolher um dia, clique em `Ver todas`.
- a página `Início` também mostra a `Próxima live`.

## desvios
- `Ainda não há lives programadas. Avisaremos quando a próxima for publicada.`: não há live marcada.
- `Nenhuma live neste dia.`: escolha outro dia.
- `As lives estão indisponíveis enquanto houver pendência financeira.`: o negócio está suspenso. o acesso volta quando o pagamento for confirmado.

## quando pedir ajuda
se a página de lives der erro, abra um chamado em `Suporte`.

## fontes
- `src/app/(cliente)/negocios/[licenseId]/labels.ts:180`
- `src/app/(cliente)/negocios/[licenseId]/lives/page.tsx:94`
- `src/app/(cliente)/negocios/[licenseId]/lives/page.tsx:102`
- `src/app/(cliente)/negocios/[licenseId]/lives/LivesCliente.tsx:157`
- `src/app/(cliente)/negocios/[licenseId]/lives/LivesCliente.tsx:328`
- `src/app/(cliente)/negocios/[licenseId]/lives/LivesCliente.tsx:385`
- `src/app/(cliente)/negocios/[licenseId]/lives/LivesCliente.tsx:390`
- `src/app/(cliente)/negocios/[licenseId]/lives/LivesCliente.tsx:400`
- `src/app/(cliente)/inicio/page.tsx:476`

## lacunas
- as lives são cadastradas por produto; não foi conferido se todas aparecem para todos os negócios do mesmo produto (a lógica indica que sim).
- não confirmado se o cliente recebe aviso por e-mail de live nova.
