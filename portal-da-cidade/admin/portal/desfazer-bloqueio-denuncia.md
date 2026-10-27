---
id: desfazer-bloqueio-denuncia
titulo: "desfazer o bloqueio feito por uma denúncia (ver bloqueados)"
publico:
  - admin
modulo: aprovações
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - desbloquear
  - desfazer
  - bloquear
  - denuncia
  - moderacao
  - no ar
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - JYDoZB_vyX8
---

## objetivo

Libere de novo o responsável bloqueado.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No começo do menu da esquerda, clique em `Aprovações e Denúncias`. [guia=menu:/painel/aprovacoes]
2. Clique na aba `Denúncias`. [guia=aprovacoes-aba:denuncias]
3. No filtro `Status`, escolha `Resolvidas`. [guia=denuncias.filtro-status]
4. Clique na denúncia que gerou o bloqueio. [guia=denuncias.abrir]
5. Clique em `Desfazer bloqueio`. [guia=denuncias.desfazer-bloqueio]
6. Na confirmação, clique em `Desbloquear`. [guia=confirmacao.confirmar]

## resultado

Aparece `Bloqueio desfeito`. O que saiu do ar pelo bloqueio volta ao ar, e, sem outro bloqueio ativo, ele volta a poder publicar e contratar.

## perguntas comuns

**onde vejo todos os bloqueados?** O portal não tem lista de bloqueados. O botão só aparece na denúncia que fez o bloqueio.
**tudo volta ao ar?** Volta o que ainda estiver como o bloqueio deixou. O que foi mudado ou apagado depois não volta.

## fontes

- frontend/src/app/painel/denuncias/[id]/page.tsx:15-60,93-165
- backend/denuncias/servicos.py:88-237

## lacunas

- Conferido por leitura do código no HEAD e8f43702 (wt-suporte-tool). Sem execução do produto nem validação visual.
