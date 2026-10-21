# /painel/classificados/[id]/editar — editar anúncio (`.../[id]/editar/page.tsx`)
- gate: módulo `classificados` (prefixo `/painel/classificados`, `src/lib/painel-menu.ts`); desligado mostra "ModuloDesativado" (`painel/layout.tsx:91-98`). ATENÇÃO: "classificados" no frontend = anúncios de venda.
- permissão: só papéis admin/master entram no painel (`src/lib/painel-permissoes.ts`).
- faz: server component de 8 linhas que lê `id` e renderiza `<AnuncioForm anuncioId>` (mesmos campos de cadastrar).
- extra do modo editar: mostra visualizações e cliques de WhatsApp (`whatsClicks`, `visualizacoes`), apaga/adiciona fotos direto no servidor (:261,275) e guarda slug/cidade antigos para revalidar a URL antiga (:130 em diante).
- APIs: `classificados.anuncios.detalhe` (:130), `atualizar` (:231), `fotos.excluir|upload`.
- estados: erro de carga `loadError` (:159 `formatApiError(err,'carregar')`); "salvoOk" (:213).
- problemas: nenhum confirmado.
- admin vs cliente: equivale a `/minha-conta/classificados/[id]/editar`; o admin edita anúncios de qualquer anunciante e muda status/destaque livremente.

## o que você vê
Tela para mudar um anúncio classificado que já existe; os campos são os do cadastro.
- Empresa anunciante *: quem anuncia; se não houver nenhum, cadastre um primeiro.
- Dados do Anúncio: Título * (ex.: iPhone 13 128GB Azul), Descrição *, Categoria, Subcategoria, Condição e Preço (vazio = "A combinar").
- fotos: pelo menos uma foto é obrigatória para publicar o anúncio; também aceita vídeo do YouTube.
- Localização: cidade e bairro.
- Contato: Nome do anunciante (quem responde), WhatsApp e E-mail de contato.
- Configurações: Status (Ativo, Pausado, Encerrado, Vendido), Expira em (data em que sai do ar) e destaque.
- Visualizações e Cliques no WhatsApp: quantas vezes o anúncio foi visto e quantas pessoas clicaram para chamar.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-classificados-id-editar.png](../prints/painel-classificados-id-editar.png) · dados brutos: [json](../prints/json/painel-classificados-id-editar.json)
- aberta em `/painel/classificados/1/editar` com dados do banco de teste; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1147,16,109,34)
- [menu] "27 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados · Listar Anúncios · Novo Anúncio · Categorias · Anunciantes · Guia Turístico / Eventos · Artigos …" — menu lateral, no topo da página, à esquerda (lista de 27 itens em coluna) (10,18,255,953)
- [título] "Editar Anúncio" — topo, no topo da página, à esquerda (300,19,127,28)
- [título] "Editar Anúncio" — conteúdo, na parte de cima, ao centro (450,99,170,32)
- [botão] "←" — conteúdo, na parte de cima, à esquerda (418,103,16,24)
- [título] "Fotos" — conteúdo, na parte de cima, ao centro (439,266,678,20)
- [botão] "Remover" — conteúdo, na parte de cima, ao centro, logo abaixo de “Fotos” (562,362,32,32)
- [título] "Anunciante" — conteúdo, no meio da tela, ao centro (439,582,678,20)
- [título] "Dados do Anúncio" — conteúdo, no meio da tela, ao centro (439,740,678,20)
- [campo] "Ex: iPhone 13 128GB Azul" — conteúdo, no meio da tela, ao centro, logo abaixo de “Dados do Anúncio” (439,800,447,38)
- [campo] "Categoria" — conteúdo, no meio da tela, à direita, logo abaixo de “Dados do Anúncio” (902,800,215,38)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
- [campo] "Subcategoria" — conteúdo, no meio da tela, ao centro, logo abaixo de “Ex: iPhone 13 128GB Azul” (439,878,678,38)
- [radio] "Novo" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Subcategoria” (439,960,13,13)
- [radio] "Usado - Excelente" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Subcategoria” (509,960,13,13)
- [radio] "Usado - Bom" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Subcategoria” (660,960,13,13)
- [radio] "Com defeito ou avarias" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Subcategoria” (779,960,13,13)
- [campo de texto longo] "Descreva o produto ou serviço em detalhes…" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Novo” (439,1016,678,118)
- [título] "Preço" — conteúdo, mais abaixo (rolando a página), ao centro (439,1207,678,20)
- [campo] "0,00 — deixe vazio para 'A combinar'" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Preço” (491,1268,279,38)
- [checkbox] "Negociável" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Preço” (786,1283,13,13)
- [checkbox] "Aceita troca" — conteúdo, mais abaixo (rolando a página), ao centro (439,1327,13,13)
- [título] "Localização" — conteúdo, mais abaixo (rolando a página), ao centro (439,1417,678,20)
- [campo] "Cidade" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Localização” (439,1477,331,38)
- [campo] "Bairro" — conteúdo, mais abaixo (rolando a página), à direita, logo abaixo de “Localização” (786,1477,331,38)
- [título] "Contato" — conteúdo, mais abaixo (rolando a página), ao centro (439,1581,678,20)
- [campo] "Nome de quem responde" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Contato” (439,1641,678,38)
- [campo] "(27) 99999-9999" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Nome de quem responde” (518,1720,599,38)
- [campo] "contato@exemplo.com" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “(27) 99999-9999” (439,1819,678,38)
- [checkbox] "Mostrar telefone publicamente" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “contato@exemplo.com” (439,1877,13,13)
- [título] "Configurações" — conteúdo, mais abaixo (rolando a página), ao centro (439,1959,678,20)
- [campo] "" — conteúdo, mais abaixo (rolando a página), à direita, logo abaixo de “Configurações” (786,2019,331,38)
- [checkbox] "Destacar anúncio (aparece no topo com borda amarela)" — conteúdo, no fim da página, ao centro (439,2077,13,13)
- [botão] "Cancelar" — conteúdo, no fim da página, à direita (865,2138,98,42)
- [botão] "Salvar alterações" — conteúdo, no fim da página, à direita (975,2138,163,42)
