---
id: radar-fotos-enviadas
titulo: "aprovar as fotos enviadas ao Radar de Preços"
publico:
  - admin
modulo: radar
categoria: radar
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - aprovar
  - recusar
  - editar
  - radar
  - foto
  - preco
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - CSYITekPVcw
---

## objetivo

Confira as fotos de preços enviadas pelos moradores antes de aprová-las.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Conteúdo` do menu, em `Radar de Preços`, clique em `Fotos enviadas`. [guia=menu:/painel/radar/fotos]
2. Clique na aba `Aguardando`.  [guia=radar-fotos.aguardando]
3. Clique na foto para ampliar e conferir.  [guia=radar-fotos.ampliar]
4. Clique em `Fechar a foto`.  [guia=radar-fotos.fechar-foto]
5. Na foto conferida, clique em `Aprovar e ler`; se o estabelecimento é novo, o botão se chama `Aprovar foto e estabelecimento`; em foto de preços de combustível, `Aprovar preços` ou `Aprovar preços e posto`. [t=93] [guia=radar-fotos.aprovar]

## resultado

O envio segue para leitura. O resultado informa o que foi lido, e preços retidos exigem revisão separada.

## corrigir antes de aprovar

1. Na parte `Conteúdo` do menu, em `Radar de Preços`, clique em `Fotos enviadas`. [guia=menu:/painel/radar/fotos]
2. Clique em `Corrigir` na foto. [t=65] [guia=radar-fotos.corrigir]
3. Escolha o `Estabelecimento *` correto.  [t=65] [guia=radar-fotos.estabelecimento]
4. Se necessário, ajuste `Preço informado`.  [t=69] [guia=radar-fotos.preco]
5. Clique em `Salvar`. [t=74] [guia=radar-fotos.salvar]

## recusar uma foto

1. Na parte `Conteúdo` do menu, em `Radar de Preços`, clique em `Fotos enviadas`. [guia=menu:/painel/radar/fotos]
2. Clique em `Recusar` na foto. [t=82] [guia=radar-fotos.recusar]
3. Na janela `Recusar esta foto?`, clique em `Recusar`. [t=82] [guia=confirmacao.confirmar]

## desvios

- Use `Lidos` e `Recusados` para consultar os outros envios.
- Uma foto recusada não segue para leitura.
- O tempo de leitura não foi medido; não há garantia de publicação em minutos.

## fontes

- `frontend/src/app/painel/radar/fotos/page.tsx:274`
- `frontend/src/app/painel/radar/fotos/page.tsx:310`

- Catálogo: `portal-da-cidade/videos.json`; legendas: `videos/legendas/CSYITekPVcw.srt`.

## lacunas

- Conferido por leitura do código no HEAD b2f62d3f. Sem execução do produto ou validação visual nesta auditoria.
