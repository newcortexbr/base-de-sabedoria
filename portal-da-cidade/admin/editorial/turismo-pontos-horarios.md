---
id: turismo-pontos-horarios
titulo: "mudar os horários de um ponto turístico"
publico:
  - administrador do portal
modulo: Turismo
categoria: conteúdo
aba: Pontos Turísticos
tipo_problema: cadastro
tags:
  - horario
  - ponto turistico
  - turismo
  - ver
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - QrkL_nJEa-c
---

## objetivo
Atualizar os horários de funcionamento por dia da semana de um ponto existente.

## pré-requisitos/permissões
Acesso de administrador e ponto cadastrado.

## passos

1. No menu lateral, dentro de `Guia Turístico / Eventos`, clique em `Pontos Turísticos`. [t=7] [guia=menu:/painel/turismo/pontos]
2. Clique em `Editar` na linha do ponto. [guia=pontos.editar]
3. Em `Horários de funcionamento`, desmarque `Fechado` nos dias que voltarão a funcionar. [guia=ponto-editar.horarios-fechado]
4. Desmarque `24 horas` nos dias que passarão a ter horário definido. [guia=ponto-editar.horarios-24h]
5. Preencha a hora de abertura de cada dia com horário definido. [guia=ponto-editar.horarios-abertura]
6. Preencha a hora de fechamento dos mesmos dias. [guia=ponto-editar.horarios-fechamento]
7. Nos dias sem expediente, marque `Fechado`. [guia=ponto-editar.horarios-fechado]
8. Nos dias com funcionamento contínuo, marque `24 horas`. [guia=ponto-editar.horarios-24h]
9. Clique em `Salvar horários`. [guia=ponto-editar.salvar-horarios]

## resultado
Os horários são enviados por esse botão e o painel mostra `Horários salvos`. `Fechado` e `24 horas` não ficam marcados ao mesmo tempo. O resumo `Horário (texto livre)` é um campo separado do cadastro geral.

## fontes
- Código b2f62d3f: `frontend/src/app/painel/turismo/pontos/[id]/page.tsx:331` — envio; `:549` — fechado; `:553` — 24h; `:557` — abertura; `:560` — fechamento; `:569` — salvar horários.
- `videos/legendas/QrkL_nJEa-c.srt` — menu em 7 segundos e horários durante a criação em 57 a 62 segundos. O vídeo não demonstra o salvamento separado da edição.

## lacunas
Sem navegador. As marcas de cada horário devem ser aplicadas aos controles repetidos por dia, não ao botão de salvar nem ao formulário inteiro.
