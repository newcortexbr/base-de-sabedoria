---
id: admin-trocar-a-propria-senha
titulo: "trocar a minha senha do painel"
publico:
  - admin
modulo: acesso
categoria: admin
aba: nao-se-aplica
tipo_problema:
  - trocar minha senha
  - alterar senha do painel
  - mudar a senha do administrador
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
---

## objetivo

Troque a senha de acesso ao painel quando souber a senha atual.

## pré-requisitos

- Estar conectado ao painel.
- Saber a senha atual.

## passos

1. Abra a [alteração de senha do painel](/painel/alterar-senha) no navegador deste portal. [guia=fora]
2. Preencha `Senha atual`.  [guia=alterar-senha.atual]
3. Preencha `Nova senha`.  [guia=alterar-senha.nova]
4. Preencha `Confirmar nova senha` com a mesma senha nova.  [guia=alterar-senha.confirmar]
5. Clique em `Alterar Senha`.  [guia=alterar-senha.salvar]

## resultado

Aparece `Senha alterada com sucesso`. Os campos são limpos; use a senha nova na próxima entrada.

## desvios

- `As senhas não conferem.`: repita a mesma senha nos dois campos novos.
- Siga os requisitos de senha mostrados abaixo do campo.
- A página existe, mas não foi encontrado link no menu lateral nem no cabeçalho. Por isso o primeiro passo fornece um link direto.

## fontes

- `frontend/src/app/painel/alterar-senha/page.tsx:23`
- `frontend/src/app/painel/alterar-senha/page.tsx:53`

## lacunas

- Não foi identificado vídeo específico desta tarefa no catálogo; nenhum tempo foi atribuído.
- Conferido por leitura do código no HEAD b2f62d3f. Sem execução do produto ou validação visual nesta auditoria.
