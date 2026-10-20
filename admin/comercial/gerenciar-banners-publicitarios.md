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
revisado_em: 2026-10-19
validacao: docs-e-codigo
videos:
  - BqIfSq7bVXM
---

## objetivo

aqui você cria, coloca no ar, tira do ar e apaga os banners de publicidade do portal.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## veja também
- para colocar ou tirar um banner do ar sem apagar, veja o artigo "ativar ou desativar um banner publicitário".
- para mudar um banner, veja o artigo "editar um banner publicitário".
- para apagar um banner, veja o artigo "excluir um banner publicitário".

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Banners Publicitários`. [guia=menu:/painel/guia/banners] [t=10]
2. Para criar, clique em `+ Novo Banner` (com a lista vazia, o botão se chama `+ Cadastrar banner`). [guia=guia-banners.novo] [t=46]
3. Escreva o `Título *` do banner. [guia=guia-banners-cadastrar.titulo] [t=48]
4. Envie a imagem do banner (é obrigatória). [guia=guia-banners-cadastrar.imagem] [t=49]
5. Se quiser, escreva a `URL de Destino`, o endereço que abre quando alguém clica no banner. [guia=guia-banners-cadastrar.url-destino] [t=51]
6. Clique em `Posição` para escolher onde o banner aparece. [guia=guia-banners-cadastrar.posicao] [t=54]
7. Na lista, escolha a página e o lugar exato; digite no filtro para achar mais rápido. A prévia ao lado mostra como o banner vai ficar. [guia=guia-banners-cadastrar.posicao-lista] [t=67]
8. Se o banner foi vendido por fora do sistema, preencha o quadro `Dados da venda` (empresa, telefone, valor). Esses dados nunca aparecem para o visitante. [guia=guia-banners-cadastrar.dados-da-venda] [t=83]
9. Escolha a `Data de início`. [guia=guia-banners-cadastrar.data-inicio] [t=95]
10. Escolha a `Data de fim`. [guia=guia-banners-cadastrar.data-fim] [t=97]
11. Deixe `Ativo` marcado. [guia=guia-banners-cadastrar.salvar]
12. Clique em `Salvar Banner`. Nada muda no ar até você salvar. [guia=guia-banners-cadastrar.salvar] [t=100]

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
