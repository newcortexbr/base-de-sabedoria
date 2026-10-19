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

1. Para as categorias de notícias: no menu da esquerda, na parte `Conteúdo`, clique em `Notícias` e depois em `Gerenciar Categorias` (`/painel/noticias/categorias`).
2. Para as subcategorias de notícias: no mesmo menu `Notícias`, clique em `Gerenciar Subcategorias` (`/painel/noticias/subcategorias`).
3. Para as categorias de artigos: no menu `Artigos`, clique em `Categorias` (`/painel/blog/categorias`).
4. Para as categorias de turismo: no menu `Guia Turístico / Eventos`, clique em `Categorias` (`/painel/turismo/categorias`).
5. Na página de categorias de notícias, preencha o nome e escolha a `Cor` no quadro `Cadastrar Categoria` e clique em `Salvar`. Se aparecer uma mensagem de erro, leia antes de tentar de novo.
6. Antes de excluir ou desligar uma categoria, leia o aviso que aparece sobre o que vai ser afetado. Se tiver dúvida, peça ajuda.

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
