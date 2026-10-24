# /minha-conta/eventos

Arquivo: `src/app/minha-conta/eventos/page.tsx`

## quem acessa
- empresa (menu "Agenda de Eventos"; o título da tela também é "Agenda de Eventos"). Os outros perfis são redirecionados.

## gate de módulo/plano
- evento NÃO é assinatura: é pagamento avulso por evento (ou pacote que inclui N eventos) (`page.tsx:3-5`, `secoes-do-cliente.ts:27-30,237`). Está em `MODULOS_POR_ITEM`: `planos/eventos` redireciona para esta tela (`planos/[secao]/page.tsx:182-185`).
- a tela não é bloqueada; quem decide é o servidor na criação/pagamento.

## o que faz
- lista os eventos do cliente, com status: Publicado, Aguardando pagamento, Em análise, Reprovado, Encerrado (derivado: aprovado e fora do ar, `page.tsx:54`).
- mostra pacotes contratados ("X de Y eventos usados", renova em …).

## ações e campos
- botão `Novo evento`; em cada evento, link `Editar` ou `Continuar pagamento`. Detalhe: Novo evento, Editar ou "Continuar pagamento" (se aguardando pagamento), ver no site (se `no_ar`), "Corrigir e reenviar" (reprovado).
- filtro: Todos, Aguardando pagamento, Em análise, Publicado, Encerrados, Reprovado.
- notas: "Depois de pago, todo evento entra em análise do dono do portal antes de ir ao ar." (se o portal exige aprovação).

## APIs
- `GET /{portal}/comercial/meus-eventos/` (`cliente-api.ts:2574`).
- `GET /{portal}/comercial/planos/?secao=eventos` (só para mostrar preços na faixa "Por evento"; falha silenciosa).

## estados de erro/vazio
- carregando; 403 "Sua conta não tem acesso à área de clientes deste portal."; outros: mensagem do servidor ou "Não foi possível carregar seus eventos agora…" (`page.tsx:95-102`).
- vazio: "Você ainda não criou nenhum evento." / "Nenhum evento com este status.". Sem botão de criar dentro do vazio (só no cabeçalho).

## possíveis problemas para leigo
- fato: não há excluir/cancelar evento nesta lista (só editar e ver no site, `page.tsx:231-249`). Hipótese: leigo não sabe como remover um evento errado ou sem pagar.
- fato: três termos de estado para o mesmo caminho: "Aguardando pagamento", "Em análise", "Publicado"; "Encerrado" aparece como selo mas o filtro "Publicado" mostra só `no_ar` (`page.tsx:126-127`). Evento que terminou some do filtro "Publicado".
- fato: pacote esgotado diz que o próximo "só pode ser publicado depois do próximo pagamento" (`page.tsx:174`), sem link de compra.
- fato: sem botão de criar na mensagem de lista vazia (`page.tsx:196-201`), diferente de Classificados.
- fato: "aprovação do dono do portal" é termo interno.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [minha-conta-eventos.png](../prints/minha-conta-eventos.png) · versão celular: [minha-conta-eventos-390.png](../prints/minha-conta-eventos-390.png) · dados brutos: [json](../prints/json/minha-conta-eventos.json)
- aberta em `/minha-conta/eventos`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "Agenda de Eventos" — conteúdo, no topo da página, ao centro (382,46,236,39)
- [link] "Novo evento" — conteúdo, no topo da página, à direita (1083,55,139,44)
- [menu/links] "9 itens: Início · Guia Comercial · Vagas de Emprego · Banners Publicitários · Classificados · Minha empresa · Planos e assinaturas · Segurança · Sair" — menu, na parte de cima, à esquerda (lista de 9 itens em coluna) (14,96,227,786)
- [botão] "Todos" — conteúdo, no meio da tela, ao centro (623,424,63,36)
- [botão] "Aguardando pagamento" — conteúdo, no meio da tela, ao centro (691,424,170,36)
- [botão] "Em análise" — conteúdo, no meio da tela, à direita (867,424,91,36)
- [botão] "Publicado" — conteúdo, no meio da tela, à direita (964,424,86,36)
- [botão] "Encerrados" — conteúdo, no meio da tela, à direita (1056,424,95,36)
- [botão] "Reprovado" — conteúdo, no meio da tela, à direita (1157,424,91,36)
- [título] "Meus eventos" — conteúdo, no meio da tela, à esquerda (288,429,119,27)

## o que você vê
Lista dos seus eventos. Evento não é assinatura: cada um é pago à parte, ou entra num pacote que inclui vários eventos.
- Situação: Publicado, Aguardando pagamento, Em análise (o portal vai revisar), Reprovado, Encerrado (o evento já saiu do ar).
- Pacotes: "X de Y eventos usados" mostra quanto do pacote você já gastou e quando ele renova.
- Novo evento: cria um evento. Cartões de número: No ar, Aguardando pagamento, Em análise. Selo "Com destaque" no evento que tem destaque.
- Continuar pagamento: aparece no evento que ainda não foi pago.
- Corrigir e reenviar: no evento reprovado.
- Ver no site: só para evento no ar.
- Filtros: Todos, Aguardando pagamento, Em análise, Publicado, Encerrados, Reprovado.
