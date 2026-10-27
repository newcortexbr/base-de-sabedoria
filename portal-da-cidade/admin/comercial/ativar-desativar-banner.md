---
id: ativar-desativar-banner
titulo: "ativar ou desativar um banner publicitário"
publico:
  - admin
modulo: banners
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - ligar
  - desligar
  - banner
  - publicidade
  - despublicar
  - reativar
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - BqIfSq7bVXM
---

## objetivo

Para tirar um banner do ar sem apagá-lo, use `Desativar`. Você pode ativá-lo novamente depois.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Conteúdo` do menu, clique em `Banners Publicitários`. [t=10] [guia=menu:/painel/guia/banners]
2. Digite o título do banner em `Buscar por título…`. [t=19] [guia=guia-banners.busca]
3. Na linha do banner, clique em `Desativar`. [t=37] [guia=guia-banners.ativar-desativar]

## resultado

Após a operação, o banner permanece cadastrado e fica inativo.

## desvios

- Para colocar de volta, faça o mesmo caminho e clique em `Ativar`. A exibição também depende das datas e da aprovação.
- Banner vencido sai do site sozinho quando a data fim termina, sem precisar desativar.
- O botão de ativar ou desativar só aparece nos banners aprovados; não aprova nem quita um banner.
- Para apagar o cadastro, veja “excluir um banner publicitário”. Desativar não é excluir.

## quando pedir ajuda

Peça ajuda se a tela não carregar ou se a ação mostrar erro. Informe a mensagem e a ação tentada, sem enviar senha.

## fontes

- Código do portal no HEAD `b2f62d3f`; base revisada a partir de `814f097`.
- `frontend/src/app/painel/guia/banners/page.tsx:130`.
- `frontend/src/app/painel/guia/banners/page.tsx:364`.
- `frontend/src/app/painel/guia/banners/regras.ts`.
- Vídeo `BqIfSq7bVXM`: catálogo `portal-da-cidade/videos.json`, transcrição `videos/conteudo/BqIfSq7bVXM.md` e legenda `videos/legendas/BqIfSq7bVXM.srt`.

## lacunas

Não houve validação no navegador nem execução do produto. As regras e os rótulos descritos foram conferidos por leitura do código. Tempos indicam o trecho da transcrição/legenda, não uma reprodução validada da interface atual.
