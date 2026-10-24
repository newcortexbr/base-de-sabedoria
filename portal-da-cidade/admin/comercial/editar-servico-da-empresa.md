---
id: editar-servico-da-empresa
titulo: "mudar o valor de um serviço da empresa"
publico:
  - admin
modulo: guia
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - aE3QL3ErK0k
  - FwKU_0GF6iU
---

## objetivo

Aqui você troca o valor de um serviço existente. Se houver texto de valor, ele tem prioridade na apresentação.

## pré-requisitos

- Ter acesso administrativo ao portal e à empresa.
- O recurso estar disponível em `Conteúdo da ficha` (depende da ficha completa e, para quartos, da categoria).

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas`. [guia=menu:/painel/guia/empresas]
2. Na linha da empresa, clique no lápis (`Editar`). [guia=guia-empresas.editar]
3. Em `Conteúdo da ficha`, clique em `Gerenciar` no cartão `Serviços`. O formulário é salvo antes de abrir a tela. [guia=guia-empresas-editar.gerenciar-servicos]
4. No serviço, clique em `Editar`. [guia=guia-empresas-servicos.editar] [t=86]
5. Altere `Valor (R$)`. [guia=guia-empresas-servicos.valor] [t=60]
6. Se necessário, altere ou limpe `Texto de valor (opcional)`. [guia=guia-empresas-servicos.texto-de-valor] [t=65]
7. Clique em `Salvar serviço`. [guia=guia-empresas-servicos.salvar] [t=84]

## resultado

O serviço fica com os novos valores. O texto de valor preenchido aparece no lugar do valor fechado.

## quando pedir ajuda

Peça ajuda se o salvamento falhar ou o recurso não aparecer.

## fontes

- `portal-cidade/frontend/src/components/painel/EmpresaEditor.tsx:948-984,1735-1744`.
- `portal-cidade/frontend/src/app/painel/guia/empresas/[id]/servicos/page.tsx:121-131,164-165,327`.

## lacunas

Sem execução no navegador. Não foi medido o tempo de atualização da página pública.
