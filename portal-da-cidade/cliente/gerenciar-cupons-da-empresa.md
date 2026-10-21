---
id: cliente-gerenciar-cupons-empresa
titulo: consultar os cupons da empresa na área do cliente
publico:
  - cliente
modulo: cupons
categoria: cupons
aba: Cupons
tipo_problema:
  - cupons-da-empresa
  - cupom-nao-aparece
status: rascunho-documental
revisado_em: 2026-10-15
validacao: docs-e-codigo
videos:
  - v7uO6kjwVOA
---

## objetivo
consultar a área `Cupons` associada à empresa.

## pré-requisitos
- estar na área de cliente autenticada e ter vínculo com a empresa.

## passos

1. No menu da esquerda da sua área, na parte `O que eu publico`, logo abaixo de `Guia Comercial`, clique em `Cupons` (`/minha-conta/cupons`). Essa opção só aparece se o seu plano do Guia inclui cupom. [guia=menu:/minha-conta/cupons]
2. Na página, veja o seu `Cupom de desconto` e a situação dele (`No ar`, `Não publicado` ou `Vencido`). Cada empresa tem um cupom só. [guia=cupom-empresa.situacao]
3. Preencha ou mude a `Foto de capa do cupom`. [guia=cupom-empresa.campos]
4. Preencha o `Código do cupom`. [guia=cupom-empresa.campos]
5. Escolha o `Tipo de desconto` (`Percentual (%)` ou `Valor fixo (R$)`). [guia=cupom-empresa.campos]
6. Preencha o `Valor do cupom`. [guia=cupom-empresa.campos]
7. Escreva as condições do cupom. [guia=cupom-empresa.campos]
8. Escolha a data em `Cupom vale até`. [guia=cupom-empresa.campos]
9. Confira tudo e clique em `Salvar cupom`. Aparece a mensagem `Salvo.` [guia=cupom-empresa.salvar]

## resultado esperado
a tela da área do cliente mostra a gestão de cupons disponível para a empresa vinculada.

## desvios
- a vitrine pública de cupons e a gestão da empresa são páginas distintas.
- quantidade, validade e publicação dependem das regras comerciais e da configuração do portal.

## quando pedir ajuda
se `Cupons` não estiver disponível ou um cupom próprio não aparecer, contate o suporte do portal com o nome público da empresa. não tente alterar cupom de outra empresa.

## fontes
- `portal-cidade/frontend/src/app/minha-conta/cupons/page.tsx:1`
- `portal-cidade/frontend/src/app/cupons/page.tsx:46`
- `portal-cidade/docs/PRODUCT.md:46`

## lacunas
não foi possível validar em detalhe se todos os clientes podem criar e editar cupons nem as ações exatas da tela autenticada.
