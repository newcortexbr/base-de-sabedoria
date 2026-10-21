# /negocios — Meus negócios

Arquivo: `src/app/(cliente)/negocios/page.tsx`

## quem acessa
- cliente logado (conta ACTIVE). Conta BLOCKED vê só Suporte e Minha Conta (ver ficha acesso-bloqueado).

## o que faz
- lista todos os portais (licenças por cidade) do cliente, com situação, endereço e pagamentos de cada um.

## estados de erro/vazio
- selo por negócio: "Em instalação", "Portal no ar" ou "Suspenso".
- portal no ar mostra "Abrir portal"; suspenso mostra "Regularizar pagamento" e "Portal indisponível enquanto houver pendência."

## possíveis problemas para leigo
- cada cidade é um negócio separado, com cobrança própria: pagar uma não regulariza a outra.

## posições na tela (print de 2026-10-21, 1440x900, página inteira)
- print: [negocios.png](../prints/negocios.png) (72 KB) · dados brutos: [json](../prints/json/negocios.json)
- aberta em `/negocios` com dados FICTÍCIOS de exemplo (cliente "Mariana Souza Exemplo", Portal da Cidade em Linhares/ES, Colatina/ES e Aracruz/ES)
- coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [menu/links] "9 itens: Início · Meus negócios · Visão geral · Minha plataforma · Treinamentos · Ferramentas · Lives · Suporte · Pagamentos" — menu (14,110,207,366)
- [lista de opções] "Negócio selecionado Linhares / ES Colatina / ES Aracruz / ES Ver meus negócios…" — topo, na parte de cima, à direita (1182,14,176,36)
- [link] "Notificações" — topo, na parte de cima, à direita (1368,14,36,36)
- [título] "Meus negócios" — topo, na parte de cima, à esquerda (272,100,367,34)
- [título] "Seus portais" — conteúdo, na parte de cima, à esquerda (272,189,107,23)
- [título] "Linhares / ES" — conteúdo, na parte de cima, ao centro (362,255,857,28)
- [link] "Ver o que fazer" — conteúdo, no meio da tela, à direita (1209,562,160,41)
- [título] "Colatina / ES" — conteúdo, no meio da tela, ao centro (359,663,876,28)
- [link] "Acessar suporte" — menu lateral, no meio da tela, à esquerda (26,726,130,24)
- [link] "ME Mariana Souza Exemplo Minha conta" — menu lateral, no meio da tela, à esquerda (14,775,207,63)
- [botão] "Sair" — menu lateral, no meio da tela, à esquerda (14,848,207,38)
- [link] "Abrir portal" — conteúdo, no fim da página, à direita (1022,907,136,41)
- [link] "Acessar meu negócio" — conteúdo, no fim da página, à direita (1168,907,201,41)
- [título] "Aracruz / ES" — conteúdo, no fim da página, ao centro (359,1008,884,28)
- [link] "Regularizar pagamento" — conteúdo, no fim da página, à direita (972,1252,186,41)
- [link] "Acessar meu negócio" — conteúdo, no fim da página, à direita (1168,1252,201,41)

## o que você vê
Tela "Meus negócios": um cartão para cada portal (cidade) do cliente.
- Topo: "Acompanhe e acesse os portais vinculados à sua conta." e a contagem (ex.: "3 portais").
- "Seus portais — Selecione o negócio que deseja gerenciar."
- Cada cartão: cidade/UF, "Portal da Cidade · seu território", o selo da situação ("Em instalação", "Portal no ar" ou "Suspenso"), "ENDEREÇO DO PORTAL" e "SITUAÇÃO DOS PAGAMENTOS" (Reserva territorial · anual e Mensalidade · manutenção, cada uma com próximo vencimento e "Em dia", "A vencer" ou "Suspenso").
- Botões do cartão: "Ver o que fazer" (instalação pendente), "Abrir portal" (portal no ar), "Regularizar pagamento" (suspenso) e "Acessar meu negócio" (abre a Visão geral daquela cidade).
Menu da esquerda (igual em todas as telas logadas): "Início", "Meus negócios", "Visão geral", "Minha plataforma", "Treinamentos", "Ferramentas", "Lives", "Suporte", "Pagamentos"; embaixo, o quadro "Conte com a gente." com o link "Acessar suporte", o nome da pessoa com "Minha conta" e o botão "Sair".
