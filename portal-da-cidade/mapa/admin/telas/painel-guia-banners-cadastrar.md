# /painel/guia/banners/cadastrar — novo banner (`.../cadastrar/page.tsx`)
- gate: NÃO depende do módulo `guia`: `/painel/guia/banners` está em `ROTAS_FORA_DO_MODULO` (`src/lib/painel-menu.ts`); é publicidade do portal. Posições de banner dependem do módulo de cada posição (`MODULO_POR_POSICAO`, `banners/page.tsx:91`, `posicoesOferecidas` :113).
- menu: item solto `Banners Publicitários` na parte Conteúdo do menu lateral (não fica dentro de `Guia Comercial`, `Sidebar.tsx:246`).
- permissão: só papéis admin/master entram no painel (`src/lib/painel-permissoes.ts`).
- chegar: `Banners Publicitários` > botão `+ Novo Banner`. título da tela `Novo Banner`.
- campos (rótulos exatos, `cadastrar/page.tsx:147-285`): `Título *`, `Imagem *` (obrigatória), `URL de Destino`, `Posição *` (lista de locais com busca `Filtrar local de exibição`, agrupada por página; `SeletorDePosicao`), `Categoria do Guia` (só na posição de topo do Guia; opção `Todas as categorias (banner geral do Guia)`), `Data início`, `Data fim`, `Ordem`, caixa `Ativo`. botões `Salvar Banner` e `Cancelar`.
- só em posição de ponto turístico (`CamposDoPontoTuristico`): `Ponto turístico`, `Texto acima do banner`, `Empresa do Guia (opcional)`, `Distância digitada (km)`; e bloco `O que aparece no card` com `WhatsApp (botão CONTATO)` e `Endereço (botão COMO CHEGAR)` (`CamposDeExibicao`). só em posição de roteiro (`CamposDoRoteiro`): `Roteiro sugerido`, `Texto acima do banner`.
- bloco `Dados da venda` (sempre; `CamposDeVenda`): `Nome da Empresa *`, `Telefone *`, `Valor do Plano *`, `Atrelar a um cliente`. prévia do banner ao lado (`PreviaDoBanner`).
- APIs: `guia.categorias.listar` (:40, `.catch(() => {})`), `guia.banners.criar` (:125). Salvou → volta para a lista de banners (:130). a seta `←` no topo também volta.
- estados: "Selecione uma imagem." (:79); telefone inválido (:81); `formatApiError` (:132).
- problemas: fato — erro de categorias engolido (:40): o campo de categoria fica vazio sem aviso.
- admin vs cliente: o cliente usa `/minha-conta/publicidade/nova` (escolhe plano, paga, imagem, URL). Admin não passa pelo pagamento e pode usar posições de ponto/roteiro.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-guia-banners-cadastrar.png](../prints/painel-guia-banners-cadastrar.png) · dados brutos: [json](../prints/json/painel-guia-banners-cadastrar.json)
- aberta em `/painel/guia/banners/cadastrar`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1147,16,109,34)
- [menu] "25 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Computador · Celular · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Artigos · Orçamentos Online · A Voz do Povo …" — menu lateral, faixa larga no topo da página (lista de 25 itens em coluna) (10,18,1157,871)
- [título] "Novo Banner" — topo, no topo da página, à esquerda (300,19,112,28)
- [título] "Novo Banner" — conteúdo, na parte de cima, à esquerda (320,99,124,28)
- [link] "←" — conteúdo, na parte de cima, à esquerda (292,101,16,24)
- [campo] "Ex: Promoção Verão 2025" — conteúdo, na parte de cima, ao centro, logo abaixo de “Novo Banner” (317,200,622,38)
- [envio de arquivo] "" — conteúdo, na parte de cima, ao centro, logo abaixo de “Ex: Promoção Verão 2025” (317,282,622,38)
- [campo] "https://..." — conteúdo, na parte de cima, ao centro (317,364,622,38)
- [botão] "Home — Topo da página (2000×400)" — conteúdo, no meio da tela, ao centro, logo abaixo de “https://...” (317,446,622,38)
- [campo] "Nome da Empresa *" — conteúdo, no meio da tela, ao centro (317,605,303,38)
- [campo] "Telefone *" — conteúdo, no meio da tela, ao centro (636,605,303,38)
- [campo] "Valor do Plano *" — conteúdo, no meio da tela, ao centro, logo abaixo de “Nome da Empresa *” (317,683,622,38)
- [campo] "Atrelar a um cliente" — conteúdo, no meio da tela, ao centro, logo abaixo de “Valor do Plano *” (317,761,622,38)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
- [campo] "" — conteúdo, no meio da tela, ao centro, logo abaixo de “Atrelar a um cliente” (317,863,303,38)
- [campo] "" — conteúdo, no meio da tela, ao centro, logo abaixo de “Atrelar a um cliente” (636,863,303,38)
- [campo] "0" — conteúdo, mais abaixo (rolando a página), ao centro (317,945,303,38)
- [checkbox] "Ativo" — conteúdo, mais abaixo (rolando a página), ao centro (636,957,16,16)
- [botão] "Salvar Banner" — conteúdo, no fim da página, ao centro, logo abaixo de “0” (317,1011,512,42)
- [link] "Cancelar" — conteúdo, no fim da página, à direita (841,1011,98,42)

## o que você vê
Cadastra um banner de publicidade na mão, sem o cliente passar pelo pagamento do site.
- Título: nome do banner, para você achar na lista.
- Imagem: a arte do banner (obrigatória). a prévia ao lado mostra como fica no lugar escolhido.
- URL de Destino: página que abre quando o visitante clica no banner.
- Posição: onde o banner aparece no portal. no topo do Guia, "Categoria do Guia" escolhe uma categoria ou todas.
- ponto turístico ou roteiro: em posições de turismo, escolhe um ponto/roteiro específico ou "sem anunciante próprio (reserva)".
- Data início / Data fim: período em que o banner fica no ar.
- Ordem: número para ordenar os banners.
- Ativo: desmarcado, o banner fica fora do ar.
- Dados da venda: nome da empresa, telefone e valor do plano (obrigatórios) e, se quiser, o cliente de "Meus Clientes". ficam só para você; o visitante não vê.
- O que aparece no card: WhatsApp (botão CONTATO) e endereço (botão COMO CHEGAR), usados nos banners de ponto turístico. vão para o site; em branco, o botão não aparece.
- Salvar Banner: grava e volta para a lista.
