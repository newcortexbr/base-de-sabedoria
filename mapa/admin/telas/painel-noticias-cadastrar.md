# /painel/noticias/cadastrar — nova notícia (`.../cadastrar/page.tsx`, 11 linhas)
- gate: módulo `noticias` (prefixo `/painel/noticias`); desligado mostra "ModuloDesativado" (`painel/layout.tsx:91-98`).
- permissão: só papéis admin/master entram no painel (`src/lib/painel-permissoes.ts`).
- faz: `Header` + `<NoticiaForm />` (`components/painel/NoticiaForm.tsx`), que injeta `adminApi.noticias/categorias/subcategorias/uploadImagem` num editor compartilhado.
- campos/ações detalhados no editor compartilhado (título, categoria, subcategoria, fonte, foto, legenda, créditos, corpo com imagens, status). A criação é feita pelo componente; esta tela não tem lógica própria.
- APIs: `noticias.criar`, `uploadImagem`, `categorias.listar`, `subcategorias.listar` (via NoticiaForm).
- problemas: nenhum confirmado nesta tela.
- admin vs cliente: o jornalista usa `/minha-conta/noticias/nova` (`FormularioDoJornalista`), outro formulário; admin publica direto e escolhe o autor. Fato: há dois formulários diferentes para a mesma entidade.

## o que você vê
Tela para escrever e publicar uma notícia nova.
- Título * e Título curto: o nome da notícia; o curto é usado onde há pouco espaço.
- Subtítulo: frase logo abaixo do título.
- Conteúdo da matéria *: o texto, com formatação, imagens e vídeos.
- Foto de Capa (arraste ou clique), Legenda e Créditos: imagem principal e quem a fez.
- Categorização: Categoria, Subcategoria e etiquetas (digite e aperte Enter) para separar o assunto.
- Fonte da matéria: de onde veio a informação.
- Publicação: Status (Rascunho, Publicado, Arquivado), Agendar notícia com a data em Publicar em, e Destaque na janela principal para ela aparecer no destaque da página inicial.
- SEO e Endereço da página: como aparece no Google e o final do link; se ficarem vazios, são criados a partir do título.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-noticias-cadastrar.png](../prints/painel-noticias-cadastrar.png) · dados brutos: [json](../prints/json/painel-noticias-cadastrar.json)
- aberta em `/painel/noticias/cadastrar`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1147,16,109,34)
- [menu] "29 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Cadastrar Notícia · Listar Notícias · Gerenciar Categorias · Gerenciar Subcategorias · Autor · Jornalistas · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados …" — menu lateral, no topo da página, à esquerda (lista de 29 itens em coluna) (10,18,255,1017)
- [título] "Cadastrar Notícia" — topo, no topo da página, à esquerda (300,19,149,28)
- [título] "Conteúdo" — conteúdo, na parte de cima, ao centro (320,111,604,20)
- [título] "Publicação" — conteúdo, na parte de cima, à direita (988,111,248,20)
- [campo] "" — conteúdo, na parte de cima, ao centro, logo abaixo de “Conteúdo” (320,171,604,38)
- [botão] "Destaque na janela principal" — conteúdo, na parte de cima, à direita (988,227,229,20)
- [campo] "" — conteúdo, na parte de cima, ao centro (320,249,294,38)
- [campo] "" — conteúdo, na parte de cima, ao centro (630,249,294,38)
- [botão] "Adicionar" — conteúdo, na parte de cima, à direita, logo abaixo de “Destaque na janela principal” (988,267,158,38)
- [botão] "Cancelar" — conteúdo, na parte de cima, à direita, logo abaixo de “Destaque na janela principal” (1154,267,82,38)
- [título] "Foto de Capa" — conteúdo, na parte de cima, à direita (988,361,248,20)
- [botão] "Negrito (e outros 18 parecidos)" — conteúdo, no meio da tela, à esquerda (repetido ×19, um sob o outro) (329,491,32,32)
- [campo] "" — conteúdo, no meio da tela, à direita (988,769,248,38)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [campo] "" — conteúdo, no meio da tela, à direita (988,843,248,38)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
- [título] "SEO" — conteúdo, mais abaixo (rolando a página), à direita (988,937,248,20)
- [campo] "Digite e pressione Enter ou vírgula..." — conteúdo, mais abaixo (rolando a página), ao centro (333,956,578,22)
- [campo] "Deixe em branco para usar o título da notícia" — conteúdo, mais abaixo (rolando a página), à direita, logo abaixo de “SEO” (988,993,248,38)
- [campo] "" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Digite e pressione Enter ou vírgula” (320,1027,604,38)
- [campo de texto longo] "Deixe em branco para usar a chamada" — conteúdo, mais abaixo (rolando a página), à direita, logo abaixo de “Deixe em branco para usar o título ” (988,1067,248,78)
- [título] "Categorização" — conteúdo, mais abaixo (rolando a página), ao centro (320,1121,604,20)
- [campo] "Categoria" — conteúdo, no fim da página, ao centro, logo abaixo de “Categorização” (320,1181,294,38)
- [campo] "Subcategoria" — conteúdo, no fim da página, ao centro, logo abaixo de “Categorização” (630,1181,294,38)
- [botão] "Nova categoria" — conteúdo, no fim da página, à esquerda, logo abaixo de “Categoria” (320,1225,128,30)
- [botão] "Nova subcategoria" — conteúdo, no fim da página, ao centro, logo abaixo de “Subcategoria” (630,1225,149,30)
