---
id: radar-mercados
titulo: "aprovar e juntar mercados do Radar de Preços"
publico:
  - admin
modulo: radar
categoria: radar
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-22
validacao: docs-e-codigo
videos:
  - Xfc771aD4z8
---

## objetivo

aqui você cuida dos estabelecimentos do Radar: aprova os que moradores indicaram, junta repetidos, cadastra, edita, desliga ou exclui.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No menu da esquerda, clique em `Radar de Preços` e depois em `Mercados`. [guia=menu:/painel/radar/mercados]
2. Use a busca (`Buscar mercado pelo nome ou endereço`) e as abas de situação para achar o mercado. [guia=radar-mercados.novo]
3. Mercado indicado por morador aparece como `Pendente de aprovação`. Clique em `Aprovar` para os preços dele irem ao site. [guia=radar-mercados.aprovar]
4. Se ele já existe com outro nome, clique em `Juntar com…`, escolha o mercado certo e confirme. Os preços passam para ele. [guia=radar-mercados.juntar]
5. Para cadastrar um mercado seu, clique no botão de novo mercado no topo e preencha `Nome *`, `Endereço`, `Cidade` e `Bairro`. [guia=radar-mercados.novo]
6. Para tirar um mercado do site sem apagar, clique em `Desativar`; para voltar, `Ativar`. [guia=radar-mercados.ativar-desativar]
7. Para apagar, clique na lixeira e confirme em `Excluir este mercado?`. [guia=radar-mercados.excluir]

## resultado

mercado aprovado e ativo mostra seus preços no Radar. Pendente ou desativado não aparece.

## fontes

- `portal-cidade/frontend/src/app/painel/radar/mercados/page.tsx:142`
- `portal-cidade/docs/RADAR-CONTRATO.md`

## lacunas

não verificado visualmente. O que acontece com os preços ao excluir um mercado não foi conferido no servidor.
