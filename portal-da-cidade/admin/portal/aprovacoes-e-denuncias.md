---
id: aprovacoes-e-denuncias
titulo: aprovar conteúdo de clientes e ver denúncias
publico:
  - admin
modulo: aprovações
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - aprovar
  - aprovacao
  - denuncia
  - moderacao
  - pendente
  - ver
  - painel
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - JYDoZB_vyX8
---

## objetivo

Confira os envios dos clientes antes de aprová-los para publicação.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No começo do menu da esquerda, clique em `Aprovações e Denúncias`. [guia=menu:/painel/aprovacoes]
2. Clique na aba `Aprovações`. [t=54] [guia=aprovacoes-aba:aprovacoes]
3. Clique em `Ver detalhe` no envio que deseja conferir. [t=58] [guia=aprovacoes.ver-detalhe]
4. Feche o detalhe em `Fechar`.  [guia=aprovacoes.fechar-detalhe]
5. Na linha do envio conferido, clique em `Aprovar`. [t=64] [guia=aprovacoes.aprovar]

## resultado

O envio aprovado deixa a fila. Para recusar, veja “recusar um envio que aguarda aprovação”; para denúncias de conteúdo, veja “ver e filtrar as denúncias do portal”.

## fontes

- `frontend/src/app/painel/aprovacoes/AprovacoesClient.tsx:244`

- Catálogo: `portal-da-cidade/videos.json`; legendas: `videos/legendas/JYDoZB_vyX8.srt`.

## lacunas

- Conferido por leitura do código no HEAD b2f62d3f. Sem execução do produto ou validação visual nesta auditoria.
