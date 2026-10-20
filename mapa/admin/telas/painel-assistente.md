# /painel/assistente (Assistente de IA)

Arquivo: `app/painel/assistente/page.tsx`

## o que você vê
Mostra o que os visitantes perguntam ao Assistente de IA do site e deixa ligá-lo ou desligá-lo.
- Mostrar o Assistente de IA: liga ou desliga o assistente no site; salva na hora.
- período 7, 30 ou 90 dias: escolhe o intervalo dos números.
- indicadores: total de perguntas, quantas tiveram resposta, quantas ficaram sem resultado e a média por dia.
- seções, categorias, palavras e cidades: o que mais é procurado.
- perguntas sem resultado: o que o visitante procurou e o site não tinha; bom para ver o que falta no portal.
- últimas perguntas: as mais recentes.
- também aparece quantas mensagens impróprias o assistente recusou.
- Ainda não há perguntas neste período: ninguém perguntou no intervalo escolhido.

## rota e gate
- `/painel/assistente`. client. gate `PainelGuard` (`app/painel/layout.tsx:38`); item "Assistente de IA" na seção Sistema da `Sidebar.tsx:239`. não está em `MODULO_POR_PREFIXO_DE_ROTA`, sem gate de módulo.
- a tela trata 403 do resumo como "Acesso restrito a administradores do portal." (`:110-111`), sem botão de repetir.

## o que faz
- mostra o que os visitantes perguntam ao assistente e deixa ligar/desligar o assistente no site.

## ações e campos
- seletor de período 7/30/90 dias (`:144-160`).
- caixa "Mostrar o Assistente de IA": salva na hora, desfaz se o servidor recusar (`alternar`, `:116-132`). depois chama `revalidarLayout` (`:13-16`) para o site refletir.
- botão "Tentar de novo" no erro do resumo.
- só leitura: indicadores (perguntas, com resultado, sem resultado, média por dia), barras por seção, categorias, palavras, cidades, "perguntas sem resultado" e "últimas perguntas".

## apis
- `adminApi.assistente.resumo(dias)`: GET `/painel/<slug>/assistente/resumo/?dias=` (`lib/admin-api.ts:756`).
- `adminApi.guia.config.get()` e `.atualizar({assistente_ia_ativo})`: o campo vive na config do Guia (`:346`).
- Server Action `revalidarLayout` (`../configuracoes/layout/actions`).

## estados
- carregando (config e resumo separados); erro da config em `role=alert` (`:170`); erro do resumo com retry (`:198-206`); vazio "Ainda não há perguntas neste período." (`:207-208`); rodapé "180 dias" e contagem de mensagens impróprias recusadas.

## possíveis problemas
- fato: `ligado` começa `true` (`:87`) e só muda após a config carregar; se `assistente_ia_ativo` vier ausente, `!== false` conta como ligado (`:98`).
- fato: o toggle grava na config do Guia; se o módulo Guia estiver desligado a rota pode recusar (hipótese, não verifiquei o backend).
- fato: `revalidarSite` só registra erro no console (`:15`); se falhar, o site público pode demorar a refletir e o admin vê "Salvo!".
- fato: se vazio mas houver só mensagens impróprias, mostra os blocos com listas vazias (`:207`), sem texto de vazio por bloco.
- fato: a dica "pico" some quando `por_dia` está vazio (`notaDoPico`, `:283`), ok.

## equivalente em minha-conta
- nenhum. o cliente (lojista) não vê o assistente nem seus números; só o admin do portal.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-assistente.png](../prints/painel-assistente.png) · dados brutos: [json](../prints/json/painel-assistente.json)
- aberta em `/painel/assistente`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [menu] "23 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Artigos · Orçamentos Online · A Voz do Povo · Melhores da Cidade · Banners Publicitários …" — menu lateral, no topo da página, à esquerda (lista de 23 itens em coluna) (10,18,255,871)
- [título] "Assistente de IA" — conteúdo, no topo da página, ao centro (354,36,248,30)
- [botão] "7 dias" — conteúdo, no topo da página, à direita (992,40,65,44)
- [botão] "30 dias" — conteúdo, no topo da página, à direita (1056,40,72,44)
- [botão] "90 dias" — conteúdo, no topo da página, à direita (1129,40,72,44)
- [título] "Assistente de IA no site" — conteúdo, faixa larga na parte de cima (375,127,805,26)
- [checkbox] "Mostrar o Assistente de IAO visitante conversa e recebe sugestões com " — conteúdo, na parte de cima, à esquerda, logo abaixo de “Assistente de IA no site” (375,204,20,20)
- [título] "Onde mais procuram" — conteúdo, no meio da tela, ao centro (375,429,375,21)
- [título] "Categorias mais pedidas" — conteúdo, no meio da tela, à direita (806,429,375,21)
- [título] "Palavras mais buscadas" — conteúdo, no meio da tela, ao centro (375,676,375,21)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [título] "Perguntas sem resultadoas mais recentes" — conteúdo, faixa larga no meio da tela (375,824,805,21)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
- [título] "Últimas perguntasas mais recentes" — conteúdo, faixa larga mais abaixo (rolando a página) (375,1079,805,21)
- [selo] "não achou" — conteúdo, mais abaixo (rolando a página), ao centro (484,1121,71,21)
- [selo] "não achou" — conteúdo, mais abaixo (rolando a página), ao centro (548,1161,71,21)
- [selo] "não achou" — conteúdo, no fim da página, ao centro (494,1200,71,21)
