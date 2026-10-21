# /painel/turismo/roteiros/[id]/fotos — redirecionamento (`.../[id]/fotos/page.tsx`, 12 linhas)
- gate: módulo `turismo` (prefixo `/painel/turismo`, `src/lib/painel-menu.ts`); desligado mostra "ModuloDesativado" (`painel/layout.tsx:91-98`).
- faz: `permanentRedirect('/painel/turismo/roteiros')` (308). A galeria agora fica dentro do formulário de edição em `/painel/turismo/roteiros`; a rota existe só para não quebrar links antigos (comentário no arquivo).
- APIs: nenhuma.
- problemas: fato — o id não é preservado; o usuário cai na lista e precisa reabrir o roteiro.
- admin vs cliente: Turismo não tem área do cliente em `src/app/minha-conta` (sem pasta de turismo). Só o admin gerencia; não há lacuna de paridade.

## o que você vê
Endereço antigo das fotos de um roteiro: hoje ele leva direto para a lista de roteiros.
- as fotos e vídeos do roteiro agora ficam dentro do próprio formulário do roteiro.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-turismo-roteiros-id-fotos.png](../prints/painel-turismo-roteiros-id-fotos.png) · dados brutos: [json](../prints/json/painel-turismo-roteiros-id-fotos.json)
- aberta em `/painel/turismo/roteiros/1/fotos` (redirecionou para `/painel/turismo/roteiros`) com dados do banco de teste; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1147,16,109,34)
- [menu] "28 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Pontos Turísticos · Novo Ponto · Categorias · Roteiros · Eventos …" — menu lateral, no topo da página, à esquerda (lista de 28 itens em coluna) (10,18,255,985)
- [título] "Guia Turístico — Roteiros" — topo, no topo da página, à esquerda (300,19,221,28)
- [botão] "+ Novo Roteiro" — conteúdo, na parte de cima, à direita (1070,99,132,36)
- [título] "Roteiros" — conteúdo, na parte de cima, ao centro (427,101,97,32)
- [link] "← Pontos" — conteúdo, na parte de cima, à esquerda (354,107,61,20)
- [campo] "Buscar por título..." — conteúdo, na parte de cima, ao centro, logo abaixo de “Roteiros” (371,176,658,38)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
