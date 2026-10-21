# /negocios/[licenseId]/pagamentos — Pagamentos do negócio

Arquivo: `src/app/(cliente)/negocios/[licenseId]/pagamentos/page.tsx`

## quem acessa
- cliente logado dono da licença; licença de outro cliente ou inexistente dá "Página não encontrada" (ver ficha nao-encontrado).

## o que faz
- financeiro de um negócio: as duas cobranças (reserva territorial anual e mensalidade), situação, próximo vencimento e histórico com comprovantes.

## estados de erro/vazio
- selos: "Em dia", "A vencer", "Pago", "Em atraso", "Suspenso".
- cobrança atrasada mostra "Regularizar pagamento"/"Regularizar" (ficha negocios-pagamentos-atrasado).
- abas do histórico: "Todas", "Reserva territorial", "Mensalidade".

## possíveis problemas para leigo
- reembolso e cancelamento não são feitos nesta tela: é pelo suporte.
- cada cidade tem as próprias cobranças.

## posições na tela (print de 2026-10-21, 1440x900, página inteira)
- print: [negocios-pagamentos.png](../prints/negocios-pagamentos.png) (62 KB) · dados brutos: [json](../prints/json/negocios-pagamentos.json)
- aberta em `/negocios/<id>/pagamentos` com dados FICTÍCIOS de exemplo (cliente "Mariana Souza Exemplo", Portal da Cidade em Linhares/ES, Colatina/ES e Aracruz/ES)
- coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [menu/links] "9 itens: Início · Meus negócios · Visão geral · Minha plataforma · Treinamentos · Ferramentas · Lives · Suporte · Pagamentos" — menu (14,110,207,366)
- [link] "Meus negócios" — caminho no topo, na parte de cima, à esquerda (272,20,97,24)
- [link] "Portal da Cidade · Linhares/ES" — caminho no topo, na parte de cima, ao centro (404,20,196,24)
- [título] "Pagamentos" — topo, na parte de cima, ao centro (272,122,1080,34)
- [botão] "GUIA DOS PAGAMENTOS Entenda suas duas cobranças. Vídeo em breve" — conteúdo, na parte de cima, ao centro (283,211,424,238)
- [título] "Como funcionam seus pagamentos?" — conteúdo, na parte de cima, à direita (729,280,600,24)
- [título] "Situação dos pagamentos" — conteúdo, no meio da tela, ao centro (272,484,1080,24)
- [título] "Reserva territorial" — conteúdo, no meio da tela, ao centro (291,618,494,21)
- [título] "Mensalidade" — conteúdo, no meio da tela, à direita (839,618,494,21)
- [link] "Acessar suporte" — menu lateral, no meio da tela, à esquerda (26,726,130,24)
- [link] "ME Mariana Souza Exemplo Minha conta" — menu lateral, no meio da tela, à esquerda (14,775,207,63)
- [link] "Ver detalhes da reserva" — conteúdo, no meio da tela, ao centro (291,786,494,44)
- [link] "Ver próxima cobrança" — conteúdo, no meio da tela, à direita (839,786,494,44)
- [botão] "Sair" — menu lateral, no fim da página, à esquerda (14,848,207,38)
- [título] "Histórico de cobranças" — conteúdo, no fim da página, à esquerda (291,937,169,20)
- [botão] "Todas 3" — conteúdo, no fim da página, à esquerda (295,975,74,34)
- [botão] "Reserva territorial 1" — conteúdo, no fim da página, à esquerda (373,975,142,34)
- [botão] "Mensalidade 2" — conteúdo, no fim da página, ao centro (519,975,114,34)
- [link] "Ver cobrança (abre em nova aba)" — conteúdo, no fim da página, à direita (1226,1085,103,32)
- [link] "Ver comprovante (abre em nova aba)" — conteúdo, no fim da página, à direita (1202,1151,127,32)
- [link] "Ver comprovante (abre em nova aba)" — conteúdo, no fim da página, à direita (1202,1217,127,32)

## o que você vê
Tela "Pagamentos" de um negócio (cidade).
- Topo: "FINANCEIRO DO SEU PORTAL — Vencimentos e histórico da reserva territorial e da mensalidade de <cidade>."
- Vídeo "GUIA DOS PAGAMENTOS" ("Entenda suas duas cobranças.").
- "Situação dos pagamentos — As duas obrigações precisam estar em dia para manter portal e ferramentas ativos.":
  - "Reserva territorial" (anual): próximo vencimento, último pagamento e "Ver detalhes da reserva".
  - "Mensalidade" (manutenção, atualizações, suporte e ferramentas): próximo vencimento, valor e "Ver próxima cobrança".
- Aviso: "Atraso superior a 5 dias em qualquer uma das cobranças suspende o portal e as ferramentas até a regularização."
- "Histórico de cobranças": abas "Todas", "Reserva territorial", "Mensalidade" e a tabela "Cobrança / Vencimento / Valor / Situação / Detalhes", com "Ver cobrança" (boleto/pix) ou "Ver comprovante".
Menu da esquerda (igual em todas as telas logadas): "Início", "Meus negócios", "Visão geral", "Minha plataforma", "Treinamentos", "Ferramentas", "Lives", "Suporte", "Pagamentos"; embaixo, o quadro "Conte com a gente." com o link "Acessar suporte", o nome da pessoa com "Minha conta" e o botão "Sair".
