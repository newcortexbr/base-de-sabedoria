---
id: ac-negocio-nao-aparece
titulo: "paguei e o meu negócio não aparece"
publico:
  - cliente
modulo: negocios
aba: Meus negócios
tipo_problema:
  - negocio-nao-aparece
  - lista-vazia
  - paguei-e-nao-liberou
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
entender por que um negócio comprado ainda não aparece em `Meus negócios`.

## pré-requisitos
- ter entrado na área do cliente.

## explicação
- o negócio só é criado depois que o pagamento é confirmado. boleto e Pix podem levar um tempo para serem confirmados.
- o negócio fica na conta do e-mail usado na compra. se você comprou com outro e-mail, ele está em outra conta.
- com a lista vazia, a tela mostra `Você ainda não tem nenhum portal vinculado. Se esperava ver um negócio aqui, fale com o suporte.`
- na página `Início`, a mesma situação aparece como `Você ainda não tem nenhum negócio ativo. Se esperava ver algo aqui, fale com o suporte.`

## passos
1. Confira se você entrou com o mesmo e-mail usado na compra.
2. Confira se o pagamento já foi confirmado (no e-mail do pagamento ou no banco).
3. Recarregue `Meus negócios` (`/negocios`).
4. Se ainda não aparecer, clique em `Suporte` no menu e abra um chamado.

## resultado
o negócio aparece depois da confirmação do pagamento, ou o suporte localiza a compra.

## desvios
- negócio cancelado continua na lista com a etiqueta `Inativo`.

## quando pedir ajuda
pagamento confirmado e nada na lista: abra um chamado com o comprovante, a cidade e o e-mail usado na compra.

## fontes
- `area-clientes/src/app/(cliente)/negocios/page.tsx:124`
- `area-clientes/src/app/(cliente)/inicio/page.tsx:127`
- `area-clientes/src/app/(cliente)/negocios/page.tsx:46`
- `area-clientes/docs/REQUIREMENTS.md:128`

## lacunas
não foi conferido quanto tempo, na prática, leva entre o pagamento confirmado e o negócio aparecer.
