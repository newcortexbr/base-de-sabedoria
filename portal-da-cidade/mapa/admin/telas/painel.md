# /painel (painel inicial)

Arquivo: `portal-cidade/frontend/src/app/painel/page.tsx`

## rota e gate
- rota `/painel`. client component.
- gate vem do `painel/layout.tsx:38-110` (`PainelGuard`): sem login vai para `/painel/login`; papéis fora de admin/master/sem_portal são recusados; `sem_portal` só alcança `/painel/sem-acesso` e `/painel/alterar-senha` (`lib/painel-permissoes.ts:15,40-44`). o token `tipo` ausente conta como admin.
- gate de módulo: `rotaPainelLiberada` (`lib/painel-menu.ts`); `/painel` não pertence a módulo.

## o que faz
- mostra tráfego do portal, contadores de conteúdo, atalhos de cadastro e a lista "precisa da sua atenção".

## ações e campos
- atalhos "+ Notícia / Empresa / Vaga / Anúncio / Evento / Ponto turístico" (`page.tsx:18-25`), só links.
- contadores clicáveis: notícias publicadas, empresas ativas, anúncios, eventos, rascunhos (`page.tsx:88-92`).
- `TrafegoDoPortal`: período 7 dias ou datas início/fim, exporta PDF (`components/painel/TrafegoDoPortal.tsx:360-400`).
- `PrecisaDeAtencao`: lista de pendências do portal.

## apis (`lib/admin-api.ts`)
- `adminApi.dashboard.get` (`:786`) GET `/painel/<slug>/dashboard/`
- `adminApi.trafego.get` (`:797`) 
- `adminApi.pendencias.get` (`:791`)

## estados
- carregando: 5 cartões cinza (`page.tsx:95-99`); pendências: "Conferindo pendências…".
- erro: faixa `role=alert` com `formatApiError` (`page.tsx:84`), separada em cada bloco.
- vazio: tráfego mostra "Nenhum acesso no período." (`TrafegoDoPortal.tsx:249,296`).

## possíveis problemas
- fato: "Rascunhos" e "Notícias publicadas" apontam para a mesma lista `/painel/noticias` (`page.tsx:88,92`); o contador de rascunhos não filtra.
- fato: o link "Anúncio" vai para `/painel/classificados/cadastrar` (módulo classificados = anúncios, correto pela nomenclatura do projeto). "Vaga" vai para `/painel/vagas/cadastrar`.
- fato: se o módulo estiver desligado o atalho ainda aparece; o guard mostra "Módulo desativado" (`layout.tsx:96-98`).
- hipótese: falha do `/config/` é engolida (`layout.tsx:57`) e libera tudo; o servidor continua recusando com 404.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel.png](../prints/painel.png) · dados brutos: [json](../prints/json/painel.json)
- aberta em `/painel`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1147,16,109,34)
- [menu] "23 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Artigos · Orçamentos Online · A Voz do Povo · Melhores da Cidade · Banners Publicitários …" — menu lateral, no topo da página, à esquerda (lista de 23 itens em coluna) (10,18,255,871)
- [título] "Painel" — topo, no topo da página, à esquerda (300,19,53,28)
- [título] "Tráfego do portal" — conteúdo, na parte de cima, ao centro (304,93,394,29)
- [botão] "Baixar relatório PDF" — conteúdo, na parte de cima, à direita (1077,105,175,36)
- [botão] "7 dias" — conteúdo, na parte de cima, ao centro (735,107,61,32)
- [botão] "30 dias" — conteúdo, na parte de cima, ao centro (796,107,66,32)
- [botão] "Este mês" — conteúdo, na parte de cima, à direita (861,107,78,32)
- [botão] "Personalizado" — conteúdo, na parte de cima, à direita (940,107,125,32)
- [título] "Acessos por dia" — conteúdo, no meio da tela, à esquerda (325,414,116,23)
- [título] "Acessos por seção" — conteúdo, no meio da tela, à esquerda (325,719,137,23)
- [título] "Mais lidas no período" — conteúdo, no meio da tela, à direita (806,719,153,23)
- [coluna] "Posição" — conteúdo, no meio da tela, ao centro (806,753,24,27)
- [coluna] "Página" — conteúdo, no meio da tela, à direita (830,753,249,27)
- [coluna] "Seção" — conteúdo, no meio da tela, à direita (1079,753,163,27)
- [coluna] "Acessos" — conteúdo, no meio da tela, à direita (1242,753,103,27)
- [coluna] "Tempo médio" — conteúdo, no meio da tela, à direita (1345,753,141,27)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
- [título] "Administração do portal" — conteúdo, mais abaixo (rolando a página), à esquerda (304,955,241,29)
- [menu/links] "6 itens: Notícia · Empresa · Vaga · Anúncio · Evento · Ponto turístico" — menu, mais abaixo (rolando a página), à direita (lista de 6 itens em coluna) (650,973,602,32)
- [link] "0Notícias publicadas (e outros 4 parecidos)" — conteúdo, mais abaixo (rolando a página), à esquerda (repetido ×5, um sob o outro) (304,1019,227,82)
- [título] "Precisa da sua atenção" — conteúdo, no fim da página, à esquerda (325,1229,191,23)

## o que você vê
Tela inicial do painel: quantas pessoas visitaram o site, quanto conteúdo está no ar e o que espera por você.
- Tráfego do portal: visitas ao site, contadas pelo próprio portal (não pelo Google).
- `7 dias` / `30 dias` / `Este mês` / `Personalizado`: escolhe o período; em Personalizado, escolha "Data inicial" e "Data final" e clique em `Aplicar`.
- `Baixar relatório PDF`: baixa os números do período.
- Acessos (páginas vistas): quantas páginas foram abertas no período; a mesma pessoa abrindo 3 páginas conta 3.
- Visitantes: pessoas diferentes por dia, somadas; a mesma pessoa em três dias conta três vezes.
- Tempo médio na página: quanto tempo, em média, alguém fica numa página.
- Páginas por visitante: acessos divididos por visitantes.
- selo com seta e %: quanto subiu ou caiu em relação ao período anterior do mesmo tamanho; "igual" quando não mudou.
- Acessos por dia: gráfico com acessos e visitantes de cada dia.
- Acessos por seção (`Ver as N seções` mostra todas): quanto cada parte do site (Notícias, Guia Comercial etc.) recebeu.
- Mais lidas no período: páginas mais abertas, com acessos e tempo médio.
- "As visitas são contadas desde…": antes dessa data não há dados.
- atalhos `Notícia`, `Empresa`, `Vaga`, `Anúncio`, `Evento` e `Ponto turístico` (cada um com +): abrem o cadastro; `Evento` abre a lista de eventos, onde se clica em `+ Novo Evento`.
- Notícias publicadas, Empresas ativas, Anúncios, Eventos, Rascunhos: quantos existem hoje; clique para abrir a lista.
- Precisa da sua atenção: pendências (empresas aguardando aprovação, fila de aprovação, faturas vencidas, denúncias novas, comissões para pagar por fora), cada uma com um botão: `Revisar` (empresas), `Abrir fila`, `Ver no Financeiro`, `Ler` (denúncias da Voz do Povo) e `Ver parceiros`.
