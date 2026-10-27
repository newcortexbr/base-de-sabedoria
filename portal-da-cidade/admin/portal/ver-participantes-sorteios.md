---
id: ver-participantes-sorteios
titulo: "ver e exportar participantes de sorteios"
publico:
  - admin
modulo: sorteios
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - ver
  - exportar
  - filtrar
  - sorteio
  - participante
  - lote
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - uN4FHHHGgEs
---

## objetivo

Consulte os participantes e baixe a lista filtrada.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Conteúdo` do menu, em `Sorteios`, clique em `Participantes de Sorteios`. [t=174] [guia=menu:/painel/sorteios/participantes]
2. Se quiser, escreva o nome ou telefone em `Buscar`.  [guia=sorteios-participantes.busca]
3. Clique em `CSV` para baixar a lista.  [t=180] [guia=sorteios-participantes.csv]

## resultado

O arquivo CSV contém os participantes conforme os filtros aplicados.

## baixar em Excel

1. Na mesma tela, clique em `Excel` em vez de `CSV`.  [t=180] [guia=sorteios-participantes.excel]

O download fica indisponível quando não há participantes no resultado.

## fontes

- `frontend/src/app/painel/sorteios/participantes/page.tsx:54`
- `frontend/src/app/painel/sorteios/participantes/page.tsx:132`

- Catálogo: `portal-da-cidade/videos.json`; legendas: `videos/legendas/uN4FHHHGgEs.srt`.

## lacunas

- Conferido por leitura do código no HEAD b2f62d3f. Sem execução do produto ou validação visual nesta auditoria.
