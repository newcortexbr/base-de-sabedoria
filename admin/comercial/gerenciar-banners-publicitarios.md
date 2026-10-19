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

1. Abra `Banners Publicitários` (`/painel/guia/banners`). Use os filtros de página, formato, situação e busca.
2. Para criar, clique em cadastrar. Envie a imagem (obrigatória) e preencha título, endereço de destino, posição e datas de início e fim.
3. Se o banner foi vendido por fora, preencha os dados da venda (empresa, valor, contato). Veja a prévia ao lado.
4. Salve. Na lista, ative ou desative, edite ou exclua (com confirmação).

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
