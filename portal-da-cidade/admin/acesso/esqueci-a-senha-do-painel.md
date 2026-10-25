---
id: admin-esqueci-a-senha-do-painel
titulo: "esqueci a senha do painel"
publico:
  - admin
modulo: acesso
categoria: admin
aba: nao-se-aplica
tipo_problema:
  - esqueci minha senha
  - esqueceu a senha
  - não consigo entrar no painel
  - recuperar senha do administrador
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
---

## objetivo

Solicite ajuda para recuperar o acesso ao painel. O botão Esqueceu a senha? não inicia recuperação no código conferido.

## pré-requisitos

- Estar sem acesso por ter esquecido a senha.

## passos

1. Abra a [entrada do painel](/painel/login) do seu portal. [guia=fora]
2. Clique em `Entre em contato com o administrador.`.  [guia=login.contato]
3. No aplicativo de e-mail, informe o portal e o e-mail da conta, sem enviar sua senha. [guia=fora]

## resultado

O link abre uma mensagem de e-mail para o contato definido na tela. O envio e a recuperação dependem do atendimento.

## desvios

Se o aplicativo de e-mail não abrir, use seu serviço de e-mail para escrever a contato@newcortex.ia.br, endereço público configurado no link da tela.

## fontes

- `frontend/src/app/painel/login/page.tsx:304`
- `frontend/src/app/painel/login/page.tsx:380`

## lacunas

- Não foi identificado vídeo específico desta tarefa no catálogo; nenhum tempo foi atribuído.
- Conferido por leitura do código no HEAD b2f62d3f. Sem execução do produto ou validação visual nesta auditoria.
