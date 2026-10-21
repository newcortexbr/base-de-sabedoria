# /negocios/[licenseId]/plataforma?falha — Minha plataforma — instalação em tratamento (falha)

Arquivo: `src/app/(cliente)/negocios/[licenseId]/plataforma/page.tsx`

## quem acessa
- cliente logado dono da licença; licença de outro cliente ou inexistente dá "Página não encontrada" (ver ficha nao-encontrado). Só abre para negócio ativo.

## o que faz
- a instalação teve um problema técnico; a equipe já foi avisada e o cliente não precisa fazer nada.

## estados de erro/vazio
- quando a equipe retoma, a tela volta à etapa correta sozinha.

## possíveis problemas para leigo
- o cliente pode achar que errou algo; a tela diz que não precisa fazer nada.

## posições na tela (print de 2026-10-21, 1440x900, página inteira)
- print: [negocios-plataforma-falha.png](../prints/negocios-plataforma-falha.png) (35 KB) · dados brutos: [json](../prints/json/negocios-plataforma-falha.json)
- aberta em `/negocios/<id>/plataforma?simular=FAILED` com dados FICTÍCIOS de exemplo (cliente "Mariana Souza Exemplo", Portal da Cidade em Linhares/ES, Colatina/ES e Aracruz/ES)
- coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [menu/links] "9 itens: Início · Meus negócios · Visão geral · Minha plataforma · Treinamentos · Ferramentas · Lives · Suporte · Pagamentos" — menu (14,110,207,366)
- [link] "Meus negócios" — caminho no topo, na parte de cima, à esquerda (272,20,97,24)
- [link] "Portal da Cidade · Linhares/ES" — caminho no topo, na parte de cima, ao centro (404,20,196,24)
- [título] "Identificamos um problema na instalação." — topo, na parte de cima, ao centro (272,203,980,31)
- [título] "Sua instalação está em tratamento" — conteúdo, no meio da tela, ao centro (299,307,926,29)
- [aviso] "Identificamos um problema no provisionamento Nossa equipe técnica já foi notificada e está" — conteúdo, no meio da tela, ao centro (299,335,926,100)
- [título] "Identificamos um problema no provisionamento" — conteúdo, no meio da tela, ao centro (350,352,666,21)
- [título] "Enquanto isso" — conteúdo, no meio da tela, à esquerda (299,505,128,24)
- [link] "Acessar treinamento" — conteúdo, no fim da página, à esquerda (299,585,198,46)
- [link] "suporte" — conteúdo, no fim da página, ao centro (546,677,44,15)
- [link] "Acessar suporte" — menu lateral, no fim da página, à esquerda (26,726,130,24)
- [link] "ME Mariana Souza Exemplo Minha conta" — menu lateral, no fim da página, à esquerda (14,775,207,63)
- [botão] "Sair" — menu lateral, no fim da página, à esquerda (14,848,207,38)

## o que você vê
Minha plataforma quando a instalação deu problema.
- "INSTALAÇÃO EM TRATAMENTO — Identificamos um problema na instalação."
- "Sua instalação está em tratamento": a equipe técnica já foi notificada; "Você não precisa fazer nada agora — avisamos assim que a instalação for retomada."
- "Enquanto isso": o treinamento já está liberado, botão "Acessar treinamento".
Menu da esquerda (igual em todas as telas logadas): "Início", "Meus negócios", "Visão geral", "Minha plataforma", "Treinamentos", "Ferramentas", "Lives", "Suporte", "Pagamentos"; embaixo, o quadro "Conte com a gente." com o link "Acessar suporte", o nome da pessoa com "Minha conta" e o botão "Sair".
