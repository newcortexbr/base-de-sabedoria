# /painel/turismo/eventos/[id]/fotos — redirecionamento (`.../[id]/fotos/page.tsx`, 16 linhas)
- gate: módulo `eventos` (prefixo `/painel/turismo/eventos`, avaliado antes de `turismo` na lista de prefixos); desligado mostra "ModuloDesativado" (`painel/layout.tsx:91-98`). Produto separado do Turismo, embora more no mesmo caminho.
- faz: `permanentRedirect('/painel/turismo/eventos')` (308). A galeria do evento agora fica no formulário de edição; rota mantida para links antigos.
- APIs: nenhuma.
- problemas: fato — o id é descartado; cai na lista.
- admin vs cliente: o cliente tem `GaleriaDoEvento` dentro de `/minha-conta/eventos/[id]/editar`; equivalente.

## o que você vê
Endereço antigo das fotos de um evento: hoje ele leva direto para a lista de eventos.
- as fotos e vídeos do evento agora ficam dentro do formulário do evento (`Editar` na lista de eventos), em "Galeria de fotos e vídeos".

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-turismo-eventos-id-fotos.png](../prints/painel-turismo-eventos-id-fotos.png) · dados brutos: [json](../prints/json/painel-turismo-eventos-id-fotos.json)
- aberta em `/painel/turismo/eventos/1/fotos` (redirecionou para `/painel/turismo/eventos`) com dados do banco de teste; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1147,16,109,34)
- [menu] "28 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Pontos Turísticos · Novo Ponto · Categorias · Roteiros · Eventos …" — menu lateral, no topo da página, à esquerda (lista de 28 itens em coluna) (10,18,255,985)
- [título] "Guia Turístico — Eventos" — topo, no topo da página, à esquerda (300,19,218,28)
- [botão] "+ Novo Evento" — conteúdo, na parte de cima, à direita (1072,99,130,36)
- [título] "Eventos Turísticos" — conteúdo, na parte de cima, ao centro (427,101,213,32)
- [link] "← Pontos" — conteúdo, na parte de cima, à esquerda (354,107,61,20)
- [link] "Eventos0" — menu, na parte de cima, à esquerda (359,164,115,44)
- [link] "Categorias8" — menu, na parte de cima, ao centro (476,164,132,44)
- [link] "Organizadores2" — menu, na parte de cima, ao centro (610,164,158,44)
- [selo] "0" — menu, na parte de cima, ao centro (435,176,22,20)
- [selo] "8" — menu, na parte de cima, ao centro (570,176,22,20)
- [selo] "2" — menu, na parte de cima, ao centro (730,176,22,20)
- [campo] "Buscar por título..." — conteúdo, na parte de cima, ao centro (371,250,218,38)
- [campo] "Cidade" — conteúdo, na parte de cima, ao centro (601,250,208,38)
- [campo] "Categoria" — conteúdo, na parte de cima, à direita (821,250,208,38)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
