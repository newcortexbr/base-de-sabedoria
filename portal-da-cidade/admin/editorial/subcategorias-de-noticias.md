---
id: admin-subcategorias-de-noticias
titulo: "criar subcategorias de notícias"
publico:
  - admin
modulo: noticias
categoria: admin
aba: nao-se-aplica
tipo_problema:
  - subcategoria de notícia
  - criar subcategoria
  - assunto dentro da categoria
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
aqui você cria assuntos menores dentro de uma categoria de notícia, por exemplo Futebol dentro de Esportes.

## pré-requisitos

- Ter acesso de administrador ao painel.
- Ter a categoria criada.

## passos

1. No menu da esquerda, clique em `Notícias` e depois em `Gerenciar Subcategorias`. [guia=menu:/painel/noticias/subcategorias]
2. Clique em `+ Cadastrar Subcategoria`. [guia=fora]
3. Escreva o nome da subcategoria. [guia=fora]
4. Em `Categoria *`, escolha a categoria a que ela pertence. [guia=fora]
5. Clique em `Salvar`. [guia=fora]

## resultado
a subcategoria entra na lista, ligada à categoria.

## desvios

- Clique em `Ativo` na linha para ligar ou desligar.
- Use o filtro de categoria para ver só as subcategorias de uma categoria.

## quando pedir ajuda

peça ajuda se aparecer erro de nome repetido.

## fontes

- `portal-cidade/frontend/src/app/painel/noticias/subcategorias/page.tsx` — botões, campos e estados.

## lacunas

tela não validada no navegador nesta tarefa.
