---
id: comissao-de-parceiro-pelo-asaas
titulo: "mandar a comissão do parceiro direto pelo Asaas"
publico:
  - admin
modulo: parceiros
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - comissao
  - parceiro
  - asaas
  - pagar
  - ligar
  - automatico
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - 8gIDPdapN0E
---

## objetivo

Aqui você liga o repasse automático de comissão pelo Asaas. Para mudar o percentual, use `Planos de parceiro` > `Editar`; veja `mudar-comissao-do-plano-de-parceiro.md`.

## pré-requisitos

- Ter acesso administrativo ao portal.
- O parceiro deve ter informado a carteira Asaas e o cliente deve pagar pelo link do Asaas.

## passos

1. No menu da esquerda, na parte `Comercial`, clique em `Parceiros`. [t=8] [guia=menu:/painel/parceiros]
2. Em `Como você paga os parceiros`, marque `Mandar a comissão direto pelo Asaas`. [t=143] [guia=parceiros.split-asaas]

## resultado

A chave é salva ao mudar. Ligada, permite o repasse pelo Asaas para parceiros com carteira informada.

## desvios

Sem carteira Asaas, a comissão é paga por fora. Pagamento confirmado manualmente, por Pix ou dinheiro recebido direto por você, também gera comissão para pagar por fora. Ligar a chave não comprova repasse de uma comissão antiga.

A comissão é por plano, para todos os parceiros vinculados a ele. O percentual não é escolhido nesse interruptor.

## quando pedir ajuda

Peça ajuda se a tela mostrar erro ou se o resultado não corresponder ao que você salvou. Não envie senhas, chaves ou comprovantes ao assistente.

## fontes

- `portal-cidade/frontend/src/app/painel/parceiros/page.tsx:1261`
- `portal-cidade/frontend/src/app/painel/parceiros/page.tsx:1291`
- `portal-cidade/frontend/src/app/painel/parceiros/page.tsx:175`

## lacunas

Conferência documental com o código em b2f62d3f e as transcrições/legendas do catálogo. Sem validação no navegador, execução financeira ou teste de integração nesta auditoria. Tempos indicam trechos da legenda; passos sem tempo não foram localizados no vídeo.
