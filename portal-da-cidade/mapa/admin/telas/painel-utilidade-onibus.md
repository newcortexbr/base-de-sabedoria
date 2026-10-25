# /painel/utilidade/onibus (A Voz do Povo — Linhas de Ônibus)

Arquivo: `app/painel/utilidade/onibus/page.tsx`, `onibus/ExibirNoSite.tsx`

## o que você vê
Lista das linhas de ônibus mostradas na seção de utilidades do site.
- para abrir: na parte Conteúdo do menu, em `A Voz do Povo`, clique em `Linhas de Ônibus`.
- "Exibir no site": interruptor (mostra Ligado/Desligado) que liga ou desliga a seção de ônibus inteira no site.
- `Cadastrar linha` (botão do topo) abre a janela "Cadastrar linha"; `Salvar` grava.
- linha: Número *, Nome (ex.: Centro — Terminal), Itinerário (por onde passa), Horários e Observação.
- na tabela (Número, Nome, Itinerário, Horários, Status, Ações): clique no status para ativar ou desativar uma linha; o lápis (`Editar`) edita; a lixeira (`Excluir`) apaga, com confirmação.
- mudanças nas linhas podem levar alguns minutos para aparecer no site.

## rota e gate
- `/painel/utilidade/onibus`. client. gate `PainelGuard` + módulo `utilidade` (`lib/painel-menu.ts:74`).

## o que faz
- cadastro das linhas de ônibus do portal.

## ações e campos
- botão `Cadastrar linha`; modal "Cadastrar linha"/"Editar linha": Número (obrigatório), Nome, Itinerário, Horários, Observação.
- por linha: editar, ativar/desativar, excluir (confirmação em modal).
- `ExibirNoSite secao="onibus"` (interruptor).

## apis
- `adminApi.utilidade.onibus.listar/criar/atualizar/excluir` (`lib/admin-api.ts:1316-1326`, rota `/utilidade/linhas-onibus/`); `utilidade.config.*`; `revalidarVozDoPovo` no interruptor.

## estados
- carregando; erro "Erro ao carregar linhas de ônibus: …"; vazio "Nenhuma linha de ônibus cadastrada."; erro por campo/modal de aviso.

## possíveis problemas
- fato: mesmo problema de paginação do telefones: `listar()` sem `page` (`:46-48`), só a 1ª página aparece.
- fato: sem revalidação em criar/editar/excluir; até 5 min de atraso no site (comentário `:20-27`).
- fato: o comentário do arquivo registra que o achado foi "reportado ao lead" e a Server Action não foi criada; pendência conhecida, não resolvida no código.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-utilidade-onibus.png](../prints/painel-utilidade-onibus.png) · dados brutos: [json](../prints/json/painel-utilidade-onibus.json)
- aberta em `/painel/utilidade/onibus`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1147,16,109,34)
- [menu] "26 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Artigos · Orçamentos Online · A Voz do Povo · Denúncias · Telefones Úteis …" — menu lateral, no topo da página, à esquerda (lista de 26 itens em coluna) (10,18,255,921)
- [título] "A Voz do Povo — Linhas de Ônibus" — topo, no topo da página, ao centro (300,19,303,28)
- [botão] "Exibir Linhas de Ônibus no site" — conteúdo, na parte de cima, à direita (1200,115,40,20)
- [botão] "Cadastrar linha" — conteúdo, na parte de cima, à esquerda (300,175,156,36)
- [coluna] "Número" — conteúdo, na parte de cima, à esquerda (300,227,161,41)
- [coluna] "Nome" — conteúdo, na parte de cima, ao centro (461,227,128,41)
- [coluna] "Itinerário" — conteúdo, na parte de cima, ao centro (589,227,194,41)
- [coluna] "Horários" — conteúdo, na parte de cima, à direita (783,227,184,41)
- [coluna] "Status" — conteúdo, na parte de cima, à direita (967,227,148,41)
- [coluna] "Ações" — conteúdo, na parte de cima, à direita (1115,227,141,41)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
