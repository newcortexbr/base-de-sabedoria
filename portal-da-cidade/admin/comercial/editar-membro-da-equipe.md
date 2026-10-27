---
id: editar-membro-da-equipe
titulo: "mudar o cargo ou a especialidade de um membro da equipe"
publico:
  - admin
modulo: guia
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - editar
  - equipe
  - cargo
  - especialidade
  - empresa
  - guia
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - okWcwnwq5Bk
---

## objetivo

Aqui você altera o cargo ou a especialidade de um profissional já cadastrado.

## pré-requisitos

- Ter acesso administrativo ao portal e à empresa.
- O recurso estar disponível em `Conteúdo da ficha` (depende da ficha completa e, para quartos, da categoria).

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas`. [guia=menu:/painel/guia/empresas]
2. Na linha da empresa, clique no lápis (`Editar`). [guia=guia-empresas.editar]
3. Em `Conteúdo da ficha`, clique em `Gerenciar` no cartão `Equipe`. O formulário é salvo antes de abrir a tela. [guia=guia-empresas-editar.gerenciar-equipe]
4. No profissional, clique em `Editar`. [guia=guia-empresas-equipe.editar] [t=70]
5. Altere `Cargo / Especialidade *`. [guia=guia-empresas-equipe.cargo] [t=53]
6. Clique em `Salvar membro`. [guia=guia-empresas-equipe.salvar] [t=67]

## resultado

Os dados ficam salvos no membro da equipe. Isso não concede acesso à área do cliente.

## quando pedir ajuda

Peça ajuda se o salvamento falhar ou o recurso não aparecer.

## fontes

- `portal-cidade/frontend/src/components/painel/EmpresaEditor.tsx:948-984,1735-1744`.
- `portal-cidade/frontend/src/app/painel/guia/empresas/[id]/equipe/page.tsx:137-150,179`.

## lacunas

Sem execução no navegador. Não foi medido o tempo de atualização da página pública.
