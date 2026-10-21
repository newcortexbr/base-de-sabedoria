# /reenviar-convite — Reenviar o convite

Arquivo: `src/app/(public)/reenviar-convite/page.tsx`

## quem acessa
- qualquer pessoa sem sessão.

## o que faz
- pede um novo link de ativação quando o convite expirou ou não chegou.

## estados de erro/vazio
- a confirmação é sempre genérica (não revela se o e-mail existe).

## possíveis problemas para leigo
- conta já ativada não precisa de convite: use "Esqueci minha senha".

## posições na tela (print de 2026-10-21, 1440x900, página inteira)
- print: [reenviar-convite.png](../prints/reenviar-convite.png) (17 KB) · dados brutos: [json](../prints/json/reenviar-convite.json)
- aberta em `/reenviar-convite` com dados FICTÍCIOS de exemplo (cliente "Mariana Souza Exemplo", Portal da Cidade em Linhares/ES, Colatina/ES e Aracruz/ES)
- coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "Solicitar novo convite" — conteúdo, no meio da tela, à direita (977,323,366,31)
- [campo] "E-mail" — conteúdo, no meio da tela, à direita (977,469,366,48)
- [botão] "Solicitar novo convite" — conteúdo, no meio da tela, à direita (977,537,366,46)
- [título] "Reenviar o convite" — conteúdo, no fim da página, à esquerda (56,600,508,129)

## o que você vê
Tela "Reenviar o convite": pede um novo link de ativação para quem ainda não criou a senha.
- Campo "E-mail".
- "Solicitar novo convite": envia um novo e-mail de ativação (o link antigo deixa de valer).
