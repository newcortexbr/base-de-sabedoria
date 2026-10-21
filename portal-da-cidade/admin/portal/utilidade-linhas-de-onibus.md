---
id: admin-utilidade-linhas-de-onibus
titulo: "cadastrar linhas de ônibus"
publico:
  - admin
modulo: utilidade
categoria: admin
aba: nao-se-aplica
tipo_problema:
  - horário de ônibus
  - linhas de ônibus
  - itinerário
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
aqui você cadastra as linhas de ônibus da cidade, com itinerário e horários, que aparecem no site.

## pré-requisitos

- Ter acesso de administrador ao painel.

## passos

1. No menu da esquerda, clique em `A Voz do Povo` e depois em `Linhas de Ônibus`. [guia=menu:/painel/utilidade/onibus]
2. Clique em `Cadastrar linha`. [guia=fora]
3. Escreva o `Número *` da linha. [guia=fora]
4. Escreva o `Nome`, por exemplo "Centro — Terminal". [guia=fora]
5. Preencha o `Itinerário` e os `Horários`. [guia=fora]
6. Clique em `Salvar`. [guia=fora]

## resultado
a linha entra na lista e aparece no site.

## desvios

- Para mudar ou apagar, use o lápis (`Editar`) ou a lixeira (`Excluir`) na linha.
- A opção `Exibir no site`, no topo da página, mostra ou esconde a seção inteira no site.

## quando pedir ajuda

peça ajuda se a lista não carregar ou se o salvamento der erro.

## fontes

- `portal-cidade/frontend/src/app/painel/utilidade/onibus/page.tsx:140,200` — botão e campos.
- `portal-cidade/frontend/src/app/painel/utilidade/onibus/ExibirNoSite.tsx`.

## lacunas

tela não validada no navegador nesta tarefa.
