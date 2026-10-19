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
revisado_em: 2026-10-15
validacao: docs-e-codigo
---

## objetivo

encontrar uma empresa do Guia e acessar suas ações de cadastro ou situação.

## pré-requisitos

- Ter acesso administrativo ao portal.
- O módulo Guia Comercial estar disponível no portal.

## passos

1. Abra `Guia Comercial` → `Listar Empresas` em `/painel/guia/empresas`.
2. Use a busca, o filtro de categoria ou o filtro de situação para localizar a empresa.
3. Para editar os dados, abra a empresa e use a opção de edição disponível na ficha administrativa.
4. Para alterar a situação, use a ação correspondente na lista e confira o resultado antes de encerrar.

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
