# /painel/alterar-senha

Arquivo: `portal-cidade/frontend/src/app/painel/alterar-senha/page.tsx`

## rota e gate
- `/painel/alterar-senha`. exige login; liberada também para `sem_portal` (`lib/painel-permissoes.ts:15`).

## o que faz
- o admin troca a própria senha.

## campos e ações
- senha atual, nova senha, confirmar (`page.tsx:51-86`). botão "Alterar Senha".
- validação local: confirmação igual e tamanho mínimo `SENHA_MINIMA` (`:21-28`). texto de ajuda em `AJUDA_DA_SENHA`.
- após sucesso limpa os campos e mostra "Senha alterada com sucesso." (`:33-36,89`).

## apis
- `adminApi.auth.alterarSenha(senha_atual, nova_senha)` (`lib/admin-api.ts:738`), POST `/auth/alterar-senha/` (rota global, sem slug).

## estados
- erro: mensagem do servidor (`mensagemDoServidor`), 429 vira `MUITAS_TENTATIVAS`, senão "Erro ao alterar a senha." (`:37-39`).
- botão fica "Salvando..." e desativado durante o envio.

## possíveis problemas
- fato: não há aviso de sessão/JWT depois da troca; não verifiquei se o backend invalida outros tokens (hipótese, fora do frontend).
- fato: nenhum `autoComplete` nos inputs (`:53-85`), gerenciadores de senha podem confundir os campos (menor).

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-alterar-senha.png](../prints/painel-alterar-senha.png) · dados brutos: [json](../prints/json/painel-alterar-senha.json)
- aberta em `/painel/alterar-senha`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1147,16,109,34)
- [menu] "23 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Artigos · Orçamentos Online · A Voz do Povo · Melhores da Cidade · Banners Publicitários …" — menu lateral, no topo da página, à esquerda (lista de 23 itens em coluna) (10,18,255,871)
- [título] "Alterar Senha" — topo, no topo da página, à esquerda (300,19,117,28)
- [campo] "Senha atual" — conteúdo, na parte de cima, ao centro (324,139,400,38)
- [campo] "Nova senha" — conteúdo, na parte de cima, ao centro, logo abaixo de “Senha atual” (324,217,400,38)
- [campo] "Confirmar nova senha" — conteúdo, na parte de cima, ao centro, logo abaixo de “Nova senha” (324,331,400,38)
- [botão] "Alterar Senha" — conteúdo, no meio da tela, ao centro, logo abaixo de “Confirmar nova senha” (324,385,400,44)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
