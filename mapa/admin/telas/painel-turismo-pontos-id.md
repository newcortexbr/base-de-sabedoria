# /painel/turismo/pontos/[id] — editar ponto (`.../pontos/[id]/page.tsx`, 761 linhas)
- gate: módulo `turismo` (prefixo `/painel/turismo`, `src/lib/painel-menu.ts`); desligado mostra "ModuloDesativado" (`painel/layout.tsx:91-98`).
- permissão: só papéis admin/master entram no painel (`src/lib/painel-permissoes.ts`).
- faz: edita o ponto (mesmos campos do novo) com fotos, vídeos, legendas, dicas por ponto e horários, cada bloco com salvar próprio.
- ações: salvar ponto (:349), subir/trocar/remover foto (:210,237,253,266), criar/editar/excluir dica (:297-315), salvar horários (:331).
- APIs: `turismo.pontos.detalhe` (:153), `fotos.listar|criar|atualizar|excluir`, `dicas.criar|atualizar|excluir`, `horarios.listar|salvar`, `turismo.categorias.listar` (:148), `guia.config.get` (:150), `territorio.bairros` (:511).
- estados: se o detalhe falha, `.catch(() => router.push('/painel/turismo/pontos'))` (:173) volta à lista sem mensagem; erro de submit `erroSubmit` (:392); categorias e cidades têm catch com aviso (:149,151).
- problemas: fato — erro ao carregar o ponto redireciona em silêncio para a lista (:173). fato — a tela tem um ramo `isNew` (:79,376) para o id "novo", mas `/painel/turismo/pontos/novo` é uma rota estática própria (`novo/page.tsx`), então esse ramo é código duplicado/inalcançável pela navegação normal.
- admin vs cliente: Turismo não tem área do cliente em `src/app/minha-conta` (sem pasta de turismo). Só o admin gerencia; não há lacuna de paridade.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-turismo-pontos-id.png](../prints/painel-turismo-pontos-id.png) · dados brutos: [json](../prints/json/painel-turismo-pontos-id.json)
- aberta em `/painel/turismo/pontos/[id` (redirecionou para `/painel/turismo/pontos`); coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
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
