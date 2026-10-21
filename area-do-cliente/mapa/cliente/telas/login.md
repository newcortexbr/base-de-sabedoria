# /login — Entrar

Arquivo: `src/app/(public)/login/page.tsx`

## quem acessa
- qualquer pessoa sem sessão. Quem já está logado é levado para dentro.

## o que faz
- tela de entrada da Central de Negócios: e-mail e senha cadastrados pela New Córtex.

## estados de erro/vazio
- senha errada ou e-mail inexistente: mensagem genérica de erro (não diz qual dos dois está errado).
- muitas tentativas seguidas: aviso de "Muitas tentativas" e espera antes de tentar de novo.

## possíveis problemas para leigo
- não existe "Criar conta": o acesso é criado pela New Córtex depois da contratação; quem nunca ativou precisa do e-mail de convite (ficha ativar) ou pedir novo convite (ficha reenviar-convite).

## posições na tela (print de 2026-10-21, 1440x900, página inteira)
- print: [login.png](../prints/login.png) (22 KB) · dados brutos: [json](../prints/json/login.json)
- aberta em `/login` com dados FICTÍCIOS de exemplo (cliente "Mariana Souza Exemplo", Portal da Cidade em Linhares/ES, Colatina/ES e Aracruz/ES)
- coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "Entrar na sua conta" — conteúdo, na parte de cima, à direita (977,217,366,31)
- [campo] "E-mail" — conteúdo, no meio da tela, à direita (977,340,366,48)
- [campo] "Senha" — conteúdo, no meio da tela, à direita (977,436,366,48)
- [botão] "Mostrar senha" — conteúdo, no meio da tela, à direita (1295,438,44,44)
- [link] "Esqueci minha senha" — conteúdo, no meio da tela, à direita (1196,504,147,44)
- [botão] "Entrar" — conteúdo, no meio da tela, à direita (977,568,366,46)
- [título] "Central de Negócios" — conteúdo, no fim da página, à esquerda (56,600,508,129)

## o que você vê
Tela de login da Área do Cliente (Central de Negócios): a pessoa entra com e-mail e senha.
- À esquerda, a apresentação "Central de Negócios": licenças por território, instalação, treinamento e suporte no mesmo lugar.
- "Entrar na sua conta": campos "E-mail" e "Senha".
- "Esqueci minha senha": link para receber um e-mail e criar senha nova.
- "Entrar": botão azul que faz o login.
- Rodapé do quadro: "O acesso é criado pela New Córtex após a contratação. Não há cadastro aberto."
