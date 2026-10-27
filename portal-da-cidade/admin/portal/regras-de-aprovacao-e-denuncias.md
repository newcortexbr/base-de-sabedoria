---
id: regras-de-aprovacao-e-denuncias
titulo: "escolher as regras de aprovação e denúncias do portal"
publico:
  - admin
modulo: aprovações
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - regras
  - aprovacao
  - denuncia
  - moderacao
  - editar
  - painel
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - JYDoZB_vyX8
---

## objetivo

Escolha as regras de aprovação e de denúncia de conteúdo do portal.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No começo do menu da esquerda, clique em `Aprovações e Denúncias`. [guia=menu:/painel/aprovacoes]
2. No quadro `Como funciona neste portal`, marque ou desmarque `Exigir minha aprovação antes de publicar`. [t=19] [guia=aprovacoes-config:aprovacao]
3. Marque ou desmarque `Permitir que visitantes denunciem conteúdo`. [t=33] [guia=aprovacoes-config:denuncias]

## resultado

Cada chave é salva ao ser alterada. A primeira controla a aprovação dos envios abrangidos pela fila; a segunda controla o recurso de denunciar conteúdo.

## fontes

- `frontend/src/app/painel/aprovacoes/ConfigDaFila.tsx:99`

- Catálogo: `portal-da-cidade/videos.json`; legendas: `videos/legendas/JYDoZB_vyX8.srt`.

## lacunas

- Conferido por leitura do código no HEAD b2f62d3f. Sem execução do produto ou validação visual nesta auditoria.
