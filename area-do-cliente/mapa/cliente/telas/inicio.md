# /inicio — Início

Arquivo: `src/app/(cliente)/inicio/page.tsx`

## quem acessa
- cliente logado (conta ACTIVE). Conta BLOCKED vê só Suporte e Minha Conta (ver ficha acesso-bloqueado).

## o que faz
- painel inicial do cliente: resumo do negócio selecionado (instalação, vídeo de boas-vindas, busca no treinamento, links do portal, próxima live, pagamentos).

## estados de erro/vazio
- o quadro do topo muda com a situação da instalação (ex.: "Falta trocar os nameservers" com "Ver o que fazer"); com o portal no ar mostra os links e o painel.
- o selo no canto ("Instalação pendente") muda conforme a situação.
- com mais de um negócio, a lista no topo à direita troca o negócio mostrado.

## possíveis problemas para leigo
- quem tem várias cidades pode não perceber a lista do topo e achar que os dados são de outra cidade.

## posições na tela (print de 2026-10-21, 1440x900, página inteira)
- print: [inicio.png](../prints/inicio.png) (58 KB) · dados brutos: [json](../prints/json/inicio.json)
- aberta em `/inicio` com dados FICTÍCIOS de exemplo (cliente "Mariana Souza Exemplo", Portal da Cidade em Linhares/ES, Colatina/ES e Aracruz/ES)
- coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [menu/links] "9 itens: Início · Meus negócios · Visão geral · Minha plataforma · Treinamentos · Ferramentas · Lives · Suporte · Pagamentos" — menu (14,110,207,366)
- [lista de opções] "Negócio selecionado Linhares / ES Colatina / ES Aracruz / ES Ver meus negócios…" — topo, na parte de cima, à direita (1182,14,176,36)
- [link] "Notificações" — topo, na parte de cima, à direita (1368,14,36,36)
- [título] "Olá, Mariana." — topo, na parte de cima, à esquerda (272,100,316,34)
- [título] "Falta trocar os nameservers" — conteúdo, na parte de cima, ao centro (350,200,540,25)
- [link] "Ver o que fazer" — conteúdo, na parte de cima, à esquerda (350,288,155,41)
- [link] "TOUR · ÁREA DE MEMBROS Conheça seu novo ponto de partida. Assistir ao vídeo de boas-vindas" — conteúdo, no meio da tela, ao centro (287,385,612,344)
- [título] "Uma visita guiada ao seu painel." — conteúdo, no meio da tela, à direita (923,454,442,60)
- [link] "Assistir ao tour" — conteúdo, no meio da tela, à direita (923,580,125,27)
- [link] "Ver todas as aulas do Start" — conteúdo, no meio da tela, à direita (923,617,200,27)
- [selo] "3 aulas no Start" — conteúdo, no meio da tela, à direita (923,660,442,30)
- [link] "Acessar suporte" — menu lateral, no meio da tela, à esquerda (26,726,130,24)
- [link] "ME Mariana Souza Exemplo Minha conta" — menu lateral, no meio da tela, à esquerda (14,775,207,63)
- [botão] "Encontrar conteúdo" — conteúdo, no meio da tela, à direita (1190,812,183,41)
- [campo] "Qual é a sua dúvida? BUSCA NO TREINAMENTO" — conteúdo, no meio da tela, ao centro (291,814,889,38)
- [botão] "Sair" — menu lateral, no fim da página, à esquerda (14,848,207,38)
- [título] "Seu portal e seus links" — conteúdo, no fim da página, à esquerda (339,909,158,19)
- [link] "Agenda" — conteúdo, no fim da página, à direita (1295,909,76,27)
- [título] "Próxima live" — conteúdo, no fim da página, à direita (954,913,89,19)
- [link] "Ver todos" — conteúdo, no fim da página, ao centro (808,1043,86,27)
- [título] "Explore os treinamentos" — conteúdo, no fim da página, à esquerda (293,1046,175,19)
- [link] "Ver" — conteúdo, no fim da página, à direita (1325,1048,46,27)
- [título] "Seus pagamentos" — conteúdo, no fim da página, à direita (954,1052,131,19)
- [link] "Primeiros passos no portal Aprenda primeiros passos no portal passo a passo." — conteúdo, no fim da página, ao centro (293,1083,601,64)
- [link] "Vendendo anúncios Aprenda vendendo anúncios passo a passo." — conteúdo, no fim da página, ao centro (293,1149,601,64)

## o que você vê
Tela inicial depois do login: um resumo do negócio selecionado e atalhos para tudo.
- Topo: "Seu negócio, em um só lugar." e, à direita, a lista do negócio selecionado (ex.: "Linhares / ES", com a opção "Ver meus negócios…") e o sino de avisos.
- "Olá, <nome>." com a frase da situação (ex.: "Vamos colocar seu portal de Linhares / ES no ar.") e o selo "Instalação pendente".
- Quadro da instalação: diz o que falta (ex.: "Falta trocar os nameservers") e o botão "Ver o que fazer" leva à Minha plataforma.
- "COMECE POR AQUI · START": vídeo "Assistir ao vídeo de boas-vindas", "Assistir ao tour" e "Ver todas as aulas do Start".
- "Qual é a sua dúvida?" (BUSCA NO TREINAMENTO): escreve a dúvida e clica em "Encontrar conteúdo".
- "Seu portal e seus links": o domínio; o painel e os links só aparecem depois da publicação.
- "Explore os treinamentos" com "Ver todos" e os módulos.
- "Próxima live" com o link "Agenda".
- "Seus pagamentos" com "Ver": "Mensalidade" e "Reserva territorial", e o aviso de que atraso superior a 5 dias suspende o portal e as ferramentas.
Menu da esquerda (igual em todas as telas logadas): "Início", "Meus negócios", "Visão geral", "Minha plataforma", "Treinamentos", "Ferramentas", "Lives", "Suporte", "Pagamentos"; embaixo, o quadro "Conte com a gente." com o link "Acessar suporte", o nome da pessoa com "Minha conta" e o botão "Sair".
