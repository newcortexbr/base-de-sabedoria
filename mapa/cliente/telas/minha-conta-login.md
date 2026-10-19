# /minha-conta/login

Arquivo: `src/app/minha-conta/login/page.tsx`

## quem acessa
- qualquer pessoa sem sessão. É a única rota fora da casca (`layout.tsx:25`).
- serve a todos os perfis: empresa, colunista, pessoa física e jornalista. Depois de entrar, `ClienteAuthContext.tsx:120` leva cada perfil à rota inicial dele (`perfil-da-area.ts:95-97`).
- e-mail que existe mas não é de cliente (ex.: administrador) recebe a mesma frase de senha inválida (`mensagem-de-falha.ts:29-31`).

## gate de módulo/plano
- nenhum.

## o que faz
- 4 etapas na mesma tela: entrar, pedir código por e-mail, digitar código de 6 dígitos, criar senha nova (`page.tsx:15`).
- lado esquerdo mostra logo/nome do portal e seis cartões de áreas (Empresa, Vagas, Anúncios, Eventos, Artigos, Banners).

## ações e campos
- entrar: e-mail, senha (com olho para mostrar), "Esqueci minha senha", "Voltar para o portal".
- recuperar: e-mail, 6 caixinhas de código (aceita colar), "Reenviar código", "Trocar e-mail".
- senha nova: nova + repetir, mínimo 8 caracteres (`page.tsx:279`, `SENHA_MINIMA`), "Salvar e entrar" já loga.

## APIs
- `POST /token/` via `login` do contexto (`cliente-api.ts:694`).
- `createPortalApi(slug).comercial.pedirCodigoDeSenha` e `.redefinirSenha` (`page.tsx:103,147`).
- `guia.config()` só para logo/nome do portal; falha é silenciosa (`page.tsx:68-74`).

## estados de erro/vazio
- 401/credencial: "E-mail ou senha inválidos."; 429: bloqueio por tempo; 5xx: "O servidor não respondeu…"; rede: "Não foi possível falar com o servidor…" (`mensagem-de-falha.ts`).
- `?sessao=expirada` mostra "Sua sessão expirou. Entre de novo." (`page.tsx:62-64`).
- recuperação: 429 "Muitas tentativas"; 400 mostra erro do campo; resto "O sistema está indisponível…" (`page.tsx:28-43`).
- se o login após trocar senha falha, volta à etapa entrar com "Senha trocada. Entre com a senha nova." (`page.tsx:155-160`).

## possíveis problemas para leigo
- fato: o código só é validado no último passo. Se estiver errado, a pessoa já digitou a senha nova antes de saber; o código manda voltar à etapa do código (`page.tsx:150`), mas a senha digitada não é limpa. Hipótese: irritante, não bloqueia.
- fato: "Esqueci minha senha" só serve a quem tem senha. Sem tela de cadastro aqui (só link "Voltar para o portal"): quem não tem conta não vê como criar (`page.tsx:232`). Hipótese: o cadastro é feito em `/anuncie`, não indicado nesta tela.
- fato: o e-mail digitado na recuperação não é validado como existente (mensagem "Se ... tiver cadastro", `page.tsx:256`). Intencional por segurança, mas o leigo pode esperar algo que não chega. Sem aviso de olhar o spam.
- fato: o código vale 15 minutos (`page.tsx:256`).

## posições na tela (print de 2026-10-16, 1280x900)
- print: [minha-conta-login.png](../prints/minha-conta-login.png) · versão celular: [minha-conta-login-390.png](../prints/minha-conta-login-390.png) · dados brutos: [json](../prints/json/minha-conta-login.json)
- aberta em `/minha-conta/login`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "Entrar na sua conta" — conteúdo, na parte de cima, à direita (799,246,354,39)
- [título] "Bem-vindo de volta. Sua cidade está esperando." — conteúdo, na parte de cima, à esquerda (56,269,560,88)
- [campo] "E-mail" — conteúdo, na parte de cima, à direita, logo abaixo de “Entrar na sua conta” (799,352,354,53)
- [campo] "Senha" — conteúdo, no meio da tela, à direita, logo abaixo de “E-mail” (799,444,354,53)
- [botão] "Mostrar senha" — conteúdo, no meio da tela, à direita, logo abaixo de “E-mail” (1115,455,30,30)
- [botão] "Esqueci minha senha" — conteúdo, no meio da tela, à direita, logo abaixo de “Senha” (1015,508,138,20)
- [botão] "Entrar" — conteúdo, no meio da tela, à direita, logo abaixo de “Esqueci minha senha” (799,549,354,54)
- [link] "Voltar para o portal" — conteúdo, no meio da tela, à direita (799,649,354,50)
