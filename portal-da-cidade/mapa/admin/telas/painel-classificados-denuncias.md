# /painel/classificados/denuncias — redireciona (`.../denuncias/page.tsx`)
- gate: módulo `classificados` (prefixo `/painel/classificados`, `src/lib/painel-menu.ts`); desligado mostra "ModuloDesativado" (`painel/layout.tsx:91-98`). ATENÇÃO: "classificados" no frontend = anúncios de venda.
- faz: `redirect(HREF_ABA_DENUNCIAS)` para a aba de denúncias de `/painel/aprovacoes` (`aprovacoes/abas.ts`). Não tem tela própria.
- APIs: nenhuma.
- problemas: fato — como o gate é por prefixo, a rota fica sob o módulo classificados, mas o destino (aprovações) é de outro prefixo; um portal sem o módulo vê "ModuloDesativado" em vez do redirecionamento. É coerente, mas verifique se o link ainda existe no menu.
- admin vs cliente: o cliente não vê denúncias de seus anúncios (hipótese; não verificado em `minha-conta`).

## como chegar
- não há item no menu. as denúncias de classificados ficam na parte de cima do menu, em `Aprovações e Denúncias`, aba `Denúncias`.

## o que você vê
Endereço antigo das denúncias de classificados: abre a aba `Denúncias` de `Aprovações e Denúncias`.
- não tem conteúdo próprio; se a seção de classificados estiver desligada, aparece o aviso de seção desativada.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-classificados-denuncias.png](../prints/painel-classificados-denuncias.png) · dados brutos: [json](../prints/json/painel-classificados-denuncias.json)
- aberta em `/painel/classificados/denuncias` (redirecionou para `/painel/aprovacoes?aba=denuncias`); coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
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
