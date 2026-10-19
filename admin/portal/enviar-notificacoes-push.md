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

enviar avisos para quem se inscreveu no portal e ver o resultado.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No menu da esquerda, na parte `Sistema`, clique em `Notificações Push` (`/painel/notificacoes`). No topo da página você vê quantas pessoas aceitaram receber avisos, quantos avisos já foram enviados no mês e quantas pessoas abriram.
2. Para o site convidar visitantes a se inscrever, marque `Convidar visitantes a receber notificações`. Salva na hora.
3. Em `Nova notificação`, preencha título (até 50 letras), mensagem (até 120) e o link (precisa começar com https).
4. Escolha enviar agora ou agendar (data e hora) e clique no botão de enviar.
5. Confirme. Depois de enviada, não dá para desfazer. No histórico dá para cancelar as agendadas.

## resultado

a notificação chega aos inscritos; o histórico mostra entregues e quantos abriram.

## desvios

- Se aparecer o aviso de que o envio não está disponível, o botão fica desativado.
- Notificação enviada não volta.

## quando pedir ajuda

peça ajuda se a página não carregar, se o salvamento der erro ou se a opção esperada não aparecer.

## fontes

- `portal-cidade/frontend/src/app/painel/notificacoes/page.tsx`
- `suporte-kb/mapa/admin/telas/painel-notificacoes.md`

## lacunas

não foi feita validação visual no navegador. Os textos dos botões podem mudar.
