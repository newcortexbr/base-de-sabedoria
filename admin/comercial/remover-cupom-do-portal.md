---
id: remover-cupom-do-portal
titulo: "remover um cupom do portal"
publico:
  - admin
modulo: cupons
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-19
validacao: docs-e-codigo
videos:
  - pBHdF3bd1QI
---

## objetivo
aqui você remove um cupom. A empresa continua no Guia.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Cupons de Desconto`. [guia=menu:/painel/cupons]
2. Veja na lista a empresa, o código, o desconto e a validade de cada cupom. Cupom vencido aparece marcado. [guia=menu:/painel/cupons]
3. Para apagar, clique em `Remover` na linha dele. [guia=cupons.remover]
4. Confirme na janela que o navegador abre. A empresa continua no Guia. [guia=cupons.remover]

## resultado
O cupom some da lista.

## desvios

- Se a lista de empresas vier vazia, todas já podem ter cupom ou não há empresas no Guia.
- Se a foto falhar, o cupom já foi salvo; edite e envie a foto de novo.
- Cupom depende do plano da empresa.

## quando pedir ajuda

peça ajuda se a página não carregar, se o salvamento der erro ou se a opção esperada não aparecer.

## fontes

- `portal-cidade/frontend/src/app/painel/cupons/`
- `suporte-kb/mapa/admin/telas/painel-cupons.md`, `painel-cupons-novo.md`

## lacunas

não foi feita validação visual no navegador. Os textos dos botões podem mudar.
