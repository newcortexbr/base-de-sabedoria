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
revisado_em: 2026-10-19
validacao: docs-e-codigo
videos:
  - 31ftVMQ_yr4
  - MbMNv59z7Bg
---

## objetivo

aqui você vê e ajusta os planos que o portal vende em cada parte do site.

## pré-requisitos

- Ter acesso administrativo ao painel.
- Saber qual seção comercial precisa ser consultada.

## passos

1. No menu da esquerda, na parte `Comercial`, clique em `Meus Planos`. A página mostra os `Planos por seção do portal`: um quadro para cada parte do site que pode ser vendida. [guia=menu:/painel/planos] [t=7]
2. No quadro da parte que você quer, clique em `Gerenciar` (ou em `Definir preço`, se ainda não tiver plano). [guia=planos.gerenciar] [t=85]
3. Confira o que já está preenchido antes de mudar. Dependendo da parte, a página mostra planos ou espaços de publicidade (banners). [guia=planos.conteudo]
4. Salve pelo botão da própria página e espere a mensagem de que deu certo. [guia=planos.salvar]

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
