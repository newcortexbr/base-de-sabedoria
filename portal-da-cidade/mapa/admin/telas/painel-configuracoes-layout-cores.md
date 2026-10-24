# /painel/configuracoes/layout/cores (Cores do portal)

Arquivos: `app/painel/configuracoes/layout/cores/page.tsx` (278 linhas), `cores-do-portal.ts`, `../PreviaDoSite.tsx`, `../actions.ts`, `components/previa/previa-do-painel.tsx`

## como chegar
- na parte Sistema do menu, abra `Configurações`, clique em `Layout` e depois no cartão `Cores`.

## rota e gate
- `/painel/configuracoes/layout/cores`. client. gate `PainelGuard` (admin/master); sem gate de módulo. chega pelo cartão "Cores" do índice do Layout.

## o que faz
- define duas cores que pintam o site: Primária (tudo que se clica: botões, links, paginação, campos, área do cliente) e Destaque (nome da seção, barrinha do título, selos, etiquetas) (`:134`, `:166`).
- à esquerda, seletores; à direita, prévia fixa do site real em iframe, em computador e celular, página por página (`PreviaDoSite`, `alvo="cores"`). o rascunho viaja por `postMessage` e nada é gravado até "Salvar cores" (`PreviaDoSite.tsx:11-18`).
- nota na tela: topo, menu e rodapé têm cores próprias em Layout › Topo e Layout › Rodapé.

## campos e ações
- 12 cores prontas para a Primária (`SWATCHES_PRIMARY`, `:10`) e um conjunto para o Destaque, mais seletor de cor nativo e campo de texto hex (aceita só `#` + até 6 dígitos, `:256`).
- peças de exemplo (botão principal, secundário, link, paginação, campo em foco, caixa marcada; nome da seção, barrinha, selo, etiqueta) já pintadas com a cor escolhida.
- aviso de leitura por cor (`avisoDaCor`, `cores-do-portal.ts`): contraste com branco abaixo de 3:1 ("Cor clara demais…"), ou cores quase iguais (distância RGB < 48), ou "Boa leitura". só avisa; não bloqueia.
- prévia: troca de página entre grupos "Site" (Início, Guia, Empresa, Notícia, Vagas, Classificados) e "Contas" (Pedir orçamento, Login, Área do cliente com dados de exemplo, Anuncie); só entram páginas de módulos ligados. controle "Acender": Tudo, Só a Primária, Só a de Destaque.
- "Salvar cores" (`handleSave`, `:83`): PATCH e depois `revalidarLayout` (melhor esforço).

## apis
- `adminApi.guia.config.get` (carga das cores) e `.atualizar({cor_primaria, cor_secundaria})` (`lib/admin-api.ts:1657-1658`)
- API pública `createPortalApi(getPortalSlug())`: `guia.config()` (módulos), `guia.empresas({page_size:'1'})`, `noticias.listar({page_size:'1'})` para montar as páginas da prévia (`:63-65`)
- Server Action `revalidarLayout` (`../actions.ts:33`)

## estados
- carregando ("Carregando…"); falha de carga: mensagem vermelha e o formulário não aparece (evita gravar o padrão por cima das cores reais, `:48-52`).
- falha ao salvar: texto vermelho abaixo do botão (`erro`); sucesso: aviso "Cores salvas" (`avisos.sucesso`, `:90`).
- empresas/notícias da prévia são melhor esforço (`Promise.allSettled`): sem elas, a prévia só não oferece essas páginas. sem estado "vazio".

## possíveis problemas
- fato: o campo hex aceita valor incompleto (`#0F8`, `#`); `handleSave` envia como está (`:87`). se o backend não validar, pode gravar cor inválida (hipótese; não verifiquei o serializer).
- fato: aviso de contraste não impede salvar uma cor ruim; o dono pode deixar botões ilegíveis (decisão de produto aparente).
- fato: a Primária é avaliada só contra branco (`avisoDaCor`); se algum lugar do site usa texto escuro sobre a Primária, o aviso não cobre.
- fato: `revalidarLayout` falho vai só para `console.error` (`:91`); "Cores salvas" aparece mesmo que o site público não atualize.
- fato: `getPortalSlug()` no painel vem do JWT/armazenamento; a prévia abre o domínio atual (`window.location.origin`), então só mostra o portal certo se o painel estiver acessado pelo domínio do próprio portal (hipótese).

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-configuracoes-layout-cores.png](../prints/painel-configuracoes-layout-cores.png) · dados brutos: [json](../prints/json/painel-configuracoes-layout-cores.json)
- aberta em `/painel/configuracoes/layout/cores`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [menu] "27 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Artigos · Orçamentos Online · A Voz do Povo · Melhores da Cidade · Banners Publicitários …" — menu lateral, no topo da página, à esquerda (lista de 27 itens em coluna) (10,18,255,949)
- [link] "Configurações" — conteúdo, no topo da página, à esquerda (300,36,91,20)
- [link] "Layout" — conteúdo, no topo da página, ao centro (411,36,43,20)
- [título] "Cores do portal" — conteúdo, faixa larga no topo da página (300,84,956,36)
- [botão] "Computador" — conteúdo, na parte de cima, ao centro (739,232,95,30)
- [botão] "Celular" — conteúdo, na parte de cima, à direita (838,232,65,30)
- [botão] "Verde-azulado (e outros 8 parecidos)" — conteúdo, na parte de cima, à esquerda (repetido ×9, um sob o outro) (319,273,30,30)
- [botão] "Início" — conteúdo, na parte de cima, ao centro, logo abaixo de “Computador” (799,283,55,28)
- [botão] "Guia" — conteúdo, na parte de cima, à direita, logo abaixo de “Celular” (860,283,51,28)
- [botão] "Empresa" — conteúdo, na parte de cima, à direita (917,283,75,28)
- [botão] "Vagas" — conteúdo, na parte de cima, à direita (998,283,59,28)
- [botão] "Classificados" — conteúdo, na parte de cima, à direita (1062,283,101,28)
- [botão] "Grafite" — conteúdo, na parte de cima, à esquerda, logo abaixo de “Verde-azulado (e outros 8 parecidos” (319,311,30,30)
- [botão] "Marinho" — conteúdo, na parte de cima, à esquerda (357,311,30,30)
- [botão] "Preto" — conteúdo, na parte de cima, à esquerda (395,311,30,30)
- [botão] "Pedir orçamento" — conteúdo, na parte de cima, à direita, logo abaixo de “Início” (799,319,119,28)
- [botão] "Login" — conteúdo, na parte de cima, à direita, logo abaixo de “Empresa” (924,319,57,28)
- [botão] "Área do cliente (exemplo)" — conteúdo, na parte de cima, à direita, logo abaixo de “Empresa” (986,319,170,28)
- [botão] "Anuncie" — conteúdo, na parte de cima, à direita, logo abaixo de “Classificados” (1162,319,71,28)
- [campo] "Cor Primária: escolher na paleta" — conteúdo, na parte de cima, à esquerda, logo abaixo de “Grafite” (319,355,40,40)
- [campo] "Cor Primária: código da cor" — conteúdo, na parte de cima, à esquerda, logo abaixo de “Marinho” (369,355,110,40)
- [botão] "Tudo" — conteúdo, na parte de cima, ao centro, logo abaixo de “Pedir orçamento” (804,368,52,28)
- [botão] "Só a Primária" — conteúdo, na parte de cima, à direita, logo abaixo de “Pedir orçamento” (862,368,119,28)
- [botão] "Só a de Destaque" — conteúdo, na parte de cima, à direita, logo abaixo de “Área do cliente (exemplo)” (987,368,142,28)
- [aviso] "Boa leitura: o texto aparece bem com esta cor." — conteúdo, no meio da tela, ao centro (319,618,362,39)
- [botão] "Rosa (e outros 8 parecidos)" — conteúdo, no meio da tela, à esquerda (repetido ×9, um sob o outro) (319,792,30,30)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [botão] "Verde-azulado" — conteúdo, no meio da tela, à esquerda, logo abaixo de “Rosa (e outros 8 parecidos)” (319,830,30,30)
- [botão] "Verde" — conteúdo, no meio da tela, à esquerda (357,830,30,30)
- [botão] "Grafite" — conteúdo, no meio da tela, à esquerda (395,830,30,30)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
- [campo] "Cor de Destaque: escolher na paleta" — conteúdo, no meio da tela, à esquerda, logo abaixo de “Verde-azulado” (319,874,40,40)
- [campo] "Cor de Destaque: código da cor" — conteúdo, no meio da tela, à esquerda, logo abaixo de “Verde” (369,874,110,40)
- [aviso] "Boa leitura: o texto aparece bem com esta cor." — conteúdo, mais abaixo (rolando a página), ao centro (319,1071,362,39)
- [link] "Layout › Topo" — conteúdo, no fim da página, ao centro (420,1179,82,14)
- [link] "Layout › Rodapé" — conteúdo, no fim da página, ao centro (516,1179,98,14)
- [botão] "Salvar cores" — conteúdo, no fim da página, ao centro (300,1225,400,46)

## o que você vê
Escolhe as duas cores principais do site.
- `Cor Primária`: a cor de tudo que se clica — botões, links, paginação, campos de formulário e a área do cliente. Os exemplos ao lado ("Ver guia completo", "Pedir orçamento") mostram como fica.
- `Cor de Destaque`: a cor que chama atenção sem ser botão — nome da seção, barrinha do título, selos e etiquetas (ex. "DESTAQUE").
- campo com código (ex. #000000): a mesma cor escrita em código; dá para colar uma cor exata.
- "O que não muda aqui": a faixa do topo, o menu e o rodapé têm cores próprias, nas telas Topo e Rodapé.
- `Prévia do seu site`: mostra o site como está publicado, com as cores novas; nada muda no ar até salvar. Computador / Celular trocam o tamanho; `Tudo`, `Só a Primária`, `Só a de Destaque` (controle `Acender`) acendem onde cada cor aparece.
- `Salvar cores`: grava e publica as cores.
