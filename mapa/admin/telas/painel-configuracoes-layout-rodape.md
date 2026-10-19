# /painel/configuracoes/layout/rodape (Rodapé)

Arquivos: `app/painel/configuracoes/layout/rodape/page.tsx` (379 linhas), `../cores-utils.ts`, `../PreviaDoSite.tsx`, `../actions.ts`

## rota e gate
- `/painel/configuracoes/layout/rodape`. client. gate `PainelGuard` (admin/master); sem gate de módulo.

## o que faz
- personaliza o rodapé do site: modelo, texto abaixo da logo, cor de fundo, cor do texto e tamanho da logo. prévia "Como fica no seu site" (`PreviaDoSite alvo="rodape"`) com o rascunho; nada grava até "Salvar".

## campos e ações (`save`, `:116`)
- Modelo do rodapé: `rodape-1` (linha única), `rodape-2`, `rodape-3` (`layout_rodape`).
- Texto abaixo da logo: textarea `maxLength 300`, contador `n/300` (`descricao`).
- Cor de fundo: `ColorField` sólida ou gradiente (`cor_rodape`, gravado como string CSS, ver `cores-utils.ts:44`).
- Cor do texto: seletor de cor (`cor_texto_rodape`).
- Tamanho da logo do rodapé: Pequena (32 px), Média, Grande (60 px) (`tamanho_logo_rodape`).
- `corNavBar` (`cor_barra_nav`) é lida só para os desenhos de exemplo dos modelos.

## apis
- `adminApi.guia.config.get` (`lib/admin-api.ts:1657`): `layout_rodape`, `descricao`, `cor_rodape`, `cor_texto_rodape`, `tamanho_logo_rodape`, `cor_barra_nav`.
- `adminApi.guia.config.atualizar` (PATCH, `:1658`): os cinco campos.
- Server Action `revalidarLayout` (`../actions.ts:33`).

## estados
- carregando; falha de carga: mensagem vermelha e formulário oculto (`:96`, `:112`).
- salvar: "Salvo com sucesso!" (verde) ou a mensagem do servidor (vermelha). a comparação do verde é pelo texto exato (`:343`): outra mensagem de sucesso futura apareceria vermelha.
- sem estado vazio.

## possíveis problemas
- fato: o campo "Texto abaixo da logo" grava em `descricao` (`:122`), campo do portal que pode ser usado em outros lugares (meta description, página institucional) além do rodapé (hipótese; não verifiquei os consumidores).
- fato: sem aviso de contraste entre `cor_texto_rodape` e o fundo; texto branco em fundo claro some (a tela de Cores tem aviso, esta não).
- fato: gradiente só é lido de volta se estiver no formato `linear-gradient(dir, #hex, #hex)` (`cores-utils.ts:36-42`).
- fato: `revalidarLayout` falho só em `console.error` (`:129`); "Salvo" aparece mesmo sem invalidar o cache do site.
- fato: o rodapé não altera redes sociais, WhatsApp e e-mail; esses ficam em `/painel/configuracoes` (a tela não diz isso ao dono).

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-configuracoes-layout-rodape.png](../prints/painel-configuracoes-layout-rodape.png) · dados brutos: [json](../prints/json/painel-configuracoes-layout-rodape.json)
- aberta em `/painel/configuracoes/layout/rodape`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [link] "Configurações" — conteúdo, no topo da página, à esquerda (300,36,91,20)
- [link] "Layout" — conteúdo, no topo da página, ao centro (411,36,43,20)
- [título] "Rodapé" — conteúdo, faixa larga no topo da página (300,84,956,36)
- [título] "grandevix (local)" — menu lateral, na parte de cima, à esquerda (14,109,207,19)
- [menu] "29 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Computador · Celular · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Artigos · Orçamentos Online · A Voz do Povo …" — menu lateral, faixa larga na parte de cima (lista de 29 itens em coluna) (10,111,963,949)
- [botão] "✓Linha única" — conteúdo, na parte de cima, à esquerda (300,211,238,118)
- [botão] "Centralizado" — conteúdo, na parte de cima, à esquerda, logo abaixo de “✓Linha única” (300,345,238,118)
- [botão] "Faixa de chamada" — conteúdo, no meio da tela, à esquerda, logo abaixo de “Centralizado” (300,479,238,118)
- [campo de texto longo] "Ex: O guia local e portal de notícias da Grande Vitória." — conteúdo, no meio da tela, ao centro, logo abaixo de “Faixa de chamada” (319,678,424,81)
- [botão] "Herdar cor do topo" — conteúdo, no meio da tela, à esquerda, logo abaixo de “Ex: O guia local e portal de notíci” (300,817,160,32)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, mais abaixo (rolando a página), à direita (1200,913,56,56)
- [selo] "··" — menu lateral, mais abaixo (rolando a página), à esquerda (16,951,32,32)
- [botão] "Cor sólida" — conteúdo, mais abaixo (rolando a página), à esquerda (319,954,210,30)
- [botão] "Gradiente" — conteúdo, mais abaixo (rolando a página), ao centro (533,954,210,30)
- [campo] "#084a43" — conteúdo, mais abaixo (rolando a página), à esquerda, logo abaixo de “Cor sólida” (319,998,40,40)
- [campo] "#084A43" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Cor sólida” (367,998,376,40)
- [campo] "#ffffff" — conteúdo, mais abaixo (rolando a página), à esquerda, logo abaixo de “#084a43” (319,1118,40,40)
- [campo] "#FFFFFF" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “#084A43” (367,1118,300,40)
- [botão] "Branco" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “#084A43” (675,1123,30,30)
- [botão] "Preto" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “#084A43” (713,1123,30,30)
- [botão] "Pequena32px" — conteúdo, mais abaixo (rolando a página), à esquerda, logo abaixo de “#ffffff” (319,1240,126,136)
- [botão] "Média44px" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “#FFFFFF” (455,1240,126,136)
- [botão] "Grande60px" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “#FFFFFF” (591,1240,152,136)
- [botão] "Salvar" — conteúdo, no fim da página, à esquerda, logo abaixo de “Pequena32px” (300,1418,106,44)
