# /painel/orcamentos

Arquivo: `app/painel/orcamentos/page.tsx`

- rota `/painel/orcamentos`: só `redirect` para `/painel/orcamentos/categorias`.
- gate: `PainelGuard`; módulo `orcamentos` (`lib/painel-menu.ts:103`).
- sem API, sem estados.
- observação: a tela do empresário saiu do painel (D-352, comentário `:3-5`); a lista dele fica na área do cliente.
- problemas: nenhum. nome "categorias" na URL final é enganoso (a tela é de solicitações, não de categorias): fato.

## o que você vê
Endereço antigo de orçamentos: abre direto a lista de pedidos de orçamento.
- não tem conteúdo próprio; leva para a tela de solicitações de orçamento.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-orcamentos.png](../prints/painel-orcamentos.png) · dados brutos: [json](../prints/json/painel-orcamentos.json)
- aberta em `/painel/orcamentos` (redirecionou para `/painel/orcamentos/categorias`); coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1147,16,109,34)
- [menu] "24 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Artigos · Orçamentos Online · Todas as Solicitações · A Voz do Povo · Melhores da Cidade …" — menu lateral, no topo da página, à esquerda (lista de 24 itens em coluna) (10,18,255,871)
- [título] "Orçamentos" — topo, no topo da página, à esquerda (300,19,105,28)
- [título] "Orçamentos — Todas as Solicitações" — conteúdo, faixa larga na parte de cima (300,99,956,32)
- [botão] "0Total (e outros 4 parecidos)" — conteúdo, na parte de cima, à esquerda, logo abaixo de “Orçamentos — Todas as Solicitações” (repetido ×5, um sob o outro) (300,179,182,140)
- [botão] "Todos" — conteúdo, na parte de cima, à esquerda, logo abaixo de “0Total (e outros 4 parecidos)” (317,372,200,38)
- [campo] "Categoria" — conteúdo, na parte de cima, ao centro (529,372,256,38)
- [campo] "De" — conteúdo, na parte de cima, à direita (797,372,144,38)
- [campo] "Até" — conteúdo, na parte de cima, à direita (953,372,144,38)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
