# /painel/blog — lista de artigos (`src/app/painel/blog/page.tsx`)
- gate: módulo `blog` (prefixo em `src/lib/painel-menu.ts`); módulo desligado mostra "ModuloDesativado" (`painel/layout.tsx:91-98`).
- permissão: só papéis admin/master entram no painel (`src/lib/painel-permissoes.ts`); lojista/cliente/jornalista são recusados no login do painel.
- faz: lista paginada de artigos de colunistas, com filtros (status, colunista, categoria, busca) guardados na URL via `router.replace` (:99) e contagens por status.
- ações: filtrar, paginar, abrir editar (`/painel/blog/[id]`), ver no site (`hrefArtigo`), excluir (modal de confirmação, :164), revalida o cache público após excluir (:166).
- APIs: `blog.artigos.listar` (:119), `blog.artigos.contagens` (:104), `blog.artigos.excluir` (:164), `blog.colunistas.listar` e `blog.categorias.listar` (:131-132, com `.catch(() => {})`).
- estados: erro de carga em `error` via `formatApiError(err,'carregar')` (:123); vazio "Nenhum artigo encontrado" (:305).
- problemas: fato — falha em colunistas/categorias é engolida (:131-132), então os filtros ficam vazios sem aviso.
- admin vs cliente: o colunista cria/edita o próprio artigo em `/minha-conta/colunista-blog`. O admin vê todos, edita e exclui qualquer um. Não há aprovar/reprovar aqui (isso está em `/painel/aprovacoes`). Admin não vê o limite semanal nem o plano do colunista (cliente vê `PainelPlanoBlog`, `limiteSemanal.ts`).

## como chegar
- na parte Conteúdo do menu, abra `Artigos` e clique em `Lista de Artigos`.

## o que você vê
Lista de todos os artigos dos colunistas do portal, para achar, abrir, ver no site ou apagar um artigo.
- cartões Todos / Publicados / Agendados / Rascunhos / Arquivados: quantos artigos há em cada situação; clicar em um cartão mostra só aqueles (clicar de novo tira o filtro).
- campos `Título` (busca), `Colunista`, `Categoria` e `Status`: filtros para encontrar um artigo.
- botões `Colunistas`, `Categorias` e `+ Novo Artigo` no alto, à direita.
- colunas da tabela: `Artigo`, `Colunista`, `Categoria`, `Status`, `Data` e `Ações`.
- coluna Status: Publicado (está no site), Agendado (vai entrar no site na data marcada), Rascunho (ainda não está no site), Arquivado (tirado do ar).
- coluna Data: quando foi publicado ou quando está agendado para entrar.
- ícone de abrir no site: mostra o artigo como o público vê (só funciona se ele já estiver no site).
- lápis (Editar): abre o artigo para mudar texto, foto ou categoria.
- lixeira (Excluir): apaga o artigo, depois de pedir confirmação no botão `Excluir`.
- a aprovação de artigos enviados pelos colunistas não é feita aqui, e sim em Aprovações e Denúncias.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-blog.png](../prints/painel-blog.png) · dados brutos: [json](../prints/json/painel-blog.json)
- aberta em `/painel/blog`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1147,16,109,34)
- [menu] "27 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Artigos · Lista de Artigos · Novo Artigo · Colunistas · Categorias …" — menu lateral, no topo da página, à esquerda (lista de 27 itens em coluna) (10,18,255,953)
- [título] "Artigos" — topo, no topo da página, à esquerda (300,19,63,28)
- [título] "Lista de Artigos" — conteúdo, na parte de cima, à esquerda (300,99,180,32)
- [link] "Colunistas" — conteúdo, na parte de cima, à direita (896,108,106,38)
- [link] "Categorias" — conteúdo, na parte de cima, à direita (1014,108,106,38)
- [link] "+ Novo Artigo" — conteúdo, na parte de cima, à direita (1132,108,124,38)
- [botão] "0Todos (e outros 4 parecidos)" — conteúdo, na parte de cima, à esquerda, logo abaixo de “Lista de Artigos” (repetido ×5, um sob o outro) (300,179,182,82)
- [campo] "Título" — conteúdo, na parte de cima, ao centro, logo abaixo de “0Todos (e outros 4 parecidos)” (317,314,238,38)
- [campo] "Colunista" — conteúdo, na parte de cima, ao centro (567,314,224,38)
- [campo] "Categoria" — conteúdo, na parte de cima, à direita (803,314,224,38)
- [botão] "Todos" — conteúdo, na parte de cima, à direita (1039,314,200,38)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
