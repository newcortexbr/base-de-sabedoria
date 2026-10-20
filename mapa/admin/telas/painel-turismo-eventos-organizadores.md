# /painel/turismo/eventos/organizadores — organizadores (`.../organizadores/page.tsx`)
- gate: módulo `eventos` (prefixo `/painel/turismo/eventos`, avaliado antes de `turismo` na lista de prefixos); desligado mostra "ModuloDesativado" (`painel/layout.tsx:91-98`). Produto separado do Turismo, embora more no mesmo caminho.
- permissão: só papéis admin/master entram no painel (`src/lib/painel-permissoes.ts`).
- faz: lista de organizadores de eventos (conta do cliente que cria eventos) com contagem de eventos.
- ações: novo, editar, excluir com `confirm` "eventos vinculados perderão o vínculo" (:79); revalida (`revalidarOrganizadorEvento`).
- APIs: `turismo.organizadoresEvento.listar|excluir`, `turismo.eventos.listar` (:58, catch).
- estados: erro (:86); vazio "Nenhum organizador cadastrado" (:110) e com filtros (:139).
- admin vs cliente: o organizador não se cria sozinho neste frontend; é o admin que cadastra e cria o login. Lacuna a confirmar: não achei autocadastro em `minha-conta` (hipótese).

## o que você vê
Lista de quem organiza eventos (pessoas ou empresas), que podem ter login para cuidar dos próprios eventos.
- Buscar organizador por nome e ordem (Mais recentes primeiro / Nome A–Z).
- número de eventos: quantos eventos cada organizador tem.
- Editar abre o cadastro; apagar pede confirmação, e os eventos ligados perdem o vínculo com ele.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-turismo-eventos-organizadores.png](../prints/painel-turismo-eventos-organizadores.png) · dados brutos: [json](../prints/json/painel-turismo-eventos-organizadores.json)
- aberta em `/painel/turismo/eventos/organizadores`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1147,16,109,34)
- [menu] "28 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Pontos Turísticos · Novo Ponto · Categorias · Roteiros · Eventos …" — menu lateral, no topo da página, à esquerda (lista de 28 itens em coluna) (10,18,255,985)
- [título] "Eventos — Organizadores" — topo, no topo da página, à esquerda (300,19,224,28)
- [link] "+ Novo Organizador" — conteúdo, na parte de cima, à direita (1091,99,165,36)
- [título] "Organizadores" — conteúdo, na parte de cima, à esquerda (300,101,168,32)
- [link] "Eventos0" — menu, na parte de cima, à esquerda (305,164,115,44)
- [link] "Categorias8" — menu, na parte de cima, ao centro (422,164,132,44)
- [link] "Organizadores2" — menu, na parte de cima, ao centro (556,164,158,44)
- [selo] "0" — menu, na parte de cima, à esquerda (381,176,22,20)
- [selo] "8" — menu, na parte de cima, ao centro (516,176,22,20)
- [selo] "2" — menu, na parte de cima, ao centro (676,176,22,20)
- [campo] "Buscar organizador por nome" — conteúdo, na parte de cima, ao centro (313,246,547,38)
- [lista de opções] "Filtrar por eventos" — conteúdo, na parte de cima, à direita (872,246,171,38)
- [lista de opções] "Ordenar organizadores" — conteúdo, na parte de cima, à direita (1055,246,188,38)
- [coluna] "Organizador" — conteúdo, na parte de cima, ao centro (301,334,612,41)
- [link] "Editar" — conteúdo, no meio da tela, à direita (1153,401,34,16)
- [botão] "Excluir" — conteúdo, no meio da tela, à direita (1199,401,40,16)
- [link] "Editar" — conteúdo, no meio da tela, à direita (1153,469,34,16)
- [botão] "Excluir" — conteúdo, no meio da tela, à direita, logo abaixo de “Excluir” (1199,469,40,16)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
