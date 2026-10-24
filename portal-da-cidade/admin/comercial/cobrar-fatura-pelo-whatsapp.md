---
id: cobrar-fatura-pelo-whatsapp
titulo: "cobrar uma fatura pelo WhatsApp"
publico:
  - admin
modulo: financeiro
categoria: admin
aba: nao-se-aplica
tipo_problema: pagamento
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - 1RHf0fcXgyE
---

## objetivo

Aqui você abre o WhatsApp do cliente com a mensagem de cobrança pronta.

## pré-requisitos

- Ter acesso administrativo ao portal.

## passos

1. No menu da esquerda, na parte `Comercial`, clique em `Financeiro`. [t=11] [guia=menu:/painel/financeiro]
2. Clique em `A vencer` ou `Vencidas`, conforme o vencimento da fatura. [t=38] [guia=financeiro.aba]
3. Escreva o nome em `Buscar por cliente…`. [t=48] [guia=financeiro.busca]
4. Clique em `Cobrar` na linha da fatura. [t=65] [guia=financeiro.cobrar]
5. No WhatsApp, envie a mensagem depois de conferir o destinatário e a cobrança. [guia=fora]

## resultado

O portal abre a conversa em outra aba. O envio da mensagem acontece no WhatsApp.

## desvios

O texto visível é `Cobrar`; ao passar o mouse, aparece `Cobrar pelo WhatsApp` ou `Cobrar atraso pelo WhatsApp`. Sem WhatsApp cadastrado, o botão fica desabilitado e informa `Este cliente não tem WhatsApp cadastrado.` A ação só aparece para faturas aguardando pagamento.

## quando pedir ajuda

Peça ajuda se a tela mostrar erro ou se o resultado não corresponder ao que você salvou. Não envie senhas, chaves ou comprovantes ao assistente.

## fontes

- `portal-cidade/frontend/src/app/painel/financeiro/LinhaDaFatura.tsx:209`
- `portal-cidade/frontend/src/app/painel/financeiro/page.tsx:510`

## lacunas

Conferência documental com o código em b2f62d3f e as transcrições/legendas do catálogo. Sem validação no navegador, execução financeira ou teste de integração nesta auditoria. Tempos indicam trechos da legenda; passos sem tempo não foram localizados no vídeo.
