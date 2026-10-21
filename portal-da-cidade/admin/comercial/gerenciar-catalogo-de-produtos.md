---
id: gerenciar-catalogo-de-produtos
titulo: "catálogo de produtos: cadastrar na página da empresa do Guia"
publico:
  - admin
modulo: guia
categoria: admin
aba: nao-se-aplica
tipo_problema: cadastro
status: rascunho-documental
revisado_em: 2026-10-19
validacao: docs-e-codigo
videos:
  - Z45xwGT8U38
---

## objetivo

aqui você monta a vitrine de produtos, com foto e preço, de uma empresa do Guia.

## pré-requisitos

- Ter acesso administrativo ao portal.
- O módulo Guia Comercial estar disponível no portal.
- A empresa ter um plano pago: no plano grátis este recurso não aparece.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas`. [guia=menu:/painel/guia/empresas]
2. Na linha da empresa que você quer, clique no lápis (`Editar`). [guia=guia-empresas.editar] [t=21]
3. Desça até `Conteúdo da ficha` e, no cartão `Catálogo de produtos`, clique em `Gerenciar`. O formulário da empresa é salvo antes de abrir a tela. [guia=guia-empresas-editar.gerenciar-catalogo] [t=24]
4. Escreva o nome da seção (por exemplo, Feminino). [guia=guia-empresas-catalogo.nome-secao] [t=85]
5. Clique em `+ Adicionar seção`. [guia=guia-empresas-catalogo.adicionar-secao] [t=85]
6. Clique na seção que você quer, na lista da esquerda. [guia=guia-empresas-catalogo.secao] [t=92]
7. Clique em `Novo produto`. [guia=guia-empresas-catalogo.novo-produto] [t=92]
8. Escreva o `Título *` do produto. [guia=guia-empresas-catalogo.titulo] [t=94]
9. Escreva a `Marca`. [guia=guia-empresas-catalogo.marca] [t=96]
10. Escreva a `Descrição`. [guia=guia-empresas-catalogo.descricao] [t=96]
11. Informe o `Preço (R$)`. [guia=guia-empresas-catalogo.preco] [t=99]
12. Se quiser, escolha um `Destaque no produto (opcional)`: `Mais vendido`, `Oferta`, `Novo` ou `Recente`. [guia=guia-empresas-catalogo.destaque] [t=101]
13. Em `Specs (uma por linha)`, escreva uma especificação por linha (por exemplo, tamanhos, tecido, cores). [guia=guia-empresas-catalogo.specs] [t=105]
14. Clique em `+ Adicionar fotos` e escolha as imagens. Elas são enviadas ao salvar. [guia=galeria.adicionar-fotos] [t=114]
15. Clique em `Salvar produto`. [guia=guia-empresas-catalogo.salvar] [t=122]

## resultado

a página da empresa ganha o bloco de catálogo; o botão de interesse abre o WhatsApp da loja falando do produto.

## desvios

- Cada produto tem a chave "no ar", o botão de fotos, o lápis para editar e a lixeira.
- Na galeria do produto também cabe vídeo do YouTube.
- A própria empresa também pode cuidar disso pela área do cliente; a tela é a mesma.

## quando pedir ajuda

peça ajuda se o cartão não aparecer ou se salvar der erro.

## fontes

- `portal-cidade/frontend/src/components/painel/EmpresaEditor.tsx:933-946,1655-1686` — cartões de `Conteúdo da ficha`.
- `portal-cidade/frontend/src/app/painel/guia/empresas/[id]/catalogo/page.tsx:1`
- vídeo `Z45xwGT8U38`.

## lacunas

não verificado visualmente nesta tarefa; passos conferidos com o vídeo de suporte e com o código da tela.
