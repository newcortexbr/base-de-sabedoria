---
id: publicacao-e-visibilidade-eventos
titulo: "ver se um evento está no ar"
publico:
  - administrador do portal
modulo: Agenda de Eventos
categoria: conteúdo
aba: Eventos
tipo_problema: visibilidade
tags:
  - evento
  - no ar
  - status
  - publicar
  - despublicar
  - rascunho
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - Hyh3UxHW_jU
---

## objetivo
Consultar a situação na agenda e verificar a página pública do evento.

## pré-requisitos/permissões
Acesso de administrador. Este caminho é do painel, não da área de jornalista ou colunista.

## passos

1. No menu lateral, dentro de `Guia Turístico / Eventos`, clique em `Eventos`. [t=48] [guia=menu:/painel/turismo/eventos]
2. Leia a indicação de situação na linha do evento. [guia=eventos.status-linha]
3. No menu lateral, clique em `Meus Links`. [guia=menu:/painel/meus-links]
4. Na seção `Site público`, clique em `Abrir` na linha `Eventos`. [guia=meus-links.abrir-eventos]
5. Na agenda pública, clique no título do evento que deseja conferir. [guia=eventos-publico.abrir]

## resultado
O atalho de `Meus Links` abre a agenda pública em outra aba. Se o evento estiver indisponível para o visitante, confira a opção `Ativo`, a vigência e a liberação do fluxo de publicação. `No ar` depende de estar ativo, liberado e vigente. Se estiver ativo e o servidor não o considerar no ar, a lista exibe `Encerrado`; esse rótulo também pode esconder uma pendência de liberação.

## desvios
- `Inativo` na lista indica `Ativo` desmarcado; não informa quem desmarcou nem o motivo.
- Sem data de término, vale a data do evento. O evento sai da leitura pública no dia seguinte ao fim, sem tolerância.
- Para mudar datas, veja [editar um evento](eventos-editar.md). Para interpretar a lista, veja [ver a situação dos eventos](eventos-situacao.md).

## fontes
- Código b2f62d3f: `frontend/src/app/painel/turismo/eventos/page.tsx:52` — rótulo; `:909` — status; não há atalho público na linha. `frontend/src/app/painel/meus-links/links.ts:28` e `frontend/src/app/painel/meus-links/page.tsx:102` — agenda pública; `frontend/src/components/turismo/EventoCard.tsx:68` — título do evento.
- `backend/turismo/serializers.py:608` — cálculo de no_ar no painel.
- `backend/turismo/views_public.py:63` — condições de publicação; `:418` — detalhe público.
- `backend/turismo/vigencia.py:17` — sem tolerância.
- `videos/legendas/Hyh3UxHW_jU.srt` — menu em 48 segundos e página pública em 70 segundos.

## lacunas
Sem navegador, não foi comprovada a disponibilidade de nenhum evento real nem sua posição na página inicial.
