---
id: tirar-sorteio-do-ar
titulo: "tirar um sorteio do ar sem excluir"
publico:
  - admin
modulo: sorteios
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - despublicar
  - sorteio
  - rascunho
  - no ar
  - painel
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - uN4FHHHGgEs
---

## objetivo

Retire um sorteio da publicação mantendo o cadastro, usando Salvar rascunho.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Conteúdo` do menu, em `Sorteios`, clique em `Sorteios`. [t=17] [guia=menu:/painel/sorteios]
2. Clique no lápis `Editar` do sorteio.  [guia=sorteios.editar]
3. Clique em `Salvar rascunho`. [guia=sorteios.salvar-rascunho]

## resultado

O sorteio passa a rascunho. A consulta pública exige que ele esteja publicado, então sua página deixa de ficar disponível.

## desvios

- Esta ação não encerra o sorteio com ganhadores. Para sortear, veja “realizar o sorteio ao vivo e combinar a entrega”.
- Para esconder todos os sorteios e a seção, use “desligar o módulo Sorteios”.

## fontes

- `frontend/src/components/painel/sorteios/ModalSorteio.tsx:116`
- `frontend/src/components/painel/sorteios/ModalSorteio.tsx:246`
- `backend/sorteios/views_public.py:32`

- Catálogo: `portal-da-cidade/videos.json`; legendas: `videos/legendas/uN4FHHHGgEs.srt`.

## lacunas

- Conferido por leitura do código no HEAD b2f62d3f. Sem execução do produto ou validação visual nesta auditoria.
