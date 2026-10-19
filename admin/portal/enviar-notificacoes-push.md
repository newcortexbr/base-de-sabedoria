---
id: enviar-notificacoes-push
titulo: enviar notificações push aos visitantes
publico:
  - admin
modulo: notificações
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-16
validacao: docs-e-codigo
videos:
  - -ZLL7Cqwcok
---

## objetivo

enviar avisos para quem aceitou receber e ver quantas pessoas abriram.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No menu da esquerda, na parte `Sistema`, clique em `Notificações Push` (`/painel/notificacoes`). No topo da página você vê quantas pessoas aceitaram receber avisos, quantos avisos já foram enviados no mês e quantas pessoas abriram.
2. Para o site perguntar aos visitantes se querem receber avisos, marque a opção `Convidar visitantes a receber notificações`. Não precisa salvar: muda na hora.
3. Logo abaixo, no quadro `Nova notificação`, escreva o `Título` (até 50 letras), a `Mensagem` (até 120 letras) e o `Link`, que é o endereço completo da página que vai abrir (começa com `https://` ou `http://`). Ao lado, você vê como o aviso vai aparecer no celular.
4. Em `Quando`, escolha `Agora` ou `Agendar`. Se escolher `Agendar`, informe a data e a hora.
5. Clique no botão `Enviar para…` (ou `Agendar para…`), que mostra quantas pessoas vão receber.
6. Confirme na janela que aparece. Depois de enviado, o aviso não pode ser desfeito.
7. Mais abaixo, no quadro `Histórico`, você vê o que já foi enviado e quantas pessoas abriram. Um aviso agendado ainda pode ser cancelado ali, no botão `Cancelar`.

## resultado

o aviso chega a quem aceitou receber; o `Histórico` mostra quantos receberam e quantos abriram.

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
