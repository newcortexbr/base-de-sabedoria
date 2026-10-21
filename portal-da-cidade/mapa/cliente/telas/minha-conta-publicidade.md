# /minha-conta/publicidade (Banners Publicitários)

Arquivo: `src/app/minha-conta/publicidade/page.tsx`

## quem acessa
- empresa. Outros perfis: redirecionados.

## gate de módulo/plano
- cada banner é compra avulsa (posição + período), não assinatura; pode haver vários ativos ao mesmo tempo (`page.tsx:3-5`).
- `MinhasSecoesView` do backend ignora seções de tipo banner: `publicidade` nunca vem em `secoes` (`secoes-do-cliente.ts:32-41`). Mesmo assim a barra lateral sempre inclui "Banners Publicitários" (`modulosDisponiveis` adiciona `publicidade`, `:303`). Rótulo fixo "Banners Publicitários" (`:311`).
- `planos/publicidade` redireciona para esta tela (módulo por item).

## o que faz
- lista os banners comprados, com estado, vigência e contadores (No ar, Em análise, Aguardando pagamento).

## ações e campos
- Novo banner, Editar ou "Continuar pagamento", "Parar renovação" (com `confirm()`), "Corrigir e reenviar" (reprovado).
- filtro: Todos, No ar, Vencidos, Em análise, A pagar, Reprovados.
- notas: pendente, aguardando pagamento, renovação cancelada.

## APIs
- `GET /{portal}/comercial/meus-banners/` (`cliente-api.ts:2778`).
- `POST /{portal}/comercial/meus-banners/{id}/cancelar/` (`:2860`).

## estados de erro/vazio
- carregando; 403 "Sua conta não tem acesso à área de clientes deste portal."; outros "Não foi possível carregar seus banners agora…" (`page.tsx:92-98`).
- vazio: "Você ainda não anunciou em nenhuma posição." ou "Nenhum banner com esta situação." (sem botão de criar no corpo).
- erro de cancelar por item.

## possíveis problemas para leigo
- fato: "Parar renovação" diz que o banner "não é cobrado de novo", mas a tela de compra mostra pagamento único por período; o termo "renovação" pode confundir (`page.tsx:109-110`). Hipótese: depende de o servidor renovar automaticamente (não verificado).
- fato: o texto do `confirm()` avisa "O período atual não é reembolsado." (`:110`). Uso de `confirm` nativo.
- fato: não há excluir banner; só parar renovação.
- fato: a "Faixa do plano" mostra "Por banner" sem preços (`precos: []`, `:160`).
- fato: o vencimento do banner depende de `data_fim` e do relógio do navegador (`hojeIso`, `:125`).

## posições na tela (print de 2026-10-16, 1280x900)
- print: [minha-conta-publicidade.png](../prints/minha-conta-publicidade.png) · versão celular: [minha-conta-publicidade-390.png](../prints/minha-conta-publicidade-390.png) · dados brutos: [json](../prints/json/minha-conta-publicidade.json)
- aberta em `/minha-conta/publicidade`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "Banners Publicitários" — conteúdo, no topo da página, ao centro (382,46,261,39)
- [link] "Novo banner" — conteúdo, no topo da página, à direita (1081,55,141,44)
- [menu/links] "9 itens: Início · Guia Comercial · Vagas de Emprego · Banners Publicitários · Classificados · Minha empresa · Planos e assinaturas · Segurança · Sair" — menu, na parte de cima, à esquerda (lista de 9 itens em coluna) (14,96,227,786)
- [link] "Ver preços" — conteúdo, na parte de cima, à direita (1129,170,101,44)
- [botão] "Todos" — conteúdo, no meio da tela, ao centro (755,424,63,36)
- [botão] "No ar" — conteúdo, no meio da tela, ao centro (824,424,58,36)
- [botão] "Vencidos" — conteúdo, no meio da tela, à direita (887,424,81,36)
- [botão] "Em análise" — conteúdo, no meio da tela, à direita (974,424,91,36)
- [botão] "A pagar" — conteúdo, no meio da tela, à direita (1072,424,72,36)
- [botão] "Reprovados" — conteúdo, no meio da tela, à direita (1150,424,98,36)
- [título] "Meus banners" — conteúdo, no meio da tela, à esquerda (288,429,121,27)

## o que você vê
Lista dos banners que você comprou. Cada banner é uma compra separada (lugar no site + período).
- No ar / Em análise / Aguardando pagamento: contagem dos seus banners.
- Filtros: Todos, No ar, Vencidos, Em análise, A pagar, Reprovados.
- Novo banner: compra um banner.
- Editar ou Continuar pagamento (quando ainda não pago).
- Parar renovação: o banner não é cobrado de novo no próximo período (pede confirmação).
- Corrigir e reenviar: no banner reprovado.
