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

1. Abra `Configurações` em `/painel/configuracoes` para editar informações gerais, como nome, contatos e redes sociais.
2. Para identidade visual, abra `Configurações` → `Layout` em `/painel/configuracoes/layout`.
3. Escolha a área que deseja ajustar, como `Topo`, `Tela Início`, `Cores` ou `Rodapé`.
4. Faça a alteração e use a ação de salvar apresentada na própria página. Confirme a mensagem de sucesso antes de sair.

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
