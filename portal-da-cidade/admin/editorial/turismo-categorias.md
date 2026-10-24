---
id: turismo-categorias
titulo: "criar uma categoria de pontos turísticos"
publico:
  - administrador do portal
modulo: Turismo
categoria: conteúdo
aba: Categorias
tipo_problema: cadastro
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - QrkL_nJEa-c
---

## objetivo
Criar uma categoria para organizar os pontos turísticos. As categorias dos eventos têm outro cadastro.

## pré-requisitos/permissões
Acesso de administrador ao módulo de Turismo.

## passos

1. No menu lateral, dentro de `Guia Turístico / Eventos`, clique em `Categorias`. [guia=menu:/painel/turismo/categorias]
2. Clique em `+ Nova Categoria`. [guia=turismo-categorias.nova]
3. Preencha `Nome *`. [guia=turismo-categorias.nome]
4. Se quiser, escolha o `Ícone`. [guia=turismo-categorias.icone]
5. Se quiser mudar a cor, escolha uma em `Cor`. [guia=turismo-categorias.cor]
6. Confira a opção `Ativa`. [guia=turismo-categorias.ativa]
7. Clique em `Salvar`. [guia=turismo-categorias.salvar]

## resultado
A categoria é salva e fica disponível na listagem de categorias de Turismo. O cadastro de ponto também permite criar uma categoria ali mesmo, sem sair da tela.

## fontes
- Código b2f62d3f: `frontend/src/components/painel/Sidebar.tsx:185`.
- `frontend/src/app/painel/turismo/categorias/page.tsx:107` — nova; `:119` — nome; `:129` — ícone; `:150` — cor; `:156` — ativa; `:163` — salvar.
- `frontend/src/app/painel/turismo/pontos/NovaCategoriaNaHora.tsx:18` — criação dentro do ponto.
- `videos/legendas/QrkL_nJEa-c.srt` — menciona categoria em 28 segundos, dentro do cadastro do ponto, sem demonstrar esta tela.

## lacunas
Sem navegador. Não há tempo de vídeo atribuído ao percurso da tela separada de categorias.
