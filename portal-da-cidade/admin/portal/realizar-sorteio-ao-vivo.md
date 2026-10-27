---
id: realizar-sorteio-ao-vivo
titulo: "realizar o sorteio ao vivo e entregar o prêmio"
publico:
  - admin
modulo: sorteios
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - sorteio
  - ao vivo
  - premio
  - participante
  - entregar
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - uN4FHHHGgEs
  - REgRSXekqpA
---

## objetivo

Sorteie os ganhadores e acompanhe a entrega do prêmio.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Conteúdo` do menu, em `Sorteios`, clique em `Sorteios`. [t=17] [guia=menu:/painel/sorteios]
2. Depois do fim das inscrições, clique em `Realizar sorteio` na linha do sorteio. [guia=sorteios.realizar]
3. Se quiser transmitir em tela cheia, clique em `Tela cheia`. [t=191] [guia=sorteios-ao-vivo.tela-cheia]
4. Clique em `Sortear 1º ganhador`. [t=194] [guia=sorteios-ao-vivo.sortear]
5. No cartão do ganhador, clique em `Chamar no WhatsApp`. [t=211] [guia=sorteios-ao-vivo.whatsapp]
6. Em `Entrega do prêmio`, escolha a situação da entrega. [t=213] [guia=sorteios-ao-vivo.entrega]

## resultado

O ganhador aparece no painel. Se há mais ganhadores previstos, o botão passa ao próximo número.

## se o ganhador não responder

1. No cartão desse ganhador, clique em `Não respondeu? Sortear outro no lugar`. [t=223] [guia=sorteios-ao-vivo.substituir]

## desvios

- Ao clicar em sortear, há contagem regressiva e a roleta gira pelos participantes; o ganhador sai com confete. O cartão mostra o número da sorte e o WhatsApp. `Tela cheia` serve para transmitir na live ou em telão.
- `Entrega do prêmio` tem as situações `Aguardando contato`, `Contatado`, `Prêmio entregue` e `Não respondeu`.
- A substituição fica registrada e o portal mostra que o ganhador foi substituído por `Não respondeu`.
- O resultado aparece sozinho no portal: o sorteio fica `Sorteado`, com inscrições encerradas e o nome do ganhador de forma parcial, para proteger a privacidade.
- Se abrir antes do horário do sorteio, a lista pode pedir confirmação para antecipar. Leia o aviso antes de confirmar.
- A tela cheia depende do navegador.

## fontes

- `frontend/src/app/painel/sorteios/[id]/ao-vivo/page.tsx:110`
- `frontend/src/app/painel/sorteios/[id]/ao-vivo/page.tsx:145`

- Catálogo: `portal-da-cidade/videos.json`; legendas: `videos/legendas/uN4FHHHGgEs.srt`, `videos/legendas/REgRSXekqpA.srt`.

## lacunas

- Conferido por leitura do código no HEAD b2f62d3f. Sem execução do produto ou validação visual nesta auditoria.
