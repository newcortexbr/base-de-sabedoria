---
id: admin-sugestoes-de-funcoes
titulo: "pedir uma função nova (Sugestões de Funções)"
publico:
  - admin
modulo: sugestoes
categoria: admin
aba: nao-se-aplica
tipo_problema:
  - pedir função nova
  - sugerir melhoria
  - falta uma função
  - sugestão
tags:
  - sugestao
  - funcao nova
  - enviar
  - painel
  - descricao
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
---

## objetivo

Envie uma ideia de melhoria à equipe da plataforma.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No rodapé do menu da esquerda, clique em `Sugestões de Funções`. [guia=menu:/painel/sugestoes]
2. Preencha `Título`.  [guia=sugestoes.titulo]
3. Preencha `Descrição`.  [guia=sugestoes.descricao]
4. Se necessário, anexe arquivos na área de anexos.  [guia=sugestoes.anexos]
5. Confira ou ajuste `Nome`.  [guia=sugestoes.nome]
6. Confira ou ajuste `WhatsApp`.  [guia=sugestoes.whatsapp]
7. Clique em `Enviar sugestão`.  [guia=sugestoes.enviar]

## resultado

Aparece `Sugestão enviada. Obrigado!`. O histórico fica em `Suas sugestões enviadas`.

## desvios

O campo E-mail vem da conta e é somente leitura. Enviar uma ideia não define prazo de implementação.

## fontes

- `frontend/src/app/painel/sugestoes/page.tsx:286`
- `frontend/src/app/painel/sugestoes/page.tsx:450`

## lacunas

- Não foi identificado vídeo específico desta tarefa no catálogo; nenhum tempo foi atribuído.
- Conferido por leitura do código no HEAD b2f62d3f. Sem execução do produto ou validação visual nesta auditoria.
