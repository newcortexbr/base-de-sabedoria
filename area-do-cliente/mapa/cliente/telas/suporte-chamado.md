# /suporte/[ticketId] — Chamado (conversa)

Arquivo: `src/app/(cliente)/suporte/[ticketId]/page.tsx`

## quem acessa
- dono do chamado (cliente logado, inclusive BLOCKED). Chamado de outro cliente dá página não encontrada.

## o que faz
- conversa de um chamado: histórico das mensagens, campo de resposta e dados do chamado.

## estados de erro/vazio
- "Aguardando você": a equipe respondeu e espera o cliente.
- chamado fechado não mostra o campo de resposta.

## possíveis problemas para leigo
- a resposta aceita markdown; a "Prévia" mostra como fica.

## posições na tela (print de 2026-10-21, 1440x900, página inteira)
- print: [suporte-chamado.png](../prints/suporte-chamado.png) (49 KB) · dados brutos: [json](../prints/json/suporte-chamado.json)
- aberta em `/suporte/<id>` com dados FICTÍCIOS de exemplo (cliente "Mariana Souza Exemplo", Portal da Cidade em Linhares/ES, Colatina/ES e Aracruz/ES)
- coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [menu/links] "9 itens: Início · Meus negócios · Visão geral · Minha plataforma · Treinamentos · Ferramentas · Lives · Suporte · Pagamentos" — menu (14,110,207,366)
- [link] "Suporte" — caminho no topo, na parte de cima, à esquerda (272,20,51,24)
- [link] "Voltar aos chamados" — conteúdo, na parte de cima, ao centro (272,100,1132,44)
- [título] "#1 Dúvida sobre a troca dos nameservers" — conteúdo, na parte de cima, ao centro (272,154,1132,38)
- [título] "Histórico do atendimento" — conteúdo, na parte de cima, à esquerda (299,273,277,29)
- [título] "Dados do chamado" — conteúdo, na parte de cima, à direita (1111,273,266,24)
- [selo] "Aguardando você" — conteúdo, na parte de cima, à direita (1111,307,156,27)
- [título] "Responder" — conteúdo, no meio da tela, à esquerda (299,671,99,24)
- [link] "Acessar suporte" — menu lateral, no fim da página, à esquerda (26,726,130,24)
- [envio de arquivo] "Anexar arquivo" — conteúdo, no fim da página, ao centro (299,744,734,44)
- [link] "ME Mariana Souza Exemplo Minha conta" — menu lateral, no fim da página, à esquerda (14,775,207,63)
- [campo de texto longo] "Sua resposta (aceita markdown)" — conteúdo, no fim da página, ao centro (299,839,734,102)
- [botão] "Sair" — menu lateral, no fim da página, à esquerda (14,848,207,38)
- [botão] "Enviar resposta" — conteúdo, no fim da página, à esquerda (299,1051,159,46)

## o que você vê
Página de um chamado: a conversa com a equipe.
- Topo: "#<número> <título>" e "Voltar aos chamados".
- "Histórico do atendimento": as mensagens do cliente e da "Equipe New Córtex", com data e hora.
- "Responder": campo "Sua resposta (aceita markdown)" com "Prévia", "Anexar arquivo" e o botão "Enviar resposta".
- À direita, "Dados do chamado": situação (ex.: "Aguardando você"), "Protocolo", "Negócio" e "Aberto em".
Menu da esquerda (igual em todas as telas logadas): "Início", "Meus negócios", "Visão geral", "Minha plataforma", "Treinamentos", "Ferramentas", "Lives", "Suporte", "Pagamentos"; embaixo, o quadro "Conte com a gente." com o link "Acessar suporte", o nome da pessoa com "Minha conta" e o botão "Sair".
