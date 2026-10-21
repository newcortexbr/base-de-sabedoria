# /negocios/[licenseId] — Visão geral do negócio

Arquivo: `src/app/(cliente)/negocios/[licenseId]/page.tsx`

## quem acessa
- cliente logado dono da licença; licença de outro cliente ou inexistente dá "Página não encontrada" (ver ficha nao-encontrado).

## o que faz
- ficha de um negócio (uma cidade): situação do portal, próximo passo do treinamento e pagamentos.

## estados de erro/vazio
- quadro da situação: "Em instalação" com "Ver o que fazer"; "Portal suspenso" com "Regularizar pagamento" (ver negocios-visao-geral-suspenso); portal no ar com os links.

## possíveis problemas para leigo
- o vídeo-guia pode aparecer como "O vídeo será disponibilizado em breve." quando ainda não foi cadastrado.

## posições na tela (print de 2026-10-21, 1440x900, página inteira)
- print: [negocios-visao-geral.png](../prints/negocios-visao-geral.png) (50 KB) · dados brutos: [json](../prints/json/negocios-visao-geral.json)
- aberta em `/negocios/<id>` com dados FICTÍCIOS de exemplo (cliente "Mariana Souza Exemplo", Portal da Cidade em Linhares/ES, Colatina/ES e Aracruz/ES)
- coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [menu/links] "9 itens: Início · Meus negócios · Visão geral · Minha plataforma · Treinamentos · Ferramentas · Lives · Suporte · Pagamentos" — menu (14,110,207,366)
- [link] "Meus negócios" — caminho no topo, na parte de cima, à esquerda (272,20,97,24)
- [título] "Visão geral" — topo, na parte de cima, ao centro (272,100,1120,34)
- [título] "Acompanhe seu negócio por aqui" — conteúdo, no meio da tela, ao centro (694,531,275,22)
- [link] "Ver o que fazer" — conteúdo, no meio da tela, à direita (1208,678,160,41)
- [título] "Linhares ainda não está no ar" — conteúdo, no meio da tela, ao centro (296,682,592,26)
- [link] "Acessar suporte" — menu lateral, no meio da tela, à esquerda (26,726,130,24)
- [link] "ME Mariana Souza Exemplo Minha conta" — menu lateral, no meio da tela, à esquerda (14,775,207,63)
- [título] "Seu próximo passo" — conteúdo, no fim da página, à esquerda (293,816,145,20)
- [título] "Seus pagamentos" — conteúdo, no fim da página, ao centro (862,816,138,20)
- [botão] "Sair" — menu lateral, no fim da página, à esquerda (14,848,207,38)
- [título] "Instalação do seu portal" — conteúdo, no fim da página, ao centro (293,852,509,18)
- [selo] "3 aulas neste módulo" — conteúdo, no fim da página, ao centro (293,911,509,40)
- [link] "Continuar meu Start" — conteúdo, no fim da página, à esquerda (293,969,192,41)
- [link] "Ver pagamentos" — conteúdo, no fim da página, ao centro (862,1004,166,41)
- [título] "Precisa de um link do seu portal?" — conteúdo, no fim da página, ao centro (349,1105,1022,20)
- [link] "Acessar suporte" — conteúdo, no fim da página, à direita (1265,1186,127,24)

## o que você vê
Visão geral de um negócio (uma cidade): o resumo daquele portal.
- Topo: caminho "Meus negócios › Portal da Cidade · Linhares/ES", título "Visão geral" e "Portal da Cidade · Linhares / ES".
- Vídeo "GUIA DA VISÃO GERAL" ("Acompanhe seu negócio por aqui").
- Quadro da situação: ex. "Em instalação — Linhares ainda não está no ar" com "Ver o que fazer".
- "Seu próximo passo": o módulo indicado (ex.: "MÓDULO 0 — Instalação do seu portal") e "Continuar meu Start".
- "Seus pagamentos — Duas obrigações": Reserva territorial · anual e Mensalidade · manutenção, com vencimento e situação, e "Ver pagamentos".
- "Precisa de um link do seu portal?": os links aparecem quando o portal for publicado.
- "Precisa de ajuda para seguir?" com "Acessar suporte".
Menu da esquerda (igual em todas as telas logadas): "Início", "Meus negócios", "Visão geral", "Minha plataforma", "Treinamentos", "Ferramentas", "Lives", "Suporte", "Pagamentos"; embaixo, o quadro "Conte com a gente." com o link "Acessar suporte", o nome da pessoa com "Minha conta" e o botão "Sair".
