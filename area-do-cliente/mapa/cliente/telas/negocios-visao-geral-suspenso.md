# /negocios/[licenseId]?suspenso — Visão geral — negócio suspenso

Arquivo: `src/app/(cliente)/negocios/[licenseId]/page.tsx`

## quem acessa
- cliente logado dono da licença; licença de outro cliente ou inexistente dá "Página não encontrada" (ver ficha nao-encontrado).

## o que faz
- mesma Visão geral, para um negócio suspenso por pagamento em atraso.

## estados de erro/vazio
- faixa vermelha "Portal suspenso": portal e ferramentas param até o pagamento ser regularizado; a Minha plataforma deixa de abrir para esse negócio.

## possíveis problemas para leigo
- a suspensão é por cidade: os outros negócios continuam normais.
- depois de pagar, a liberação depende da confirmação do pagamento.

## posições na tela (print de 2026-10-21, 1440x900, página inteira)
- print: [negocios-visao-geral-suspenso.png](../prints/negocios-visao-geral-suspenso.png) (50 KB) · dados brutos: [json](../prints/json/negocios-visao-geral-suspenso.json)
- aberta em `/negocios/<id>` com dados FICTÍCIOS de exemplo (cliente "Mariana Souza Exemplo", Portal da Cidade em Linhares/ES, Colatina/ES e Aracruz/ES)
- coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [menu/links] "9 itens: Início · Meus negócios · Visão geral · Minha plataforma · Treinamentos · Ferramentas · Lives · Suporte · Pagamentos" — menu (14,110,207,366)
- [link] "Meus negócios" — caminho no topo, na parte de cima, à esquerda (272,20,97,24)
- [título] "Visão geral" — topo, na parte de cima, ao centro (272,100,1120,34)
- [título] "Acompanhe seu negócio por aqui" — conteúdo, no meio da tela, ao centro (694,531,275,22)
- [link] "Regularizar pagamento" — conteúdo, no meio da tela, à direita (1156,668,212,41)
- [título] "Aracruz está suspenso" — conteúdo, no meio da tela, ao centro (296,682,443,26)
- [link] "Acessar suporte" — menu lateral, no meio da tela, à esquerda (26,726,130,24)
- [link] "ME Mariana Souza Exemplo Minha conta" — menu lateral, no fim da página, à esquerda (14,775,207,63)
- [título] "Seu próximo passo" — conteúdo, no fim da página, à esquerda (293,796,145,20)
- [título] "Seus pagamentos" — conteúdo, no fim da página, ao centro (862,796,138,20)
- [título] "Instalação do seu portal" — conteúdo, no fim da página, ao centro (293,832,509,18)
- [botão] "Sair" — menu lateral, no fim da página, à esquerda (14,848,207,38)
- [selo] "3 aulas neste módulo" — conteúdo, no fim da página, ao centro (293,890,509,40)
- [link] "Continuar meu Start" — conteúdo, no fim da página, à esquerda (293,949,192,41)
- [link] "Ver pagamentos" — conteúdo, no fim da página, ao centro (862,984,166,41)
- [título] "Precisa de um link do seu portal?" — conteúdo, no fim da página, ao centro (349,1085,1022,20)
- [link] "Acessar suporte" — conteúdo, no fim da página, à direita (1265,1166,127,24)

## o que você vê
Visão geral de um negócio SUSPENSO por atraso de pagamento.
- Faixa vermelha com o selo "Portal suspenso", o título "<cidade> está suspenso" e "Portal e ferramentas ficam suspensos até a regularização do pagamento."
- "Regularizar pagamento": leva ao pagamento da cobrança em aberto.
- Em "Seus pagamentos", a cobrança atrasada aparece com o selo vermelho "Suspenso".
- O resto é igual à Visão geral: "Seu próximo passo", "Ver pagamentos", "Acessar suporte".
Menu da esquerda (igual em todas as telas logadas): "Início", "Meus negócios", "Visão geral", "Minha plataforma", "Treinamentos", "Ferramentas", "Lives", "Suporte", "Pagamentos"; embaixo, o quadro "Conte com a gente." com o link "Acessar suporte", o nome da pessoa com "Minha conta" e o botão "Sair".
