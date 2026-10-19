# /painel/configuracoes/layout/topo (Topo)

Arquivos: `app/painel/configuracoes/layout/topo/page.tsx` (521 linhas), `topo/OrdemDoMenu.tsx` (131), `../cores-utils.ts`, `../PreviaDoSite.tsx`, `lib/menu-ordem.ts`

## rota e gate
- `/painel/configuracoes/layout/topo`. client. gate `PainelGuard` (admin/master); sem gate de módulo.

## o que faz
- personaliza o cabeçalho do site: modelo, tamanho da logo, cores das barras, cor dos links e ordem do menu. duas colunas: escolhas à esquerda, prévia fixa à direita ("Como fica no seu site", `PreviaDoSite alvo="topo"` com o rascunho). nada é gravado até "Salvar Topo".

## campos e ações (`save`, `:211`)
- Modelo do cabeçalho: cinco desenhos clicáveis, `topo-1` a `topo-5` (`layout_topo`), com SVG gerado das cores atuais.
- Tamanho da logo: Pequena (48px), Média (64px), Grande (100px) (`tamanho_logo`: pequena|media|grande).
- Cores: `ColorField` para "Barra superior" (`cor_barra_topo`) e "Barra de navegação" (`cor_barra_nav`), cada um sólido ou gradiente (duas cores + direção; 4 direções e presets `GRAD_PRESETS`); e cor dos links do menu (`cor_links_nav`). o gradiente é gravado como string `linear-gradient(dir, c1, c2)` (`cores-utils.ts:44`).
- Ordem do menu (`OrdemDoMenu`): arrastar ou setas Subir/Descer; "Início" fixo ("sempre primeiro"); módulos desligados ou programa fechado ficam ao fim, sem posição; botão para voltar à ordem padrão (`ordem_menu`).

## apis
- `adminApi.guia.config.get` (`lib/admin-api.ts:1657`): lê `layout_topo`, `cor_barra_topo`, `cor_barra_nav`, `cor_links_nav`, `tamanho_logo`, `ordem_menu`, `modulos`, `parceiros_aberto`.
- `adminApi.guia.config.atualizar` (PATCH `/config/`, `:1658`): envia os seis campos acima.
- Server Action `revalidarLayout` (`../actions.ts:33`), melhor esforço.

## estados
- carregando; falha de carga: mensagem em rosa e o formulário não aparece (`:190`, `:207`).
- salvar: `feedback` "Salvo!" por 2 s ou a mensagem do servidor (rosa).
- sem estado vazio. `modulos` ausente (portal antigo) é tratado como tudo ligado (`:203`).

## em nome do cliente
- não age em nome de cliente. o topo vale para todos os visitantes, inclusive a área do cliente.

## possíveis problemas
- fato: `parseCorInput` só entende o gradiente no formato `linear-gradient(dir, #hex, #hex)` (`cores-utils.ts:36-42`); qualquer outro valor vindo do servidor (rgb, nome de cor) vira "sólida" com o texto cru e o campo de cor nativo (`type=color`) pode não mostrar a cor certa (hipótese de impacto).
- fato: `sanitizeHex` só põe `#` na frente (`cores-utils.ts:56`); não limita tamanho nem caracteres, portanto cor incompleta pode ser enviada (validação do backend não verificada).
- fato: o contraste entre `cor_links_nav` e a barra de navegação não é avisado (diferente da tela de Cores); com links brancos e barra clara, o menu some.
- fato: `revalidarLayout` falho só vai para `console.error` (`:226`); "Salvo!" aparece mesmo se o cache do site não for invalidado.
- fato: `ordem_menu` é enviada inteira a cada salvamento; se módulos mudarem depois, itens novos dependem de `ordenarMenu` completar a lista (comportamento em `lib/menu-ordem.ts`, não lido a fundo).

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-configuracoes-layout-topo.png](../prints/painel-configuracoes-layout-topo.png) · dados brutos: [json](../prints/json/painel-configuracoes-layout-topo.json)
- aberta em `/painel/configuracoes/layout/topo`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [menu] "29 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Computador · Celular · Classificados · Guia Turístico / Eventos · Artigos · Orçamentos Online · A Voz do Povo …" — menu lateral, faixa larga no topo da página (lista de 29 itens em coluna) (10,18,963,949)
- [link] "Configurações" — conteúdo, no topo da página, à esquerda (300,36,91,20)
- [link] "Layout" — conteúdo, no topo da página, ao centro (411,36,43,20)
- [título] "Topo" — conteúdo, faixa larga no topo da página (300,84,956,36)
- [botão] "✓Topo 1" — conteúdo, na parte de cima, à esquerda, logo abaixo de “Topo” (300,208,224,122)
- [botão] "Topo 2" — conteúdo, na parte de cima, ao centro, logo abaixo de “Topo” (538,208,224,122)
- [botão] "Topo 3" — conteúdo, na parte de cima, à esquerda, logo abaixo de “✓Topo 1” (300,344,224,113)
- [botão] "Topo 4" — conteúdo, na parte de cima, ao centro, logo abaixo de “Topo 2” (538,344,224,113)
- [botão] "Topo 5 — Com previsão do tempo" — conteúdo, no meio da tela, à esquerda, logo abaixo de “Topo 3” (300,471,224,108)
- [botão] "Pequena48px" — conteúdo, no meio da tela, à esquerda, logo abaixo de “Topo 5 — Com previsão do tempo” (300,642,114,127)
- [botão] "✓Média64px" — conteúdo, no meio da tela, ao centro, logo abaixo de “Topo 5 — Com previsão do tempo” (426,642,114,127)
- [botão] "Grande100px" — conteúdo, no meio da tela, ao centro (552,642,114,127)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
- [botão] "Cor sólida" — conteúdo, mais abaixo (rolando a página), à esquerda (319,937,91,30)
- [botão] "Gradiente" — conteúdo, mais abaixo (rolando a página), ao centro (414,937,91,30)
- [botão] "Cor sólida" — conteúdo, mais abaixo (rolando a página), ao centro (558,937,91,30)
- [botão] "Gradiente" — conteúdo, mais abaixo (rolando a página), ao centro (653,937,91,30)
- [campo] "#ffffff" — conteúdo, mais abaixo (rolando a página), à esquerda, logo abaixo de “Cor sólida” (319,981,40,40)
- [campo] "#FFFFFF" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Cor sólida” (367,981,137,40)
- [campo] "#134e4a" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Cor sólida” (558,981,40,40)
- [campo] "#FFFFFF" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Cor sólida” (606,981,137,40)
- [campo] "#ffffff" — conteúdo, mais abaixo (rolando a página), à esquerda (319,1149,40,40)
- [campo] "#FFFFFF" — conteúdo, mais abaixo (rolando a página), ao centro (367,1149,137,40)
- [botão] "Subir Orçamentos (e outros 21 parecidos)" — conteúdo, mais abaixo (rolando a página), ao centro (repetido ×22, um sob o outro) (683,1377,32,32)
- [botão] "Voltar à ordem padrão" — conteúdo, mais abaixo (rolando a página), à esquerda (300,2023,129,36)
- [botão] "Salvar Topo" — conteúdo, no fim da página, à esquerda, logo abaixo de “Voltar à ordem padrão” (300,2094,149,46)
