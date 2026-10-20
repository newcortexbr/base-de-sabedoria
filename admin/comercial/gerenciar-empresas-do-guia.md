---
id: gerenciar-empresas-do-guia
titulo: localizar e atualizar empresas do Guia
publico:
  - admin
modulo: guia
categoria: admin
aba: nao-se-aplica
tipo_problema: cadastro
status: rascunho-documental
revisado_em: 2026-10-19
validacao: docs-e-codigo
videos:
  - JdJr7pXVx98
---

## objetivo

aqui você encontra uma empresa do Guia e muda os dados ou a situação dela.

## pré-requisitos

- Ter acesso administrativo ao portal.
- O módulo Guia Comercial estar disponível no portal.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas`. [guia=menu:/painel/guia/empresas] [t=9]
2. No topo da lista, escreva o nome em `Buscar empresa...`. [guia=guia-empresas.busca] [t=63]
3. Se quiser, escolha uma categoria e uma situação (`Todos os status`) nos filtros ao lado. [guia=guia-empresas.filtro-status] [t=60]
4. Clique em `Buscar`. [guia=guia-empresas.buscar]
5. Para mudar os dados de uma empresa, clique no lápis (`Editar`) na linha da empresa que você quer. [guia=guia-empresas.editar] [t=91]
6. Para mudar a situação (`Pendente`, `Ativo`, `Inativo`, `Banido` ou `Reprovado`), escolha a nova opção na coluna `Status` da linha da empresa. [guia=guia-empresas.status-linha] [t=74]
7. Confira na lista se a situação mudou. [guia=guia-empresas.status-linha]

## resultado

A ficha é atualizada ou a situação escolhida passa a aparecer na lista. A tela reconhece `Pendente`, `Ativo`, `Inativo`, `Banido` e `Reprovado`.

## desvios

uma categoria inativa também oculta as empresas daquela categoria. Se uma empresa foi reprovada, isso é diferente de uma empresa apenas inativa; verifique o estado antes de agir. Exclusão é diferente de desativação e não é tratada neste roteiro.

## quando pedir ajuda

peça ajuda se a empresa não aparecer, se houver dúvida entre reprovar, inativar ou excluir, ou se a gravação falhar. Não peça à IA para aprovar ou alterar registros.

## fontes

- `portal-cidade/frontend/src/app/painel/guia/empresas/page.tsx:18-29,31-45,59-73,81-89`
- `portal-cidade/docs/DECISIONS.md:101-109`

## lacunas

os rótulos e consequências de cada ação de status não foram validados visualmente; não há promessa de efeito imediato em todas as páginas públicas.
