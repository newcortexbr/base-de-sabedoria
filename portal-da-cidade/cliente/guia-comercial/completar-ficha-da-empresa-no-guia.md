---
id: cliente-guia-comercial-completar-ficha
titulo: "completar a ficha da sua empresa no Guia Comercial: contatos, fotos, comodidades e links"
publico:
  - cliente
modulo: guia-comercial
categoria: guia-comercial
aba: Guia Comercial
tipo_problema:
  - completar-ficha
tags:
  - editar
  - empresa
  - guia
  - contato
  - foto
  - comodidade
  - link
status: rascunho-documental
revisado_em: 2026-10-27
validacao: video
videos:
  - 8EwkE_ascEw
---

## objetivo

completar a ficha da empresa no Guia Comercial com contatos, fotos, comodidades, formas de pagamento e links.

## pré-requisitos

- ter a empresa cadastrada no Guia Comercial (veja "cadastrar sua empresa no Guia Comercial").

## explicação

- cada contato e cada link vira um botão na ficha pública.
- a logo e a capa só são gravadas quando você salva (o aviso `Nova · entra ao salvar` lembra disso).
- o que aparece em cada bloco depende do plano: o que o plano não libera fica trancado, com o botão `Ver planos` ou `Liberar com…`.
- o contador da galeria mostra quantas fotos cabem no seu plano.

## passos

1. No menu da esquerda, clique em `Guia Comercial`. [t=10] [guia=menu:/minha-conta/guia]
2. Abra o bloco `Telefone, WhatsApp e redes`. [t=12] [guia=guia.bloco-contato]
3. Preencha `Telefone`, `E-mail`, `WhatsApp`, `Instagram` e `Site`; cada um vira um botão de contato na ficha. [t=16] [guia=guia.telefone]
4. Clique em `Salvar e ir para a próxima`; o bloco seguinte abre sozinho. [t=23] [guia=guia.proxima-secao]
5. No bloco `Logo, capa e galeria de fotos`, na logo, clique em `Adicionar` (`Trocar` se já houver) e escolha a imagem. [t=28] [guia=guia.logo]
6. Na foto de capa, clique em `Adicionar` e escolha a imagem; ela aparece grande no topo da página (use uma foto bonita e na horizontal). [t=34] [guia=guia.capa]
7. Na galeria, clique em `Adicionar` e escolha várias fotos de uma vez; elas são enviadas na hora. [t=47] [guia=guia.galeria]
8. No bloco `Comodidades e pagamento`, clique nas sugestões de `Comodidades` para incluir (como Wi-Fi grátis e estacionamento). Se faltar alguma, digite no campo e aperte enter. [t=60] [guia=guia.comodidades]
9. Faça o mesmo com as `Formas de pagamento` (Pix, dinheiro, cartões). [t=71] [guia=guia.pagamento]
10. No bloco `Pedidos de orçamento`, se quiser, informe um link em `Link para pedir orçamento`, como o seu WhatsApp. [t=78] [guia=guia.orcamento]
11. No bloco `Links e páginas`, informe os links que a empresa já tem. Em `Link do cardápio`, o cardápio que estiver em outro site. [t=85] [guia=guia.cardapio]
12. Em `Link para reservas`, o endereço de reservas. [t=89] [guia=guia.reservas]
13. Se vende por aplicativo de entrega, coloque o link em `Tenho delivery em outro lugar (link)`. [t=94] [guia=guia.delivery]
14. Clique em `Salvar alterações`. [t=101] [guia=guia.salvar]
15. Confira no quadro `Sua ficha no site` quanto da ficha já está preenchido. [t=103] [guia=guia.painel]
16. Clique em `Ver minha ficha no site` para ver o resultado. [t=112] [guia=guia.ver-ficha]

## resultado

a ficha mostra capa, logo, categoria, descrição, comodidades, formas de pagamento e botões de contato; mais abaixo, a galeria, o mapa com o endereço e o horário de funcionamento. O bloco de cupom tem artigo próprio ("criar, alterar e consultar o cupom da empresa").

## dicas
- quanto mais completa a ficha, melhor ela aparece para os clientes; o quadro `Sua ficha no site` mostra o quanto falta.
- no celular, os botões de WhatsApp, ligar e delivery ficam à mão do cliente.

## desvios

- bloco com cadeado ou aviso "O telefone só aparece no site com plano que inclua…": o plano atual não libera aquele campo; veja "o que cada plano do Guia libera".
- para remover uma foto da galeria, use o X no canto dela (rótulo `Apagar foto`).

## quando pedir ajuda

se o plano deveria liberar um bloco e ele continua trancado, peça ajuda ao portal.

## fontes

- `portal-cidade/frontend/src/app/minha-conta/guia/secoes-da-ficha.ts:34-110` — títulos dos blocos.
- `portal-cidade/frontend/src/app/minha-conta/guia/page.tsx:1184-1193,1997-2015,2070-2108,2161-2180,2204-2214,2365-2425,2466` — campos e botões.
- `portal-cidade/frontend/src/app/minha-conta/guia/SecaoDaFicha.tsx:40,134-145` — bloco, `Sua ficha no site`, `Ver minha ficha no site`.

## lacunas

- não encontrei campo `agendamento` separado: o código mostra `Link do cardápio`, `Link para reservas` e `Tenho delivery em outro lugar (link)`.
- "enviadas na hora" e "o contador mostra quantas cabem" vêm do vídeo; não conferidos no código.
- "no celular, os botões de WhatsApp, ligar e delivery ficam à mão" vem do vídeo.
