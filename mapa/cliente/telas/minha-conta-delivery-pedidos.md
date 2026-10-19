# /minha-conta/delivery/pedidos

Arquivo: `src/app/minha-conta/delivery/pedidos/page.tsx`

## quem acessa
- empresa. Perfis reduzidos (colunista, pessoa física, jornalista) não têm a rota (`perfil-da-area.ts`).
- login obrigatório (`layout.tsx`).

## gate de módulo/plano
- não é seção vendida: vem com o Guia (categoria e plano) — `secoes-do-cliente.ts:62-63`.
- o menu mostra grupo "Delivery > Pedidos" só se `ficha.delivery_liberado` (`ClienteSidebar.tsx:194`), com contador de pedidos aguardando.
- a URL direta sempre abre; o servidor responde 403 (sem plano) ou 404 (sem empresa) e a tela mostra aviso (`page.tsx:155-156,277-291`).
  - 403: botão "Ver planos do Guia Comercial".
  - 404: link "Ir para o Guia Comercial".
  - a mensagem vem do servidor (`formatErroCliente`).

## o que faz
- lista os pedidos de delivery recebidos pela empresa num período, com totais, e deixa concluir ou cancelar.

## ações e campos
- período: atalhos Hoje (padrão), Ontem, 7 dias, 30 dias; datas "De" e "Até" manuais.
- situação: Todos, Aguardando, Concluídos, Cancelados.
- números: Pedidos, Vendido, Aguardando você.
- cada pedido: código, situação, hora, itens com opções e observações, cliente, telefone, endereço, forma de pagamento, troco, cupom, taxa de entrega, total.
- botões: "Chamar cliente" (WhatsApp com mensagem pronta), "Ver pedido" (`/pedido/{codigo}` em nova aba), "Concluir" (com `confirm()` do navegador) e "Cancelar" (janela com motivo obrigatório, até 300 caracteres).
- "Atualizar" manual; recarrega sozinho por intervalo, ao voltar à aba e em evento de pedido novo (`:168-180`).

## APIs
- `GET /{portal}/comercial/minha-empresa/delivery/pedidos/?de&ate&situacao` (`buscarPedidosDelivery`, `cliente-api.ts:1690-1700`).
- ações de concluir e cancelar em `cliente-api.ts:1700-1716` (`concluirPedidoDelivery`, `cancelarPedidoDelivery`; método e corpo não conferidos nesta leitura).
- eventos `EVENTO_PEDIDOS_DELIVERY_MUDARAM` atualizam a contagem do menu.

## estados de erro/vazio
- carregando "Carregando pedidos…".
- vazio: "Nenhum pedido neste período." (`:373`).
- período inválido: "A data inicial não pode ser depois da data final." / "Informe as duas datas do período."
- lista truncada: "Mostrando os N pedidos mais recentes deste período. Escolha um período menor…" (`:380`).
- falha de ação: faixa vermelha "Pedido X: …" no alto (`:202,360`); erro de cancelar fica dentro da janela.
- recarga silenciosa que falha não mostra erro (`:153`).

## possíveis problemas para leigo
- fato: padrão é só "Hoje"; pedido de ontem à noite ainda aguardando não aparece sem trocar o período. A contagem do menu pode mostrar pedidos que a tela não exibe. Hipótese: confusão.
- fato: "Concluir" e "Cancelar" não têm desfazer (janela avisa "não pode ser desfeito").
- fato: "Concluir" usa `confirm()` do navegador, "Cancelar" usa janela própria — padrões diferentes (`:194` vs `:465`).
- fato: não há aviso de que o cliente é avisado do cancelamento (a tela não diz). Hipótese: leigo não sabe se o cliente recebe o motivo.
- fato: "Ver pedido" abre a página pública do pedido, sem rótulo que explique isso.
- fato: sem aviso sonoro; só atualização por intervalo. Hipótese: pedido pode demorar para ser visto se a aba estiver em segundo plano (só recarrega quando a aba está visível, `:170`).

## posições na tela (print de 2026-10-16, 1280x900)
- print: [minha-conta-delivery-pedidos.png](../prints/minha-conta-delivery-pedidos.png) · versão celular: [minha-conta-delivery-pedidos-390.png](../prints/minha-conta-delivery-pedidos-390.png) · dados brutos: [json](../prints/json/minha-conta-delivery-pedidos.json)
- aberta em `/minha-conta/delivery/pedidos`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "Pedidos do delivery" — topo, no topo da página, ao centro (432,16,170,28)
- [link] "Voltar ao início" — topo, no topo da página, à esquerda (400,20,20,20)
- [menu/links] "9 itens: Início · Guia Comercial · Vagas de Emprego · Banners Publicitários · Classificados · Minha empresa · Planos e assinaturas · Segurança · Sair" — menu, na parte de cima, à esquerda (lista de 9 itens em coluna) (14,96,227,786)
- [link] "Ir para o Guia Comercial" — conteúdo, na parte de cima, ao centro (425,178,162,20)
