---
id: recusar-cadastro-de-empresa
titulo: "recusar o cadastro de uma empresa"
publico:
  - admin
modulo: guia
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - JYDoZB_vyX8
---

## objetivo

Aqui você recusa uma empresa pendente e informa ao cliente o que precisa corrigir.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.
- O módulo Guia Comercial estar disponível.

## passos

1. No menu da esquerda, clique em `Aprovações e Denúncias`. [guia=menu:/painel/aprovacoes] [t=5]
2. Na linha do envio do tipo `Empresa`, clique em `Recusar`. [guia=aprovacoes.recusar]
3. Escreva o motivo na janela de recusa. [guia=aprovacoes.motivo]
4. Clique em `Confirmar recusa`. [guia=aprovacoes.confirmar-recusa]

## resultado

A empresa fica `Reprovado`, com o motivo registrado. A janela informa que o motivo é enviado ao cliente para correção e reenvio.

## quando pedir ajuda

Peça ajuda se o controle não aparecer ou se a tela mostrar erro ao salvar.

## fontes

- `portal-cidade/frontend/src/app/painel/aprovacoes/AprovacoesClient.tsx:170-185,255-263,426-456`.
- `portal-cidade/backend/guia/moderacao.py:115-117`.

## lacunas

Sem recusa real nem verificação da entrega do aviso. O vídeo exemplifica vaga, não empresa, por isso não recebe tempo neste roteiro.
