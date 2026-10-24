---
id: encerrar-votacao-melhores-da-cidade
titulo: "encerrar uma votação Melhores da Cidade antes do prazo"
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

Aqui você termina uma votação que está no ar antes da data prevista.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Conteúdo` do menu, clique em `Melhores da Cidade`. [t=13] [guia=menu:/painel/melhores-da-cidade]
2. No cartão da votação no ar, clique em `Encerrar agora`. [t=48] [guia=melhores.encerrar]
3. Na janela `Encerrar a votação agora?`, clique em `Encerrar e mostrar campeões`. [guia=melhores-confirmacao.confirmar]

## resultado

A ação encerra a votação e mostra os campeões, conforme a confirmação exibida pelo painel.

## desvios

- Confira a votação e o período antes de confirmar.

## quando pedir ajuda

Peça ajuda se a tela não carregar ou se a ação mostrar erro. Informe a mensagem e a ação tentada, sem enviar senha.

## fontes

- Código do portal no HEAD `b2f62d3f`; base revisada a partir de `814f097`.
- `frontend/src/app/painel/melhores-da-cidade/page.tsx:245`.
- `frontend/src/app/painel/melhores-da-cidade/ModalConfirmar.tsx:27`.
- Vídeo `ajzmuupRJMM`: catálogo `portal-da-cidade/videos.json`, transcrição `videos/conteudo/ajzmuupRJMM.md` e legenda `videos/legendas/ajzmuupRJMM.srt`.

## lacunas

Não houve validação no navegador nem execução do produto. As regras e os rótulos descritos foram conferidos por leitura do código. Tempos indicam o trecho da transcrição/legenda, não uma reprodução validada da interface atual.

O vídeo mostra Encerrar agora, mas não demonstra o botão de confirmação. Não há tempo atribuído ao que não foi demonstrado.
