---
id: admin-eventos-organizadores
titulo: "cadastrar um organizador de eventos"
publico:
  - admin
modulo: eventos
categoria: admin
aba: nao-se-aplica
tipo_problema:
  - organizador de evento
  - quem organiza o evento
  - cadastrar organizador
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
aqui você cadastra quem organiza eventos (pessoa ou empresa), para ligar aos eventos da agenda.

## pré-requisitos

- Ter acesso de administrador ao painel.

## passos

1. No menu da esquerda, clique em `Guia Turístico / Eventos` e depois em `Eventos`. [guia=menu:/painel/turismo/eventos]
2. No topo da página, clique na aba `Organizadores`. [guia=fora]
3. Clique em `+ Novo Organizador`. [guia=fora]
4. Escreva o `Nome *` e, se quiser, a descrição e o logo. [guia=fora]
5. Clique em `Criar Organizador`. [guia=fora]

## resultado
o organizador entra na lista e pode ser escolhido no cadastro do evento.

## desvios

- Excluir um organizador tira o vínculo dele com os eventos.

## quando pedir ajuda

peça ajuda se aparecer "Corrija os campos do acesso do proprietário antes de salvar." e você não souber o que corrigir.

## fontes

- `portal-cidade/frontend/src/components/painel/AbasEventos.tsx:12`.
- `portal-cidade/frontend/src/app/painel/turismo/eventos/organizadores/cadastrar/page.tsx` — campos e "Criar Organizador".

## lacunas

tela não validada no navegador nesta tarefa.
