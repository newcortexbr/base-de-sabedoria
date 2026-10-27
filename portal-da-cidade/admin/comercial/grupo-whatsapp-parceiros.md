---
id: grupo-whatsapp-parceiros
titulo: "guardar o link do grupo de WhatsApp dos parceiros"
publico:
  - admin
modulo: parceiros
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - whatsapp
  - grupo
  - link
  - parceiro
  - convite
  - editar
  - telefone
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - 8gIDPdapN0E
---

## objetivo

Aqui você salva o convite do grupo e escolhe se o botão aparece para os parceiros.

## pré-requisitos

- Ter acesso administrativo ao portal.

## passos

1. No menu da esquerda, na parte `Comercial`, clique em `Parceiros`. [t=8] [guia=menu:/painel/parceiros]
2. Copie o convite do seu grupo no WhatsApp. [t=121] [guia=fora]
3. No quadro `Grupo de WhatsApp dos parceiros`, cole o convite em `Link do grupo`. [t=124] [guia=parceiros.link-grupo]
4. Clique em `Salvar` ao lado do campo. [t=124] [guia=parceiros.salvar-grupo]
5. Clique em `Testar link` para abrir e conferir o convite. [t=127] [guia=parceiros.testar-grupo]
6. Marque `Mostrar o botão para os parceiros` para exibir o convite na área deles. [t=129] [guia=parceiros.mostrar-grupo]

## resultado

Com link válido e visibilidade ligada, o convite fica disponível na área dos parceiros. A mudança da caixa de visibilidade salva automaticamente.

## desvios

Sem link, o botão não aparece. Para esconder sem apagar o convite, desmarque `Mostrar o botão para os parceiros`. Se o endereço for inválido, a tela pede `Cole o link de convite do grupo (começa com https://chat.whatsapp.com/).`

## quando pedir ajuda

Peça ajuda se a tela mostrar erro ou se o resultado não corresponder ao que você salvou. Não envie senhas, chaves ou comprovantes ao assistente.

## fontes

- `portal-cidade/frontend/src/components/painel/parceiros/CartaoGrupoWhatsapp.tsx:25`
- `portal-cidade/frontend/src/components/painel/parceiros/CartaoGrupoWhatsapp.tsx:60`
- `portal-cidade/frontend/src/components/painel/parceiros/CartaoGrupoWhatsapp.tsx:77`

## lacunas

Conferência documental com o código em b2f62d3f e as transcrições/legendas do catálogo. Sem validação no navegador, execução financeira ou teste de integração nesta auditoria. Tempos indicam trechos da legenda; passos sem tempo não foram localizados no vídeo.
