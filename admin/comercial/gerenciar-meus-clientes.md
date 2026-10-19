---
id: gerenciar-meus-clientes
titulo: "Meus Clientes: acompanhar clientes, planos e vencimentos"
publico:
  - admin
modulo: clientes
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-16
validacao: docs-e-codigo
videos:
  - -FASO6flcCw
---

## objetivo

ver quem são seus clientes, o que contrataram e quando vence.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No menu da esquerda, na parte `Comercial`, clique em `Meus Clientes` (`/painel/clientes`).
2. No topo da página você vê quantos clientes estão `Vencidos`, quantos vencem em 7 dias e em 30 dias. Use o campo `Buscar por nome, documento ou telefone…` ou o filtro de situação para achar alguém.
3. Para cadastrar, clique em `Novo cliente` e preencha nome, documento (CPF ou CNPJ), telefone, WhatsApp e e-mail. Para mudar os dados, clique no lápis (`Editar`) na linha do cliente.
4. Na linha do cliente também há os botões `Bloquear`, `Resetar senha` e `Excluir`. Clique no nome do cliente para ver os planos e as faturas dele.
5. O botão `Exportar` baixa um arquivo com a lista de clientes.

## resultado

a lista mostra a carteira atualizada, com semáforo de vencimento e contratações aguardando pagamento.

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
