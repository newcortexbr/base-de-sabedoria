---
id: gerenciar-quartos-e-suites
titulo: "quartos e suítes: cadastrar na página da empresa do Guia"
publico:
  - admin
modulo: guia
categoria: admin
aba: nao-se-aplica
tipo_problema: cadastro
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
videos:
  - reZ3e1a4o-o
  - aSRf0hwUrrc
---

## objetivo

aqui você mostra os quartos de hotel ou pousada, com fotos, comodidades e preço por noite.

## pré-requisitos

- Ter acesso administrativo ao portal.
- O módulo Guia Comercial estar disponível no portal.
- A categoria da empresa ter `Quartos` marcado em `Gerenciar Categorias`.

## veja também
- para enviar fotos de um quarto, veja o artigo "colocar fotos em um quarto ou suíte".

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas`. [guia=menu:/painel/guia/empresas]
2. Na linha da empresa que você quer, clique no lápis (`Editar`). [guia=guia-empresas.editar] [t=19]
3. Desça até `Conteúdo da ficha` e, no cartão `Quartos e suítes`, clique em `Gerenciar`. O formulário da empresa é salvo antes de abrir a tela. [guia=guia-empresas-editar.gerenciar-quartos] [t=22]
4. Escreva o nome da seção (por exemplo, Suítes). [guia=guia-empresas-quartos.nome-secao] [t=35]
5. Clique em `+ Seção`. [guia=guia-empresas-quartos.adicionar-secao] [t=38]
   Cada seção mostra se está publicada e quantos quartos estão no ar. Nela há setas de ordem, `Renomear` e o x para excluir a seção.
6. Na seção, clique em `+ Quarto`. [guia=guia-empresas-quartos.adicionar-quarto] [t=67]
7. Escreva o `Título *` do quarto. [guia=guia-empresas-quartos.titulo] [t=70]
8. Escreva o `Subtítulo`. [guia=guia-empresas-quartos.subtitulo] [t=73]
9. Escreva a `Descrição` (cama, vista, banheiro). [guia=guia-empresas-quartos.descricao] [t=75]
10. Informe o `Preço por noite`. [guia=guia-empresas-quartos.preco] [t=81]
11. Para promoção, preencha também o `Preço promocional`. [guia=guia-empresas-quartos.preco-promocional] [t=84]
12. Em `Comodidades do quarto`, escreva um item (por exemplo, Wi-Fi). [guia=guia-empresas-quartos.comodidade] [t=91]
13. Clique no `+` ao lado para adicionar a comodidade. Repita para cada item. [guia=guia-empresas-quartos.comodidade-adicionar] [t=93]
14. Se quiser, mude a `Ordem` do quarto na seção. [guia=guia-empresas-quartos.ordem] [t=101]
15. Clique em `Salvar quarto`. [guia=guia-empresas-quartos.salvar] [t=104]

## resultado

a página da empresa ganha a aba de quartos e o bloco `Quartos & Suítes`, com as seções em abas. Cada quarto aparece num card com a foto e o número de fotos, o subtítulo, o título, a descrição e as comodidades (em etiquetas). À direita ficam o preço por noite e os botões de reserva e WhatsApp. Quando há promoção, o preço cheio aparece riscado ao lado do promocional.

## desvios

- A categoria precisa ter `Quartos` marcado em `Gerenciar Categorias`; sem isso o cartão não aparece.
- Cada quarto pode estar `Publicado` ou `Despublicado`. Em cada quarto também dá para gerenciar as fotos, editar e excluir.
- A própria empresa também pode cuidar disso pela área do cliente; a tela é a mesma.

## quando pedir ajuda

peça ajuda se o cartão não aparecer ou se salvar der erro.

## fontes

- `portal-cidade/frontend/src/components/painel/EmpresaEditor.tsx:933-946,1655-1686` — cartões de `Conteúdo da ficha`.
- `portal-cidade/frontend/src/app/painel/guia/empresas/[id]/quartos/page.tsx:1`
- vídeo `reZ3e1a4o-o`.

## lacunas

não verificado visualmente nesta tarefa; passos conferidos com o vídeo de suporte e com o código da tela.
