---
id: turismo-pontos-dicas
titulo: "adicionar dicas a um ponto turístico"
publico:
  - administrador do portal
modulo: Turismo
categoria: conteúdo
aba: Pontos Turísticos
tipo_problema: cadastro
tags:
  - dica
  - ponto turistico
  - turismo
  - editar
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - QrkL_nJEa-c
---

## objetivo
Adicionar recomendações na página de um ponto turístico já cadastrado. Estas dicas não são as dicas gerais da página inicial do Guia Turístico.

## pré-requisitos/permissões
Acesso de administrador e ponto cadastrado.

## passos

1. No menu lateral, dentro de `Guia Turístico / Eventos`, clique em `Pontos Turísticos`. [t=7] [guia=menu:/painel/turismo/pontos]
2. Clique em `Editar` na linha do ponto. [guia=pontos.editar]
3. Em `Dicas para visitantes`, clique em `+ Nova dica`. [guia=ponto-editar.dica-nova]
4. Preencha `Título *` com a recomendação. [guia=ponto-editar.dica-titulo]
5. Se quiser, preencha `Descrição`. [guia=ponto-editar.dica-descricao]
6. Clique em `Salvar dica`. [guia=ponto-editar.dica-salvar]

## resultado
A dica é enviada diretamente e aparece na lista do ponto. O painel mostra `Dica salva`; não é necessário clicar em `Salvar alterações` para gravar essa dica.

## o que colocar

Recomendações práticas para quem vai ao local, como o melhor horário para ir ou o que levar.

## fontes
- Código b2f62d3f: `frontend/src/app/painel/turismo/pontos/[id]/page.tsx:291` — salvamento imediato; `:586` — nova; `:602` — título; `:607` — descrição; `:611` — salvar.
- `videos/legendas/QrkL_nJEa-c.srt` — menu em 7 segundos e menção a dicas na criação em 62 a 69 segundos; não demonstra a edição.

## lacunas
Sem navegador. Não foi atribuído o tempo da criação ao salvamento separado da edição.
