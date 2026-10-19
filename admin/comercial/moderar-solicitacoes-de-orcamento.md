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

1. No menu da esquerda, na parte `Conteúdo`, clique em `Orçamentos Online` e depois em `Todas as Solicitações` (`/painel/orcamentos/categorias`).
2. No topo da página você vê quantos pedidos estão aguardando aprovação, quantos foram aprovados, encerrados e reprovados. Logo abaixo, filtre por situação, categoria ou datas.
3. Clique em `Ver detalhes` num pedido para ler a descrição, ver as fotos e o contato de quem pediu.
4. Clique em `Aprovar e enviar` para mandar o pedido às empresas daquela categoria, ou em `Reprovar` para não mandar a ninguém.
5. Para cuidar de vários pedidos de uma vez, marque a caixinha de cada linha e use os botões que aparecem para aprovar, reprovar, encerrar ou excluir todos juntos.

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
