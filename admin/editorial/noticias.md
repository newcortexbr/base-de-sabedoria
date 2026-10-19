---
id: editorial-noticias
titulo: notícias: cadastrar e controlar a publicação
publico:
  - administrador do portal
  - jornalista
modulo: notícias
categoria: conteúdo
aba: Notícias
tipo_problema: publicação
status: rascunho-documental
revisado_em: 2026-10-15
validacao: docs-e-codigo
videos:
  - gAa2NdnitZU
---

## objetivo
cadastrar e acompanhar notícias no portal, entendendo a diferença entre rascunho, publicação agendada e conteúdo no ar.

## pré-requisitos/permissões
O administrador do portal gerencia conteúdo pelo painel. Jornalista não entra em `/painel`: usa a área do cliente em `/minha-conta` e só tem as rotas de Notícias autorizadas ao seu papel. Ter um menu visível não concede permissão; o servidor decide o acesso.

## passos
1. No painel, abra `Notícias` (`/painel/noticias`).
2. Para iniciar conteúdo, use `Cadastrar notícia` (`/painel/noticias/cadastrar`). Preencha os campos apresentados e salve/publica conforme o botão disponível.
3. Na listagem, use busca, status, categoria, subcategoria e intervalo de publicação para localizar conteúdo.
4. Use `Editar` para corrigir matéria. O estado da lista é a referência: `rascunho`, `agendado` ou `publicado`.

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
