---
id: mudar-texto-convite-notificacoes-push
titulo: "mudar o texto do convite de notificações push"
publico:
  - admin
modulo: notificações
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - -ZLL7Cqwcok
---

## objetivo

Personalize o título e a descrição do convite mostrado aos visitantes.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Sistema` do menu da esquerda, clique em `Notificações Push`. [t=9] [guia=menu:/painel/notificacoes]
2. Preencha `Título do convite`.  [guia=notificacoes.convite-titulo]
3. Preencha `Descrição`.  [guia=notificacoes.convite-descricao]
4. Clique em `Salvar texto`.  [guia=notificacoes.convite-salvar]

## resultado

O convite usa o texto salvo. Um campo apagado volta ao texto padrão ao salvar.

## fontes

- `frontend/src/app/painel/notificacoes/page.tsx:317`

- Catálogo: `portal-da-cidade/videos.json`; legendas: `videos/legendas/-ZLL7Cqwcok.srt`.

## lacunas

- Conferido por leitura do código no HEAD b2f62d3f. Sem execução do produto ou validação visual nesta auditoria.
