---
id: enviar-cobranca-agora
titulo: "enviar agora a cobrança de uma fatura"
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

Aqui você tenta gerar a cobrança Asaas de uma fatura que ainda não foi enviada.

## pré-requisitos

- Ter acesso administrativo ao portal.
- A cobrança pelo Asaas deve estar disponível e a fatura deve mostrar `Cobrança ainda não enviada`.

## passos

1. No menu da esquerda, na parte `Comercial`, clique em `Financeiro`. [t=11] [guia=menu:/painel/financeiro]
2. Clique em `A vencer` ou `Vencidas`, conforme o vencimento da fatura. [t=38] [guia=financeiro.aba]
3. Escreva o nome em `Buscar por cliente…`. [t=48] [guia=financeiro.busca]
4. Clique em `Enviar agora` na fatura desejada. [guia=financeiro.enviar-agora]

## resultado

Se a operação funcionar, a linha passa a mostrar a cobrança enviada e a opção de copiar o link. Se falhar, aparece o erro.

## desvios

`Enviar agora` não confirma pagamento. Para faturas com `Cobrança não enviada`, a tela pode pedir correção dos dados ou oferecer nova tentativa. Fatura já cobrada por Pix tem uma ação diferente, `Enviar pelo Asaas mesmo assim`, com confirmação própria; ela não é este procedimento.

## quando pedir ajuda

Peça ajuda se a tela mostrar erro ou se o resultado não corresponder ao que você salvou. Não envie senhas, chaves ou comprovantes ao assistente.

## fontes

- `portal-cidade/frontend/src/app/painel/financeiro/LinhaDaFatura.tsx:151`
- `portal-cidade/frontend/src/app/painel/financeiro/LinhaDaFatura.tsx:184`
- `portal-cidade/frontend/src/app/painel/financeiro/page.tsx:177`

## lacunas

Conferência documental com o código em b2f62d3f e as transcrições/legendas do catálogo. Sem validação no navegador, execução financeira ou teste de integração nesta auditoria. Tempos indicam trechos da legenda; passos sem tempo não foram localizados no vídeo.
