---
id: assistente-de-ia-do-portal
titulo: "Assistente de IA: ligar, desligar (tirar do site) e ver o que perguntam"
publico:
  - admin
modulo: assistente
categoria: admin
aba: nao-se-aplica
tipo_problema:
  - operacao
  - robozinho do site
  - tirar o robô
  - esconder o assistente
  - chat do site
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - 0nkWIgiQfwM
---

## objetivo

Ligue ou desligue o assistente público e consulte o que os visitantes procuram.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Sistema` do menu, clique em `Assistente de IA`. [t=81] [guia=menu:/painel/assistente]
2. Marque ou desmarque `Mostrar o Assistente de IA`. [t=86] [guia=assistente.mostrar]
3. Escolha `7 dias`, `30 dias` ou `90 dias` no período. [t=93] [guia=assistente.periodo]
4. Consulte os quadros de perguntas e buscas. [t=100] [guia=assistente.quadros]

## resultado

A chave controla a exibição do assistente no site. Os quadros mostram buscas e resultados do período selecionado.

## explicação

O assistente público é diferente do chat de suporte do administrador. As consultas ajudam a identificar conteúdos procurados pelos visitantes; os dados da tela não garantem que toda resposta da IA esteja correta.

## fontes

- `frontend/src/app/painel/assistente/page.tsx:143`
- `frontend/src/app/painel/assistente/page.tsx:176`

- Catálogo: `portal-da-cidade/videos.json`; legendas: `videos/legendas/0nkWIgiQfwM.srt`.

## lacunas

- Conferido por leitura do código no HEAD b2f62d3f. Sem execução do produto ou validação visual nesta auditoria.
