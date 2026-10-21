# /negocios/[licenseId]/plataforma?propagacao — Minha plataforma — verificando (propagação do DNS)

Arquivo: `src/app/(cliente)/negocios/[licenseId]/plataforma/page.tsx`

## quem acessa
- cliente logado dono da licença; licença de outro cliente ou inexistente dá "Página não encontrada" (ver ficha nao-encontrado). Só abre para negócio ativo.

## o que faz
- depois da troca dos DNS: a tela acompanha a propagação pelos servidores de DNS públicos e testa o portal.

## estados de erro/vazio
- a tabela mostra cada servidor (Google, Cloudflare, Quad9, OpenDNS, AdGuard, Lumen/Level3) com o que ele responde e "Aguardando" ou confirmado; a porcentagem sobe sozinha.

## possíveis problemas para leigo
- propagação pode levar de minutos a 48 h; se ficar muito tempo em 0%, a troca no registrador pode não ter sido salva.

## posições na tela (print de 2026-10-21, 1440x900, página inteira)
- print: [negocios-plataforma-propagacao.png](../prints/negocios-plataforma-propagacao.png) (63 KB) · dados brutos: [json](../prints/json/negocios-plataforma-propagacao.json)
- aberta em `/negocios/<id>/plataforma?simular=WAITING_PROPAGATION` com dados FICTÍCIOS de exemplo (cliente "Mariana Souza Exemplo", Portal da Cidade em Linhares/ES, Colatina/ES e Aracruz/ES)
- coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [menu/links] "9 itens: Início · Meus negócios · Visão geral · Minha plataforma · Treinamentos · Ferramentas · Lives · Suporte · Pagamentos" — menu (14,110,207,366)
- [link] "Meus negócios" — caminho no topo, na parte de cima, à esquerda (272,20,97,24)
- [link] "Portal da Cidade · Linhares/ES" — caminho no topo, na parte de cima, ao centro (404,20,196,24)
- [título] "Estamos verificando seu portal." — topo, na parte de cima, ao centro (272,203,980,31)
- [botão] "VÍDEO · ETAPA 3 O que acontece antes da publicação?" — conteúdo, na parte de cima, ao centro (514,307,496,277)
- [título] "Estamos na última etapa" — conteúdo, no meio da tela, ao centro (668,604,188,20)
- [botão] "Assistir ao tutorial" — conteúdo, no meio da tela, ao centro (689,681,147,32)
- [link] "Acessar suporte" — menu lateral, no meio da tela, à esquerda (26,726,130,24)
- [aviso] "Testando o acesso ao portal… Estamos conferindo se a plataforma responde no seu endereço. " — conteúdo, no fim da página, ao centro (272,758,980,945)
- [link] "ME Mariana Souza Exemplo Minha conta" — menu lateral, no meio da tela, à esquerda (14,775,207,63)
- [botão] "Sair" — menu lateral, no meio da tela, à esquerda (14,848,207,38)
- [título] "Testando o acesso ao portal…" — conteúdo, no meio da tela, ao centro (628,871,268,24)
- [título] "Propagação pelos servidores de DNS" — conteúdo, no fim da página, ao centro (502,1196,520,19)
- [tabela] "Servidor · O que ele responde · Situação" — conteúdo, no fim da página, ao centro (502,1263,520,374)
- [link] "Enquanto espera, conheça o treinamento →" — conteúdo, no fim da página, ao centro (625,1653,274,20)
- [link] "suporte" — conteúdo, no fim da página, ao centro (546,1723,44,15)

## o que você vê
Minha plataforma, verificando a troca de DNS (propagação).
- "DNS ENCONTRADO — Estamos verificando seu portal."
- Vídeo "O que acontece antes da publicação?" com "Assistir ao tutorial".
- "Testando o acesso ao portal…" e a linha de progresso: "Provisionando", "Aguardando DNS", "Plataforma pronta", "Sua confirmação", "Concluída".
- "Propagação pelos servidores de DNS": porcentagem ("0% dos servidores"), "Verificado há …" e uma tabela "Servidor / O que ele responde / Situação" (ex.: Google 8.8.8.8 — "Aguardando").
- Link "Enquanto espera, conheça o treinamento →".
Menu da esquerda (igual em todas as telas logadas): "Início", "Meus negócios", "Visão geral", "Minha plataforma", "Treinamentos", "Ferramentas", "Lives", "Suporte", "Pagamentos"; embaixo, o quadro "Conte com a gente." com o link "Acessar suporte", o nome da pessoa com "Minha conta" e o botão "Sair".
