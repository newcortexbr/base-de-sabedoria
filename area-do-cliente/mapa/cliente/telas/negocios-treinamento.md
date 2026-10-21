# /negocios/[licenseId]/treinamento — Treinamentos (módulos)

Arquivo: `src/app/(cliente)/negocios/[licenseId]/treinamento/page.tsx`

## quem acessa
- cliente logado dono da licença; licença de outro cliente ou inexistente dá "Página não encontrada" (ver ficha nao-encontrado). O treinamento é do produto: o mesmo conteúdo aparece em todas as cidades do mesmo produto. Se TODAS as licenças do produto estiverem suspensas, o conteúdo some.

## o que faz
- lista dos módulos de treinamento do produto, com progresso de cada um e atalho para continuar de onde parou.

## estados de erro/vazio
- o progresso é marcado aula a aula pelo próprio cliente ("Aula concluída"); não há prova nem certificado.
- filtros: categorias ("Todos", "Configuração", "Crescimento") e status ("Todos os status", "Em andamento", "Não iniciados", "Concluídos").

## possíveis problemas para leigo
- `/treinamento` sem cidade redireciona para o treinamento do negócio.

## posições na tela (print de 2026-10-21, 1440x900, página inteira)
- print: [negocios-treinamento.png](../prints/negocios-treinamento.png) (208 KB) · dados brutos: [json](../prints/json/negocios-treinamento.json)
- aberta em `/negocios/<id>/treinamento` com dados FICTÍCIOS de exemplo (cliente "Mariana Souza Exemplo", Portal da Cidade em Linhares/ES, Colatina/ES e Aracruz/ES)
- coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [menu/links] "9 itens: Início · Meus negócios · Visão geral · Minha plataforma · Treinamentos · Ferramentas · Lives · Suporte · Pagamentos" — menu (14,110,207,366)
- [link] "Meus negócios" — caminho no topo, na parte de cima, à esquerda (272,20,97,24)
- [link] "Portal da Cidade · Linhares/ES" — caminho no topo, na parte de cima, ao centro (404,20,196,24)
- [título] "Treinamentos" — topo, na parte de cima, à esquerda (272,100,362,34)
- [título] "Aprenda a aproveitar seus treinamentos." — conteúdo, na parte de cima, à direita (871,310,456,28)
- [botão] "Encontrar conteúdo" — conteúdo, no meio da tela, à direita (1147,588,186,40)
- [campo] "Qual é a sua dúvida? BUSCA NO TREINAMENTO" — conteúdo, no meio da tela, ao centro (291,589,846,38)
- [link] "Continuar aula" — conteúdo, no meio da tela, à direita (1179,690,154,40)
- [título] "Configurando o menu e as seções" — conteúdo, no meio da tela, ao centro (345,700,820,18)
- [link] "Acessar suporte" — menu lateral, no meio da tela, à esquerda (26,726,130,24)
- [link] "ME Mariana Souza Exemplo Minha conta" — menu lateral, no meio da tela, à esquerda (14,775,207,63)
- [lista de opções] "Filtrar por status Todos os status Em andamento Não iniciados Concluídos" — conteúdo, no meio da tela, à direita (1214,775,138,36)
- [título] "Seus módulos" — conteúdo, no meio da tela, à esquerda (272,782,123,23)
- [selo] "3 módulos" — conteúdo, no meio da tela, à direita (1139,783,63,19)
- [botão] "Todos" — conteúdo, no meio da tela, à esquerda (272,823,69,36)
- [botão] "Configuração" — conteúdo, no meio da tela, à esquerda (349,823,115,36)
- [botão] "Crescimento" — conteúdo, no meio da tela, ao centro (472,823,112,36)
- [botão] "Sair" — menu lateral, no meio da tela, à esquerda (14,848,207,38)
- [link] "MÓDULO 01" — conteúdo, no fim da página, ao centro (640,878,345,448)
- [link] "MÓDULO 02" — conteúdo, no fim da página, à direita (1004,878,345,448)
- [link] "MÓDULO 00 COMECE AQUI" — conteúdo, no fim da página, à esquerda (276,879,343,445)
- [título] "Instalação do seu portal" — conteúdo, no fim da página, à esquerda (290,1336,315,22)
- [título] "Primeiros passos no portal" — conteúdo, no fim da página, ao centro (654,1338,317,22)
- [título] "Vendendo anúncios" — conteúdo, no fim da página, à direita (1018,1338,317,22)
- [link] "ASSISTIR AULAS" — conteúdo, no fim da página, à esquerda (290,1452,315,42)
- [link] "CONTINUAR" — conteúdo, no fim da página, ao centro (654,1454,317,42)
- [link] "ASSISTIR AULAS" — conteúdo, no fim da página, à direita (1018,1454,317,42)

## o que você vê
Tela "Treinamentos": os módulos de aulas do produto e o seu progresso.
- Topo: "Aprenda, coloque em prática e faça seu portal crescer." e, à direita, "Seu progresso" (ex.: 25%, "2 de 8 aulas concluídas").
- Vídeo "GUIA DOS TREINAMENTOS" ("Aprenda a aproveitar seus treinamentos.").
- "Qual é a sua dúvida?" (BUSCA NO TREINAMENTO) com "Encontrar conteúdo".
- "CONTINUE DE ONDE PAROU": a próxima aula e o botão "Continuar aula".
- "Seus módulos": filtros "Todos", "Configuração", "Crescimento" e a lista "Todos os status".
- Cada módulo é um cartão ("MÓDULO 00", "MÓDULO 01"…; o primeiro tem o selo "COMECE AQUI") com aulas concluídas, porcentagem, situação ("Não iniciado", "Em andamento") e o botão "ASSISTIR AULAS" ou "CONTINUAR".
Menu da esquerda (igual em todas as telas logadas): "Início", "Meus negócios", "Visão geral", "Minha plataforma", "Treinamentos", "Ferramentas", "Lives", "Suporte", "Pagamentos"; embaixo, o quadro "Conte com a gente." com o link "Acessar suporte", o nome da pessoa com "Minha conta" e o botão "Sair".
