---
id: agendar-notificacao-push
titulo: "agendar uma notificação push para outro dia"
publico:
  - admin
modulo: notificações
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - agendar
  - notificacao
  - push
  - enviar
  - horario
  - datas
  - painel
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - -ZLL7Cqwcok
---

## objetivo

Agende um aviso para os inscritos do portal.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Sistema` do menu da esquerda, clique em `Notificações Push`. [t=9] [guia=menu:/painel/notificacoes]
2. No quadro `Nova notificação`, preencha `Título` (até 50 caracteres). [t=54] [guia=notificacoes.titulo]
3. Preencha `Mensagem` (até 120 caracteres). [t=57] [guia=notificacoes.mensagem]
4. Preencha `Link` com o endereço completo da página que deve abrir, começando com `https://` ou `http://`. [t=60] [guia=notificacoes.link]
5. Em `Quando`, escolha `Agendar`. [t=75] [guia=notificacoes.quando]
6. Preencha `Data` com um dia futuro. [t=75] [guia=notificacoes.data]
7. Preencha `Hora` com um horário futuro. [t=77] [guia=notificacoes.hora]
8. Clique em `Agendar para…`, com a quantidade de destinatários. [t=82] [guia=notificacoes.enviar]
9. Na confirmação, clique em `Agendar`. [guia=confirmacao.confirmar]

## resultado

A notificação fica agendada no `Histórico`.

## desvios

- O agendamento exige data e hora posteriores ao momento atual.
- O envio não tem horário exato de chegada. Enquanto sai, a linha no `Histórico` mostra `Enviando…` e a tela se atualiza sozinha a cada 10 segundos. Depois mostra `Enviada` (com data e hora), `Falhou` ou `Cancelada`.
- **O que fazer para conferir se chegou:** no `Histórico`, veja as colunas `Entregues` (quantos aparelhos receberam) e `Abriram` (quantos tocaram). [guia=notificacoes.historico] Os números só aparecem quando a linha está `Enviada`.
- Só recebe quem aceitou receber notificações do portal: o total está em `inscritos`, no alto da tela. [guia=notificacoes.resumo] Com zero inscritos, ninguém recebe. Para ganhar inscritos, deixe ligado `Convidar visitantes a receber notificações`.
- Se a linha mostrar `Falhou`, a notificação não saiu: envie de novo e, se repetir, fale com a equipe que entregou o portal.
- Uma notificação já enviada não pode ser desfeita.

## fontes
- `frontend/src/app/painel/notificacoes/page.tsx:15-23` (situações), `:130-136` (atualiza a cada 10 s), `:280-309` (inscritos, convite), `:357-390` (Histórico, Entregues, Abriram)

- `frontend/src/app/painel/notificacoes/page.tsx:182`
- `frontend/src/app/painel/notificacoes/page.tsx:210`
- `frontend/src/components/painel/ModalAvisoConfirmacao.tsx:173`

- Catálogo: `portal-da-cidade/videos.json`; legendas: `videos/legendas/-ZLL7Cqwcok.srt`.

## lacunas

- Conferido por leitura do código no HEAD b2f62d3f. Sem execução do produto ou validação visual nesta auditoria.
