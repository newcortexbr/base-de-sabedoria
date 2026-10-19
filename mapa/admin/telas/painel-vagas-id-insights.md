# /painel/vagas/[id]/insights — métricas da vaga (`.../[id]/insights/page.tsx`)
- gate: módulo `vagas` (prefixo `/painel/vagas`); desligado mostra "ModuloDesativado" (`painel/layout.tsx:91-98`). ATENÇÃO: "vagas" no frontend = vagas de emprego.
- permissão: só papéis admin/master entram no painel (`src/lib/painel-permissoes.ts`).
- faz: cartões de métricas de uma vaga (título + números) via `vagas.vagas.insights(id)` (:34).
- estados: 404 "Vaga não encontrada. Ela pode ter sido excluída." (:38); 403 "Esta vaga é de outro empregador." (:40); demais "Não foi possível carregar os insights" (:42); spinner "Carregando…".
- problemas: fato — a mensagem de 403 fala de "outro empregador", mas o admin não tem empregador; o texto parece vir de reuso e confunde o admin. hipótese — o 403 do admin só ocorre se o servidor tratar o admin como contratante.
- admin vs cliente: o link só existe na lista do painel (`painel/vagas/page.tsx:248`); não há link de insights em `minha-conta/vagas/page.tsx` (grep sem resultado). Admin vê, cliente não (neste frontend).

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-vagas-id-insights.png](../prints/painel-vagas-id-insights.png) · dados brutos: [json](../prints/json/painel-vagas-id-insights.json)
- aberta em `/painel/vagas/1/insights` com dados do banco de teste; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1147,16,109,34)
- [menu] "27 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Listar Vagas · Nova Vaga · Áreas de Vagas · Contratantes · Classificados · Guia Turístico / Eventos · Artigos …" — menu lateral, no topo da página, à esquerda (lista de 27 itens em coluna) (10,18,255,953)
- [título] "Insights da Vaga" — topo, no topo da página, à esquerda (300,19,142,28)
- [link] "Editar vaga" — conteúdo, na parte de cima, à direita (1163,99,93,30)
- [link] "← Voltar para vagas" — conteúdo, na parte de cima, à esquerda (300,105,115,14)
- [título] "Auxiliar QA Editado" — conteúdo, na parte de cima, à esquerda (300,131,206,33)
- [título] "📅 Linha do tempo" — conteúdo, faixa larga no meio da tela (325,386,906,21)
- [título] "💡 Dicas para aumentar visualizações" — conteúdo, faixa larga no meio da tela (324,626,908,21)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
