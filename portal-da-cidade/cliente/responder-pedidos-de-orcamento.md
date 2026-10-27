---
id: cliente-responder-pedidos-orcamento
titulo: responder pedidos de orçamento pelo WhatsApp
publico:
  - cliente
modulo: orcamentos
categoria: orcamentos
aba: Orçamentos
tipo_problema:
  - pedidos-orcamento
  - contato-cliente-orcamento
  - ver-pedidos-orcamento
tags:
  - orcamento
  - pedido
  - whatsapp
  - ver
  - empresa
  - enviar
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - KiGU9vNKIwg
---

## objetivo
ver os pedidos de orçamento que visitantes enviaram para a empresa e falar com quem pediu pelo WhatsApp.

## pré-requisitos
- a empresa ter pedidos de orçamento incluídos no plano do Guia Comercial.
- ter escolhido o serviço da empresa no Guia Comercial.
- estar na área do cliente autenticada.

## passos

1. Na parte `Orçamentos` do menu da esquerda, clique em `Pedidos recebidos`. O número vermelho mostra quantos pedidos novos chegaram. No topo, a tela mostra para qual serviço os pedidos chegam. [t=30] [guia=menu:/minha-conta/orcamentos]
2. Clique em `Atualizar` para buscar pedidos novos. [t=41] [guia=pedidos-orcamento.atualizar]
3. Clique na aba `Todos`, `Novos` ou `Já vistos` para filtrar a lista. Os quadros mostram os pedidos novos, o total recebido e os já vistos. [t=58] [guia=pedidos-orcamento.abas]
4. Se forem muitos pedidos, escreva no campo `Buscar por nome, número ou cidade`. [t=54] [guia=pedidos-orcamento.busca]
5. Em cada cartão, veja o título, a data, o nome e o telefone de quem pediu. Para ver a descrição, as fotos e o link, clique em `Ver pedido completo`. [t=72] [guia=pedidos-orcamento.ver-completo]
6. Clique em `Responder no WhatsApp`. A conversa abre com uma mensagem pronta; complete e envie. [t=93] [guia=pedidos-orcamento.whatsapp]
7. Para organizar o que já leu, clique em `Marcar como visto`. [t=87] [guia=pedidos-orcamento.marcar-visto]

## de onde vêm os pedidos e o que o cartão mostra

- o visitante entra em `Orçamentos` no portal, conta o que precisa por texto ou áudio e escolhe o tipo de serviço. o portal confere o pedido antes de enviar; depois de aprovado, ele chega a todas as empresas daquele serviço que têm pedidos de orçamento no plano do Guia Comercial.
- o cartão mostra título, selo `Novo` ou `Visto`, serviço, começo da descrição, bairro e cidade, nome e telefone de quem pediu. `Ver pedido completo` abre a descrição inteira e as fotos que o cliente enviou.
- dica: deixe a área aberta, acompanhe os pedidos novos e responda rápido.

## resultado esperado
o WhatsApp abre com a conversa de quem pediu o orçamento. o pedido passa a `Visto` ao abrir o pedido, ao clicar em `Responder no WhatsApp` ou em `Marcar como visto`. os pedidos lidos ficam na aba `Já vistos`.

## desvios
- se o cartão não tiver o botão `Responder no WhatsApp`, o telefone do pedido não serve para WhatsApp. use o telefone que aparece no cartão.
- se o menu não mostrar `Orçamentos`, o plano da empresa não inclui pedidos de orçamento. se a tela for aberta direto, mostra o aviso com `Ver planos do Guia Comercial`.
- se aparecer `Falta escolher o seu serviço`, clique em `Escolher no Guia Comercial`. sem o serviço, nenhum pedido novo chega.
- a empresa só vê pedidos já aprovados pelo portal. se um pedido recente não aparece, ele pode estar aguardando essa aprovação.
- o mesmo pedido também chega a outras empresas do mesmo serviço. quem responde primeiro costuma fechar.

## quando pedir ajuda
se um pedido que você sabe ter sido aprovado não aparece, ou se o plano e o serviço estão em ordem e o menu `Orçamentos` continua ausente, contate o suporte do portal.

## fontes
- `frontend/src/app/minha-conta/orcamentos/page.tsx:130-134` — abas; `:143-148` `Atualizar`; `:154-170` avisos de plano e serviço; `:191-195` busca; `:296-312` botões do cartão.
- `frontend/src/app/minha-conta/ClienteSidebar.tsx:181-193` — grupo `Orçamentos` e item `Pedidos recebidos`.
- `frontend/src/lib/whatsapp-mensagem.ts:32`
- `backend/comercial/views_orcamentos_pedidos.py:96`
- `backend/orcamentos/models.py:40`

## lacunas
validado só por leitura de código e do vídeo; não foi renderizado com pedido real. não verificado: o texto exato da mensagem preenchida no WhatsApp. a regra de aprovação vem do comentário e do filtro do backend, sem teste de ponta a ponta. A lista atualiza sozinha de tempos em tempos? não conferido; `Atualizar` força a busca.
