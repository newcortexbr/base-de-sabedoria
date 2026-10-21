# /negocios/[licenseId]/plataforma — Minha plataforma — trocar os DNS (nameservers)

Arquivo: `src/app/(cliente)/negocios/[licenseId]/plataforma/page.tsx`

## quem acessa
- cliente logado dono da licença; licença de outro cliente ou inexistente dá "Página não encontrada" (ver ficha nao-encontrado). Só abre para negócio ativo (suspenso volta para a Visão geral).

## o que faz
- assistente de instalação do portal; nesta etapa o cliente troca os servidores DNS (nameservers) no site onde registrou o domínio.

## estados de erro/vazio
- a tela muda sozinha conforme a instalação avança ("Atualizando ao vivo"); as outras etapas estão nas fichas negocios-plataforma-*.
- etapas no topo: "Seu domínio", "Conexão DNS", "Portal no ar".

## possíveis problemas para leigo
- leigo costuma não saber o que é nameserver/DNS nem onde fica no registrador: o vídeo e os "Atalhos do seu registrador" ajudam.
- a propagação pode levar horas; clicar em "Já configurei" não acelera.

## posições na tela (print de 2026-10-21, 1440x900, página inteira)
- print: [negocios-plataforma.png](../prints/negocios-plataforma.png) (43 KB) · dados brutos: [json](../prints/json/negocios-plataforma.json)
- aberta em `/negocios/<id>/plataforma` com dados FICTÍCIOS de exemplo (cliente "Mariana Souza Exemplo", Portal da Cidade em Linhares/ES, Colatina/ES e Aracruz/ES)
- coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [menu/links] "9 itens: Início · Meus negócios · Visão geral · Minha plataforma · Treinamentos · Ferramentas · Lives · Suporte · Pagamentos" — menu (14,110,207,366)
- [link] "Meus negócios" — caminho no topo, na parte de cima, à esquerda (272,20,97,24)
- [link] "Portal da Cidade · Linhares/ES" — caminho no topo, na parte de cima, ao centro (404,20,196,24)
- [título] "Falta apontar o seu domínio." — topo, na parte de cima, ao centro (272,243,980,31)
- [botão] "VÍDEO · ETAPA 2 Como trocar os DNS do domínio" — conteúdo, no meio da tela, ao centro (514,347,496,277)
- [título] "Veja como fazer a alteração" — conteúdo, no meio da tela, ao centro (657,644,210,20)
- [botão] "Assistir ao tutorial" — conteúdo, no meio da tela, ao centro (689,721,147,32)
- [link] "Acessar suporte" — menu lateral, no meio da tela, à esquerda (26,726,130,24)
- [link] "ME Mariana Souza Exemplo Minha conta" — menu lateral, no meio da tela, à esquerda (14,775,207,63)
- [título] "Seus servidores DNS" — conteúdo, no meio da tela, ao centro (295,819,934,20)
- [botão] "Sair" — menu lateral, no fim da página, à esquerda (14,848,207,38)
- [botão] "Copiar" — conteúdo, no fim da página, à direita (1132,890,97,44)
- [botão] "Copiar" — conteúdo, no fim da página, à direita (1132,963,97,44)
- [botão] "Já configurei" — conteúdo, no fim da página, ao centro (295,1037,934,44)
- [título] "Atalhos do seu registrador" — conteúdo, no fim da página, à esquerda (299,1147,236,24)
- [link] "Abrir o Registro.br" — conteúdo, no fim da página, à esquerda (299,1191,131,17)
- [link] "Abrir a Hostinger" — conteúdo, no fim da página, ao centro (446,1191,122,17)
- [link] "suporte" — conteúdo, no fim da página, ao centro (546,1272,44,15)

## o que você vê
Minha plataforma, etapa de trocar os servidores DNS (nameservers) do domínio.
- No topo, as três etapas: "Seu domínio", "Conexão DNS", "Portal no ar", e o aviso "Atualizando ao vivo · verificado há …".
- "CONECTE SEU DOMÍNIO — Falta apontar o seu domínio.": no site onde registrou o domínio, trocar os servidores DNS pelos endereços da tela.
- Vídeo "Como trocar os DNS do domínio" com "Assistir ao tutorial".
- "Seus servidores DNS": "SERVIDOR DNS 1" e "SERVIDOR DNS 2", cada um com o botão "Copiar".
- "Já configurei": avisa que a troca foi feita; a verificação segue sozinha.
- "Atalhos do seu registrador": "Abrir o Registro.br" e "Abrir a Hostinger".
- Rodapé: "Esta etapa é automática. Se precisar de ajuda, o suporte acompanha o andamento da instalação."
Menu da esquerda (igual em todas as telas logadas): "Início", "Meus negócios", "Visão geral", "Minha plataforma", "Treinamentos", "Ferramentas", "Lives", "Suporte", "Pagamentos"; embaixo, o quadro "Conte com a gente." com o link "Acessar suporte", o nome da pessoa com "Minha conta" e o botão "Sair".
