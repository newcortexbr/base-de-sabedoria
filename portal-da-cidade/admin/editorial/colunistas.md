---
id: admin-colunistas
titulo: "cadastrar um colunista"
publico:
  - admin
modulo: artigos
categoria: admin
aba: nao-se-aplica
tipo_problema:
  - colunista
  - cadastrar colunista
  - quem escreve artigos
  - acesso do colunista
tags:
  - colunista
  - artigo
  - cadastro
  - bio
  - foto
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - CRiUbh7wHdc
---

## objetivo

Aqui você cadastra o perfil de quem assina artigos no portal. O perfil e o login da pessoa são cadastros distintos.

## pré-requisitos

- Entrar no painel como administrador.

## passos

1. Na seção `Conteúdo` do menu lateral, em `Artigos`, clique em `Colunistas`. [t=50] [guia=menu:/painel/blog/colunistas]
2. Clique em `+ Novo Colunista`. [t=57] [guia=colunistas.novo]
3. Preencha `Nome *`. [t=59] [guia=colunistas.nome]
4. Se quiser, envie a foto pelo seletor de arquivo no topo da janela. [t=59] [guia=colunistas.foto]
5. Se quiser, escolha o `Ponto de foco da imagem`. O seletor aparece após enviar a foto. [guia=imagem.foco]
6. Se quiser, preencha `Cargo ou especialidade`. [t=59] [guia=colunistas.cargo]
7. Se quiser, preencha `Descrição breve`. [t=62] [guia=colunistas.descricao]
8. Se quiser, preencha `Site`. [guia=colunistas.site]
9. Se quiser, preencha `Instagram`, usando o nome de usuário sem @. [t=62] [guia=colunistas.instagram]
10. Se quiser, preencha `Facebook`. [t=62] [guia=colunistas.facebook]
11. Se quiser, preencha `LinkedIn`. [t=62] [guia=colunistas.linkedin]
12. Se quiser, preencha `WhatsApp`. [guia=colunistas.whatsapp]
13. Se quiser, preencha `E-mail público`. [guia=colunistas.email-publico]
14. Confira se `Ativo` está marcado para manter o perfil ativo. [guia=colunistas.ativo]
15. Clique em `Salvar`. [guia=colunistas.salvar]

## resultado

O perfil entra na lista e pode assinar artigos. Deixar `Acesso do proprietário (opcional)` em branco cadastra o perfil sem login.

## desvios

- Para criar o login, veja “criar e cuidar do acesso de um colunista”.
- `E-mail público` é contato do perfil, não o e-mail de login.
- Para corrigir o perfil, ativar, desativar ou excluir, veja “editar e controlar um colunista”.
- Excluir um colunista também apaga seus artigos, inclusive publicados; não use exclusão para apenas desativar.

## fontes

- `frontend/src/app/painel/blog/colunistas/page.tsx:175` — janela de cadastro e campos.
- `frontend/src/app/painel/blog/colunistas/page.tsx:306` — ativo e acesso opcional.
- `frontend/src/app/painel/blog/colunistas/page.tsx:488` — Novo Colunista.
- `frontend/src/app/painel/blog/colunistas/page.tsx:604` — aviso de exclusão.
- Vídeo `CRiUbh7wHdc`, legenda em 50s–65s.

## lacunas

Não executado no navegador. O vídeo cita redes sociais em conjunto, sem identificar cada campo; tempos desses campos remetem a essa apresentação geral.
