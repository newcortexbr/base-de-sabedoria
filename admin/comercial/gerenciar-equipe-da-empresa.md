---
id: gerenciar-equipe-da-empresa
titulo: "equipe: cadastrar na página da empresa do Guia"
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
  - okWcwnwq5Bk
---

## objetivo

mostrar os profissionais da empresa com foto, nome e especialidade.

## pré-requisitos

- Ter acesso administrativo ao portal.
- O módulo Guia Comercial estar disponível no portal.
- A empresa ter um plano pago: no plano grátis este recurso não aparece.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas` (`/painel/guia/empresas`).
2. Na linha da empresa, clique no lápis (`Editar`).
3. Desça até `Conteúdo da ficha` e, no cartão `Equipe`, clique em `Gerenciar`. O formulário da empresa é salvo antes de abrir a tela.
4. Clique em `Adicionar membro`.
5. Se quiser, envie a foto (é opcional, mas ajuda muito).
6. Preencha o `Nome *` e o `Cargo / Especialidade *`.
7. Se o profissional tiver registro em conselho, preencha `Registro profissional (opcional)` (por exemplo, CRM).
8. Clique em `Salvar membro`.

## resultado

a página da empresa ganha o bloco `Nossa Equipe` com foto, nome e especialidade.

## desvios

- Use a chave "no ar" para esconder alguém sem apagar (por exemplo, de férias).
- `Editar` muda os dados; a lixeira exclui.
- A própria empresa também pode cuidar disso pela área do cliente; a tela é a mesma.

## quando pedir ajuda

peça ajuda se o cartão não aparecer ou se salvar der erro.

## fontes

- `portal-cidade/frontend/src/components/painel/EmpresaEditor.tsx:933-946,1655-1686` — cartões de `Conteúdo da ficha`.
- `portal-cidade/frontend/src/app/painel/guia/empresas/[id]/equipe/page.tsx:1`
- vídeo `okWcwnwq5Bk`.

## lacunas

não verificado visualmente nesta tarefa; passos conferidos com o vídeo de suporte e com o código da tela.
