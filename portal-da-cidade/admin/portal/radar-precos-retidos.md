---
id: radar-precos-retidos
titulo: "resolver preços retidos do Radar de Preços"
publico:
  - admin
modulo: radar
categoria: radar
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - focSRBTLhQE
---

## objetivo

Confira os preços que foram retidos antes de decidir se devem entrar no site.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Conteúdo` do menu, em `Radar de Preços`, clique em `Preços retidos`. [guia=menu:/painel/radar/retidos]
2. Se o preço lido estiver correto, clique em `Publicar` na linha dele. [t=54] [guia=radar-retidos.publicar]

## resultado

O preço publicado sai da lista de retidos.

## corrigir um preço retido

1. Na parte `Conteúdo` do menu, em `Radar de Preços`, clique em `Preços retidos`. [guia=menu:/painel/radar/retidos]
2. Clique em `Corrigir`. [t=36] [guia=radar-retidos.corrigir]
3. Se necessário, altere `Nome do produto`.  [t=39] [guia=radar-retidos.nome]
4. Se necessário, escolha `Categoria`.  [t=39] [guia=radar-retidos.categoria]
5. Corrija `Preço (R$)`.  [t=39] [guia=radar-retidos.preco]
6. Clique em `Corrigir e publicar`. [t=42] [guia=radar-retidos.corrigir-e-publicar]

## descartar um preço retido

1. Na parte `Conteúdo` do menu, em `Radar de Preços`, clique em `Preços retidos`. [guia=menu:/painel/radar/retidos]
2. Clique em `Descartar`. [t=46] [guia=radar-retidos.descartar]
3. Na janela `Descartar este preço?`, clique em `Descartar`. [t=46] [guia=confirmacao.confirmar]

O descarte remove a leitura retida sem publicá-la. Consulte o motivo mostrado na linha; não presuma que toda retenção tem a mesma causa.

## fontes

- `frontend/src/app/painel/radar/retidos/page.tsx:34`
- `frontend/src/app/painel/radar/retidos/page.tsx:131`

- Catálogo: `portal-da-cidade/videos.json`; legendas: `videos/legendas/focSRBTLhQE.srt`.

## lacunas

- Conferido por leitura do código no HEAD b2f62d3f. Sem execução do produto ou validação visual nesta auditoria.
