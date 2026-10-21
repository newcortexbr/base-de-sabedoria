---
id: ac-lives-adicionar-ao-calendario
titulo: "colocar as lives no meu calendário (Google Agenda, Outlook, Apple)"
publico:
  - cliente
modulo: lives
aba: Lives
tipo_problema:
  - adicionar-ao-calendario
  - google-agenda
  - lembrete-da-live
  - outlook
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
receber as lives no seu calendário, uma de cada vez ou todas automaticamente.

## pré-requisitos
- ter um negócio com licença ativa.

## passos
para guardar só uma live:
1. Em `Lives` (`/negocios/<negócio>/lives`), no cartão da live, clique em `Adicionar à agenda`. [guia=menu:/negocios/[licenseId]/lives]
2. No Google Agenda, salve o evento. [guia=fora]

para assinar todas as lives:
1. No quadro `Inscreva-se e acompanhe as próximas lives`, clique em `Inscrever-se nas lives`. [guia=fora]
2. Aparece `Sua agenda de lives está pronta`. Clique em `Abrir no Google Agenda` e confirme. [guia=fora]
3. Se usa Outlook, Apple ou outro, clique em `Copiar endereço (Outlook, Apple e outros)` e cole esse endereço na opção de assinar calendário por link do seu aplicativo. [guia=fora]

## resultado
no Google Agenda aparece a agenda “Lives do Portal da Cidade”. lives novas, mudanças de horário e cancelamentos chegam sozinhos. o Google atualiza algumas vezes por dia.

## desvios
- se você compartilhou o endereço sem querer, clique em `Desconectar e gerar novo endereço` e depois em `Confirmar`. o endereço atual para de funcionar e a agenda antiga deixa de receber lives.
- `Não foi possível copiar. Selecione o endereço e copie manualmente.`: selecione o texto e copie com o mouse ou o dedo.
- `Seu acesso às lives não está disponível agora.`: o negócio pode estar suspenso.
- mudanças podem demorar algumas horas para aparecer no calendário assinado.

## quando pedir ajuda
se o calendário assinado parar de atualizar, gere um endereço novo; se ainda assim não funcionar, abra um chamado em `Suporte`.

## fontes
- `src/app/(cliente)/negocios/[licenseId]/lives/LivesCliente.tsx:143`
- `src/app/(cliente)/negocios/[licenseId]/lives/LivesCliente.tsx:221`
- `src/app/(cliente)/negocios/[licenseId]/lives/LivesCliente.tsx:232`
- `src/app/(cliente)/negocios/[licenseId]/lives/LivesCliente.tsx:236`
- `src/app/(cliente)/negocios/[licenseId]/lives/LivesCliente.tsx:249`
- `src/app/(cliente)/negocios/[licenseId]/lives/LivesCliente.tsx:253`
- `src/app/(cliente)/negocios/[licenseId]/lives/LivesCliente.tsx:263`
- `src/app/(cliente)/negocios/[licenseId]/lives/LivesCliente.tsx:274`
- `src/app/(cliente)/negocios/[licenseId]/lives/LivesCliente.tsx:278`
- `src/app/(cliente)/negocios/[licenseId]/lives/acoes.ts:33`

## lacunas
- o nome da agenda “Lives do Portal da Cidade” está fixo no texto da tela.
- o caminho exato de "assinar calendário por link" em cada aplicativo não está no código.
