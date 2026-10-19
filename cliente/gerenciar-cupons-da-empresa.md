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
---

## objetivo
consultar a área `Cupons` associada à empresa.

## pré-requisitos
- estar na área de cliente autenticada e ter vínculo com a empresa.

## passos
1. abra `Cupons` na área do cliente.
2. consulte os cupons que a tela apresentar para a empresa.
3. use as opções da tela, se estiverem disponíveis, para criar ou editar um cupom próprio.
4. confira as informações antes de salvar.

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
