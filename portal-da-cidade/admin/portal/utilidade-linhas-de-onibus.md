---
id: admin-utilidade-linhas-de-onibus
titulo: "cadastrar linhas de ônibus"
publico:
  - admin
modulo: utilidade
categoria: admin
aba: nao-se-aplica
tipo_problema:
  - horário de ônibus
  - linhas de ônibus
  - itinerário
tags:
  - criar
  - editar
  - excluir
  - onibus
  - utilidade
  - horario
  - voz do povo
  - itinerario
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - 1a0wZmdXDLk
---

## objetivo

Cadastre as linhas de ônibus, com itinerário e horários.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Conteúdo` do menu, em `A Voz do Povo`, clique em `Linhas de Ônibus`. [guia=menu:/painel/utilidade/onibus]
2. Clique em `Cadastrar linha`.  [guia=utilidade-onibus.novo]
3. Preencha `Número *`. [guia=utilidade-onibus.numero]
4. Se quiser, preencha `Nome`. [guia=utilidade-onibus.nome]
5. Se quiser, preencha `Itinerário`. [guia=utilidade-onibus.itinerario]
6. Se quiser, preencha `Horários`. [guia=utilidade-onibus.horarios]
7. Se quiser, preencha `Observação`. [guia=utilidade-onibus.observacao]
8. Clique em `Salvar`.  [guia=utilidade-onibus.salvar]

## resultado

O cadastro entra na lista. A presença no site depende da seção estar ligada e do cadastro estar visível.

## editar um cadastro

1. Na parte `Conteúdo` do menu, em `A Voz do Povo`, clique em `Linhas de Ônibus`. [guia=menu:/painel/utilidade/onibus]
2. Na linha do cadastro, clique no lápis `Editar`.  [guia=utilidade-onibus.editar]
3. Corrija `Número *` conforme necessário. [guia=utilidade-onibus.numero]
4. Clique em `Salvar` após os ajustes.  [guia=utilidade-onibus.salvar]

## excluir um cadastro

1. Na parte `Conteúdo` do menu, em `A Voz do Povo`, clique em `Linhas de Ônibus`. [guia=menu:/painel/utilidade/onibus]
2. Na linha do cadastro, clique na lixeira `Excluir`.  [guia=utilidade-onibus.excluir]
3. Na confirmação, clique em `Excluir`. [guia=confirmacao.confirmar]

## esconder a seção inteira

1. Na parte `Conteúdo` do menu, em `A Voz do Povo`, clique em `Linhas de Ônibus`. [guia=menu:/painel/utilidade/onibus]
2. No topo, desligue `Exibir no site`.  [guia=utilidade.exibir-no-site]

Os cadastros continuam salvos e editáveis. Ligue a mesma chave para voltar a mostrar a seção.

## fontes

- `frontend/src/app/painel/utilidade/onibus/page.tsx:140`
- `frontend/src/app/painel/utilidade/onibus/ExibirNoSite.tsx:65`

- Catálogo: `portal-da-cidade/videos.json`; legendas: `videos/legendas/1a0wZmdXDLk.srt`.

## lacunas

- Conferido por leitura do código no HEAD b2f62d3f. Sem execução do produto ou validação visual nesta auditoria.
