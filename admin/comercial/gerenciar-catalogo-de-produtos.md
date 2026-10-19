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

montar a vitrine de produtos com foto e preço de uma empresa do Guia.

## pré-requisitos

- Ter acesso administrativo ao portal.
- O módulo Guia Comercial estar disponível no portal.
- A empresa ter um plano pago: no plano grátis este recurso não aparece.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas` (`/painel/guia/empresas`).
2. Na linha da empresa, clique no lápis (`Editar`).
3. Desça até `Conteúdo da ficha` e, no cartão `Catálogo de produtos`, clique em `Gerenciar`. O formulário da empresa é salvo antes de abrir a tela.
4. Escreva o nome da seção (por exemplo, Feminino) e clique em `+ Adicionar seção`.
5. Escolha a seção e clique em `Novo produto`.
6. Preencha o `Título *`, a `Marca`, a `Descrição` e o `Preço (R$)`.
7. Se quiser, escolha um `Destaque no produto (opcional)`: `Mais vendido`, `Oferta`, `Novo` ou `Recente`.
8. Em especificações, escreva uma por linha (por exemplo, tamanhos, tecido, cores).
9. Clique em `+ Adicionar fotos` e escolha as imagens. Elas são enviadas ao salvar.
10. Clique em `Salvar produto`.

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
