---
id: gerenciar-catalogo-de-produtos
titulo: "catálogo de produtos: cadastrar na página da empresa do Guia"
publico:
  - admin
modulo: guia
categoria: admin
aba: nao-se-aplica
tipo_problema: cadastro
tags:
  - criar
  - catalogo
  - produto
  - foto
  - preco
  - guia
  - empresa
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - Z45xwGT8U38
---

## objetivo

aqui você monta a vitrine de produtos, com foto e preço, de uma empresa do Guia.

## pré-requisitos

- Ter acesso administrativo ao portal.
- O módulo Guia Comercial estar disponível no portal.
- A empresa ter ficha completa. A cortesia do portal também libera o recurso; o plano Grátis não.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas`. [guia=menu:/painel/guia/empresas]
2. Na linha da empresa, clique no lápis (`Editar`). [guia=guia-empresas.editar] [t=18]
3. Em `Conteúdo da ficha`, no cartão `Catálogo de produtos`, clique em `Gerenciar`. O formulário da empresa é salvo antes de abrir a tela. [guia=guia-empresas-editar.gerenciar-catalogo] [t=21]
4. Escreva o nome da seção (por exemplo, Feminino). [guia=guia-empresas-catalogo.nome-secao] [t=85]
5. Clique em `+ Adicionar seção`. [guia=guia-empresas-catalogo.adicionar-secao] [t=85]
6. Clique na seção, na lista da esquerda. Cada seção tem chave de publicar, setas de ordem e x para excluir. [guia=guia-empresas-catalogo.secao] [t=91]
7. Clique em `+ Novo produto`. [guia=guia-empresas-catalogo.novo-produto] [t=91]
8. Escreva o `Título *` do produto. [guia=guia-empresas-catalogo.titulo] [t=93]
9. Escreva a `Marca`. [guia=guia-empresas-catalogo.marca] [t=96]
10. Escreva a `Descrição`. [guia=guia-empresas-catalogo.descricao] [t=96]
11. Informe o `Preço (R$)`. [guia=guia-empresas-catalogo.preco] [t=99]
12. Se quiser, escolha um `Destaque no produto (opcional)`: `Mais vendido`, `Oferta`, `Novo` ou `Recente`. [guia=guia-empresas-catalogo.destaque] [t=101]
13. Em `Specs (uma por linha)`, escreva uma especificação por linha. Exemplos: tamanhos, tecido e cores para roupas; ano, quilometragem e combustível para veículos. [guia=guia-empresas-catalogo.specs] [t=105]
14. Em `+ Adicionar fotos`, selecione as imagens. Elas são enviadas ao salvar. [guia=galeria.adicionar-fotos] [t=115]
15. Clique em `Salvar produto`. [guia=guia-empresas-catalogo.salvar] [t=122]

na lista de produtos da seção você vê a marca, o título, o preço, quantas fotos tem, o selo de destaque e as especificações.

## resultado

O produto fica salvo na seção escolhida. A exibição pública depende da publicação do produto, da seção e da ficha da empresa.

## desvios

- Cada produto tem a chave "no ar", o botão de fotos, o lápis para editar e a lixeira.
- Na galeria do produto também cabe vídeo do YouTube.
- A própria empresa também pode cuidar disso pela área do cliente; a tela é a mesma.

## campos e dicas
- o catálogo é vitrine com fotos, preço e ficha técnica; serve para lojas de roupa, concessionárias, eletrônicos, móveis etc. vale para todas as categorias do Guia, mas depende do plano (no plano Grátis não fica disponível).
- seções organizam os produtos (ex.: feminino, masculino, calçados); a nova seção entra no fim da lista.
- `Specs` aparecem como etiquetas no produto.
- a chave "no ar" tira o produto do site sem apagar.
- no portal: a página da loja ganha o bloco `Catálogo de produtos` (número de categorias e itens) com `Ver catálogo completo`. o catálogo abre com abas/filtros por seção e cada produto em card com foto, selo, marca, specs, descrição e preço; ao lado ficam contato, endereço e horário.
- o botão `Tenho interesse` do card abre o WhatsApp da loja já citando o produto.
- boas fotos e preços claros convertem visitas em vendas; mantenha o catálogo atualizado.

## quando pedir ajuda

peça ajuda se o cartão não aparecer ou se salvar der erro.

## fontes

- `portal-cidade/frontend/src/components/painel/EmpresaEditor.tsx:948,975-979,1735-1744`.
- `portal-cidade/frontend/src/app/painel/guia/empresas/[id]/catalogo/page.tsx:249-319,533-617`.
- `portal-cidade/frontend/src/components/painel/GaleriaDeMidia.tsx:208-212`.

## lacunas

Conferência documental no código b2f62d3f e nas legendas dos vídeos citados. Sem execução no navegador; não foram medidos cache, entrega de pedidos, impressão ou upload reais.
