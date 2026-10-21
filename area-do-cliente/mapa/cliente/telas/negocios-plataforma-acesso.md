# /negocios/[licenseId]/plataforma?acesso — Minha plataforma — portal publicado (montagem e acessos)

Arquivo: `src/app/(cliente)/negocios/[licenseId]/plataforma/page.tsx`

## quem acessa
- cliente logado dono da licença; licença de outro cliente ou inexistente dá "Página não encontrada" (ver ficha nao-encontrado). Só abre para negócio ativo.

## o que faz
- portal publicado: mostra a montagem final do portal e os acessos; ao terminar pede a confirmação de que o cliente conseguiu entrar.

## estados de erro/vazio
- cada passo da montagem fica "Na fila", "Em andamento" ou concluído.
- quando a montagem termina, aparece a pergunta de confirmação de acesso; se o cliente disser que não conseguiu, abre um chamado.

## possíveis problemas para leigo
- o login do painel do portal é pelo botão "Entrar com a Área do Cliente", não por senha separada.

## posições na tela (print de 2026-10-21, 1440x900, página inteira)
- print: [negocios-plataforma-acesso.png](../prints/negocios-plataforma-acesso.png) (45 KB) · dados brutos: [json](../prints/json/negocios-plataforma-acesso.json)
- aberta em `/negocios/<id>/plataforma?simular=PLATFORM_READY` com dados FICTÍCIOS de exemplo (cliente "Mariana Souza Exemplo", Portal da Cidade em Linhares/ES, Colatina/ES e Aracruz/ES)
- coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [menu/links] "9 itens: Início · Meus negócios · Visão geral · Minha plataforma · Treinamentos · Ferramentas · Lives · Suporte · Pagamentos" — menu (14,110,207,366)
- [link] "Meus negócios" — caminho no topo, na parte de cima, à esquerda (272,20,97,24)
- [link] "Portal da Cidade · Linhares/ES" — caminho no topo, na parte de cima, ao centro (404,20,196,24)
- [título] "Seu portal está quase pronto!" — topo, na parte de cima, ao centro (272,203,980,31)
- [título] "Estamos montando o seu portal" — conteúdo, na parte de cima, ao centro (299,307,926,31)
- [selo] "Montando o portal Páginas, tema e conteúdo inicial da cidade Em andamento Criando a área a" — conteúdo, no meio da tela, ao centro (299,356,926,421)
- [selo] "Montando o portal Páginas, tema e conteúdo inicial da cidade Em andamento" — conteúdo, no meio da tela, ao centro (299,356,926,83)
- [selo] "Montando o portal Páginas, tema e conteúdo inicial da cidade" — conteúdo, no meio da tela, ao centro (349,369,766,57)
- [selo] "Em andamento" — conteúdo, no meio da tela, à direita (1129,387,96,20)
- [selo] "Criando a área administrativa Seu acesso pelo login único da Área do Cliente Na fila" — conteúdo, no meio da tela, ao centro (299,439,926,84)
- [selo] "Criando a área administrativa Seu acesso pelo login único da Área do Cliente" — conteúdo, no meio da tela, ao centro (349,453,766,57)
- [selo] "Na fila" — conteúdo, no meio da tela, à direita (1129,472,96,20)
- [selo] "Preparando o banco de dados Categorias, anunciantes e configurações Na fila" — conteúdo, no meio da tela, ao centro (299,524,926,84)
- [selo] "Preparando o banco de dados Categorias, anunciantes e configurações" — conteúdo, no meio da tela, ao centro (349,538,766,57)
- [selo] "Na fila" — conteúdo, no meio da tela, à direita (1129,556,96,20)
- [selo] "Ativando o certificado de segurança Endereço com cadeado (HTTPS) Na fila" — conteúdo, no meio da tela, ao centro (299,608,926,84)
- [selo] "Ativando o certificado de segurança Endereço com cadeado (HTTPS)" — conteúdo, no meio da tela, ao centro (349,622,766,57)
- [selo] "Na fila" — conteúdo, no meio da tela, à direita (1129,641,96,20)
- [selo] "Colocando no ar Últimas verificações Na fila" — conteúdo, no meio da tela, ao centro (299,692,926,84)
- [selo] "Colocando no ar Últimas verificações" — conteúdo, no meio da tela, ao centro (349,706,766,57)
- [selo] "Na fila" — conteúdo, no meio da tela, à direita (1129,725,96,20)
- [link] "Acessar suporte" — menu lateral, no meio da tela, à esquerda (26,726,130,24)
- [link] "ME Mariana Souza Exemplo Minha conta" — menu lateral, no fim da página, à esquerda (14,775,207,63)
- [botão] "Pular" — conteúdo, no fim da página, à esquerda (299,791,33,24)
- [selo] "Pular" — conteúdo, no fim da página, à esquerda (299,791,33,24)
- [botão] "Sair" — menu lateral, no fim da página, à esquerda (14,848,207,38)
- [título] "Seus acessos" — conteúdo, no fim da página, à esquerda (299,885,125,24)
- [link] "https://seuportal.com.br (abre em nova aba)" — conteúdo, no fim da página, ao centro (447,928,233,22)
- [link] "https://seuportal.com.br/painel/login (abre em nova aba)" — conteúdo, no fim da página, ao centro (447,982,346,22)
- [link] "suporte" — conteúdo, no fim da página, ao centro (546,1119,44,15)

## o que você vê
Minha plataforma, portal publicado e em montagem final.
- "PORTAL PUBLICADO — Seu portal está quase pronto!": quando terminar, confirmar abaixo se conseguiu acessar.
- "Estamos montando o seu portal": passos "Montando o portal", "Criando a área administrativa", "Preparando o banco de dados", "Ativando o certificado de segurança", "Colocando no ar", cada um "Em andamento" ou "Na fila".
- "Seus acessos": "Endereço" (o site), "Painel" (…/painel/login) e "Login: pelo botão Entrar com a Área do Cliente".
Menu da esquerda (igual em todas as telas logadas): "Início", "Meus negócios", "Visão geral", "Minha plataforma", "Treinamentos", "Ferramentas", "Lives", "Suporte", "Pagamentos"; embaixo, o quadro "Conte com a gente." com o link "Acessar suporte", o nome da pessoa com "Minha conta" e o botão "Sair".
