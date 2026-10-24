---
id: editorial-turismo-dicas
titulo: "cadastrar dicas na página inicial do Guia Turístico"
publico:
  - administrador do portal
modulo: Turismo
categoria: conteúdo
aba: Dicas
tipo_problema: cadastro
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos: []
---

## objetivo
Cadastrar dicas gerais para visitantes na página inicial do Guia Turístico. As dicas de um ponto específico são diferentes e ficam na edição desse ponto.

## pré-requisitos/permissões
Acesso de administrador. A tela `Dicas para Visitantes` existe, mas não há link para ela no menu lateral nem nas telas de Turismo conferidas. Para abrir diretamente, use [Dicas para Visitantes](/painel/turismo/dicas) no mesmo portal, já autenticado.

## passos

1. Na tela `Dicas para Visitantes`, clique em `+ Nova Dica`. [guia=dicas.nova]
2. Se quiser mudar o símbolo inicial, escolha uma opção em `Ícone`. [guia=dicas.icone]
3. Preencha `Título *`. [guia=dicas.titulo]
4. Se quiser, preencha `Descrição`. [guia=dicas.descricao]
5. Se quiser mudar a posição, ajuste `Ordem`. [guia=dicas.ordem]
6. Confira a opção `Ativa`. [guia=dicas.ativa]
7. Clique em `Salvar Dica`. [guia=dicas.salvar]

## resultado
A dica entra na lista, com indicação `Ativa` ou `Inativa` e sua ordem. O painel mostra `Dica salva`. A leitura pública retorna somente dicas ativas do portal.

## desvios
Para recomendações de um ponto, veja [adicionar dicas a um ponto turístico](turismo-pontos-dicas.md). Não use o vídeo de cadastro de ponto como demonstração desta tela: ele fala das dicas dentro do ponto.

## fontes
- Código b2f62d3f: `frontend/src/app/painel/turismo/dicas/page.tsx:101` — destino das dicas; `:106` — nova; `:131` — campos; `:204` — salvar.
- `frontend/src/components/painel/Sidebar.tsx:183` — itens de Turismo, sem Dicas.
- `frontend/src/app/painel/turismo/pontos/page.tsx:64` — atalhos sem Dicas.
- `backend/turismo/views_public.py:431` — leitura por portal e ativo.

## lacunas
Não é possível oferecer um percurso pelo menu lateral para esta tela no código auditado. O link direto acima é uma alternativa de acesso, sem alvo de guia inventado. Não há vídeo específico identificado no catálogo. Sem navegador.
