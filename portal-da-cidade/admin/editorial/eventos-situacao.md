---
id: eventos-situacao
titulo: "ver a situação dos eventos"
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
Consultar a indicação de situação na lista de eventos. A disponibilidade pública pode ser conferida pelo caminho indicado ao final.

## pré-requisitos/permissões
Acesso de administrador ao módulo de eventos.

## passos

1. No menu lateral, dentro de `Guia Turístico / Eventos`, clique em `Eventos`. [t=48] [guia=menu:/painel/turismo/eventos]
2. Leia a indicação de situação na linha do evento. [guia=eventos.status-linha]
3. Para conferir as datas e a opção de publicação, clique em `Editar` na linha do evento. [guia=eventos.editar]
4. Confira `Data *`. [guia=eventos.data]
5. Confira `Data de término (opcional)`. [guia=eventos.data-fim]
6. Confira a opção `Ativo`. [guia=eventos.ativo]

## resultado
A lista mostra `Inativo` quando `Ativo` está desmarcado. Com `Ativo` marcado, mostra `No ar` se o servidor indicar que o evento está liberado e vigente. Caso contrário, a lista mostra `Encerrado`, inclusive quando a pendência não é de data. O último dia é a data de término, ou a data do evento se não houver término; não há um dia extra de tolerância.

## desvios
A leitura pública também exige que o evento esteja liberado no fluxo de publicação. Um evento de cliente ainda aguardando pagamento ou aprovação não se torna público apenas por ter `Ativo` marcado; na lista, ele pode aparecer como `Encerrado`. Veja [ver se um evento está no ar](publicacao-e-visibilidade-eventos.md).

## fontes
- Código b2f62d3f: `frontend/src/app/painel/turismo/eventos/page.tsx:52` — cálculo do rótulo; `:909` — situação; `:921` — editar.
- `backend/turismo/vigencia.py:17` e `:46` — ausência de tolerância e data de referência.
- `backend/turismo/views_public.py:63` — ativo e situação de publicação exigidos.
- `videos/legendas/Hyh3UxHW_jU.srt` — menu em 48 segundos; os estados iniciais do vídeo são da área do cliente.

## lacunas
Sem consulta ao banco ou navegador. O rótulo `Encerrado` não distingue data vencida de uma pendência de liberação. O cálculo no servidor foi conferido em `backend/turismo/serializers.py:608`.
