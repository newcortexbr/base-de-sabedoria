---
id: voz-do-povo-tratar-denuncias
titulo: "tratar uma denúncia da Voz do Povo"
publico:
  - admin
modulo: utilidade
categoria: utilidade
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - 1a0wZmdXDLk
---

## objetivo

Atualize a situação de um relato sem alterar o texto do morador.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Conteúdo` do menu, em `A Voz do Povo`, clique em `Denúncias`. [t=53] [guia=menu:/painel/utilidade/denuncias]
2. Para começar o atendimento, clique em `Em análise` na linha do relato. [t=64] [guia=utilidade-denuncias:em_analise]

## resultado

O relato fica Em análise. A lista Em aberto reúne Recebida e Em análise.

## marcar como resolvido

1. Na parte `Conteúdo` do menu, em `A Voz do Povo`, clique em `Denúncias`. [t=53] [guia=menu:/painel/utilidade/denuncias]
2. Clique em `Resolvida` na linha do relato. [t=64] [guia=utilidade-denuncias:resolvida]

## arquivar sem resolver

1. Na parte `Conteúdo` do menu, em `A Voz do Povo`, clique em `Denúncias`. [t=53] [guia=menu:/painel/utilidade/denuncias]
2. Clique em `Arquivar` na linha do relato. [t=64] [guia=utilidade-denuncias:arquivada]

## desfazer a última ação

1. Logo após uma alteração na lista, clique em `Desfazer`. [guia=utilidade-denuncias.desfazer]

## explicação

- Resolvida e Arquivada deixam de aparecer em Em aberto; use o filtro para consultá-las.
- No detalhe do relato, a mudança é pelo seletor `Status`.
- O painel desta caixa de entrada não oferece ignorar, excluir ou bloquear. Essas ações pertencem às denúncias de conteúdo, em `Aprovações e Denúncias`.

## fontes

- `frontend/src/app/painel/utilidade/denuncias/page.tsx:30`
- `frontend/src/app/painel/utilidade/denuncias/[id]/page.tsx:97`

- Catálogo: `portal-da-cidade/videos.json`; legendas: `videos/legendas/1a0wZmdXDLk.srt`.

## lacunas

- Conferido por leitura do código no HEAD b2f62d3f. Sem execução do produto ou validação visual nesta auditoria.

