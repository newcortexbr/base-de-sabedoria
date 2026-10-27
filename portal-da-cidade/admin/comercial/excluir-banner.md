---
id: excluir-banner
titulo: "excluir um banner publicitário"
publico:
  - admin
modulo: banners
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - excluir
  - banner
  - publicidade
  - despublicar
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - BqIfSq7bVXM
---

## objetivo

Aqui você apaga o cadastro de um banner. Para apenas tirá-lo do ar e guardar os dados, use “ativar ou desativar um banner publicitário”.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Conteúdo` do menu, clique em `Banners Publicitários`. [t=10] [guia=menu:/painel/guia/banners]
2. Digite o título do banner em `Buscar por título…`. [t=19] [guia=guia-banners.busca]
3. Clique em `Excluir` na linha do banner. [t=40] [guia=guia-banners.excluir]
4. Na janela `Confirmar ação`, clique em `Excluir` para confirmar a exclusão. [guia=confirmacao.confirmar]

## resultado

O banner é removido da lista; o painel mostra `Banner excluído`.

## quando pedir ajuda

Peça ajuda se a tela não carregar ou se a ação mostrar erro. Informe a mensagem e a ação tentada, sem enviar senha.

## fontes

- Código do portal no HEAD `b2f62d3f`; base revisada a partir de `814f097`.
- `frontend/src/app/painel/guia/banners/page.tsx:146`.
- `frontend/src/components/painel/ModalAvisoConfirmacao.tsx:153`.
- Vídeo `BqIfSq7bVXM`: catálogo `portal-da-cidade/videos.json`, transcrição `videos/conteudo/BqIfSq7bVXM.md` e legenda `videos/legendas/BqIfSq7bVXM.srt`.

## lacunas

Não houve validação no navegador nem execução do produto. As regras e os rótulos descritos foram conferidos por leitura do código. Tempos indicam o trecho da transcrição/legenda, não uma reprodução validada da interface atual.

O vídeo cita Excluir, mas não demonstra a janela de confirmação. Não há tempo atribuído ao que não foi demonstrado.
