# /painel/vagas/contratantes — contratantes (`.../contratantes/page.tsx`)
- gate: módulo `vagas` (prefixo `/painel/vagas`); desligado mostra "ModuloDesativado" (`painel/layout.tsx:91-98`). ATENÇÃO: "vagas" no frontend = vagas de emprego.
- permissão: só papéis admin/master entram no painel (`src/lib/painel-permissoes.ts`).
- faz: lista de empresas contratantes, filtro local (`useFiltroDeCadastro`).
- ações: novo, editar, excluir com `confirm` "As vagas vinculadas ficarão sem contratante" (:28-30).
- APIs: `vagas.contratantes.listar|excluir`.
- estados: erro (:21,31); vazio "Nenhum contratante cadastrado" (:58) e "...com esses filtros" (:61).
- problemas: hipótese — excluir deixa vagas sem contratante; a vaga continua publicada sem empresa (a regra é do servidor).
- admin vs cliente: o cliente cria seu contratante em "completar perfil" (`_completar/FormularioContratanteVagas.tsx`). O admin cadastra por ele.

## o que você vê
Lista das empresas que oferecem vagas (contratantes).
- para abrir: na parte Conteúdo do menu, em `Vagas de Emprego`, clique em `Contratantes`.
- `+ Criar Contratante` abre o cadastro.
- campo "Nome ou e-mail" ("Buscar por nome ou e-mail…") e filtro de Verificado / Não verificado.
- Verificado: selo de empresa conferida por você, mostrado no site.
- Proprietário: quem tem acesso para gerenciar as vagas dessa empresa; "Sem acesso" quando ninguém tem login.
- `Editar` abre a empresa; `Excluir` pede confirmação e as vagas ligadas a ela ficam sem contratante.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-vagas-contratantes.png](../prints/painel-vagas-contratantes.png) · dados brutos: [json](../prints/json/painel-vagas-contratantes.json)
- aberta em `/painel/vagas/contratantes`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1147,16,109,34)
- [menu] "27 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Listar Vagas · Nova Vaga · Áreas de Vagas · Contratantes · Classificados · Guia Turístico / Eventos · Artigos …" — menu lateral, no topo da página, à esquerda (lista de 27 itens em coluna) (10,18,255,953)
- [título] "Vagas — Contratantes" — topo, no topo da página, à esquerda (300,19,191,28)
- [título] "Contratantes" — conteúdo, na parte de cima, ao centro (354,99,155,32)
- [link] "+ Criar Contratante" — conteúdo, na parte de cima, à direita (1043,109,159,36)
- [campo] "Nome ou e-mail" — conteúdo, na parte de cima, ao centro, logo abaixo de “Contratantes” (371,216,602,38)
- [botão] "Todos" — conteúdo, na parte de cima, à direita (985,216,200,38)
- [coluna] "Contratante" — conteúdo, na parte de cima, ao centro (355,288,286,41)
- [coluna] "Verificado" — conteúdo, na parte de cima, ao centro (641,288,184,41)
- [coluna] "Proprietário" — conteúdo, na parte de cima, à direita (826,288,215,41)
- [selo] "Não verificado" — conteúdo, na parte de cima, ao centro (684,347,99,24)
- [link] "Editar" — conteúdo, na parte de cima, à direita (1103,351,34,16)
- [botão] "Excluir" — conteúdo, na parte de cima, à direita (1145,351,40,16)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
