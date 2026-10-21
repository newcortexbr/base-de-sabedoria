# /painel/noticias/fontes-rss/[id]/editar (`.../[id]/editar/page.tsx`, 55 linhas)
- gate: módulo `noticias` (prefixo `/painel/noticias`); desligado mostra "ModuloDesativado" (`painel/layout.tsx:91-98`).
- permissão: só papéis admin/master entram no painel (`src/lib/painel-permissoes.ts`).
- faz: `fontesRss.detalhe(id)` (:24) e `FonteRssForm` preenchido (`atualizar`, FonteRssForm:159).
- estados: erro na carga vira `fonte: null` → "Fonte de RSS não encontrada." (:26,44).
- problemas: fato — qualquer erro de carga (rede, 500, 403) aparece como "não encontrada", como em `/painel/noticias/[id]/editar`.
- admin vs cliente: sem equivalente.

## o que você vê
Tela para mudar uma fonte de notícias automáticas já cadastrada; os campos são os do cadastro.
- Título *: nome da fonte.
- URL do RSS *: o endereço do feed de notícias do site.
- Quantidade de notícias por vez *: quantas notícias novas são trazidas em cada busca.
- Status *: ligada ou desligada; desligada, a fonte não importa nada.
- categoria e subcategoria: onde as notícias trazidas serão colocadas.
- verificar: testa se o endereço funciona antes de salvar.
- "Fonte de RSS não encontrada": a fonte foi apagada ou houve falha ao carregar; tente recarregar.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-noticias-fontes-rss-id-editar.png](../prints/painel-noticias-fontes-rss-id-editar.png) · dados brutos: [json](../prints/json/painel-noticias-fontes-rss-id-editar.json)
- aberta em `/painel/noticias/fontes-rss/1/editar` com dados do banco de teste; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1147,16,109,34)
- [menu] "30 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Cadastrar Notícia · Listar Notícias · Gerenciar Categorias · Gerenciar Subcategorias · Autor · Jornalistas · Notícias Automáticas · Fontes de RSS · Guia Comercial · Vagas de Emprego …" — menu lateral, no topo da página, à esquerda (lista de 30 itens em coluna) (10,18,255,1053)
- [título] "Editar: Agência Brasil" — topo, no topo da página, à esquerda (300,19,186,28)
- [radio] "Ligada" — conteúdo, no meio da tela, à esquerda (320,396,13,13)
- [radio] "Desligada" — conteúdo, no meio da tela, à esquerda (403,396,13,13)
- [lista de opções] "Quantidade de notícias por vez *" — conteúdo, no meio da tela, à esquerda, logo abaixo de “Ligada” (320,473,160,36)
- [checkbox] "Publicar direto no site" — conteúdo, no meio da tela, à esquerda, logo abaixo de “Quantidade de notícias por vez *” (320,528,13,13)
- [botão] "Salvar" — conteúdo, no meio da tela, à esquerda (320,704,82,38)
- [botão] "Cancelar" — conteúdo, no meio da tela, ao centro (410,704,90,38)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
