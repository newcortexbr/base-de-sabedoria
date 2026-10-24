---
id: editar-dados-de-cliente
titulo: "editar os dados de um cliente"
publico:
  - admin
modulo: clientes
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - -FASO6flcCw
---

## objetivo

aqui você altera o cadastro de um cliente existente.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Comercial` do menu da esquerda, clique em `Meus Clientes`. [t=10] [guia=menu:/painel/clientes]
2. Escreva o nome, o documento ou o telefone em `Buscar por nome, documento ou telefone…`. [t=44] [guia=clientes.busca]
3. Pressione Enter no campo de busca para carregar os resultados. [guia=clientes.busca]
4. Na coluna `Ações`, clique no lápis com a descrição `Editar`. [t=65] [guia=clientes.editar]
5. Em `Editar cliente`, corrija `Nome *`, se necessário. [guia=clientes.nome]
6. Corrija `Nome fantasia`, se necessário. [guia=clientes.nome-fantasia]
7. Em `Tipo`, escolha `Pessoa jurídica` ou `Pessoa física`, conforme o cliente. [guia=clientes.tipo]
8. Corrija `CPF/CNPJ`, se necessário. [guia=clientes.documento]
9. Corrija `Telefone`, se necessário. [guia=clientes.telefone]
10. Corrija `WhatsApp`, se necessário. [guia=clientes.whatsapp]
11. Corrija `E-mail`, se necessário. [guia=clientes.email]
12. Corrija `Observações`, se necessário. [guia=clientes.observacoes]
13. Clique em `Salvar`. [guia=clientes.salvar]

## resultado

aparece `Cliente atualizado`, a janela fecha e a lista é recarregada.

## desvios

- Nome é sempre obrigatório. Quando a tela exibe o aviso do Asaas, `CPF/CNPJ *` e `E-mail *` também são obrigatórios; o documento é conferido conforme o `Tipo` escolhido.
- `CPF inválido.`, `CNPJ inválido.` ou telefone incompleto impedem o envio.
- Em caso de falha, a janela permanece aberta com `Não foi possível salvar` e o motivo.

## fontes

- `portal-cidade/frontend/src/app/painel/clientes/page.tsx:52` — formulário, validações, campos e aviso.
- `portal-cidade/frontend/src/app/painel/clientes/page.tsx:934` — fechamento e atualização da lista.

## lacunas

Sem validação no navegador. O botão de edição dentro da ficha individual não foi auditado neste artigo.
