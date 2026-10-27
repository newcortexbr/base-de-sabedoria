---
id: cobrar-plano-de-parceiro-pelo-asaas
titulo: "cobrar um novo plano do parceiro pelo Asaas"
publico:
  - admin
modulo: parceiros
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - cobrar
  - parceiro
  - plano
  - asaas
  - link
  - pagamento
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - 8gIDPdapN0E
---

## objetivo

Aqui você gera o link de pagamento de um novo plano para um parceiro já cadastrado. Isso é diferente de pagar a comissão que ele ganhou.

## pré-requisitos

- Ter acesso administrativo ao portal.
- O parceiro deve estar cadastrado, deve existir plano pago ativo e a opção de cobrança Asaas deve estar disponível.

## passos

1. No menu da esquerda, na parte `Comercial`, clique em `Parceiros`. [t=8] [guia=menu:/painel/parceiros]
2. Em `Seus parceiros`, clique no lápis `Editar dados e plano` da pessoa desejada. [t=83] [guia=parceiros.editar-dados-plano]
3. Em `Plano do parceiro`, selecione um plano pago diferente do atual. [guia=parceiros.plano]
4. Marque `Cobrar pelo Asaas (automático)`. [guia=parceiros.plano-asaas]
5. Preencha `CPF ou CNPJ do parceiro *`. [guia=parceiros.plano-documento]
6. Preencha `E-mail da cobrança *`. [guia=parceiros.plano-email-cobranca]
7. Clique em `Salvar e gerar link`. [guia=parceiros.salvar]

## resultado

O sistema solicita a cobrança e gera o link. A tela explica que o plano vale quando o parceiro pagar.

## desvios

O botão não muda para `Salvar e gerar link` apenas porque o plano é pago: é preciso escolher a cobrança Asaas. Para cadastrar uma pessoa primeiro, veja `gerenciar-parceiros.md`.

## quando pedir ajuda

Peça ajuda se a tela mostrar erro ou se o resultado não corresponder ao que você salvou. Não envie senhas, chaves ou comprovantes ao assistente.

## fontes

- `portal-cidade/frontend/src/app/painel/parceiros/page.tsx:251`
- `portal-cidade/frontend/src/app/painel/parceiros/page.tsx:296`
- `portal-cidade/frontend/src/app/painel/parceiros/page.tsx:429`
- `portal-cidade/frontend/src/app/painel/parceiros/page.tsx:443`
- `portal-cidade/frontend/src/app/painel/parceiros/page.tsx:469`

## lacunas

Conferência documental com o código em b2f62d3f e as transcrições/legendas do catálogo. Sem validação no navegador, execução financeira ou teste de integração nesta auditoria. Tempos indicam trechos da legenda; passos sem tempo não foram localizados no vídeo.
