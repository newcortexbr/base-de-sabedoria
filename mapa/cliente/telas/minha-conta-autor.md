# /minha-conta/autor

Arquivo: `src/app/minha-conta/autor/page.tsx`

## quem acessa
- jornalista (menu "Autor", `perfil-da-area.ts:65`). Colunista e pessoa física são redirecionados (rota fora da lista deles).
- empresa "alcança tudo" na guarda de rota (`perfil-da-area.ts:114`), mas a tela chama a API do jornalista; hipótese: um cliente empresa abrindo a URL à mão receberia erro do servidor, sem tratamento específico visto aqui.

## gate de módulo/plano
- nenhum no front. O servidor decide por papel de jornalista (a rota `/painel/<portal>/noticias/autor/` é a de `buscarNomeDoAutor`, `cliente-api.ts:718`).

## o que faz
- edita a "assinatura" do jornalista, o que o leitor vê em cada notícia.

## ações e campos
- usa o componente compartilhado `AutorFormBase` (painel) com `variante="area"` (`page.tsx:26-31`). Os campos vêm de lá (não lidos nesta rodada: hipótese de nome, bio, foto etc.).
- ao salvar chama `recarregar` da casca para atualizar o nome no menu.

## APIs
- `noticiasJornalistaApi.autor` (`@/lib/noticias-jornalista-api`) com o token da área (`getToken()`).

## estados de erro/vazio
- tratados dentro de `AutorFormBase` (não lido).

## possíveis problemas para leigo
- hipótese: o título "Autor" pode não dizer nada a um jornalista leigo; o subtítulo explica ("Sua assinatura…").
- fato: não há validação do perfil na própria página; depende da guarda do shell.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [minha-conta-autor.png](../prints/minha-conta-autor.png) · versão celular: [minha-conta-autor-390.png](../prints/minha-conta-autor-390.png) · dados brutos: [json](../prints/json/minha-conta-autor.json)
- aberta em `/minha-conta/autor`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "Autor" — conteúdo, no topo da página, ao centro (382,46,333,39)
- [menu/links] "9 itens: Início · Guia Comercial · Vagas de Emprego · Banners Publicitários · Classificados · Minha empresa · Planos e assinaturas · Segurança · Sair" — menu, na parte de cima, à esquerda (lista de 9 itens em coluna) (14,96,227,786)
- [aviso] "Não foi possível salvar: Acesso restrito a administradores do portal o" — conteúdo, na parte de cima, ao centro (307,165,604,61)
- [título] "Como aparece na notícia" — menu lateral, na parte de cima, à direita (1022,175,207,23)
- [selo] "Sem foto" — conteúdo, na parte de cima, à esquerda (307,240,64,64)
- [envio de arquivo] "Foto do autor" — conteúdo, na parte de cima, ao centro, logo abaixo de “Não foi possível salvar: Acesso res” (383,262,265,20)
- [campo] "Nome * (0/150)" — conteúdo, na parte de cima, ao centro, logo abaixo de “Sem foto” (307,343,295,46)
- [campo] "Cargo" — conteúdo, na parte de cima, ao centro, logo abaixo de “Foto do autor” (616,343,295,46)
- [campo de texto longo] "Bio (0/500)" — conteúdo, no meio da tela, ao centro, logo abaixo de “Nome * (0/150)” (307,427,604,94)
- [campo] "Site" — conteúdo, no meio da tela, ao centro, logo abaixo de “Bio (0/500)” (307,560,295,46)
- [campo] "Instagram" — conteúdo, no meio da tela, ao centro, logo abaixo de “Bio (0/500)” (616,560,295,46)
- [campo] "Facebook" — conteúdo, no meio da tela, ao centro, logo abaixo de “Site” (307,644,295,46)
- [campo] "LinkedIn" — conteúdo, no meio da tela, ao centro, logo abaixo de “Instagram” (616,644,295,46)
- [campo] "WhatsApp" — conteúdo, no meio da tela, ao centro, logo abaixo de “Facebook” (307,729,295,46)
- [campo] "E-mail público" — conteúdo, no meio da tela, ao centro, logo abaixo de “LinkedIn” (616,729,295,46)
- [botão] "Salvar perfil" — conteúdo, no fim da página, à esquerda, logo abaixo de “WhatsApp” (307,834,131,48)
