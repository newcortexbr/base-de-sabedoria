---
id: editorial-categorias
titulo: "categorias: notícias, artigos e turismo"
publico:
  - administrador do portal
modulo: Notícias, Artigos e Turismo
categoria: conteúdo
aba: Categorias
tipo_problema: classificação
status: rascunho-documental
revisado_em: 2026-10-19
validacao: docs-e-codigo
---

## objetivo
aqui você cria e cuida das categorias das notícias. Notícias, artigos, turismo e Guia têm categorias separadas, e uma não aparece na outra.

## pré-requisitos/permissões
Entrar no painel como administrador. Para artigos e turismo, veja os artigos próprios (menus `Artigos` > `Categorias` e `Guia Turístico / Eventos` > `Categorias`).

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Notícias` e depois em `Gerenciar Categorias`. [guia=menu:/painel/noticias/categorias]
2. Clique em `+ Cadastrar Categoria`, no topo da página. Abre uma janela. [guia=noticias-categorias.cadastrar]
3. Na janela, escreva o `Nome` da categoria. [guia=noticias-categorias.nome]
4. Escolha a `Cor` (pelo seletor de cor ou por uma das bolinhas logo abaixo). [guia=noticias-categorias.cor]
5. Clique em `Salvar`. Se aparecer uma mensagem de erro, leia antes de tentar de novo. [guia=noticias-categorias.salvar]

## resultado
cada conteúdo usa categorias do seu módulo. Categoria inativa no Guia esconde empresas vinculadas; essa regra específica não deve ser extrapolada para categorias editoriais.

## desvios
- As subcategorias ficam no mesmo menu `Notícias`, em `Gerenciar Subcategorias`.
- Antes de excluir ou desligar uma categoria, leia o aviso que aparece sobre o que vai ser afetado.
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
