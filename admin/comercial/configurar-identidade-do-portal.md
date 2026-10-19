---
id: configurar-identidade-do-portal
titulo: configurar informações e aparência do portal
publico:
  - admin
modulo: configurações
categoria: admin
aba: nao-se-aplica
tipo_problema: configuracao
status: rascunho-documental
revisado_em: 2026-10-15
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

atualizar as informações básicas e a aparência do portal no painel.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No menu da esquerda, na parte `Sistema`, clique em `Configurações` e depois em `Configurações Gerais` (`/painel/configuracoes`). Ali você muda o `Nome do portal`, a `Logo do portal`, o `E-mail de contato`, o `Telefone`, o `WhatsApp` e as `Redes Sociais`.
2. Depois de mudar um quadro, clique no botão `Salvar` dele (por exemplo, `Salvar Redes Sociais`).
3. Para mudar a aparência do site, no mesmo menu `Configurações`, clique em `Layout` (`/painel/configuracoes/layout`).
4. Escolha a parte que quer ajustar: `Topo`, `Tela Início`, `Cores` ou `Rodapé`.
5. Faça a mudança e clique no botão de salvar da própria página (por exemplo, `Salvar Topo` ou `Salvar cores`). Espere a mensagem de que deu certo antes de sair.

## resultado

as informações ou opções de aparência salvas ficam associadas ao portal.

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
