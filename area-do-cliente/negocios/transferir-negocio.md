---
id: ac-negocio-transferir
titulo: "passar o negócio para outra pessoa ou outra conta"
publico:
  - cliente
modulo: negocios
aba: Meus negócios
tipo_problema:
  - transferir-negocio
  - mudar-titular
  - vender-licenca
  - passar-para-socio
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
saber como pedir a troca do dono de um negócio.

## pré-requisitos
- ter o negócio na sua conta.

## explicação
- a Área do Cliente não tem opção para transferir um negócio para outra pessoa ou outra conta.
- cada conta tem um login só; não dá para adicionar sócio ou funcionário (veja `ac-um-login-por-conta`).

## passos
1. No menu da esquerda, clique em `Suporte`.
2. Clique em `Abrir novo chamado`.
3. Em `Negócio vinculado`, escolha a cidade que quer transferir.
4. Em `Mensagem`, diga para quem quer transferir (nome e e-mail) e o motivo.
5. Clique em `Enviar chamado`.

## resultado
o pedido fica registrado com a equipe, que responde no chamado.

## desvios
- se só quer que outra pessoa use a conta, lembre que a senha é pessoal; o pedido certo é pelo chamado.

## quando pedir ajuda
sempre: a transferência, se possível, é feita pela equipe.

## fontes
- `src/app/(cliente)/negocios/page.tsx:1` — `Meus negócios` não tem ação de transferência.
- `src/domain/licenca/queries.ts:103` — o negócio pertence a uma conta de cliente.

## lacunas
não há regra no código ou nos docs sobre transferência de licença entre clientes; o artigo não promete que ela é feita.
