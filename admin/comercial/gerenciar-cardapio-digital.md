---
id: gerenciar-cardapio-digital
titulo: montar o cardápio digital de uma empresa do Guia
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
  - VV8BxCbIfz4
---

## objetivo

montar o cardápio com fotos e preços de um restaurante, bar ou lanchonete do Guia.

## pré-requisitos

- Ter acesso administrativo ao portal.
- O módulo Guia Comercial estar disponível no portal.
- A categoria da empresa ter `Cardápio` marcado em `Gerenciar Categorias`; sem isso o cartão não aparece.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas` (`/painel/guia/empresas`).
2. Na linha da empresa, clique no lápis (`Editar`).
3. Desça até `Conteúdo da ficha` e, no cartão `Cardápio`, clique em `Gerenciar`. O formulário da empresa é salvo antes de abrir a tela.
4. No topo, ligue ou desligue os botões `Fazer meu pedido` e `Chamar no WhatsApp`. Se o cardápio for só para consulta nas mesas, deixe os dois desligados.
5. Em `Aparência do cardápio`, escolha o tema claro ou escuro.
6. Para imprimir o QR code, escolha o tamanho (`A4`, `A5`, `A6` ou adesivo) e clique em `Gerar QR Code para imprimir`. Também dá para usar `Baixar imagem` ou `Copiar link`.
7. Para criar uma seção (por exemplo, Bebidas), escreva o nome e clique em `Criar`.
8. No fim da seção, clique para adicionar um prato (`Novo prato`).
9. Envie a foto do prato (JPG ou PNG, até 10 MB).
10. Preencha o `Nome do prato *`, a `Descrição` e o `Preço (R$)`. Para promoção, preencha também o `Preço promocional (R$)`.
11. Se quiser, marque as `Tags` (viram selos no prato).
12. Clique em `Salvar prato`.

## resultado

o prato aparece na seção e, quando publicado, no cardápio da página da empresa no portal.

## desvios

- Cada seção e cada prato pode estar `Publicado` ou `Despublicado`; clique no selo para trocar.
- Use as setas para mudar a ordem das seções, o lápis para renomear ou editar e a lixeira para excluir.
- A própria empresa também pode cuidar do cardápio pela área do cliente; a tela é a mesma.
- Cardápio digital é só para consulta. A venda com carrinho fica no `Cardápio do delivery`.

## quando pedir ajuda

peça ajuda se o cartão `Cardápio` não aparecer mesmo com a categoria marcada, ou se a foto ou o prato não salvarem.

## fontes

- `portal-cidade/frontend/src/components/painel/EmpresaEditor.tsx:933-946,1655-1686` — cartões de `Conteúdo da ficha`.
- `portal-cidade/frontend/src/app/painel/guia/empresas/[id]/cardapio/page.tsx:1` — tela `Gerenciar Cardápio`.
- vídeo `VV8BxCbIfz4` (tutorial Gerenciar Cardápio).

## lacunas

não verificado visualmente nesta tarefa; passos conferidos com o vídeo de suporte e com o código da tela. O botão de novo prato está no código como `Novo prato`; o vídeo fala "adicionar prato".
