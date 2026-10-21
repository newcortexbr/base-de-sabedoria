---
id: ac-negocio-contratar-outra-cidade
titulo: "quero o portal em outra cidade"
publico:
  - cliente
modulo: negocios
aba: Meus negócios
tipo_problema:
  - comprar-outra-cidade
  - nova-licenca
  - expandir
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
saber como ter o mesmo produto em mais uma cidade.

## pré-requisitos
- a cidade desejada precisa estar livre (sem outro dono do mesmo produto).

## explicação
- a área do cliente não tem um botão de "comprar nova cidade" dentro de `Meus negócios`. a compra de uma cidade nova é feita pela página de vendas do produto, com o botão `Comprar`, e passa pela reserva da cidade e pelo pagamento.
- use o mesmo e-mail da sua conta na compra. assim o novo negócio entra na mesma conta, com o mesmo login.
- depois do pagamento confirmado, a nova cidade aparece como mais um cartão em `Meus negócios`, com instalação e pagamentos próprios.
- o treinamento não se repete: as aulas que você já concluiu continuam valendo, porque o treinamento é do produto.
- se preferir falar com alguém antes, a página de cidade indisponível oferece `Falar com o comercial` pelo WhatsApp.

## resultado
você sabe que cada nova cidade é uma nova compra, que cai na mesma conta.

## desvios
- se a cidade já tiver dono, a compra para na página de cidade indisponível.

## quando pedir ajuda
para negociar várias cidades ou tirar dúvidas de preço, fale com o comercial. para um negócio pago que não apareceu, abra um chamado em `Suporte`.

## fontes
- `area-clientes/src/app/(public)/comprar/ComprarPage.tsx:76`
- `area-clientes/docs/REQUIREMENTS.md:87`
- `area-clientes/docs/REQUIREMENTS.md:128`
- `area-clientes/docs/PRODUCT.md:48`
- `area-clientes/src/app/(public)/indisponivel/page.tsx:134`

## lacunas
- não encontrado no código das telas do cliente nenhum link para `/comprar`. o endereço da página de vendas não foi confirmado.
- não foi confirmado se a compra com outro e-mail cria uma conta separada (a regra diz "localizar ou criar cliente pelo e-mail").
- preços não constam aqui de propósito.
