---
id: editorial-artigos
titulo: artigos: criar conteúdo e entender estados
publico:
  - administrador do portal
  - colunista
modulo: Artigos
categoria: conteúdo
aba: Artigos
tipo_problema: publicação
status: rascunho-documental
revisado_em: 2026-10-15
validacao: docs-e-codigo
videos:
  - CRiUbh7wHdc
---

## objetivo
orientar a criação e consulta de artigos, sem confundir Artigos (`blog` no código) com Notícias.

## pré-requisitos/permissões
O administrador usa `/painel/blog`. O colunista usa a área do cliente (`/minha-conta`), não o painel. O backend autoriza cada operação; este artigo não concede acesso.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Artigos` e depois em `Lista de Artigos` (`/painel/blog`). Ali aparecem todos os artigos, com campos no topo para procurar por título, situação, colunista ou categoria.
2. Para escrever um novo, clique no botão `+ Novo Artigo` no topo da lista, ou no menu em `Novo Artigo` (`/painel/blog/novo`).
3. Na página `Cadastrar Artigo`, escolha em `Colunista` quem assina o texto.
4. Preencha o título, o texto e os outros campos da página.
5. Clique em `Publicar` (ou `Salvar`, quando o artigo vai ficar guardado como rascunho).
6. Volte à `Lista de Artigos` e confira a coluna `Status`. Para mudar um artigo, clique no ícone de editar na linha dele (`/painel/blog/[id]`).
7. Para cuidar das categorias, clique em `Categorias` no menu de `Artigos` (`/painel/blog/categorias`). Para cuidar dos colunistas, clique em `Colunistas` (`/painel/blog/colunistas`).

## resultado
os estados da lista são `Rascunho`, `Agendado`, `Publicado` e `Arquivado`. Artigo criado pelo administrador como colunista da casa pode ser publicado diretamente. Ao escolher colunista não pertencente à casa, a criação gera rascunho; o colunista pagante publica pela área do cliente.

## desvios
- Não trate Notícias e Artigos como o mesmo módulo: têm telas, papéis e estados distintos.
- Jornalistas não são colunistas; seus fluxos são separados.
- Se o estado não mudar, consulte o erro apresentado e peça ajuda; não repita uma ação sem verificar a lista.

## quando pedir ajuda
peça ajuda se o colunista esperado não estiver disponível, se o cadastro falhar ou se a lista não refletir o estado após recarregar.

## fontes
- `portal-cidade/frontend/src/app/painel/blog/page.tsx:27` — estados e rótulos.
- `portal-cidade/frontend/src/app/painel/blog/novo/page.tsx:16` — comportamento de criação e colunista da casa.
- `portal-cidade/frontend/src/app/painel/blog/novo/page.tsx:41` — formulário de novo artigo.
- `docs/PRODUCT.md:25` — áreas de jornalista e colunista.
- `docs/PRODUCT.md:40` — módulo Notícias.

## lacunas
não verificado visualmente. A decisão de publicar diretamente vale para a criação pelo administrador com colunista da casa, não para qualquer perfil ou edição.
