---
id: gerenciar-cupons-do-portal
titulo: criar e gerenciar cupons de desconto das empresas
publico:
  - admin
modulo: cupons
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-16
validacao: docs-e-codigo
videos:
  - pBHdF3bd1QI
---

## objetivo

criar, editar e remover cupons de qualquer empresa do Guia, em nome do lojista.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Cupons de Desconto` (`/painel/cupons`). A lista mostra a empresa, o código, o desconto e a validade. Cupom vencido aparece marcado.
2. Para criar, clique em `Novo cupom` e escolha a `Empresa`. Cada empresa só pode ter um cupom; por isso, as que já têm não aparecem na lista.
3. Preencha a `Foto de capa do cupom`, o `Código`, a descrição, as condições de uso, o `Tipo de desconto` (`Percentual (%)` ou `Valor fixo (R$)`), o `Valor` e a `Validade`.
4. Clique em `Salvar cupom`.
5. Para mudar um cupom, clique em `Editar` na linha dele. Para apagar, clique em `Remover`.

## resultado

o cupom aparece para os visitantes. Remover só apaga o cupom; a empresa continua no Guia.

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
