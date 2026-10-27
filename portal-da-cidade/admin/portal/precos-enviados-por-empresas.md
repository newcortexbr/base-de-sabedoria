---
id: admin-precos-enviados-por-empresas
titulo: "preços colocados por empresas: Radar, cardápio do delivery e Guia, e o que passa pela sua aprovação"
publico:
  - admin
modulo: radar
categoria: radar
aba: nao-se-aplica
tipo_problema: orientacao
tags:
  - preco
  - radar
  - cardapio
  - delivery
  - aprovacao
  - empresa
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
---

## objetivo

saber por onde as empresas colocam preço no portal e o que o administrador precisa aprovar.

## explicação

- **Radar de Preços**: empresa não tem área própria. Visitantes enviam preço com foto em `Enviar preço`; você aprova em `Radar de Preços` > `Fotos enviadas` (veja "aprovar as fotos enviadas ao Radar de Preços"). Você também lança preço direto em `Produtos e preços`. Para a empresa aparecer no Radar, cadastre o estabelecimento. Preço muito fora do normal fica em `Preços retidos` esperando você.
- **cardápio do delivery**: a empresa cadastra produtos e preços na área dela e eles vão ao ar na hora, sem aprovação, mesmo com `Exigir minha aprovação` ligado. Você pode mudar pelo painel (veja "montar o cardápio do delivery de uma empresa do Guia").
- **Guia Comercial**: só o cadastro inicial da empresa passa pela aprovação (`Pendente`), não o preço. Depois de publicada, mudanças nos dados ou serviços não voltam para a fila.

## fontes

- `backend/radar/views_public.py:270` (envio público, status aguardando)
- `backend/delivery/views_admin.py:133` e `backend/comercial/views_delivery.py` (sem moderação)
- `backend/guia/moderacao.py:1`
