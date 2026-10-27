---
id: cliente-colunista-atualizar-perfil
titulo: "atualizar meu perfil de colunista (foto, cargo, descrição e redes)"
publico:
  - cliente
modulo: artigos
categoria: artigos
aba: Meus dados
tipo_problema:
  - trocar minha foto de colunista
  - mudar meu cargo
  - mudar minha descrição
  - onde edito meu perfil de colunista
tags:
  - editar
  - colunista
  - perfil
  - foto
  - cargo
  - descricao
  - rede social
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - 8VRaUwhuhO0
---

## objetivo

trocar a foto, o nome, o cargo, a descrição e os contatos que aparecem ao lado de todos os seus artigos.

## pré-requisitos

- ser colunista (ter ou já ter tido o plano de Artigos).

## passos

1. No menu da esquerda, clique em `Meus dados`. [guia=menu:/minha-conta/meus-dados]
2. Para trocar a foto, use o campo `Foto`. [t=29] [guia=colunista-perfil.foto]
3. Corrija o `Seu nome`. [t=32] [guia=colunista-perfil.nome]
4. Corrija o `Cargo ou especialidade`. [t=32] [guia=colunista-perfil.cargo]
5. Corrija a `Descrição breve`. [t=34] [guia=colunista-perfil.bio]
6. Se quiser, preencha `Site`, `Instagram`, `Facebook`, `LinkedIn`, `WhatsApp` e `E-mail público`. [t=36] [guia=colunista-perfil.redes]
7. Clique em `Salvar perfil`. [t=39] [guia=colunista-perfil.salvar]

## resultado

o perfil novo aparece ao lado dos seus artigos no portal.

## desvios

- conta de empresa que também escreve artigos: o menu não tem `Meus dados`; na tela `Artigos` há o aviso "Seu perfil de colunista… fica em Meus dados" com o link.
- Instagram aceita o usuário ou o link do perfil.

## fontes

- `portal-cidade/frontend/src/app/minha-conta/meus-dados/page.tsx:20-50` — perfil de colunista em `Meus dados`.
- `portal-cidade/frontend/src/app/minha-conta/colunista-blog/ColunistaPerfil.tsx:162-285` — campos e `Salvar perfil`.
- `portal-cidade/frontend/src/app/minha-conta/colunista-blog/page.tsx:235-243` — aviso para empresa.
- `portal-cidade/frontend/src/app/minha-conta/perfil-da-area.ts:37-47` — `Meus dados` no menu do colunista.

## lacunas

- mensagem de sucesso ao salvar não verificada.
- sem plano e sem histórico de plano, o perfil pode não aparecer (`PerfilDoColunista.tsx:30`).
