---
id: configurar-redes-sociais-do-portal
titulo: "configurar as redes sociais do portal"
publico:
  - admin
modulo: configurações
categoria: admin
aba: nao-se-aplica
tipo_problema: configuracao
tags:
  - rede social
  - whatsapp
  - editar
  - portal
  - link
  - contato
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - 8M4kdEfP7Eg
  - XekThBh1ygU
---

## objetivo

aqui você altera o WhatsApp e os perfis sociais exibidos pelo portal.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Sistema` do menu da esquerda, clique em `Configurações`. Só é preciso se as opções estiverem fechadas. [t=6] [guia=configuracoes.abrir-menu]
2. Clique em `Configurações Gerais`. [t=9] [guia=menu:/painel/configuracoes]
3. Em `Redes Sociais`, preencha `WhatsApp` com DDD e número. [t=43] [guia=configuracoes.whatsapp]
4. Preencha `Instagram` com o @usuário ou link do perfil. [t=45] [guia=configuracoes.instagram]
5. Preencha `Facebook` com o @usuário ou link do perfil. [t=45] [guia=configuracoes.facebook]
6. Preencha `YouTube` com o @usuário ou link do perfil. [t=45] [guia=configuracoes.youtube]
7. Preencha `TikTok` com o @usuário ou link do perfil. [t=45] [guia=configuracoes.tiktok]
8. Clique em `Salvar Redes Sociais`. [t=48] [guia=configuracoes.salvar-redes]

## resultado

aparece `Salvo com sucesso`. O site recebe os contatos preenchidos; campos em branco não são exibidos.

## desvios

WhatsApp inválido impede salvar e o motivo aparece no quadro. Os campos podem ficar vazios quando você não quiser exibir aquele contato.

## fontes

- `portal-cidade/frontend/src/app/painel/configuracoes/page.tsx:164` — validação e envio.
- `portal-cidade/frontend/src/app/painel/configuracoes/page.tsx:626` — campos e botão.

## lacunas

Sem validação no navegador ou medição do tempo de atualização pública.
