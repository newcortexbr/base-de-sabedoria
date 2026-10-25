# /painel/turismo/pontos — pontos turísticos (`.../pontos/page.tsx`)
- gate: módulo `turismo` (prefixo `/painel/turismo`, `src/lib/painel-menu.ts`); desligado mostra "ModuloDesativado" (`painel/layout.tsx:91-98`).
- permissão: só papéis admin/master entram no painel (`src/lib/painel-permissoes.ts`).
- faz: lista de pontos com busca.
- ações: novo, editar, excluir com `confirm` "não pode ser desfeita" (:33), revalida (:37).
- APIs: `turismo.pontos.listar` (:22), `excluir` (:36).
- estados: erro de carga `erroCarga` (:28); vazio "Nenhum ponto turístico cadastrado" (:99).
- problemas: fato — erro de exclusão usa `alert()` nativo (:41).
- admin vs cliente: Turismo não tem área do cliente em `src/app/minha-conta` (sem pasta de turismo). Só o admin gerencia; não há lacuna de paridade.

## o que você vê
Lista dos pontos turísticos da cidade (praias, mirantes, museus etc.) mostrados no Guia Turístico.
- para abrir: na parte Conteúdo do menu, em `Guia Turístico / Eventos`, clique em `Pontos Turísticos`.
- campo "Buscar ponto turístico..." com o botão de buscar: acha pelo nome.
- atalhos no topo para `Categorias`, `Roteiros` e `Eventos`.
- Foto e Nome: imagem principal e nome do ponto.
- colunas Foto, Nome, Categoria, Cidade, Status (Ativo/Inativo, com selo Destaque) e Ações.
- `Ver` abre a página pública; `Editar` abre o ponto; `Excluir` pede confirmação e não pode ser desfeito.
- `Novo Ponto` (botão do topo) abre o cadastro; o item `Novo Ponto` do menu faz o mesmo.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-turismo-pontos.png](../prints/painel-turismo-pontos.png) · dados brutos: [json](../prints/json/painel-turismo-pontos.json)
- aberta em `/painel/turismo/pontos`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1147,16,109,34)
- [menu] "28 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Pontos Turísticos · Novo Ponto · Categorias · Roteiros · Eventos …" — menu lateral, no topo da página, à esquerda (lista de 28 itens em coluna) (10,18,255,985)
- [título] "Guia Turístico — Pontos Turísticos" — topo, no topo da página, ao centro (300,19,298,28)
- [título] "Pontos Turísticos" — conteúdo, na parte de cima, à esquerda (300,99,201,32)
- [link] "Categorias" — conteúdo, na parte de cima, à direita (812,108,106,38)
- [link] "Roteiros" — conteúdo, na parte de cima, à direita (930,108,91,38)
- [link] "Eventos" — conteúdo, na parte de cima, à direita (1033,108,88,38)
- [link] "+ Novo Ponto" — conteúdo, na parte de cima, à direita (1133,108,123,38)
- [campo] "Buscar ponto turístico..." — conteúdo, faixa larga na parte de cima (317,196,831,38)
- [botão] "Buscar" — conteúdo, na parte de cima, à direita (1160,196,79,38)
- [link] "Cadastrar primeiro ponto" — conteúdo, no meio da tela, ao centro (674,437,208,36)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
