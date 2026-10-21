# /painel/classificados/anunciantes/cadastrar — novo anunciante (`.../cadastrar/page.tsx`)
- gate: módulo `classificados` (prefixo `/painel/classificados`, `src/lib/painel-menu.ts`); desligado mostra "ModuloDesativado" (`painel/layout.tsx:91-98`). ATENÇÃO: "classificados" no frontend = anúncios de venda.
- permissão: só papéis admin/master entram no painel (`src/lib/painel-permissoes.ts`).
- campos: Nome (obrigatório), Descrição, Logo e Cor do logo, E-mail, WhatsApp, Site, Instagram, LinkedIn, YouTube, Verificado, cidade (`SeletorDeLocal`), acesso do proprietário (login, opcional).
- ações: salvar (:109), criar acesso logo depois (`criarAcessoDoCadastro`, :115). Se o acesso falhar, mostra modal com "Editar" (:144).
- APIs: `guia.config.get` (cidades, :70), `classificados.anunciantes.criar`, `criarAcesso`.
- estados: "Não foi possível carregar as cidades" (:72); telefone inválido (:79); acesso inválido (:86); `formatApiError` (:120).
- problemas: nenhum confirmado.
- admin vs cliente: equivale a completar perfil do cliente; o admin ainda define "Verificado" e senha inicial (cliente não).

## o que você vê
Tela para cadastrar uma pessoa ou empresa que publica anúncios classificados.
- Nome *, Descrição, Logo e Cor do logo: como o anunciante aparece no site.
- Localização: cidade e bairro (escolha a cidade primeiro).
- Redes sociais e contato: E-mail, WhatsApp, Site, Instagram, LinkedIn, YouTube.
- Verificado: dá o selo de anunciante conferido.
- Painel do proprietário (opcional): cria e-mail e senha para o responsável entrar e cuidar dos próprios anúncios; os dados também são enviados por e-mail.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-classificados-anunciantes-cadastrar.png](../prints/painel-classificados-anunciantes-cadastrar.png) · dados brutos: [json](../prints/json/painel-classificados-anunciantes-cadastrar.json)
- aberta em `/painel/classificados/anunciantes/cadastrar`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1147,16,109,34)
- [menu] "27 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados · Listar Anúncios · Novo Anúncio · Categorias · Anunciantes · Guia Turístico / Eventos · Artigos …" — menu lateral, no topo da página, à esquerda (lista de 27 itens em coluna) (10,18,255,953)
- [título] "Classificados — Novo Anunciante" — topo, no topo da página, ao centro (300,19,291,28)
- [título] "Novo Anunciante" — conteúdo, na parte de cima, ao centro (466,99,624,32)
- [campo] "" — conteúdo, na parte de cima, ao centro, logo abaixo de “Novo Anunciante” (490,203,576,38)
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
- [campo] "https://youtube.com/…" — conteúdo, mais abaixo (rolando a página), à direita, logo abaixo de “https://instagram.com/…” (786,930,280,38)
- [campo] "(27) 99999-9999" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “https://…” (490,1008,280,38)
- [campo] "contato@exemplo.com" — conteúdo, mais abaixo (rolando a página), à direita, logo abaixo de “https://youtube.com/…” (786,1008,280,38)
- [título] "Acesso do proprietário (opcional)" — conteúdo, mais abaixo (rolando a página), ao centro (490,1118,576,20)
- [radio] "Pessoa física" — conteúdo, mais abaixo (rolando a página), ao centro (490,1237,13,13)
- [radio] "Empresa" — conteúdo, mais abaixo (rolando a página), ao centro (610,1237,13,13)
- [campo] "Nome do responsável *" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Pessoa física” (490,1314,282,38)
- [campo] "E-mail de login *" — conteúdo, mais abaixo (rolando a página), à direita (784,1314,282,38)
- [campo] "Senha inicial *" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Nome do responsável *” (490,1384,394,44)
- [botão] "Mostrar" — conteúdo, mais abaixo (rolando a página), à direita, logo abaixo de “E-mail de login *” (892,1384,70,44)
- [botão] "Gerar senha" — conteúdo, mais abaixo (rolando a página), à direita, logo abaixo de “E-mail de login *” (970,1384,96,44)
- [botão] "Cancelar" — conteúdo, no fim da página, ao centro, logo abaixo de “Senha inicial *” (466,1496,307,42)
- [botão] "Criar Anunciante" — conteúdo, no fim da página, à direita, logo abaixo de “Senha inicial *” (785,1496,305,42)
