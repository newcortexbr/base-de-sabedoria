# /negocios/[licenseId]/ferramentas — Ferramentas

Arquivo: `src/app/(cliente)/negocios/[licenseId]/ferramentas/page.tsx`

## quem acessa
- cliente logado dono da licença; licença de outro cliente ou inexistente dá "Página não encontrada" (ver ficha nao-encontrado). Negócio suspenso perde as ferramentas.

## o que faz
- lista das ferramentas do produto (ex.: Extrator Maps, DadosPJ) e o acesso a cada uma, sem senha nova (login único).

## estados de erro/vazio
- cada ferramenta aparece como disponível (botão de acesso) ou "Em breve" / "Acesso ainda não configurado".
- "Treinamento em preparação" quando a aula da ferramenta ainda não existe.
- no print, as três estão "Em breve" porque o ambiente de exemplo não tinha o login único configurado.

## possíveis problemas para leigo
- se a ferramenta não abrir, é caso de suporte (o acesso é liberado pela New Córtex).

## posições na tela (print de 2026-10-21, 1440x900, página inteira)
- print: [negocios-ferramentas.png](../prints/negocios-ferramentas.png) (39 KB) · dados brutos: [json](../prints/json/negocios-ferramentas.json)
- aberta em `/negocios/<id>/ferramentas` com dados FICTÍCIOS de exemplo (cliente "Mariana Souza Exemplo", Portal da Cidade em Linhares/ES, Colatina/ES e Aracruz/ES)
- coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [menu/links] "9 itens: Início · Meus negócios · Visão geral · Minha plataforma · Treinamentos · Ferramentas · Lives · Suporte · Pagamentos" — menu (14,110,207,366)
- [link] "Meus negócios" — caminho no topo, na parte de cima, à esquerda (272,20,97,24)
- [link] "Portal da Cidade · Linhares/ES" — caminho no topo, na parte de cima, ao centro (404,20,196,24)
- [título] "Ferramentas" — topo, na parte de cima, ao centro (272,100,1080,34)
- [título] "Conheça suas ferramentas" — conteúdo, na parte de cima, à direita (712,266,627,23)
- [título] "Suas ferramentas" — conteúdo, no meio da tela, à esquerda (272,448,152,23)
- [link] "Acessar suporte" — menu lateral, no fim da página, à esquerda (26,726,130,24)
- [link] "ME Mariana Souza Exemplo Minha conta" — menu lateral, no fim da página, à esquerda (14,775,207,63)
- [título] "Extrator Maps" — conteúdo, no fim da página, à esquerda (287,796,319,21)
- [título] "DadosPJ" — conteúdo, no fim da página, ao centro (652,796,319,21)
- [título] "Gerador de propostas" — conteúdo, no fim da página, à direita (1018,796,319,21)
- [botão] "Sair" — menu lateral, no fim da página, à esquerda (14,848,207,38)

## o que você vê
Tela "Ferramentas": as ferramentas incluídas no produto e como acessá-las.
- Topo: "Acesse suas ferramentas e aprenda a usar cada uma delas."
- Vídeo "GUIA DAS FERRAMENTAS" ("Conheça suas ferramentas").
- "Suas ferramentas" com a contagem (ex.: "0 de 3 ferramentas disponíveis").
- Um cartão por ferramenta — ex.: "Extrator Maps" (empresas do Google Maps para prospectar anunciantes), "DadosPJ" (dados de empresas na Receita Federal), "Gerador de propostas" — com o selo "Em breve" ou o botão de acesso, e o link do treinamento da ferramenta.
- Rodapé: "As aulas mostram o uso de cada ferramenta. Nenhuma chave de acesso é exibida nesta página."
Menu da esquerda (igual em todas as telas logadas): "Início", "Meus negócios", "Visão geral", "Minha plataforma", "Treinamentos", "Ferramentas", "Lives", "Suporte", "Pagamentos"; embaixo, o quadro "Conte com a gente." com o link "Acessar suporte", o nome da pessoa com "Minha conta" e o botão "Sair".
