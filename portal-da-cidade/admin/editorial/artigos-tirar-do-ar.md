---
id: artigos-tirar-do-ar
titulo: "tirar um artigo do ar sem excluir"
publico:
  - administrador do portal
modulo: Artigos
categoria: conteúdo
aba: Artigos
tipo_problema: visibilidade
tags:
  - artigo
  - no ar
  - excluir
  - colunista
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - CRiUbh7wHdc
---

## objetivo
Arquivar um artigo da casa sem apagar o texto, a foto ou o endereço.

## pré-requisitos/permissões
Acesso de administrador. O artigo precisa estar publicado e ter autor da casa. A retirada não aparece para artigo de autocadastro; apenas selecionar outro autor não libera a ação antes de salvar a troca.

## passos

1. No menu lateral, dentro de `Artigos`, clique em `Lista de Artigos`. [t=13] [guia=menu:/painel/blog]
2. Clique no lápis `Editar` do artigo. [t=26] [guia=blog.editar]
3. Clique em `Tirar do ar`. [guia=blog-editar.tirar-do-ar]
4. Na confirmação `Tirar do ar`, clique em `Tirar do ar`. [guia=confirmacao.confirmar]

## resultado
O artigo passa a `Arquivado`. Para republicar um artigo da casa, abra sua edição e clique em `Publicar`, conforme [editar um artigo](artigos-editar.md).

## fontes
- Código b2f62d3f: `frontend/src/app/painel/blog/[id]/page.tsx:130` — origem; `:241` — arquivamento; `:298` — botão; `:371` — confirmação.
- `videos/legendas/CRiUbh7wHdc.srt` — só navegação e acesso à edição; não demonstra retirada do ar.

## lacunas
Sem navegador. A confirmação usa a marca existente do componente compartilhado `frontend/src/components/painel/ModalAvisoConfirmacao.tsx:135`.
