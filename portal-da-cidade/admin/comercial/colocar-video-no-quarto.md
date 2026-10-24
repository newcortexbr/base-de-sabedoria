---
id: colocar-video-no-quarto
titulo: "colocar um vídeo do YouTube no quarto"
publico:
  - admin
modulo: guia
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - reZ3e1a4o-o
---

## objetivo

Aqui você acrescenta um vídeo do YouTube à galeria de um quarto já cadastrado.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.
- O módulo Guia Comercial estar disponível.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas`. [guia=menu:/painel/guia/empresas]
2. Na linha da empresa, clique no lápis (`Editar`). [guia=guia-empresas.editar]
3. Em `Conteúdo da ficha`, clique em `Gerenciar` no cartão `Quartos e suítes`. O formulário da empresa é salvo antes de abrir a tela. [guia=guia-empresas-editar.gerenciar-quartos]
4. No quarto, clique em `📷 Fotos`. [guia=guia-empresas-quartos.fotos] [t=120]
5. Clique em `Vídeo do YouTube`. [guia=galeria.modo-video]
6. Cole o endereço em `Link do vídeo no YouTube`. [guia=galeria.link-video]
7. Clique em `Adicionar vídeo`. [guia=galeria.enviar-video]

## resultado

O vídeo é acrescentado à galeria do quarto. Cada item da galeria é uma foto ou um vídeo.

## quando pedir ajuda

Peça ajuda se o controle não aparecer ou se a tela mostrar erro ao salvar.

## fontes

- `portal-cidade/frontend/src/app/painel/guia/empresas/[id]/quartos/page.tsx:303-307,503-505`.
- `portal-cidade/frontend/src/components/painel/GaleriaDeMidia.tsx:176-185,219-257`.

## lacunas

Sem adição real. O vídeo menciona YouTube aos 123 segundos, mas não detalha os controles da galeria; os controles foram conferidos no código.
