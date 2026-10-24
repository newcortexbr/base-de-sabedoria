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
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - 525qfVrQ4iY
---

## objetivo
consultar vagas próprias e seus estados na área do cliente, editar, pausar ou excluir.

Para criar uma vaga nova, veja o artigo "criar uma vaga nova na área do cliente".

## pré-requisitos
- ter vínculo de contratante e estar na área do cliente autenticada.
- este artigo não trata de acesso, cadastro de conta ou plano.

## passos

1. Na parte `O que eu publico` do menu da esquerda, clique em `Vagas de Emprego`. [t=6] [guia=menu:/minha-conta/vagas]
2. Em `Minhas vagas`, clique na aba da situação que quer ver: `Todas`, `Ativa`, `Pausada`, `Aguardando aprovação`, `Reprovada` ou `Encerrada`. [guia=minhas-vagas.filtros]
3. Na vaga, clique no ícone de lápis `Editar` (o título é só texto: o clique que abre a edição é no lápis). Abre a página `Editar vaga`. [t=138] [guia=minhas-vagas.editar]
4. Faça as mudanças na vaga. [guia=vaga-cliente.titulo]
5. Clique em `Salvar alterações`. A página mostra `Alterações salvas` (ou `Vaga enviada para aprovação`, se o portal pedir nova análise). [guia=vaga-cliente.salvar]

## resultado esperado
são exibidas somente as vagas associadas ao cliente. os estados podem incluir `Ativa`, `Pausada`, `Aguardando aprovação`, `Reprovada` ou `Encerrada`.

## desvios
- em cada vaga da lista também há os ícones de pausar ou reativar e de excluir (pede confirmação). [t=138]
- a tela pode permitir listar, editar e excluir vagas próprias; limite de publicação depende das regras comerciais e da resposta da tela.
- `Aguardando aprovação` não significa que a vaga já esteja visível ao público.
- preço e limites não devem ser inferidos por este artigo.

## quando pedir ajuda
se uma vaga própria não aparecer, informe o título da vaga ao suporte. para rejeição ou aprovação pendente, consulte o responsável do portal.

## fontes
- `frontend/src/app/minha-conta/vagas/page.tsx:45-53` — situações; `:206-232` título e `Nova vaga`; `:258-275` filtros; `:308-325` ícones de ação.
- `frontend/src/app/minha-conta/vagas/VagaForm.tsx:279` — `Editar vaga`; `:484-490` `Salvar alterações`; `:497-503` mensagens.

## lacunas
testado em tela (2026-10-15, plano grátis sintético, 1280 px e 390 px): criar, listar, editar, pausar/reativar e página pública. observado: vaga nova nasce `Ativa` e vira página pública; pausada, a página pública mostra `Ops! Essa página se perdeu pela cidade`. não testado: `Aguardando aprovação`, excluir, limites de plano.
