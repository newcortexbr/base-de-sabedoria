---
id: voz-do-povo
titulo: "A Voz do Povo: ver relatos dos moradores"
publico:
  - admin
modulo: utilidade
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - ver
  - voz do povo
  - relato
  - denuncia
  - painel
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - 1a0wZmdXDLk
---

## objetivo

Consulte os relatos enviados pelos moradores à Voz do Povo.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Conteúdo` do menu, em `A Voz do Povo`, clique em `Denúncias`. [t=53] [guia=menu:/painel/utilidade/denuncias]
2. No filtro do topo, escolha `Em aberto`, `Recebida`, `Em análise`, `Resolvida`, `Arquivada` ou `Todos os status`. [t=70] [guia=utilidade-denuncias.filtro]
3. Na linha do relato, clique em `Ver detalhes`. [t=72] [guia=utilidade-denuncias.detalhes]

## resultado

O relato completo abre com os dados e anexos disponíveis.

## explicação

- Esta caixa de entrada é diferente das denúncias de conteúdo em `Aprovações e Denúncias`.
- A mesma seção do menu reúne `Telefones Úteis` e `Linhas de Ônibus`; consulte os artigos de cadastro de cada tela.

## fontes

- `frontend/src/app/painel/utilidade/denuncias/page.tsx:133`
- `frontend/src/app/painel/utilidade/denuncias/page.tsx:209`

- Catálogo: `portal-da-cidade/videos.json`; legendas: `videos/legendas/1a0wZmdXDLk.srt`.

## lacunas

- Conferido por leitura do código no HEAD b2f62d3f. Sem execução do produto ou validação visual nesta auditoria.

## o que o morador envia

- Página pública `A Voz do Povo`: formulário de denúncia, previsão do tempo, linhas de ônibus e telefones úteis da cidade.
- No formulário: categoria do problema (por exemplo iluminação pública, buraco na via, lixo irregular); o relato escrito ou gravado em áudio (um dos dois é obrigatório); cidade, bairro e quando aconteceu; até 5 fotos e 1 vídeo; contato opcional. Pode ser anônima.
- Ao clicar em `Enviar denúncia`, o morador recebe a confirmação e o relato chega na caixa de entrada `Denúncias` do painel.
- Uso editorial: o relato pode virar pauta e notícia.

## a lista

Cada linha mostra categoria, local, hora e status. Os botões da linha mudam o status (`Em análise`, `Resolvida`, `Arquivar`). O filtro separa as abertas do histórico.
