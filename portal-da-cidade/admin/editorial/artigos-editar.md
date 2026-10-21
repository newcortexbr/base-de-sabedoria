---
id: artigos-editar
titulo: "editar um artigo"
publico:
  - administrador do portal
  - colunista
modulo: Artigos
categoria: conteúdo
aba: Artigos
tipo_problema: publicação
status: rascunho-documental
revisado_em: 2026-10-19
validacao: docs-e-codigo
videos:
  - CRiUbh7wHdc
---

## objetivo
aqui você muda um artigo que já foi cadastrado e salva.

## pré-requisitos/permissões
O administrador usa o painel. O colunista usa a área do cliente, não o painel.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Artigos` e depois em `Lista de Artigos`. [guia=menu:/painel/blog]
2. Para mudar um artigo, clique no ícone de editar na linha do artigo que você quer. [guia=blog.editar]
3. Faça as mudanças e clique no botão de salvar do formulário. [guia=blog-novo.publicar]

## resultado
O artigo fica com as mudanças.

## desvios
- Não trate Notícias e Artigos como o mesmo módulo: têm telas, papéis e estados distintos.
- Jornalistas não são colunistas; seus fluxos são separados.
- Se o estado não mudar, consulte o erro apresentado e peça ajuda; não repita uma ação sem verificar a lista.

## quando pedir ajuda
peça ajuda se o colunista esperado não estiver disponível, se o cadastro falhar ou se a lista não refletir o estado após recarregar.

## fontes
- `portal-cidade/frontend/src/app/painel/blog/page.tsx:27` — estados e rótulos.
- `portal-cidade/frontend/src/app/painel/blog/novo/page.tsx:16` — comportamento de criação e colunista da casa.
- `portal-cidade/frontend/src/app/painel/blog/novo/page.tsx:41` — formulário de novo artigo.
- `docs/PRODUCT.md:25` — áreas de jornalista e colunista.
- `docs/PRODUCT.md:40` — módulo Notícias.

## lacunas
não verificado visualmente. A decisão de publicar diretamente vale para a criação pelo administrador com colunista da casa, não para qualquer perfil ou edição.
