---
id: bloquear-cliente
titulo: "bloquear ou liberar o acesso de um cliente"
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
aqui você impede ou libera o acesso de um cliente ao portal.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No menu da esquerda, na parte `Comercial`, clique em `Meus Clientes`. [guia=menu:/painel/clientes]
2. Para achar alguém, escreva em `Buscar por nome, documento ou telefone…`. [guia=clientes.busca]
3. Para impedir ou liberar o acesso, clique em `Bloquear` (ou `Desbloquear`) na linha dele e confirme. [guia=clientes.bloquear]

## resultado
O acesso do cliente fica bloqueado ou liberado.

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
