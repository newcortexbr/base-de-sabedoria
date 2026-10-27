---
id: cliente-guia-servicos-da-empresa
titulo: "criar a página de serviços da empresa: seções, preço fixo ou em texto, duração, detalhe e ícone"
publico:
  - cliente
modulo: guia-comercial
categoria: guia-comercial
aba: Guia Comercial
tipo_problema:
  - servicos
tags:
  - criar
  - servico
  - preco
  - whatsapp
  - agendar
  - guia
  - empresa
status: rascunho-documental
revisado_em: 2026-10-27
validacao: codigo-e-video
videos:
  - FwKU_0GF6iU
---

## objetivo

mostrar o que a empresa faz, quanto custa e quanto tempo leva; o cliente agenda pelo WhatsApp.

## pré-requisitos

- empresa no Guia Comercial. Vale para qualquer categoria.

## passos

1. No menu da esquerda, clique em `Guia Comercial`. [guia=menu:/minha-conta/guia]
2. Role até `Páginas da sua empresa` e, no cartão `Serviços`, clique em `Começar` (ou `Gerenciar`, se já tiver itens). [guia=fora]
3. Clique em `Nova seção`, dê um nome (ex.: Instalações, Manutenção) e salve. [guia=fora]
4. Clique em `Novo serviço`, preencha e clique em `Salvar`. [guia=fora]

## campos do serviço

- `Nome do serviço` (obrigatório) e `Descrição` do que está incluído.
- `Preço`: valor fixo. Se o preço varia, use `Preço em texto` (ex.: a partir de R$ 150, sob orçamento).
- `Duração`: quanto tempo leva (ex.: 30 a 90 dias).
- `Detalhe`: informação extra curta (ex.: teste de segurança incluso).
- `Ícone`: clique no quadrado e busque pelo nome (raio, tomada, lâmpada); aparece ao lado do serviço.
- serviço não tem foto.

## seções e itens

- seção: `Nova seção` → nome (ex.: Consultas, Procedimentos, Pacotes) → `Salvar`; a nova seção entra no fim da lista. Cada seção tem a chave para publicar ou tirar do ar e os botões `Novo serviço`, `Renomear` e excluir.
- só o que está com `Publicado no site` ligado aparece no perfil. A chave ao lado de cada serviço tira do ar sem apagar (fotos e dados ficam salvos); há também editar e excluir.

## resultado

no portal, a página de serviços mostra cada seção com ícone, preço, duração e detalhe; cada serviço tem o botão `Agendar`, que abre conversa no WhatsApp. No celular, a ficha ganha a aba de serviços. Recomendado: manter serviços e preços atualizados.

## fontes

- `portal-cidade/frontend/src/app/minha-conta/guia/ConteudoDoLayout.tsx:95,221-238`
