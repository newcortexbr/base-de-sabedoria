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
revisado_em: 2026-10-21
validacao: docs-e-codigo
videos:
  - -ZLL7Cqwcok
---

## objetivo

aqui você envia avisos para quem aceitou receber e vê quantas pessoas abriram.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## veja também
- para mandar um aviso em outro dia e hora, veja o artigo "agendar uma notificação push para outro dia".
- para conferir números e histórico dos avisos, veja o artigo "ver quantas pessoas recebem e abrem as notificações push".
- para escolher se o site convida visitantes a receber avisos, veja o artigo "ligar ou desligar o convite para receber notificações push".
- para cancelar um aviso que ainda não foi enviado, veja o artigo "cancelar uma notificação push agendada".

## passos

1. No menu da esquerda, na parte `Sistema`, clique em `Notificações Push`. [guia=menu:/painel/notificacoes] [t=6]
2. No quadro `Nova notificação`, escreva o `Título` (até 50 letras). [guia=notificacoes.titulo] [t=51]
3. Escreva a `Mensagem` (até 120 letras). [guia=notificacoes.mensagem] [t=54]
4. Escreva o `Link`, que é o endereço completo da página que vai abrir (começa com `https://` ou `http://`). Ao lado, a prévia mostra como o aviso vai aparecer no celular. [guia=notificacoes.link] [t=57]
5. Em `Quando`, deixe marcado `Agora`. [guia=notificacoes.quando]
6. Clique no botão `Enviar para…`, que mostra quantas pessoas vão receber. [guia=notificacoes.enviar]
7. Confirme na janela que aparece. Depois de enviado, o aviso não pode ser desfeito. [guia=notificacoes.enviar]

## resultado

o aviso chega a quem aceitou receber; o `Histórico` mostra quantos receberam e quantos abriram.

## desvios

- Se aparecer o aviso de que o envio não está disponível, o botão de enviar fica apagado e não funciona.
- Notificação enviada não volta.
- O envio vai para todos os inscritos do portal; não há escolha de público.
- O envio entra em fila e é processado em instantes.

## quando pedir ajuda

peça ajuda se a página não carregar, se o salvamento der erro ou se a opção esperada não aparecer.

## fontes

- `portal-cidade/frontend/src/app/painel/notificacoes/page.tsx`
- `suporte-kb/mapa/admin/telas/painel-notificacoes.md`

## lacunas

não foi feita validação visual no navegador. Os textos dos botões podem mudar.
