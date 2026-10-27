---
id: editar-banner
titulo: "editar um banner publicitário"
publico:
  - admin
modulo: banners
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - editar
  - banner
  - publicidade
  - imagem
  - link
  - periodo
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - BqIfSq7bVXM
---

## objetivo

Aqui você altera a imagem, o destino, a posição e o período de um banner cadastrado.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Conteúdo` do menu, clique em `Banners Publicitários`. [t=10] [guia=menu:/painel/guia/banners]
2. Digite o título do banner em `Buscar por título…`. [t=19] [guia=guia-banners.busca]
3. Clique em `Editar` na linha do banner. [t=103] [guia=guia-banners.editar]
4. Se quiser trocar o nome, altere `Título *`. [guia=guia-banners-cadastrar.titulo]
5. Se quiser trocar a arte, envie o arquivo em `Imagem`. [t=104] [guia=guia-banners-cadastrar.imagem]
6. Se quiser trocar o endereço do clique, altere `URL de Destino`. [guia=guia-banners-cadastrar.url-destino]
7. Se quiser mudar o local de exibição, abra `Posição *`. [t=106] [guia=guia-banners-cadastrar.posicao]
8. Escolha a nova posição na lista aberta. [guia=guia-banners-cadastrar.posicao-lista]
9. Se quiser mudar o começo da exibição, altere `Data início`. [t=106] [guia=guia-banners-cadastrar.data-inicio]
10. Se quiser mudar o fim da exibição, altere `Data fim`. [t=106] [guia=guia-banners-cadastrar.data-fim]
11. Clique em `Salvar Alterações`. [guia=guia-banners-cadastrar.salvar]

## resultado

As mudanças são enviadas ao salvar. Se aparecer um erro, não considere a alteração concluída.

## desvios

- Mudar a posição pode mostrar campos próprios daquele local, como `Categoria do Guia`.
- A prévia ajuda a localizar a posição antes de salvar.

## quando pedir ajuda

Peça ajuda se a tela não carregar ou se a ação mostrar erro. Informe a mensagem e a ação tentada, sem enviar senha.

## fontes

- Código do portal no HEAD `b2f62d3f`; base revisada a partir de `814f097`.
- `frontend/src/app/painel/guia/banners/[id]/editar/page.tsx:231`.
- `frontend/src/app/painel/guia/banners/[id]/editar/page.tsx:388`.
- Vídeo `BqIfSq7bVXM`: catálogo `portal-da-cidade/videos.json`, transcrição `videos/conteudo/BqIfSq7bVXM.md` e legenda `videos/legendas/BqIfSq7bVXM.srt`.

## lacunas

Não houve validação no navegador nem execução do produto. As regras e os rótulos descritos foram conferidos por leitura do código. Tempos indicam o trecho da transcrição/legenda, não uma reprodução validada da interface atual.
