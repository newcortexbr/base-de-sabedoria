---
id: trocar-plano-de-empresa-do-guia
titulo: "trocar o plano de uma empresa do Guia"
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
  - wukhVMFEHWg
---

## objetivo

Aqui você escolhe o plano ou a cortesia de uma empresa. Confira o aviso de cobrança antes de salvar.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.
- O módulo Guia Comercial estar disponível.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas`. [guia=menu:/painel/guia/empresas]
2. Na linha da empresa, clique no lápis (`Editar`). [guia=guia-empresas.editar]
3. Em `Plano`, escolha o plano desejado ou `Cortesia do portal (todos os itens)`. [guia=empresa-editor.plano] [t=129]
4. Depois de conferir o aviso de contratação, clique em `Salvar Alterações`. [guia=empresa-editor.salvar]

## resultado

A escolha é gravada para a empresa. Ao selecionar um plano pago diferente do atual, a tela informa que a contratação começa ativa e a fatura fica em aberto no Financeiro. Isso não confirma pagamento.

## quando pedir ajuda

Peça ajuda se o controle não aparecer ou se a tela mostrar erro ao salvar.

## fontes

- `portal-cidade/frontend/src/components/painel/EmpresaEditor.tsx:1100-1123`.
- `portal-cidade/frontend/src/components/painel/EmpresaEditor.tsx:635-647`.

## lacunas

Sem contratação real. Não se prometem preço, vencimento, cancelamento de faturas anteriores ou compensação: dependem do plano e da operação financeira.
