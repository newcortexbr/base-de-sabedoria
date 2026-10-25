# /painel/delivery/cardapio

Arquivo: `app/painel/delivery/cardapio/page.tsx`

## como chegar
- não há item no menu. Na parte Conteúdo do menu, abra `Guia Comercial`, clique em `Listar Empresas` e depois em `Editar` na empresa. Na ficha dela, clique no cartão `Cardápio do delivery` (só aparece em empresa de categoria com delivery; a ficha é salva antes de abrir).

## o que você vê
Tela `Cardápio de Delivery`. Monta o cardápio do delivery de uma empresa: seções, produtos e opções.
- coluna `Seções`: grupos do cardápio (ex.: lanches, bebidas). O botão `+` abre o campo `Nome da seção` e `Criar`; aqui só dá para criar seção nova.
- botão `+ Novo produto` (aparece com uma seção escolhida) abre a janela `Novo produto` (`Editar produto` ao editar): `Nome *`, `Descrição`, `Preço base (R$)`, caixas `Disponível` e `Destaque`, `Foto`; botões `Criar produto` (ou `Salvar alterações`) e `Cancelar`. Produto `Indisponível` não pode ser pedido; `Destaque` aparece em evidência.
- preço base 0: o preço vem das opções escolhidas (mostra `Preço por opção`).
- bloco `Grupos de opções` (`+ Novo grupo`): escolhas do produto, como tamanho ou cobertura; só aparece depois de criar o produto. Campos `Nome do grupo`, `Mín. seleções (0 = opcional)` e `Máx. seleções (1 = radio, 0 = ∞)`; botão `Criar grupo`.
- dentro do grupo, `+ Adicionar opção` pede `Nome da opção` e `Preço (0 = incluso)`; `Excluir grupo` remove o grupo e seus itens.
- `Editar` e `Excluir` no produto; excluir pede confirmação e não pode ser desfeito.

## rota e gate
- `/painel/delivery/cardapio?empresa=<id>`. client, `Header`, `VoltarParaAEmpresa`. gate `PainelGuard`; módulo `guia` (`lib/painel-menu.ts:95`). sem menu: entra pelo cartão "Cardápio do delivery" do editor da empresa (`EmpresaEditor.tsx:942`).
- sem `?empresa=`: não carrega nada nem avisa; a tela fica com "Crie uma seção para começar" (`:295`, `:374`), enganosa.

## o que faz
- monta o cardápio de uma empresa: seções, produtos e grupos de opções (tamanho, cobertura etc.).

## ações e campos
- criar seção (só nome, `:307-313`); não há renomear, ordenar nem excluir seção na tela (a API tem `secoes.atualizar` e `excluir`, `admin-api.ts:2058-2059`, sem uso aqui).
- produto (modal): nome*, descrição, preço base (R$, 0 = preço por opção), disponível, destaque, foto. editar e excluir (com confirmação `avisos.confirmar`).
- grupos de opções (só em produto já criado): nome, mín. e máx. seleções (0 = sem limite); itens com nome e preço adicional; excluir grupo e item.

## apis
- `delivery.secoes.listar/criar` (`admin-api.ts:2054-2056`), `delivery.produtos.listar/criar/atualizar/excluir` (`:2063-2074`, multipart), `delivery.grupos.listar/criar/excluir` (`:2077-2082`), `delivery.itensOpcao.criar/excluir` (`:2087-2090`).

## estados
- vazio de seção e de produto com texto próprio; chip "Indisponível" e "Destaque".
- carregando: nenhum indicador.
- erro: nenhum tratamento visível.

## possíveis problemas
- fato: `carregar` não tem `try/catch` (`:294-303`); falha de rede vira rejeição não tratada e a tela fica vazia sem aviso.
- fato: `criarSecao`, `excluirProduto`, `excluirGrupo`, `excluirItem` e os `salvar` dos formulários não têm `catch` (`:18-28`, `:111-122`, `:183-202`, `:307-319`); o `finally` só destrava o botão. erro de validação do servidor (preço, foto grande) não chega ao usuário e o modal fica aberto sem mensagem.
- fato: `secaoAtiva` fica de fora das dependências do `useCallback` (`:303`); excluir a seção ativa não é possível, mas o `!secaoAtiva` pode ficar velho em recargas (hipótese de baixo impacto).
- fato: preço de opção e `preco_base` vão como número/texto sem teto (`:24`, `:190`); o limite do campo no PostgreSQL só é barrado no servidor (hipótese de erro 400 invisível).
- fato: excluir produto apaga tudo sem desfazer; só `confirm` nativo.
- fato: grupo sem editar: só criar e excluir.

## equivalente em minha-conta
- não achei equivalente direto: o delivery do lojista em `app/minha-conta/delivery` só tem `pedidos`, e `minha-conta/guia` tem `ConfigDoDelivery` e `ConteudoDoLayout` (seções de conteúdo, `cliente-api.ts:1408-1431`). hipótese: o cardápio em produtos e grupos de opções só existe no painel admin; não verifiquei se `ConteudoDoLayout` cobre o mesmo catálogo.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-delivery-cardapio.png](../prints/painel-delivery-cardapio.png) · dados brutos: [json](../prints/json/painel-delivery-cardapio.json)
- aberta em `/painel/delivery/cardapio`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1147,16,109,34)
- [menu] "23 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Artigos · Orçamentos Online · A Voz do Povo · Melhores da Cidade · Banners Publicitários …" — menu lateral, no topo da página, à esquerda (lista de 23 itens em coluna) (10,18,255,871)
- [título] "Cardápio de Delivery" — topo, no topo da página, à esquerda (300,19,179,28)
- [título] "Cardápio de Delivery" — conteúdo, na parte de cima, à esquerda (292,99,239,32)
- [botão] "+" — conteúdo, na parte de cima, ao centro, logo abaixo de “Cardápio de Delivery” (488,168,11,28)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
