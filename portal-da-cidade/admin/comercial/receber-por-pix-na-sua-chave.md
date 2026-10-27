---
id: receber-por-pix-na-sua-chave
titulo: "receber por Pix direto na sua chave, sem o Asaas"
publico:
  - admin
modulo: financeiro
categoria: admin
aba: nao-se-aplica
tipo_problema: pagamento
tags:
  - pix
  - editar
  - pagamento
  - fatura
  - cliente
  - comprovante
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - lwaG-T87hJI
---

## objetivo

Aqui você cadastra ou troca a chave Pix e as instruções que o cliente vê para pagar. A alteração é protegida pelo autenticador.

## pré-requisitos

- Ter acesso administrativo ao portal.
- Ter um aplicativo autenticador no celular. O procedimento abaixo inclui a ativação na primeira vez.
- Para o Pix ser a via em uso, o Asaas deve estar sem conexão ou com `Cobrar pelo Asaas` desligado.

## passos

1. No menu da esquerda, na parte `Sistema`, abra `Configurações`. [t=11] [guia=sidebar.grupo-configuracoes]
2. Clique em `Cobrança`. [t=14] [guia=menu:/painel/configuracoes/cobranca]
3. No quadro `Recebimento por Pix`, clique em `cadastrar com autenticador` ou `trocar com autenticador`, junto de `Chave Pix`. [t=174] [guia=pix.chave]
4. Se abrir `Proteja a sua chave Pix`, leia o QR Code com o autenticador do celular. Se já estiver ativo, vá direto a `Nova chave Pix`. [t=183] [guia=autenticador.qr]
5. Na ativação, preencha `Código do autenticador` com os 6 números do aplicativo. [t=186] [guia=autenticador.codigo]
6. Na ativação, clique em `Ativar`. [t=188] [guia=autenticador.ativar]
7. Na tela dos códigos de reserva, clique em `Baixar`. Guarde o arquivo em lugar seguro. [t=197] [guia=autenticador.baixar-reservas]
8. Clique em `Já guardei`. [t=200] [guia=autenticador.ja-guardei]
9. Na janela `Trocar a chave Pix`, preencha `Nova chave Pix`. [t=202] [guia=pix.nova-chave]
10. Preencha `Instruções para o cliente`. [t=204] [guia=pix.instrucoes]
11. Preencha `Código do autenticador` com o código atual do aplicativo. [t=207] [guia=autenticador.codigo]
12. Clique em `Trocar chave`. [t=207] [guia=pix.trocar-chave]

## resultado

Após salvar, a chave e as instruções ficam no quadro de Pix. A confirmação do dinheiro recebido continua sendo manual.

## desvios

Se o autenticador já estava ativo, os passos de ativação e de reserva não aparecem: depois de clicar na chave, preencha `Nova chave Pix`. Para configurar o recebimento de comprovantes, veja `whatsapp-de-comprovantes-pix.md`.

Quem perdeu o aplicativo pode usar `Usar um código de reserva` na janela de troca. Não envie esses códigos ao assistente. Sem acesso ao aplicativo e sem reserva, peça ajuda humana.

Uma fatura já cobrada por Pix não muda automaticamente para Asaas quando você liga a integração.

## detalhes

- O autenticador pode ser qualquer aplicativo (ex.: Google Authenticator). Na ativação o portal mostra 6 códigos de reserva, para o caso de perder o celular.
- A chave Pix só muda com código do autenticador.

## o que o cliente vê

- Ao escolher um plano e clicar em `Quero este`, sem Asaas ele vê o aviso de plano aguardando pagamento, com a sua chave Pix, o botão de copiar e as suas instruções.
- Depois de pagar, ele toca em enviar comprovante pelo WhatsApp: a mensagem vai pronta para o número dos comprovantes, com nome do cliente, plano, número da fatura e valor.
- Fatura que já mostrou a chave Pix continua pelo Pix, mesmo se o Asaas for ligado depois.

## quando pedir ajuda

Peça ajuda se a tela mostrar erro ou se o resultado não corresponder ao que você salvou. Não envie senhas, chaves ou comprovantes ao assistente.

## fontes

- `portal-cidade/frontend/src/app/painel/configuracoes/cobranca/CartaoPix.tsx:73`
- `portal-cidade/frontend/src/app/painel/configuracoes/cobranca/ModaisAutenticador.tsx:161`
- `portal-cidade/frontend/src/app/painel/configuracoes/cobranca/ModaisAutenticador.tsx:173`
- `portal-cidade/frontend/src/app/painel/configuracoes/cobranca/ModaisAutenticador.tsx:242`
- `portal-cidade/frontend/src/app/painel/financeiro/LinhaDaFatura.tsx:151`

## lacunas

Conferência documental com o código em b2f62d3f e as transcrições/legendas do catálogo. Sem validação no navegador, execução financeira ou teste de integração nesta auditoria. Tempos indicam trechos da legenda; passos sem tempo não foram localizados no vídeo.
