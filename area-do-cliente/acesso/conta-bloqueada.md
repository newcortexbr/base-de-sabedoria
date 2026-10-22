---
id: ac-conta-bloqueada
titulo: "minha conta está bloqueada: o que consigo ver e como resolver"
publico:
  - cliente
modulo: acesso
aba: Suporte
tipo_problema:
  - conta bloqueada
  - acesso não permitido
  - só vejo suporte
  - sumiu o menu
  - não vejo meus negócios
  - esta área não está disponível
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo

entender o que acontece quando a sua conta está bloqueada pela New Córtex e o caminho para resolver.

## explicação

conta bloqueada ainda consegue entrar, mas vê só duas áreas:

- `Suporte` — para falar com a equipe e resolver a situação;
- `Minha Conta` — para ver os seus dados.

Ao entrar, você cai direto em `Suporte` (`/suporte`). O menu da esquerda mostra só esses dois itens. `Início`, `Meus negócios`, os negócios e os treinamentos ficam fora do alcance. Se você abrir um desses endereços, aparece "Acesso não permitido." com o texto "Sua conta está bloqueada no momento, por isso esta área não está disponível. Você continua com acesso ao Suporte, para resolver a situação, e à Minha Conta."

Bloqueio de conta é diferente de suspensão de um negócio por pagamento atrasado: na suspensão, a conta continua normal e só aquele negócio fica parado (veja `ac-atraso-e-suspensao`).

## passos

1. Entre normalmente com e-mail e senha. [guia=fora]
2. Na tela `Suporte`, clique em `Abrir novo chamado`. [guia=suporte.novo-chamado]
3. Em `Negócio vinculado`, escolha `Nenhum: é sobre minha conta`. [guia=chamado-novo.negocio]
4. Em `Assunto`, escolha `Minha conta`. [guia=chamado-novo.assunto]
5. Preencha `Título` e `Mensagem` explicando a situação e clique em `Enviar chamado`. [guia=chamado-novo.titulo]

## resultado

o chamado chega à equipe, que responde na própria tela do chamado e por e-mail.

## desvios

- Se aparecer "Acesso não permitido." com o texto "Esta área não está disponível para a sua conta no momento.", a conta não está bloqueada; aquela página é que não existe ou não é sua. Volte ao `Início`.

## quando pedir ajuda

sempre: só a equipe da New Córtex desbloqueia a conta. O chat de suporte não desbloqueia.

## fontes

- `src/domain/acesso/auth-cliente.ts:202` — conta bloqueada consegue entrar.
- `src/domain/acesso/rbac.ts:107` — conta bloqueada cai em `/suporte`.
- `src/domain/acesso/permissions.ts:199` — rotas permitidas: `/suporte` e `/minha-conta` para bloqueada; `/inicio`, `/negocios` e `/treinamento` só para conta ativa.
- `src/ui/nav/clientMenu.ts:21` — menu reduzido a `Suporte` e `Minha Conta`.
- `src/app/(cliente)/forbidden.tsx:21` — textos de "Acesso não permitido.".
- `docs/DECISIONS.md` DEC-30.

## lacunas

o código não mostra ao cliente o motivo do bloqueio. A lista de `Negócio vinculado` vem de todas as licenças da conta, sem olhar o status, então os negócios devem aparecer também para conta bloqueada (`src/app/(cliente)/suporte/deps.ts:199`); não validado no navegador.
