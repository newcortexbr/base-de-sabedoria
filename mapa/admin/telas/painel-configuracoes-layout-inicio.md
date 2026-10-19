# /painel/configuracoes/layout/inicio (Tela Início)

Arquivos: `app/painel/configuracoes/layout/inicio/page.tsx` (1516 linhas), `../PreviaDoSite.tsx`, `../actions.ts`, `app/previa-painel/inicio` (página de prévia), `lib/modulos.ts`

## rota e gate
- `/painel/configuracoes/layout/inicio`. client. gate `PainelGuard` (admin/master). a rota não depende de módulo; dentro da tela, o tipo de bloco só pode ser criado se o módulo dele estiver ligado (`MODULO_POR_TIPO_BLOCO`, `:66`; regra T106/D-45).

## o que faz
- monta a página inicial do portal por blocos: lista ordenável (arrastar) de blocos, cada um com tipo, modelo de layout e configuração. "Arraste para reordenar. Clique em + para adicionar blocos." (`:1473`).
- tipos (`TIPOS`, `:50`): Notícias, Guia Comercial, Vagas de Emprego, Eventos, Guia Turístico, Classificados, Publicidade (banner), Categorias, A Voz do Povo (utilidade). `TIPOS` não é filtrado por módulo de propósito, para que blocos antigos de módulo desligado continuem visíveis na lista (desligar esconde, não apaga).
- cada tipo tem modelos (`MODELOS_POR_TIPO`, ex.: Notícias "Modelo 1: grade 3 colunas — 6 notícias").

## ações e campos
- Adicionar bloco (modal de 3 passos): 1 escolher tipo (só módulos ligados), 2 escolher modelo (passar o mouse mostra a prévia, clicar escolhe), 3 configurar. editar abre direto no passo 3.
- configuração por tipo (campos `config`): título, seção, categoria (`categoria_slug`), subcategoria (`subcategoria_slug`), área de vagas (`area_slug`); listas vêm de categorias de Notícias, Guia, Classificados, Turismo e áreas de Vagas.
- prévia ao lado do modal: a home real do portal com o bloco desenhado (`/previa-painel/inicio?tipo=…&modelo=…&config=…`), com atraso de 700 ms ao digitar (`:910`, `:1362`).
- na lista: arrastar para reordenar (`handleDragEnd`, `:1403`, otimista com reversão se falhar), ativar/desativar (`handleToggle`, `:1446`), editar, remover (`confirm('Remover este bloco?')`, `:1436`).
- toda alteração bem-sucedida chama `revalidarLayoutBestEffort` (`:31`).

## apis (`lib/admin-api.ts`)
- `blocoHome.listar` (`:2162`), `.criar` (`:2163`), `.atualizar` PATCH (`:2165`), `.deletar` (`:2167`), `.reordenar` POST `{ids}` (`:2168`)
- listas do modal: `categorias.listar`, `subcategorias.listar`, `guia.categorias.listar`, `classificados.categorias.listar`, `turismo.categorias.listar`, `vagas.areas.listar`
- pública: `createPortalApi(getPortalSlug()).guia.config()` para a lista de módulos ativos
- Server Action `revalidarLayout` (`../actions.ts:33`)

## estados
- carregando; falha de carga: texto vermelho e lista oculta, para não mostrar falso "nenhum bloco" nem permitir criar sem ver os existentes (`:1381-1393`).
- vazio: "Nenhum bloco ainda — Adicione blocos para montar a página inicial" + botão "+ Adicionar primeiro bloco" (`:1487`).
- erro de ação: toast no rodapé por 2,5 s (reordenar, remover, ativar); erro ao salvar no modal fica dentro do modal (`erro`).
- falha ao carregar categorias: `erroCategorias` avisa que a lista pode estar incompleta (`:929`).
- falha ao carregar módulos ativos é silenciosa (`.catch(() => {})`, `:1396-1399`) e libera todos os tipos.

## em nome do cliente
- não age em nome de cliente. o bloco "Publicidade" mostra banners de clientes (venda de espaço); a tela não escolhe qual cliente aparece.

## possíveis problemas
- fato: arquivo único de 1516 linhas, com modal e dados de modelo; difícil de manter e de testar (hipótese: risco de regressão ao mexer em qualquer tipo).
- fato: erros de feedback no toast somem em 2,5 s (`showFeedback`); mensagens longas do servidor podem ser perdidas.
- fato: `.catch(() => {})` na carga de módulos ativos (`:1398`) libera tipos de módulos desligados; o dono pode criar bloco que nunca será exibido (a própria tela diz que isso é bug, `:62-64`).
- fato: remoção usa `confirm()` nativo e remove sem desfazer.
- fato: o modal não declara `role="dialog"`/`aria-modal` nem trata Esc (grep sem ocorrências); acessibilidade fraca (hipótese de impacto para teclado/leitor de tela).
- fato: a lista na tela deixa o toggle ativo/inativo sem feedback de sucesso (só erro).
- fato: reordenar envia só `ids` (sem versão); duas abas/admins ao mesmo tempo podem sobrescrever a ordem (hipótese, última escrita vence).

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-configuracoes-layout-inicio.png](../prints/painel-configuracoes-layout-inicio.png) · dados brutos: [json](../prints/json/painel-configuracoes-layout-inicio.json)
- aberta em `/painel/configuracoes/layout/inicio`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [menu] "27 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Artigos · Orçamentos Online · A Voz do Povo · Melhores da Cidade · Banners Publicitários …" — menu lateral, no topo da página, à esquerda (lista de 27 itens em coluna) (10,18,255,949)
- [link] "Configurações" — conteúdo, no topo da página, ao centro (516,36,91,20)
- [link] "Layout" — conteúdo, no topo da página, ao centro (627,36,43,20)
- [título] "Tela Início" — conteúdo, no topo da página, ao centro (516,84,365,36)
- [botão] "+ Adicionar bloco" — conteúdo, no topo da página, à direita (881,84,159,40)
- [botão] "+ Adicionar primeiro bloco" — conteúdo, na parte de cima, ao centro (665,370,225,40)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
