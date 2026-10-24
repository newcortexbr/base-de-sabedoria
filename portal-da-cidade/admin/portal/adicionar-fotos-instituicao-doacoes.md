---
id: adicionar-fotos-instituicao-doacoes
titulo: "adicionar fotos à página de uma instituição de doações"
publico:
  - admin
modulo: doacoes
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - grm3bUrPBxM
---

## objetivo

Inclua fotos na galeria de uma instituição já cadastrada.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Conteúdo` do menu, em `Doações`, clique em `Instituições`. [t=17] [guia=menu:/painel/doacoes]
2. Clique no lápis `Editar` da instituição. [t=28] [guia=doacoes.editar]
3. No quadro `Galeria`, clique em `+ Adicionar fotos` para escolher as imagens.  [t=80] [guia=doacoes.galeria-fotos]
4. Clique em `Salvar instituição`. [t=98] [guia=doacoes.salvar]
5. Na confirmação, clique em `Sim, publicar`. [guia=confirmacao.confirmar]

## resultado

As imagens enviadas ficam na galeria da instituição. Se houver erro no envio, confira o aviso antes de repetir.

## adicionar fotos na capa da página

1. Na parte `Conteúdo` do menu, em `Doações`, clique em `Instituições`. [t=17] [guia=menu:/painel/doacoes]
2. Clique no lápis `Editar` da instituição. [t=28] [guia=doacoes.editar]
3. No quadro `Capa da página`, clique em `+ Adicionar foto` para escolher as imagens.  [t=50] [guia=doacoes.capa-pagina-fotos]
4. Clique em `Salvar instituição`. [t=98] [guia=doacoes.salvar]
5. Na confirmação, clique em `Sim, publicar`. [guia=confirmacao.confirmar]

## fontes

- `frontend/src/app/painel/doacoes/EditorInstituicao.tsx:393`
- `frontend/src/components/painel/GaleriaDeMidia.tsx:179`

- Catálogo: `portal-da-cidade/videos.json`; legendas: `videos/legendas/grm3bUrPBxM.srt`.

## lacunas

- Conferido por leitura do código no HEAD b2f62d3f. Sem execução do produto ou validação visual nesta auditoria.
