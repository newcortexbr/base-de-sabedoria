---
id: radar-categorias
titulo: "mudar as categorias do Radar de Preços"
publico:
  - admin
modulo: radar
categoria: radar
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - editar
  - categoria
  - radar
  - ordenar
  - nome
  - ligar
  - desligar
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - hrri-AfQihQ
---

## objetivo

Mude o nome, o ícone, a ordem ou a visibilidade de uma categoria do Radar.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Conteúdo` do menu, em `Radar de Preços`, clique em `Categorias`. [guia=menu:/painel/radar/categorias]
2. Clique no lápis da categoria. [t=21] [guia=radar-categorias.editar]
3. Se quiser renomear, altere `Nome *`.  [t=21] [guia=radar-categorias.nome]
4. Se quiser trocar a imagem, escolha outro `Ícone`.  [t=23] [guia=radar-categorias.icone]
5. Se quiser mudar a posição, altere `Ordem` com um número inteiro sem sinal.  [t=23] [guia=radar-categorias.ordem]
6. Para esconder a categoria, desmarque `Ativa`.  [t=28] [guia=radar-categorias.ativa]
7. Clique em `Salvar`. [t=31] [guia=radar-categorias.salvar]

## resultado

As alterações da categoria são salvas. Para voltar a mostrá-la, edite de novo, marque Ativa e salve.

## explicação

O Radar tem três categorias fixas: Supermercados, Farmácias e Postos de combustível. A tela permite editar essas categorias; não oferece criar ou excluir.

## fontes

- `frontend/src/app/painel/radar/categorias/page.tsx:42`
- `frontend/src/app/painel/radar/categorias/page.tsx:132`

- Catálogo: `portal-da-cidade/videos.json`; legendas: `videos/legendas/hrri-AfQihQ.srt`.

## lacunas

- Conferido por leitura do código no HEAD b2f62d3f. Sem execução do produto ou validação visual nesta auditoria.
