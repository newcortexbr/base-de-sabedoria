# /painel/blog/colunistas — colunistas (`src/app/painel/blog/colunistas/page.tsx`)
- gate: módulo `blog`. - permissão: só papéis admin/master entram no painel (`src/lib/painel-permissoes.ts`); lojista/cliente/jornalista são recusados no login do painel.
- faz: CRUD de colunistas e do acesso de login do proprietário.
- campos: Nome, Cargo ou especialidade, E-mail público, WhatsApp, Instagram/Facebook/LinkedIn/Site, foto (com foco da imagem), Status, acesso do proprietário (`AcessoDoProprietario`).
- ações: criar/editar com `FormData` (:113-114), ativar/desativar na lista (:449), excluir (:385), criar/redefinir senha/remover acesso (:309-311), revalidar (:125,400,455).
- APIs: `blog.colunistas.listar|criar|atualizar|excluir|criarAcesso|redefinirSenhaAcesso|removerAcesso`.
- estados: erro de campo `errosCampo` (:83), erro geral `erro` (:135), erro do toggle `erroToggle` (:458); vazio (:526,528). Telefone validado por `motivoTelefoneInvalido`.
- problemas: nenhum confirmado. fato — criar acesso após criar o colunista pode falhar parcialmente (tratado por `criarAcessoDoCadastro`, :131).
- admin vs cliente: cliente edita o próprio perfil em `/minha-conta/colunista-blog` (`ColunistaPerfil`). Admin cria o colunista inteiro, define a senha e remove o acesso. O cliente não pode se desativar; o admin sim.

## como chegar
- na parte Conteúdo do menu, abra `Artigos` e clique em `Colunistas`.

## o que você vê
Cadastro das pessoas que escrevem artigos (colunistas) e do acesso delas ao sistema.
- foto (com ponto de foco): a imagem do colunista; o ponto de foco escolhe que parte da foto fica visível quando ela é cortada.
- `+ Novo Colunista` abre a janela `Cadastrar Colunista` (no lápis, `Editar Colunista`).
- `Nome` e `Cargo ou especialidade`: como o colunista aparece nos artigos.
- `E-mail público`, `WhatsApp`, `Instagram`, `Facebook`, `LinkedIn`, `Site`: contatos mostrados no perfil público.
- caixa `Ativo`: colunista inativo fica desligado; na lista, um botão liga e desliga (desativar pede confirmação).
- filtros da lista: `Nome ou profissão` (busca), `Status` (`Todos`, `Ativos`, `Inativos`) e `Origem` (`Todas`, `Cadastrado pelo painel`, `Autocadastro`). Quem se cadastrou sozinho ganha a marca `Autocadastro`; a origem não se escolhe no formulário.
- bloco `Acesso do proprietário`: ao cadastrar, preenche `Nome do responsável`, `E-mail de login` e `Senha inicial`; ao editar, há `Criar acesso`, `Redefinir senha` (a nova senha vai por e-mail) e `Remover acesso`.
- lixeira (Excluir): apaga o colunista, depois de confirmação.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-blog-colunistas.png](../prints/painel-blog-colunistas.png) · dados brutos: [json](../prints/json/painel-blog-colunistas.json)
- aberta em `/painel/blog/colunistas`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1147,16,109,34)
- [menu] "27 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Artigos · Lista de Artigos · Novo Artigo · Colunistas · Categorias …" — menu lateral, no topo da página, à esquerda (lista de 27 itens em coluna) (10,18,255,953)
- [título] "Artigos — Colunistas" — topo, no topo da página, à esquerda (300,19,183,28)
- [botão] "+ Novo Colunista" — conteúdo, na parte de cima, à direita (1055,99,147,36)
- [título] "Colunistas" — conteúdo, na parte de cima, à esquerda (354,101,123,32)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
