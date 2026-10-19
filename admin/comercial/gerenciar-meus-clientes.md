---
id: gerenciar-meus-clientes
titulo: Meus Clientes: acompanhar clientes, planos e vencimentos
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

1. Abra `Meus Clientes` (`/painel/clientes`) na seção Comercial.
2. Veja os totais por situação (vencidos, vence em breve etc.) e use a busca ou o filtro de status.
3. Para cadastrar, clique em `Novo cliente` e preencha nome, documento, telefone, WhatsApp e e-mail. Para mudar, edite na linha.
4. Na linha também há ações como bloquear, trocar a senha e excluir. Abra a ficha do cliente para ver planos e faturas.
5. `Exportar` gera um arquivo com os clientes.

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
