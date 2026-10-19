# /minha-conta/noticias/[id]/editar

Arquivo: `src/app/minha-conta/noticias/[id]/editar/page.tsx`

## quem acessa
- jornalista dono da notícia. Mesma regra de `/minha-conta/noticias` (ver `minha-conta-noticias.md`).
- login exigido (`layout.tsx`).

## gate de módulo/plano
- nenhum gate de plano. A posse é conferida pelo servidor: 404 vira "Esta notícia não existe ou não é uma das suas. Você só edita as notícias que escreveu." (`page.tsx:26-27`).

## o que faz
- carrega a notícia pelo id da URL e mostra o mesmo formulário da criação, preenchido (`FormularioDoJornalista` com `noticia`).

## ações e campos
- iguais a `minha-conta-noticias-nova.md`; botão "Salvar" (em vez de "Adicionar") e volta para a lista.
- cabeçalho: "Editar notícia", subtítulo é o título da notícia; botão "Voltar".
- `id` da URL vira `Number(id)` sem validar (`page.tsx:22`).

## APIs
- `GET /painel/{portal}/noticias/{id}/` (`noticias-jornalista-api.ts:80`).
- `PATCH /painel/{portal}/noticias/{id}/` ao salvar (`:84`).
- `revalidarNoticias` com o slug antigo e o novo.

## estados de erro/vazio
- carregando "Carregando…".
- 404: mensagem acima, com link "Voltar para minhas notícias".
- outros erros: "Não foi possível carregar esta notícia agora. Tente novamente em instantes." (`:28`).
- erro ao salvar: no formulário (`formatApiError`).

## possíveis problemas para leigo
- fato: id inválido na URL (`/noticias/abc/editar`) vira `NaN`; não há tratamento explícito (`:22`). Hipótese: cai no erro genérico de carga.
- fato: o 404 mistura "não existe" e "não é sua" na mesma frase (de propósito, `:27`).
- fato: mudar o título gera novo endereço da página e a URL antiga deixa de servir a matéria (o código invalida as duas, `NoticiaFormBase.tsx:363-367`). A tela não avisa o jornalista. Hipótese: links já compartilhados podem quebrar.
- fato: mesmo conjunto de campos técnicos (SEO, endereço) para leigo.
- fato: sem "excluir" nesta tela; só na lista.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [minha-conta-noticias-id-editar.png](../prints/minha-conta-noticias-id-editar.png) · versão celular: [minha-conta-noticias-id-editar-390.png](../prints/minha-conta-noticias-id-editar-390.png) · dados brutos: [json](../prints/json/minha-conta-noticias-id-editar.json)
- aberta em `/minha-conta/noticias/1/editar` com dados do banco de teste; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "Editar notícia" — conteúdo, no topo da página, ao centro (382,46,338,39)
- [link] "Voltar" — conteúdo, no topo da página, à direita (1127,55,95,44)
- [menu/links] "9 itens: Início · Guia Comercial · Vagas de Emprego · Banners Publicitários · Classificados · Minha empresa · Planos e assinaturas · Segurança · Sair" — menu, na parte de cima, à esquerda (lista de 9 itens em coluna) (14,96,227,786)
- [aviso] "Não foi possível carregar esta notícia agora. Tente novamente em insta" — conteúdo, faixa larga na parte de cima (288,144,960,59)
- [link] "Voltar para minhas notícias" — conteúdo, na parte de cima, à direita (820,163,182,21)
