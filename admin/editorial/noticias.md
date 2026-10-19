---
id: editorial-noticias
titulo: "notícias: cadastrar e controlar a publicação"
publico:
  - administrador do portal
  - jornalista
modulo: notícias
categoria: conteúdo
aba: Notícias
tipo_problema: publicação
status: rascunho-documental
revisado_em: 2026-10-19
validacao: docs-e-codigo
videos:
  - gAa2NdnitZU
---

## objetivo
cadastrar e acompanhar notícias no portal, entendendo a diferença entre rascunho, publicação agendada e conteúdo no ar.

## pré-requisitos/permissões
O administrador do portal gerencia conteúdo pelo painel. Jornalista não entra em `/painel`: usa a área do cliente em `/minha-conta` e só tem as rotas de Notícias autorizadas ao seu papel. Ter um menu visível não concede permissão; o servidor decide o acesso.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Notícias` e depois em `Listar Notícias` (`/painel/noticias`).
2. Para escrever uma notícia nova, clique no botão `+ Cadastrar Notícia` no topo da lista, ou no menu em `Cadastrar Notícia` (`/painel/noticias/cadastrar`).
3. Preencha o `Título *`, o `Subtítulo`, o `Título curto` (aparece nos cartões da página inicial) e o texto em `Conteúdo`.
4. Em `Categorização`, escolha a `Categoria` e a `Subcategoria`.
5. Em `Foto de Capa`, envie a imagem e preencha a `Legenda` e os `Créditos`.
6. Em `Publicação`, escolha o `Status`. Para entrar no ar em outro dia, preencha `Publicar em`. Se quiser a notícia em evidência na página inicial, ligue `Destaque na janela principal`.
7. Clique em `Adicionar`. (Ao corrigir uma notícia que já existe, o botão se chama `Salvar`.)
8. Para achar uma notícia, use o topo da lista: o campo `Buscar por título...`, a caixa `Todos os status`, a categoria, a subcategoria e as datas de publicação.
9. Para corrigir uma notícia, clique no ícone de lápis (`Editar`) na linha dela.
10. Confira a coluna `Status`: `Rascunho` (guardada, fora do ar), `Publicado` (no ar) ou `agendado` (vai entrar no ar na data marcada).

## resultado
A lista reflete o estado do conteúdo. Uma notícia marcada como publicada, mas com data futura, aparece como `agendado` e fica escondida do público até a data chegar.

## desvios
- Não existe opção funcional para restringir uma notícia a leitores conectados; o antigo `ver_apenas_logado` foi removido.
- Comentários de notícia e publieditorial não fazem parte do fluxo disponível no código.
- Busca global não procura notícias.
- Falha ao carregar ou salvar: leia a mensagem da tela; não presuma que a ação foi concluída.

## quando pedir ajuda
peça ajuda ao responsável pelo portal se a publicação não estiver visível após a data prevista, se categoria/subcategoria não aparecerem, ou se a API recusar a ação. Informe a rota e o texto do erro, sem enviar dados de leitores.

## fontes
- `portal-cidade/frontend/src/app/painel/noticias/page.tsx:12` — estado agendado e visibilidade.
- `portal-cidade/frontend/src/app/painel/noticias/page.tsx:126` — filtros da listagem.
- `portal-cidade/frontend/src/app/painel/noticias/cadastrar/page.tsx:1` — rota de cadastro.
- `docs/DECISIONS.md:56` — comentários removidos.
- `docs/DECISIONS.md:65` — busca global.
- `docs/DECISIONS.md:78` — campo de conteúdo para logados removido.
- `docs/PRODUCT.md:40` — funcionalidades de Notícias.

## lacunas
não verificado visualmente nem em ambiente executável. A exibição do botão depende de permissões e do formulário atual; este guia não promete um fluxo de publicação único para todos os papéis.
