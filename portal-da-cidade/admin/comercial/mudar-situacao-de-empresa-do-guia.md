---
id: mudar-situacao-de-empresa-do-guia
titulo: "mudar a situação de uma empresa do Guia"
publico:
  - admin
modulo: guia
categoria: admin
aba: nao-se-aplica
tipo_problema: cadastro
tags:
  - situacao
  - empresa
  - guia
  - status
  - aprovar
  - bloquear
  - publicar
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - wukhVMFEHWg
  - JdJr7pXVx98
---

## objetivo
aqui você muda a situação de uma empresa do Guia: pendente, ativo, inativo, banido ou reprovado.

## pré-requisitos

- Ter acesso administrativo ao portal.
- O módulo Guia Comercial estar disponível no portal.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas`. [guia=menu:/painel/guia/empresas]
2. Escreva o nome em `Buscar empresa...`. [guia=guia-empresas.busca] [t=63]
3. Clique em `Buscar`. [guia=guia-empresas.buscar]
4. Na coluna `Status` da empresa, escolha `Pendente`, `Ativo`, `Inativo`, `Banido` ou `Reprovado`. [guia=guia-empresas.status-linha] [t=74]

## resultado

A mudança é gravada ao escolher a situação, sem botão de salvar. O painel mostra `Status atualizado` quando a operação dá certo. `Ativo` é necessário para aparecer no Guia; categoria, módulo e regras de visibilidade também podem impedir a exibição.

## desvios

uma categoria inativa também oculta as empresas daquela categoria. Se uma empresa foi reprovada, isso é diferente de uma empresa apenas inativa; verifique o estado antes de agir. Exclusão é diferente de desativação e não é tratada neste roteiro.

## quando pedir ajuda

peça ajuda se a empresa não aparecer, se houver dúvida entre reprovar, inativar ou excluir, ou se a gravação falhar. Não peça à IA para aprovar ou alterar registros.

## fontes

- `portal-cidade/frontend/src/app/painel/guia/empresas/page.tsx:81-89,128-145,202-207`.
- `portal-cidade/backend/guia/moderacao.py:8-12`.

## lacunas

Sem execução no navegador ou medição do cache público.
