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
revisado_em: 2026-10-19
validacao: docs-e-codigo
videos:
  - gAa2NdnitZU
---

## objetivo
aqui você tira o acesso de um jornalista. As matérias já publicadas continuam no ar.

## pré-requisitos

- Ter acesso administrativo ao portal.
- Ter o e-mail da pessoa que vai escrever.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Notícias` e depois em `Jornalistas`. [guia=menu:/painel/noticias/jornalistas]
2. Para tirar o acesso, clique no cadeado (`Bloquear`) na linha do jornalista. [guia=jornalistas.bloquear]
3. Confirme na janela do navegador. As matérias já publicadas continuam no ar. [guia=jornalistas.bloquear]

## resultado
O jornalista não consegue mais entrar.

## desvios

- Jornalista não entra no painel: o login dele é na área do cliente.
- Quem esquecer a senha pode recuperar sozinho em `Esqueci minha senha`, na tela de entrada.
- Para devolver o acesso, clique de novo no cadeado (`Desbloquear`).

## quando pedir ajuda

peça ajuda se o jornalista não receber o e-mail ou não conseguir entrar mesmo com a senha nova.

## fontes

- `portal-cidade/frontend/src/app/painel/noticias/jornalistas/page.tsx` — lista, cadastro, senha e bloqueio.
- vídeo `gAa2NdnitZU` 01:32–02:35.

## lacunas

não verificado visualmente; tempos tirados da legenda automática.
