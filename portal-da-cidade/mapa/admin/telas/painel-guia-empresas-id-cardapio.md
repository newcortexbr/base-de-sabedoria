# /painel/guia/empresas/[id]/cardapio — cardápio da empresa (`.../[id]/cardapio/page.tsx`)
- gate: módulo `guia` (prefixo `/painel/guia`); desligado mostra "ModuloDesativado" (`painel/layout.tsx:91-98`).
- permissão: só papéis admin/master entram no painel (`src/lib/painel-permissoes.ts`).
- título `Gerenciar Cardápio`; link `← Voltar para empresa`.
- chegar: `Guia Comercial` > `Listar Empresas` > ícone de editar na linha da empresa > bloco `Conteúdo da ficha` > botão `Gerenciar` do cartão `Cardápio` (só aparece para categoria que tem cardápio). Não há botão disso na lista de empresas.
- faz: o admin gerencia o cardápio digital de uma empresa: seções (categorias do cardápio) com pratos; botões "pedido"/"WhatsApp" e tema do cardápio.
- botões: `+ Nova seção` (campo "Ex: Carnes, Bebidas, Sobremesas..." + `Criar`), `+ Adicionar prato` (em cada seção). modal `Novo prato`/`Editar prato`: `Nome do prato *`, `Descrição`, `Preço (R$)`, `Preço promocional (R$)`, foto (`Adicionar foto` / `Trocar foto`), `Tags`, botões `Salvar prato` e `Cancelar`. a chave `Publicado`/`Despublicado` liga ou desliga o prato; a seção tem setas de mover, renomear e excluir. blocos no topo: `Botões do cardápio` (`Fazer meu pedido`, `Chamar no WhatsApp`, cada um `Ligado`/`Desligado`), `Aparência do cardápio` (claro/escuro) e `QR Code do cardápio` (`Tamanho da placa`, `Copiar link`).
- ações: criar/renomear/excluir/ativar/reordenar seção (:560-607), criar/editar/excluir/ativar prato (:120-121,361,397), salvar botões do cardápio (`atualizarBotoesDoCardapio`, :637,644). Confirmações pelo aviso do painel (`Excluir este prato?`, `Excluir esta seção e todos os seus pratos?`).
- APIs: `guia.cardapio.listarSecoes|criarSecao|atualizarSecao|excluirSecao|listarProdutos|criarProduto|atualizarProduto|excluirProduto`, `guia.empresas.detalhe` (:548), `guia.empresas.atualizarBotoesDoCardapio`.
- estados: qualquer falha ao carregar seções/empresa cai em `.catch(() => setSemAcesso(true))` e mostra `SemAcessoEmpresa` (`components/painel/SemAcessoEmpresa.tsx`). (:553)
- problemas: fato — o `.catch` único (:553) transforma erro de rede, 500 ou módulo desligado em "sem acesso", escondendo a causa real. fato — a carga dos pratos de cada seção (:345) não tem catch.
- admin vs cliente: o cliente edita o cardápio na própria ficha (`/minha-conta/guia`, seção de conteúdo, `ConteudoDoLayout`, testes `cardapio-botoes-e-qr.test.tsx`). Equivalente; o cliente também gera QR do cardápio.

## o que você vê
Cardápio digital de uma empresa (restaurante, bar, lanchonete), separado em seções com pratos.
- seções (ex.: Carnes, Bebidas): `+ Nova seção`, renomear, mudar a ordem com as setas ou apagar.
- prato (`+ Adicionar prato`): `Nome do prato *`, `Descrição` (ingredientes, tamanho), `Preço (R$)`, `Preço promocional (R$)`, foto (JPG ou PNG, até 10MB) e `Tags` (Mais pedido, Novidade, Recomendado, Veg). Salve com `Salvar prato`.
- chave `Publicado` / `Despublicado`: mostra ou esconde o prato no cardápio público.
- Botões do cardápio: o que aparece no rodapé do cardápio público (Chamar no WhatsApp, Fazer meu pedido).
- Aparência do cardápio: escolhe o visual que o cliente vê.
- `QR Code do cardápio`: imprime um código para o cliente abrir o cardápio pelo celular, em vários tamanhos.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-guia-empresas-id-cardapio.png](../prints/painel-guia-empresas-id-cardapio.png) · dados brutos: [json](../prints/json/painel-guia-empresas-id-cardapio.json)
- aberta em `/painel/guia/empresas/1/cardapio` com dados do banco de teste; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [título] "Gerenciar Cardápio" — conteúdo, no topo da página, ao centro (462,16,167,27)
- [menu] "27 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Listar Empresas · Gerenciar Categorias · Gerenciar Subcategorias · Cupons de Desconto · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Artigos …" — menu lateral, no topo da página, à esquerda (lista de 27 itens em coluna) (10,18,255,953)
- [link] "← Voltar para empresa" — conteúdo, no topo da página, à esquerda (300,20,134,20)
- [título] "Botões do cardápio" — conteúdo, na parte de cima, ao centro (443,109,306,23)
- [título] "Aparência do cardápio" — conteúdo, na parte de cima, à direita (807,109,306,23)
- [botão] "CategoriaNome do pratoDescrição do pratoR$ 29,90ClaroEm uso" — conteúdo, na parte de cima, à direita, logo abaixo de “Aparência do cardápio” (807,185,147,201)
- [botão] "CategoriaNome do pratoDescrição do pratoR$ 29,90Escuro" — conteúdo, na parte de cima, à direita, logo abaixo de “Aparência do cardápio” (966,185,147,201)
- [título] "QR Code do cardápio" — conteúdo, no meio da tela, ao centro (443,469,306,23)
- [botão] "A4parede (e outros 3 parecidos)" — conteúdo, no meio da tela, ao centro (repetido ×4, um sob o outro) (443,690,150,44)
- [botão] "Gerar QR Code para imprimir" — conteúdo, no meio da tela, ao centro, logo abaixo de “A4parede (e outros 3 parecidos)” (443,796,306,44)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [botão] "Baixar imagem" — conteúdo, no meio da tela, ao centro, logo abaixo de “Gerar QR Code para imprimir” (443,848,149,44)
- [botão] "Copiar link" — conteúdo, no meio da tela, ao centro, logo abaixo de “Gerar QR Code para imprimir” (600,848,149,44)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
- [botão] "+ Nova seção" — conteúdo, mais abaixo (rolando a página), à direita (1015,941,119,38)
