# /recuperar?token — Criar nova senha (link do e-mail)

Arquivo: `src/app/(public)/recuperar/page.tsx`

## quem acessa
- quem abriu o link de recuperação recebido por e-mail (`/recuperar?token=...`).

## o que faz
- define a senha nova a partir do link de recuperação.

## estados de erro/vazio
- link vencido, já usado ou substituído por um mais novo: erro ao salvar; pedir outro link em "Esqueci minha senha".
- senhas diferentes ou com menos de 10 caracteres: aviso no campo.

## possíveis problemas para leigo
- só o link mais recente funciona: pedir duas vezes invalida o primeiro.

## posições na tela (print de 2026-10-21, 1440x900, página inteira)
- print: [recuperar-nova-senha.png](../prints/recuperar-nova-senha.png) (20 KB) · dados brutos: [json](../prints/json/recuperar-nova-senha.json)
- aberta em `/recuperar?token=exemplo` com dados FICTÍCIOS de exemplo (cliente "Mariana Souza Exemplo", Portal da Cidade em Linhares/ES, Colatina/ES e Aracruz/ES)
- coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "Criar nova senha" — conteúdo, na parte de cima, à direita (977,260,366,31)
- [campo] "Nova senha" — conteúdo, no meio da tela, à direita (977,407,366,48)
- [botão] "Mostrar senha" — conteúdo, no meio da tela, à direita (1295,409,44,44)
- [campo] "Confirmar senha" — conteúdo, no meio da tela, à direita (977,532,366,48)
- [título] "Recuperar o acesso" — conteúdo, no fim da página, à esquerda (56,600,508,129)
- [botão] "Salvar nova senha" — conteúdo, no fim da página, à direita (977,600,366,46)

## o que você vê
Tela "Criar nova senha", aberta pelo link do e-mail de recuperação.
- Título à esquerda: "Recuperar o acesso".
- "Nova senha" (com o aviso "Mínimo de 10 caracteres.") e "Confirmar senha".
- "Salvar nova senha": grava a senha; depois é só entrar com ela.
