---
id: desfazer-bloqueio-denuncia
titulo: "desfazer o bloqueio de uma conta denunciada"
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

Reverta o bloqueio aplicado pela denúncia.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No começo do menu da esquerda, clique em `Aprovações e Denúncias`. [guia=menu:/painel/aprovacoes]
2. Clique na aba `Denúncias`. [t=82] [guia=aprovacoes-aba:denuncias]
3. Escolha `Resolvidas` no filtro `Status`. [guia=denuncias.filtro-status]
4. Abra a denúncia que aplicou o bloqueio. [guia=denuncias.abrir]
5. Clique em `Desfazer bloqueio`.  [guia=denuncias.desfazer-bloqueio]
6. Na confirmação, clique em `Desbloquear`. [guia=confirmacao.confirmar]

## resultado

O bloqueio é desfeito. O botão aparece quando há um bloqueio associado àquela denúncia.

## fontes

- `frontend/src/app/painel/denuncias/[id]/page.tsx:176`

- Catálogo: `portal-da-cidade/videos.json`; legendas: `videos/legendas/JYDoZB_vyX8.srt`.

## lacunas

- Conferido por leitura do código no HEAD b2f62d3f. Sem execução do produto ou validação visual nesta auditoria.
