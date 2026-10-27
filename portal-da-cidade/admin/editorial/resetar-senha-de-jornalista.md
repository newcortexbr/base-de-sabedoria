---
id: resetar-senha-de-jornalista
titulo: "trocar a senha de um jornalista"
publico:
  - admin
modulo: notícias
categoria: admin
aba: Notícias
tipo_problema: cadastro
tags:
  - senha
  - jornalista
  - recuperar
  - entrar
  - permissao
  - acesso
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - gAa2NdnitZU
---

## objetivo

Aqui você redefine a senha de login de um jornalista e confere o retorno sobre o envio por e-mail.

## pré-requisitos

- Entrar no painel como administrador.

## passos

1. Na seção `Conteúdo` do menu lateral, em `Notícias`, clique em `Jornalistas`. [t=109] [guia=menu:/painel/noticias/jornalistas]
2. Na linha da pessoa, clique na chave `Resetar senha`. [t=135] [guia=jornalistas.resetar-senha]
3. Preencha `Nova senha *`. [guia=jornalistas.nova-senha]
4. Clique em `Redefinir`. [guia=jornalistas.redefinir]
5. Anote os dados mostrados em `Painel do proprietário`, antes de fechar o cartão. [guia=acesso-proprietario.dados]
6. Clique em `Anotei os dados, fechar`. [guia=acesso-proprietario.confirmar-dados]

## resultado

A tela mostra `Senha redefinida`. O cartão informa se o e-mail será enviado ou se não foi enviado.

## desvios

Se a senha for recusada, leia o erro no campo e escolha outra. Redefinir a senha não substitui desbloquear um cadastro bloqueado.

## fontes

- `frontend/src/app/painel/noticias/jornalistas/page.tsx:192` — redefinição e cartão.
- `frontend/src/components/painel/AcessoDoProprietario.tsx:280` — envio por e-mail e dados.
- `backend/noticias/api_admin.py:859` — validação da senha e revogação de tokens.
- Vídeo `gAa2NdnitZU`, legenda em 109s e 135s.

## lacunas

Não executado no navegador nem confirmado envio real de e-mail. O vídeo cita a ação, sem detalhar o formulário de redefinição.
