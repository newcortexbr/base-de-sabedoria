---
id: turismo-pontos-editar
titulo: "editar os dados de um ponto turístico"
publico:
  - administrador do portal
modulo: Turismo
categoria: conteúdo
aba: Pontos Turísticos
tipo_problema: cadastro
tags:
  - ponto turistico
  - turismo
  - endereco
  - descricao
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - QrkL_nJEa-c
---

## objetivo
Mudar nome, categoria e descrição de um ponto existente. As fotos, dicas e horários têm orientações próprias.

## pré-requisitos/permissões
Acesso de administrador e ponto cadastrado.

## passos

1. No menu lateral, dentro de `Guia Turístico / Eventos`, clique em `Pontos Turísticos`. [t=7] [guia=menu:/painel/turismo/pontos]
2. Digite o nome em `Buscar ponto turístico...`. [guia=pontos.campo-busca]
3. Clique em `Buscar`. [guia=pontos.buscar]
4. Clique em `Editar` na linha do ponto. [guia=pontos.editar]
5. Altere `Nome *`, se necessário. [guia=ponto-editar.nome]
6. Escolha outra `Categoria`, se necessário. [guia=ponto-editar.categoria]
7. Altere `Descrição`, se necessário. [guia=ponto-editar.descricao]
8. Clique em `Salvar alterações`. [guia=ponto-editar.salvar]

### mudar somente a localização
Depois de abrir a edição do ponto:

1. Confira ou escolha a `Cidade`. [guia=local:cidade]
2. Confira ou escolha o `Bairro`. [guia=local.bairro]
3. Altere `📍 Endereço completo`. [guia=ponto-editar.endereco]
4. Clique em `Salvar informações`. [guia=ponto-editar.salvar-informacoes]

## resultado
O salvamento geral mostra `Ponto turístico salvo` e volta à lista. `Salvar informações` envia somente cidade, bairro e endereço e mostra `Informações salvas`, sem exigir o salvamento geral.

## veja também
- [trocar fotos](turismo-pontos-trocar-fotos.md).
- [mudar horários](turismo-pontos-horarios.md).
- [adicionar dicas](turismo-pontos-dicas.md).

## fontes
- Código b2f62d3f: `frontend/src/app/painel/turismo/pontos/[id]/page.tsx:345` — localização; `:361` — envio geral; `:447` — nome; `:451` — categoria; `:464` — descrição; `:527` — salvar informações; `:746` — salvar.
- `videos/legendas/QrkL_nJEa-c.srt` — menu em 7 segundos; o vídeo não demonstra edição.

## lacunas
Sem navegador ou consulta externa de endereço.
