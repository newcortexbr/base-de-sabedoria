---
id: restaurar-rascunho-de-noticia
titulo: "restaurar um rascunho de notícia guardado no navegador"
publico:
  - admin
modulo: notícias
categoria: conteúdo
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - rascunho
  - noticia
  - desfazer
  - descricao
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - gAa2NdnitZU
---

## objetivo

Aqui você recupera alterações de uma notícia publicada que ficaram guardadas neste navegador e ainda não foram publicadas.

## pré-requisitos

- Entrar no painel como administrador.
- Usar o navegador em que o rascunho foi guardado.
- Ter uma notícia existente com rascunho local disponível.

## passos

1. Na seção `Conteúdo` do menu lateral, em `Notícias`, clique em `Listar Notícias`. [t=23] [guia=menu:/painel/noticias]
2. Na linha da notícia, clique em `Editar`. [guia=noticias.editar]
3. No aviso `Encontramos um rascunho não publicado`, clique em `Restaurar`. [guia=noticias-cadastrar.restaurar-rascunho]
4. Confira o texto restaurado em `Conteúdo da matéria *`. [guia=noticias-cadastrar.conteudo]
5. Clique em `Salvar` para confirmar as alterações no servidor. [guia=noticias-cadastrar.salvar]

## resultado

Restaurar preenche o formulário com os dados locais. `Salvar` confirma as alterações e descarta a cópia local.

## desvios

- `Descartar` no aviso remove a cópia local, sem restaurá-la sobre o formulário.
- Uma foto nova escolhida como arquivo não é guardada nesse rascunho local.
- O salvamento automático só funciona para notícia já cadastrada. Em publicada, guarda localmente; nos outros status, tenta salvar no servidor.

## fontes

- `frontend/src/components/painel/noticias/NoticiaFormBase.tsx:327` — restauração dos campos.
- `frontend/src/components/painel/noticias/NoticiaFormBase.tsx:396` — aviso e botões.
- `frontend/src/hooks/useAutosaveRascunho.ts:139` — condição e destino do salvamento automático.
- Vídeo `gAa2NdnitZU`: acesso à lista em 23s; não detalha restauração.

## lacunas

Não executados recuperação local nem salvamento. A existência da cópia depende do armazenamento deste navegador; não é backup garantido.
