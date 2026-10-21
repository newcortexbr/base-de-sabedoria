# /negocios/[licenseId]/plataforma?preparando — Minha plataforma — preparando o portal

Arquivo: `src/app/(cliente)/negocios/[licenseId]/plataforma/page.tsx`

## quem acessa
- cliente logado dono da licença; licença de outro cliente ou inexistente dá "Página não encontrada" (ver ficha nao-encontrado). Só abre para negócio ativo.

## o que faz
- logo depois de informar o domínio: a plataforma está sendo preparada e os dados de DNS ainda não estão prontos.

## estados de erro/vazio
- quando os DNS ficam prontos a tela troca sozinha para a etapa de nameservers (ficha negocios-plataforma).

## possíveis problemas para leigo
- não há nada a fazer aqui; o cliente pode achar que travou se demorar.

## posições na tela (print de 2026-10-21, 1440x900, página inteira)
- print: [negocios-plataforma-preparando.png](../prints/negocios-plataforma-preparando.png) (39 KB) · dados brutos: [json](../prints/json/negocios-plataforma-preparando.json)
- aberta em `/negocios/<id>/plataforma?simular=PROVISIONING` com dados FICTÍCIOS de exemplo (cliente "Mariana Souza Exemplo", Portal da Cidade em Linhares/ES, Colatina/ES e Aracruz/ES)
- coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [menu/links] "9 itens: Início · Meus negócios · Visão geral · Minha plataforma · Treinamentos · Ferramentas · Lives · Suporte · Pagamentos" — menu (14,110,207,366)
- [link] "Meus negócios" — caminho no topo, na parte de cima, à esquerda (272,20,97,24)
- [link] "Portal da Cidade · Linhares/ES" — caminho no topo, na parte de cima, ao centro (404,20,196,24)
- [título] "Estamos preparando seu portal." — topo, na parte de cima, ao centro (272,203,980,31)
- [botão] "VÍDEO · ETAPA 2 Como trocar os DNS do domínio" — conteúdo, no meio da tela, ao centro (514,307,496,277)
- [título] "Prepare-se para o próximo passo" — conteúdo, no meio da tela, ao centro (637,604,250,20)
- [botão] "Assistir ao tutorial" — conteúdo, no fim da página, ao centro (689,681,147,32)
- [link] "Acessar suporte" — menu lateral, no fim da página, à esquerda (26,726,130,24)
- [aviso] "Preparando sua plataforma… Estamos organizando tudo para receber seu domínio. Os dados de " — conteúdo, no fim da página, ao centro (272,758,980,245)
- [link] "ME Mariana Souza Exemplo Minha conta" — menu lateral, no fim da página, à esquerda (14,775,207,63)
- [botão] "Sair" — menu lateral, no fim da página, à esquerda (14,848,207,38)
- [título] "Preparando sua plataforma…" — conteúdo, no fim da página, ao centro (632,871,261,24)
- [link] "suporte" — conteúdo, no fim da página, ao centro (546,1023,44,15)

## o que você vê
Minha plataforma, enquanto o portal é preparado (depois de informar o domínio).
- "DOMÍNIO CONFIRMADO — Estamos preparando seu portal."
- Vídeo "Como trocar os DNS do domínio" ("Prepare-se para o próximo passo") com "Assistir ao tutorial".
- "Preparando sua plataforma…": os dados de DNS aparecem aqui sozinhos quando ficarem prontos. "Você não precisa atualizar a página."
Menu da esquerda (igual em todas as telas logadas): "Início", "Meus negócios", "Visão geral", "Minha plataforma", "Treinamentos", "Ferramentas", "Lives", "Suporte", "Pagamentos"; embaixo, o quadro "Conte com a gente." com o link "Acessar suporte", o nome da pessoa com "Minha conta" e o botão "Sair".
