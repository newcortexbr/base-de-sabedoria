# /painel/turismo/dicas — dicas para visitantes (`.../dicas/page.tsx`)
- gate: módulo `turismo` (prefixo `/painel/turismo`, `src/lib/painel-menu.ts`); desligado mostra "ModuloDesativado" (`painel/layout.tsx:91-98`).
- permissão: só papéis admin/master entram no painel (`src/lib/painel-permissoes.ts`).
- faz: dicas gerais do portal ("Dicas para Visitantes"): Título, descrição, ícone (emoji, padrão 💡), ordem, ativo. Distintas das dicas por ponto (dentro de `pontos/[id]`).
- ações: criar/editar (:62,65), excluir com `confirm` (:76-80), revalida (:81).
- APIs: `turismo.dicas.listar|criar|atualizar|excluir`.
- estados: `erroCarga` (:31,71); vazio "Nenhuma dica cadastrada ainda" (:221).
- problemas: nenhum confirmado. hipótese — não há item "Dicas" na lista `MODULO_POR_HREF`; só o prefixo `/painel/turismo` o protege (suficiente para o gate).
- admin vs cliente: Turismo não tem área do cliente em `src/app/minha-conta` (sem pasta de turismo). Só o admin gerencia; não há lacuna de paridade.

## o que você vê
Dicas gerais para quem visita a cidade, mostradas no Guia Turístico (não são as dicas de cada ponto).
- Título * (ex.: Vá cedo para evitar filas) e Descrição: o texto da dica.
- ícone: um emoji que aparece ao lado da dica.
- Ordem: posição da dica na lista do site.
- ativo: mostra ou esconde a dica.
- editar muda; apagar pede confirmação.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-turismo-dicas.png](../prints/painel-turismo-dicas.png) · dados brutos: [json](../prints/json/painel-turismo-dicas.json)
- aberta em `/painel/turismo/dicas`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1147,16,109,34)
- [menu] "23 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Artigos · Orçamentos Online · A Voz do Povo · Melhores da Cidade · Banners Publicitários …" — menu lateral, no topo da página, à esquerda (lista de 23 itens em coluna) (10,18,255,871)
- [título] "Dicas para Visitantes" — topo, no topo da página, à esquerda (300,19,181,28)
- [título] "Dicas para Visitantes" — conteúdo, na parte de cima, ao centro (577,99,278,28)
- [botão] "+ Nova Dica" — conteúdo, na parte de cima, à direita (867,106,112,36)
- [botão] "+ Cadastrar primeira dica" — conteúdo, na parte de cima, ao centro (699,329,158,20)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
