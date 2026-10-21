# /negocios/[licenseId]/plataforma?instalada — Minha plataforma — portal no ar

Arquivo: `src/app/(cliente)/negocios/[licenseId]/plataforma/page.tsx`

## quem acessa
- cliente logado dono da licença; licença de outro cliente ou inexistente dá "Página não encontrada" (ver ficha nao-encontrado). Só abre para negócio ativo.

## o que faz
- instalação concluída: acessos do portal (site e painel) e guia com os links úteis para divulgar.

## estados de erro/vazio
- as abas do "Guia de links" filtram: "Páginas de vendas", "Áreas de login", "Recursos do portal".

## possíveis problemas para leigo
- o painel do portal é acessado pelo login único da Área do Cliente.

## posições na tela (print de 2026-10-21, 1440x900, página inteira)
- print: [negocios-plataforma-instalada.png](../prints/negocios-plataforma-instalada.png) (70 KB) · dados brutos: [json](../prints/json/negocios-plataforma-instalada.json)
- aberta em `/negocios/<id>/plataforma` com dados FICTÍCIOS de exemplo (cliente "Mariana Souza Exemplo", Portal da Cidade em Linhares/ES, Colatina/ES e Aracruz/ES)
- coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [menu/links] "9 itens: Início · Meus negócios · Visão geral · Minha plataforma · Treinamentos · Ferramentas · Lives · Suporte · Pagamentos" — menu (14,110,207,366)
- [link] "Meus negócios" — caminho no topo, na parte de cima, à esquerda (272,20,97,24)
- [link] "Portal da Cidade · Colatina/ES" — caminho no topo, na parte de cima, ao centro (404,20,194,24)
- [título] "Seu portal está no ar!" — topo, na parte de cima, ao centro (332,186,515,31)
- [botão] "BOAS-VINDAS AO SEU PORTAL Seu portal está pronto. E agora? Vídeo disponível em breve" — conteúdo, na parte de cima, ao centro (514,290,496,277)
- [título] "Conheça os acessos do seu portal" — conteúdo, na parte de cima, ao centro (633,587,258,20)
- [título] "Comece pelo onboarding." — conteúdo, no meio da tela, ao centro (296,725,648,24)
- [link] "Acessar suporte" — menu lateral, no meio da tela, à esquerda (26,726,130,24)
- [link] "INICIAR MEU TREINAMENTO" — conteúdo, no meio da tela, à direita (962,726,266,46)
- [link] "ME Mariana Souza Exemplo Minha conta" — menu lateral, no meio da tela, à esquerda (14,775,207,63)
- [título] "Acessos principais" — conteúdo, no meio da tela, ao centro (272,838,980,20)
- [botão] "Sair" — menu lateral, no meio da tela, à esquerda (14,848,207,38)
- [título] "Seu portal" — conteúdo, no meio da tela, ao centro (293,889,440,20)
- [título] "Painel administrativo" — conteúdo, no meio da tela, à direita (791,889,440,20)
- [link] "Acesse seu portal" — conteúdo, no meio da tela, ao centro (293,948,440,44)
- [link] "Acesse seu painel" — conteúdo, no meio da tela, à direita (791,948,440,44)
- [botão] "Copiar endereço do portal" — conteúdo, no meio da tela, ao centro (583,1002,36,36)
- [botão] "Copiar endereço do painel" — conteúdo, no meio da tela, à direita (1117,1002,36,36)
- [link] "https://portalcolatina.com.br/" — conteúdo, no meio da tela, à esquerda (293,1011,176,19)
- [link] "https://portalcolatina.com.br/painel/login" — conteúdo, no meio da tela, ao centro (791,1011,247,19)
- [título] "Guia de links do seu portal" — conteúdo, no meio da tela, ao centro (295,1098,934,20)
- [botão] "Páginas de vendas 8" — conteúdo, no meio da tela, à esquerda (295,1154,173,36)
- [botão] "Áreas de login 2" — conteúdo, no meio da tela, ao centro (476,1154,145,36)
- [botão] "Recursos do portal 2" — conteúdo, no meio da tela, ao centro (629,1154,174,36)
- [botão] "Copiar URL de Seja parceiro" — conteúdo, no fim da página, à direita (1151,1212,36,36)
- [link] "Abrir página Seja parceiro" — conteúdo, no fim da página, à direita (1193,1212,36,36)
- [link] "https://portalcolatina.com.br/seja-parceiro" — conteúdo, no fim da página, à esquerda (295,1232,258,19)
- [botão] "Copiar URL de Guia Comercial" — conteúdo, no fim da página, à direita (1151,1280,36,36)
- [link] "Abrir página Guia Comercial" — conteúdo, no fim da página, à direita (1193,1280,36,36)
- [link] "https://portalcolatina.com.br/anuncie" — conteúdo, no fim da página, à esquerda (295,1300,224,19)
- [botão] "Copiar URL de Vagas de emprego" — conteúdo, no fim da página, à direita (1151,1348,36,36)
- [link] "Abrir página Vagas de emprego" — conteúdo, no fim da página, à direita (1193,1348,36,36)
- [link] "https://portalcolatina.com.br/anuncie/vagas" — conteúdo, no fim da página, à esquerda (295,1369,265,19)
- [botão] "Copiar URL de Classificados" — conteúdo, no fim da página, à direita (1151,1417,36,36)
- [link] "Abrir página Classificados" — conteúdo, no fim da página, à direita (1193,1417,36,36)
- [link] "https://portalcolatina.com.br/anuncie/classificados" — conteúdo, no fim da página, à esquerda (295,1437,308,19)
- [botão] "Copiar URL de Eventos" — conteúdo, no fim da página, à direita (1151,1485,36,36)
- [link] "Abrir página Eventos" — conteúdo, no fim da página, à direita (1193,1485,36,36)
- [link] "https://portalcolatina.com.br/anuncie/eventos" — conteúdo, no fim da página, à esquerda (295,1505,277,19)
- [botão] "Copiar URL de Banner publicitário" — conteúdo, no fim da página, à direita (1151,1553,36,36)
- [link] "Abrir página Banner publicitário" — conteúdo, no fim da página, à direita (1193,1553,36,36)

## o que você vê
Minha plataforma com o portal no ar (instalação concluída).
- "Seu portal está no ar! Instalação concluída."
- Vídeo "BOAS-VINDAS AO SEU PORTAL — Seu portal está pronto. E agora?".
- "SEU PRÓXIMO PASSO · MÓDULO START — Comece pelo onboarding." com "INICIAR MEU TREINAMENTO".
- "Acessos principais": "Seu portal" (página pública, "Acesse seu portal") e "Painel administrativo" ("Acesse seu painel", …/painel/login).
- "Guia de links do seu portal": abas "Páginas de vendas", "Áreas de login", "Recursos do portal"; cada link (ex.: "Seja parceiro", "Guia Comercial", "Vagas de emprego", "Classificados", "Eventos", "Banner publicitário", "Matéria patrocinada / notícias", "Especialista / colunista") com o endereço para copiar.
- "Seu domínio está conectado." e "Falar com o suporte".
Menu da esquerda (igual em todas as telas logadas): "Início", "Meus negócios", "Visão geral", "Minha plataforma", "Treinamentos", "Ferramentas", "Lives", "Suporte", "Pagamentos"; embaixo, o quadro "Conte com a gente." com o link "Acessar suporte", o nome da pessoa com "Minha conta" e o botão "Sair".
