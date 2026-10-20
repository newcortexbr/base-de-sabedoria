# /painel/guia/empresas/[id]/catalogo — catálogo de produtos (`.../[id]/catalogo/page.tsx`)
- gate: módulo `guia` (prefixo `/painel/guia`); desligado mostra "ModuloDesativado" (`painel/layout.tsx:91-98`).
- permissão: só papéis admin/master entram no painel (`src/lib/painel-permissoes.ts`).
- faz: seções e produtos do catálogo de uma empresa, com fotos e vídeos do YouTube por produto (`GaleriaDeMidia`).
- campos: Título/Nome, Subtítulo, Descrição, Preço, Preço promocional, Marca, Tags, "Publicado" (`ChavePublicado`), fotos/vídeos.
- ações: criar/excluir/ativar/reordenar seção (:401-445), criar/editar produto (:206-207), subir fotos após criar (:216-217), excluir foto (:120).
- APIs: `guia.catalogo.secoes.listar|criar|atualizar|excluir`, `guia.catalogo.produtos.listar|criar|atualizar`, `guia.catalogo.fotos.listar|criar|criarVideo|excluir`, `guia.empresas.detalhe` (:374).
- estados: qualquer falha ao carregar seções/empresa cai em `.catch(() => setSemAcesso(true))` e mostra `SemAcessoEmpresa` (`components/painel/SemAcessoEmpresa.tsx`). (:384)
- problemas: fato — mesmo `catch` único que vira "sem acesso" (:384). fato — upload falho mostra o nome do arquivo (:92), bom.
- admin vs cliente: o cliente gerencia o catálogo em `/minha-conta/guia`. Admin equivalente.

## o que você vê
Catálogo de produtos de uma empresa (ex.: loja, revenda de carros), separado em seções.
- seções: criar, apagar e mudar a ordem.
- produto: Título * (ex.: Corolla XEi 2.0 Flex 2023), descrição, preço, preço promocional, Marca, detalhes (para veículos: ano, km, combustível, cor) e selo (Novo, Oferta, Mais vendido, Recente).
- fotos e vídeo do YouTube: enviados ao salvar o produto; se algum arquivo não entrar, a tela avisa qual.
- chave No ar / Fora do ar: mostra ou esconde o produto na página da empresa.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-guia-empresas-id-catalogo.png](../prints/painel-guia-empresas-id-catalogo.png) · dados brutos: [json](../prints/json/painel-guia-empresas-id-catalogo.json)
- aberta em `/painel/guia/empresas/1/catalogo` com dados do banco de teste; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [menu] "27 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Listar Empresas · Gerenciar Categorias · Gerenciar Subcategorias · Cupons de Desconto · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Artigos …" — menu lateral, no topo da página, à esquerda (lista de 27 itens em coluna) (10,18,255,953)
- [link] "Voltar para a empresa" — conteúdo, no topo da página, ao centro (449,28,187,40)
- [título] "Catálogo de Produtos" — conteúdo, no topo da página, ao centro (648,33,208,30)
- [campo] "Nova seção…" — conteúdo, na parte de cima, ao centro, logo abaixo de “Catálogo de Produtos” (462,147,194,38)
- [botão] "+ Adicionar seção" — conteúdo, na parte de cima, ao centro, logo abaixo de “Nova seção…” (462,191,194,34)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
