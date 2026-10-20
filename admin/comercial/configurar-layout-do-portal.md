---
id: configurar-layout-do-portal
titulo: "mudar a aparência (layout) do portal"
publico:
  - admin
modulo: configurações
categoria: admin
aba: nao-se-aplica
tipo_problema: configuracao
status: rascunho-documental
revisado_em: 2026-10-19
validacao: docs-e-codigo
videos:
  - 8M4kdEfP7Eg
  - XekThBh1ygU
  - He7XF-kolwk
  - _YSN9di_ZOU
  - vPnHq9kRWW8
  - lrTaEV5JnVM
---

## objetivo
aqui você muda a aparência do site: topo, tela de início, cores ou rodapé.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No menu da esquerda, na parte `Sistema`, clique em `Configurações` e depois em `Layout`. [guia=menu:/painel/configuracoes/layout]
2. Escolha a parte que quer ajustar: `Topo`, `Tela Início`, `Cores` ou `Rodapé`. [guia=configuracoes-layout.partes]
3. Faça a mudança que você quer na parte escolhida. [guia=configuracoes-layout.partes]
4. Clique no botão de salvar da própria página (por exemplo, `Salvar Topo` ou `Salvar cores`) e espere a mensagem de que deu certo. [guia=configuracoes-layout.salvar]

## resultado
O site passa a ter a aparência escolhida.

## desvios

os modelos disponíveis são definidos pelo produto; a tela permite escolher configurações, não criar um modelo visual novo. A aparência final pode depender de conteúdo e módulos existentes.

## quando pedir ajuda

peça ajuda se a página não carregar, se o salvamento apresentar erro ou se a opção esperada não estiver disponível. Não envie senhas nem chaves de integração.

## fontes

- `portal-cidade/frontend/src/app/painel/configuracoes/page.tsx:26-40,72-95`
- `portal-cidade/frontend/src/app/painel/configuracoes/layout/page.tsx:13-29,31-36,59-60,84-86`
- `portal-cidade/docs/PRODUCT.md:82-93`
- `portal-cidade/docs/DECISIONS.md:14-21`

## lacunas

não foi feita validação visual no navegador. Os campos e ações de cada subpágina podem mudar.
