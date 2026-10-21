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
status: rascunho-documental
revisado_em: 2026-10-17
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

1. No menu da esquerda da sua área, na parte `Orçamentos`, clique em `Pedidos recebidos` (`/minha-conta/orcamentos`). [guia=menu:/minha-conta/orcamentos]
2. Procure o pedido. Cada cartão mostra o título, a data e a hora, o nome e o telefone de quem pediu. Se forem muitos, use o campo `Buscar por nome, número ou cidade`. [guia=pedidos-orcamento.busca]
3. Para ver a descrição, as fotos e o link que a pessoa mandou, clique em `Ver pedido completo`. [guia=pedidos-orcamento.ver-completo]
4. Clique em `Responder no WhatsApp`. O WhatsApp abre a conversa com quem pediu, com uma mensagem já escrita. [guia=pedidos-orcamento.whatsapp]

## resultado esperado
o WhatsApp abre com a conversa de quem pediu o orçamento. ao clicar em `Responder no WhatsApp`, o pedido fica marcado como `Visto`.

## desvios
- se o cartão não tiver o botão `Responder no WhatsApp`, o telefone do pedido não serve para WhatsApp. use o telefone que aparece no cartão.
- se o menu não mostrar `Orçamentos`, o plano da empresa não inclui pedidos de orçamento. se a tela for aberta direto, mostra o aviso com `Ver planos do Guia Comercial`.
- se aparecer `Falta escolher o seu serviço`, escolha o serviço em `Guia Comercial`. sem ele, nenhum pedido novo chega.
- a empresa só vê pedidos já aprovados pelo portal. se um pedido recente não aparece, ele pode estar aguardando essa aprovação.
- a lista não atualiza sozinha. clique em `Atualizar` para ver pedidos novos.
- o mesmo pedido também chega a outras empresas do mesmo serviço. quem responde primeiro costuma fechar.

## quando pedir ajuda
se um pedido que você sabe ter sido aprovado não aparece, ou se o plano e o serviço estão em ordem e o menu `Orçamentos` continua ausente, contate o suporte do portal.

## fontes
- `portal-cidade/frontend/src/app/minha-conta/orcamentos/page.tsx:245`
- `portal-cidade/frontend/src/app/minha-conta/orcamentos/page.tsx:296`
- `portal-cidade/frontend/src/app/minha-conta/ClienteSidebar.tsx:180`
- `portal-cidade/frontend/src/lib/whatsapp-mensagem.ts:32`
- `portal-cidade/backend/comercial/views_orcamentos_pedidos.py:96`
- `portal-cidade/backend/orcamentos/models.py:40`
- `suporte-kb/mapa/cliente/telas/minha-conta-orcamentos.md`

## lacunas
validado só por leitura de código e do mapa de telas; não foi renderizado com pedido real. não verificado: o texto exato da mensagem preenchida no WhatsApp e o comportamento de `Visto` ao abrir `Ver pedido completo`. a regra de aprovação vem do comentário e do filtro do backend, sem teste de ponta a ponta.
