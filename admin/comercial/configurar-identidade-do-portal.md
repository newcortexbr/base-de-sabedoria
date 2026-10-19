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

atualizar as informações básicas e a aparência do portal no painel.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No menu da esquerda, na parte `Sistema`, clique em `Configurações` e depois em `Configurações Gerais` (`/painel/configuracoes`). [guia=menu:/painel/configuracoes] [t=6]
2. No quadro `Identidade`, escreva o `Nome do portal`. [guia=configuracoes.nome] [t=9]
3. Clique em `Salvar` ao lado do nome. [guia=configuracoes.salvar-nome] [t=12]
4. Para a `Logo do portal`, clique em `Enviar logo` (ou `Trocar logo`) e escolha a imagem. O envio é imediato. [guia=configuracoes.logo] [t=17]
5. No quadro `Redes Sociais`, preencha o `WhatsApp` e, abaixo, o @ ou o link do Instagram, Facebook, YouTube e TikTok. [guia=configuracoes.whatsapp] [t=40]
6. Clique em `Salvar Redes Sociais`. [guia=configuracoes.salvar-redes] [t=48]
7. No quadro `Página Fale Conosco`, preencha o `E-mail de contato`. [guia=configuracoes.email-contato] [t=51]
8. Preencha o `Telefone`. [guia=configuracoes.telefone-contato] [t=51]
9. Clique em `Salvar Fale Conosco`. [guia=configuracoes.salvar-contato] [t=56]
10. Para mudar a aparência do site, no mesmo menu `Configurações`, clique em `Layout` (`/painel/configuracoes/layout`). [guia=menu:/painel/configuracoes/layout]
11. Escolha a parte que quer ajustar: `Topo`, `Tela Início`, `Cores` ou `Rodapé`. [guia=configuracoes-layout.partes]
12. Faça a mudança e clique no botão de salvar da própria página (por exemplo, `Salvar Topo` ou `Salvar cores`). Espere a mensagem de que deu certo antes de sair. [guia=configuracoes-layout.salvar]

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
