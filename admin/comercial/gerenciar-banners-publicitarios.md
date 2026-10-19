---
id: gerenciar-banners-publicitarios
titulo: gerenciar banners publicitários
publico:
  - admin
modulo: banners
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-16
validacao: docs-e-codigo
videos:
  - BqIfSq7bVXM
---

## objetivo

criar e controlar os banners de publicidade do portal.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Banners Publicitários` (`/painel/guia/banners`). No topo da lista, você pode filtrar por `Página`, `Formato`, `Situação` ou buscar pelo título.
2. Para criar, clique no botão `+ Cadastrar banner`.
3. Envie a imagem do banner (é obrigatória) e preencha o título, o endereço que vai abrir ao clicar, a `Posição` (onde o banner aparece) e as datas de início e fim.
4. Se o banner foi vendido por fora do sistema, preencha o quadro `Dados da venda` (empresa, valor, contato). Ao lado, você vê como o banner vai ficar.
5. Salve.
6. Na lista, use `Ativar` ou `Desativar` para colocar ou tirar do ar sem apagar, `Editar` para mudar e `Excluir` para apagar (o sistema pede confirmação).

## resultado

o banner aparece na posição escolhida, dentro das datas.

## desvios

- Algumas posições dependem de módulos ligados.
- Se o campo de categoria vier vazio, recarregue a página.

## quando pedir ajuda

peça ajuda se a página não carregar, se o salvamento der erro ou se a opção esperada não aparecer.

## fontes

- `portal-cidade/frontend/src/app/painel/guia/banners/`
- `suporte-kb/mapa/admin/telas/painel-guia-banners.md`, `painel-guia-banners-cadastrar.md`

## lacunas

não foi feita validação visual no navegador. Os textos dos botões podem mudar.
