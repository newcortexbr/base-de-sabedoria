---
id: eventos-programacao
titulo: "montar a programação de um evento"
publico:
  - administrador do portal
modulo: Agenda de Eventos
categoria: conteúdo
aba: Eventos
tipo_problema: cadastro
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - Hyh3UxHW_jU
---

## objetivo
Adicionar as atividades e os horários que aparecem na programação de um evento.

## pré-requisitos/permissões
Acesso de administrador e evento cadastrado.

## passos

1. No menu lateral, dentro de `Guia Turístico / Eventos`, clique em `Eventos`. [t=48] [guia=menu:/painel/turismo/eventos]
2. Clique em `Editar` na linha do evento. [guia=eventos.editar]
3. Em `Programação`, clique em `+ Adicionar item`. [guia=eventos.programacao-adicionar]
4. Se quiser identificar o dia, preencha `Dia (opcional)`. [guia=eventos.programacao-dia]
5. Preencha `Horário *`. [guia=eventos.programacao-horario]
6. Preencha `Título *`. [guia=eventos.programacao-titulo]
7. Se quiser, preencha `Subtítulo (opcional)`. [guia=eventos.programacao-subtitulo]
8. Se quiser evidenciar a atividade, marque `Destaque (negrito na programação)`. [guia=eventos.programacao-destaque]
9. Clique em `Salvar item`. Repita a inclusão para as outras atividades. [guia=eventos.programacao-salvar]
10. Clique em `Salvar` no formulário do evento. [guia=eventos.salvar]

## resultado
`Salvar item` inclui a atividade na montagem da tela. O botão `Salvar` do evento envia a programação ao servidor.

## fontes
- Código b2f62d3f: `frontend/src/app/painel/turismo/eventos/page.tsx:256` — item local; `:684` — adicionar; `:697` — campos; `:727` — salvar item; `:803` — salvar evento.
- `videos/legendas/Hyh3UxHW_jU.srt` — menu em 48 segundos; a programação é citada, mas seus cliques não são demonstrados pela legenda.

## lacunas
Sem navegador. Os cliques da programação não receberam tempos aproximados do vídeo.
