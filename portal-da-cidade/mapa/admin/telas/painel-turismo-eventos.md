# /painel/turismo/eventos — eventos (`.../eventos/page.tsx`, 932 linhas)
- gate: módulo `eventos` (prefixo `/painel/turismo/eventos`, avaliado antes de `turismo` na lista de prefixos); desligado mostra "ModuloDesativado" (`painel/layout.tsx:91-98`). Produto separado do Turismo, embora more no mesmo caminho.
- permissão: só papéis admin/master entram no painel (`src/lib/painel-permissoes.ts`).
- faz: lista e formulário de eventos numa tela, com abas (`AbasEventos`: eventos, categorias, organizadores). Estado exibido: no ar / encerrado / inativo (:48-64; "no ar" calculado no servidor).
- campos: Título, Data, Data de término (opcional), Horário, Local, Endereço completo, Cidade, Categoria, Organizador, Organização, Preço / Ingresso, WhatsApp de contato, Link de compra de ingresso ou rede social, Descrição, Foto de capa, Vídeo (YouTube), CEP, programação (Dia, Horário, Título, Subtítulo, Destaque), Título SEO, Descrição SEO, Destaque, Ativo, galeria.
- ações: criar/editar (:306,336), enviar fotos e vídeos depois (:345-354), excluir com `confirm` (:389), revalida (`revalidarEvento`).
- APIs: `turismo.eventos.listar|criar|atualizar|excluir|fotos.*`, `guia.config.get` (:138), `turismo.categoriasEvento.listar` (:142), `turismo.organizadoresEvento.listar` (:146).
- estados: erro `erro` (:237,280,385,397); falha parcial da galeria: "O evento X foi criado, mas ..." (:380); vazio "Nenhum evento cadastrado" (:854).
- problemas: nenhum confirmado. cidades, categorias e organizadores têm `catch` com aviso em `erroCarga` (:139,143,147).
- admin vs cliente: o organizador cria e edita seus eventos em `/minha-conta/eventos` (`EventoForm`, `GaleriaDoEvento`, nova, [id]/editar). O admin gerencia todos, escolhe o organizador e atribui categoria; o cliente não troca de organizador.

## o que você vê
Lista e cadastro dos eventos da cidade (shows, feiras, festas) mostrados no site.
- para abrir: na parte Conteúdo do menu, em `Guia Turístico / Eventos`, clique em `Eventos`.
- abas `Eventos` / `Categorias` / `Organizadores`: as três partes da área de eventos.
- `← Pontos` volta aos pontos turísticos.
- filtros: "Buscar por título...", "Todas as cidades", "Todas as categorias" e "Todos os status".
- situação: No ar (aparece no site), Encerrado (data já passou), Inativo (desligado à mão).
- `+ Novo Evento` abre o formulário "Novo Evento": Título *, Data * e Horário * (ex.: 19h00 às 23h00), data final para evento de vários dias (fica no ar até ela), Local (ex.: Convento da Penha), Endereço completo e Cidade (o ponto no mapa é achado pelo endereço).
- Categoria e Organizador (ou "Sem organizador"), cada um com o link `Gerenciar`; Organização (texto livre).
- Preço / Ingresso (ex.: Entrada gratuita, R$ 30,00); vazio não mostra preço.
- WhatsApp de contato e Link de compra de ingresso ou rede social.
- Programação: `+ Adicionar item` abre "Novo item" com Dia (opcional), Horário *, Título *, Subtítulo (opcional) e a caixa "Destaque (negrito na programação)"; cada item tem `Editar` e `Excluir`.
- Foto de capa (`Escolher foto`/`Trocar foto`), Galeria de fotos e vídeos, SEO (Título SEO e Descrição SEO; vazio usa título e descrição), Destaque e Ativo.
- `Salvar` grava e `Cancelar` fecha o formulário; na lista, cada evento tem `Editar` e `Excluir` (pede confirmação).
- Ativo desmarcado tira o evento do ar na hora; evento com data passada fica "Encerrado" mesmo ativo.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-turismo-eventos.png](../prints/painel-turismo-eventos.png) · dados brutos: [json](../prints/json/painel-turismo-eventos.json)
- aberta em `/painel/turismo/eventos`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1147,16,109,34)
- [menu] "28 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Pontos Turísticos · Novo Ponto · Categorias · Roteiros · Eventos …" — menu lateral, no topo da página, à esquerda (lista de 28 itens em coluna) (10,18,255,985)
- [título] "Guia Turístico — Eventos" — topo, no topo da página, à esquerda (300,19,218,28)
- [botão] "+ Novo Evento" — conteúdo, na parte de cima, à direita (1072,99,130,36)
- [título] "Eventos Turísticos" — conteúdo, na parte de cima, ao centro (427,101,213,32)
- [link] "← Pontos" — conteúdo, na parte de cima, à esquerda (354,107,61,20)
- [link] "Eventos0" — menu, na parte de cima, à esquerda (359,164,115,44)
- [link] "Categorias8" — menu, na parte de cima, ao centro (476,164,132,44)
- [link] "Organizadores2" — menu, na parte de cima, ao centro (610,164,158,44)
- [selo] "0" — menu, na parte de cima, ao centro (435,176,22,20)
- [selo] "8" — menu, na parte de cima, ao centro (570,176,22,20)
- [selo] "2" — menu, na parte de cima, ao centro (730,176,22,20)
- [campo] "Buscar por título..." — conteúdo, na parte de cima, ao centro (371,250,218,38)
- [campo] "Cidade" — conteúdo, na parte de cima, ao centro (601,250,208,38)
- [campo] "Categoria" — conteúdo, na parte de cima, à direita (821,250,208,38)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
