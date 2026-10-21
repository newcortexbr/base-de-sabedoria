# /inicio?bloqueado — Acesso não permitido (conta bloqueada)

Arquivo: `src/app/(cliente)/forbidden.tsx`

## quem acessa
- cliente com a conta BLOCKED abrindo qualquer tela que não seja Suporte ou Minha Conta.

## o que faz
- aviso de conta bloqueada: a área não está disponível, mas Suporte e Minha Conta continuam abertos.

## estados de erro/vazio
- o menu da conta bloqueada só tem "Suporte" e "Minha Conta".

## possíveis problemas para leigo
- o cliente bloqueado deve abrir um chamado para resolver.

## posições na tela (print de 2026-10-21, 1440x900, página inteira)
- print: [acesso-bloqueado.png](../prints/acesso-bloqueado.png) (18 KB) · dados brutos: [json](../prints/json/acesso-bloqueado.json)
- aberta em `/inicio` com dados FICTÍCIOS de exemplo (cliente "Mariana Souza Exemplo", Portal da Cidade em Linhares/ES, Colatina/ES e Aracruz/ES)
- coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [menu/links] "2 itens: Minha Conta · Suporte" — menu (14,110,207,79)
- [título] "Acesso não permitido." — conteúdo, na parte de cima, ao centro (272,100,1132,38)
- [link] "Suporte" — conteúdo, na parte de cima, à esquerda (383,175,57,19)
- [link] "Minha Conta" — conteúdo, na parte de cima, ao centro (651,175,92,19)
- [link] "Acessar suporte" — menu lateral, no fim da página, à esquerda (26,726,130,24)
- [link] "CE Carlos Bloqueado Exemplo Minha conta" — menu lateral, no fim da página, à esquerda (14,775,207,63)
- [botão] "Sair" — menu lateral, no fim da página, à esquerda (14,848,207,38)

## o que você vê
Tela "Acesso não permitido." para conta bloqueada.
- Mensagem: "Sua conta está bloqueada no momento, por isso esta área não está disponível. Você continua com acesso ao Suporte, para resolver a situação, e à Minha Conta."
- O menu fica reduzido a "Suporte" e "Minha Conta".
