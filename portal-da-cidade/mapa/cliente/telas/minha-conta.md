# /minha-conta (Início)

Arquivo: `src/app/minha-conta/page.tsx`

## quem acessa
- cliente logado com perfil `empresa` (a ficha diz `perfil_da_area`; sem ficha vira `empresa`: `perfil-da-area.ts:80-88`).
- colunista, pessoa física e jornalista NÃO alcançam: a casca os redireciona para a rota inicial deles (`ClienteShellClient.tsx:43-45`, `perfil-da-area.ts:113-117`).
- sem login: `layout.tsx:16-20` manda para `/minha-conta/login`.

## gate de módulo/plano
- nenhum gate na tela. Os cartões dependem de `secoes` (`/comercial/minhas-secoes/`): "Você também pode…" (cartões de outras seções) só mostra módulo sem contratação e com `tem_planos`, ou `publicidade` sempre (`page.tsx:62-66`).
- o bloco de planos (título "Seus planos" com várias seções, ou "Seu plano no <seção>" com uma) só para módulos com vitrine de planos (`temVitrineDePlanos`). Eventos, Banners e Notícias (pagos por item) não entram.

## o que faz
- painel de entrada: faixa de alertas, herói (estado: vazio/novo/um módulo/vários), avisos, plano atual, "Você também pode…", chamada final.
- barra fixa no rodapé: "Falta só um passo / para aparecer no portal" com o botão `Concluir cadastro`, ou "Você está no Grátis" com o botão `Sair do grátis`, conforme o próximo passo (`page.tsx:140-152`).
- se a conta tem empresa vinculada, aparece também o cartão "Concorrendo" (`CartaoConcorrendoDoCliente`).

## ações e campos
- trocar aba de plano (rola até "Seu plano"), links para planos, completar cadastro, ações de avisos (`BlocoAvisos`, recarrega).
- banners de uma visita: "Cadastro feito! Bem-vindo." e aviso de parceiro, lidos de `sessionStorage` (`page.tsx:38-54`).
- aviso de vencimento só quando faltam 15 dias ou menos (`page.tsx:79-81`).

## APIs
- via casca (`ClienteShellContext.tsx:131-133`): `GET /{portal}/comercial/minhas-secoes/`, `GET /{portal}/comercial/eu/`, `GET /{portal}/comercial/meus-avisos/`.
- alertas de delivery/orçamento (`useAlertasDoCliente`) e planos do Início (`usePlanosDoInicio`, provavelmente `comercial/planos/`: hipótese, não lido).

## estados
- carregando: texto "Carregando…" (`page.tsx:120`).
- erro: só se `minhas-secoes` falha; 403 diz "Sua conta não tem acesso à área de clientes deste portal."; outro erro diz "Não foi possível carregar seus dados…" (`ClienteShellContext.tsx:161-165`). Sem botão de tentar de novo na tela (fato: `page.tsx:122-126`; `recarregar` existe mas não é oferecido aqui).
- vazio: tratado pelo herói (`estado.tipo === 'vazio'`).

## possíveis problemas para leigo
- fato: ficha e avisos são best-effort. Se a ficha falhar, o perfil vira `empresa` (`ClienteShellContext.tsx:138`), então colunista ou pessoa física veria o menu de empresa até a guarda corrigir. Hipótese: raro, mas confunde.
- fato: erro de carregamento sem botão "tentar de novo" (`page.tsx:122-126`).
- fato: o menu lateral e o Início usam termos "Seu plano", "Grátis", "Sair do grátis" (`page.tsx:147-150`); "Sair do grátis" pode soar como cancelar. Hipótese.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [minha-conta.png](../prints/minha-conta.png) · versão celular: [minha-conta-390.png](../prints/minha-conta-390.png) · dados brutos: [json](../prints/json/minha-conta.json)
- aberta em `/minha-conta`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [menu/links] "9 itens: Início · Guia Comercial · Vagas de Emprego · Banners Publicitários · Classificados · Minha empresa · Planos e assinaturas · Segurança · Sair" — menu, na parte de cima, à esquerda (lista de 9 itens em coluna) (14,96,227,786)
- [título] "Olá, QA Loja Sintetica" — conteúdo, na parte de cima, ao centro (320,100,640,37)
- [link] "Gerenciar" — conteúdo, na parte de cima, à esquerda (338,323,99,44)
- [link] "Gerenciar" — conteúdo, na parte de cima, ao centro (793,323,99,44)
- [título] "Você também pode…" — conteúdo, faixa larga no meio da tela (288,453,960,30)
- [link] "Aparecer no Guia ComercialSua empresa encontrada por quem procura na c" — conteúdo, no meio da tela, ao centro (288,524,473,180)
- [link] "Contratar banners nas páginas do portalSua marca nas páginas mais vist" — conteúdo, no meio da tela, à direita (775,524,473,180)

## o que você vê
Tela de início da sua área: mostra em que ponto está seu cadastro, seus planos e o que mais você pode contratar.
- Faixa de avisos: recados importantes da sua conta; alguns têm botão para resolver na hora.
- Seus planos / Seu plano no Guia (o título muda conforme o número de seções): o plano que você tem em cada seção (ex.: Guia, Vagas), com abas para trocar de seção; o plano em uso mostra `Seu plano atual`.
- Aviso de vencimento: aparece quando faltam 15 dias ou menos para o plano vencer.
- Você também pode…: cartões das seções que você ainda não contratou e que têm planos à venda; Banners aparece sempre.
- Concluir cadastro / Sair do grátis: barra fixa com o próximo passo sugerido.
- "Cadastro feito! Bem-vindo.": aviso que aparece só uma vez, logo depois de criar a conta.
- Botão principal do herói: `Gerenciar` + o nome da seção (ex.: `Gerenciar minha ficha` no Guia, `Gerenciar minhas vagas`, `Gerenciar meus eventos`, `Gerenciar meus banners`).
- Menu lateral (empresa): `Início`; grupo "O que eu publico" com as seções (Guia Comercial, Vagas de Emprego, Agenda de Eventos, Classificados, Notícias, Banners Publicitários — cada uma leva à própria tela, com etiqueta do plano; `Cupons` aparece logo abaixo do Guia só se o plano libera cupom); grupo "Orçamentos" com `Pedidos recebidos` (só se o plano libera); grupo "Delivery" com `Pedidos` (só se o plano libera); grupo "Minha conta" com `Minha empresa`, `Planos e assinaturas` e `Segurança`. O nome da pessoa fica no rodapé do menu, com o ícone de sair ao lado (botão `Sair`, só ícone).
