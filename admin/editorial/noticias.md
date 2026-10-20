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
aqui você escreve, publica e acompanha as notícias do portal. Rascunho fica guardado, agendada entra no ar numa data marcada e publicada já está no ar.

## pré-requisitos/permissões
O administrador usa o painel. O jornalista não usa o painel: entra pela área do cliente e só vê o que o papel dele permite.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Notícias` e depois em `Listar Notícias`. [guia=menu:/painel/noticias] [t=23]
2. Para escrever uma notícia nova, clique no botão `+ Cadastrar Notícia` no topo da lista. [guia=noticias.cadastrar] [t=49]
3. Escreva o `Título *` da notícia. [guia=noticias-cadastrar.titulo] [t=52]
4. Se quiser, escreva o `Subtítulo`. [guia=noticias-cadastrar.subtitulo]
5. Se quiser, escreva o `Título curto`: ele aparece nos cartões da página inicial. [guia=noticias-cadastrar.titulo-curto] [t=54]
6. Escreva o texto da notícia no quadro `Conteúdo da matéria *`. [guia=noticias-cadastrar.conteudo] [t=62]
7. Em `Categorização`, escolha a `Categoria`. [guia=noticias-cadastrar.categoria] [t=74]
8. Escolha também a `Subcategoria` (ela só abre depois que você escolhe a categoria). [guia=noticias-cadastrar.subcategoria] [t=77]
9. Em `Foto de Capa`, clique no quadro e envie a imagem. [guia=noticias-cadastrar.foto-capa] [t=80]
10. Preencha a `Legenda` da foto. [guia=noticias-cadastrar.legenda] [t=87]
11. Preencha os `Créditos` da foto. [guia=noticias-cadastrar.creditos]
12. Em `Publicação`, escolha o `Status`: `Rascunho` (fica guardada), `Publicado` (vai ao ar) ou `Arquivado`. [guia=noticias-cadastrar.status] [t=89]
13. Para entrar no ar em outro dia, ligue `Agendar notícia` (só aparece com o status `Publicado`). [guia=noticias-cadastrar.agendar] [t=92]
14. Com `Agendar notícia` ligado, escolha o dia e a hora em `Publicar em`. [guia=noticias-cadastrar.publicar-em]
15. Se quiser a notícia em evidência na página inicial, ligue `Destaque na janela principal`. [guia=noticias-cadastrar.destaque] [t=94]
16. Clique em `Adicionar`. Ao corrigir uma notícia que já existe, o botão se chama `Salvar`. [guia=noticias-cadastrar.salvar] [t=98]
17. Para achar uma notícia na lista, escreva no campo `Buscar por título...`. [guia=noticias.buscar] [t=25]
18. Para filtrar, use a caixa `Todos os status`. [guia=noticias.status] [t=28]
19. Para filtrar por data, use as duas datas de publicação (de e até). [guia=noticias.periodo]
20. Para corrigir uma notícia, clique no ícone de lápis (`Editar`) na linha da notícia que você quer. [guia=noticias.editar]
21. Confira a coluna `Status`: `Rascunho` (guardada, fora do ar), `Publicado` (no ar) ou `agendado` (vai entrar no ar na data marcada). [guia=noticias.status-linha]

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
