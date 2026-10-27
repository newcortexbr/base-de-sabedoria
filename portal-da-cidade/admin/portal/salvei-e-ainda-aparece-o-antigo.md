---
id: admin-salvei-e-ainda-aparece-o-antigo
titulo: "salvei no painel, mas o site ainda mostra o antigo"
publico:
  - admin
modulo: geral
categoria: admin
aba: nao-se-aplica
tipo_problema:
  - alterei e não mudou
  - salvei e não apareceu
  - logo antigo no site
  - cor não mudou
  - notícia não apareceu
  - evento não apareceu
  - categoria não aparece
tags:
  - cache
  - atualizacao
  - editar
  - erro
  - no ar
  - painel
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
---

## objetivo

entender por que uma mudança salva no painel pode demorar para aparecer no site e o que fazer.

## explicação

ao salvar no painel, o portal manda atualizar as páginas na hora; quase sempre basta recarregar. Se essa atualização falhar, cada página se atualiza sozinha:

- página inicial: alguns segundos;
- notícias, eventos, vagas e listas do Guia: 1 a 2 minutos;
- páginas de categoria e de empresa do Guia: até 1 hora.

## passos

1. Confira se apareceu o aviso de salvo (ex.: `Salvo com sucesso`). Se apareceu erro, nada foi gravado. [guia=fora]
2. Recarregue a página do site (F5 no computador; puxe para baixo no celular). [guia=fora]
3. Se continuar igual, espere o tempo da lista e recarregue de novo. [guia=fora]
4. Notícia com data de publicação no futuro só aparece nessa data; conteúdo de cliente pendente de aprovação ou pagamento só aparece depois. [guia=fora]

## quando pedir ajuda

passou mais de 1 hora, a página foi recarregada e a mudança salva ainda não aparece.

## fontes

- `frontend/src/app/painel/configuracoes/layout/actions.ts` — `revalidatePath` após salvar cores, topo, rodapé e blocos.
- `backend/portais/revalidate.py:68` (`invalidar_paths`), `backend/comercial/revalidate.py:61` (`revalidar_secao`).
- tempos: `app/page.tsx` (5 s), `app/noticias/*`, `app/eventos/*`, `app/vagasdeemprego/*`, `app/guia/page.tsx` (60–120 s), `app/guia/[slug]/page.tsx`, `app/guia/empresa/[cidade]/[slug]/page.tsx` (3600 s).
- `backend/noticias/views.py:179-181`.
