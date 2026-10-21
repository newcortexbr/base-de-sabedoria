---
id: admin-eventos-categorias
titulo: "criar categorias de eventos"
publico:
  - admin
modulo: eventos
categoria: admin
aba: nao-se-aplica
tipo_problema:
  - categoria de evento
  - tipo de evento
  - show feira festival
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
aqui você cria os tipos de evento, como Show, Feira ou Festival, usados para organizar a agenda.

## pré-requisitos

- Ter acesso de administrador ao painel.

## passos

1. No menu da esquerda, clique em `Guia Turístico / Eventos` e depois em `Eventos`. [guia=menu:/painel/turismo/eventos]
2. No topo da página, clique na aba `Categorias`. [guia=fora]
3. Clique em `+ Nova Categoria`. [guia=fora]
4. Escreva o `Nome *` e, se quiser, escolha o `Ícone` e a `Cor`. [guia=fora]
5. Clique em `Salvar`. [guia=fora]

## resultado
a categoria entra na lista como `Ativa`.

## desvios

- Desmarcar `Ativa` esconde a categoria na hora de escolher.
- Excluir uma categoria deixa os eventos dela sem categoria.

## quando pedir ajuda

peça ajuda se o salvamento der erro.

## fontes

- `portal-cidade/frontend/src/components/painel/AbasEventos.tsx` — abas Eventos, Categorias, Organizadores.
- `portal-cidade/frontend/src/app/painel/turismo/eventos/categorias/page.tsx` — campos, botões e confirmação.

## lacunas

tela não validada no navegador nesta tarefa.
