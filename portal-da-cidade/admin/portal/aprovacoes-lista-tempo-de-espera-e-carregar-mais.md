---
id: aprovacoes-lista-tempo-de-espera-e-carregar-mais
titulo: "lista de aprovações: tipo, cliente, tempo em espera, ordem e Carregar mais"
publico:
  - admin
modulo: aprovações
categoria: admin
aba: nao-se-aplica
tipo_problema: duvida
tags:
  - aprovacao
  - fila
  - lista
  - pendente
  - prazo
  - ordenar
  - filtrar
  - numeros
  - ver
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
---

## objetivo

Entenda o que cada linha da fila de aprovação mostra.

## passos

1. No começo do menu da esquerda, clique em `Aprovações e Denúncias`. [guia=menu:/painel/aprovacoes]
2. Clique na aba `Aprovações`. [guia=aprovacoes-aba:aprovacoes]

## resultado

Você vê os envios esperando, do mais antigo para o mais novo.

## cada linha

- O selo mostra o tipo: `Empresa`, `Vaga`, `Anúncio`, `Evento` ou `Banner`.
- Abaixo vêm o título e o nome do cliente. Se o envio não tem título, aparece o número dele, como `#123`. Se não há nome de cliente, a linha fica sem ele.
- `N min em espera`, `N h em espera` ou `N d em espera` conta desde que o envio chegou.

## perguntas comuns

**existe prazo para aprovar?** Não. O portal não define prazo, não avisa ninguém do atraso e não aprova nem recusa sozinho.
**posso filtrar por tipo ou cliente?** Não. A lista não tem filtro nem outra ordem: o mais antigo fica em cima.
**o que é "Exibindo X de Y"?** X são os envios já mostrados na tela; Y é o total esperando.
**para que serve `Carregar mais (N restantes)`?** Mostra os próximos 20 envios.
**os números batem depois que eu decido itens?** O total diminui a cada decisão. Mas, se você aprovar ou recusar e depois clicar em `Carregar mais`, alguns envios podem ficar de fora da tela. Para ver a lista completa de novo, recarregue a página.
**posso aprovar vários de uma vez?** Não. A aprovação é um envio por vez.

## fontes

- frontend/src/app/painel/aprovacoes/AprovacoesClient.tsx:87-99 (carregarMais pagina+1), 120-122, 217, 230, 287
- backend/portais/views_admin.py FilaAprovacaoView (mais antigo primeiro, sem filtro)
- backend/portais/views_admin.py:941-945 (D-23: nada automático por prazo)

## lacunas

- Conferido por leitura do código no HEAD e8f43702 (wt-suporte-tool). Sem execução do produto nem validação visual.
- Defeito: decidir itens e depois `Carregar mais` pula um item por decisão (a página seguinte é pedida sobre a lista do servidor já encolhida).
