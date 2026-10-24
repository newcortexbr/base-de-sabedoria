# /minha-conta/seguranca

Arquivo: `src/app/minha-conta/seguranca/page.tsx`

## quem acessa
- todos os perfis: empresa (alcança tudo), colunista, pessoa física e jornalista têm a rota na lista (`perfil-da-area.ts:41,52,63`, menu em 46/57/67).
- exige login (guarda do `layout.tsx`).

## gate de módulo/plano
- nenhum.

## o que faz
- troca a senha da conta. Jornalista usa outro endpoint e é deslogado ao final.

## ações e campos
- `Senha atual`, `Nova senha` (ajuda `AJUDA_DA_SENHA`), `Confirmar nova senha`, botão `Mostrar senhas` (vira `Ocultar senhas`), botão `Salvar nova senha` (`page.tsx:109-130`).
- marcas do guia interativo (`data-guia`) desta tela: `seguranca:senha-atual`, `seguranca:nova-senha`, `seguranca:confirmacao-senha`, `seguranca.mostrar-senhas`, `seguranca.salvar` (mistura `:` e `.` no padrão).
- painel lateral explica: outros aparelhos serão desconectados; e-mail de aviso (só não-jornalista).
- jornalista após trocar: tela "Entrar de novo" que chama `logout` (`page.tsx:92-98`).

## APIs
- cliente: `POST /{portal}/comercial/minha-senha/` (`trocarMinhaSenha`, `cliente-api.ts:745-750`); devolve novo par de tokens, a sessão continua.
- jornalista: `POST /auth/alterar-senha/` (`cliente-api.ts:779-780`).

## estados de erro/vazio
- senhas diferentes: "As senhas não conferem." (`page.tsx:37`).
- sem slug de portal: "Sua sessão expirou. Entre de novo para trocar a senha." (`page.tsx:42`).
- 429 mostra a frase do servidor; 400 mostra erro por campo (`page.tsx:60-75`).
- sucesso: "Senha alterada. Você continua conectado neste aparelho."

## possíveis problemas para leigo
- fato: a checagem "não conferem" só ocorre no envio, não enquanto digita; `noValidate` no form (`page.tsx:100`). Hipótese: leigo só descobre ao clicar.
- fato: a senha nova é validada só pelo servidor; a regra aparece como texto de ajuda, não como contador (`page.tsx:112`).
- fato: a página diz que "Você recebe um e-mail avisando", mas o e-mail local é simulado e a entrega depende de timer da fila (regra do projeto). Hipótese: pode demorar.
- fato: texto "continua conectado neste aparelho" vs "outros aparelhos serão desconectados" aparece em lugares diferentes; pode confundir (hipótese).

## posições na tela (print de 2026-10-16, 1280x900)
- print: [minha-conta-seguranca.png](../prints/minha-conta-seguranca.png) · versão celular: [minha-conta-seguranca-390.png](../prints/minha-conta-seguranca-390.png) · dados brutos: [json](../prints/json/minha-conta-seguranca.json)
- aberta em `/minha-conta/seguranca`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "Segurança" — conteúdo, no topo da página, ao centro (382,46,179,39)
- [menu/links] "9 itens: Início · Guia Comercial · Vagas de Emprego · Banners Publicitários · Classificados · Minha empresa · Planos e assinaturas · Segurança · Sair" — menu, na parte de cima, à esquerda (lista de 9 itens em coluna) (14,96,227,786)
- [título] "Senha" — conteúdo, na parte de cima, ao centro (362,165,549,23)
- [título] "Ao trocar a senha" — menu lateral, na parte de cima, à direita (1022,175,207,23)
- [campo] "Senha atual" — conteúdo, na parte de cima, ao centro, logo abaixo de “Senha” (307,247,604,46)
- [campo] "Nova senha" — conteúdo, na parte de cima, ao centro, logo abaixo de “Senha atual” (307,332,604,46)
- [campo] "Confirmar nova senha" — conteúdo, no meio da tela, ao centro, logo abaixo de “Nova senha” (307,439,604,46)
- [botão] "Mostrar senhas" — conteúdo, no meio da tela, à esquerda, logo abaixo de “Confirmar nova senha” (307,499,117,36)
- [botão] "Salvar nova senha" — conteúdo, no meio da tela, ao centro, logo abaixo de “Mostrar senhas” (307,549,604,48)

## o que você vê
Tela para trocar a senha da sua conta.
- Senha atual, nova senha e confirmar nova senha.
- Mostrar senhas / Ocultar senhas: mostra ou esconde o que foi digitado.
- Salvar nova senha: os outros aparelhos são desconectados; você continua conectado neste.
- Você recebe um e-mail avisando da troca (jornalista não recebe e precisa entrar de novo depois: aparece "Senha trocada. Por segurança, entre de novo com a senha nova." e o botão `Entrar de novo`).
