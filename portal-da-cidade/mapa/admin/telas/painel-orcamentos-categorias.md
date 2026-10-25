# /painel/orcamentos/categorias (todas as solicitações de orçamento)

Arquivos: `app/painel/orcamentos/categorias/page.tsx`, `SolicitacoesOrcamentoClient.tsx`

## o que você vê
Lista de todos os pedidos de orçamento enviados por visitantes, para aprovar, reprovar ou encerrar. No menu lateral, na parte Conteúdo, abra `Orçamentos Online` e clique em `Todas as Solicitações`. Título da tela: `Orçamentos — Todas as Solicitações`.
- cartões `Total`, `Aguardando aprovação`, `Aprovados`, `Encerrados` e `Reprovados`: contagem de cada situação; clicar filtra.
- tabela: Solicitação, Cliente, Subcategoria, Status, Recebido, Ações. Em cada linha, ícones com dica: `Ver detalhes`, `Editar status`, `Aprovar e enviar à empresa`, `Reprovar — não vai para a empresa` e `Excluir`.
- Aprovar envia o pedido às empresas da categoria. Reprovar: o pedido não vai para ninguém. Encerrar: fecha um pedido.
- filtros `Status`, `Categoria` (`Todas as categorias`), `De` e `Até` (datas) e `Limpar filtros`.
- marcar várias linhas permite `Aprovar e enviar`, `Reprovar`, `Encerrar` ou `Excluir` em lote, sempre com confirmação (`Confirmar`).
- abrir um pedido (`Ver detalhes`) mostra título, `Código`, status, descrição, link, fotos, `Cliente`, `WhatsApp`, `Categoria`, `Recebido em`, `Local` e `Serviços marcados`; pedido aguardando tem `Aprovar e enviar` e `Reprovar`, e a lista `Editar status` com `Salvar` troca o status.
- o texto do pedido não pode ser editado; excluir apaga o pedido.
- `Carregar mais (N restantes)`: mostra mais pedidos.

## rota e gate
- `/painel/orcamentos/categorias` (menu `Orçamentos Online` > `Todas as Solicitações`). gate `PainelGuard` + módulo `orcamentos` (`lib/painel-menu.ts:65`).

## o que faz
- moderação dos pedidos de orçamento enviados por visitantes. "Aprovar" entrega o pedido às empresas da categoria; "Reprovar" não envia a ninguém.

## ações e campos
- cartões de contagem clicáveis: `Total`, `Aguardando aprovação`, `Aprovados`, `Encerrados`, `Reprovados`.
- filtros: `Status`, `Categoria` (`SelectComBusca`), `De`/`Até` (datas), `Limpar filtros`.
- tabela com seleção em lote; botões em lote: `Aprovar e enviar`, `Reprovar`, `Encerrar`, `Excluir` (todos com modal de confirmação, `:455-490`).
- modal de detalhe: título, `Código`, descrição, link (só vira `<a>` se começa com http/https), fotos, `Cliente`, `WhatsApp` (mascarado), `Categoria`, `Recebido em`, `Local`, `Serviços marcados` e lista `Editar status` com `Salvar` para qualquer um dos 4 status (`:196-234`).
- por linha: atualizar status e excluir.
- o admin muda o status de pedidos do visitante e exclui pedidos; não edita o texto.
- "Carregar mais" paginado.

## apis
- `orcamentos.solicitacoes.listar/contadores/atualizarStatus/atualizarStatusLote/excluir/excluirLote` (`lib/admin-api.ts:1994-2035`), rota `/painel/<slug>/orcamentos/solicitacoes/` com PATCH/DELETE e id/ids no corpo.
- `guia.categorias.listar` para o filtro de categoria.

## estados
- carregando; vazio "Nenhuma solicitação encontrada."; erro `data-testid=erro-orcamentos`; parcial em lote: "N de M … Não encontradas: ids" (`:443,501`).

## possíveis problemas
- fato: contradição de texto: o modal de reprovar em lote diz "não há como desfazer isso depois" (`:472`), mas o modal de detalhe permite voltar para qualquer status, inclusive de reprovado para aprovado (`:212-221`, comentário "reabrir um encerrado").
- fato: erro ao carregar categorias é engolido (`:336`); o filtro fica sem opções, sem aviso.
- fato: lote capa em 100 ids (comentário em `lib/admin-api.ts:2012`); a tela não limita a seleção antes de enviar (hipótese: seleção maior que 100 recebe erro do servidor).
- fato: aprovar um pedido revertendo de "aprovada" para "aguardando" depois de empresas já terem visto: efeito sobre as empresas não é tratado na tela (hipótese).

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-orcamentos-categorias.png](../prints/painel-orcamentos-categorias.png) · dados brutos: [json](../prints/json/painel-orcamentos-categorias.json)
- aberta em `/painel/orcamentos/categorias`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
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
