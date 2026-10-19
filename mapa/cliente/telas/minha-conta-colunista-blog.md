# /minha-conta/colunista-blog (Artigos)

Arquivo: `src/app/minha-conta/colunista-blog/page.tsx`

## quem acessa
- colunista (rota inicial e menu "Artigos", `perfil-da-area.ts:40,43`).
- empresa que já tem o módulo (menu mostra Artigos só a quem já tem: `MODULOS_FORA_DA_EMPRESA`, `secoes-do-cliente.ts:246`). A rota não tem trava de URL para empresa (`rotaPermitida` libera tudo).
- pessoa física e jornalista: redirecionados.
- nota: a rota do módulo é `colunista-blog`, a chave do produto é `blog` e o rótulo é "Artigos" (`secoes-do-cliente.ts:53-56`).

## gate de módulo/plano
- `useDireitoBlog` decide pela seção `blog` de `minhas-secoes` mais o plano gratuito da seção, via `acessoDaSecao` (`useDireitoBlog.ts:29,97-100`, regra do dono 2026-10-06: se há plano gratuito, entra com ele).
- ativa (ou gratuito valendo): lista, "Novo artigo", editar.
- aguardando pagamento: só o painel de pagamento (`page.tsx:146-148`).
- nunca contratou: só os planos (`PainelSemPlano`, `:152-157`).
- vencida/cancelada: planos de novo, MAS a lista de artigos continua visível e apagável; editar e criar ficam escondidos (D-118, `:159-168,218`).
- artigo só é público com plano ativo; sem ele o site dá 404 (comentário `:210`).

## o que faz
- lista os artigos do autor com contadores "No ar" e "Agendados", faixa do plano com limite semanal.

## ações e campos
- Novo artigo, Ver no site (só publicado com plano ativo), Editar (só com plano ativo), Excluir (`confirm`: "Excluir este artigo? Esta ação não pode ser desfeita.").
- link "Meus dados" para o perfil de colunista (só para empresa, `:238-243`).

## APIs
- `GET /…/blog` do colunista e dos artigos via `blog-cliente-api` (`buscarMeuColunista`, `buscarMeusArtigos`, `apagarMeuArtigo`); URLs não lidas.
- `GET /{portal}/comercial/minhas-secoes/` e `comercial/planos/?secao=blog` (hook).

## estados de erro/vazio
- carregando; 403 "Sua conta não tem acesso à área do colunista neste portal."; erro do servidor traduzido por `formatErroBlog`, ou "Não foi possível carregar seus dados…" (`:76-87`).
- vazio: "Você ainda não escreveu nenhum artigo." (sem botão de criar no corpo; só no cabeçalho).

## possíveis problemas para leigo
- fato: quem não tem plano só vê planos; botão "Editar" some em vez de aparecer desabilitado com explicação (`:218`). Leigo com plano vencido pode não entender onde editou.
- fato: o perfil do colunista (foto, cargo, bio) mora em "Meus dados", não aqui; o texto de remissão só aparece a empresa, o colunista depende do menu (`:238`).
- fato: `formatarData` usa `new Date(iso)` (`:37-42`), padrão que o projeto evita para datas; aqui é com timestamp, então hipótese de erro pequeno (fuso).
- fato: o rótulo "Artigos" e a URL `colunista-blog` divergem, mas o usuário só vê "Artigos".
- hipótese: se o limite semanal não vier do servidor, a faixa do plano não aparece e o colunista só descobre o limite ao falhar (`useDireitoBlog.ts:56-62`).

## posições na tela (print de 2026-10-16, 1280x900)
- print: [minha-conta-colunista-blog.png](../prints/minha-conta-colunista-blog.png) · versão celular: [minha-conta-colunista-blog-390.png](../prints/minha-conta-colunista-blog-390.png) · dados brutos: [json](../prints/json/minha-conta-colunista-blog.json)
- aberta em `/minha-conta/colunista-blog`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "Artigos" — conteúdo, no topo da página, ao centro (382,46,175,39)
- [menu/links] "9 itens: Início · Guia Comercial · Vagas de Emprego · Banners Publicitários · Classificados · Minha empresa · Planos e assinaturas · Segurança · Sair" — menu, na parte de cima, à esquerda (lista de 9 itens em coluna) (14,96,227,786)
- [título] "Escolha um plano" — conteúdo, faixa larga na parte de cima (307,163,922,23)
