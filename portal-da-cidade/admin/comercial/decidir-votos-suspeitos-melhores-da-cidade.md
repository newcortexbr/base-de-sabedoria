---
id: decidir-votos-suspeitos-melhores-da-cidade
titulo: "decidir sobre votos suspeitos no Melhores da Cidade"
publico:
  - admin
modulo: melhores da cidade
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - ajzmuupRJMM
---

## objetivo

Aqui você avalia os alertas de votos suspeitos. Anular tira os votos apontados do placar; manter preserva esses votos.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Conteúdo` do menu, clique em `Melhores da Cidade`. [t=13] [guia=menu:/painel/melhores-da-cidade]
2. No cartão de uma votação no ar, clique em `Votos suspeitos`. [t=83] [guia=melhores.suspeitos]
3. No alerta que deseja invalidar, clique em `Anular … votos`; o botão mostra a quantidade. [t=90] [guia=melhores-suspeitos.anular]

## manter os votos de um alerta

1. Na parte `Conteúdo` do menu, clique em `Melhores da Cidade`. [t=13] [guia=menu:/painel/melhores-da-cidade]
2. No cartão da votação no ar, clique em `Votos suspeitos`. [t=83] [guia=melhores.suspeitos]
3. No alerta, clique em `Manter, parece normal`. [t=93] [guia=melhores-suspeitos.manter]

## desfazer uma decisão

1. Na parte `Conteúdo` do menu, clique em `Melhores da Cidade`. [t=13] [guia=menu:/painel/melhores-da-cidade]
2. No cartão da votação no ar, clique em `Votos suspeitos`. [t=83] [guia=melhores.suspeitos]
3. Em `O que você já decidiu`, clique em `Desfazer` na decisão desejada. [t=95] [guia=melhores-suspeitos.desfazer]

## resultado

A decisão é gravada e os votos anulados deixam de contar no placar.

## desvios

- Depois que a votação termina, a tela bloqueia novas decisões e o desfazimento.

## quando pedir ajuda

Peça ajuda se a tela não carregar ou se a ação mostrar erro. Informe a mensagem e a ação tentada, sem enviar senha.

## fontes

- Código do portal no HEAD `b2f62d3f`; base revisada a partir de `814f097`.
- `frontend/src/app/painel/melhores-da-cidade/[id]/suspeitos/page.tsx:43`.
- `frontend/src/app/painel/melhores-da-cidade/[id]/suspeitos/page.tsx:87`.
- Vídeo `ajzmuupRJMM`: catálogo `portal-da-cidade/videos.json`, transcrição `videos/conteudo/ajzmuupRJMM.md` e legenda `videos/legendas/ajzmuupRJMM.srt`.

## lacunas

Não houve validação no navegador nem execução do produto. As regras e os rótulos descritos foram conferidos por leitura do código. Tempos indicam o trecho da transcrição/legenda, não uma reprodução validada da interface atual.
