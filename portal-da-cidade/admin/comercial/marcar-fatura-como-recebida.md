---
id: marcar-fatura-como-recebida
titulo: "marcar uma fatura como recebida por fora"
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
  - lwaG-T87hJI
  - 1RHf0fcXgyE
---

## objetivo

Aqui você registra um pagamento que já recebeu fora do portal. Abrir `Já recebi` ainda não confirma o recebimento.

## pré-requisitos

- Ter acesso administrativo ao portal.
- Conferir o dinheiro recebido antes de confirmar a fatura.

## passos

1. No menu da esquerda, na parte `Comercial`, clique em `Financeiro`. [guia=menu:/painel/financeiro]
2. Clique em `A vencer` ou `Vencidas`, conforme o vencimento da fatura. [guia=financeiro.aba]
3. Escreva o nome em `Buscar por cliente…`. [guia=financeiro.busca]
4. Clique em `Já recebi` na linha correta. [t=255] [guia=financeiro.ja-recebi]
5. Na janela `Registrar pagamento recebido`, escolha a opção em `Como ele pagou?`. [t=257] [guia=pagamento.meio]
6. Preencha `Data do pagamento` com a data em que recebeu. [t=257] [guia=pagamento.data]
7. Confira e ajuste `Valor recebido (R$)` para o valor que entrou. [t=257] [guia=pagamento.valor]
8. Se necessário, preencha `Observação (opcional)`. [t=260] [guia=pagamento.observacao]
9. Marque a caixa `Confirmo que recebi` depois de conferir o valor e o cliente. [t=262] [guia=pagamento.confirmo]
10. Clique em `Sim, já recebi`. [t=265] [guia=pagamento.confirmar]

## resultado

A tela informa `Pagamento registrado` quando a operação funciona. A confirmação ativa a contratação; não é um envio de cobrança.

## desvios

O valor deve ser maior que zero; se diferir da fatura, a janela avisa. A data não permite selecionar o futuro. Quando há cobrança ativa no Asaas, a janela informa que ela será encerrada para evitar pagamento duplicado; eventual comissão desse recebimento manual fica para pagar por fora.

## quando pedir ajuda

Peça ajuda se a tela mostrar erro ou se o resultado não corresponder ao que você salvou. Não envie senhas, chaves ou comprovantes ao assistente.

## fontes

- `portal-cidade/frontend/src/components/painel/ModalConfirmarPagamento.tsx:91`
- `portal-cidade/frontend/src/components/painel/ModalConfirmarPagamento.tsx:125`
- `portal-cidade/frontend/src/components/painel/ModalConfirmarPagamento.tsx:143`
- `portal-cidade/frontend/src/app/painel/financeiro/LinhaDaFatura.tsx:242`

## lacunas

Conferência documental com o código em b2f62d3f e as transcrições/legendas do catálogo. Sem validação no navegador, execução financeira ou teste de integração nesta auditoria. Tempos indicam trechos da legenda; passos sem tempo não foram localizados no vídeo.
