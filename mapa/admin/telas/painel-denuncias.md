# /painel/denuncias

Arquivo: `app/painel/denuncias/page.tsx:1-8`

- rota `/painel/denuncias`. só `redirect` para `/painel/aprovacoes?aba=denuncias` (`HREF_ABA_DENUNCIAS`). existe para link antigo não quebrar.
- gate: `PainelGuard` (admin/master).
- sem chamadas de API, sem estados próprios.
- não confundir com `/painel/utilidade/denuncias` (Voz do Povo, outro módulo) — ver `painel-utilidade-denuncias.md`.
- problema: nenhum encontrado.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-denuncias.png](../prints/painel-denuncias.png) · dados brutos: [json](../prints/json/painel-denuncias.json)
- aberta em `/painel/denuncias` (redirecionou para `/painel/aprovacoes?aba=denuncias`); coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [menu] "23 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Artigos · Orçamentos Online · A Voz do Povo · Melhores da Cidade · Banners Publicitários …" — menu lateral, no topo da página, à esquerda (lista de 23 itens em coluna) (10,18,255,871)
- [título] "Aprovações e Denúncias" — conteúdo, faixa larga no topo da página (372,24,812,33)
- [título] "Como funciona neste portal" — conteúdo, faixa larga na parte de cima (393,122,770,23)
- [checkbox] "Exigir minha aprovação antes de publicarLigado: tudo que seus clientes" — conteúdo, na parte de cima, à esquerda, logo abaixo de “Como funciona neste portal” (393,191,18,18)
- [checkbox] "Permitir que visitantes denunciem conteúdoLigado: o botão “Denunciar“ " — conteúdo, na parte de cima, à esquerda, logo abaixo de “Exigir minha aprovação antes de pub” (393,280,18,18)
- [aba] "Aprovações" — conteúdo, na parte de cima, ao centro (372,374,112,43)
- [aba] "Denúncias" — conteúdo, na parte de cima, ao centro (488,374,103,43)
- [botão] "Status:Pendentes" — conteúdo, no meio da tela, ao centro, logo abaixo de “Aprovações” (372,473,224,44)
- [botão] "Módulo:Todos" — conteúdo, no meio da tela, ao centro (608,473,224,44)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
