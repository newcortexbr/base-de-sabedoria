# /painel/noticias/subcategorias — subcategorias (`.../subcategorias/page.tsx`)
- gate: módulo `noticias` (prefixo `/painel/noticias`); desligado mostra "ModuloDesativado" (`painel/layout.tsx:91-98`).
- permissão: só papéis admin/master entram no painel (`src/lib/painel-permissoes.ts`).
- menu: parte Conteúdo, grupo `Notícias` > `Gerenciar Subcategorias` (`Sidebar.tsx:107`). título `Notícias — Subcategorias`; botão `+ Cadastrar Subcategoria`; lista `Todas as categorias` para filtrar.
- modal `Cadastrar Subcategoria`/`Editar Subcategoria`: `Categoria *`, `Nome *`; botão `Salvar`. tabela: Subcategoria, Categoria, Ativo, Ações.
- faz: CRUD de subcategorias, filtrável por categoria (`SelectComBusca`), com ativar/desativar.
- APIs: `subcategorias.listar|criar|atualizar|excluir` (:41-43,122,131,142), `categorias.listar` (:126).
- estados: erro do modal (:51); vazio "Nenhuma subcategoria encontrada." (:187).
- problemas: fato — `categorias.listar().then(setCategorias)` sem `catch` (:126); falha deixa o filtro vazio sem aviso.
- admin vs cliente: sem equivalente no cliente.

## o que você vê
Lista dos assuntos menores dentro de cada categoria de notícia (ex.: dentro de Esportes, Futebol).
- lista `Todas as categorias`: mostra só as subcategorias de uma categoria.
- `Subcategoria` (`Nome *`) e `Categoria *`: o nome e a categoria de que ela faz parte.
- `Ativo` / `Inativo`: clique para ligar ou desligar.
- lápis edita; lixeira apaga, com confirmação.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-noticias-subcategorias.png](../prints/painel-noticias-subcategorias.png) · dados brutos: [json](../prints/json/painel-noticias-subcategorias.json)
- aberta em `/painel/noticias/subcategorias`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1147,16,109,34)
- [menu] "29 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Cadastrar Notícia · Listar Notícias · Gerenciar Categorias · Gerenciar Subcategorias · Autor · Jornalistas · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados …" — menu lateral, no topo da página, à esquerda (lista de 29 itens em coluna) (10,18,255,1017)
- [título] "Notícias — Subcategorias" — topo, no topo da página, à esquerda (300,19,222,28)
- [campo] "Categoria" — conteúdo, na parte de cima, ao centro (514,91,208,38)
- [botão] "+ Cadastrar Subcategoria" — conteúdo, na parte de cima, à esquerda (300,92,202,36)
- [coluna] "ID" — conteúdo, na parte de cima, à esquerda (300,145,103,41)
- [coluna] "Subcategoria" — conteúdo, na parte de cima, ao centro (403,145,279,41)
- [coluna] "Categoria" — conteúdo, na parte de cima, ao centro (682,145,226,41)
- [coluna] "Ativo" — conteúdo, na parte de cima, à direita (909,145,161,41)
- [coluna] "Ações" — conteúdo, na parte de cima, à direita (1069,145,187,41)
- [botão] "Editar" — conteúdo, na parte de cima, à direita, logo abaixo de “Ações” (1089,198,24,24)
- [botão] "Excluir" — conteúdo, na parte de cima, à direita, logo abaixo de “Ações” (1121,198,24,24)
- [botão] "Ativo" — conteúdo, na parte de cima, à direita, logo abaixo de “Ativo” (929,200,43,20)
- [botão] "Editar" — conteúdo, na parte de cima, à direita, logo abaixo de “Editar” (1089,247,24,24)
- [botão] "Excluir" — conteúdo, na parte de cima, à direita, logo abaixo de “Excluir” (1121,247,24,24)
- [botão] "Ativo" — conteúdo, na parte de cima, à direita, logo abaixo de “Ativo” (929,249,43,20)
- [botão] "Editar" — conteúdo, na parte de cima, à direita, logo abaixo de “Editar” (1089,296,24,24)
- [botão] "Excluir" — conteúdo, na parte de cima, à direita, logo abaixo de “Excluir” (1121,296,24,24)
- [botão] "Ativo" — conteúdo, na parte de cima, à direita, logo abaixo de “Ativo” (929,298,43,20)
- [botão] "Editar" — conteúdo, na parte de cima, à direita, logo abaixo de “Editar” (1089,345,24,24)
- [botão] "Excluir" — conteúdo, na parte de cima, à direita, logo abaixo de “Excluir” (1121,345,24,24)
- [botão] "Ativo" — conteúdo, na parte de cima, à direita, logo abaixo de “Ativo” (929,347,43,20)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
