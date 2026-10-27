---
id: gerenciar-quartos-e-suites
titulo: "quartos e suítes: cadastrar na página da empresa do Guia"
publico:
  - admin
modulo: guia
categoria: admin
aba: nao-se-aplica
tipo_problema: cadastro
tags:
  - criar
  - quarto
  - diaria
  - preco
  - foto
  - comodidade
  - guia
  - empresa
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - reZ3e1a4o-o
---

## objetivo

aqui você mostra os quartos de hotel ou pousada, com fotos, comodidades e preço por noite.

## pré-requisitos

- Ter acesso administrativo ao portal.
- O módulo Guia Comercial estar disponível no portal.
- A empresa ter ficha completa; a cortesia do portal também atende a essa condição.
- A categoria da empresa ter `Acomodações — hotel, pousada, hospedagem` marcado em `Gerenciar Categorias`.

## veja também
- para enviar fotos de um quarto, veja o artigo "colocar fotos em um quarto ou suíte".

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas`. [guia=menu:/painel/guia/empresas]
2. Na linha da empresa, clique no lápis (`Editar`). [guia=guia-empresas.editar] [t=19]
3. Em `Conteúdo da ficha`, no cartão `Quartos e suítes`, clique em `Gerenciar`. O formulário da empresa é salvo antes de abrir a tela. [guia=guia-empresas-editar.gerenciar-quartos] [t=22]
4. Escreva o nome da seção (por exemplo, Suítes). [guia=guia-empresas-quartos.nome-secao] [t=38]
5. Clique em `+ Seção`. [guia=guia-empresas-quartos.adicionar-secao] [t=40]
6. Na seção, clique em `+ Quarto`. [guia=guia-empresas-quartos.adicionar-quarto] [t=69]
7. Escreva o `Título *` do quarto. [guia=guia-empresas-quartos.titulo] [t=69]
8. Escreva o `Subtítulo`. [guia=guia-empresas-quartos.subtitulo] [t=72]
9. Escreva a `Descrição` (cama, vista, banheiro). [guia=guia-empresas-quartos.descricao] [t=78]
10. Informe o `Preço por noite`. [guia=guia-empresas-quartos.preco] [t=83]
11. Para promoção, preencha também o `Preço promocional`. [guia=guia-empresas-quartos.preco-promocional] [t=85]
12. Em `Comodidades do quarto`, escreva um item (por exemplo, Wi-Fi). [guia=guia-empresas-quartos.comodidade] [t=92]
13. Clique no `+` ao lado para adicionar a comodidade. Repita para cada item. [guia=guia-empresas-quartos.comodidade-adicionar] [t=92]
14. Se quiser, mude a `Ordem` do quarto na seção. [guia=guia-empresas-quartos.ordem] [t=100]
15. Clique em `Salvar quarto`. [guia=guia-empresas-quartos.salvar] [t=106]

## resultado

O quarto fica salvo na seção escolhida. Quando publicado, pode compor a ficha pública da hospedagem, conforme a disponibilidade do recurso.

## desvios

- A categoria precisa ter `Acomodações — hotel, pousada, hospedagem` marcado em `Gerenciar Categorias`; sem isso o cartão não aparece.
- Cada quarto pode estar `Publicado` ou `Despublicado`. Em cada quarto também dá para gerenciar as fotos, editar e excluir.
- A própria empresa também pode cuidar disso pela área do cliente; a tela é a mesma.

## campos e dicas
- o recurso transforma a página de hotel, pousada, chalé ou casa de temporada em vitrine de acomodações. aparece para empresas cuja categoria tem a opção de acomodações marcada. a própria empresa gerencia pelo painel do cliente.
- quartos ficam em seções (ex.: Casal, Grupo, Suítes, Chalés, Quartos Standard). a nova seção entra no fim da lista. cada seção mostra se está publicada e quantos quartos estão no ar; setas mudam a ordem, renomear troca o nome, o X exclui.
- cada quarto na lista mostra título, subtítulo e preço por noite (o antigo riscado quando há promoção), com ações para publicar ou esconder, gerenciar fotos, editar e excluir. o selo `Publicado` tira o quarto do ar sem apagar.
- `Subtítulo`: curto, ex.: para duas pessoas com varanda.
- `Descrição`: cama, vista, banheiro e o que torna o quarto especial.
- `Preço promocional`: no site o valor cheio aparece riscado ao lado do novo.
- `Comodidades do quarto`: um item por vez (ex.: Wi-Fi, ar-condicionado, vista mar, garagem, cozinha, varanda); viram etiquetas no card do quarto.
- `Ordem` define a posição do quarto na seção.
- no portal: a ficha da hospedagem ganha a aba `Quartos` e o bloco `Quartos e suítes`, com as seções em abas. cada quarto é um card com foto e número de fotos, subtítulo, título, descrição, comodidades e preço por noite (promocional em destaque), com os botões `Reservar` e `WhatsApp` que levam o hóspede à reserva. no celular, o hóspede passa as fotos com o dedo.
- mantenha diárias e fotos atualizadas; boas fotos e preços claros atraem reservas.

## quando pedir ajuda

peça ajuda se o cartão não aparecer ou se salvar der erro.

## fontes

- `portal-cidade/frontend/src/components/painel/EmpresaEditor.tsx:951,981,1735-1744`.
- `portal-cidade/frontend/src/app/painel/guia/empresas/[id]/quartos/page.tsx:45-52,169-211,503-509,623-633`.

## lacunas

Conferência documental no código b2f62d3f e nas legendas dos vídeos citados. Sem execução no navegador; não foram medidos cache, entrega de pedidos, impressão ou upload reais.
