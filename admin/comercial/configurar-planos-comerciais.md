---
id: configurar-planos-comerciais
titulo: consultar e ajustar planos comerciais
publico:
  - admin
modulo: planos
categoria: admin
aba: nao-se-aplica
tipo_problema: configuracao
status: rascunho-documental
revisado_em: 2026-10-15
validacao: docs-e-codigo
videos:
  - 31ftVMQ_yr4
  - MbMNv59z7Bg
---

## objetivo

acessar a definição de planos comerciais por seção do portal.

## pré-requisitos

- Ter acesso administrativo ao painel.
- Saber qual seção comercial precisa ser consultada.

## passos

1. Abra `Meus Planos` em `/painel/planos`.
2. Escolha a seção disponível no catálogo.
3. Revise os dados apresentados antes de editar; a tela pode ter planos ou itens de publicidade, conforme o tipo da seção.
4. Salve somente usando os controles apresentados e confirme a mensagem de sucesso.

## resultado

A definição comercial da seção é salva. A tela organiza seções conforme o catálogo atual.

## desvios

A tela `Planos` define planos e preços oferecidos aos clientes do portal; ela não é a tela de faturas nem altera por si só uma cobrança já emitida. Não há valores universais neste artigo: nomes, preços e seções podem variar.

## quando pedir ajuda

peça ajuda antes de mexer em preço, vigência, benefício ou situação de venda quando houver dúvida sobre clientes atuais ou cobrança existente. A IA não altera preços, planos ou finanças.

## fontes

- `portal-cidade/frontend/src/app/painel/planos/page.tsx:3-18,35-44`
- `portal-cidade/frontend/src/app/painel/planos/[secao]/page.tsx:3-13`
- `portal-cidade/docs/PRODUCT.md:38-44,144-153`

## lacunas

não foram documentadas regras de reajuste, migração de clientes entre planos nem preços. Esses pontos exigem confirmação humana.
