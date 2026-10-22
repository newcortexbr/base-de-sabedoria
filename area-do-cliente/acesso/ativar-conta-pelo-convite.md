---
id: ac-ativar-conta-pelo-convite
titulo: "ativar a conta e criar a senha pelo e-mail de boas-vindas"
publico:
  - cliente
modulo: acesso
aba: nao-se-aplica
tipo_problema:
  - ativar conta
  - primeiro acesso
  - criar senha
  - e-mail de boas-vindas
  - convite
  - link de ativação
  - link não é mais válido
  - link expirou
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo

criar a sua senha no primeiro acesso, usando o link que chega no e-mail de boas-vindas depois que o pagamento é confirmado ou a New Córtex libera o seu acesso.

## pré-requisitos

- Ter recebido o e-mail com o assunto "Bem-vindo! Crie sua senha da Área do Cliente New Córtex".
- Abrir o link dentro do prazo. O padrão é 7 dias depois do envio.

## passos

1. No e-mail de boas-vindas, clique no link para criar a senha. Abre a página `Criar sua senha` (`/ativar`). [guia=fora]
2. No campo `Nova senha`, escreva a senha que você vai usar. Ela precisa ter o mínimo de caracteres mostrado embaixo do campo (o padrão é 10). [guia=fora]
3. No campo `Confirmar senha`, escreva a mesma senha de novo. [guia=fora]
4. Clique em `Criar senha e entrar`. [guia=fora]
5. Quando aparecer "Senha criada com sucesso", clique em `Ir para o login`. [guia=fora]
6. Entre com o seu e-mail e a senha nova (veja `ac-entrar-na-area-do-cliente`). [guia=fora]

## resultado

a sua conta fica ativa e você já consegue entrar na Área do Cliente.

## desvios

- "As senhas não coincidem.": os dois campos estão diferentes. Escreva a mesma senha nos dois.
- "A senha precisa ter ao menos N caracteres.": a senha está curta. Use uma maior.
- "Este link não é mais válido": o link passou do prazo, já foi usado ou foi trocado por um convite mais novo. A tela é a mesma nos três casos. Cada link funciona uma vez só, e pedir um novo convite cancela o anterior. Clique em `Solicitar novo convite` (veja `ac-pedir-novo-convite`).
- "Não foi possível criar sua senha. Tente novamente.": falha de conexão. Tente de novo.
- Apesar do nome do botão, depois de criar a senha você ainda precisa entrar pela tela de login.

## quando pedir ajuda

peça ajuda se o e-mail de boas-vindas não chegou mesmo depois de pedir um novo convite e conferir o spam (veja `ac-email-nao-chega`), ou se o novo convite também diz que o link não é válido.

## fontes

- `src/ui/emails/templates.ts:79` — assunto do e-mail de boas-vindas.
- `src/app/(public)/ativar/page.tsx:39` — título "Criar sua senha".
- `src/app/(public)/ativar/AtivarForm.tsx:33` — "As senhas não coincidem."; `:57` — "Este link não é mais válido" e `Solicitar novo convite`; `:75` — "Senha criada com sucesso" e `Ir para o login`; `:97`, `:125`, `:129` — campos e dica de tamanho; `:150` — botão `Criar senha e entrar`.
- `src/app/(public)/api/auth/criar-senha/route.ts:19` — mensagens de link inválido, expirado e senha curta.
- `src/ui/auth/definir-senha.ts:40` — link expirado e link inválido mostram a mesma tela "Este link não é mais válido"; `:50` — "A senha precisa ter ao menos N caracteres.".
- `src/app/(public)/ativar/AtivarForm.tsx:44` — "Não foi possível criar sua senha. Tente novamente.".
- `src/domain/acesso/types.ts:91` — validade do convite (padrão 7 dias); `:121` — tamanho mínimo da senha (padrão 10). Ambos são configuráveis.
- `src/domain/acesso/types.ts:66` — emitir um link novo invalida o anterior.

## lacunas

tela não validada no navegador. O prazo de 7 dias e o mínimo de 10 caracteres são os padrões do código; o ambiente real pode ter outros valores. O remetente do e-mail não aparece no código (vem de configuração).
