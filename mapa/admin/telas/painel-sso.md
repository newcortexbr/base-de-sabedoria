# /painel/sso

Arquivos: `app/painel/sso/page.tsx`, `sso/mensagens.ts`

## rota e gate
- `/painel/sso`. pública (em `ROTAS_SEM_LOGIN`): é a volta do SSO, chega sem token (`rotas-sem-login.ts:1-15`).

## o que faz
- recebe `?ticket=` (sucesso) ou `?erro=<codigo>` do callback do backend, troca o ticket pelo par de tokens e entra no painel.

## fluxo
- limpa a URL assim que a troca começa, para o ticket não ficar no histórico (`page.tsx:101`).
- ref `trocaIniciada` evita dupla troca no StrictMode (`:75-79`).
- se o token é de papel recusado no painel: nada é gravado e mostra erro (`:107`).
- grava `painel_token`/`painel_refresh` no `localStorage`; se for janelinha avisa a janela principal, senão faz `window.location.href = '/painel'` (`:121-123`).

## apis
- `adminApi.auth.trocarTicketSso(ticket)` (`lib/admin-api.ts`, perto de `:743`).

## estados
- carregando: spinner "Confirmando seu acesso pela Área do Cliente…".
- erro: "Não foi possível entrar" + mensagem em português + botão "Entrar com e-mail e senha". códigos: `estado_invalido`, `code_ausente`, `idp_indisponivel`, `idp_resposta_invalida`, `conta_nao_vinculavel`; desconhecido cai em `MENSAGEM_PADRAO`.
- sem ticket e sem erro: cai direto no estado de erro com a mensagem padrão.

## possíveis problemas
- fato: `window.location.href = '/painel'` não passa por `/painel/sem-acesso`; conta sem `portal_slug` entra no `/painel` e o guard então a redireciona (diferente do login normal, `AuthContext.tsx:82`). o efeito final é o mesmo, com um salto a mais (hipótese de comportamento).
- fato: o token do SSO `master` não passa pela rota `/master`; vai para `/painel` (login normal manda para `/master`, `AuthContext.tsx:78`). divergência entre os dois caminhos de login.
- fato: erro de rede ao trocar o ticket aparece com o texto "Verifique sua conexão", mas o ticket já foi consumido se o servidor o apagou antes da resposta (hipótese).

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-sso.png](../prints/painel-sso.png) · dados brutos: [json](../prints/json/painel-sso.json)
- aberta em `/painel/sso`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "Não foi possível entrar" — conteúdo, no meio da tela, ao centro (448,380,384,28)
- [link] "Entrar com e-mail e senha" — conteúdo, no meio da tela, ao centro (533,480,214,40)
