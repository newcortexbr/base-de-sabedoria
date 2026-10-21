# /negocios/[licenseId]/treinamento/[moduleId]/[lessonId] — Aula

Arquivo: `src/app/(cliente)/negocios/[licenseId]/treinamento/[moduleId]/[lessonId]/page.tsx`

## quem acessa
- cliente logado dono da licença; licença de outro cliente ou inexistente dá "Página não encontrada" (ver ficha nao-encontrado).

## o que faz
- uma aula: vídeo, texto, marcar como concluída e navegar entre as aulas do módulo.

## estados de erro/vazio
- aula concluída mostra "Você concluiu esta aula." com "Aula concluída" e "Desmarcar"; não concluída mostra o botão para marcar.
- a lista à direita marca as aulas já concluídas.

## possíveis problemas para leigo
- marcar como concluída é opcional; nada fica bloqueado por não marcar.

## posições na tela (print de 2026-10-21, 1440x900, página inteira)
- print: [negocios-treinamento-aula.png](../prints/negocios-treinamento-aula.png) (41 KB) · dados brutos: [json](../prints/json/negocios-treinamento-aula.json)
- aberta em `/negocios/<id>/treinamento/<id>/<id>` com dados FICTÍCIOS de exemplo (cliente "Mariana Souza Exemplo", Portal da Cidade em Linhares/ES, Colatina/ES e Aracruz/ES)
- coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [menu/links] "9 itens: Início · Meus negócios · Visão geral · Minha plataforma · Treinamentos · Ferramentas · Lives · Suporte · Pagamentos" — menu (14,110,207,366)
- [link] "Meus negócios" — caminho no topo, na parte de cima, à esquerda (272,20,97,24)
- [link] "Treinamentos" — caminho no topo, na parte de cima, à esquerda (272,100,82,24)
- [link] "Primeiros passos no portal" — caminho no topo, na parte de cima, à esquerda (375,100,161,24)
- [título] "Publicando sua primeira notícia" — topo, na parte de cima, ao centro (272,161,760,29)
- [título] "Primeiros passos no portal" — menu lateral, na parte de cima, à direita (1071,182,262,20)
- [botão] "VÍDEO DA AULA Publicando sua primeira notícia Clique para assistir" — conteúdo, no meio da tela, ao centro (272,231,760,428)
- [link] "Conhecendo o painel administrativo (concluída)" — menu lateral, na parte de cima, à direita (1053,258,298,48)
- [link] "Publicando sua primeira notícia (concluída)" — menu lateral, na parte de cima, à direita (1053,306,298,48)
- [link] "03 Configurando o menu e as seções" — menu lateral, no meio da tela, à direita (1053,354,298,48)
- [link] "Ver todos os módulos" — menu lateral, no meio da tela, à direita (1071,416,262,32)
- [botão] "Aula concluída" — conteúdo, no fim da página, à esquerda (291,718,162,42)
- [link] "Acessar suporte" — menu lateral, no fim da página, à esquerda (26,726,130,24)
- [botão] "Desmarcar" — conteúdo, no fim da página, à esquerda (291,770,77,24)
- [link] "ME Mariana Souza Exemplo Minha conta" — menu lateral, no fim da página, à esquerda (14,775,207,63)
- [título] "Sobre esta aula" — conteúdo, no fim da página, ao centro (293,842,718,19)
- [botão] "Sair" — menu lateral, no fim da página, à esquerda (14,848,207,38)
- [título] "Publicando sua primeira notícia" — conteúdo, no fim da página, ao centro (293,871,718,19)
- [link] "Aula anterior" — caminho no topo, no fim da página, à esquerda (272,1048,149,42)
- [link] "Próxima aula" — caminho no topo, no fim da página, ao centro (884,1048,148,42)

## o que você vê
Página de uma aula do treinamento.
- Caminho no topo (módulo › aula) e "<MÓDULO> · AULA 2 DE 3", título e subtítulo da aula.
- "VÍDEO DA AULA": clique para assistir.
- Situação: "Você concluiu esta aula." com "Aula concluída" e "Desmarcar" (ou o botão para marcar como concluída).
- "Sobre esta aula": o texto da aula com os passos.
- "Aula anterior" e "Próxima aula".
- À direita: o módulo, "2 de 3 aulas concluídas" e a lista das aulas (as feitas aparecem "(concluída)"), e "Ver todos os módulos".
Menu da esquerda (igual em todas as telas logadas): "Início", "Meus negócios", "Visão geral", "Minha plataforma", "Treinamentos", "Ferramentas", "Lives", "Suporte", "Pagamentos"; embaixo, o quadro "Conte com a gente." com o link "Acessar suporte", o nome da pessoa com "Minha conta" e o botão "Sair".
