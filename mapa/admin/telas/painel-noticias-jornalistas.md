# /painel/noticias/jornalistas — jornalistas (`.../jornalistas/page.tsx`)
- gate: módulo `noticias` (prefixo `/painel/noticias`); desligado mostra "ModuloDesativado" (`painel/layout.tsx:91-98`).
- permissão: só papéis admin/master entram no painel (`src/lib/painel-permissoes.ts`).
- faz: o admin cadastra jornalistas (contas com login em `/minha-conta/login`) e gerencia o acesso.
- ações: criar (`criar`, :79), renomear (`atualizar`, :75), ativar/desativar (:281), redefinir senha (`resetarSenha`, :189).
- APIs: `noticias.jornalistas.listar|criar|atualizar|resetarSenha`.
- estados: erro `mensagemDeAcesso(err,'salvar')` (:85,192); carga `formatApiError(err,'carregar')` (:257); vazio "Nenhum jornalista cadastrado" (:328).
- problemas: fato — não há botão de excluir jornalista (só desativar).
- admin vs cliente: o jornalista não se cadastra pelo painel; o admin cria a conta e define a senha. O cliente troca a senha em `/minha-conta/seguranca`.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-noticias-jornalistas.png](../prints/painel-noticias-jornalistas.png) · dados brutos: [json](../prints/json/painel-noticias-jornalistas.json)
- aberta em `/painel/noticias/jornalistas`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1147,16,109,34)
- [menu] "29 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Cadastrar Notícia · Listar Notícias · Gerenciar Categorias · Gerenciar Subcategorias · Autor · Jornalistas · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados …" — menu lateral, no topo da página, à esquerda (lista de 29 itens em coluna) (10,18,255,1017)
- [título] "Notícias — Jornalistas" — topo, no topo da página, à esquerda (300,19,193,28)
- [título] "Jornalistas" — conteúdo, na parte de cima, ao centro (354,99,720,32)
- [botão] "Novo jornalista" — conteúdo, na parte de cima, à direita (1086,119,116,56)
- [coluna] "Nome" — conteúdo, na parte de cima, ao centro (355,220,332,33)
- [coluna] "E-mail" — conteúdo, na parte de cima, ao centro (687,220,288,33)
- [coluna] "Ações" — conteúdo, na parte de cima, à direita (975,220,226,33)
- [botão] "Resetar senha" — conteúdo, na parte de cima, à direita, logo abaixo de “Ações” (1089,265,28,28)
- [botão] "Editar" — conteúdo, na parte de cima, à direita, logo abaixo de “Ações” (1121,265,28,28)
- [botão] "Bloquear" — conteúdo, na parte de cima, à direita, logo abaixo de “Ações” (1153,265,28,28)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
