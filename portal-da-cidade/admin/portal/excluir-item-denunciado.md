---
id: excluir-item-denunciado
titulo: "excluir o item denunciado (apaga do site, sem volta)"
publico:
  - admin
modulo: aprovações
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - excluir
  - denuncia
  - moderacao
  - no ar
  - recuperar
  - desfazer
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - JYDoZB_vyX8
---

## objetivo

Apague do site o conteúdo denunciado.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No começo do menu da esquerda, clique em `Aprovações e Denúncias`. [guia=menu:/painel/aprovacoes]
2. Clique na aba `Denúncias`. [t=82] [guia=aprovacoes-aba:denuncias]
3. Clique na linha da denúncia. [t=84] [guia=denuncias.abrir]
4. Clique em `Excluir item`. [guia=denuncias.excluir-item]
5. Na confirmação `Excluir o item denunciado? Ele será apagado do site e não poderá ser recuperado.`, clique em `Excluir`. [guia=confirmacao.confirmar]

## resultado

Aparece `Item excluído`. O item é apagado e a denúncia passa para `Resolvidas`, junto com as outras denúncias pendentes do mesmo item.

## perguntas comuns

**dá para recuperar?** Não. A confirmação vale: a exclusão é definitiva.
**o autor é avisado?** Não.
**por que `Excluir item` está desabilitado?** Porque o item não existe mais (já foi apagado).
**quem aparece em "Item excluído em… por …"?** O administrador que decidiu: nome completo, ou e-mail, ou login.

## fontes

- frontend/src/app/painel/denuncias/[id]/page.tsx:15-60,93-165
- backend/denuncias/servicos.py:88-237
- backend/denuncias/serializers.py get_resolvida_por_nome

## lacunas

- Conferido por leitura do código no HEAD 66d38db2 (wt-suporte-tool). Sem execução do produto nem validação visual.
