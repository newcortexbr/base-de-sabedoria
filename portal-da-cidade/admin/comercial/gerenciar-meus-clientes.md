---
id: gerenciar-meus-clientes
titulo: "Meus Clientes: acompanhar clientes, planos e vencimentos"
publico:
  - admin
modulo: clientes
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - cliente
  - ver
  - plano
  - vencimento
  - criar
  - cadastro
  - filtrar
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - -FASO6flcCw
---

## objetivo

aqui você acompanha clientes, planos e vencimentos e cadastra um cliente novo.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## o que a tela mostra

Os cartões `Vencidos`, `Vence em 7 dias`, `Vence em 30 dias` e `Sem plano` resumem a carteira. A tela também mostra o total de clientes, a receita mensal recorrente e, quando há pendências, um aviso de contratações aguardando confirmação de pagamento. O filtro `Filtrar por status` inclui `Todos`, `Com plano`, `Em dia`, `Vence em 7 dias`, `Vence em 30 dias`, `Atrasado`, `Sem plano`, `Aguardando pagamento` e `Cancelado`.

## passos

### encontrar e abrir um cliente

1. Na parte `Comercial` do menu da esquerda, clique em `Meus Clientes`. [t=10] [guia=menu:/painel/clientes]
2. Escreva o nome, o documento ou o telefone em `Buscar por nome, documento ou telefone…`. [t=44] [guia=clientes.busca]
3. Pressione Enter no campo de busca. [guia=clientes.busca]
4. Se precisar, escolha a situação em `Filtrar por status`. [t=48] [guia=clientes.filtro-situacao]
5. Clique no nome do cliente para abrir a ficha. [t=99] [guia=clientes.ver-cliente]

### cadastrar um cliente novo

1. Na parte `Comercial` do menu da esquerda, clique em `Meus Clientes`. [t=10] [guia=menu:/painel/clientes]
2. Clique em `Novo cliente`. [t=72] [guia=clientes.novo]
3. Preencha `Nome *`. [t=74] [guia=clientes.nome]
4. Preencha `Nome fantasia`, se houver. [t=74] [guia=clientes.nome-fantasia]
5. Em `Tipo`, escolha `Pessoa jurídica` ou `Pessoa física`, conforme o cliente. [t=74] [guia=clientes.tipo]
6. Preencha `CPF/CNPJ`, se houver; é obrigatório quando o campo mostra asterisco. [t=77] [guia=clientes.documento]
7. Preencha `Telefone`, se houver. [t=77] [guia=clientes.telefone]
8. Preencha `WhatsApp`, se houver. [t=77] [guia=clientes.whatsapp]
9. Preencha `E-mail`, se houver; é obrigatório quando o campo mostra asterisco. [t=81] [guia=clientes.email]
10. Preencha `Observações`, se quiser. [guia=clientes.observacoes]
11. Clique em `Salvar`. [guia=clientes.salvar]

## resultado

No cadastro, aparece `Cliente cadastrado`, a janela fecha e a lista e o resumo são recarregados. Cadastrar o cliente não é o mesmo que criar seu login ou registrar uma contratação.

## veja também

- “editar os dados de um cliente”, “trocar a senha de um cliente”, “bloquear ou liberar o acesso de um cliente”, “excluir um cliente” e “exportar a lista de clientes”.
- Para planos e faturas, veja “encontrar um cliente e ver planos e faturas”.

## desvios

Nome é sempre obrigatório. Se a tela mostra o aviso do Asaas, CPF/CNPJ e e-mail também são obrigatórios. Documento inválido ou contato incompleto impede o envio; o motivo fica na janela.

## fontes

- `portal-cidade/frontend/src/app/painel/clientes/page.tsx:52` — formulário.
- `portal-cidade/frontend/src/app/painel/clientes/page.tsx:536` — cartões.
- `portal-cidade/frontend/src/app/painel/clientes/page.tsx:713` — busca e filtro.
- `portal-cidade/frontend/src/app/painel/clientes/regras.ts:5` — opções.
- `portal-cidade/frontend/src/app/painel/clientes/page.tsx:934` — atualização após cadastro.

## lacunas

Sem validação no navegador. As operações internas da ficha individual ficam fora deste artigo; o vídeo não foi usado como prova de implementação dessas operações.
