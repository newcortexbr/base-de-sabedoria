# /painel/vagas — lista de vagas de emprego (`src/app/painel/vagas/page.tsx`)
- gate: módulo `vagas` (prefixo `/painel/vagas`); desligado mostra "ModuloDesativado" (`painel/layout.tsx:91-98`). ATENÇÃO: "vagas" no frontend = vagas de emprego.
- permissão: só papéis admin/master entram no painel (`src/lib/painel-permissoes.ts`).
- faz: lista paginada com filtros (busca, área, status) na URL; recarrega em silêncio (:52,77).
- ações: alternar `ativa`↔`encerrada` (:121), excluir (:112), abrir editar e Insights (:248); revalida o site após cada ação (:22,113,125).
- APIs: `vagas.vagas.listar|atualizar|excluir` (:60,112,123), `vagas.areas.listar` (:61, com `catch` que devolve lista vazia).
- estados: erro `formatApiError` (:67,116,127); vazio "Nenhuma vaga encontrada" (:181).
- problemas: fato — a falha de áreas é engolida (:61 `.catch(() => [])`), então o filtro de área some sem aviso. fato — admin só tem encerrar/reativar; não há "pausar".
- admin vs cliente: o contratante (`/minha-conta/vagas`) cria, edita e encerra as próprias vagas, sujeito a plano/limite. O admin gerencia todas, sem limite. A vaga expira por cron (comentário :12-18).

## o que você vê
Lista de todas as vagas de emprego do portal, para buscar, encerrar, editar, ver números ou apagar.
- para abrir: na parte Conteúdo do menu, em `Vagas de Emprego`, clique em `Listar Vagas`.
- botões do topo: `Gerenciar Áreas` e `+ Nova Vaga`.
- campo "Buscar por cargo ou empresa...", "Todas as áreas" e "Todos os status", depois `Filtrar`: encontram uma vaga.
- Status: Ativa (aparece no site), Pausada (escondida por enquanto), Encerrada (vaga fechada), Pendente (esperando aprovação), Reprovada (não aprovada).
- selos ⭐ Destaque (aparece com mais visibilidade) e ⚡ Urgente (marcada como contratação urgente).
- Tipo: tipo de contrato (CLT, PJ / Autônomo, Estágio, Trainee, Temporário, Freelancer). Local: cidade e bairro da vaga.
- WhatsApp: indica a vaga com contato por WhatsApp.
- clicar no selo de Status da linha: Ativa vira Encerrada; qualquer outra (Pausada, Encerrada, Pendente, Reprovada) vira Ativa (Pendente e Reprovada pedem confirmação "Publicar").
- `Editar` abre a vaga; `Insights` mostra visualizações e prazos; `Excluir` apaga, com confirmação.
- vagas também saem do ar sozinhas quando passam da data de expiração.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-vagas.png](../prints/painel-vagas.png) · dados brutos: [json](../prints/json/painel-vagas.json)
- aberta em `/painel/vagas`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1147,16,109,34)
- [menu] "27 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Listar Vagas · Nova Vaga · Áreas de Vagas · Contratantes · Classificados · Guia Turístico / Eventos · Artigos …" — menu lateral, no topo da página, à esquerda (lista de 27 itens em coluna) (10,18,255,953)
- [título] "Vagas de Emprego" — topo, no topo da página, à esquerda (300,19,161,28)
- [título] "Vagas de Emprego" — conteúdo, na parte de cima, à esquerda (300,99,215,32)
- [link] "Gerenciar Áreas" — conteúdo, na parte de cima, à direita (987,108,142,38)
- [link] "+ Nova Vaga" — conteúdo, na parte de cima, à direita (1141,108,115,38)
- [campo] "Buscar por cargo ou empresa..." — conteúdo, na parte de cima, ao centro, logo abaixo de “Vagas de Emprego” (317,196,462,38)
- [campo] "Área" — conteúdo, na parte de cima, à direita (791,196,208,38)
- [botão] "Filtrar" — conteúdo, na parte de cima, à direita (1167,196,72,38)
- [coluna] "Vaga" — conteúdo, na parte de cima, ao centro (301,276,254,41)
- [coluna] "Área" — conteúdo, na parte de cima, ao centro (555,276,77,41)
- [coluna] "Local" — conteúdo, na parte de cima, ao centro (632,276,154,41)
- [coluna] "Tipo" — conteúdo, na parte de cima, ao centro (786,276,70,41)
- [coluna] "WhatsApp" — conteúdo, na parte de cima, à direita (856,276,116,41)
- [coluna] "Status" — conteúdo, na parte de cima, à direita (972,276,91,41)
- [botão] "ativa" — conteúdo, na parte de cima, à direita, logo abaixo de “Status” (996,337,43,24)
- [link] "Insights" — conteúdo, na parte de cima, à direita (1103,341,46,16)
- [link] "Editar" — conteúdo, na parte de cima, à direita (1157,341,34,16)
- [botão] "Excluir" — conteúdo, na parte de cima, à direita (1199,341,40,16)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
