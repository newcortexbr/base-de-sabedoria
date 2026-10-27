---
id: admin-eventos-categorias
titulo: "criar categorias de eventos"
publico:
  - administrador do portal
modulo: Agenda de Eventos
categoria: conteúdo
aba: Categorias
tipo_problema: cadastro
tags:
  - categoria
  - evento
  - editar
  - ver
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - Hyh3UxHW_jU
---

## objetivo
Criar os tipos usados para organizar os eventos, como Show, Feira ou Festival.

## pré-requisitos/permissões
Acesso de administrador ao módulo de eventos.

## passos

1. No menu lateral, dentro de `Guia Turístico / Eventos`, clique em `Eventos`. [t=48] [guia=menu:/painel/turismo/eventos]
2. Clique na aba `Categorias`. [t=53] [guia=eventos.aba-categorias]
3. Clique em `+ Nova Categoria`. [guia=eventos-categorias.nova]
4. Preencha `Nome *`. [guia=eventos-categorias.nome]
5. Se quiser, escolha o `Ícone`. [guia=eventos-categorias.icone]
6. Se quiser outra cor, escolha uma opção em `Cor`. [guia=eventos-categorias.cor]
7. Confira a opção `Ativa`. [guia=eventos-categorias.ativa]
8. Clique em `Salvar`. [guia=eventos-categorias.salvar]

## resultado
A categoria aparece na lista. Se mantiver a opção inicial `Ativa`, a situação será `Ativa`; se desmarcar, será `Inativa`. A mensagem de sucesso é `Categoria salva`.

## desvios
As categorias de eventos são separadas das categorias dos pontos turísticos. A confirmação de exclusão avisa que os eventos vinculados ficarão sem categoria.

## fontes
- Código b2f62d3f: `frontend/src/components/painel/AbasEventos.tsx:11` e `:49` — aba.
- `frontend/src/app/painel/turismo/eventos/categorias/page.tsx:32` — estado inicial; `:45` — salvar; `:66` — formulário; `:164` — exclusão.
- `videos/legendas/Hyh3UxHW_jU.srt` — só acesso à agenda e apresentação das abas entre 48 e 55 segundos.

## lacunas
Sem navegador. O vídeo não demonstra o formulário de criação de categoria; não há tempo atribuído a esses passos.
