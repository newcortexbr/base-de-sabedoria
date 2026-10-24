# /painel/classificados — lista de anúncios (`src/app/painel/classificados/page.tsx`)
- gate: módulo `classificados` (prefixo `/painel/classificados`, `src/lib/painel-menu.ts`); desligado mostra "ModuloDesativado" (`painel/layout.tsx:91-98`). ATENÇÃO: "classificados" no frontend = anúncios de venda.
- permissão: só papéis admin/master entram no painel (`src/lib/painel-permissoes.ts`).
- faz: lista paginada (20) de anúncios com abas "Todos / Publicados no site / Incompletos (sem foto)" (:41-45, resumo vem do servidor), filtros de busca/categoria/status na URL (:138).
- ações: clicar no selo de status alterna `ativo`↔`encerrado` (`toggleStatus`, :182), marcar como vendido com confirmação (:192-196), excluir com `confirm` (:165), abrir editar; revalida o site após cada ação.
- APIs: `classificados.anuncios.listar|atualizar|excluir`, `classificados.categorias.listar` (:112-113).
- estados: erro em `error` (:120,173,185,200); vazio "Nenhum anúncio encontrado" (:285). Rótulos calculados "sem foto" e "expirado" (:36,80-90) espelham o que o visitante vê.
- problemas: fato — o admin alterna `ativo/encerrado` (:178) e o cliente alterna `ativo/pausado` (`minha-conta/classificados/page.tsx:149`): estados diferentes para a mesma ideia. fato — não há botão de aprovar/reprovar aqui (fica em `/painel/aprovacoes`).
- admin vs cliente: cliente (`/minha-conta/classificados`) pausa/reativa, marca vendido, vê motivo de reprovação, prazo, plano/limite e cobrança de item pago. Admin faz pausar apenas via editar (campo status), vê todos, exclui e ignora limite de plano.

## como chegar
- na parte Conteúdo do menu, abra `Classificados` e clique em `Listar Anúncios`.

## o que você vê
Lista de todos os anúncios classificados (compra e venda) do portal.
- no alto, botões `Anunciantes`, `Categorias` e `+ Novo Anúncio`.
- abas `Todos`, `Publicados no site` e `Incompletos (sem foto)`, cada uma com a contagem; anúncio sem foto não aparece no site.
- filtros: busca `Buscar por título ou descrição...`, lista `Todas as categorias`, lista `Todos os status` e botão `Filtrar`.
- colunas: `Anúncio`, `Categoria`, `Preço`, `Local`, `WhatsApp` (cliques), `Status`.
- selo na coluna `Status` (`ativo`, `pausado`, `encerrado`, `vendido`, `sem foto` ou `expirado`): clicar nele alterna entre `ativo` e `encerrado`.
- links/botões de cada linha: `Ver` (abre no site), `Editar`, `Marcar como vendido` (só em anúncio ativo; pede confirmação) e `Excluir` (pede confirmação).

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-classificados.png](../prints/painel-classificados.png) · dados brutos: [json](../prints/json/painel-classificados.json)
- aberta em `/painel/classificados`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1147,16,109,34)
- [menu] "27 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados · Listar Anúncios · Novo Anúncio · Categorias · Anunciantes · Guia Turístico / Eventos · Artigos …" — menu lateral, no topo da página, à esquerda (lista de 27 itens em coluna) (10,18,255,953)
- [título] "Classificados" — topo, no topo da página, à esquerda (300,19,116,28)
- [título] "Classificados" — conteúdo, na parte de cima, ao centro (300,99,353,32)
- [link] "Anunciantes" — conteúdo, na parte de cima, à direita (869,108,118,38)
- [link] "Categorias" — conteúdo, na parte de cima, à direita (999,108,106,38)
- [link] "+ Novo Anúncio" — conteúdo, na parte de cima, à direita (1118,108,138,38)
- [aba] "Todos (3)" — conteúdo, na parte de cima, à esquerda (300,179,96,38)
- [aba] "Publicados no site (3)" — conteúdo, na parte de cima, ao centro (404,179,179,38)
- [aba] "Incompletos (sem foto) (0)" — conteúdo, na parte de cima, ao centro (591,179,209,38)
- [campo] "Buscar por título ou descrição..." — conteúdo, na parte de cima, ao centro, logo abaixo de “Todos (3)” (317,250,462,38)
- [campo] "Categoria" — conteúdo, na parte de cima, à direita, logo abaixo de “Incompletos (sem foto) (0)” (791,250,208,38)
- [botão] "Filtrar" — conteúdo, na parte de cima, à direita (1167,250,72,38)
- [coluna] "Anúncio" — conteúdo, na parte de cima, à esquerda (301,330,215,41)
- [coluna] "Categoria" — conteúdo, na parte de cima, ao centro (516,330,106,41)
- [coluna] "Preço" — conteúdo, na parte de cima, ao centro (622,330,90,41)
- [coluna] "Local" — conteúdo, na parte de cima, ao centro (712,330,115,41)
- [coluna] "WhatsApp" — conteúdo, na parte de cima, à direita (827,330,102,41)
- [coluna] "Status" — conteúdo, na parte de cima, à direita (929,330,80,41)
- [link] "Ver" — conteúdo, no meio da tela, à direita (1025,395,19,32)
- [link] "Editar" — conteúdo, no meio da tela, à direita (1052,395,34,32)
- [botão] "Marcar como vendido" — conteúdo, no meio da tela, à direita (1094,395,97,32)
- [botão] "Excluir" — conteúdo, no meio da tela, à direita (1199,395,40,32)
- [botão] "ativo" — conteúdo, no meio da tela, à direita, logo abaixo de “Status” (947,399,44,24)
- [link] "Ver" — conteúdo, no meio da tela, à direita (1025,471,19,32)
- [link] "Editar" — conteúdo, no meio da tela, à direita (1052,471,34,32)
- [botão] "Marcar como vendido" — conteúdo, no meio da tela, à direita, logo abaixo de “Marcar como vendido” (1094,471,97,32)
- [botão] "Excluir" — conteúdo, no meio da tela, à direita, logo abaixo de “Excluir” (1199,471,40,32)
- [botão] "ativo" — conteúdo, no meio da tela, à direita, logo abaixo de “ativo” (947,475,44,24)
- [link] "Ver" — conteúdo, no meio da tela, à direita (1025,547,19,32)
- [link] "Editar" — conteúdo, no meio da tela, à direita (1052,547,34,32)
- [botão] "Marcar como vendido" — conteúdo, no meio da tela, à direita, logo abaixo de “Marcar como vendido” (1094,547,97,32)
- [botão] "Excluir" — conteúdo, no meio da tela, à direita, logo abaixo de “Excluir” (1199,547,40,32)
- [botão] "ativo" — conteúdo, no meio da tela, à direita, logo abaixo de “ativo” (947,551,44,24)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
