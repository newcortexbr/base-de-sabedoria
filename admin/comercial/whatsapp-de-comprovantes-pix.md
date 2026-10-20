---
id: whatsapp-de-comprovantes-pix
titulo: "definir o WhatsApp que recebe os comprovantes do Pix"
publico:
  - admin
modulo: financeiro
categoria: admin
aba: nao-se-aplica
tipo_problema: pagamento
status: rascunho-documental
revisado_em: 2026-10-19
validacao: docs-e-codigo
videos:
  - lwaG-T87hJI
---

## objetivo
aqui você escolhe o número de WhatsApp que recebe os comprovantes de pagamento.

## pré-requisitos

- Ter acesso administrativo ao portal.
- Ter um aplicativo autenticador no celular, como o Google Authenticator.
- Sem o Asaas conectado, ou com `Cobrar pelo Asaas` desligado, o quadro `Recebimento por Pix` fica `✓ Em uso`. Para receber pelo Asaas, veja o artigo "conectar a conta Asaas e entender a cobrança".

## passos

1. No menu da esquerda do painel, na parte `Sistema`, clique em `Configurações` e depois em `Cobrança`. [guia=menu:/painel/configuracoes/cobranca]
2. Desça até o quadro `Recebimento por Pix`. [guia=pix.quadro]
3. Em `WhatsApp que recebe os comprovantes`, escreva o número que vai receber os comprovantes. [guia=pix.whatsapp]
4. Clique em `Salvar WhatsApp`. Deve aparecer `✓ WhatsApp salvo.` [guia=pix.salvar-whatsapp]

## resultado
O número fica salvo e aparece `✓ WhatsApp salvo.`

## desvios

- Para dar baixa quando o comprovante chegar, use `Já recebi` na fatura do `Financeiro` (veja o artigo de faturas e pagamentos).
- Perdeu o celular: na janela `Trocar a chave Pix`, clique em `Usar um código de reserva` e digite um dos códigos guardados.
- Sem celular e sem código de reserva, só a plataforma (Master) zera o autenticador.
- O WhatsApp dos comprovantes é um campo próprio: não é o WhatsApp de contato do portal.

## quando pedir ajuda

peça ajuda se perdeu o celular e os códigos de reserva, ou se a chave não for trocada mesmo com o código certo.

## fontes

- `portal-cidade/frontend/src/app/painel/configuracoes/cobranca/CartaoPix.tsx:49-135` — quadro `Recebimento por Pix`.
- `portal-cidade/frontend/src/app/painel/configuracoes/cobranca/ModaisAutenticador.tsx` — janelas do autenticador e de troca da chave.
- vídeo `lwaG-T87hJI` 02:35–03:35.

## lacunas

não verificado visualmente; tempos tirados da legenda automática.
