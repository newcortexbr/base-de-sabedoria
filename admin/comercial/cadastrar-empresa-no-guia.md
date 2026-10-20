---
id: cadastrar-empresa-no-guia
titulo: "cadastrar uma empresa no Guia"
publico:
  - admin
modulo: guia
categoria: admin
aba: nao-se-aplica
tipo_problema: cadastro
status: rascunho-documental
revisado_em: 2026-10-20
validacao: docs-e-codigo
videos:
  - JdJr7pXVx98
---

## objetivo

aqui você cadastra uma empresa nova no Guia, pelo painel. Você preenche o essencial e salva; o resto dá para completar depois, editando a empresa.

## pré-requisitos

- Ter acesso administrativo ao portal.
- O módulo Guia Comercial estar disponível no portal.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas`. [guia=menu:/painel/guia/empresas]
2. No topo da lista, clique em `+ Cadastrar Empresa`. [guia=guia-empresas.cadastrar]
3. Escreva o `Nome da empresa *`. [guia=empresa-editor:nome]
4. Escolha a `Categoria *`. [guia=empresa-editor:categoria]
5. Escolha a `Subcategoria *` (ela só aparece depois que você escolhe a categoria). [guia=empresa-editor:subcategoria]
6. Escolha a `Cidade`. [guia=local:cidade]
7. Se quiser, escolha o `Status` (`Pendente`, `Ativo`, `Inativo`, `Banido` ou `Reprovado`). [guia=empresa-editor:status]
8. Clique em `Cadastrar Empresa`, no fim da página. [guia=empresa-editor.salvar]

## resultado

A empresa é criada e passa a aparecer na lista de empresas do Guia. Para completar telefone, endereço, fotos e outros dados, abra a empresa pelo lápis (`Editar`).

## desvios

- Os campos com `*` são obrigatórios. Se algum faltar, o painel mostra o aviso `Não foi possível salvar` com o motivo.
- O campo `Plano` só aparece quando o portal tem planos; sem escolher, vale a cortesia do portal.
- Quem quer trazer várias empresas de uma vez deve usar `Importar do Google Maps`, que tem artigo próprio.

## quando pedir ajuda

peça ajuda se a categoria ou a cidade que você precisa não aparecer, ou se o cadastro falhar mesmo com tudo preenchido.

## fontes

- `portal-cidade/frontend/src/app/painel/guia/empresas/cadastrar/page.tsx:15-17`
- `portal-cidade/frontend/src/app/painel/guia/empresas/page.tsx:116-118`
- `portal-cidade/frontend/src/components/painel/EmpresaEditor.tsx:1040,1061,1078,1098,1127,1751-1752`

## lacunas

marcas do formulário acrescentadas em 2026-10-20 (`EmpresaEditor`, `SeletorDeLocal`, botão `+ Cadastrar Empresa`). Não verificado visualmente.
