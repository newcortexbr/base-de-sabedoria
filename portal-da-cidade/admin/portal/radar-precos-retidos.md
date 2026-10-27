---
id: radar-precos-retidos
titulo: "resolver preços retidos do Radar de Preços"
publico:
  - admin
modulo: radar
categoria: radar
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - publicar
  - editar
  - excluir
  - radar
  - preco
  - retido
status: rascunho-documental
revisado_em: 2026-10-27
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

## o que é a lista

- é a trava de segurança do Radar de Preços. quando a IA lê um preço muito diferente do atual (mais que o dobro ou menos da metade), ele não vai para o site e fica aqui. o resto é publicado na hora.
- cada linha mostra a foto de onde foi lido, o produto (com a etiqueta `produto novo` quando ainda não existe), o mercado, o preço atual riscado, o preço lido pela IA e o `motivo`. o motivo pode ser outro (preço ilegível, categoria não encontrada, combustível fora de Gasolina, Etanol ou Diesel).
- nem sempre o preço lido é o errado: pode ser o preço antigo cadastrado (exemplo: cadastrado a 7,49, encarte com 17,49). se o lido estiver certo, use `Publicar`; se estiver errado, `Descartar`; para ajustar nome, categoria ou preço, `Corrigir`.
- sem itens, a tela diz "Nada retido. A IA publicou tudo o que leu."
- no site, o preço publicado aparece com a foto do encarte, e o destaque de menor preço passa a usar o valor correto.
- confira a lista sempre que a IA ler novas fotos.

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
