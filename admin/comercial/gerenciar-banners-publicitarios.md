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

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Banners Publicitários`. [guia=menu:/painel/guia/banners] [t=10]
2. No topo da lista, escreva o título na busca ou escolha `Página`, `Formato` ou `Situação` para achar um banner. [guia=guia-banners.filtros] [t=18]
3. Para criar, clique em `+ Novo Banner` (com a lista vazia, o botão se chama `+ Cadastrar banner`). [guia=guia-banners.novo] [t=46]
4. Escreva o `Título *` do banner. [guia=guia-banners-cadastrar.titulo] [t=48]
5. Envie a imagem do banner (é obrigatória). [guia=guia-banners-cadastrar.imagem] [t=49]
6. Se quiser, escreva a `URL de Destino`, o endereço que abre quando alguém clica no banner. [guia=guia-banners-cadastrar.url-destino] [t=51]
7. Clique em `Posição` para escolher onde o banner aparece. [guia=guia-banners-cadastrar.posicao] [t=54]
8. Na lista, escolha a página e o lugar exato; digite no filtro para achar mais rápido. A prévia ao lado mostra como o banner vai ficar. [guia=guia-banners-cadastrar.posicao-lista] [t=67]
9. Se o banner foi vendido por fora do sistema, preencha o quadro `Dados da venda` (empresa, telefone, valor). Esses dados nunca aparecem para o visitante. [guia=guia-banners-cadastrar.dados-da-venda] [t=83]
10. Escolha a `Data de início`. [guia=guia-banners-cadastrar.data-inicio] [t=95]
11. Escolha a `Data de fim`. [guia=guia-banners-cadastrar.data-fim] [t=97]
12. Deixe `Ativo` marcado. [guia=guia-banners-cadastrar.salvar]
13. Clique em `Salvar Banner`. Nada muda no ar até você salvar. [guia=guia-banners-cadastrar.salvar] [t=100]
14. Na lista, clique em `Ativar` ou `Desativar` na linha do banner para colocar ou tirar do ar sem apagar. [guia=guia-banners.ativar-desativar]
15. Para mudar um banner, clique em `Editar` na linha dele. [guia=guia-banners.editar] [t=103]
16. Para apagar, clique em `Excluir` na linha dele. [guia=guia-banners.excluir]
17. Confirme na janela que o navegador abre. [guia=guia-banners.excluir]

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
