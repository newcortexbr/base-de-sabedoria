---
id: copiar-link-de-pagamento
titulo: "copiar o link de pagamento de uma fatura"
publico:
  - admin
modulo: financeiro
categoria: admin
aba: nao-se-aplica
tipo_problema: pagamento
tags:
  - copiar
  - link
  - fatura
  - pagamento
  - cobrar
  - cliente
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - 1RHf0fcXgyE
---

## objetivo

Aqui você copia um link de pagamento que já foi gerado para uma fatura.

## pré-requisitos

- Ter acesso administrativo ao portal.
- A fatura deve mostrar `Cobrança enviada ao cliente` e o botão de copiar.

## passos

1. No menu da esquerda, na parte `Comercial`, clique em `Financeiro`. [t=11] [guia=menu:/painel/financeiro]
2. Clique em `A vencer` ou `Vencidas`, conforme o vencimento da fatura. [t=38] [guia=financeiro.aba]
3. Escreva o nome em `Buscar por cliente…`. [t=48] [guia=financeiro.busca]
4. Clique em `Copiar link de pagamento` na linha da fatura. [t=63] [guia=financeiro.copiar-link]

## resultado

Quando a cópia funciona, o botão mostra `Copiado!`.

## desvios

O botão aparece com cobrança Asaas enviada, enquanto a fatura aguarda pagamento e não está marcada como cobrada por Pix. Conectar uma conta não cria um link para toda fatura. Se aparecer `Cobrança ainda não enviada`, veja `enviar-cobranca-agora.md`.

## quando pedir ajuda

Peça ajuda se a tela mostrar erro ou se o resultado não corresponder ao que você salvou. Não envie senhas, chaves ou comprovantes ao assistente.

## fontes

- `portal-cidade/frontend/src/app/painel/financeiro/LinhaDaFatura.tsx:172`
- `portal-cidade/frontend/src/app/painel/financeiro/page.tsx:510`

## lacunas

Conferência documental com o código em b2f62d3f e as transcrições/legendas do catálogo. Sem validação no navegador, execução financeira ou teste de integração nesta auditoria. Tempos indicam trechos da legenda; passos sem tempo não foram localizados no vídeo.
