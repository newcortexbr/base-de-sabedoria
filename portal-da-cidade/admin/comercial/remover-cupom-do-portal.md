---
id: remover-cupom-do-portal
titulo: "remover um cupom do portal"
publico:
  - admin
modulo: cupons
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - remover
  - excluir
  - cupom
  - empresa
  - guia
  - desconto
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - pBHdF3bd1QI
---

## objetivo

Aqui você apaga o cupom de uma empresa. A empresa continua cadastrada no Guia.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Conteúdo` do menu, em `Guia Comercial`, clique em `Cupons de Desconto`. [t=9] [guia=menu:/painel/cupons]
2. Clique em `Remover` na linha do cupom. [t=22] [guia=cupons.remover]
3. Na janela que pergunta se deseja remover o cupom, clique em `Remover`. [guia=confirmacao.confirmar]

## resultado

O cupom sai da lista, e o painel mostra `Cupom removido`.

## quando pedir ajuda

Peça ajuda se a tela não carregar ou se a ação mostrar erro. Informe a mensagem e a ação tentada, sem enviar senha.

## fontes

- Código do portal no HEAD `b2f62d3f`; base revisada a partir de `814f097`.
- `frontend/src/app/painel/cupons/page.tsx:109`.
- `frontend/src/app/painel/cupons/page.tsx:202`.
- `frontend/src/components/painel/ModalAvisoConfirmacao.tsx:153`.
- Vídeo `pBHdF3bd1QI`: catálogo `portal-da-cidade/videos.json`, transcrição `videos/conteudo/pBHdF3bd1QI.md` e legenda `videos/legendas/pBHdF3bd1QI.srt`.

## lacunas

Não houve validação no navegador nem execução do produto. As regras e os rótulos descritos foram conferidos por leitura do código. Tempos indicam o trecho da transcrição/legenda, não uma reprodução validada da interface atual.

O vídeo cita Remover, mas não demonstra a confirmação. Não há tempo atribuído ao que não foi demonstrado.
