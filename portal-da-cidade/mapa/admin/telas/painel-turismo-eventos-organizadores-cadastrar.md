# /painel/turismo/eventos/organizadores/cadastrar (`.../cadastrar/page.tsx`)
- gate: módulo `eventos` (prefixo `/painel/turismo/eventos`, avaliado antes de `turismo` na lista de prefixos); desligado mostra "ModuloDesativado" (`painel/layout.tsx:91-98`). Produto separado do Turismo, embora more no mesmo caminho.
- permissão: só papéis admin/master entram no painel (`src/lib/painel-permissoes.ts`).
- campos: Nome (obrigatório), Descrição, Logo, Cor do logo, "Acesso do proprietário (opcional)".
- ações: salvar (`organizadoresEvento.criar`, :69) e criar acesso (`criarAcesso`, :75); se o acesso falha, modal com "Editar" (:104).
- estados: acesso inválido "Corrija os campos do acesso do proprietário" (:57); `formatApiError` (:79).
- problemas: nenhum confirmado.
- admin vs cliente: o cliente organizador entra com o login criado aqui.

## o que você vê
Tela para cadastrar um organizador de eventos.
- chega-se por `+ Novo Organizador` na aba `Organizadores` de eventos.
- Nome *, Descrição, Logo e Cor do logo: como o organizador aparece no site.
- "Acesso do proprietário (opcional)": Nome do responsável *, E-mail de login * e Senha (`Gerar senha`, `Mostrar`) criam o login para o responsável entrar pela Área do cliente e criar os próprios eventos; os dados também vão por e-mail. Em branco, não cria acesso.
- `Criar Organizador` grava; `Cancelar` volta.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-turismo-eventos-organizadores-cadastrar.png](../prints/painel-turismo-eventos-organizadores-cadastrar.png) · dados brutos: [json](../prints/json/painel-turismo-eventos-organizadores-cadastrar.json)
- aberta em `/painel/turismo/eventos/organizadores/cadastrar`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1147,16,109,34)
- [menu] "28 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Pontos Turísticos · Novo Ponto · Categorias · Roteiros · Eventos …" — menu lateral, no topo da página, à esquerda (lista de 28 itens em coluna) (10,18,255,985)
- [título] "Eventos — Novo Organizador" — topo, no topo da página, ao centro (300,19,254,28)
- [link] "Eventos0" — menu, na parte de cima, ao centro (471,104,115,44)
- [link] "Categorias8" — menu, na parte de cima, ao centro (588,104,132,44)
- [link] "Organizadores2" — menu, na parte de cima, ao centro (722,104,158,44)
- [selo] "0" — menu, na parte de cima, ao centro (547,116,22,20)
- [selo] "8" — menu, na parte de cima, ao centro (682,116,22,20)
- [selo] "2" — menu, na parte de cima, ao centro (842,116,22,20)
- [título] "Novo Organizador" — conteúdo, na parte de cima, ao centro (466,173,624,32)
- [campo] "" — conteúdo, na parte de cima, ao centro, logo abaixo de “Novo Organizador” (490,277,576,38)
- [envio de arquivo] "" — conteúdo, no meio da tela, ao centro (490,480,576,32)
- [título] "Acesso do proprietário (opcional)" — conteúdo, no meio da tela, ao centro (490,660,576,20)
- [campo] "Nome do responsável *" — conteúdo, no meio da tela, ao centro, logo abaixo de “Acesso do proprietário (opcional)” (490,764,282,38)
- [campo] "E-mail de login *" — conteúdo, no meio da tela, à direita, logo abaixo de “Acesso do proprietário (opcional)” (784,764,282,38)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [campo] "Senha inicial *" — conteúdo, no meio da tela, ao centro, logo abaixo de “Nome do responsável *” (490,834,394,44)
- [botão] "Mostrar" — conteúdo, no meio da tela, à direita, logo abaixo de “E-mail de login *” (892,834,70,44)
- [botão] "Gerar senha" — conteúdo, no meio da tela, à direita, logo abaixo de “E-mail de login *” (970,834,96,44)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
- [botão] "Cancelar" — conteúdo, no fim da página, ao centro, logo abaixo de “Senha inicial *” (466,946,307,42)
- [botão] "Criar Organizador" — conteúdo, no fim da página, à direita, logo abaixo de “Senha inicial *” (785,946,305,42)
