# /suporte/novo — Novo chamado

Arquivo: `src/app/(cliente)/suporte/novo/page.tsx`

## quem acessa
- cliente logado, inclusive conta BLOCKED.

## o que faz
- formulário para abrir um chamado com a equipe.

## estados de erro/vazio
- todos os campos são obrigatórios, menos anexos.
- anexos: até 100 MB por arquivo, no máximo 20 por chamado, só tipos permitidos.

## possíveis problemas para leigo
- com mais de um negócio é fácil escolher a cidade errada; a tela avisa "confira se este é o certo".
- nunca enviar senha ou código no chamado.

## posições na tela (print de 2026-10-21, 1440x900, página inteira)
- print: [suporte-novo.png](../prints/suporte-novo.png) (33 KB) · dados brutos: [json](../prints/json/suporte-novo.json)
- aberta em `/suporte/novo` com dados FICTÍCIOS de exemplo (cliente "Mariana Souza Exemplo", Portal da Cidade em Linhares/ES, Colatina/ES e Aracruz/ES)
- coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [menu/links] "9 itens: Início · Meus negócios · Visão geral · Minha plataforma · Treinamentos · Ferramentas · Lives · Suporte · Pagamentos" — menu (14,110,207,366)
- [link] "Suporte" — caminho no topo, na parte de cima, à esquerda (272,20,51,24)
- [título] "Novo chamado" — conteúdo, na parte de cima, ao centro (272,100,1132,38)
- [lista de opções] "Negócio vinculado" — conteúdo, na parte de cima, ao centro (299,243,560,44)
- [lista de opções] "Assunto" — conteúdo, no meio da tela, ao centro (299,360,560,44)
- [campo] "Título" — conteúdo, no meio da tela, ao centro (299,451,560,48)
- [campo de texto longo] "Mensagem" — conteúdo, no fim da página, ao centro (299,599,560,140)
- [link] "Acessar suporte" — menu lateral, no fim da página, à esquerda (26,726,130,24)
- [envio de arquivo] "Anexar arquivo" — conteúdo, no fim da página, ao centro (299,757,560,100)
- [link] "ME Mariana Souza Exemplo Minha conta" — menu lateral, no fim da página, à esquerda (14,775,207,63)
- [botão] "Sair" — menu lateral, no fim da página, à esquerda (14,848,207,38)
- [botão] "Enviar chamado" — conteúdo, no fim da página, à esquerda (299,937,164,46)
- [link] "Cancelar" — conteúdo, no fim da página, ao centro (479,937,112,46)

## o que você vê
Tela "Novo chamado": formulário para pedir ajuda à equipe.
- "Conte o que aconteceu. Negócio, assunto, título e mensagem são obrigatórios."
- "Negócio vinculado": escolhe a cidade (ex.: "Portal da Cidade — Linhares/ES") ou "Nenhum: é sobre minha conta" / "Nenhum: outro assunto".
- "Assunto": "Instalação e domínio", "Portal e conteúdo", "Outro assunto".
- "Título": resumo em uma frase.
- "Mensagem": o que tentou fazer, o que esperava e o que apareceu na tela.
- "Anexos": "Anexar arquivo" (até 100 MB por arquivo, no máximo 20 por chamado).
- Aviso: "Não envie senhas, códigos de acesso ou chaves na mensagem nem nos anexos."
- Botões "Enviar chamado" e "Cancelar".
Menu da esquerda (igual em todas as telas logadas): "Início", "Meus negócios", "Visão geral", "Minha plataforma", "Treinamentos", "Ferramentas", "Lives", "Suporte", "Pagamentos"; embaixo, o quadro "Conte com a gente." com o link "Acessar suporte", o nome da pessoa com "Minha conta" e o botão "Sair".
