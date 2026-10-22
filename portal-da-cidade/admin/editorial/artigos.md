---
id: editorial-artigos
titulo: "artigos: criar conteúdo e entender estados"
publico:
  - administrador do portal
  - colunista
modulo: Artigos
categoria: conteúdo
aba: Artigos
tipo_problema: publicação
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
videos:
  - CRiUbh7wHdc
---

## objetivo
aqui você escreve, publica e acompanha os artigos do portal. Artigos são textos de colunistas e não são a mesma coisa que Notícias.

## pré-requisitos/permissões
O administrador usa o painel. O colunista usa a área do cliente, não o painel.

## veja também
- para mudar um artigo que já existe, veja o artigo "editar um artigo".

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Artigos` e depois em `Lista de Artigos`. [guia=menu:/painel/blog] [t=13]
   A lista mostra contadores de artigos publicados, agendados, rascunhos e arquivados, e filtros por título, colunista, categoria e status. Em cada linha há ações para abrir no site, editar e excluir.
2. Para escrever um novo, clique no botão `+ Novo Artigo` no topo da lista. [guia=blog.novo] [t=26]
3. Na página `Cadastrar Artigo`, escolha em `Colunista` quem assina o texto. [guia=blog-novo.colunista] [t=29]
4. Escreva o `Título *` do artigo. [guia=blog-novo.titulo] [t=33]
5. Se quiser, escreva o `Subtítulo`. [guia=blog-novo.subtitulo]
6. Se quiser, escreva a `Chamada`, um resumo curto que aparece na lista. [guia=blog-novo.chamada]
7. Escreva o texto no quadro `Texto do artigo`. [guia=blog-novo.texto] [t=36]
8. Envie a `Foto de capa` clicando no campo de arquivo e, se quiser, preencha a legenda e os créditos da foto. [guia=blog-novo.capa] [t=38]
9. Se quiser, preencha o título e a descrição para o Google (SEO); são opcionais.
10. Clique em `Publicar`. Para colunista da casa, o artigo vai direto para o ar. [guia=blog-novo.publicar] [t=45]
11. Volte à `Lista de Artigos` e confira a coluna `Status`. [guia=blog.status-linha]

## resultado
os estados da lista são `Rascunho`, `Agendado`, `Publicado` e `Arquivado`. Artigo criado pelo administrador como colunista da casa pode ser publicado diretamente. Ao escolher colunista não pertencente à casa, a criação gera rascunho; o colunista pagante publica pela área do cliente.

## desvios
- Não trate Notícias e Artigos como o mesmo módulo: têm telas, papéis e estados distintos.
- Jornalistas não são colunistas; seus fluxos são separados.
- As categorias e os colunistas ficam no menu `Artigos`, em `Categorias` e `Colunistas`.
- Em `Colunistas`, cada colunista tem nome, foto, especialidade, descrição curta e redes sociais, e você pode ativar ou desativar cada um sem mexer nos artigos.
- Em `Categorias`, cada categoria de artigo tem nome e cor.
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
