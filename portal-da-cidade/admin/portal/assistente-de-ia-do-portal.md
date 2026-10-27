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
tags:
  - assistente
  - ia
  - ligar
  - desligar
  - mostrar
  - ver
  - painel
status: rascunho-documental
revisado_em: 2026-10-27
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

## o que o assistente faz e o que a tela mostra

- Atendente virtual que responde com o conteúdo publicado no próprio portal (vagas, empresas, notícias, cupons, eventos etc.); não inventa nada e respeita o que está no ar. Aparece como robô no canto da tela, nas páginas iniciais e nas listagens.
- Ao abrir, sugere atalhos (ex.: onde jantar hoje, vagas abertas, eventos do fim de semana). Quando falta informação, pergunta com opções prontas (ex.: área de trabalho na busca por vagas). Cada resposta traz botão para a página do item (ex.: `Ver vaga`) e link para ver todos; vaga em destaque vem primeiro.
- Desmarcar `Mostrar o Assistente de IA` faz o robô sumir do portal.
- Quadros: perguntas feitas, com resultado, sem resultado e média por dia. Também: seções mais buscadas (Guia comercial, classificados, vagas), categorias mais pedidas, palavras mais buscadas e cidades citadas.
- Pergunta sem resultado: o visitante procurou e o portal não tinha; indica quem falta anunciar, oportunidade de venda.
- `Últimas perguntas` lista cada conversa, marcada como achou ou não achou.
- As perguntas ficam guardadas por 180 dias; o portal não guarda quem perguntou.

## fontes

- `frontend/src/app/painel/assistente/page.tsx:143`
- `frontend/src/app/painel/assistente/page.tsx:176`

- Catálogo: `portal-da-cidade/videos.json`; legendas: `videos/legendas/0nkWIgiQfwM.srt`.

## lacunas

- Conferido por leitura do código no HEAD b2f62d3f. Sem execução do produto ou validação visual nesta auditoria.
