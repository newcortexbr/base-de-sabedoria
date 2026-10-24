---
id: desbloquear-jornalista
titulo: "desbloquear um jornalista"
publico:
  - admin
modulo: notícias
categoria: conteúdo
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - gAa2NdnitZU
---

## objetivo

Aqui você devolve o acesso de um jornalista bloqueado.

## pré-requisitos

- Entrar no painel como administrador.
- Ter um jornalista com o selo `Bloqueado`.

## passos

1. Na seção `Conteúdo` do menu lateral, em `Notícias`, clique em `Jornalistas`. [t=109] [guia=menu:/painel/noticias/jornalistas]
2. Na linha da pessoa bloqueada, clique no cadeado `Desbloquear`. [guia=jornalistas.bloquear]
3. Na confirmação, clique em `Desbloquear`. [guia=confirmacao.confirmar]

## resultado

O cadastro volta a ficar ativo. Essa ação não troca a senha.

## fontes

- `frontend/src/app/painel/noticias/jornalistas/page.tsx:299` — confirmação reversível.
- `frontend/src/app/painel/noticias/jornalistas/page.tsx:420` — ação varia entre bloquear e desbloquear.
- Vídeo `gAa2NdnitZU`: acesso aos jornalistas em 109s.

## lacunas

Não executado login após desbloqueio. O vídeo cita bloqueio, sem demonstrar o desbloqueio.
