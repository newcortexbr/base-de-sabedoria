---
id: admin-categorias-de-classificados
titulo: "criar categorias de classificados"
publico:
  - admin
modulo: classificados
categoria: admin
aba: nao-se-aplica
tipo_problema:
  - categoria de anúncio
  - subcategoria de classificados
  - criar categoria classificados
tags:
  - criar
  - categoria
  - classificado
  - anuncio
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - Ps1cgdLQ1FI
---

## objetivo

Aqui você cria uma categoria para organizar os anúncios classificados.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Conteúdo` do menu, em `Classificados`, clique em `Categorias`. [t=66] [guia=menu:/painel/classificados/categorias]
2. Clique em `+ Nova Categoria`. [guia=classificados-categorias.nova]
3. Preencha `Nome *`. [guia=classificados-categorias.nome]
4. Se quiser, escolha `Ícone`. [guia=classificados-categorias.icone]
5. Deixe `Ativa` marcada para cadastrar uma categoria ativa. [guia=classificados-categorias.ativa]
6. Escolha `Cor`. [guia=classificados-categorias.cor]
7. Clique em `Salvar`. [guia=classificados-categorias.salvar]

## resultado

A categoria entra na lista com o estado escolhido em `Ativa`.

## desvios

- Para subdividir uma categoria, veja “criar uma subcategoria de classificados”.
- Excluir uma categoria deixa os anúncios vinculados sem categoria.

## tela
- as categorias organizam as seções (ex.: imóveis, veículos, eletrônicos). cada uma tem subcategorias, mostra quantos anúncios tem e pode ser ativada ou desativada.

## quando pedir ajuda

Peça ajuda se a tela não carregar ou se a ação mostrar erro. Informe a mensagem e a ação tentada, sem enviar senha.

## fontes

- Código do portal no HEAD `b2f62d3f`; base revisada a partir de `814f097`.
- `frontend/src/app/painel/classificados/categorias/page.tsx:72`.
- `frontend/src/app/painel/classificados/categorias/page.tsx:216`.
- Vídeo `Ps1cgdLQ1FI`: catálogo `portal-da-cidade/videos.json`, transcrição `videos/conteudo/Ps1cgdLQ1FI.md` e legenda `videos/legendas/Ps1cgdLQ1FI.srt`.

## lacunas

Não houve validação no navegador nem execução do produto. As regras e os rótulos descritos foram conferidos por leitura do código. Tempos indicam o trecho da transcrição/legenda, não uma reprodução validada da interface atual.
