# /painel/vagas/contratantes/cadastrar (`.../cadastrar/page.tsx`)
- gate: módulo `vagas` (prefixo `/painel/vagas`); desligado mostra "ModuloDesativado" (`painel/layout.tsx:91-98`). ATENÇÃO: "vagas" no frontend = vagas de emprego.
- permissão: só papéis admin/master entram no painel (`src/lib/painel-permissoes.ts`).
- campos: Nome (obrigatório), Descrição, Logo e Cor do logo, E-mail, WhatsApp, Site, Instagram, LinkedIn, YouTube, Verificado, cidade, áreas de atuação, acesso do proprietário (opcional).
- ações: salvar (:119), criar acesso (:125), revalida (:120).
- APIs: `guia.config.get` e `vagas.areas.listar` (:67-68), `vagas.contratantes.criar|criarAcesso`.
- estados: "Não foi possível carregar cidades ou áreas de atuação" (:70); telefone (:85); acesso (:92); "Nenhuma área de vaga cadastrada neste portal ainda" (:310).
- admin vs cliente: equivale ao perfil do contratante no cliente; admin define "Verificado" e senha.

## o que você vê
Tela para cadastrar uma empresa que oferece vagas.
- Nome *, Descrição, Logo e Cor do logo: como a empresa aparece no site.
- Localização: cidade e bairro (escolha a cidade primeiro).
- Áreas de atuação: as áreas em que a empresa contrata.
- Redes sociais e contato: E-mail, WhatsApp, Site, Instagram, LinkedIn, YouTube.
- Verificado: dá o selo de empresa conferida.
- Painel do proprietário (opcional): cria e-mail e senha para o responsável pela empresa entrar e cuidar das próprias vagas; os dados também são enviados por e-mail.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-vagas-contratantes-cadastrar.png](../prints/painel-vagas-contratantes-cadastrar.png) · dados brutos: [json](../prints/json/painel-vagas-contratantes-cadastrar.json)
- aberta em `/painel/vagas/contratantes/cadastrar`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1147,16,109,34)
- [menu] "27 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Listar Vagas · Nova Vaga · Áreas de Vagas · Contratantes · Classificados · Guia Turístico / Eventos · Artigos …" — menu lateral, no topo da página, à esquerda (lista de 27 itens em coluna) (10,18,255,953)
- [título] "Vagas — Novo Contratante" — topo, no topo da página, à esquerda (300,19,231,28)
- [título] "Novo Contratante" — conteúdo, na parte de cima, ao centro (466,99,624,32)
- [campo] "" — conteúdo, na parte de cima, ao centro, logo abaixo de “Novo Contratante” (490,203,576,38)
- [envio de arquivo] "" — conteúdo, no meio da tela, ao centro (490,406,576,32)
- [checkbox] "Verificado" — conteúdo, no meio da tela, ao centro (490,457,13,13)
- [título] "Localização" — conteúdo, no meio da tela, ao centro (490,622,576,20)
- [campo] "Cidade" — conteúdo, no meio da tela, ao centro, logo abaixo de “Localização” (490,682,280,38)
- [título] "Redes sociais e contato" — conteúdo, no meio da tela, ao centro (490,792,576,20)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [campo] "https://linkedin.com/company/…" — conteúdo, no meio da tela, ao centro, logo abaixo de “Redes sociais e contato” (490,852,280,38)
- [campo] "https://instagram.com/…" — conteúdo, no meio da tela, à direita, logo abaixo de “Redes sociais e contato” (786,852,280,38)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
- [campo] "https://…" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “https://linkedin.com/company/…” (490,930,280,38)
- [campo] "https://youtube.com/@…" — conteúdo, mais abaixo (rolando a página), à direita, logo abaixo de “https://instagram.com/…” (786,930,280,38)
- [campo] "(27) 99999-8888" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “https://…” (490,1008,280,38)
- [campo] "contato@empresa.com.br" — conteúdo, mais abaixo (rolando a página), à direita, logo abaixo de “https://youtube.com/@…” (786,1008,280,38)
- [título] "Áreas de atuação" — conteúdo, mais abaixo (rolando a página), ao centro (490,1118,576,20)
- [botão] "Marketing" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Áreas de atuação” (490,1150,79,30)
- [botão] "RH" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Áreas de atuação” (577,1150,43,30)
- [botão] "Saúde" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Áreas de atuação” (628,1150,61,30)
- [botão] "Tecnologia & TI" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Áreas de atuação” (697,1150,109,30)
- [botão] "Educação" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Áreas de atuação” (813,1150,79,30)
- [botão] "Administração" — conteúdo, mais abaixo (rolando a página), à direita, logo abaixo de “Áreas de atuação” (901,1150,102,30)
- [botão] "Vendas & Comercial" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Marketing” (490,1188,135,30)
- [botão] "Construção & Engenharia" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Saúde” (633,1188,163,30)
- [botão] "Alimentação" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Tecnologia & TI” (804,1188,92,30)
- [botão] "Logística & Transporte" — conteúdo, mais abaixo (rolando a página), à direita, logo abaixo de “Administração” (904,1188,146,30)
- [título] "Acesso do proprietário (opcional)" — conteúdo, mais abaixo (rolando a página), ao centro (490,1290,576,20)
- [campo] "Nome do responsável *" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Acesso do proprietário (opcional)” (490,1394,282,38)
- [campo] "E-mail de login *" — conteúdo, mais abaixo (rolando a página), à direita, logo abaixo de “Acesso do proprietário (opcional)” (784,1394,282,38)
- [campo] "Senha inicial *" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Nome do responsável *” (490,1464,394,44)
- [botão] "Mostrar" — conteúdo, mais abaixo (rolando a página), à direita, logo abaixo de “E-mail de login *” (892,1464,70,44)
- [botão] "Gerar senha" — conteúdo, mais abaixo (rolando a página), à direita, logo abaixo de “E-mail de login *” (970,1464,96,44)
- [botão] "Cancelar" — conteúdo, no fim da página, ao centro, logo abaixo de “Senha inicial *” (466,1576,307,42)
- [botão] "Criar Contratante" — conteúdo, no fim da página, à direita, logo abaixo de “Senha inicial *” (785,1576,305,42)
