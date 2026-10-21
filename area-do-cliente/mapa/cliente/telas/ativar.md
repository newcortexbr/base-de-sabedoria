# /ativar — Ativar conta (primeiro acesso)

Arquivo: `src/app/(public)/ativar/page.tsx`

## quem acessa
- quem recebeu o e-mail de boas-vindas/convite (`/ativar?token=...`).

## o que faz
- primeiro acesso: o cliente cria a própria senha e já entra.

## estados de erro/vazio
- link vencido ou já usado: erro; pedir um novo em "Reenviar o convite" (ficha reenviar-convite).
- senhas diferentes ou com menos de 10 caracteres: aviso no campo.

## possíveis problemas para leigo
- reenviar o convite invalida o link anterior: usar sempre o e-mail mais recente.

## posições na tela (print de 2026-10-21, 1440x900, página inteira)
- print: [ativar.png](../prints/ativar.png) (21 KB) · dados brutos: [json](../prints/json/ativar.json)
- aberta em `/ativar?token=exemplo` com dados FICTÍCIOS de exemplo (cliente "Mariana Souza Exemplo", Portal da Cidade em Linhares/ES, Colatina/ES e Aracruz/ES)
- coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "Criar sua senha" — conteúdo, na parte de cima, à direita (977,260,366,31)
- [campo] "Nova senha" — conteúdo, no meio da tela, à direita (977,407,366,48)
- [botão] "Mostrar senha" — conteúdo, no meio da tela, à direita (1295,409,44,44)
- [campo] "Confirmar senha" — conteúdo, no meio da tela, à direita (977,532,366,48)
- [título] "Bem-vindo à New Córtex" — conteúdo, no fim da página, à esquerda (56,600,508,129)
- [botão] "Criar senha e entrar" — conteúdo, no fim da página, à direita (977,600,366,46)

## o que você vê
Tela de ativação da conta: o cliente novo cria a senha pelo link do e-mail de boas-vindas.
- Título à esquerda: "Bem-vindo à New Córtex".
- "Criar sua senha": campos "Nova senha" ("Mínimo de 10 caracteres.") e "Confirmar senha".
- "Criar senha e entrar": salva a senha e já abre a Área do Cliente.
