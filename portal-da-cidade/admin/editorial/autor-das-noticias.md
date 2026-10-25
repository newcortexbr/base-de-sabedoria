---
id: autor-das-noticias
titulo: "mudar a assinatura padrão das notícias do portal"
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

Aqui você muda o perfil de autor usado nas notícias do administrador. Os jornalistas têm fichas próprias de autor.

## pré-requisitos

- Entrar no painel como administrador.

## passos

1. Na seção `Conteúdo` do menu lateral, em `Notícias`, clique em `Autor`. [t=152] [guia=menu:/painel/noticias/autor]
2. Preencha `Nome *`. [t=155] [guia=noticias-autor.nome]
3. Se quiser, altere a imagem em `Foto do autor`. [t=158] [guia=noticias-autor.foto]
4. Se quiser, preencha `Cargo`. [t=158] [guia=noticias-autor.cargo]
5. Se quiser, preencha `Bio`. [guia=noticias-autor.bio]
6. Se quiser, preencha `Site`. [guia=noticias-autor.site]
7. Se quiser, preencha `Instagram`. [guia=noticias-autor.instagram]
8. Se quiser, preencha `Facebook`. [guia=noticias-autor.facebook]
9. Se quiser, preencha `LinkedIn`. [guia=noticias-autor.linkedin]
10. Se quiser, preencha `WhatsApp` com DDD e número. [guia=noticias-autor.whatsapp]
11. Se quiser, preencha `E-mail público`. [guia=noticias-autor.email-publico]
12. Clique em `Salvar`. [guia=noticias-autor.salvar]

## resultado

A tela mostra `Autor salvo`. A ficha padrão do portal é diferente da ficha de cada jornalista.

## desvios

- A tela `Autor` é uma ficha única; não há escolha de autor em cada notícia cadastrada pelo administrador.
- O e-mail público é contato da assinatura, não troca o e-mail de login.
- Se aparecer `Corrija os campos destacados antes de salvar.`, corrija os campos indicados.

## fontes

- `frontend/src/app/painel/noticias/autor/page.tsx:17` — ficha padrão, sem seletor por notícia.
- `frontend/src/components/painel/noticias/AutorFormBase.tsx:258` — foto e campos.
- `frontend/src/components/painel/noticias/AutorFormBase.tsx:225` — confirmação e invalidação.
- Vídeo `gAa2NdnitZU`: assinatura em 152s–161s.

## lacunas

Não executado salvamento nem conferida a assinatura na página pública. O vídeo cita redes sociais em conjunto, sem detalhar campos.
