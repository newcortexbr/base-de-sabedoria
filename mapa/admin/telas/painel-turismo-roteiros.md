# /painel/turismo/roteiros — roteiros (`.../roteiros/page.tsx`)
- gate: módulo `turismo` (prefixo `/painel/turismo`, `src/lib/painel-menu.ts`); desligado mostra "ModuloDesativado" (`painel/layout.tsx:91-98`).
- permissão: só papéis admin/master entram no painel (`src/lib/painel-permissoes.ts`).
- faz: lista e formulário (na mesma tela) de roteiros turísticos.
- campos: Título, Badge, Duração, Ponto de partida, Descrição, Vídeo (YouTube), paradas (Nome da parada, Tempo sugerido, ponto ligado), foto de capa, galeria de fotos/vídeos (`GaleriaDoRegistro`).
- ações: criar/editar (:179-185), enviar galeria depois do salvar (:193-202), excluir com `confirm` (:229), revalida (`revalidarRoteiro`).
- APIs: `turismo.roteiros.listar|criar|atualizar|excluir`, `turismo.roteiros.fotos.*`.
- estados: erro (:110,168,225,237); falha parcial da galeria: "O roteiro X foi criado, mas só N de M itens entraram" (:220); vazio "Nenhum roteiro cadastrado" (:468); "Nenhuma parada adicionada" (:395).
- problemas: nenhum confirmado.
- admin vs cliente: Turismo não tem área do cliente em `src/app/minha-conta` (sem pasta de turismo). Só o admin gerencia; não há lacuna de paridade.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-turismo-roteiros.png](../prints/painel-turismo-roteiros.png) · dados brutos: [json](../prints/json/painel-turismo-roteiros.json)
- aberta em `/painel/turismo/roteiros`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1147,16,109,34)
- [menu] "28 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Pontos Turísticos · Novo Ponto · Categorias · Roteiros · Eventos …" — menu lateral, no topo da página, à esquerda (lista de 28 itens em coluna) (10,18,255,985)
- [título] "Guia Turístico — Roteiros" — topo, no topo da página, à esquerda (300,19,221,28)
- [botão] "+ Novo Roteiro" — conteúdo, na parte de cima, à direita (1070,99,132,36)
- [título] "Roteiros" — conteúdo, na parte de cima, ao centro (427,101,97,32)
- [link] "← Pontos" — conteúdo, na parte de cima, à esquerda (354,107,61,20)
- [campo] "Buscar por título..." — conteúdo, na parte de cima, ao centro, logo abaixo de “Roteiros” (371,176,658,38)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
