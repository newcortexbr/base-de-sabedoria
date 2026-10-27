---
id: whatsapp-de-comprovantes-pix
titulo: "definir o WhatsApp que recebe os comprovantes do Pix"
publico:
  - admin
modulo: financeiro
categoria: admin
aba: nao-se-aplica
tipo_problema: pagamento
tags:
  - whatsapp
  - pix
  - comprovante
  - editar
  - pagamento
  - contato
  - telefone
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - lwaG-T87hJI
---

## objetivo

Aqui você troca o WhatsApp que recebe os comprovantes de pagamento Pix. Esse campo é separado do WhatsApp de contato do portal.

## pré-requisitos

- Ter acesso administrativo ao portal.

## passos

1. No menu da esquerda, na parte `Sistema`, abra `Configurações`. [t=11] [guia=sidebar.grupo-configuracoes]
2. Clique em `Cobrança`. [t=14] [guia=menu:/painel/configuracoes/cobranca]
3. No quadro `Recebimento por Pix`, preencha `WhatsApp que recebe os comprovantes`. [t=210] [guia=pix.whatsapp]
4. Clique em `Salvar WhatsApp`. [t=212] [guia=pix.salvar-whatsapp]

## resultado

O número é salvo quando a operação funciona, e o resultado aparece abaixo do campo.

## desvios

Este campo não pede código do autenticador: a proteção é da chave Pix e das instruções. `Salvar WhatsApp` fica desabilitado se nada mudou ou se o número é inválido. Para registrar o pagamento depois de receber e conferir o dinheiro, veja `marcar-fatura-como-recebida.md`.

## uso

Esse número recebe a mensagem pronta que o cliente envia ao tocar em enviar comprovante, com nome do cliente, plano, número da fatura e valor.

## quando pedir ajuda

Peça ajuda se a tela mostrar erro ou se o resultado não corresponder ao que você salvou. Não envie senhas, chaves ou comprovantes ao assistente.

## fontes

- `portal-cidade/frontend/src/app/painel/configuracoes/cobranca/CartaoPix.tsx:93`
- `portal-cidade/frontend/src/app/painel/configuracoes/cobranca/CartaoPix.tsx:108`

## lacunas

Conferência documental com o código em b2f62d3f e as transcrições/legendas do catálogo. Sem validação no navegador, execução financeira ou teste de integração nesta auditoria. Tempos indicam trechos da legenda; passos sem tempo não foram localizados no vídeo.
