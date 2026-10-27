---
id: artigos-colunista-autocadastro
titulo: "cadastrar um artigo para colunista de autocadastro"
publico:
  - administrador do portal
modulo: Artigos
categoria: conteúdo
aba: Artigos
tipo_problema: publicação
tags:
  - artigo
  - colunista
  - autocadastro
  - publicar
  - aprovar
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - CRiUbh7wHdc
---

## objetivo
Preparar pelo painel um artigo para um colunista que se cadastrou pela área do cliente. Esse cadastro salva um rascunho; a publicação é feita pelo próprio colunista.

## pré-requisitos/permissões
Acesso de administrador e colunista de autocadastro já disponível em `Colunista`.

## passos

1. No menu lateral, dentro de `Artigos`, clique em `Lista de Artigos`. [t=13] [guia=menu:/painel/blog]
2. Clique em `+ Novo Artigo`. [t=29] [guia=blog.novo]
3. Escolha o autor de autocadastro em `Colunista`. [guia=blog-novo.colunista]
4. Se quiser, escolha a `Categoria`. [t=31] [guia=blog-form.categoria]
5. Preencha `Título *`. [t=33] [guia=blog-novo.titulo]
6. Escreva em `Texto do artigo`. [t=36] [guia=blog-novo.texto]
7. Se quiser, selecione um arquivo em `Foto de capa`. [t=38] [guia=blog-novo.capa]
8. Clique em `Salvar`. [guia=blog-novo.publicar]

## resultado
O artigo é criado como rascunho.

## fontes
- Código b2f62d3f: `frontend/src/app/painel/blog/novo/page.tsx:113` e `:178` — envio e botão.
- `frontend/src/app/painel/blog/ArtigoCamposForm.tsx:73` — campos.
- `videos/legendas/CRiUbh7wHdc.srt` — navegação e campos comuns; a publicação mostrada é de autor da casa.

## lacunas
Sem navegador. O vídeo não demonstra o salvamento de rascunho para autocadastro. Os campos opcionais adicionais estão descritos em [cadastrar um artigo](artigos.md).
