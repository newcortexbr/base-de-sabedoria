---
id: ac-sair-da-conta
titulo: "sair da Área do Cliente"
publico:
  - cliente
modulo: acesso
aba: nao-se-aplica
tipo_problema:
  - sair
  - deslogar
  - logout
  - computador compartilhado
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo

encerrar a sua entrada na Área do Cliente neste aparelho, por exemplo num computador compartilhado.

## pré-requisitos

- Estar logado.

## passos

1. No celular, toque no botão de menu (três linhas, `Abrir menu`) no topo para abrir o menu da esquerda. No computador o menu já aparece. [guia=menu:abrir]
2. No rodapé do menu, embaixo do seu nome, clique em `Sair`. Enquanto encerra, aparece `Saindo…`. [guia=menu.sair]

## resultado

você volta para a tela de login (`/login`).

## desvios

- `Sair` desconecta só este aparelho. Para desconectar todos, troque a senha (veja `ac-trocar-senha-logado`).

## quando pedir ajuda

peça ajuda se, depois de clicar em `Sair`, a área continuar aberta ao atualizar a página.

## fontes

- `src/ui/shells/ClientShell.tsx:274` — botão de sair no rodapé do menu, voltando para `/login`; `:284` — botão `Abrir menu`.
- `src/ui/shells/SignOutButton.tsx:52` — textos `Sair` / `Saindo…`.

## lacunas

tela não validada no navegador.
