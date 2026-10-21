# /negocios/[licenseId]/pagamentos?atrasado — Pagamentos — cobrança em atraso

Arquivo: `src/app/(cliente)/negocios/[licenseId]/pagamentos/page.tsx`

## quem acessa
- cliente logado dono da licença; licença de outro cliente ou inexistente dá "Página não encontrada" (ver ficha nao-encontrado).

## o que faz
- a mesma tela de Pagamentos com a mensalidade vencida e o negócio suspenso.

## estados de erro/vazio
- o cartão da Mensalidade fica "Suspenso": "Portal e ferramentas aguardam a regularização desta cobrança.", "Venceu em", "Valor em aberto" e o botão "Regularizar pagamento".
- no histórico a linha fica "Em atraso" com "Regularizar".

## possíveis problemas para leigo
- depois de pagar, a liberação acontece quando o pagamento é confirmado; boleto pode levar até 3 dias úteis.

## posições na tela (print de 2026-10-21, 1440x900, página inteira)
- print: [negocios-pagamentos-atrasado.png](../prints/negocios-pagamentos-atrasado.png) (62 KB) · dados brutos: [json](../prints/json/negocios-pagamentos-atrasado.json)
- aberta em `/negocios/<id>/pagamentos` com dados FICTÍCIOS de exemplo (cliente "Mariana Souza Exemplo", Portal da Cidade em Linhares/ES, Colatina/ES e Aracruz/ES)
- coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [menu/links] "9 itens: Início · Meus negócios · Visão geral · Minha plataforma · Treinamentos · Ferramentas · Lives · Suporte · Pagamentos" — menu (14,110,207,366)
- [link] "Meus negócios" — caminho no topo, na parte de cima, à esquerda (272,20,97,24)
- [link] "Portal da Cidade · Aracruz/ES" — caminho no topo, na parte de cima, ao centro (404,20,193,24)
- [título] "Pagamentos" — topo, na parte de cima, ao centro (272,122,1080,34)
- [botão] "GUIA DOS PAGAMENTOS Entenda suas duas cobranças. Vídeo em breve" — conteúdo, na parte de cima, ao centro (283,211,424,238)
- [título] "Como funcionam seus pagamentos?" — conteúdo, na parte de cima, à direita (729,280,600,24)
- [título] "Situação dos pagamentos" — conteúdo, no meio da tela, ao centro (272,484,1080,24)
- [título] "Reserva territorial" — conteúdo, no meio da tela, ao centro (291,618,494,21)
- [título] "Mensalidade" — conteúdo, no meio da tela, à direita (839,618,494,21)
- [link] "Acessar suporte" — menu lateral, no meio da tela, à esquerda (26,726,130,24)
- [link] "ME Mariana Souza Exemplo Minha conta" — menu lateral, no meio da tela, à esquerda (14,775,207,63)
- [link] "Ver detalhes da reserva" — conteúdo, no meio da tela, ao centro (291,813,494,44)
- [link] "Regularizar pagamento" — conteúdo, no meio da tela, à direita (839,813,494,44)
- [botão] "Sair" — menu lateral, no fim da página, à esquerda (14,848,207,38)
- [título] "Histórico de cobranças" — conteúdo, no fim da página, à esquerda (291,964,169,20)
- [botão] "Todas 3" — conteúdo, no fim da página, à esquerda (295,1003,74,34)
- [botão] "Reserva territorial 1" — conteúdo, no fim da página, à esquerda (373,1003,142,34)
- [botão] "Mensalidade 2" — conteúdo, no fim da página, ao centro (519,1003,114,34)
- [link] "Regularizar (abre em nova aba)" — conteúdo, no fim da página, à direita (1238,1112,91,32)
- [link] "Ver comprovante (abre em nova aba)" — conteúdo, no fim da página, à direita (1202,1178,127,32)
- [link] "Ver comprovante (abre em nova aba)" — conteúdo, no fim da página, à direita (1202,1244,127,32)

## o que você vê
Tela "Pagamentos" com a mensalidade em atraso (negócio suspenso).
- Cartão "Mensalidade" com o selo "Suspenso": "Portal e ferramentas aguardam a regularização desta cobrança.", "Venceu em <data>", "Valor em aberto" e o botão "Regularizar pagamento" (abre a cobrança para pagar).
- No "Histórico de cobranças" a linha atrasada aparece "Em atraso" com o link "Regularizar".
- O restante é igual à tela de Pagamentos normal.
Menu da esquerda (igual em todas as telas logadas): "Início", "Meus negócios", "Visão geral", "Minha plataforma", "Treinamentos", "Ferramentas", "Lives", "Suporte", "Pagamentos"; embaixo, o quadro "Conte com a gente." com o link "Acessar suporte", o nome da pessoa com "Minha conta" e o botão "Sair".
