---
id: jornalistas
titulo: cadastrar e cuidar dos jornalistas do portal
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

aqui você cadastra quem escreve notícias para o portal e cuida do acesso de cada um. Pode ser estudante de jornalismo ou colaborador.

## pré-requisitos

- Ter acesso administrativo ao portal.
- Ter o e-mail da pessoa que vai escrever.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Notícias` e depois em `Jornalistas`. [guia=menu:/painel/noticias/jornalistas] [t=94]
2. Clique em `Novo jornalista`. [guia=jornalistas.novo] [t=110]
3. Em `Acesso do jornalista`, preencha o nome, o e-mail de login e a senha inicial. [guia=jornalistas.acesso] [t=114]
4. Clique em `Salvar`. A pessoa recebe um e-mail com os dados de acesso. [guia=jornalistas.salvar] [t=120]
5. Para trocar a senha de alguém, na linha do jornalista que você quer, clique no ícone de chave (`Resetar senha`). [guia=jornalistas.resetar-senha] [t=135]
6. Escreva a `Nova senha`. [guia=jornalistas.nova-senha]
7. Clique em `Redefinir`. A nova senha vai por e-mail ao jornalista. [guia=jornalistas.redefinir] [t=137]
8. Para mudar o nome, clique no lápis (`Editar`) na linha do jornalista. O e-mail não pode ser alterado. [guia=jornalistas.editar] [t=138]
9. Para tirar o acesso, clique no cadeado (`Bloquear`) na linha do jornalista. [guia=jornalistas.bloquear] [t=140]
10. Confirme na janela do navegador. As matérias já publicadas continuam no ar. [guia=jornalistas.bloquear]

## resultado

o jornalista entra pela área do cliente, em `/minha-conta/login`, com o e-mail e a senha criados. ele publica direto e só vê as próprias matérias.

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
