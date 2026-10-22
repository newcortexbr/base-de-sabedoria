---
id: receber-por-pix-na-sua-chave
titulo: receber por Pix direto na sua chave, sem o Asaas
publico:
  - admin
modulo: financeiro
categoria: admin
aba: nao-se-aplica
tipo_problema: pagamento
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
videos:
  - lwaG-T87hJI
---

## objetivo

aqui você cadastra a chave Pix do portal e o WhatsApp que recebe os comprovantes, para cobrar as empresas sem o Asaas. A chave é protegida por um código do celular.

## pré-requisitos

- Ter acesso administrativo ao portal.
- Ter um aplicativo autenticador no celular, como o Google Authenticator.
- Sem o Asaas conectado, ou com `Cobrar pelo Asaas` desligado, o quadro `Recebimento por Pix` fica `✓ Em uso`. Para receber pelo Asaas, veja o artigo "conectar a conta Asaas e entender a cobrança".

## veja também
- para escolher o número que recebe os comprovantes, veja o artigo "definir o WhatsApp que recebe os comprovantes do Pix".

## passos

1. No menu da esquerda do painel, na parte `Sistema`, clique em `Configurações` e depois em `Cobrança`. [guia=menu:/painel/configuracoes/cobranca] [t=155]
2. Desça até o quadro `Recebimento por Pix`. [guia=pix.quadro] [t=158]
3. Em `Chave Pix`, clique em `cadastrar com autenticador` (ou `trocar com autenticador`, se já houver chave). [guia=pix.chave] [t=164]
4. Na primeira vez, abra o aplicativo autenticador no celular e leia o QR Code que aparece na janela `Proteja a sua chave Pix`. [guia=autenticador.qr] [t=170]
5. Digite em `Código do autenticador` os 6 números que aparecem no aplicativo. [guia=autenticador.codigo] [t=176]
6. Clique em `Ativar`. [guia=autenticador.ativar] [t=180]
7. Aparecem 6 códigos de reserva, que servem se você perder o celular. Clique em `Baixar` ou `Copiar` e guarde em lugar seguro. [guia=autenticador.ja-guardei] [t=183]
8. Clique em `Já guardei`. [guia=autenticador.ja-guardei]
9. Na janela `Trocar a chave Pix`, escreva a chave em `Nova chave Pix`. [guia=pix.nova-chave] [t=193]
10. Em `Instruções para o cliente`, escreva o que a empresa deve saber para pagar (por exemplo, em nome de quem está a chave). [guia=pix.instrucoes] [t=195]
11. Digite de novo o código do aplicativo autenticador. [guia=autenticador.codigo] [t=198]
12. Clique em `Trocar chave`. [guia=pix.trocar-chave] [t=200]

## resultado

quando a empresa contrata um plano, ela vê a sua chave Pix, o botão de copiar e as suas instruções, e manda o comprovante pelo WhatsApp com a mensagem pronta. a fatura aparece no `Financeiro` com o selo de Pix aguardando comprovante.

## desvios

- A mensagem pronta do WhatsApp de comprovante traz o nome do cliente, o plano, o número da fatura e o valor.
- No `Financeiro`, um cartão mostra quantas faturas aguardam o Pix.
- Para dar baixa quando o comprovante chegar, use `Já recebi` na fatura do `Financeiro` (veja o artigo de faturas e pagamentos): escolha como o cliente pagou, confira a data e o valor, escreva uma observação se quiser, marque a caixa de confirmação e clique em `Sim, já recebi`. A fatura vai para paga, a contratação é ativada e a próxima fatura do ciclo é gerada.
- Também dá para dar baixa pela ficha do cliente, em `Meus Clientes`, aba `Financeiro`, com o botão `Confirmar pagamento`.
- Os dois caminhos convivem: mesmo com o Asaas, se o cliente pagar por fora, use o `Já recebi`. Uma fatura que já mostrou a chave Pix segue por Pix, mesmo se o Asaas for ligado depois.
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
