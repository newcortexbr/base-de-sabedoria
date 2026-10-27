---
id: colocar-espaco-de-banner-a-venda
titulo: "colocar um espaço de banner à venda e definir o preço"
publico:
  - admin
modulo: planos
categoria: admin
aba: nao-se-aplica
tipo_problema:
  - vender espaço de banner
  - preço do banner
  - valor da publicidade
tags:
  - banner
  - espaco
  - preco
  - publicidade
  - editar
  - plano
status: rascunho-documental
revisado_em: 2026-10-25
validacao: docs-e-codigo
videos:
  - MbMNv59z7Bg
---

## objetivo

Aqui você coloca uma posição de banner do portal à venda, definindo o preço por semana, mês, semestre ou ano. Espaço sem preço fica `Fora de venda`.

## pré-requisitos

- Ter acesso administrativo ao portal.

## passos

1. No menu da esquerda, na parte `Comercial`, clique em `Meus Planos`. [guia=menu:/painel/planos]
2. Na faixa dos banners, clique em `Gerenciar espaços`. [guia=planos.gerenciar]
3. Clique na linha do espaço que deseja vender; os que ainda não têm preço mostram `Definir preço`. [guia=publicidade.espaco]
4. Escolha a `Periodicidade`. [guia=publicidade.periodicidade]
5. Preencha o `Preço`. [guia=publicidade.preco]
6. Clique em `Criar preço` (ou `Salvar`, se o preço já existia). [guia=publicidade.salvar]

## resultado

Aparece `Preço salvo` e o espaço passa a contar como à venda.

## fontes

- `frontend/src/app/painel/planos/page.tsx:227`
- `frontend/src/app/painel/planos/[secao]/publicidade/TelaDePublicidade.tsx:132`
- `frontend/src/app/painel/planos/[secao]/publicidade/JanelaDePrecos.tsx:131`

## lacunas

Conferido por leitura do código. Sem validação no navegador.
