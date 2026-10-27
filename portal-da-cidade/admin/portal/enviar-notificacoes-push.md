---
id: enviar-notificacoes-push
titulo: enviar notificações push aos visitantes
publico:
  - admin
modulo: notificações
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - enviar
  - notificacao
  - push
  - criar
  - link
  - painel
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - -ZLL7Cqwcok
---

## objetivo

Envie um aviso aos inscritos do portal.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Sistema` do menu da esquerda, clique em `Notificações Push`. [t=9] [guia=menu:/painel/notificacoes]
2. No quadro `Nova notificação`, preencha `Título` (até 50 caracteres). [t=54] [guia=notificacoes.titulo]
3. Preencha `Mensagem` (até 120 caracteres). [t=57] [guia=notificacoes.mensagem]
4. Preencha `Link` com o endereço completo da página que deve abrir, começando com `https://` ou `http://`. [t=60] [guia=notificacoes.link]
5. Em `Quando`, escolha `Agora`. [t=72] [guia=notificacoes.quando]
6. Clique em `Enviar para…`, com a quantidade de destinatários. [t=82] [guia=notificacoes.enviar]
7. Na confirmação, clique em `Enviar`. [guia=confirmacao.confirmar]

## resultado

A notificação entra na fila de envio e aparece no `Histórico`.

## desvios

- O agendamento exige data e hora posteriores ao momento atual.
- O envio depende da disponibilidade indicada na tela e do processamento do servidor. Não há prazo de entrega garantido.
- Uma notificação já enviada não pode ser desfeita.

## fontes

- `frontend/src/app/painel/notificacoes/page.tsx:182`
- `frontend/src/app/painel/notificacoes/page.tsx:210`
- `frontend/src/components/painel/ModalAvisoConfirmacao.tsx:173`

- Catálogo: `portal-da-cidade/videos.json`; legendas: `videos/legendas/-ZLL7Cqwcok.srt`.

## lacunas

- Conferido por leitura do código no HEAD b2f62d3f. Sem execução do produto ou validação visual nesta auditoria.
