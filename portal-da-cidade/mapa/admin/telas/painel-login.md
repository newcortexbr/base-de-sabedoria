# /painel/login

Arquivos: `app/painel/login/page.tsx`, `login/mensagem-de-falha.ts`, `contexts/AuthContext.tsx:70-94`

## rota e gate
- `/painel/login`. pública: está em `ROTAS_SEM_LOGIN` (`app/painel/rotas-sem-login.ts`), então o guard não redireciona e não mostra a Sidebar.
- o painel é só do administrador: papéis fora de admin/master/sem_portal recebem erro "Esta conta não tem acesso ao painel administrativo." e o token nem é guardado (`AuthContext.tsx:72`, `lib/painel-permissoes.ts:31-36`).

## o que faz
- login por e-mail e senha, ou `Entrar com a Área do Cliente` (SSO, popup). quais portas aparecem vem do servidor pelo domínio (`GET /auth/login-modo/`, `page.tsx:16-19,127-134`): no domínio do franqueado só `Entrar com a Área do Cliente` (texto "Entre com a sua conta da Área do Cliente."); na vitrine, e-mail e senha (e o SSO se o servidor liberar). se a consulta falha, mostra as duas.

## campos e ações
- `E-mail`, `Senha` (com botão mostrar/ocultar), caixa `Manter conectado` (marcada por padrão), botão `Efetuar Login`, botão `Esqueceu a senha?`, botão `Entrar com a Área do Cliente` (só se `modo.sso`, `page.tsx:346`), link "Entre em contato com o administrador." (`mailto:contato@newcortex.ia.br`).
- depois do login: `master` vai a `/master`; `sem_portal` ou sem `portal_slug` vai a `/painel/sem-acesso`; os demais a `/painel` (`AuthContext.tsx:78-93`).

## apis
- `adminApi.auth.login(email, password)` (via `AuthContext.login`); SSO: GET `${API_URL}/auth/sso/iniciar/` por `iniciarLoginSsoPopup` (`lib/sso-popup`).

## estados de erro
- 429: "Muitas tentativas seguidas…"; 5xx: "O servidor não respondeu como esperado…"; outros status: "E-mail ou senha inválidos…"; sem status (rede): "Não foi possível falar com o servidor…" (`mensagem-de-falha.ts:34-48`).
- erro do SSO aparece abaixo do botão (`ssoErro`).

## possíveis problemas
- fato: o botão "Esqueceu a senha?" não tem `onClick` nem link (`page.tsx:315-318`); clicar não faz nada. nenhuma rota de recuperação neste arquivo.
- fato: o checkbox "Manter conectado" guarda `lembrar` mas o valor nunca é usado: `login(email, password)` não o recebe (`page.tsx:165`); o token sempre vai para `localStorage`.
- fato: a tela importa fonte do Google Fonts por `@import` (`page.tsx:191`), requisição externa a cada carga do login.
- fato: `API_URL` com `!` (`page.tsx:9`); variável ausente quebra o build/clique.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-login.png](../prints/painel-login.png) · dados brutos: [json](../prints/json/painel-login.json)
- aberta em `/painel/login`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "Bem-vindo ao Painel Administrativo" — conteúdo, na parte de cima, à esquerda (64,301,540,86)
- [campo] "seu@email.com.br" — conteúdo, na parte de cima, à direita (810,342,365,53)
- [campo] "Digite sua senha" — conteúdo, no meio da tela, à direita, logo abaixo de “seu@email.com.br” (810,445,316,53)
- [botão] "Esqueceu a senha?" — conteúdo, no meio da tela, à direita, logo abaixo de “Digite sua senha” (1045,513,131,21)
- [botão] "Efetuar Login" — conteúdo, no meio da tela, à direita, logo abaixo de “Esqueceu a senha?” (776,556,400,56)
- [link] "Entre em contato com o administrador." — conteúdo, no meio da tela, à direita (927,641,212,41)

## o que você vê
Entrada do painel do portal, com e-mail e senha.
- `E-mail` e `Senha`: os dados da sua conta de administrador. O olho ao lado da senha mostra ou esconde o que você digitou.
- `Efetuar Login`: entra no painel.
- `Manter conectado`: hoje não muda nada; a sessão fica salva no navegador de qualquer jeito.
- `Esqueceu a senha?`: hoje este botão não faz nada ao clicar.
- `Entrar com a Área do Cliente`: aparece conforme o domínio (no domínio do portal do franqueado é a única forma de entrar); abre uma janelinha para entrar com a conta da Área do Cliente.
- se a conta não estiver ligada a nenhum portal, você vai para uma tela que explica isso.
