# /painel/delivery/pedidos

Arquivo: `app/painel/delivery/pedidos/page.tsx`

## rota e gate
- `/painel/delivery/pedidos?empresa=<id>`. client, `Header`. gate `PainelGuard`; módulo `guia` (`lib/painel-menu.ts:95`, delivery acompanha o Guia, D-231). sem item de menu: o acesso é pelo cartão "Fila de pedidos" no editor da empresa (`components/painel/EmpresaEditor.tsx:943`).
- sem `?empresa=` não mostra aviso: encerra o carregamento (`:69`) e cai em "Nenhum pedido encontrado." (`:212`).

## o que faz
- fila de pedidos de delivery de UMA empresa, escolhida pela URL; o admin atua em nome do lojista.

## ações e campos
- filtro por status (Todos, recebido, em preparo, saiu p/ entrega, entregue, cancelado).
- avança o status: recebido → em preparo/cancelar; em preparo → saiu/cancelar; saiu → entregue (`PROXIMOS_STATUS`, `:35-41`).
- imprimir pedido em janela de 80mm (`imprimirPedido`, `:94-140`).
- "Ativar som": bip quando o número de pedidos em andamento sobe, só no filtro "Todos" (`:72-79`).
- "Atualizar" manual e polling de 20 s (`:88-92`).
- seções "Em andamento" e "Finalizados / Cancelados".

## apis
- `adminApi.delivery.pedidos.listar(empresaId, status)`: GET `/painel/<slug>/delivery/empresas/<id>/pedidos/?status=` (`lib/admin-api.ts:2094`).
- `adminApi.delivery.pedidos.atualizarStatus(empresaId, pedidoId, status)`: PATCH `.../pedidos/<id>/status/` (`:2098`).

## estados
- carregando; vazio com "Nenhum pedido encontrado."
- erro na listagem: engolido (`.catch(() => setLoading(false))`, `:83`), vira "vazio".
- erro ao mudar status: `alert('Erro ao atualizar status.')` (`:158`), sem motivo do servidor.

## possíveis problemas
- fato: o HTML da impressão é montado por string com dados do cliente sem escape (`cliente_nome`, endereço, `observacao`, nomes de item, `:97-125`) e escrito em `document.write` (`:136`). um nome com HTML ou script vira marcação na janela de impressão (risco de XSS gravado por quem faz o pedido; impacto exato é hipótese).
- fato: erro de carga (rede, 403, 404) aparece como "Nenhum pedido encontrado" (`:83`, `:212`); o lojista pode achar que não há pedidos. no polling o erro também some.
- fato: sem `formatApiError` nem `ErroDaApi.status` (regra do projeto de mostrar a falha).
- fato: o polling continua com aba escondida e não pausa em erro (`:89-92`).
- hipótese: o bip depende de `AudioContext` criado por clique; ao recarregar a página o som volta a "desativado" e pedidos novos ficam mudos.
- fato: o `pendentes` do bip compara contagem; um pedido que sai e outro que entra no mesmo ciclo não toca.

## equivalente em minha-conta
- sim, `app/minha-conta/delivery/pedidos/page.tsx`. usa `buscarPedidosDelivery`, `concluirPedidoDelivery` e `cancelarPedidoDelivery` (`lib/cliente-api.ts:1692-1706`), com tratamento de 403 (sem plano) e 404 (sem empresa), alertas e botão de WhatsApp.
- diferença: o cliente só conclui ou cancela; o painel tem o fluxo completo com preparo e saída. o painel não tem WhatsApp, filtro por data nem mensagens de recusa.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-delivery-pedidos.png](../prints/painel-delivery-pedidos.png) · dados brutos: [json](../prints/json/painel-delivery-pedidos.json)
- aberta em `/painel/delivery/pedidos`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1147,16,109,34)
- [menu] "23 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Artigos · Orçamentos Online · A Voz do Povo · Melhores da Cidade · Banners Publicitários …" — menu lateral, no topo da página, à esquerda (lista de 23 itens em coluna) (10,18,255,871)
- [título] "Pedidos de Delivery" — topo, no topo da página, à esquerda (300,19,171,28)
- [botão] "🔔 Ativar som" — conteúdo, na parte de cima, à direita (1005,99,119,34)
- [título] "Pedidos de Delivery" — conteúdo, na parte de cima, ao centro (346,100,228,32)
- [botão] "↻ Atualizar" — conteúdo, na parte de cima, à direita (1136,106,75,20)
- [botão] "Todos" — conteúdo, na parte de cima, à esquerda, logo abaixo de “Pedidos de Delivery” (346,157,67,34)
- [botão] "Recebido" — conteúdo, na parte de cima, ao centro, logo abaixo de “Pedidos de Delivery” (421,157,89,34)
- [botão] "Em Preparo" — conteúdo, na parte de cima, ao centro, logo abaixo de “Pedidos de Delivery” (518,157,105,34)
- [botão] "Saiu p/ Entrega" — conteúdo, na parte de cima, ao centro (631,157,128,34)
- [botão] "Entregue" — conteúdo, na parte de cima, ao centro (767,157,87,34)
- [botão] "Cancelado" — conteúdo, na parte de cima, à direita (861,157,97,34)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
