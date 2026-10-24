# /painel/noticias/autor — autor das notícias (`.../autor/page.tsx`, 41 linhas)
- gate: módulo `noticias` (prefixo `/painel/noticias`); desligado mostra "ModuloDesativado" (`painel/layout.tsx:91-98`).
- permissão: só papéis admin/master entram no painel (`src/lib/painel-permissoes.ts`).
- menu: parte Conteúdo, grupo `Notícias` > `Autor` (`Sidebar.tsx:108`). título `Notícias — Autor`; cabeçalho `Autor das notícias`.
- faz: perfil editorial que assina as notícias do portal (as escritas pelo admin e as importadas por RSS; matérias de jornalistas são assinadas pelo perfil de cada um) (foto, nome, cargo, bio etc.) via `AutorFormBase` (`components/painel/noticias/AutorFormBase.tsx`) com `adminApi.noticias.autor` (:21). Prévia "Como aparece na notícia".
- ações: obter (`api.obter`, :166) e salvar (`api.salvar` com FormData, :219).
- estados: erro de campo "Corrija os campos destacados" (:198,234); 404 é tratado como "ainda não existe" (:175).
- problemas: nenhum confirmado.
- admin vs cliente: o jornalista usa `/minha-conta/autor` com o mesmo `AutorFormBase` (mesmo componente, API diferente). Equivalente.

## o que você vê
Perfil do autor que assina as notícias do portal: as que você publica pelo painel e as que entram sozinhas por RSS.
- foto (`Foto do autor`), `Nome *`, `Cargo` (ex.: Repórter) e `Bio`: como o autor aparece nas notícias.
- `Site`, `Instagram` (sem @), `Facebook`, `LinkedIn`, `WhatsApp` (só DDD e número; o botão é montado sozinho) e `E-mail público`: contatos do autor.
- `Como aparece na notícia`: prévia de como o quadro do autor fica no site.
- `Salvar`: grava o perfil; campos com problema ficam destacados.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-noticias-autor.png](../prints/painel-noticias-autor.png) · dados brutos: [json](../prints/json/painel-noticias-autor.json)
- aberta em `/painel/noticias/autor`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1147,16,109,34)
- [menu] "29 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Cadastrar Notícia · Listar Notícias · Gerenciar Categorias · Gerenciar Subcategorias · Autor · Jornalistas · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados …" — menu lateral, no topo da página, à esquerda (lista de 29 itens em coluna) (10,18,255,1017)
- [título] "Notícias — Autor" — topo, no topo da página, à esquerda (300,19,145,28)
- [título] "Autor das notícias" — conteúdo, na parte de cima, ao centro (466,99,624,32)
- [selo] "Sem foto" — conteúdo, na parte de cima, ao centro (490,243,64,64)
- [envio de arquivo] "Foto do autor" — conteúdo, na parte de cima, ao centro (566,265,265,20)
- [campo] "Nome * (0/150)" — conteúdo, na parte de cima, ao centro, logo abaixo de “Sem foto” (490,347,282,38)
- [campo] "Cargo" — conteúdo, na parte de cima, à direita, logo abaixo de “Foto do autor” (784,347,282,38)
- [campo de texto longo] "Bio (0/500)" — conteúdo, no meio da tela, ao centro, logo abaixo de “Nome * (0/150)” (490,425,576,78)
- [campo] "Site" — conteúdo, no meio da tela, ao centro, logo abaixo de “Bio (0/500)” (490,550,282,38)
- [campo] "Instagram" — conteúdo, no meio da tela, à direita, logo abaixo de “Bio (0/500)” (784,550,282,38)
- [campo] "Facebook" — conteúdo, no meio da tela, ao centro, logo abaixo de “Site” (490,624,282,38)
- [campo] "LinkedIn" — conteúdo, no meio da tela, à direita, logo abaixo de “Instagram” (784,624,282,38)
- [campo] "WhatsApp" — conteúdo, no meio da tela, ao centro, logo abaixo de “Facebook” (490,698,282,38)
- [campo] "E-mail público" — conteúdo, no meio da tela, à direita, logo abaixo de “LinkedIn” (784,698,282,38)
- [botão] "Salvar" — conteúdo, no meio da tela, ao centro, logo abaixo de “WhatsApp” (490,792,90,36)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
