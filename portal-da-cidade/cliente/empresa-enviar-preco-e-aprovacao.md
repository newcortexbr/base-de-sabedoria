---
id: empresa-enviar-preco-e-aprovacao
titulo: "empresa enviar preço: Radar, cardápio e Guia, e se precisa de aprovação"
publico:
  - cliente
modulo: radar
categoria: radar
aba: nao-se-aplica
tipo_problema: orientacao
tags:
  - preco
  - radar
  - cardapio
  - guia
  - delivery
  - aprovacao
  - empresa
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
---

## objetivo

saber por onde a sua empresa pode colocar preço no portal e se o preço passa pela aprovação do portal.

## explicação

- **Radar de Preços**: a empresa não tem área própria no Radar. Preço entra pela página `Enviar preço` (botão `Enviar foto ou encarte`), sempre com foto, e a equipe do portal confere antes de publicar. Para a sua empresa aparecer no Radar, avise o portal.
- **cardápio do delivery**: a empresa com delivery cadastra produtos e preços na área do cliente, em `Guia Comercial`, no cartão `Cardápio do delivery` (botão `Configurar`). O preço vai ao ar na hora, sem aprovação, mesmo com a fila ligada (o delivery não tem passo de análise).
- **Guia Comercial**: o que passa pela aprovação é o cadastro inicial da empresa (`Pendente`), não o preço. Depois de publicada, mudar dados ou serviços não pede aprovação de novo.
- preço muito fora do normal no Radar espera a conferência do portal antes de aparecer.

## passos (empresa com delivery)

1. No menu da esquerda, na parte `O que eu publico`, clique em `Guia Comercial`. [guia=menu:/minha-conta/guia]
2. Na ficha, no cartão `Cardápio do delivery`, clique em `Configurar`. [guia=guia.delivery-configurar]
3. Clique na aba `Cardápio`. [guia=guia.delivery-aba-cardapio]
4. Escolha o produto ou crie um novo, preencha o `Preço` e clique em `Salvar`. O preço aparece no site. [guia=guia.delivery-produto-salvar]

## resultado

preço de cardápio publicado na hora; preço do Radar só depois da conferência.

## desvios

- o conteúdo de cardápio só aparece para quem tem páginas personalizadas no plano do Guia (`Links e páginas` trancada, caso contrário).
- o item `Delivery` do menu mostra só os `Pedidos`, não o cardápio.

## fontes

- `backend/radar/views_public.py:270` (envio público, status aguardando)
- `backend/delivery/views_admin.py:133` (produtos do delivery, sem moderação)
- `backend/comercial/views_delivery.py` (nenhuma chamada a `precisa_de_aprovacao`)
- `backend/guia/moderacao.py:1`
- `frontend/src/app/minha-conta/guia/ConteudoDoLayout.tsx:186-270` — famílias `Cardápio` e `Cardápio do delivery`; `:200` campo `Preço`; `frontend/src/app/minha-conta/guia/page.tsx:2476-2495` — exige páginas personalizadas.
- `frontend/src/components/radar/ChamadaEnvio.tsx:15`, `NavegacaoRadar.tsx:10` — `Enviar foto ou encarte`, `Enviar preço`.

## lacunas

não verificado visualmente. As abas do delivery são `Cardápio`, `Entrega e pagamento` e `Onde entrego` (`ConfigDoDelivery.tsx:226-229`); o formulário do produto (`ConteudoDoLayout.tsx:585-707`) foi lido, não percorrido na tela. As regras de preço por plano não foram conferidas.
