---
id: pagar-comissao-de-parceiro-por-fora
titulo: "pagar a comissão de um parceiro por fora do portal"
publico:
  - admin
modulo: parceiros
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - pagar
  - comissao
  - parceiro
  - pix
  - comprovante
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - 8gIDPdapN0E
---

## objetivo

Aqui você registra uma comissão que já pagou por Pix, transferência ou outro meio fora do portal. O registro não transfere dinheiro.

## pré-requisitos

- Ter acesso administrativo ao portal.

## passos

1. No menu da esquerda, na parte `Comercial`, clique em `Parceiros`. [t=8] [guia=menu:/painel/parceiros]
2. Pague o parceiro fora do portal antes de registrar a baixa. [t=37] [guia=fora]
3. Role até o quadro `Comissões para pagar por fora`. [guia=parceiros.comissoes]
4. Clique em `Marcar paga` na comissão correta. [t=39] [guia=parceiros.marcar-paga]
5. Na janela `Marcar comissão como paga`, confira `Pago em`. [guia=parceiros.baixa-data]
6. Escolha `Como pagou`. [guia=parceiros.baixa-forma]
7. Se quiser guardar o recibo, selecione o arquivo em `Comprovante (opcional)`. [guia=parceiros.baixa-comprovante]
8. Se precisar, preencha `Observação (opcional)`. [guia=parceiros.baixa-observacao]
9. Clique em `Marcar paga` na janela. [guia=parceiros.confirmar-marcar-paga]

## resultado

A comissão passa a paga após a operação. A tela avisa que essa baixa não pode ser desfeita.

## desvios

A data não pode ser futura. O comprovante aceita imagem ou PDF de até 5 MB e pode ser anexado ou trocado depois pelo extrato. Para mudar a comissão de venda ou renovação, edite o plano em `Planos de parceiro`; veja `mudar-comissao-do-plano-de-parceiro.md`.

## ver as comissões

- `Ver todas as comissões` separa o que é para pagar por fora, o que está caindo pelo Asaas e o que já foi pago; filtra por parceiro.
- `Extrato de pagas` mostra as já baixadas.
- Os cartões `Pagar por fora` e `Pelo Asaas, sozinho`, no topo da tela, abrem a mesma lista.

## quando pedir ajuda

Peça ajuda se a tela mostrar erro ou se o resultado não corresponder ao que você salvou. Não envie senhas, chaves ou comprovantes ao assistente.

## fontes

- `portal-cidade/frontend/src/components/painel/ComissoesParceiros.tsx:73-78` (botão `Marcar paga` na linha)
- `portal-cidade/frontend/src/app/painel/parceiros/page.tsx:1065` (título do quadro `Comissões para pagar por fora`)
- `portal-cidade/frontend/src/components/painel/parceiros/ModalBaixaComissao.tsx:45`
- `portal-cidade/frontend/src/components/painel/parceiros/ModalBaixaComissao.tsx:83`
- `portal-cidade/frontend/src/components/painel/parceiros/ModalBaixaComissao.tsx:145`

## lacunas

Conferência documental com o código em b2f62d3f e as transcrições/legendas do catálogo. Sem validação no navegador, execução financeira ou teste de integração nesta auditoria. Tempos indicam trechos da legenda; passos sem tempo não foram localizados no vídeo.
