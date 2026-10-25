---
id: eventos-editar
titulo: "editar um evento"
publico:
  - administrador do portal
modulo: Agenda de Eventos
categoria: conteúdo
aba: Eventos
tipo_problema: publicação
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - Hyh3UxHW_jU
---

## objetivo
Alterar o título, as datas, o local ou a descrição de um evento existente.

## pré-requisitos/permissões
Acesso de administrador ao módulo de eventos.

## passos

1. No menu lateral, dentro de `Guia Turístico / Eventos`, clique em `Eventos`. [t=48] [guia=menu:/painel/turismo/eventos]
2. Clique em `Editar` na linha do evento. [guia=eventos.editar]
3. Altere `Título *`, se necessário. [guia=eventos.titulo]
4. Altere `Data *`, se necessário. [guia=eventos.data]
5. Altere `Data de término (opcional)`, se necessário. [guia=eventos.data-fim]
6. Altere `Horário`, se necessário. [guia=eventos.horario]
7. Altere `Local`, se necessário. [guia=eventos.local]
8. Altere `Descrição`, se necessário. [guia=eventos.descricao]
9. Clique em `Salvar`. [guia=eventos.salvar]

## resultado
As alterações são enviadas ao servidor e o formulário fecha após o salvamento.

## desvios
Os demais campos estão descritos em [cadastrar um evento](eventos.md). Na edição, a galeria salva cada inclusão ou remoção diretamente, separada do botão `Salvar` do evento. A página antiga de fotos só redireciona para a lista; use a galeria dentro de `Editar Evento`.

## fontes
- Código b2f62d3f: `frontend/src/app/painel/turismo/eventos/page.tsx:163` — carregar edição; `:598` — galeria; `:803` — salvar; `:921` — editar.
- `frontend/src/app/painel/turismo/GaleriaDoRegistro.tsx` — operações diretas da galeria.
- `videos/legendas/Hyh3UxHW_jU.srt` — menu administrativo em 48 segundos; o vídeo descreve criação, não edição.

## lacunas
Sem execução no navegador. Não foram atribuídos tempos de criação aos passos de edição.
