---
id: doacoes-para-onde-vai-o-dinheiro
titulo: "doações: para onde vai o dinheiro"
publico:
  - admin
modulo: doacoes
categoria: admin
aba: nao-se-aplica
tipo_problema:
  - dinheiro da doação
  - doação cai na conta do portal
  - repasse de doação
status: rascunho-documental
revisado_em: 2026-10-25
validacao: docs-e-codigo
videos: []
---

## objetivo

Entenda que a área de Doações é uma vitrine das instituições: o portal não recebe nem repassa o dinheiro.

## como funciona

- O cadastro da instituição guarda só textos, fotos, endereço e contatos (`Link "Conheça a instituição"`, WhatsApp, Instagram, Facebook, e-mail).
- Quem quer doar fala direto com a instituição por esses contatos; não há pagamento, Pix ou cobrança dentro do portal para doações.
- Por isso a doação não cai na conta do portal e não aparece no `Financeiro`.

## fontes

- `backend/doacoes/models.py:26` (sem campo de pagamento)

## lacunas

Conferido por leitura do código. Sem validação no navegador.
