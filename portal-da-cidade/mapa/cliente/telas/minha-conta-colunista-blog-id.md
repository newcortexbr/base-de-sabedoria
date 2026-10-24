# /minha-conta/colunista-blog/[id]

Arquivos: `colunista-blog/[id]/page.tsx`, `colunista-blog/ArtigoForm.tsx`

## quem acessa
- colunista ou empresa autora do artigo. Outros perfis: redirecionados.

## gate de módulo/plano
- editar exige plano ATIVO (D-118): sem ele o formulário não monta, mesmo com URL salva (`[id]/page.tsx:12-18,82-93`).
- aguardando pagamento: painel de pagamento. Sem plano: mensagem "Editar exige um plano de Artigos ativo. Você ainda pode ver e apagar seus artigos na lista." mais `PainelSemPlano` (`:84-91`).

## o que faz
- edita artigo existente (rascunho, agendado ou publicado).

## ações e campos
- os mesmos de `minha-conta-colunista-blog-novo.md`, com os valores carregados (`ArtigoForm artigo=`), exceto: artigo já publicado ou agendado não tem o campo `Agendar publicação` e o botão vira `Salvar alterações` (artigo ainda não publicado segue com `Publicar`/`Agendar`); botão `Voltar`; janela final "Alterações salvas" (`ArtigoForm.tsx:355,446-462`).

## APIs
- `buscarMeuArtigo(portalSlug, id)` de `blog-cliente-api` (URL não lida). Só é chamada se há plano ativo e `id` numérico (`:33`).

## estados de erro/vazio
- 404: "Artigo não encontrado."; outros: mensagem do servidor ou "Não foi possível carregar o artigo. Tente novamente em instantes." (`:43-48`).

## possíveis problemas para leigo
- fato: `id` inválido (`NaN`) não busca nada e a tela fica sem mensagem de erro: `carregando` fica falso, `erro` vazio, `artigo` nulo, nada é renderizado além do cabeçalho (`:33-37,95`). Página em branco para link quebrado. Hipótese baseada na leitura do fluxo; não executada.
- fato: o texto sem plano é claro e oferece ir à lista.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [minha-conta-colunista-blog-id.png](../prints/minha-conta-colunista-blog-id.png) · versão celular: [minha-conta-colunista-blog-id-390.png](../prints/minha-conta-colunista-blog-id-390.png) · dados brutos: [json](../prints/json/minha-conta-colunista-blog-id.json)
- aberta em `/minha-conta/colunista-blog/1` com dados do banco de teste; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "Editar artigo" — topo, no topo da página, ao centro (432,16,106,28)
- [link] "lista" — conteúdo, na parte de cima, à direita (928,95,32,16)
- [menu/links] "9 itens: Início · Guia Comercial · Vagas de Emprego · Banners Publicitários · Classificados · Minha empresa · Planos e assinaturas · Segurança · Sair" — menu, na parte de cima, à esquerda (lista de 9 itens em coluna) (14,96,227,786)
- [título] "Escolha um plano" — conteúdo, na parte de cima, ao centro (419,148,698,23)

## o que você vê
Formulário para mudar um artigo que você já escreveu.
- Os mesmos campos de "Novo artigo", já preenchidos (título, texto, capa, SEO). Artigo já no ar: o botão é `Salvar alterações` e não há agendamento.
- Editar exige plano de Artigos ativo; sem ele aparece "Editar exige um plano de Artigos ativo", mas você ainda pode ver e apagar artigos na lista.
- "Artigo não encontrado": o artigo não existe mais ou não é seu.
