---
id: ver-historico-notificacoes-push
titulo: "ver quantas pessoas recebem e abrem as notificações push"
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
aqui você vê quantas pessoas aceitaram receber avisos, quantos avisos foram enviados no mês e quantos foram abertos.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No menu da esquerda, na parte `Sistema`, clique em `Notificações Push`. [guia=menu:/painel/notificacoes]
2. No topo da página, veja quantas pessoas aceitaram receber avisos, quantos avisos já foram enviados no mês e quantas pessoas abriram. [guia=notificacoes.resumo]
3. Mais abaixo, no quadro `Histórico`, veja o que já foi enviado e quantas pessoas abriram. [guia=notificacoes.historico]

## resultado
Você vê os números do topo e a lista do que já foi enviado.

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
