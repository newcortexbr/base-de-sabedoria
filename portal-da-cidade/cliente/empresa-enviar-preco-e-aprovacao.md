---
id: empresa-enviar-preco-e-aprovacao
titulo: "empresa enviar preço: Radar, cardápio e Guia, e se precisa de aprovação"
publico:
  - cliente
  - admin
modulo: radar
categoria: radar
aba: nao-se-aplica
tipo_problema: orientacao
status: rascunho-documental
revisado_em: 2026-10-22
validacao: docs-e-codigo
---

## objetivo

saber por onde uma empresa pode colocar preço no portal e se o preço passa pela sua aprovação.

## explicação

- **Radar de Preços**: a empresa não tem área própria no Radar. Só visitantes enviam preço, pela página `Enviar foto ou encarte`, sempre com foto, e a equipe do portal confere antes de publicar. O administrador também lança preço direto no painel. Para a empresa aparecer no Radar, ela avisa o portal ou o administrador cadastra.
- **cardápio e delivery**: a empresa que tem o plano com delivery cadastra produtos e preços na área do cliente, em `Delivery`. O preço vai ao ar na hora, sem aprovação, mesmo com a fila ligada (o delivery não tem passo de análise).
- **Guia Comercial**: o que passa pela aprovação é o cadastro inicial da empresa (`Pendente`), não o preço. Depois de publicada, mudar dados ou serviços não pede aprovação de novo.
- preço estranho no Radar fica em `Preços retidos` esperando o administrador; veja "resolver preços retidos do Radar de Preços".

## passos (empresa com delivery)

1. Entre na área do cliente e clique em `Delivery`. [guia=menu:/minha-conta/delivery]
2. Abra o cardápio, escolha o produto ou crie um novo e preencha o preço.
3. Salve. O preço aparece no site.

## resultado

preço de cardápio publicado na hora; preço do Radar só depois da conferência.

## fontes

- `portal-cidade/backend/radar/views_public.py:270` (envio público, status aguardando)
- `portal-cidade/backend/delivery/views_admin.py:133` (produtos do delivery, sem moderação)
- `portal-cidade/backend/comercial/views_delivery.py` (nenhuma chamada a `precisa_de_aprovacao`)
- `portal-cidade/backend/guia/moderacao.py:1`

## lacunas

não verificado visualmente. O nome exato do item de menu `Delivery` e as regras de preço por plano não foram conferidos na tela.
