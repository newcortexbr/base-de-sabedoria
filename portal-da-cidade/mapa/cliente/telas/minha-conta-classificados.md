# /minha-conta/classificados

Arquivo: `src/app/minha-conta/classificados/page.tsx`

## quem acessa
- pessoa física (rota inicial dela, `perfil-da-area.ts:51`) e empresa (menu "Classificados"). Colunista e jornalista: redirecionados.

## gate de módulo/plano
- a tela SEMPRE abre: todo cliente tem Grátis (até 3 anúncios, comentário `page.tsx:3-8`). O servidor decide no POST.
- limite de ativos vem do plano ativo (`page.tsx:76-77,141-145`); sem plano vale o piso. "Novo anúncio" desabilitado no limite: "Limite do plano atingido: pause um anúncio ou mude de plano." (`:230`).
- as chaves do produto: o app backend é `anuncios`; o módulo é `classificados`.

## o que faz
- lista anúncios do cliente com contadores (no ar, em análise, vendidos), filtro por situação, faixa de plano, `BoasVindasDoPerfil`.

## ações e campos
- botão `Novo anúncio` (no topo); em cada anúncio, botões só de ícone (o nome aparece ao passar o mouse/leitor de tela): `Ver <título> no site`, `Editar <título>`, `Pausar`/`Reativar <título>`, `Marcar <título> como vendido`, `Excluir <título>`. Detalhe das ações: Novo anúncio, editar, pausar/reativar, marcar como vendido (`confirm`: "Marcar … como vendido? O anúncio sai do site."), excluir (`confirm`: Excluir o anúncio "…" permanentemente?), ver no site (só quando visível de fato: ativo, com foto, no prazo, `page.tsx:49-52`).
- filtros: Todos, Ativo, Pausado, Aguardando aprovação, Reprovado, Vendido, Encerrado.
- notas por item: sem foto, em análise, vendido, motivo de reprovação com "Corrigir e reenviar".

## APIs
- `GET /{portal}/comercial/meu-anunciante/` (`cliente-api.ts:2169`).
- `GET/PATCH/DELETE /painel/{portal}/classificados/…` (`:2328-2387`), com token do cliente.
- `GET /{portal}/comercial/planos/?secao=classificados`.
- `revalidarListasDeClassificados('cliente_token')`.

## estados de erro/vazio
- carregando; 403 "Sua conta não tem acesso à área de clientes deste portal."; genérico "Não foi possível carregar seus anúncios agora…".
- vazio: "Publique seu primeiro anúncio — Leva dois minutos e é grátis: foto, preço e seu WhatsApp." com botão (`page.tsx:262-271`).
- truncado: "Mostrando os N anúncios mais recentes de M…".

## possíveis problemas para leigo
- fato: "Marcar como vendido" e "Pausar" são só ícones com texto de leitor de tela; o leigo precisa adivinhar pelos ícones (`page.tsx:330-356`). Hipótese: sem rótulo visível.
- fato: anúncio ativo mas sem foto fica oculto no site; só uma nota explica (`page.tsx:360-367`). O selo continua "Ativo". Contradição aparente.
- fato: "Vendidos — desde que você entrou" é texto fixo (`page.tsx:256`) e a contagem depende de a lista não estar truncada.
- fato: sem botão de reativar para "Encerrado" e "Vendido" (só ativo/pausado, `:334-342`).
- fato: dois confirmações via `confirm()` nativo.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [minha-conta-classificados.png](../prints/minha-conta-classificados.png) · versão celular: [minha-conta-classificados-390.png](../prints/minha-conta-classificados-390.png) · dados brutos: [json](../prints/json/minha-conta-classificados.json)
- aberta em `/minha-conta/classificados`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "Classificados" — conteúdo, no topo da página, ao centro (382,46,254,39)
- [link] "Novo anúncio" — conteúdo, no topo da página, à direita (1075,55,147,44)
- [menu/links] "9 itens: Início · Guia Comercial · Vagas de Emprego · Banners Publicitários · Classificados · Minha empresa · Planos e assinaturas · Segurança · Sair" — menu, na parte de cima, à esquerda (lista de 9 itens em coluna) (14,96,227,786)
- [link] "Sair do grátis" — conteúdo, na parte de cima, à direita (1095,170,134,44)
- [botão] "Todos1" — conteúdo, no meio da tela, ao centro (518,383,74,36)
- [botão] "Ativo1" — conteúdo, no meio da tela, ao centro (598,383,68,36)
- [botão] "Pausado0" — conteúdo, no meio da tela, ao centro (672,383,89,36)
- [botão] "Aguardando aprovação0" — conteúdo, no meio da tela, à direita (767,383,177,36)
- [botão] "Reprovado0" — conteúdo, no meio da tela, à direita (949,383,102,36)
- [botão] "Vendido0" — conteúdo, no meio da tela, à direita (1058,383,86,36)
- [botão] "Encerrado0" — conteúdo, no meio da tela, à direita (1149,383,99,36)
- [título] "Meus anúncios" — conteúdo, no meio da tela, à esquerda (288,388,130,27)
- [título] "Sofa QA EditadoAtivo" — conteúdo, no meio da tela, ao centro (403,456,592,23)
- [link] "Ver Sofa QA Editado no site" — conteúdo, no meio da tela, à direita (1009,458,40,40)
- [link] "Editar Sofa QA Editado" — conteúdo, no meio da tela, à direita (1055,458,40,40)
- [botão] "Pausar Sofa QA Editado" — conteúdo, no meio da tela, à direita, logo abaixo de “Vendido0” (1101,458,40,40)
- [botão] "Marcar Sofa QA Editado como vendido" — conteúdo, no meio da tela, à direita, logo abaixo de “Encerrado0” (1147,458,40,40)
- [botão] "Excluir Sofa QA Editado" — conteúdo, no meio da tela, à direita, logo abaixo de “Encerrado0” (1193,458,40,40)

## o que você vê
Lista dos seus anúncios de classificados (coisas à venda), com a situação de cada um.
- Anúncios no ar / Em análise / Vendidos: contagem dos seus anúncios em cada situação (o primeiro mostra "de N do seu plano").
- Faixa do plano: quantos anúncios ativos seu plano permite. Todo cliente tem o plano Grátis.
- Novo anúncio: fica desligado quando você chega ao limite do plano; pause um anúncio ou mude de plano (aparece o link `Ver planos de Classificados`).
- Filtros: Todos, Ativo, Pausado, Aguardando aprovação (o portal ainda vai revisar), Reprovado, Vendido, Encerrado.
- Pausar / Reativar: tira o anúncio do site por um tempo e depois devolve.
- Marcar como vendido: o anúncio sai do site.
- Excluir: apaga o anúncio (pede confirmação).
- Ver no site: só aparece quando o anúncio está de fato visível (ativo, com foto e dentro do prazo).
- Reprovado: mostra o motivo e o link `Corrigir e reenviar`.
- Sem anúncios: "Publique seu primeiro anúncio", com o botão `Criar meu primeiro anúncio`.
- Anúncio sem foto: nota "Sem foto, este anúncio não aparece no site", com o link `Adicionar uma foto`.
