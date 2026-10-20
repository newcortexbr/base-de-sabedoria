# /painel/blog/categorias — categorias dos artigos (`src/app/painel/blog/categorias/page.tsx`)
- gate: módulo `blog`. - permissão: só papéis admin/master entram no painel (`src/lib/painel-permissoes.ts`); lojista/cliente/jornalista são recusados no login do painel.
- faz: CRUD de categorias do blog (modal), com busca local.
- ações: criar/editar (:51-52), excluir com confirmação (:155), revalidar o site (:53,156).
- APIs: `blog.categorias.listar|criar|atualizar|excluir`.
- estados: erro de carga `error` (:139); erro do modal `erro` (:56); vazio "Nenhuma categoria cadastrada" (:207) e "Nenhuma categoria encontrada com esses filtros" (:209).
- problemas: nenhum confirmado. hipótese — excluir categoria com artigos depende da regra do servidor (a tela só mostra o erro).
- admin vs cliente: o cliente (colunista) só escolhe categoria; não gerencia. Sem equivalente.

## o que você vê
Lista dos assuntos (categorias) em que os artigos são separados no site.
- + Nova Categoria: cria um assunto novo, com nome e cor.
- Cor: cor usada para destacar a categoria no site.
- Buscar categoria e Status (Todas / Ativas / Inativas): filtros da lista. Categoria inativa não aparece para escolher.
- lápis: muda nome, cor ou situação; lixeira: apaga, depois de confirmação. Se o sistema não deixar apagar, a tela mostra o motivo.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-blog-categorias.png](../prints/painel-blog-categorias.png) · dados brutos: [json](../prints/json/painel-blog-categorias.json)
- aberta em `/painel/blog/categorias`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1147,16,109,34)
- [menu] "27 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Artigos · Lista de Artigos · Novo Artigo · Colunistas · Categorias …" — menu lateral, no topo da página, à esquerda (lista de 27 itens em coluna) (10,18,255,953)
- [título] "Artigos — Categorias" — topo, no topo da página, à esquerda (300,19,184,28)
- [botão] "+ Nova Categoria" — conteúdo, na parte de cima, à direita (1055,99,147,36)
- [título] "Categorias dos Artigos" — conteúdo, na parte de cima, ao centro (354,101,263,32)
- [campo] "Nome" — conteúdo, na parte de cima, ao centro, logo abaixo de “Categorias dos Artigos” (371,196,626,38)
- [lista de opções] "Status" — conteúdo, na parte de cima, à direita, logo abaixo de “+ Nova Categoria” (1009,198,176,36)
- [botão] "Editar Medicina (e outros 17 parecidos)" — conteúdo, na parte de cima, à direita, logo abaixo de “Status” (repetido ×18, um sob o outro) (1137,282,16,16)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
