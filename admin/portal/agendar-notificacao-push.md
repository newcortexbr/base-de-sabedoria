---
id: agendar-notificacao-push
titulo: "agendar uma notificação push para outro dia"
publico:
  - admin
modulo: notificações
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-19
validacao: docs-e-codigo
videos:
  - -ZLL7Cqwcok
---

## objetivo
aqui você escreve um aviso e marca o dia e a hora para ele ser enviado. Quem aceitou receber avisos recebe na hora marcada.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No menu da esquerda, na parte `Sistema`, clique em `Notificações Push`. [guia=menu:/painel/notificacoes]
2. No quadro `Nova notificação`, escreva o `Título` (até 50 letras). [guia=notificacoes.titulo]
3. Escreva a `Mensagem` (até 120 letras). [guia=notificacoes.mensagem]
4. Escreva o `Link`, que é o endereço completo da página que vai abrir (começa com `https://` ou `http://`). Ao lado, a prévia mostra como o aviso vai aparecer no celular. [guia=notificacoes.link]
5. Em `Quando`, escolha `Agendar`. [guia=notificacoes.quando]
6. Informe a `Data`. [guia=notificacoes.data]
7. Informe também a `Hora`. [guia=notificacoes.hora]
8. Clique no botão `Agendar para…`, que mostra quantas pessoas vão receber. [guia=notificacoes.enviar]
9. Confirme na janela que aparece. Depois de enviado, o aviso não pode ser desfeito. [guia=notificacoes.enviar]

## resultado
O aviso aparece no `Histórico` como agendado e sai na data e hora escolhidas.

## desvios

- Se aparecer o aviso de que o envio não está disponível, o botão de enviar fica apagado e não funciona.
- Notificação enviada não volta.

## quando pedir ajuda

peça ajuda se a página não carregar, se o salvamento der erro ou se a opção esperada não aparecer.

## fontes

- `portal-cidade/frontend/src/app/painel/notificacoes/page.tsx`
- `suporte-kb/mapa/admin/telas/painel-notificacoes.md`

## lacunas

não foi feita validação visual no navegador. Os textos dos botões podem mudar.
