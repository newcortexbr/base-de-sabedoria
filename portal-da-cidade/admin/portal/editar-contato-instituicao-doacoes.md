---
id: editar-contato-instituicao-doacoes
titulo: "mudar o WhatsApp de uma instituição de doações"
publico:
  - admin
modulo: doacoes
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - grm3bUrPBxM
---

## objetivo

Atualize o WhatsApp exibido na página de uma instituição.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Conteúdo` do menu, em `Doações`, clique em `Instituições`. [t=17] [guia=menu:/painel/doacoes]
2. Clique no lápis `Editar` da instituição.  [t=28] [guia=doacoes.editar]
3. Altere `WhatsApp`. [t=88] [guia=doacoes.whatsapp]
4. Clique em `Salvar instituição`. [t=98] [guia=doacoes.salvar]
5. Na confirmação, clique em `Sim, publicar`. [guia=confirmacao.confirmar]

## resultado

O contato da instituição é atualizado. Outros contatos e textos também podem ser corrigidos nesse formulário.

## fontes

- `frontend/src/app/painel/doacoes/page.tsx:112`
- `frontend/src/app/painel/doacoes/EditorInstituicao.tsx:414`

- Catálogo: `portal-da-cidade/videos.json`; legendas: `videos/legendas/grm3bUrPBxM.srt`.

## lacunas

- Conferido por leitura do código no HEAD b2f62d3f. Sem execução do produto ou validação visual nesta auditoria.
