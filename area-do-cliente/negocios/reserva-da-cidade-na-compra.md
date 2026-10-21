---
id: ac-negocio-reserva-na-compra
titulo: "reservei a cidade na compra: quanto tempo tenho para pagar"
publico:
  - cliente
modulo: negocios
aba: Meus negócios
tipo_problema:
  - reserva-expirou
  - comprar-cidade
  - checkout
  - cidade-indisponivel
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
entender a reserva da cidade que acontece quando você começa uma compra.

## pré-requisitos
- estar comprando um produto pela página de vendas.

## explicação
- ao clicar em `Comprar`, abre uma janela pedindo nome, sobrenome, e-mail, WhatsApp, estado (UF) e cidade.
- se a cidade estiver livre, ela fica reservada para você por um tempo curto (hoje 30 minutos) e você é levado ao pagamento.
- você recebe por e-mail e WhatsApp o aviso da reserva, com o link para pagar.
- enquanto a sua reserva estiver valendo, ninguém mais consegue reservar a mesma cidade.
- se a reserva vencer antes do pagamento, a cidade é liberada. a tela mostra: `Sua reserva anterior expirou. Consulte a cidade de novo — se ela ainda estiver livre, você recomeça o checkout em um minuto.`
- se a cidade já tem dono, você vai para a página de cidade indisponível, com as opções `Consultar outra cidade` e `Falar com o comercial`.

## resultado
você sabe que precisa pagar dentro do prazo da reserva para garantir a cidade.

## desvios
- se aparecer `Não conseguimos retomar o pagamento dessa reserva. Faça a consulta de novo para seguir.`, refaça a consulta da cidade.
- o negócio só aparece em `Meus negócios` depois que o pagamento é confirmado.

## quando pedir ajuda
se você pagou e a cidade não apareceu em `Meus negócios`, fale com o suporte com o comprovante.

## fontes
- `area-clientes/docs/REQUIREMENTS.md:87`
- `area-clientes/docs/REQUIREMENTS.md:88`
- `area-clientes/docs/REQUIREMENTS.md:92`
- `area-clientes/docs/REQUIREMENTS.md:96`
- `area-clientes/docs/REQUIREMENTS.md:99`
- `area-clientes/src/db/seeds/config.ts:19`
- `area-clientes/src/app/(public)/comprar/page.tsx:17`
- `area-clientes/src/app/(public)/comprar/page.tsx:19`
- `area-clientes/src/app/(public)/indisponivel/page.tsx:89`

## lacunas
- o prazo de 30 minutos é configurável pela equipe; o valor em produção não foi conferido.
- tempo de confirmação de cada forma de pagamento não está no código.
