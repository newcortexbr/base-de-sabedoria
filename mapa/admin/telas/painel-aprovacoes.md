# /painel/aprovacoes (Aprovações e Denúncias)

Arquivos: `app/painel/aprovacoes/page.tsx`, `AprovacoesEDenuncias.tsx`, `AprovacoesClient.tsx`, `ConfigDaFila.tsx`, `abas.ts`

## rota e gate
- `/painel/aprovacoes`, aba inicial via `?aba=denuncias` (`page.tsx:6-8`). server component que renderiza client.
- gate: só `PainelGuard` (admin/master). não há gate de módulo.

## o que faz
- duas abas: Aprovações (fila de conteúdo enviado por clientes) e Denúncias (lista de denúncias de visitantes). as duas ficam montadas, trocar aba não recarrega (`AprovacoesEDenuncias.tsx:91`). a URL muda com `history.replaceState`.
- bloco `ConfigDaFila` no topo: liga/desliga "Exigir minha aprovação antes de publicar" (`fila_aprovacao_ativa`) e "Permitir que visitantes denunciem" (`denuncias_ativas`).

## ações e campos
- aprovações: lista paginada (20, "Carregar mais"), botões Ver detalhe, Recusar, Aprovar por item. detalhe em modal renderiza `campos` (html, texto, texto_longo), `imagens` e `links` vindos do backend. recusa abre modal com motivo obrigatório (`AprovacoesClient.tsx:171-189`).
- denúncias: filtros Status (pendentes/resolvidas/ignoradas) e Módulo (guia/vagas/classificados/eventos); cada linha leva a `/painel/denuncias/<id>`.
- config: dois interruptores com salvamento imediato e "Salvo!"; reverte o estado se o servidor recusar (`ConfigDaFila.tsx:69-72`); ao mexer em denúncias chama `revalidarLayout`.

## apis (`lib/admin-api.ts`)
- `adminApi.aprovacoes.listar/detalhe/aprovar/recusar` (`:2177-2194`), rotas `/painel/<slug>/aprovacoes/...`
- `adminApi.denuncias.listar`, `contagem` (`:1974-1982`)
- `adminApi.guia.config.get/atualizar`

## estados
- aprovações: spinner, faixa vermelha com erro, vazio "Nada pendente no momento."; erro de detalhe e de recusa aparecem dentro do modal.
- denúncias: "Carregando…", erro `role=alert`, vazio "Nenhuma denúncia nesta lista."
- avisos amarelos quando a fila/denúncias estão desligadas (`AprovacoesEDenuncias.tsx:93-107`).

## possíveis problemas
- fato: a contagem de pendentes da aba Denúncias só é atualizada pela lista quando filtro é "Pendentes" sem módulo (`ListaDeDenuncias.tsx:41`); senão usa `contagem()` inicial. depois de resolver uma denúncia no detalhe e voltar, o selo pode ficar defasado (hipótese, não testado).
- fato: falha em `denuncias.contagem` é engolida (`AprovacoesEDenuncias.tsx:38`), sem aviso.
- fato: depois que `aprovar` tem sucesso, o item sai da lista só no cliente; `total` decrementa mas a paginação (`pagina`) não se ajusta, pode pular itens em "Carregar mais" (hipótese).
- fato: erro de "carregar mais" sobe para o topo da lista (`:94`), não para junto do botão.
- fato: texto em `ConfigDaFila.tsx` diz que Artigos vão direto ao ar mesmo com a fila ligada; confirme com a regra do backend antes de repassar ao cliente.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-aprovacoes.png](../prints/painel-aprovacoes.png) · dados brutos: [json](../prints/json/painel-aprovacoes.json)
- aberta em `/painel/aprovacoes`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [menu] "23 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Artigos · Orçamentos Online · A Voz do Povo · Melhores da Cidade · Banners Publicitários …" — menu lateral, no topo da página, à esquerda (lista de 23 itens em coluna) (10,18,255,871)
- [título] "Aprovações e Denúncias" — conteúdo, faixa larga no topo da página (372,24,812,33)
- [título] "Como funciona neste portal" — conteúdo, faixa larga na parte de cima (393,122,770,23)
- [checkbox] "Exigir minha aprovação antes de publicarLigado: tudo que seus clientes" — conteúdo, na parte de cima, à esquerda, logo abaixo de “Como funciona neste portal” (393,191,18,18)
- [checkbox] "Permitir que visitantes denunciem conteúdoLigado: o botão “Denunciar“ " — conteúdo, na parte de cima, à esquerda, logo abaixo de “Exigir minha aprovação antes de pub” (393,280,18,18)
- [aba] "Aprovações" — conteúdo, na parte de cima, ao centro (372,374,112,43)
- [aba] "Denúncias" — conteúdo, na parte de cima, ao centro (488,374,103,43)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
