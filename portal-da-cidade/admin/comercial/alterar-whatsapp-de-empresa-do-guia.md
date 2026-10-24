---
id: alterar-whatsapp-de-empresa-do-guia
titulo: "trocar o WhatsApp de uma empresa do Guia"
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

Aqui você altera o número usado no contato por WhatsApp da empresa. O campo só aparece na ficha completa.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.
- O módulo Guia Comercial estar disponível.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas`. [guia=menu:/painel/guia/empresas]
2. Na linha da empresa, clique no lápis (`Editar`). [guia=guia-empresas.editar]
3. Em `Contato`, preencha `WhatsApp` com o novo número. [guia=empresa-editor.whatsapp] [t=215]
4. Clique em `Salvar Alterações`. [guia=empresa-editor.salvar]

## resultado

O número é salvo na empresa. Confira o link exibido ao lado do campo antes de salvar.

## quando pedir ajuda

Peça ajuda se o controle não aparecer ou se a tela mostrar erro ao salvar.

## fontes

- `portal-cidade/frontend/src/components/painel/EmpresaEditor.tsx:744-749,1183-1206`.
- `portal-cidade/frontend/src/components/painel/EmpresaEditor.tsx:1752-1753`.

## lacunas

Sem validação no navegador. O vídeo é uma referência da tela; só os passos demonstrados têm tempo marcado.
