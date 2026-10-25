---
id: ver-denuncias
titulo: "ver e filtrar as denúncias do portal"
publico:
  - admin
modulo: aprovações
categoria: admin
aba: nao-se-aplica
tipo_problema:
  - operacao
  - visitante reclamou de um anúncio
  - reclamação de visitante
  - reclamaram de um anúncio
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - JYDoZB_vyX8
---

## objetivo

Filtre as denúncias de conteúdo e abra seus detalhes.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No começo do menu da esquerda, clique em `Aprovações e Denúncias`. [guia=menu:/painel/aprovacoes]
2. Clique na aba `Denúncias`. [t=82] [guia=aprovacoes-aba:denuncias]
3. No filtro `Status`, escolha `Pendentes`, `Resolvidas` ou `Ignoradas`. [guia=denuncias.filtro-status]
4. No filtro `Módulo`, escolha a parte do portal que deseja consultar. [guia=denuncias.filtro-modulo]
5. Clique na linha da denúncia. [t=84] [guia=denuncias.abrir]
6. Se o conteúdo ainda existir, clique em `Ver página denunciada`. [t=87] [guia=denuncias.ver-pagina]

## resultado

Você vê o item, o motivo e a descrição. Abrir a denúncia não exclui conteúdo nem bloqueia o responsável.

## fontes

- `frontend/src/app/painel/denuncias/ListaDeDenuncias.tsx:65`
- `frontend/src/app/painel/denuncias/[id]/page.tsx:101`

- Catálogo: `portal-da-cidade/videos.json`; legendas: `videos/legendas/JYDoZB_vyX8.srt`.

## lacunas

- Conferido por leitura do código no HEAD b2f62d3f. Sem execução do produto ou validação visual nesta auditoria.

