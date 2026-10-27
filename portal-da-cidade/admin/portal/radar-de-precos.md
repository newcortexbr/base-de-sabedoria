---
id: radar-de-precos
titulo: "Radar de Preços: o que é e como funciona"
publico:
  - admin
modulo: radar
categoria: radar
aba: nao-se-aplica
tipo_problema: orientacao
tags:
  - radar
  - preco
  - mercado
  - produto
  - visao geral
  - foto
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - iuCYHVzr37g
  - O3sdByn6xK8
---

## objetivo

O Radar de Preços permite comparar preços e receber contribuições dos moradores.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Conteúdo` do menu, em `Radar de Preços`, clique em `Fotos enviadas`. [guia=menu:/painel/radar/fotos]

## resultado

Em Fotos enviadas você revisa contribuições; em Preços retidos decide sobre leituras que precisam de conferência. Produtos e preços guarda o catálogo, Estabelecimentos reúne os locais e Categorias organiza o Radar.

## explicação

- O menu tem `Fotos enviadas`, `Preços retidos`, `Produtos e preços`, `Estabelecimentos` e `Categorias`.
- Aprovar a foto de um estabelecimento novo também aprova o estabelecimento.
- O administrador pode adicionar preço digitado ou enviar uma foto diretamente em Produtos e preços; não é o mesmo fluxo da contribuição do morador.
- Para operar cada tela, veja os artigos específicos do Radar.

## fontes

- `frontend/src/components/painel/Sidebar.tsx:150`
- `frontend/src/app/painel/radar/fotos/page.tsx:137`

- Catálogo: `portal-da-cidade/videos.json`; legendas: `videos/legendas/iuCYHVzr37g.srt`, `videos/legendas/O3sdByn6xK8.srt`.

## lacunas

- Conferido por leitura do código no HEAD b2f62d3f. Sem execução do produto ou validação visual nesta auditoria.
