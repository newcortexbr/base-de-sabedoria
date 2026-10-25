# /painel/noticias — lista de notícias (`src/app/painel/noticias/page.tsx`, 650 linhas)
- gate: módulo `noticias` (prefixo `/painel/noticias`); desligado mostra "ModuloDesativado" (`painel/layout.tsx:91-98`).
- permissão: só papéis admin/master entram no painel (`src/lib/painel-permissoes.ts`).
- menu: parte Conteúdo, grupo `Notícias` > `Listar Notícias` (`Sidebar.tsx:105`). título da tela `Notícias`; botão `+ Cadastrar Notícia`.
- colunas: caixa de seleção, Título, Categoria, Postado por, Data, Status, Views, Ações. em cada linha: chave verde/cinza para publicar/despublicar (dica `Publicar`/`Despublicar`), lápis (`Editar`) e lixeira (`Excluir`). com linhas marcadas aparecem `Limpar seleção` e `Excluir N selecionadas`.
- faz: lista de notícias com filtros (categoria, subcategoria, busca, ordenação por coluna), seleção em lote e paginação.
- ações: publicar/despublicar (`toggleStatus`, :235), excluir uma (:259) ou em lote (`excluirLote`, :306; resumo "Nenhuma das N foi excluída" :103), editar, revalidar (`revalidarAposAcao`, :76,251,260,325).
- APIs: `noticias.listar` (:185), `noticias.toggleStatus`, `noticias.excluir`, `noticias.excluirLote`, `categorias.listar` (:197), `subcategorias.listar` (:201).
- estados: erro "Erro ao carregar notícias: …" (:190); vazio "Nenhuma notícia encontrada." (:546).
- problemas: fato — `categorias.listar().then(setCategorias)` e `subcategorias.listar().then(...)` sem `catch` (:197,201): falha vira promessa rejeitada e filtros vazios, sem aviso.
- admin vs cliente: o jornalista (`/minha-conta/noticias`) cria/edita as próprias matérias e só envia para aprovação. Admin publica direto, edita qualquer autor, exclui em lote. O cliente não tem lote.

## o que você vê
Lista de todas as notícias do portal, para buscar, publicar, tirar do ar, editar ou apagar.
- `Buscar por título...`, `Todas as categorias`, `Todas as subcategorias`, `Todos os status` e datas (`Publicada de` / `Publicada até`): filtros da lista.
- Status: Publicado (está no site), Rascunho (guardada, não aparece), Arquivado (tirada do ar). Um aviso de agendada indica que ela fica escondida até a data de publicação.
- Postado por: quem escreveu ou enviou a notícia.
- Views: quantas vezes a notícia foi vista no site.
- Data: data de publicação; clicar nos títulos das colunas muda a ordem.
- caixinhas de seleção: marcam várias notícias para apagar de uma vez.
- chave de publicar (dica `Publicar` / `Despublicar`): coloca no site ou tira do site na hora.
- lápis edita; lixeira apaga, sempre com confirmação (`Excluir notícia?`). Para apagar várias: marque as caixas e use `Excluir N selecionadas`.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-noticias.png](../prints/painel-noticias.png) · dados brutos: [json](../prints/json/painel-noticias.json)
- aberta em `/painel/noticias`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1147,16,109,34)
- [menu] "29 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Cadastrar Notícia · Listar Notícias · Gerenciar Categorias · Gerenciar Subcategorias · Autor · Jornalistas · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados …" — menu lateral, no topo da página, à esquerda (lista de 29 itens em coluna) (10,18,255,1017)
- [título] "Notícias" — topo, no topo da página, à esquerda (300,19,70,28)
- [campo] "Buscar por título..." — conteúdo, na parte de cima, ao centro (472,91,714,38)
- [link] "+ Cadastrar Notícia" — conteúdo, na parte de cima, à esquerda (300,92,160,36)
- [campo] "Categoria" — conteúdo, na parte de cima, ao centro, logo abaixo de “Buscar por título...” (465,154,208,38)
- [campo] "Subcategoria" — conteúdo, na parte de cima, ao centro, logo abaixo de “Buscar por título...” (681,154,208,38)
- [campo] "Publicada de" — conteúdo, na parte de cima, à direita, logo abaixo de “Buscar por título...” (898,155,134,36)
- [campo] "Publicada até" — conteúdo, na parte de cima, à direita, logo abaixo de “Buscar por título...” (1044,155,134,36)
- [coluna] "ID" — conteúdo, na parte de cima, à esquerda (340,221,50,41)
- [coluna] "Título" — conteúdo, na parte de cima, ao centro (390,221,148,41)
- [coluna] "Categoria" — conteúdo, na parte de cima, ao centro (538,221,120,41)
- [coluna] "Postado por" — conteúdo, na parte de cima, ao centro (658,221,152,41)
- [coluna] "Data" — conteúdo, na parte de cima, ao centro (810,221,85,41)
- [coluna] "Status" — conteúdo, na parte de cima, à direita (894,221,108,41)
- [coluna] "Views" — conteúdo, na parte de cima, à direita (1002,221,94,41)
- [coluna] "Ações" — conteúdo, na parte de cima, à direita (1096,221,160,41)
- [checkbox] "Selecionar todas as notícias desta página" — conteúdo, na parte de cima, à esquerda (316,233,16,16)
- [botão] "Data" — conteúdo, na parte de cima, ao centro, logo abaixo de “Subcategoria” (826,233,44,16)
- [botão] "Views" — conteúdo, na parte de cima, à direita, logo abaixo de “Publicada de” (1018,233,53,16)
- [link] "Editar" — conteúdo, na parte de cima, à direita (1168,274,24,24)
- [botão] "Excluir" — conteúdo, na parte de cima, à direita, logo abaixo de “Ações” (1200,274,24,24)
- [botão] "Publicar" — conteúdo, na parte de cima, à direita, logo abaixo de “Ações” (1112,276,40,20)
- [selo] "rascunho" — conteúdo, na parte de cima, à direita (910,278,65,18)
- [checkbox] "Selecionar “Notícia QA teste“" — conteúdo, na parte de cima, à esquerda, logo abaixo de “Selecionar todas as notícias desta ” (316,280,16,16)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
