---
id: testar-conexao-asaas
titulo: "testar a conexão da conta Asaas já cadastrada"
publico:
  - admin
modulo: financeiro
categoria: admin
aba: nao-se-aplica
tipo_problema: pagamento
tags:
  - testar
  - asaas
  - cobrar
  - pagamento
  - fatura
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - lwaG-T87hJI
---

## objetivo

Aqui você testa uma chave Asaas que já está cadastrada, sem alterar a opção de cobrança.

## pré-requisitos

- Ter acesso administrativo ao portal.
- Ter uma conta Asaas já cadastrada no portal.

## passos

1. No menu da esquerda, na parte `Sistema`, abra `Configurações`. [t=11] [guia=sidebar.grupo-configuracoes]
2. Clique em `Cobrança`. [t=14] [guia=menu:/painel/configuracoes/cobranca]
3. Confira o estado no quadro `Conta Asaas`. [t=107] [guia=cobranca.estado]
4. Clique em `Testar conexão`. [t=124] [guia=cobranca.testar]

## resultado

A tela mostra a mensagem retornada pelo teste ou o motivo do erro.

## desvios

O estado `Desligada` indica conta cadastrada com cobrança desligada; não significa que a chave foi apagada. Testar não liga a cobrança nem comprova pagamento de fatura. Se precisar cobrar pelo Asaas, use `Cobrar pelo Asaas` no quadro da conta. O aviso `A cobrança funciona, mas a confirmação automática não.` exige tratar a confirmação conforme a orientação da tela.

## quando pedir ajuda

Peça ajuda se a tela mostrar erro ou se o resultado não corresponder ao que você salvou. Não envie senhas, chaves ou comprovantes ao assistente.

## fontes

- `portal-cidade/frontend/src/app/painel/configuracoes/cobranca/page.tsx:149`
- `portal-cidade/frontend/src/app/painel/configuracoes/cobranca/page.tsx:210`
- `portal-cidade/frontend/src/app/painel/configuracoes/cobranca/page.tsx:336`
- `portal-cidade/frontend/src/app/painel/configuracoes/cobranca/page.tsx:395`

## lacunas

Conferência documental com o código em b2f62d3f e as transcrições/legendas do catálogo. Sem validação no navegador, execução financeira ou teste de integração nesta auditoria. Tempos indicam trechos da legenda; passos sem tempo não foram localizados no vídeo.
