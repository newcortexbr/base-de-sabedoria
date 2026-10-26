---
id: aprovar-cadastro-de-empresa
titulo: "aprovar o cadastro de empresa feito pelo próprio cliente"
publico:
  - admin
modulo: aprovações
categoria: aprovações
aba: Aprovações
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - JYDoZB_vyX8
---

## objetivo

aqui você libera ou recusa a empresa que o próprio cliente cadastrou no Guia Comercial. Enquanto você não aprova, ela não aparece no site.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.
- Existir um cadastro de empresa pendente na fila de aprovação.

## explicação

Com `Exigir minha aprovação antes de publicar` ligado, os cadastros sujeitos à aprovação ficam pendentes. Para recusar, veja "recusar o cadastro de uma empresa". O vídeo trata da fila geral e exemplifica uma vaga; não demonstra a aprovação de uma empresa.

## passos

1. No menu da esquerda, clique em `Aprovações e Denúncias`. [guia=menu:/painel/aprovacoes] [t=5]
2. No envio do tipo `Empresa`, clique em `Ver detalhe`. [guia=aprovacoes.ver-detalhe]
3. Clique em `Aprovar` na janela de detalhes. Antes, confira os dados. [guia=aprovacoes.aprovar-detalhe]

## resultado

A aprovação muda a situação da empresa para `Ativo` e limpa o motivo de reprovação. A exibição pública também depende das regras de visibilidade do Guia.

## desvios

Para localizar empresas pendentes fora da fila, use `Guia Comercial` > `Listar Empresas` e o filtro `Pendente`. Recusa e aprovação são ações diferentes.

## quando pedir ajuda

Peça ajuda se a aprovação falhar ou se a empresa continuar fora do Guia.

## fontes

- `portal-cidade/frontend/src/app/painel/aprovacoes/AprovacoesClient.tsx:244-275,405-410`.
- `portal-cidade/backend/guia/moderacao.py:101-117`.
- Vídeo `JYDoZB_vyX8`: demonstra a fila com uma vaga, não uma empresa.

## lacunas

Sem validação no navegador. Sem tempo de vídeo marcado para empresa, pois o exemplo gravado é de vaga.
