---
id: acesso-painel-negado
titulo: entrar no painel do portal e entender acesso negado
publico:
  - admin
permissoes:
  - administrador-de-portal
categoria: administracao
aba: nao-se-aplica
tipo_problema:
  - entro no painel
  - acessar o painel de outro portal
  - ajudar colega no painel
tags:
  - painel
  - permissao
  - acesso negado
  - senha
modulo: acesso
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
---

## objetivo

Entre no painel com uma conta autorizada para administrar este portal.

## pré-requisitos

- Ter uma conta de administrador autorizada neste portal.
- Este procedimento usa a entrada por e-mail e senha, quando disponível.

## passos

1. Abra a [entrada do painel](/painel/login) do seu portal. [guia=fora]
2. Preencha `E-mail`. [guia=login.email]
3. Preencha `Senha`. [guia=login.senha]
4. Clique em `Efetuar Login`. [guia=login.entrar]

## resultado

Se a conta e a permissão forem aceitas, o painel abre. Acesso a um portal não concede administração em outro.

## desvios

- Se aparecer que a conta não tem acesso ao painel administrativo, peça conferência da permissão; repetir a senha não concede acesso.
- Se aparecer limite de tentativas, aguarde o período informado pelo sistema.
- Se a página oferecer `Entrar com a Área do Cliente`, existe uma alternativa de entrada vinculada à configuração do portal; ela não usa o formulário acima.
- Para recuperar a senha, veja “esqueci a senha do painel”.

## fontes

- `frontend/src/app/painel/login/page.tsx:137`
- `frontend/src/app/painel/login/page.tsx:230`
- `backend/portais/permissions.py:212`

## lacunas

- Não foi identificado vídeo específico desta tarefa no catálogo; nenhum tempo foi atribuído.
- Conferido por leitura do código no HEAD b2f62d3f. Sem execução do produto ou validação visual nesta auditoria.
