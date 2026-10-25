---
id: recusar-envio-para-aprovacao
titulo: "recusar um envio que aguarda aprovação"
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

Recuse um envio e informe o motivo.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No começo do menu da esquerda, clique em `Aprovações e Denúncias`. [guia=menu:/painel/aprovacoes]
2. Clique na aba `Aprovações`. [t=54] [guia=aprovacoes-aba:aprovacoes]
3. Na linha do envio, clique em `Recusar`. [t=69] [guia=aprovacoes.recusar]
4. Escreva o motivo da recusa no campo de texto. [guia=aprovacoes.motivo]
5. Clique em `Confirmar recusa`. [guia=aprovacoes.confirmar-recusa]

## resultado

O envio é recusado com o motivo informado.

## fontes

- `frontend/src/app/painel/aprovacoes/AprovacoesClient.tsx:255`
- `frontend/src/app/painel/aprovacoes/AprovacoesClient.tsx:432`

- Catálogo: `portal-da-cidade/videos.json`; legendas: `videos/legendas/JYDoZB_vyX8.srt`.

## lacunas

- Conferido por leitura do código no HEAD b2f62d3f. Sem execução do produto ou validação visual nesta auditoria.
