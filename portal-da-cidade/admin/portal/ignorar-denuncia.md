---
id: ignorar-denuncia
titulo: "ignorar uma denúncia (o item continua no ar)"
publico:
  - admin
modulo: aprovações
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - denuncia
  - moderacao
  - no ar
  - desfazer
  - status
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - JYDoZB_vyX8
---

## objetivo

Encerre uma denúncia sem mexer no conteúdo.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No começo do menu da esquerda, clique em `Aprovações e Denúncias`. [guia=menu:/painel/aprovacoes]
2. Clique na aba `Denúncias`. [t=82] [guia=aprovacoes-aba:denuncias]
3. Clique na linha da denúncia. [t=84] [guia=denuncias.abrir]
4. Clique em `Ignorar denúncia`. [guia=denuncias.ignorar]
5. Na confirmação `Ignorar esta denúncia? O item continua no ar.`, clique em `Ignorar`. [guia=confirmacao.confirmar]

## resultado

Aparece `Denúncia ignorada` e ela passa para `Ignoradas`. O item segue no ar.

## perguntas comuns

**posso reabrir uma denúncia ignorada?** Não. Ignorar é definitivo.
**o denunciante é avisado?** Não.
**as outras denúncias do mesmo item?** Continuam pendentes; ignore ou decida cada uma.

## fontes

- frontend/src/app/painel/denuncias/[id]/page.tsx:15-60,93-165
- backend/denuncias/servicos.py:88-237

## lacunas

- Conferido por leitura do código no HEAD e8f43702 (wt-suporte-tool). Sem execução do produto nem validação visual.
