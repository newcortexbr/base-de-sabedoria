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
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - wukhVMFEHWg
  - JdJr7pXVx98
---

## objetivo

aqui você acompanha as empresas do Guia, encontra uma delas e ajusta a ficha ou a situação.

## pré-requisitos

- Ter acesso administrativo ao portal.
- O módulo Guia Comercial estar disponível no portal.

## explicação

A lista permite editar, mudar a situação, abrir a página pública ou excluir uma empresa. Os filtros de situação e categoria atualizam a lista; para a busca pelo nome, use `Buscar`. A página mostra até 20 empresas por vez.

Para campos específicos, veja os artigos de plano, categoria, WhatsApp e conteúdos da ficha. A cortesia do portal não exige plano pago.

## veja também
- para cadastrar uma empresa nova, veja o artigo "cadastrar uma empresa no Guia".
- para ativar, inativar ou reprovar uma empresa, veja o artigo "mudar a situação de uma empresa do Guia".

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas`. [guia=menu:/painel/guia/empresas] [t=9]
2. Escreva o nome em `Buscar empresa...`. [guia=guia-empresas.busca] [t=63]
3. Se precisar, escolha a situação em `Todos os status`. [guia=guia-empresas.filtro-status] [t=60]
4. Clique em `Buscar`. [guia=guia-empresas.buscar]
5. Na linha da empresa, clique no lápis (`Editar`). [guia=guia-empresas.editar] [t=91]
6. Altere o `Nome da empresa *`, se necessário. [guia=empresa-editor:nome] [t=113]
7. Altere a `Descrição`, se necessário. [guia=empresa-editor.descricao] [t=115]
8. Clique em `Salvar Alterações`. [guia=empresa-editor.salvar] [t=439]

## resultado

A ficha é atualizada ou a situação escolhida passa a aparecer na lista. A tela reconhece `Pendente`, `Ativo`, `Inativo`, `Banido` e `Reprovado`.

## desvios

uma categoria inativa também oculta as empresas daquela categoria. Se uma empresa foi reprovada, isso é diferente de uma empresa apenas inativa; verifique o estado antes de agir. Exclusão é diferente de desativação e não é tratada neste roteiro.

## quando pedir ajuda

peça ajuda se a empresa não aparecer, se houver dúvida entre reprovar, inativar ou excluir, ou se a gravação falhar. Não peça à IA para aprovar ou alterar registros.

## fontes

- `portal-cidade/frontend/src/components/painel/Sidebar.tsx:124-130` — menu.
- `portal-cidade/frontend/src/app/painel/guia/empresas/page.tsx:49-89,122-145,216-222` — busca e ações.
- `portal-cidade/frontend/src/components/painel/EmpresaEditor.tsx:1041-1053,1752-1753` — campos e gravação.

## lacunas

Sem navegação real. Não foi medido o tempo até a alteração aparecer nas páginas públicas.
