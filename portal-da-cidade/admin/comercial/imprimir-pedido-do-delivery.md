---
id: imprimir-pedido-do-delivery
titulo: "imprimir um pedido do delivery"
publico:
  - admin
modulo: delivery
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - TgIUmqrRuBY
---

## objetivo

Aqui você abre a impressão do resumo de um pedido.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.
- O módulo Guia Comercial estar disponível.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas`. [guia=menu:/painel/guia/empresas]
2. Na linha da empresa, clique no lápis (`Editar`). [guia=guia-empresas.editar]
3. Em `Conteúdo da ficha`, clique em `Gerenciar` no cartão `Fila de pedidos`. O formulário da empresa é salvo antes de abrir a tela. [guia=guia-empresas-editar.gerenciar-fila-de-pedidos]
4. No pedido, clique em `🖨️ Imprimir`. [guia=delivery-pedidos.imprimir]
5. Na janela de impressão do navegador, escolha a impressora. [guia=fora]
6. Confirme a impressão no navegador. [guia=fora]

## resultado

O portal prepara um recibo com os dados do pedido para impressão.

## quando pedir ajuda

Peça ajuda se o controle não aparecer ou se a tela mostrar erro ao salvar.

## fontes

- `portal-cidade/frontend/src/app/painel/delivery/pedidos/page.tsx:97-157,242-247`.

## lacunas

Sem impressora nem impressão real. O vídeo citado apresenta a fila, mas não demonstra imprimir.
