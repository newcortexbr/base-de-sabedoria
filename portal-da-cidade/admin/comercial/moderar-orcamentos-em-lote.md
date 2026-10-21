---
id: moderar-orcamentos-em-lote
titulo: "aprovar ou reprovar vários pedidos de orçamento de uma vez"
publico:
  - admin
modulo: orçamentos
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-19
validacao: docs-e-codigo
videos:
  - Ru3949-VUX4
---

## objetivo
aqui você marca vários pedidos de orçamento e aprova, reprova, encerra ou exclui todos juntos.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Orçamentos Online` e depois em `Todas as Solicitações`. [guia=menu:/painel/orcamentos/categorias]
2. Para cuidar de vários pedidos de uma vez, marque a caixinha de cada linha. [guia=orcamentos-categorias.selecionar]
3. Use os botões que aparecem na barra de cima para aprovar, reprovar, encerrar ou excluir todos juntos. [guia=orcamentos-categorias.lote]

## resultado
Os pedidos marcados recebem a ação escolhida.

## desvios

- Você muda o status e pode excluir, mas não edita o texto do pedido.
- Dá para corrigir o status pela janela de detalhe.

## quando pedir ajuda

peça ajuda se a página não carregar, se o salvamento der erro ou se a opção esperada não aparecer.

## fontes

- `portal-cidade/frontend/src/app/painel/orcamentos/categorias/`
- `suporte-kb/mapa/admin/telas/painel-orcamentos-categorias.md`

## lacunas

não foi feita validação visual no navegador. Os textos dos botões podem mudar.
