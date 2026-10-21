---
id: cliente-o-que-cada-plano-do-guia-libera
titulo: "o que cada plano do Guia Comercial libera"
publico:
  - cliente
modulo: planos
categoria: conta
aba: nao-se-aplica
tipo_problema:
  - diferença entre os planos
  - qual plano tem telefone
  - qual plano tem cupom
  - qual plano tem cardápio
  - plano grátis tem o quê
  - por que meu telefone não aparece
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
aqui você entende o que cada nível de plano do Guia Comercial mostra na página da sua empresa. O sistema vem com três planos: Grátis, Plano A e Plano B. O portal pode mudar nomes e preços; o que vale é o que aparece em `Comparar todos os planos`.

## pré-requisitos

- Estar logado na área do cliente como empresa.

## passos

1. No menu da esquerda da sua área, clique em `Planos e assinaturas`. [guia=menu:/minha-conta/planos]
2. Clique em `Guia Comercial`. [guia=fora]
3. Clique em `Comparar todos os planos` para ver o que cada plano tem. [guia=fora]

## resultado
como o sistema vem configurado:

- Grátis: ficha básica, com logo, nome, descrição, categoria, endereço, mapa e horário de funcionamento.
- Plano A: tudo do Grátis, mais telefone na página, botão de WhatsApp, redes sociais e site, links externos (cardápio, reserva, delivery, agendamento), galeria de fotos e não mostrar concorrentes na sua página.
- Plano B: todos os benefícios do Guia. Além do Plano A: destaque na listagem, receber orçamentos, cupom de desconto e páginas próprias (cardápio, delivery, serviços, equipe, quartos, catálogo).
- As avaliações do Google aparecem em qualquer plano pago, nunca no Grátis.

## desvios

- Páginas como cardápio, delivery e quartos também dependem da categoria da empresa: elas só aparecem se fizerem sentido no seu ramo.
- Se um plano pago vencer sem pagamento, a página volta a mostrar só a ficha do Grátis.

## quando pedir ajuda

peça ajuda se você tem o plano e o recurso não aparece na sua página.

## fontes

- `portal-cidade/backend/comercial/catalogo.py:419-560` — benefícios do Guia e `planos_fixos` (gratis, plano_a, plano_b); avaliações do Google só em plano pago (D-311).
- `portal-cidade/docs/PRODUCT.md:94-108` — blocos decididos por categoria e plano.
- `portal-cidade/backend/comercial/provisionamento.py` — preço e nome editados pelo dono são preservados.

## lacunas

não confirmei no código se o administrador do portal pode mudar os benefícios de cada plano fixo; o artigo manda conferir em `Comparar todos os planos`. Não verifiquei no navegador.
