---
id: admin-utilidade-telefones-uteis
titulo: "cadastrar telefones úteis"
publico:
  - admin
modulo: utilidade
categoria: admin
aba: nao-se-aplica
tipo_problema:
  - telefones úteis
  - telefone da polícia
  - números de emergência
  - telefone da prefeitura
tags:
  - criar
  - editar
  - excluir
  - telefone util
  - utilidade
  - voz do povo
  - emergencia
  - policia
  - telefone
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - 1a0wZmdXDLk
---

## objetivo

Cadastre os telefones úteis da cidade.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Conteúdo` do menu, em `A Voz do Povo`, clique em `Telefones Úteis`. [guia=menu:/painel/utilidade/telefones]
2. Clique em `Cadastrar telefone`.  [guia=utilidade-telefones.novo]
3. Preencha `Órgão/serviço *`. [guia=utilidade-telefones.nome]
4. Preencha `Telefone`. [guia=utilidade-telefones.telefone]
5. Se quiser, preencha `Endereço`. [guia=utilidade-telefones.endereco]
6. Se quiser, preencha `Horário de atendimento`. [guia=utilidade-telefones.horario]
7. Clique em `Salvar`.  [guia=utilidade-telefones.salvar]

## resultado

O cadastro entra na lista. A presença no site depende da seção estar ligada e do cadastro estar visível.

## número curto de emergência

Para cadastrar somente um número curto, no passo do telefone preencha `Número curto de emergência` em vez de `Telefone`. É obrigatório ter pelo menos um dos dois.

## editar um cadastro

1. Na parte `Conteúdo` do menu, em `A Voz do Povo`, clique em `Telefones Úteis`. [guia=menu:/painel/utilidade/telefones]
2. Na linha do cadastro, clique no lápis `Editar`.  [guia=utilidade-telefones.editar]
3. Corrija `Órgão/serviço *` conforme necessário. [guia=utilidade-telefones.nome]
4. Clique em `Salvar` após os ajustes.  [guia=utilidade-telefones.salvar]

## excluir um cadastro

1. Na parte `Conteúdo` do menu, em `A Voz do Povo`, clique em `Telefones Úteis`. [guia=menu:/painel/utilidade/telefones]
2. Na linha do cadastro, clique na lixeira `Excluir`.  [guia=utilidade-telefones.excluir]
3. Na confirmação, clique em `Excluir`. [guia=confirmacao.confirmar]

## esconder a seção inteira

1. Na parte `Conteúdo` do menu, em `A Voz do Povo`, clique em `Telefones Úteis`. [guia=menu:/painel/utilidade/telefones]
2. No topo, desligue `Exibir no site`.  [guia=utilidade.exibir-no-site]

Os cadastros continuam salvos e editáveis. Ligue a mesma chave para voltar a mostrar a seção.

## fontes

- `frontend/src/app/painel/utilidade/telefones/page.tsx:151`
- `frontend/src/app/painel/utilidade/onibus/ExibirNoSite.tsx:65`

- Catálogo: `portal-da-cidade/videos.json`; legendas: `videos/legendas/1a0wZmdXDLk.srt`.

## lacunas

- Conferido por leitura do código no HEAD b2f62d3f. Sem execução do produto ou validação visual nesta auditoria.
