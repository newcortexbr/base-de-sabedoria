---
id: voz-do-povo-ler-relato
titulo: "ler um relato completo da Voz do Povo"
publico:
  - admin
modulo: utilidade
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - ver
  - voz do povo
  - relato
  - denuncia
  - contato
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - 1a0wZmdXDLk
---

## objetivo

Abra o relato completo de um morador e veja os anexos e o contato, quando fornecidos.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Conteúdo` do menu, em `A Voz do Povo`, clique em `Denúncias`. [t=53] [guia=menu:/painel/utilidade/denuncias]
2. Clique em `Ver detalhes` no relato. [t=72] [guia=utilidade-denuncias.detalhes]
3. Leia o relato e os dados disponíveis no detalhe.  [t=72] [guia=utilidade-denuncia.conteudo]

## resultado

O detalhe mostra o local, o ocorrido, o texto e os anexos existentes. O contato só aparece se foi informado.

## mudar a situação pelo detalhe

1. No seletor `Status`, escolha a situação desejada.  [t=81] [guia=utilidade-denuncia.status]

O detalhe usa um seletor; os botões rápidos ficam na lista de relatos.

## fontes

- `frontend/src/app/painel/utilidade/denuncias/[id]/page.tsx:112`

- Catálogo: `portal-da-cidade/videos.json`; legendas: `videos/legendas/1a0wZmdXDLk.srt`.

## lacunas

- Conferido por leitura do código no HEAD b2f62d3f. Sem execução do produto ou validação visual nesta auditoria.
