---
id: cliente-gerenciar-vagas-empresa
titulo: acompanhar e editar as vagas da empresa
publico:
  - cliente
modulo: vagas
categoria: vagas
aba: Vagas
tipo_problema:
  - vagas-proprias
status: rascunho-documental
revisado_em: 2026-10-19
validacao: docs-e-codigo
---

## objetivo
consultar vagas próprias e seus estados na área de cliente.

## pré-requisitos
- ter vínculo de contratante e estar na área de cliente autenticada.
- este artigo não trata de acesso, cadastro de conta ou plano.

## passos

1. No menu da esquerda da sua área, na parte `O que eu publico`, clique em `Vagas de Emprego` (`/minha-conta/vagas`). Também dá para entrar pelo cartão na página `Início`. Se você ainda não tem plano, ela aparece só como um cartão em `Complete seu cadastro`.
2. Em `Minhas vagas`, use as abas no topo da lista para ver só um tipo (`Todas`, `Ativa`, `Pausada`, `Aguardando aprovação`, `Reprovada`, `Encerrada`).
3. Para mudar uma vaga, clique nela na lista; abre a página `Editar vaga`. Em cada vaga também há os botões de pausar ou reativar e de excluir.
4. Faça as mudanças e clique em `Salvar alterações`. Aparece a mensagem `Alterações salvas`.
5. Para criar, clique em `Nova vaga`. Na primeira vez aparece antes a página `Complete seu cadastro` (`Salvar e continuar` ou `Preencher depois`).
6. Preencha pelo menos o título, a cidade e a descrição da vaga, mais um jeito de receber candidatos (WhatsApp, e-mail ou link). Clique em `Publicar vaga`.

## resultado esperado
são exibidas somente as vagas associadas ao cliente. os estados podem incluir `Ativa`, `Pausada`, `Aguardando aprovação`, `Reprovada` ou `Encerrada`.

## desvios
- a tela pode permitir listar, editar e excluir vagas próprias; limite de publicação depende das regras comerciais e da resposta da tela.
- `Aguardando aprovação` não significa que a vaga já esteja visível ao público.
- preço e limites não devem ser inferidos por este artigo.

## quando pedir ajuda
se uma vaga própria não aparecer, informe o título da vaga ao suporte. para rejeição ou aprovação pendente, consulte o responsável do portal.

## fontes
- `portal-cidade/frontend/src/app/minha-conta/vagas/page.tsx:4`
- `portal-cidade/frontend/src/app/minha-conta/vagas/page.tsx:45`
- `portal-cidade/frontend/src/app/minha-conta/vagas/page.tsx:80`
- `portal-cidade/docs/PRODUCT.md:43`

## lacunas
testado em tela (2026-10-15, plano grátis sintético, 1280 px e 390 px): criar, listar, editar, pausar/reativar e página pública. observado: vaga nova nasce `Ativa` e vira página pública; pausada, a página pública mostra `Ops! Essa página se perdeu pela cidade`. não testado: `Aguardando aprovação`, excluir, limites de plano.
