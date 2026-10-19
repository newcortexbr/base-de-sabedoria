---
id: editorial-categorias
titulo: categorias: notícias, artigos e turismo
publico:
  - administrador do portal
modulo: Notícias, Artigos e Turismo
categoria: conteúdo
aba: Categorias
tipo_problema: classificação
status: rascunho-documental
revisado_em: 2026-10-15
validacao: docs-e-codigo
---

## objetivo
localizar e manter as categorias editoriais nos módulos corretos, considerando que cada catálogo é separado.

## pré-requisitos/permissões
acesso ao painel e permissão para administrar o módulo correspondente. Classificar conteúdo não concede acesso nem muda permissões.

## passos
1. Para categorias de Notícias, abra `Categorias` em `/painel/noticias/categorias`.
2. Para subcategorias de Notícias, use `/painel/noticias/subcategorias`.
3. Para categorias de Artigos, abra `/painel/blog/categorias`.
4. Para categorias de Turismo, abra `/painel/turismo/categorias`.
5. Na tela de Notícias, use o formulário para informar nome e cor; confirme a mensagem antes de tentar salvar de novo.
6. Antes de excluir ou desativar categoria, confira o aviso sobre conteúdo afetado e peça ajuda se houver dúvida sobre consequência.

## resultado
cada conteúdo usa categorias do seu módulo. Categoria inativa no Guia esconde empresas vinculadas; essa regra específica não deve ser extrapolada para categorias editoriais.

## desvios
- Categorias de Notícias, Artigos, Turismo e Guia são catálogos distintos.
- Nome repetido em categoria/subcategoria gera recusa; não crie variação automática para contornar.
- A tela de categoria de Notícias não oferece mais marcador de destaque nem campo de ordem.
- Excluir categoria de Notícias pode deixar notícias sem categoria; o aviso não deve ser interpretado como garantia de que seguem no ar.

## quando pedir ajuda
peça ajuda antes de excluir categoria com conteúdo associado, ao receber erro de nome repetido ou quando uma categoria de outro módulo parecer ausente.

## fontes
- `portal-cidade/frontend/src/app/painel/noticias/categorias/page.tsx:21` — aviso neutro sobre notícias sem categoria.
- `portal-cidade/frontend/src/app/painel/noticias/categorias/page.tsx:51` — campos atuais do formulário.
- `docs/DECISIONS.md:101` — categoria inativa do Guia.
- `docs/DECISIONS.md:111` — nomes repetidos em taxonomia.
- `portal-cidade/frontend/src/app/painel/blog/categorias/page.tsx:1` — categorias de Artigos.
- `portal-cidade/frontend/src/app/painel/turismo/categorias/page.tsx:1` — categorias de Turismo.

## lacunas
não verificado visualmente. Comportamento ao desativar está documentado especificamente para categorias do Guia, não generalizado às categorias editoriais.
