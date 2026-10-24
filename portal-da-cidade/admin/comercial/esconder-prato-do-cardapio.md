---
id: esconder-prato-do-cardapio
titulo: "esconder ou publicar um prato do cardápio digital"
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
  - VV8BxCbIfz4
---

## objetivo

Aqui você tira um prato do cardápio sem apagar o cadastro e pode publicar de novo.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.
- O módulo Guia Comercial estar disponível.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas`. [guia=menu:/painel/guia/empresas]
2. Na linha da empresa, clique no lápis (`Editar`). [guia=guia-empresas.editar]
3. Em `Conteúdo da ficha`, clique em `Gerenciar` no cartão `Cardápio`. O formulário da empresa é salvo antes de abrir a tela. [guia=guia-empresas-editar.gerenciar-cardapio]
4. No prato, clique no selo `Publicado` para despublicar, ou em `Despublicado` para publicar. [guia=guia-empresas-cardapio.publicacao-prato]

## resultado

A mudança é gravada ao clicar no selo. Para aparecer no público, a seção e o recurso de cardápio também precisam estar disponíveis.

## quando pedir ajuda

Peça ajuda se o controle não aparecer ou se a tela mostrar erro ao salvar.

## fontes

- `portal-cidade/frontend/src/app/painel/guia/empresas/[id]/cardapio/page.tsx:280-296,477`.

## lacunas

Sem validação no navegador. A existência do prato no painel não prova exibição na página pública.
