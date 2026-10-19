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
revisado_em: 2026-10-15
validacao: docs-e-codigo
---

## objetivo
consultar vagas próprias e seus estados na área de cliente.

## pré-requisitos
- ter vínculo de contratante e estar na área de cliente autenticada.
- este artigo não trata de acesso, cadastro de conta ou plano.

## passos
1. abra `Vagas de Emprego` na área do cliente (menu lateral ou cartão do `Início`; sem plano contratado ela aparece só como cartão em `Complete seu cadastro`).
2. consulte `Minhas vagas` e use as abas de situação (`Todas`, `Ativa`, `Pausada`, `Aguardando aprovação`, `Reprovada`, `Encerrada`).
3. para alterar uma vaga, clique no item da lista (abre `Editar vaga`). ícones por vaga: pausar/reativar e excluir.
4. altere e clique em `Salvar alterações` (mensagem `Alterações salvas`).
5. para criar, clique em `Nova vaga`. na primeira vez, aparece antes `Complete seu cadastro` (`Salvar e continuar` ou `Preencher depois`). obrigatórios: título, cidade e descrição, mais WhatsApp, e-mail ou link. clique em `Publicar vaga`.

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
