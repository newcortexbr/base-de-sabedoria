# /negocios/[licenseId]/lives — Lives

Arquivo: `src/app/(cliente)/negocios/[licenseId]/lives/page.tsx`

## quem acessa
- cliente logado dono da licença; licença de outro cliente ou inexistente dá "Página não encontrada" (ver ficha nao-encontrado).

## o que faz
- agenda dos encontros ao vivo do produto: próxima live, calendário do mês e lista das próximas.

## estados de erro/vazio
- "Acessar live" leva à transmissão; live encerrada pode ter gravação.
- "Inscrever-se nas lives" assina a agenda no Google Agenda; "Adicionar à agenda" guarda só uma live.

## possíveis problemas para leigo
- horários sempre em horário de Brasília.

## posições na tela (print de 2026-10-21, 1440x900, página inteira)
- print: [negocios-lives.png](../prints/negocios-lives.png) (52 KB) · dados brutos: [json](../prints/json/negocios-lives.json)
- aberta em `/negocios/<id>/lives` com dados FICTÍCIOS de exemplo (cliente "Mariana Souza Exemplo", Portal da Cidade em Linhares/ES, Colatina/ES e Aracruz/ES)
- coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [menu/links] "9 itens: Início · Meus negócios · Visão geral · Minha plataforma · Treinamentos · Ferramentas · Lives · Suporte · Pagamentos" — menu (14,110,207,366)
- [link] "Meus negócios" — caminho no topo, na parte de cima, à esquerda (272,20,97,24)
- [link] "Portal da Cidade · Linhares/ES" — caminho no topo, na parte de cima, ao centro (404,20,196,24)
- [título] "Lives" — topo, na parte de cima, ao centro (272,100,1080,34)
- [botão] "GUIA DAS LIVES Participe dos nossos encontros ao vivo." — conteúdo, na parte de cima, ao centro (286,191,540,303)
- [título] "Como funcionam as lives." — conteúdo, na parte de cima, à direita (848,287,477,57)
- [botão] "Assistir ao vídeo explicativo" — conteúdo, na parte de cima, ao centro (848,401,192,24)
- [título] "Live: como fechar seus primeiros anunciantes" — conteúdo, no meio da tela, ao centro (434,572,896,26)
- [link] "Acessar live" — conteúdo, no meio da tela, ao centro (434,661,133,40)
- [link] "Adicionar à agenda" — conteúdo, no meio da tela, ao centro (575,661,175,40)
- [link] "Acessar suporte" — menu lateral, no meio da tela, à esquerda (26,726,130,24)
- [título] "Inscreva-se e acompanhe as próximas lives" — conteúdo, no meio da tela, ao centro (343,748,807,17)
- [botão] "Inscrever-se nas lives" — conteúdo, no meio da tela, à direita (1164,757,169,40)
- [link] "ME Mariana Souza Exemplo Minha conta" — menu lateral, no meio da tela, à esquerda (14,775,207,63)
- [título] "Agenda de lives" — conteúdo, no fim da página, à esquerda (272,847,135,23)
- [botão] "Sair" — menu lateral, no fim da página, à esquerda (14,848,207,38)
- [botão] "Mês anterior" — conteúdo, no fim da página, à direita (962,902,30,30)
- [botão] "Próximo mês" — conteúdo, no fim da página, à direita (998,902,30,30)
- [título] "Próximas lives" — conteúdo, no fim da página, à direita (1080,902,97,19)
- [título] "Outubro de 2026" — conteúdo, no fim da página, à esquerda (290,908,114,19)
- [botão] "Live: como fechar seus primeiros anunciantes 26 OUT · 19h · Brasília" — conteúdo, no fim da página, à direita (1080,935,254,74)
- [botão] "1" — conteúdo, no fim da página, ao centro (608,968,102,46)
- [botão] "2" — conteúdo, no fim da página, ao centro (714,968,102,46)
- [botão] "3" — conteúdo, no fim da página, ao centro (820,968,102,46)
- [botão] "4" — conteúdo, no fim da página, à direita (926,968,102,46)
- [botão] "5" — conteúdo, no fim da página, à esquerda (290,1018,102,46)
- [botão] "6" — conteúdo, no fim da página, à esquerda (396,1018,102,46)
- [botão] "7" — conteúdo, no fim da página, ao centro (502,1018,102,46)
- [botão] "8" — conteúdo, no fim da página, ao centro (608,1018,102,46)
- [botão] "9" — conteúdo, no fim da página, ao centro (714,1018,102,46)
- [botão] "10" — conteúdo, no fim da página, ao centro (820,1018,102,46)
- [botão] "11" — conteúdo, no fim da página, à direita (926,1018,102,46)
- [botão] "Live: novidades do painel de outubro 02 NOV · 19h · Brasília" — conteúdo, no fim da página, à direita (1080,1019,254,74)
- [botão] "12" — conteúdo, no fim da página, à esquerda (290,1068,102,46)
- [botão] "13" — conteúdo, no fim da página, à esquerda (396,1068,102,46)
- [botão] "14" — conteúdo, no fim da página, ao centro (502,1068,102,46)
- [botão] "15" — conteúdo, no fim da página, ao centro (608,1068,102,46)
- [botão] "16" — conteúdo, no fim da página, ao centro (714,1068,102,46)
- [botão] "17" — conteúdo, no fim da página, ao centro (820,1068,102,46)
- [botão] "18" — conteúdo, no fim da página, à direita (926,1068,102,46)
- [botão] "19" — conteúdo, no fim da página, à esquerda (290,1118,102,46)

## o que você vê
Tela "Lives": encontros ao vivo para aprender e tirar dúvidas.
- Vídeo "GUIA DAS LIVES" ("Como funcionam as lives.") com "Assistir ao vídeo explicativo".
- "PRÓXIMA LIVE": título, dia e hora ("· horário de Brasília"), "Acessar live" e "Adicionar à agenda".
- "Inscreva-se e acompanhe as próximas lives" com o botão "Inscrever-se nas lives" (Google Agenda).
- "Agenda de lives": calendário do mês; "Os dias com ponto azul têm live programada."
- "Próximas lives": lista com data e hora.
Menu da esquerda (igual em todas as telas logadas): "Início", "Meus negócios", "Visão geral", "Minha plataforma", "Treinamentos", "Ferramentas", "Lives", "Suporte", "Pagamentos"; embaixo, o quadro "Conte com a gente." com o link "Acessar suporte", o nome da pessoa com "Minha conta" e o botão "Sair".
