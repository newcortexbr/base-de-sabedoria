# /minha-conta/vagas

Arquivo: `src/app/minha-conta/vagas/page.tsx`

## quem acessa
- empresa (menu "Vagas de Emprego", via `rotaDaSecao('vagas')`, `secoes-do-cliente.ts:46`).
- colunista, pessoa física e jornalista: redirecionados (fora das listas).

## gate de módulo/plano
- a tela SEMPRE abre: todo cliente tem direito ao plano Grátis de Vagas, sem contratação (`page.tsx:4-10`). Quem decide se cabe uma vaga nova é o servidor (400 no POST).
- limite de vagas ativas vem do plano ATIVO (`secao.contratacao.status === 'ativa'`); sem ele vale o piso Grátis (`page.tsx:82-87,159-163`). Planos vêm de `/comercial/planos/` (best-effort; sem eles o limite fica desconhecido, não inventado).
- botão "Nova vaga" desabilitado quando `ativas >= limite` com a dica "Limite do plano atingido: encerre uma vaga ou mude de plano." (`page.tsx:218-222`).

## o que faz
- lista todas as vagas do cliente (todas as páginas, até um teto), com contadores "Vagas no ar" e "Em análise", filtro por situação e faixa do plano.

## ações e campos
- botão `Nova vaga` (topo); em cada vaga, botões só de ícone `Editar <título>`, `Pausar`/`Reativar <título>`, `Excluir <título>`. Detalhe: Nova vaga, editar (lápis), pausar/reativar (só ativa/pausada), excluir com `confirm()` do navegador (`page.tsx:185`).
- filtro: Todas, Ativa, Pausada, Aguardando aprovação, Reprovada, Encerrada.
- vaga reprovada mostra motivo e link "Corrigir e reenviar".
- vaga pendente: "Sua vaga está aguardando aprovação do dono do portal. Assim que for aprovada, ela entra no ar." (`page.tsx:330`).
- recarrega ao voltar à aba enquanto houver vaga pendente (`useRecarregarAoVoltar`).

## APIs
- `GET /{portal}/comercial/meu-contratante-vagas/` (`cliente-api.ts:1880`).
- `GET /painel/{portal}/vagas/` paginado (`buscarMinhasVagas`) e `PATCH`/`DELETE /painel/{portal}/vagas/{id}/` (`:2024-2070`). A rota é a do painel, com o token do cliente.
- `GET /{portal}/comercial/planos/?secao=vagas`.
- `revalidarListasDeVagas('cliente_token')` (Server Action) após pausar/excluir.

## estados de erro/vazio
- carregando "Carregando…"; 403 "Sua conta não tem acesso à área de clientes deste portal."; outros "Não foi possível carregar suas vagas agora…"; perfil removido por `mensagemDePerfilRemovido` (`page.tsx:129-139`).
- vazio: "Você ainda não publicou nenhuma vaga. Comece pela primeira — é grátis." (`page.tsx:253`). Filtro vazio: "Nenhuma vaga com este status.".
- erro de ação (pausar/excluir) em faixa de erro.
- lista truncada: "Mostrando as N vagas mais recentes de M…" (`page.tsx:340`).

## possíveis problemas para leigo
- fato: usa `confirm()` do navegador para excluir (`page.tsx:185`), diferente de modais próprios no resto da área.
- fato: ao falhar a exclusão, o item reaparece (otimismo revertido, `page.tsx:188-194`); a mensagem de erro fica no alto, talvez fora da vista. Hipótese.
- fato: pausar não pede confirmação e a vaga sai do portal imediatamente.
- fato: vaga "Encerrada" não tem ação de reabrir (só ativa/pausada têm pausar/reativar, `page.tsx:310`); leigo não sabe como reativar vaga que expirou. Hipótese: precisa criar nova.
- fato: aviso de limite só aparece quando o limite é conhecido; se os planos falham, o botão "Nova vaga" fica ativo e o erro só vem no envio (`page.tsx:161-163`).
- fato: o texto "aprovação do dono do portal" usa termo interno; leigo pode não entender quem é.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [minha-conta-vagas.png](../prints/minha-conta-vagas.png) · versão celular: [minha-conta-vagas-390.png](../prints/minha-conta-vagas-390.png) · dados brutos: [json](../prints/json/minha-conta-vagas.json)
- aberta em `/minha-conta/vagas`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "Vagas de Emprego" — conteúdo, no topo da página, ao centro (382,46,236,39)
- [link] "Nova vaga" — conteúdo, no topo da página, à direita (1096,55,126,44)
- [menu/links] "9 itens: Início · Guia Comercial · Vagas de Emprego · Banners Publicitários · Classificados · Minha empresa · Planos e assinaturas · Segurança · Sair" — menu, na parte de cima, à esquerda (lista de 9 itens em coluna) (14,96,227,786)
- [link] "Sair do grátis" — conteúdo, na parte de cima, à direita (1095,170,134,44)
- [botão] "Todas1" — conteúdo, no meio da tela, ao centro (613,383,73,36)
- [botão] "Ativa1" — conteúdo, no meio da tela, ao centro (692,383,68,36)
- [botão] "Pausada0" — conteúdo, no meio da tela, ao centro (765,383,88,36)
- [botão] "Aguardando aprovação0" — conteúdo, no meio da tela, à direita (860,383,177,36)
- [botão] "Reprovada0" — conteúdo, no meio da tela, à direita (1042,383,102,36)
- [botão] "Encerrada0" — conteúdo, no meio da tela, à direita (1150,383,98,36)
- [título] "Minhas vagas" — conteúdo, no meio da tela, à esquerda (288,388,118,27)
- [título] "Auxiliar QA EditadoAtiva" — conteúdo, no meio da tela, ao centro (403,446,684,23)
- [link] "Editar Auxiliar QA Editado" — conteúdo, no meio da tela, à direita (1101,467,40,40)
- [botão] "Pausar Auxiliar QA Editado" — conteúdo, no meio da tela, à direita, logo abaixo de “Encerrada0” (1147,467,40,40)
- [botão] "Excluir Auxiliar QA Editado" — conteúdo, no meio da tela, à direita, logo abaixo de “Encerrada0” (1193,467,40,40)

## o que você vê
Lista das suas vagas de emprego, com a situação de cada uma.
- Vagas no ar / Em análise: quantas vagas em cada situação.
- Faixa do plano: quantas vagas ativas o seu plano permite. Todo cliente tem o plano Grátis.
- Nova vaga: fica desligada no limite do plano; encerre uma vaga ou mude de plano.
- Filtros: Todas, Ativa, Pausada, Aguardando aprovação, Reprovada, Encerrada.
- Lápis: editar. Pausar/Reativar: tira ou devolve a vaga ao site. Excluir: apaga (pede confirmação).
- Aguardando aprovação: o portal vai revisar antes de ir ao ar.
- Reprovada: mostra o motivo e "Corrigir e reenviar".
