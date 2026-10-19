---
id: moderar-solicitacoes-de-orcamento
titulo: moderar as solicitações de orçamento
publico:
  - admin
modulo: orçamentos
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-16
validacao: docs-e-codigo
videos:
  - Ru3949-VUX4
---

## objetivo

aprovar ou reprovar os pedidos de orçamento enviados por visitantes.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Abra `Orçamentos Online` → `Todas as Solicitações`.
2. Veja os totais no topo (aguardando aprovação, aprovados, encerrados, reprovados) e use os filtros de status, categoria e datas.
3. Abra uma solicitação para ver descrição, fotos e contato.
4. Use `Aprovar e enviar` para entregar o pedido às empresas da categoria, ou `Reprovar` para não enviar a ninguém.
5. Para vários de uma vez, marque as linhas e use os botões em lote (aprovar, reprovar, encerrar, excluir).

## resultado

pedido aprovado é enviado às empresas da categoria; reprovado não é enviado.

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
