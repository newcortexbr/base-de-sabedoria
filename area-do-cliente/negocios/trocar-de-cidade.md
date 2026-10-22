---
id: ac-negocio-trocar-de-cidade
titulo: "quero trocar a cidade do meu negócio"
publico:
  - cliente
modulo: negocios
aba: Meus negócios
tipo_problema:
  - trocar-cidade
  - mudar-cidade
  - cidade-errada
  - outra-cidade
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
saber o que fazer quando você quer o negócio em outra cidade, no lugar da atual.

## pré-requisitos
- ter um negócio em `Meus negócios`.

## explicação
- cada negócio é um produto numa cidade, e a cidade não muda pela Área do Cliente: não há botão para trocar.
- para ter o produto em mais uma cidade, a compra é nova (veja `ac-negocio-contratar-outra-cidade`).
- para trocar (deixar uma cidade e ficar com outra), o pedido é por chamado. Cancelar um negócio é outro pedido, também por chamado (veja `ac-cancelar-um-negocio`).

## passos
1. No menu da esquerda, clique em `Suporte` e depois em `Abrir novo chamado`. [guia=suporte.novo-chamado]
2. Em `Negócio vinculado`, escolha a cidade atual. [guia=chamado-novo.negocio]
3. Em `Mensagem`, diga qual cidade você quer no lugar. [guia=chamado-novo.mensagem]
4. Clique em `Enviar chamado`. [guia=chamado-novo.enviar]

## resultado
o pedido fica com a equipe, que responde no chamado.

## desvios
- cada produto só tem um dono por cidade: se a cidade nova já tiver dono, ela não fica disponível (veja `ac-negocio-exclusividade-territorial`).

## quando pedir ajuda
sempre: a troca, se possível, é feita pela equipe.

## fontes
- `src/app/(cliente)/negocios/page.tsx:1` — `Meus negócios` não tem ação de trocar cidade.
- `docs/DATA-MODEL.md` — uma licença por produto + cidade + UF (INV-1).

## lacunas
não há regra no código ou nos docs sobre troca de cidade de uma licença existente; o artigo não promete que ela é feita nem o que acontece com o que já foi pago.
