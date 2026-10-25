# /painel/radar/produtos (Radar de Preços — Produtos e preços)

Arquivo: `app/painel/radar/produtos/page.tsx` (272 linhas; modais em `components/painel/radar/AdicionarPreco.tsx` e `DetalheDoProduto.tsx`)

## o que você vê
Catálogo de produtos do Radar com os preços de cada estabelecimento. Subtítulo "N produtos · N preços em N mercados". Botão `Adicionar preço`, campo `Buscar produto` e filtro de categoria ("Todas as categorias"). Tabela: `Produto` (foto ou ícone, nome, categoria, marca "criado pela IA"), `Estabelecimentos` (quantos têm o produto), `Menor preço`, `Atualizado` e `Ações`: `Ver preços`, lápis (`Editar produto`) e lixeira (`Apagar produto`). Paginação de 20 em 20. Sem resultado: "Nenhum produto encontrado."

## rota e gate
- `/painel/radar/produtos`. client, `Header` "Radar de Preços — …". só administrador; módulo `radar` (`lib/painel-menu.ts:78-82,120`).

## como chegar
- menu lateral, parte Conteúdo: grupo `Radar de Preços` > `Produtos e preços` (`Sidebar.tsx:140-149`).

## o que faz
- confere, corrige e apaga produtos e preços que a IA ou os moradores criaram, e permite lançar um preço à mão.

## ações e campos
- `Ver preços` (ou clicar no produto): abre o detalhe com os preços por estabelecimento (corrigir, remover, juntar com outro produto).
- `Editar produto`: janela "Editar produto" com `Nome *` e `Categoria *`; `Salvar`.
- `Apagar produto`: "Apagar este produto?" — apaga o produto e todos os preços dele.
- `Adicionar preço`: lança um preço novo (produto, estabelecimento, valor).
- busca com espera de 0,3 s.

## estados
- "Carregando produtos…"; erro com `Tentar de novo`; "Não foi possível concluir"; "Produto excluído", "Produto salvo".

## possíveis problemas
- não li os modais de `AdicionarPreco` e `DetalheDoProduto` campo a campo.
- apagar produto é definitivo e leva os preços junto.
- a lista vem inteira do servidor; a página só corta no cliente.
