---
id: recusar-envio-para-aprovacao
titulo: "recusar um envio que aguarda aprovação"
publico:
  - admin
modulo: aprovações
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-19
validacao: docs-e-codigo
videos:
  - JYDoZB_vyX8
---

## objetivo
aqui você recusa o que um cliente enviou para o portal e explica o motivo. O cliente recebe o motivo para corrigir e reenviar.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No menu da esquerda, logo no começo, clique em `Aprovações e Denúncias`. [guia=menu:/painel/aprovacoes]
2. Na aba `Aprovações`, clique em `Ver detalhe` na linha do envio que você quer conferir. [guia=aprovacoes.ver-detalhe]
3. Para não publicar, clique em `Recusar`. [guia=aprovacoes.recusar]
4. Escreva o motivo da recusa (é obrigatório). O cliente recebe o motivo para corrigir e reenviar. [guia=aprovacoes.motivo]
5. Clique em `Confirmar recusa`. [guia=aprovacoes.confirmar-recusa]

## resultado
O envio não vai ao ar e o cliente recebe o motivo.

## desvios

- Com a fila desligada, os envios dos clientes não passam por você.
- `A Voz do Povo` é outra coisa: são relatos de moradores, em outra tela.

## quando pedir ajuda

peça ajuda se a página não carregar, se o salvamento der erro ou se a opção esperada não aparecer.

## fontes

- `portal-cidade/frontend/src/app/painel/aprovacoes/`: `AprovacoesEDenuncias.tsx`, `ConfigDaFila.tsx`
- `suporte-kb/mapa/admin/telas/painel-aprovacoes.md`

## lacunas

não foi feita validação visual no navegador. Os textos dos botões podem mudar.
