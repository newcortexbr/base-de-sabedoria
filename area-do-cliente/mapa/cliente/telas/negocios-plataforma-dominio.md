# /negocios/[licenseId]/plataforma?dominio — Minha plataforma — informar o domínio

Arquivo: `src/app/(cliente)/negocios/[licenseId]/plataforma/page.tsx`

## quem acessa
- cliente logado dono da licença; licença de outro cliente ou inexistente dá "Página não encontrada" (ver ficha nao-encontrado). Só abre para negócio ativo.

## o que faz
- primeira etapa da instalação: o cliente informa o domínio (endereço) do portal.

## estados de erro/vazio
- "Domínio próprio" leva depois à troca de 2 nameservers; "Subdomínio" leva a criar 1 registro CNAME.
- sem marcar "Confirmo que este domínio é meu…" não dá para continuar.

## possíveis problemas para leigo
- o domínio precisa já estar registrado e pago antes; a Área do Cliente não registra domínio.
- digitar com "www" ou "https://" é erro comum.

## posições na tela (print de 2026-10-21, 1440x900, página inteira)
- print: [negocios-plataforma-dominio.png](../prints/negocios-plataforma-dominio.png) (50 KB) · dados brutos: [json](../prints/json/negocios-plataforma-dominio.json)
- aberta em `/negocios/<id>/plataforma?simular=WAITING_DOMAIN` com dados FICTÍCIOS de exemplo (cliente "Mariana Souza Exemplo", Portal da Cidade em Linhares/ES, Colatina/ES e Aracruz/ES)
- coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [menu/links] "9 itens: Início · Meus negócios · Visão geral · Minha plataforma · Treinamentos · Ferramentas · Lives · Suporte · Pagamentos" — menu (14,110,207,366)
- [link] "Meus negócios" — caminho no topo, na parte de cima, à esquerda (272,20,97,24)
- [link] "Portal da Cidade · Linhares/ES" — caminho no topo, na parte de cima, ao centro (404,20,196,24)
- [título] "Primeiro, escolha seu endereço." — topo, na parte de cima, ao centro (272,203,980,31)
- [botão] "VÍDEO · ETAPA 1 Como registrar um domínio" — conteúdo, no meio da tela, ao centro (514,307,496,277)
- [título] "Ainda não tem um domínio?" — conteúdo, no meio da tela, ao centro (657,604,209,20)
- [botão] "Assistir ao tutorial" — conteúdo, no meio da tela, ao centro (689,681,147,32)
- [link] "Acessar suporte" — menu lateral, no meio da tela, à esquerda (26,726,130,24)
- [link] "ME Mariana Souza Exemplo Minha conta" — menu lateral, no meio da tela, à esquerda (14,775,207,63)
- [título] "Qual endereço sua plataforma vai ter?" — conteúdo, no meio da tela, ao centro (299,783,926,29)
- [botão] "Sair" — menu lateral, no meio da tela, à esquerda (14,848,207,38)
- [botão] "Domínio própriomais comum portalvitoria.com.br O endereço é só da plataforma Depois: troca" — conteúdo, no fim da página, ao centro (299,853,456,180)
- [botão] "Subdomínio portal.minhaempresa.com.br Você já usa o domínio em outro site Depois: criar 1 " — conteúdo, no fim da página, à direita (769,853,456,180)
- [título] "Domínio própriomais comum" — conteúdo, no fim da página, ao centro (316,916,422,20)
- [título] "Subdomínio" — conteúdo, no fim da página, à direita (786,916,422,20)
- [selo] "mais comum" — conteúdo, no fim da página, ao centro (442,918,77,16)
- [campo] "Seu domínio" — conteúdo, no fim da página, ao centro (388,1086,836,40)
- [opção] "Confirmo que este domínio é meu, está registrado e pago." — conteúdo, no fim da página, à esquerda (303,1166,24,24)
- [botão] "Continuar" — conteúdo, no fim da página, à direita (1108,1219,117,46)
- [link] "Voltar" — conteúdo, no fim da página, à esquerda (299,1220,68,44)
- [link] "suporte" — conteúdo, no fim da página, ao centro (546,1311,44,15)

## o que você vê
Minha plataforma, primeira etapa: escolher e informar o domínio do portal.
- "VAMOS COLOCAR SEU PORTAL NO AR — Primeiro, escolha seu endereço."
- Vídeo "Como registrar um domínio" ("Ainda não tem um domínio?") com "Assistir ao tutorial".
- "Qual endereço sua plataforma vai ter?": duas opções — "Domínio próprio" (mais comum; ex. portalvitoria.com.br; depois troca 2 nameservers) ou "Subdomínio" (ex. portal.minhaempresa.com.br; para quem já usa o domínio em outro site; depois cria 1 registro CNAME).
- Campo "Seu domínio" (com "https://" fixo): "Digite sem "www" e sem "https://"."
- Caixa "Confirmo que este domínio é meu, está registrado e pago."
- Botões "Voltar" e "Continuar".
Menu da esquerda (igual em todas as telas logadas): "Início", "Meus negócios", "Visão geral", "Minha plataforma", "Treinamentos", "Ferramentas", "Lives", "Suporte", "Pagamentos"; embaixo, o quadro "Conte com a gente." com o link "Acessar suporte", o nome da pessoa com "Minha conta" e o botão "Sair".
