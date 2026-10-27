---
id: mudar-comissao-do-plano-de-parceiro
titulo: "mudar a comissão do plano de parceiro"
publico:
  - admin
modulo: parceiros
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - comissao
  - parceiro
  - plano
  - editar
  - preco
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - 8gIDPdapN0E
---

## objetivo

Aqui você muda os percentuais de venda e renovação dos parceiros. A comissão é definida por plano e vale para todos os parceiros daquele plano.

## pré-requisitos

- Ter acesso administrativo ao portal.

## passos

1. No menu da esquerda, na parte `Comercial`, clique em `Parceiros`. [t=8] [guia=menu:/painel/parceiros]
2. Em `Planos de parceiro`, clique em `Editar` no cartão do plano desejado. [t=102] [guia=parceiros.plano-editar]
3. Na janela `Editar plano`, altere `% de venda` para o percentual da venda. [t=108] [guia=parceiros.plano-percentual-venda]
4. Altere `% residual` para o percentual das renovações. [t=110] [guia=parceiros.plano-percentual-residual]
5. Clique em `Salvar`. [guia=parceiros.plano-salvar]

## resultado

A janela fecha e os planos são carregados novamente após o salvamento.

## outros campos dessa janela

`Nome do plano *` muda o nome. Nos planos pagos, `Periodicidade` e `Valor (R$)` também são editáveis; a periodicidade oferece `Mensal`, `Semestral` e `Anual`. A caixa `Plano ativo (disponível para atribuir a um parceiro)` controla a oferta do plano pago. No gratuito, aparece `Oferecer o plano gratuito`, e o valor permanece R$ 0,00.

Os dois percentuais aceitam de 0 a 100. `% residual` igual a zero desliga o residual daquele plano. Para mudar qual plano uma pessoa usa, veja `mudar-plano-de-um-parceiro.md`.

## limite da orientação

Este procedimento altera a configuração do plano. O efeito sobre comissões já registradas e cobranças em andamento não foi verificado; não prometa recálculo retroativo.

## quando pedir ajuda

Peça ajuda se a tela mostrar erro ou se o resultado não corresponder ao que você salvou. Não envie senhas, chaves ou comprovantes ao assistente.

## fontes

- `portal-cidade/frontend/src/app/painel/parceiros/page.tsx:124`
- `portal-cidade/frontend/src/app/painel/parceiros/page.tsx:175`
- `portal-cidade/frontend/src/app/painel/parceiros/page.tsx:188`
- `portal-cidade/frontend/src/app/painel/parceiros/page.tsx:203`
- `portal-cidade/frontend/src/app/painel/parceiros/page.tsx:1195`
- `portal-cidade/backend/parceiros/models.py:69`

## lacunas

Conferência documental com o código em b2f62d3f e as transcrições/legendas do catálogo. Sem validação no navegador, execução financeira ou teste de integração nesta auditoria. Tempos indicam trechos da legenda; passos sem tempo não foram localizados no vídeo.
