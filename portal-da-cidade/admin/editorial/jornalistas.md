---
id: jornalistas
titulo: cadastrar e cuidar dos jornalistas do portal
publico:
  - admin
modulo: notícias
categoria: admin
aba: Notícias
tipo_problema: cadastro
tags:
  - jornalista
  - cadastro
  - senha
  - bloquear
  - noticia
  - equipe
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - gAa2NdnitZU
---

## objetivo

Aqui você cadastra um jornalista para escrever notícias pelo próprio acesso na área do cliente.

## pré-requisitos

- Entrar no painel como administrador.
- Ter nome e e-mail da pessoa.

## passos

1. Na seção `Conteúdo` do menu lateral, em `Notícias`, clique em `Jornalistas`. [t=109] [guia=menu:/painel/noticias/jornalistas]
2. Clique em `Novo jornalista`. [t=116] [guia=jornalistas.novo]
3. Em `Acesso do jornalista`, preencha `Nome do responsável *`. [t=118] [guia=acesso-proprietario.nome]
4. Preencha `E-mail de login *`. [t=118] [guia=acesso-proprietario.email]
5. Preencha `Senha inicial *`. [t=120] [guia=acesso-proprietario.senha]
6. Clique em `Salvar`. [t=120] [guia=jornalistas.salvar]
7. Anote os dados mostrados em `Painel do proprietário`; a senha só aparece nessa ocasião. [guia=acesso-proprietario.dados]
8. Clique em `Anotei os dados, fechar`. [guia=acesso-proprietario.confirmar-dados]

## resultado

A pessoa entra pela área do cliente, publica direto e só acessa as próprias matérias. O cadastro cria também a ficha de autor do jornalista.

## desvios

- O cartão informa se o e-mail será enviado ou se não foi enviado. Não conte com entrega garantida.
- Não cadastre novamente só porque o e-mail não chegou; confira o cartão e os dados de acesso.
- Para mudar nome, senha ou bloqueio, use os artigos próprios.

## fontes

- `frontend/src/app/painel/noticias/jornalistas/page.tsx:88` — criação e cartão de acesso.
- `frontend/src/components/painel/AcessoDoProprietario.tsx:236` — rótulos dos campos.
- `frontend/src/components/painel/AcessoDoProprietario.tsx:280` — retorno do e-mail e senha exibida uma vez.
- `backend/noticias/api_admin.py:800` — criação de conta, autor e jornalista.
- Vídeo `gAa2NdnitZU`, legenda em 109s–126s.

## lacunas

Cadastro, entrega de e-mail e login não executados. Os passos do cartão atual não são detalhados no vídeo.
