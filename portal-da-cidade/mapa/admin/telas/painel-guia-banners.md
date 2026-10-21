# /painel/guia/banners — banners publicitários (`.../banners/page.tsx`, 736 linhas)
- gate: NÃO depende do módulo `guia`: `/painel/guia/banners` está em `ROTAS_FORA_DO_MODULO` (`src/lib/painel-menu.ts`); é publicidade do portal. Posições de banner dependem do módulo de cada posição (`MODULO_POR_POSICAO`, `banners/page.tsx:91`, `posicoesOferecidas` :113).
- permissão: só papéis admin/master entram no painel (`src/lib/painel-permissoes.ts`).
- faz: lista todos os banners do portal, com filtros por página, formato, situação e busca; resolve nomes de ponto, roteiro e categoria por 3 chamadas auxiliares.
- ações: ativar/desativar (`definirAtivo`, :443), excluir com `confirm` (:453-457), ir para novo/editar. Revalida o turismo quando o banner é de ponto/roteiro (`revalidarTurismoSePreciso`).
- APIs: `guia.banners.listar|definirAtivo|excluir`, `guia.categorias.listar` (:388), buscas de pontos/roteiros.
- estados: erro principal `erroCarregamento` (:364); erro auxiliar `erroAuxiliar` (:388) só avisa; vazio "Nenhum banner encontrado" (:591).
- problemas: fato — `page.tsx` exporta valores e funções (`POSICOES_VENDAVEIS`, `posicoesOferecidas`, :30,113 etc.) importados por cadastrar/editar (`import { posicoesOferecidas } from '../page'`). Hipótese — o Next só aceita certos exports em `page.tsx`; o build atual passa, mas é acoplamento frágil. fato — a edição carrega a lista inteira e procura por id (ver editar).
- admin vs cliente: o cliente compra e edita banner em `/minha-conta/publicidade` (nova, [id]/editar) via plano. O admin cria banner manualmente (CamposDeVenda: cliente, valor, contato) sem pagamento pelo portal e vê todos.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-guia-banners.png](../prints/painel-guia-banners.png) · dados brutos: [json](../prints/json/painel-guia-banners.json)
- aberta em `/painel/guia/banners`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1147,16,109,34)
- [menu] "23 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Artigos · Orçamentos Online · A Voz do Povo · Melhores da Cidade · Banners Publicitários …" — menu lateral, no topo da página, à esquerda (lista de 23 itens em coluna) (10,18,255,871)
- [título] "Banners Publicitários" — topo, no topo da página, à esquerda (300,19,185,28)
- [título] "Banners Publicitários" — conteúdo, na parte de cima, ao centro (458,99,206,28)
- [link] "+ Novo Banner" — conteúdo, na parte de cima, à direita (967,106,131,36)
- [campo] "Buscar por título" — conteúdo, na parte de cima, ao centro, logo abaixo de “Banners Publicitários” (469,180,207,38)
- [lista de opções] "Página" — conteúdo, na parte de cima, ao centro (684,181,182,36)
- [lista de opções] "Situação" — conteúdo, na parte de cima, à direita (874,181,214,36)
- [link] "+ Cadastrar banner" — conteúdo, no meio da tela, ao centro (717,405,121,20)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)

## o que você vê
Lista todos os banners de publicidade do portal, com a situação de cada um.
- + Novo Banner: cadastra um banner na mão (sem passar pelo pagamento do site).
- Buscar por título, Página, Formato (ou "Onde no Guia"), Situação: filtram a lista; o número entre parênteses é quantos banners há em cada opção.
- cartão do banner: imagem, título, página e formato onde aparece, categoria (no topo do Guia: uma categoria ou "Todas as categorias"), ponto ou roteiro anunciado e o período "De … até …".
- No ar: aparecendo para os visitantes agora.
- Agendado: começa a aparecer na data de início.
- Vencido: o período terminou e o banner saiu do ar sozinho.
- Fora do ar: desligado no cadastro.
- Aguardando pagamento: a cobrança ainda não foi confirmada; não aparece no site.
- Pendente de aprovação: esperando aprovação; não aparece no site.
- Reprovado: não aparece; o motivo aparece embaixo.
- Desativar / Ativar: tira o banner do ar sem excluir, ou volta a exibir.
- Excluir: apaga o banner (pede confirmação).
