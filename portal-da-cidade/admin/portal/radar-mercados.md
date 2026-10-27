---
id: radar-mercados
titulo: "aprovar e juntar mercados do Radar de Preços"
publico:
  - admin
modulo: radar
categoria: radar
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - aprovar
  - juntar
  - excluir
  - radar
  - mercado
  - empresa
  - reativar
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - Xfc771aD4z8
---

## objetivo

Aprove estabelecimentos indicados por moradores e junte cadastros repetidos.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Conteúdo` do menu, em `Radar de Preços`, clique em `Estabelecimentos`. [guia=menu:/painel/radar/mercados]
2. Clique na aba `Precisa aprovar`.  [t=13] [guia=radar-mercados.pendentes]
3. Se o cadastro estiver correto, clique em `Aprovar`. [t=67] [guia=radar-mercados.aprovar]

## resultado

O estabelecimento é aprovado. Aprovar não é obrigatório se ele duplica um cadastro: nesse caso, use a união abaixo.

## juntar um cadastro pendente com outro

1. Na parte `Conteúdo` do menu, em `Radar de Preços`, clique em `Estabelecimentos`. [guia=menu:/painel/radar/mercados]
2. Clique em `Juntar com…` no cadastro pendente que será substituído. [t=59] [guia=radar-mercados.juntar]
3. Escolha o `Estabelecimento de destino` que deve ficar.  [t=59] [guia=radar-mercados.destino]
4. Clique em `Juntar`. [t=59] [guia=radar-mercados.confirmar-juntar]

## desativar ou reativar

1. Na parte `Conteúdo` do menu, em `Radar de Preços`, clique em `Estabelecimentos`. [guia=menu:/painel/radar/mercados]
2. Clique em `Desativar` no estabelecimento aprovado para escondê-lo sem apagar. [t=77] [guia=radar-mercados.ativar-desativar]

Para reativar, encontre o estabelecimento na aba `Desativados` e use `Ativar`.

## corrigir os dados de um estabelecimento

1. Na parte `Conteúdo` do menu, em `Radar de Preços`, clique em `Estabelecimentos`. [guia=menu:/painel/radar/mercados]
2. Clique no lápis `Editar` do estabelecimento. [guia=radar-mercados.editar]
3. Corrija o `Nome *` ou os outros dados. [guia=radar-mercados.nome]
4. Clique em `Salvar`. [guia=radar-mercados.salvar]

## excluir

1. Na parte `Conteúdo` do menu, em `Radar de Preços`, clique em `Estabelecimentos`. [guia=menu:/painel/radar/mercados]
2. Clique na lixeira `Excluir` do estabelecimento. [t=89] [guia=radar-mercados.excluir]
3. Na janela `Excluir este estabelecimento?`, clique em `Excluir`. [guia=confirmacao.confirmar]

A exclusão também apaga os preços do estabelecimento, como informa a confirmação. Para um cadastro novo, veja “cadastrar um estabelecimento no Radar de Preços”.

## tela

Topo: quantos estabelecimentos estão ativos e quantos esperam aprovação. Busca por nome ou endereço; filtros `Todos`, `Precisa aprovar`, `Ativos`, `Desativados`; e por categoria (supermercados, farmácias, postos de combustível). Cada cartão mostra nome, endereço, categoria, situação e quantos preços tem.

## origem dos pendentes

Moradores indicam estabelecimentos novos ao enviar um preço pelo site; chegam em `Precisa aprovar` com a etiqueta `pendente de aprovação`. Se for um já existente escrito de outro jeito, use `Juntar com…`: os preços passam para o escolhido (lista sem duplicados). Aprovar uma foto de preço com estabelecimento novo aprova o estabelecimento junto.

## no site

Cada preço mostra o estabelecimento, o endereço e o botão para abrir no Maps. Desativar tira do site sem apagar nada.

## fontes

- `frontend/src/app/painel/radar/mercados/page.tsx:80`
- `frontend/src/app/painel/radar/mercados/page.tsx:167`

- Catálogo: `portal-da-cidade/videos.json`; legendas: `videos/legendas/Xfc771aD4z8.srt`.

## lacunas

- Conferido por leitura do código no HEAD b2f62d3f. Sem execução do produto ou validação visual nesta auditoria.
