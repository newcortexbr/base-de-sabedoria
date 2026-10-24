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
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - XekThBh1ygU
  - He7XF-kolwk
  - _YSN9di_ZOU
  - lrTaEV5JnVM
  - vPnHq9kRWW8
---

## objetivo

aqui você encontra as quatro partes da aparência do portal.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Sistema` do menu da esquerda, clique em `Configurações` para abrir as opções, se estiverem fechadas. [t=14] [guia=configuracoes.abrir-menu]
2. Clique em `Layout`. [t=16] [guia=menu:/painel/configuracoes/layout]

## resultado

abre `Layout` com os cartões `Topo`, `Tela Início`, `Cores` e `Rodapé`.

## qual artigo usar

- `Topo`: “mudar o topo (cabeçalho) e a ordem do menu do portal”.
- `Tela Início`: “montar a tela inicial do portal (blocos da home)”.
- `Cores`: “mudar as cores do portal”.
- `Rodapé`: “mudar o rodapé do portal”.

Topo, cores e rodapé têm prévia e só publicam as escolhas ao salvar. Na tela inicial, reordenar e ocultar blocos são salvos na própria ação; adicionar e editar usam o botão da janela.

## fontes

- `portal-cidade/frontend/src/components/painel/Sidebar.tsx:277` — submenu.
- `portal-cidade/frontend/src/app/painel/configuracoes/layout/page.tsx:31` — quatro cartões.
- `portal-cidade/frontend/src/app/painel/configuracoes/layout/inicio/page.tsx:1432` — salvamento das ações da tela inicial.

## lacunas

Sem validação no navegador. O tempo para refletir mudanças no site público não foi medido.
