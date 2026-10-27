---
id: cadastrar-empresa-no-guia
titulo: "cadastrar uma empresa no Guia"
publico:
  - admin
modulo: guia
categoria: admin
aba: nao-se-aplica
tipo_problema: cadastro
tags:
  - criar
  - empresa
  - guia
  - cadastro
  - endereco
  - contato
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - wukhVMFEHWg
  - JdJr7pXVx98
---

## objetivo

aqui você cadastra uma empresa nova no Guia, pelo painel. Você preenche o essencial e salva; o resto dá para completar depois, editando a empresa.

## explicação

O administrador pode cadastrar uma empresa pelo painel. A própria empresa também pode criar sua ficha pela área do cliente. Para dados além do cadastro inicial, use os artigos de edição e de conteúdo da ficha.

## pré-requisitos

- Ter acesso administrativo ao portal.
- O módulo Guia Comercial estar disponível no portal.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas`. [guia=menu:/painel/guia/empresas]
2. No topo da lista, clique em `+ Cadastrar Empresa`. [guia=guia-empresas.cadastrar]
3. Escreva o `Nome da empresa *`. [guia=empresa-editor:nome] [t=113]
4. Escolha a `Categoria *`. [guia=empresa-editor:categoria] [t=120]
5. Escolha a `Subcategoria *` da categoria selecionada. [guia=empresa-editor:subcategoria] [t=120]
6. Escolha a `Cidade *`. [guia=local:cidade] [t=208]
7. Se quiser, escolha o `Status` (`Pendente`, `Ativo`, `Inativo`, `Banido` ou `Reprovado`). [guia=empresa-editor:status] [t=200]
8. Clique em `Cadastrar Empresa`, no fim da página. [guia=empresa-editor.salvar]

## resultado

A empresa é criada e passa a aparecer na lista de empresas do Guia. Para completar telefone, endereço, fotos e outros dados, abra a empresa pelo lápis (`Editar`).

## desvios

- `Subcategoria *` é necessária: se não houver opções para a categoria, a tela orienta cadastrar uma antes de salvar a empresa.
- Quando `Plano` está disponível, `Cortesia do portal (todos os itens)` é uma opção. Para escolher outro, veja "trocar o plano de uma empresa do Guia".
- O aviso `Não foi possível salvar` acompanha as falhas mostradas pelo formulário; confira o motivo antes de tentar novamente.
- Para muitas empresas de uma vez, veja "importar empresas no Guia a partir de lista do Google Maps".

## quando pedir ajuda

peça ajuda se a categoria ou a cidade que você precisa não aparecer, ou se o cadastro falhar mesmo com tudo preenchido.

## fontes

- `portal-cidade/frontend/src/app/painel/guia/empresas/page.tsx:122-123`.
- `portal-cidade/frontend/src/components/painel/EmpresaEditor.tsx:1041-1050,1062-1095,1100-1139,1752-1753`.
- `portal-cidade/frontend/src/components/painel/SeletorDeLocal.tsx:141-153`.

## lacunas

Sem cadastro real. Os vídeos explicam a lista e os campos na edição; não demonstram todos os passos de criação.
