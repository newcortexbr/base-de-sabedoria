---
id: editorial-artigos
titulo: "cadastrar e publicar um artigo de colunista da casa"
publico:
  - administrador do portal
modulo: Artigos
categoria: conteúdo
aba: Artigos
tipo_problema: publicação
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - CRiUbh7wHdc
---

## objetivo
Escrever e publicar um artigo pelo painel, com um colunista cadastrado pelo administrador. Artigos e Notícias são conteúdos separados.

## pré-requisitos/permissões
Acesso de administrador e um colunista da casa cadastrado. Para colunista de autocadastro, veja [cadastrar um artigo para colunista de autocadastro](artigos-colunista-autocadastro.md).

## passos

1. No menu lateral, dentro de `Artigos`, clique em `Lista de Artigos`. [t=13] [guia=menu:/painel/blog]
2. Clique em `+ Novo Artigo`. [t=29] [guia=blog.novo]
3. Em `Colunista`, escolha o autor da casa. [t=31] [guia=blog-novo.colunista]
4. Se quiser, escolha a `Categoria`. [t=31] [guia=blog-form.categoria]
5. Preencha `Título *`. [t=33] [guia=blog-novo.titulo]
6. Se quiser, preencha `Subtítulo`. [t=33] [guia=blog-novo.subtitulo]
7. Se quiser, preencha `Chamada`, um resumo do artigo. [t=36] [guia=blog-novo.chamada]
8. Escreva em `Texto do artigo`. [t=36] [guia=blog-novo.texto]
9. Se quiser, selecione um arquivo em `Foto de capa`. [t=38] [guia=blog-novo.capa]
10. Se quiser, preencha `Legenda da foto`. [t=40] [guia=blog-form.legenda]
11. Se quiser, preencha `Créditos da foto`. [t=40] [guia=blog-form.creditos]
12. Se quiser, preencha `Título SEO`, o título para buscadores. [t=43] [guia=blog-form.seo-titulo]
13. Se quiser, preencha `Descrição SEO`, o resumo para buscadores. [t=43] [guia=blog-form.seo-descricao]
14. Clique em `Publicar`. [t=47] [guia=blog-novo.publicar]

## resultado
O cadastro de colunista da casa envia o artigo para publicação. Não há opção de salvar como rascunho nesse fluxo. Confira `Publicado` na lista.

## fontes
- Código b2f62d3f: `frontend/src/components/painel/Sidebar.tsx:195`.
- `frontend/src/app/painel/blog/ArtigoCamposForm.tsx:73` — campos compartilhados.
- `frontend/src/app/painel/blog/novo/page.tsx:113` — publicação condicionada ao colunista; `:178` — botão.
- `videos/legendas/CRiUbh7wHdc.srt` — trechos de 13 a 49 segundos.

## lacunas
Conferência documental, sem navegador. As marcas propostas ainda precisam ser adicionadas ao frontend por seu responsável.
