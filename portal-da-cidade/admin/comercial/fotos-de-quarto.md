---
id: fotos-de-quarto
titulo: "colocar fotos em um quarto ou suíte"
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
  - reZ3e1a4o-o
---

## objetivo
aqui você envia as fotos de um quarto ou suíte que já foi criado.

## pré-requisitos

- Ter acesso administrativo ao portal.
- O módulo Guia Comercial estar disponível no portal.
- A categoria da empresa ter `Quartos` marcado em `Gerenciar Categorias`.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas`. [guia=menu:/painel/guia/empresas]
2. Na linha da empresa que você quer, clique no lápis (`Editar`). [guia=guia-empresas.editar]
3. Desça até `Conteúdo da ficha` e, no cartão `Quartos e suítes`, clique em `Gerenciar`. O formulário da empresa é salvo antes de abrir a tela. [guia=guia-empresas-editar.gerenciar-quartos]
4. Para as fotos, clique em `Fotos` na linha do quarto que você quer. [guia=guia-empresas-quartos.fotos]
5. Clique em `+ Adicionar fotos` (também aceita vídeo do YouTube). [guia=galeria.adicionar-fotos]

## resultado
As fotos aparecem na ficha do quarto.

## desvios

- A categoria precisa ter `Quartos` marcado em `Gerenciar Categorias`; sem isso o cartão não aparece.
- Cada quarto pode estar `Publicado` ou `Despublicado`.
- A própria empresa também pode cuidar disso pela área do cliente; a tela é a mesma.

## quando pedir ajuda

peça ajuda se o cartão não aparecer ou se salvar der erro.

## fontes

- `portal-cidade/frontend/src/components/painel/EmpresaEditor.tsx:933-946,1655-1686` — cartões de `Conteúdo da ficha`.
- `portal-cidade/frontend/src/app/painel/guia/empresas/[id]/quartos/page.tsx:1`
- vídeo `reZ3e1a4o-o`.

## lacunas

não verificado visualmente nesta tarefa; passos conferidos com o vídeo de suporte e com o código da tela.
