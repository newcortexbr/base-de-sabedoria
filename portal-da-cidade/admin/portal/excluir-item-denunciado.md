---
id: excluir-item-denunciado
titulo: "tirar do ar o conteúdo de uma denúncia"
publico:
  - admin
modulo: aprovações
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - JYDoZB_vyX8
---

## objetivo

O item é apagado do site e não pode ser recuperado por esta ação.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No começo do menu da esquerda, clique em `Aprovações e Denúncias`. [guia=menu:/painel/aprovacoes]
2. Clique na aba `Denúncias`. [t=82] [guia=aprovacoes-aba:denuncias]
3. Clique na linha da denúncia pendente. [t=84] [guia=denuncias.abrir]
4. Clique em `Excluir item`. [t=93] [guia=denuncias.excluir-item]
5. Na confirmação, clique em `Excluir`. [guia=confirmacao.confirmar]

## resultado

O item é apagado do site e não pode ser recuperado por esta ação.

## fontes

- `frontend/src/app/painel/denuncias/[id]/page.tsx:24`
- `frontend/src/app/painel/denuncias/[id]/page.tsx:158`

- Catálogo: `portal-da-cidade/videos.json`; legendas: `videos/legendas/JYDoZB_vyX8.srt`.

## lacunas

- Conferido por leitura do código no HEAD b2f62d3f. Sem execução do produto ou validação visual nesta auditoria.
