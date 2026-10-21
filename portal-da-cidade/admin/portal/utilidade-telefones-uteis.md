---
id: admin-utilidade-telefones-uteis
titulo: "cadastrar telefones úteis"
publico:
  - admin
modulo: utilidade
categoria: admin
aba: nao-se-aplica
tipo_problema:
  - telefones úteis
  - telefone da polícia
  - números de emergência
  - telefone da prefeitura
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
aqui você cadastra os telefones úteis da cidade que aparecem no site, como polícia, hospital e prefeitura.

## pré-requisitos

- Ter acesso de administrador ao painel.

## passos

1. No menu da esquerda, clique em `A Voz do Povo` e depois em `Telefones Úteis`. [guia=menu:/painel/utilidade/telefones]
2. Clique em `Cadastrar telefone`. [guia=fora]
3. Escreva o `Órgão/serviço *`. [guia=fora]
4. Preencha o `Telefone` ou o `Número curto de emergência`, por exemplo 190. [guia=fora]
5. Se quiser, preencha o `Endereço` e o `Horário de atendimento`. [guia=fora]
6. Clique em `Salvar`. [guia=fora]

## resultado
o telefone entra na lista e aparece no site.

## desvios

- É preciso preencher ao menos um dos dois: telefone ou número curto.
- Para mudar ou apagar, use o lápis (`Editar`) ou a lixeira (`Excluir`) na linha.
- A opção `Exibir no site`, no topo da página, mostra ou esconde a seção inteira no site.

## quando pedir ajuda

peça ajuda se a lista não carregar ou se o salvamento der erro.

## fontes

- `portal-cidade/frontend/src/app/painel/utilidade/telefones/page.tsx:151,219` — botão, campos e mensagens.
- `portal-cidade/frontend/src/app/painel/utilidade/onibus/ExibirNoSite.tsx` — "Exibir no site".
- `portal-cidade/frontend/src/components/painel/Sidebar.tsx:198-204` — menu "A Voz do Povo".

## lacunas

tela não validada no navegador nesta tarefa. A tela não tem marcas `data-guia` além do menu.
