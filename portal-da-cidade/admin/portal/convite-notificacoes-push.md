---
id: convite-notificacoes-push
titulo: "ligar ou desligar o convite para receber notificações push"
publico:
  - admin
modulo: notificações
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
videos:
  - -ZLL7Cqwcok
---

## objetivo
aqui você escolhe se o site pergunta aos visitantes se eles querem receber avisos. A mudança vale na hora.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No menu da esquerda, na parte `Sistema`, clique em `Notificações Push`. [guia=menu:/painel/notificacoes]
2. Para o site perguntar aos visitantes se querem receber avisos, marque a opção `Convidar visitantes a receber notificações`. Não precisa salvar: muda na hora. O convite aparece para o visitante depois que ele navega por pelo menos duas páginas; se ele recusar, só volta depois de 30 dias. [guia=notificacoes.convidar]

## resultado
O site passa a convidar (ou deixa de convidar) os visitantes. Não precisa salvar.

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
