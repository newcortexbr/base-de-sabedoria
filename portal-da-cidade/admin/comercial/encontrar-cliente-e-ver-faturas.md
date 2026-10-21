---
id: encontrar-cliente-e-ver-faturas
titulo: "encontrar um cliente e ver planos e faturas"
publico:
  - admin
modulo: clientes
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-19
validacao: docs-e-codigo
videos:
  - -FASO6flcCw
---

## objetivo
aqui você acha um cliente pelo nome, documento ou telefone e abre a página dele.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No menu da esquerda, na parte `Comercial`, clique em `Meus Clientes`. [guia=menu:/painel/clientes]
2. No topo da página, veja quantos clientes estão `Vencidos`, quantos vencem em 7 dias e em 30 dias, e quantos estão sem plano. [guia=clientes.resumo]
3. Para achar alguém, escreva em `Buscar por nome, documento ou telefone…`. [guia=clientes.busca]
4. Se quiser, escolha uma situação no filtro ao lado para ver só vencidos, a vencer ou sem plano. [guia=clientes.filtro-situacao]
5. Clique no nome do cliente para ver os planos e as faturas dele. [guia=clientes.ver-cliente]

## resultado
Você vê os planos e as faturas do cliente.

## desvios

- Excluir e bloquear pedem confirmação; confira antes.
- O arquivo exportado tem dados de contato: guarde com cuidado.

## quando pedir ajuda

peça ajuda se a página não carregar, se o salvamento der erro ou se a opção esperada não aparecer.

## fontes

- `portal-cidade/frontend/src/app/painel/clientes/page.tsx`
- `suporte-kb/mapa/admin/telas/painel-clientes.md`

## lacunas

não foi feita validação visual no navegador. Os textos dos botões podem mudar.
