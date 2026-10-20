---
id: editorial-noticias-editar
titulo: "editar uma notícia"
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
aqui você corrige uma notícia que já foi cadastrada. Você muda o texto, a foto ou a situação e salva.

## pré-requisitos/permissões
O administrador usa o painel. O jornalista não usa o painel: entra pela área do cliente e só vê o que o papel dele permite.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Notícias` e depois em `Listar Notícias`. [guia=menu:/painel/noticias]
2. Para corrigir uma notícia, clique no ícone de lápis (`Editar`) na linha da notícia que você quer. [guia=noticias.editar]
3. Mude o que precisar no formulário. [guia=noticias-cadastrar.titulo]
4. Clique em `Salvar`. [guia=noticias-cadastrar.salvar]

## resultado
A notícia fica com as mudanças. Confira na coluna `Status` da lista se ela está como você quer.

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
