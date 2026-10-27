---
id: desligar-modulo-sorteios
titulo: "desligar o módulo Sorteios"
publico:
  - admin
modulo: sorteios
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - desligar
  - sorteio
  - modulo
  - no ar
  - painel
  - mostrar
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
---

## objetivo

Esconda toda a seção de Sorteios sem apagar os cadastros.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Sistema` do menu, em `Configurações`, clique em `Módulos do Portal`. [guia=menu:/painel/configuracoes/modulos]
2. Clique na chave `Sorteios` para deixá-la desligada.  [guia=configuracoes-modulos.sorteios]
3. Clique em `Salvar módulos`. [guia=configuracoes-modulos.salvar]
4. No aviso `Isto vai tirar do ar: Sorteios`, clique em `Confirmar e desligar`. [guia=configuracoes-modulos.confirmar-desligar]

## resultado

A seção some da navegação pública e do painel; os dados ficam guardados. Para religar, volte a Módulos do Portal, ligue Sorteios e salve.

## lacuna de guia específica

A marca existente `configuracoes-modulos.chave` é repetida em todos os módulos. A marca proposta deve identificar somente o botão cujo módulo tem chave `sorteios`.

## fontes

- `frontend/src/components/painel/Sidebar.tsx:320`
- `frontend/src/app/painel/configuracoes/modulos/page.tsx:142`
- `frontend/src/app/painel/configuracoes/modulos/page.tsx:168`

## lacunas

- Não foi identificado vídeo específico desta tarefa no catálogo; nenhum tempo foi atribuído.
- Conferido por leitura do código no HEAD b2f62d3f. Sem execução do produto ou validação visual nesta auditoria.
