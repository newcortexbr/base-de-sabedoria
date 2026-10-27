---
id: cliente-parceiro-carteira-asaas
titulo: "cadastrar a carteira Asaas do parceiro para receber comissões"
publico:
  - parceiro
permissoes:
  - parceiro-comercial
modulo: parceiro
categoria: parceiro
aba: Perfil
tipo_problema:
  - carteira-asaas
tags:
  - asaas
  - carteira
  - parceiro
  - comissao
  - cadastro
  - criar
status: rascunho-documental
revisado_em: 2026-10-24
validacao: video
videos:
  - J7njZgIoVes
---

## objetivo

criar a conta no Asaas, copiar o `Wallet ID` e salvá-lo no painel do parceiro para receber comissões.

## pré-requisitos

- estar logado no painel do parceiro.
- ter e-mail, CPF (pessoa física) ou CNPJ (empresa), endereço, telefone e os documentos que o Asaas pedir.

## explicação

- o Asaas é a plataforma de pagamentos usada pelo portal.
- com a carteira informada, as comissões vão direto para a sua conta quando o portal liga o repasse automático; antes disso o portal paga as comissões diretamente.
- trocar a carteira sempre pede a senha atual do painel, e você recebe um e-mail avisando da mudança.

## passos

1. No site oficial do Asaas, na tela de abrir conta, informe o e-mail, crie uma senha com pelo menos oito caracteres, um número e uma letra, confirme a senha, aceite os termos e clique em criar conta. [t=19] [guia=fora]
2. Informe os dados de pessoa física (CPF) ou empresa (CNPJ), endereço e telefone, envie os documentos pedidos e aguarde a aprovação. O Asaas avisa por e-mail quando a conta for liberada. [t=37] [guia=fora]
3. Entre na conta Asaas. No canto superior direito, clique no ícone do perfil e depois em `Integrações`. [t=60] [guia=fora]
4. Desça até o quadro `Wallet ID` e clique em copiar ao lado do código. Aparece a mensagem de que o Wallet ID foi copiado. [t=71] [guia=fora]
5. Volte ao painel do parceiro e clique em `Perfil` no menu da esquerda. [t=85] [guia=menu:/parceiro/perfil]
6. No quadro `Carteira de recebimento`, confira a situação (`Não informada` no começo). [t=89] [guia=parceiro.carteira]
7. Cole o código no campo `ID da carteira Asaas` e confira se ficou completo. [t=95] [guia=parceiro.carteira-id]
8. Digite a senha do painel em `Sua senha atual`. [t=105] [guia=parceiro.carteira-senha]
9. Clique em `Salvar carteira`. [t=115] [guia=parceiro.carteira-salvar]

## resultado

aparece "Carteira salva." e a situação muda para `Informada`. Quando o portal ligar o repasse automático, as comissões dos pagamentos feitos pelo Asaas vão direto para a sua carteira (no Pix, logo após o pagamento; no cartão, cerca de 30 dias depois, segundo a tela), e você acompanha em `Minhas comissões`.

## desvios

- se o Asaas recusar a carteira, o painel avisa ("O Asaas recusou esta carteira…"): copie o Wallet ID de novo em `Integrações` e salve outra vez.
- senha errada: o erro aparece no campo `Sua senha atual`.

## quando pedir ajuda

se a carteira continuar recusada ou a conta Asaas não for liberada, peça ajuda ao portal. Não envie senha.

## fontes

- `portal-cidade/frontend/src/app/parceiro/(shell)/perfil/ParceiroPerfilClient.tsx:94-182` — quadro, campos, situação, mensagens.
- `portal-cidade/frontend/src/app/parceiro/ParceiroSidebar.tsx:17-30` — `Perfil` no menu.

## lacunas

- os passos 1 a 4 acontecem no site do Asaas, fora do portal; o texto vem do vídeo e pode mudar.
- a marca do item `Perfil` no menu do parceiro não existe ainda (veja `data-guia faltando` do lote).
