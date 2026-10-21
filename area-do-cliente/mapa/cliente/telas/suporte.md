# /suporte — Suporte (chamados)

Arquivo: `src/app/(cliente)/suporte/page.tsx`

## quem acessa
- cliente logado, inclusive conta BLOCKED.

## o que faz
- central de ajuda: lista dos chamados do cliente e atalho para abrir um novo.

## estados de erro/vazio
- selos dos chamados: "Aguardando você" (a equipe respondeu e espera o cliente), "Em andamento", "Resolvido", "Fechado"; "(resposta nova não lida)" quando há resposta não vista.
- abas: "Todos", "Em andamento", "Resolvidos".

## possíveis problemas para leigo
- chamado fechado não recebe resposta; para continuar o assunto abre-se um novo.

## posições na tela (print de 2026-10-21, 1440x900, página inteira)
- print: [suporte.png](../prints/suporte.png) (43 KB) · dados brutos: [json](../prints/json/suporte.json)
- aberta em `/suporte` com dados FICTÍCIOS de exemplo (cliente "Mariana Souza Exemplo", Portal da Cidade em Linhares/ES, Colatina/ES e Aracruz/ES)
- coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [menu/links] "9 itens: Início · Meus negócios · Visão geral · Minha plataforma · Treinamentos · Ferramentas · Lives · Suporte · Pagamentos" — menu (14,110,207,366)
- [lista de opções] "Negócio selecionado Linhares / ES Colatina / ES Aracruz / ES Ver meus negócios…" — topo, na parte de cima, à direita (1182,14,176,36)
- [link] "Notificações" — topo, na parte de cima, à direita (1368,14,36,36)
- [título] "Suporte" — topo, na parte de cima, ao centro (272,122,1080,34)
- [botão] "GUIA DO SUPORTE Precisa de ajuda? Comece por aqui. Vídeo em breve" — conteúdo, no meio da tela, ao centro (283,211,424,238)
- [título] "Como podemos ajudar?" — conteúdo, na parte de cima, à direita (729,280,600,24)
- [título] "Seus chamados" — conteúdo, no meio da tela, à esquerda (272,484,397,24)
- [link] "Abrir novo chamado" — conteúdo, no meio da tela, à direita (1152,487,200,44)
- [título] "Acompanhamento" — conteúdo, no meio da tela, à esquerda (291,568,127,18)
- [título] "Ajuda rápida" — menu lateral, no meio da tela, à direita (1121,568,212,18)
- [botão] "Todos 2" — conteúdo, no fim da página, à esquerda (295,606,75,34)
- [botão] "Em andamento 1" — conteúdo, no fim da página, à esquerda (374,606,127,34)
- [botão] "Resolvidos 1" — conteúdo, no fim da página, ao centro (505,606,103,34)
- [link] "Instalação e domínio" — menu lateral, no fim da página, à direita (1121,644,212,44)
- [link] "Dúvida sobre a troca dos nameservers (resposta nova não lida) Aguardando você #1 · Linhare" — conteúdo, no fim da página, ao centro (291,658,776,102)
- [link] "Treinamentos e ferramentas" — menu lateral, no fim da página, à direita (1121,688,212,44)
- [link] "Acessar suporte" — menu lateral, no fim da página, à esquerda (26,726,130,24)
- [link] "Pagamentos e acesso" — menu lateral, no fim da página, à direita (1121,732,212,44)
- [link] "Como troco a logo do portal? Fechado #2 · Conta Atualizado 11 de out, 11:45" — conteúdo, no fim da página, ao centro (291,770,776,102)
- [link] "ME Mariana Souza Exemplo Minha conta" — menu lateral, no fim da página, à esquerda (14,775,207,63)
- [link] "Abra um chamado" — menu lateral, no fim da página, à direita (1205,785,105,15)
- [botão] "Sair" — menu lateral, no fim da página, à esquerda (14,848,207,38)

## o que você vê
Tela "Suporte": a central de ajuda com os chamados do cliente.
- "CENTRAL DE AJUDA — Encontre orientação e acompanhe suas conversas com nossa equipe."
- Vídeo "GUIA DO SUPORTE" ("Como podemos ajudar?").
- "Seus chamados" com o botão "Abrir novo chamado".
- "Acompanhamento": contagem e abas "Todos", "Em andamento", "Resolvidos"; cada chamado com título, selo da situação (ex.: "Aguardando você", "Fechado"), protocolo e negócio (ex.: "#1 · Linhares/ES") e "Atualizado …".
- "Ajuda rápida": atalhos "Instalação e domínio", "Treinamentos e ferramentas", "Pagamentos e acesso".
Menu da esquerda (igual em todas as telas logadas): "Início", "Meus negócios", "Visão geral", "Minha plataforma", "Treinamentos", "Ferramentas", "Lives", "Suporte", "Pagamentos"; embaixo, o quadro "Conte com a gente." com o link "Acessar suporte", o nome da pessoa com "Minha conta" e o botão "Sair".
