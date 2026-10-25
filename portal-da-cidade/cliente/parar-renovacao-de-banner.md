---
id: cliente-parar-renovacao-de-banner
titulo: "parar a renovação de um banner"
publico:
  - cliente
modulo: publicidade
categoria: conta
aba: nao-se-aplica
tipo_problema:
  - cancelar banner
  - parar de pagar o banner
  - não renovar banner
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - Mu5xmUB7w9o
---

## objetivo
aqui você impede que um banner seja cobrado de novo no próximo período.

## pré-requisitos

- Ter um banner já pago (situação diferente de `Aguardando pagamento`).

## passos

1. Na parte `O que eu publico` do menu da esquerda, clique em `Banners Publicitários`. [guia=menu:/minha-conta/publicidade]
2. Na linha do banner, clique em `Parar renovação`. [t=175] [guia=publicidade.parar-renovacao]
3. Confirme na janela do navegador que pergunta `Parar a renovação deste banner?`. [t=178] [guia=fora]

## resultado
o banner continua no ar até o fim do período já pago e não é cobrado de novo. A linha passa a mostrar `Renovação cancelada`.

## desvios

- O período atual não é reembolsado.
- O botão `Parar renovação` não aparece em banner `Aguardando pagamento` nem em banner que já teve a renovação cancelada.

## quando pedir ajuda

peça ajuda se aparecer "Não foi possível cancelar a renovação agora." mais de uma vez.

## fontes

- `frontend/src/app/minha-conta/publicidade/page.tsx:106-122` — confirmação e erro; `:218-233` botão `Parar renovação`; `:234-238` nota `Renovação cancelada`.

## lacunas

tela não validada no navegador nesta tarefa.
