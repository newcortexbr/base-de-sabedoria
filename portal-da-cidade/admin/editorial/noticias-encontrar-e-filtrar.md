---
id: editorial-noticias-encontrar-e-filtrar
titulo: "encontrar e filtrar notícias na lista"
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
aqui você acha uma notícia pelo título, pela situação ou pela data. Também vê se ela está guardada, no ar ou agendada.

## pré-requisitos/permissões
O administrador usa o painel. O jornalista não usa o painel: entra pela área do cliente e só vê o que o papel dele permite.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Notícias` e depois em `Listar Notícias`. [guia=menu:/painel/noticias]
2. Para achar uma notícia na lista, escreva no campo `Buscar por título...`. [guia=noticias.buscar]
3. Para filtrar, use a caixa `Todos os status`. [guia=noticias.status]
4. Para filtrar por data, use as duas datas de publicação (de e até). [guia=noticias.periodo]
5. Confira a coluna `Status`: `Rascunho` (guardada, fora do ar), `Publicado` (no ar) ou `agendado` (vai entrar no ar na data marcada). [guia=noticias.status-linha]

## resultado
A lista mostra só as notícias que combinam com a busca e o filtro que você escolheu.

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
