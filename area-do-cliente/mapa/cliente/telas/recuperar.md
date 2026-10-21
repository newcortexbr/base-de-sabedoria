# /recuperar — Esqueci minha senha

Arquivo: `src/app/(public)/recuperar/page.tsx`

## quem acessa
- qualquer pessoa sem sessão.

## o que faz
- pede o e-mail da conta e envia um link para criar senha nova.

## estados de erro/vazio
- depois de enviar, aparece sempre a mesma confirmação genérica, exista a conta ou não (não revela se o e-mail está cadastrado).

## possíveis problemas para leigo
- se o e-mail não chegar: conferir spam e se é o mesmo e-mail da contratação; o link expira e só o último enviado vale.

## posições na tela (print de 2026-10-21, 1440x900, página inteira)
- print: [recuperar.png](../prints/recuperar.png) (18 KB) · dados brutos: [json](../prints/json/recuperar.json)
- aberta em `/recuperar` com dados FICTÍCIOS de exemplo (cliente "Mariana Souza Exemplo", Portal da Cidade em Linhares/ES, Colatina/ES e Aracruz/ES)
- coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "Esqueci minha senha" — conteúdo, no meio da tela, à direita (977,323,366,31)
- [campo] "E-mail" — conteúdo, no meio da tela, à direita (977,469,366,48)
- [botão] "Enviar link de recuperação" — conteúdo, no meio da tela, à direita (977,537,366,46)
- [título] "Recuperar o acesso" — conteúdo, no fim da página, à esquerda (56,600,508,129)

## o que você vê
Tela "Esqueci minha senha": a pessoa informa o e-mail da conta para receber um link e criar uma senha nova.
- Título à esquerda: "Recuperar o acesso".
- Campo "E-mail".
- "Enviar link de recuperação": manda o e-mail com o link.
- Texto: "Enviaremos um link para você criar uma nova senha."
