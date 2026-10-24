---
id: artigos-editar
titulo: "editar um artigo pelo painel"
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
Alterar o texto, a categoria ou a capa de um artigo existente. O botão de conclusão depende do colunista.

## pré-requisitos/permissões
Acesso de administrador. O colunista usa a área do cliente; este artigo cobre somente o painel.

## passos

1. No menu lateral, dentro de `Artigos`, clique em `Lista de Artigos`. [t=13] [guia=menu:/painel/blog]
2. Na linha do artigo, clique no ícone de lápis, `Editar`. [t=26] [guia=blog.editar]
3. Se quiser mudar o autor, escolha outro em `Colunista`. [guia=blog-novo.colunista]
4. Se quiser mudar o tema, escolha a `Categoria`. [guia=blog-form.categoria]
5. Altere `Título *`, se necessário. [guia=blog-novo.titulo]
6. Altere `Subtítulo`, se necessário. [guia=blog-novo.subtitulo]
7. Altere `Chamada`, se necessário. [guia=blog-novo.chamada]
8. Altere `Texto do artigo`, se necessário. [guia=blog-novo.texto]
9. Para trocar a capa, selecione um arquivo em `Nova foto de capa (opcional)`. [guia=blog-novo.capa]
10. Altere `Legenda da foto`, se necessário. [guia=blog-form.legenda]
11. Altere `Créditos da foto`, se necessário. [guia=blog-form.creditos]
12. Altere `Título SEO`, se necessário. [guia=blog-form.seo-titulo]
13. Altere `Descrição SEO`, se necessário. [guia=blog-form.seo-descricao]

### concluir com colunista da casa

14. Clique em `Publicar`. Este botão aparece quando o autor original e o selecionado são da casa. [guia=blog-editar.salvar]

### concluir com colunista de autocadastro ou troca para autor da casa

14. Clique em `Salvar alterações`. Este botão salva os campos sem mudar a situação de publicação. [guia=blog-editar.salvar]

## resultado
O painel mostra `Artigo salvo`. `Publicar` também publica um artigo arquivado. Trocar um autor de autocadastro por um da casa exige salvar a troca primeiro; só depois o botão passa a permitir publicação.

## fontes
- Código b2f62d3f: `frontend/src/app/painel/blog/page.tsx:375` — editar.
- `frontend/src/app/painel/blog/ArtigoCamposForm.tsx:73` — campos.
- `frontend/src/app/painel/blog/[id]/page.tsx:130` — duas origens; `:159` — publicação; `:338` — capa; `:348` — botão.
- `videos/legendas/CRiUbh7wHdc.srt` — navegação e edição na lista, 13 e 26 segundos; não demonstra salvar uma edição.

## lacunas
Sem execução no navegador. As marcas propostas não foram implementadas neste lote.
