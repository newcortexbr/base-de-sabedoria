---
id: admin-insights-de-vaga
titulo: "ver quantas pessoas viram uma vaga"
publico:
  - admin
modulo: vagas
categoria: admin
aba: nao-se-aplica
tipo_problema:
  - insights da vaga
  - visualizações da vaga
  - quantas pessoas viram
  - quando a vaga expira
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
aqui você vê os números de uma vaga: visualizações, há quantos dias está no ar e quando expira.

## pré-requisitos

- Ter acesso de administrador ao painel.

## passos

1. No menu da esquerda, clique em `Vagas de Emprego` e depois em `Listar Vagas`. [guia=menu:/painel/vagas]
2. Na linha da vaga, clique em `Insights`. [guia=fora]

## resultado
a tela mostra as visualizações totais, a média por dia, os dias no ar, a data de publicação, os dias restantes e a data em que a vaga sai do ar sozinha.

## desvios

- Para mudar a vaga, clique em `Editar vaga` nessa mesma tela.

## quando pedir ajuda

peça ajuda se os números não carregarem.

## fontes

- `portal-cidade/frontend/src/app/painel/vagas/page.tsx:257` — link "Insights".
- `suporte-kb/mapa/admin/telas/painel-vagas-id-insights.md` — campos da tela.

## lacunas

tela não validada no navegador nesta tarefa.
