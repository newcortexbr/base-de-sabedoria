# /minha-conta/noticias/nova

Arquivo: `src/app/minha-conta/noticias/nova/page.tsx`

## quem acessa
- jornalista (mesma regra de `/minha-conta/noticias`; ver `minha-conta-noticias.md`). Colunista e pessoa física: fora do perfil (`perfil-da-area.ts:63`: a base `/minha-conta/noticias` cobre também as subrotas, `dentroDe`).
- login exigido (`layout.tsx`).

## gate de módulo/plano
- nenhum gate de plano. Quem limita é o servidor (API do painel com o token do cliente). Não verifiquei o comportamento para empresa.

## o que faz
- formulário de nova notícia. Reaproveita o `NoticiaFormBase` do painel do dono, "os mesmos campos" (`page.tsx:13`), via `FormularioDoJornalista.tsx`.

## ações e campos
- Título (obrigatório), Subtítulo, Título curto, imagem de capa com Legenda e Créditos, Chamada (até 500), Conteúdo (editor, obrigatório), Tags, Fonte, Categoria e Subcategoria (com opção de criar na hora, se a API do jornalista permitir), Status (Rascunho, Publicado, Arquivado), "Agendar notícia" (+ data "Publicar em"), campos de SEO (título e descrição) e "Endereço da página" (`NoticiaFormBase.tsx:415-713`).
- botões `Adicionar` e `Cancelar` no formulário; ao salvar volta para `/minha-conta/noticias`.
- autosave de rascunho no navegador, com aviso "Rascunho guardado neste navegador" e opção de restaurar (`:309-345,398-401`).
- botão "Voltar" no cabeçalho.

## APIs
- `POST /painel/{portal}/noticias/` (multipart com progresso da capa) — `noticias-jornalista-api.ts:82`.
- categorias e subcategorias, upload de imagem do editor (`api.uploadImagem`), `revalidarNoticias` (best-effort).
- autor: `GET/PATCH /painel/{portal}/noticias/autor/` (só em `/minha-conta/autor`).

## estados de erro/vazio
- erro ao salvar: `formatApiError(err)` na própria tela (`NoticiaFormBase.tsx:378`).
- imagem grande: `mensagemArquivoGrande` (`:251`).
- sem estado de carregamento próprio na página.

## possíveis problemas para leigo
- fato: o subtítulo diz "Os mesmos campos que o dono do portal usa no painel" (`page.tsx:13`). Para o jornalista leigo isso é muito formulário (SEO, "Endereço da página", "Título curto"). Hipótese: confunde.
- fato: o status padrão do formulário não foi conferido; "Publicado" no formulário publica na hora ao salvar. Hipótese: risco de publicar sem querer.
- fato: o rascunho do navegador é local (não vai ao servidor) — outro aparelho não o vê (`NoticiaFormBase.tsx:591`).
- fato: erro vem do servidor em português só se a API devolver; erros de rede ficam genéricos. Hipótese.
- fato: ao salvar com sucesso volta direto para a lista, sem aviso de "salvo".

## posições na tela (print de 2026-10-16, 1280x900)
- print: [minha-conta-noticias-nova.png](../prints/minha-conta-noticias-nova.png) · versão celular: [minha-conta-noticias-nova-390.png](../prints/minha-conta-noticias-nova-390.png) · dados brutos: [json](../prints/json/minha-conta-noticias-nova.json)
- aberta em `/minha-conta/noticias/nova`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "Nova notícia" — conteúdo, no topo da página, ao centro (382,46,338,39)
- [link] "Voltar" — conteúdo, no topo da página, à direita (1127,55,95,44)
- [menu/links] "9 itens: Início · Guia Comercial · Vagas de Emprego · Banners Publicitários · Classificados · Minha empresa · Planos e assinaturas · Segurança · Sair" — menu, na parte de cima, à esquerda (lista de 9 itens em coluna) (14,96,227,786)
- [título] "Conteúdo" — conteúdo, na parte de cima, ao centro (308,166,608,20)
- [título] "Publicação" — conteúdo, na parte de cima, à direita (980,166,248,20)
- [campo] "" — conteúdo, na parte de cima, ao centro, logo abaixo de “Conteúdo” (308,226,608,38)
- [botão] "Destaque na janela principal" — conteúdo, na parte de cima, à direita (980,282,229,20)
- [campo] "" — conteúdo, na parte de cima, ao centro (308,304,296,38)
- [campo] "" — conteúdo, na parte de cima, ao centro (620,304,296,38)
- [botão] "Adicionar" — conteúdo, na parte de cima, à direita, logo abaixo de “Destaque na janela principal” (980,322,158,38)
- [botão] "Cancelar" — conteúdo, na parte de cima, à direita, logo abaixo de “Destaque na janela principal” (1146,322,82,38)
- [título] "Foto de Capa" — conteúdo, no meio da tela, à direita (980,416,248,20)
- [botão] "Negrito (e outros 18 parecidos)" — conteúdo, no meio da tela, à esquerda (repetido ×19, um sob o outro) (317,546,32,32)
- [campo] "" — conteúdo, no meio da tela, à direita (980,824,248,38)
- [campo] "" — conteúdo, no meio da tela, à direita (980,898,248,38)
- [título] "SEO" — conteúdo, mais abaixo (rolando a página), à direita (980,992,248,20)
- [campo] "Digite e pressione Enter ou vírgula..." — conteúdo, mais abaixo (rolando a página), ao centro (321,1012,582,22)
- [campo] "Deixe em branco para usar o título da notícia" — conteúdo, mais abaixo (rolando a página), à direita, logo abaixo de “SEO” (980,1048,248,38)
- [campo] "" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Digite e pressione Enter ou vírgula” (308,1083,608,38)
- [campo de texto longo] "Deixe em branco para usar a chamada" — conteúdo, mais abaixo (rolando a página), à direita, logo abaixo de “Deixe em branco para usar o título ” (980,1122,248,78)
- [título] "Categorização" — conteúdo, mais abaixo (rolando a página), ao centro (308,1177,608,20)
- [campo] "Categoria" — conteúdo, no fim da página, ao centro, logo abaixo de “Categorização” (308,1237,296,38)
- [campo] "Subcategoria" — conteúdo, no fim da página, ao centro, logo abaixo de “Categorização” (620,1237,296,38)

## o que você vê
Formulário para escrever uma notícia nova.
- Título: obrigatório. Subtítulo e Título curto (versão menor do título): opcionais.
- Imagem de capa, com Legenda e Créditos (quem fez a foto).
- Chamada: resumo curto, até 500 letras.
- Conteúdo: o texto da notícia, obrigatório.
- Tags, Fonte, Categoria e Subcategoria.
- Status: Rascunho (não aparece), Publicado (no site) ou Arquivado.
- Agendar notícia: escolha "Publicar em" para entrar no ar depois.
- SEO e Endereço da página: como a notícia aparece no Google e o final do link dela.
- Rascunho guardado neste navegador: o texto é salvo sozinho no seu aparelho e pode ser recuperado.
- Adicionar: salva e volta para a lista. Cancelar: volta sem salvar.
