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
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - reZ3e1a4o-o
---

## objetivo
aqui você envia as fotos de um quarto ou suíte que já foi criado.

## pré-requisitos

- Ter acesso administrativo ao portal.
- O módulo Guia Comercial estar disponível no portal.
- A empresa ter ficha completa; a cortesia do portal também atende a essa condição.
- A categoria da empresa ter `Acomodações — hotel, pousada, hospedagem` marcado em `Gerenciar Categorias`.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas`. [guia=menu:/painel/guia/empresas]
2. Na linha da empresa, clique no lápis (`Editar`). [guia=guia-empresas.editar] [t=19]
3. Em `Conteúdo da ficha`, clique em `Gerenciar` no cartão `Quartos e suítes`. O formulário da empresa é salvo antes de abrir a tela. [guia=guia-empresas-editar.gerenciar-quartos] [t=22]
4. No quarto desejado, clique em `📷 Fotos`. [guia=guia-empresas-quartos.fotos] [t=120]
5. Em `+ Adicionar fotos`, selecione as imagens do quarto. [guia=galeria.adicionar-fotos] [t=123]

## resultado

As fotos são enviadas para a galeria do quarto escolhido. Não há um botão de salvar o quarto para concluir esse envio.

## desvios

Para vídeo, veja "colocar um vídeo do YouTube no quarto". Fotos e vídeo usam controles diferentes da galeria.

## quando pedir ajuda

peça ajuda se o cartão não aparecer ou se salvar der erro.

## fontes

- `portal-cidade/frontend/src/app/painel/guia/empresas/[id]/quartos/page.tsx:234-254,303-307,503-505`.
- `portal-cidade/frontend/src/components/painel/GaleriaDeMidia.tsx:108-112,208-212`.

## lacunas

Conferência documental no código b2f62d3f e nas legendas dos vídeos citados. Sem execução no navegador; não foram medidos cache, entrega de pedidos, impressão ou upload reais.
