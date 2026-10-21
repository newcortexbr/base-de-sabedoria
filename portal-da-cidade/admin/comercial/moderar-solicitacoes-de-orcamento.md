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
revisado_em: 2026-10-19
validacao: docs-e-codigo
videos:
  - Ru3949-VUX4
---

## objetivo

aprovar ou reprovar os pedidos de orçamento enviados por visitantes.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## veja também
- para cuidar de vários pedidos juntos, veja o artigo "aprovar ou reprovar vários pedidos de orçamento de uma vez".

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Orçamentos Online` e depois em `Todas as Solicitações`. [guia=menu:/painel/orcamentos/categorias] [t=85]
2. No topo da página você vê quantos pedidos estão aguardando aprovação, quantos foram aprovados, encerrados e reprovados. Clicar num cartão filtra a lista por aquela situação. [guia=orcamentos-categorias.contadores] [t=90]
3. Se quiser, filtre também por categoria ou por datas, nos campos logo abaixo. Para um período, comece pela data `De`. [guia=orcamentos-categorias.de] [t=100]
4. Na linha do pedido que você quer, clique em `Ver detalhes` (o olho) para ler a descrição, ver as fotos e o contato de quem pediu. [guia=orcamentos-categorias.ver-detalhes] [t=116]
5. Na janela de detalhes, clique em `Aprovar e enviar` para mandar o pedido às empresas daquela categoria. [guia=orcamentos-categorias.detalhe-aprovar] [t=130]
6. Se o pedido for inadequado, clique em `Reprovar` na mesma janela: o pedido não vai a ninguém. [guia=orcamentos-categorias.detalhe-reprovar] [t=168]
7. Sem abrir os detalhes, também dá para usar o visto (aprovar) ou o X (reprovar) na linha do pedido. [guia=orcamentos-categorias.aprovar]

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
