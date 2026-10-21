---
id: admin-colunistas
titulo: "cadastrar um colunista"
publico:
  - admin
modulo: artigos
categoria: admin
aba: nao-se-aplica
tipo_problema:
  - colunista
  - cadastrar colunista
  - quem escreve artigos
  - acesso do colunista
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
aqui você cadastra as pessoas que escrevem os artigos do portal.

## pré-requisitos

- Ter acesso de administrador ao painel.

## passos

1. No menu da esquerda, clique em `Artigos` e depois em `Colunistas`. [guia=menu:/painel/blog/colunistas]
2. Clique em `+ Novo Colunista`. [guia=fora]
3. Escreva o `Nome *` e o `Cargo ou especialidade`. [guia=fora]
4. Se quiser, envie a foto e preencha os contatos públicos. [guia=fora]
5. Clique em `Salvar`. [guia=fora]

## resultado
o colunista entra na lista e pode assinar artigos.

## desvios

- O botão na lista liga e desliga o colunista sem apagar.
- Na lista, a `Origem` mostra se foi `Cadastrado pelo painel` ou `Autocadastro`.

## quando pedir ajuda

peça ajuda antes de excluir um colunista com artigos publicados.

## fontes

- `portal-cidade/frontend/src/app/painel/blog/colunistas/page.tsx:203,328,492-559` — campos, botões e filtros.
- `portal-cidade/frontend/src/components/painel/Sidebar.tsx:180`.

## lacunas

tela não validada no navegador nesta tarefa. Não detalhei a criação de login do colunista.
