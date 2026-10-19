# /painel/guia/empresas/[id]/cardapio — cardápio da empresa (`.../[id]/cardapio/page.tsx`)
- gate: módulo `guia` (prefixo `/painel/guia`); desligado mostra "ModuloDesativado" (`painel/layout.tsx:91-98`).
- permissão: só papéis admin/master entram no painel (`src/lib/painel-permissoes.ts`).
- faz: o admin gerencia o cardápio digital de uma empresa: seções (categorias do cardápio) com pratos; botões "pedido"/"WhatsApp" e tema do cardápio.
- campos do prato: Nome do prato (obrigatório, :102), Descrição, Preço, Preço promocional, foto, tags, ativo.
- ações: criar/renomear/excluir/ativar/reordenar seção (:560-607), criar/editar/excluir/ativar prato (:120-121,361,397), salvar botões do cardápio (`atualizarBotoesDoCardapio`, :637,644). Confirmações nativas (:359,575).
- APIs: `guia.cardapio.listarSecoes|criarSecao|atualizarSecao|excluirSecao|listarProdutos|criarProduto|atualizarProduto|excluirProduto`, `guia.empresas.detalhe` (:548), `guia.empresas.atualizarBotoesDoCardapio`.
- estados: qualquer falha ao carregar seções/empresa cai em `.catch(() => setSemAcesso(true))` e mostra `SemAcessoEmpresa` (`components/painel/SemAcessoEmpresa.tsx`). (:553)
- problemas: fato — o `.catch` único (:553) transforma erro de rede, 500 ou módulo desligado em "sem acesso", escondendo a causa real. fato — a carga dos pratos de cada seção (:345) não tem catch.
- admin vs cliente: o cliente edita o cardápio na própria ficha (`/minha-conta/guia`, seção de conteúdo, `ConteudoDoLayout`, testes `cardapio-botoes-e-qr.test.tsx`). Equivalente; o cliente também gera QR do cardápio.

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
