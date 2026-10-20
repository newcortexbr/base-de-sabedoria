---
id: configurar-fale-conosco-do-portal
titulo: "configurar a página Fale Conosco do portal"
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
aqui você preenche o e-mail e o telefone que aparecem na página Fale Conosco.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No menu da esquerda, na parte `Sistema`, clique em `Configurações` e depois em `Configurações Gerais`. [guia=menu:/painel/configuracoes]
2. No quadro `Página Fale Conosco`, preencha o `E-mail de contato`. [guia=configuracoes.email-contato]
3. Preencha o `Telefone`. [guia=configuracoes.telefone-contato]
4. Clique em `Salvar Fale Conosco`. [guia=configuracoes.salvar-contato]

## resultado
Os contatos ficam salvos.

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
