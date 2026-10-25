---
id: bloquear-jornalista
titulo: "bloquear o acesso de um jornalista"
publico:
  - admin
modulo: notícias
categoria: admin
aba: Notícias
tipo_problema: cadastro
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - gAa2NdnitZU
---

## objetivo

Aqui você suspende o acesso de um jornalista sem apagar o cadastro nem as matérias existentes.

## pré-requisitos

- Entrar no painel como administrador.

## passos

1. Na seção `Conteúdo` do menu lateral, em `Notícias`, clique em `Jornalistas`. [t=109] [guia=menu:/painel/noticias/jornalistas]
2. Na linha da pessoa, clique no cadeado `Bloquear`. [t=135] [guia=jornalistas.bloquear]
3. Na confirmação dentro do portal, clique em `Bloquear`. [guia=confirmacao.confirmar]

## resultado

O acesso fica suspenso e a lista mostra `Bloqueado`. O cadastro e as matérias não são excluídos.

## desvios

Para devolver o acesso, veja “desbloquear um jornalista”. A tela não oferece exclusão de jornalista.

## fontes

- `frontend/src/app/painel/noticias/jornalistas/page.tsx:299` — confirmação e alteração de acesso.
- `backend/noticias/api_admin.py:830` — edição sem DELETE e revogação de tokens ao bloquear.
- Vídeo `gAa2NdnitZU`, legenda em 109s e 135s.

## lacunas

Conferido por código; bloqueio em sessão real não executado.
