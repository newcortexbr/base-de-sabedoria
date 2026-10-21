---
id: admin-publicar-vaga-recusada
titulo: "publicar uma vaga que eu recusei"
publico:
  - admin
modulo: vagas
categoria: admin
aba: nao-se-aplica
tipo_problema:
  - desfazer recusa
  - recusei sem querer
  - aprovar vaga reprovada
  - voltar atrás na reprovação
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
aqui você coloca no ar uma vaga que foi recusada, se recusou por engano.

## pré-requisitos

- Ter acesso de administrador ao painel.

## passos

1. No menu da esquerda, clique em `Vagas de Emprego` e depois em `Listar Vagas`. [guia=menu:/painel/vagas]
2. No filtro de status, escolha `Reprovada`. [guia=vagas.situacao]
3. Clique em `Filtrar`. [guia=vagas.filtrar]
4. Na coluna `Status` da vaga, clique em `reprovada`. [guia=fora]
5. Confirme em "Aprovar e publicar a vaga". [guia=fora]

## resultado
a vaga fica ativa e vai ao ar.

## desvios

- Para outros envios recusados (anúncio, evento, banner), não há botão de desfazer: o cliente corrige e reenvia, e o envio volta para `Aprovações e Denúncias`.

## quando pedir ajuda

peça ajuda se a vaga não ficar ativa depois de confirmar.

## fontes

- `portal-cidade/frontend/src/app/painel/vagas/page.tsx:122-135,172-180` — filtro "Reprovada" e `toggleStatus` com confirmação.
- `portal-cidade/frontend/src/app/painel/aprovacoes/AprovacoesClient.tsx:171-185` — a recusa tira o item da fila.
- `portal-cidade/frontend/src/app/minha-conta/classificados/page.tsx` e `eventos/page.tsx` — "Corrigir e reenviar".

## lacunas

tela não validada no navegador nesta tarefa. Em Classificados, o filtro do painel não tem as opções Pendente nem Reprovado, e o campo Status do formulário não lista Reprovado; não confirmei um jeito de desfazer a recusa ali.
