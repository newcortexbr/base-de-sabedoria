---
id: turismo-roteiros-editar
titulo: "editar um roteiro turístico"
publico:
  - administrador do portal
modulo: Turismo
categoria: conteúdo
aba: Roteiros
tipo_problema: cadastro
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - CMEOWthwqtI
---

## objetivo
Mudar os dados de um roteiro e os dados de suas paradas. A galeria salva separadamente durante a edição.

## pré-requisitos/permissões
Acesso de administrador e roteiro já cadastrado.

## passos

1. No menu lateral, dentro de `Guia Turístico / Eventos`, clique em `Roteiros`. [t=7] [guia=menu:/painel/turismo/roteiros]
2. Clique em `Editar` na linha do roteiro. [guia=roteiros.editar]
3. Altere `Título *`, se necessário. [guia=roteiros.titulo]
4. Para trocar a capa, clique em `Foto de capa` para selecionar outro arquivo. [guia=roteiros.foto]
5. Altere `Badge`, se necessário. [guia=roteiros.badge]
6. Altere `Duração`, se necessário. [guia=roteiros.duracao]
7. Altere a `Descrição` do roteiro, se necessário. [guia=roteiros.descricao]
8. Altere `Ponto de partida`, se necessário. [guia=roteiros.partida]
9. Altere `Vídeo do roteiro (YouTube)`, se necessário. [guia=roteiros.video]
10. Clique em `Salvar`. [guia=roteiros.salvar]

### alterar uma parada
Depois de abrir a edição do roteiro:

1. Clique em `Editar` ao lado da parada. [guia=roteiros.parada-editar]
2. Altere `Nome da parada *`, se necessário. [guia=roteiros.parada-nome]
3. Altere a `Descrição` da parada, se necessário. [guia=roteiros.parada-descricao]
4. Altere `Tempo sugerido`, se necessário. [guia=roteiros.parada-tempo]
5. Ajuste `Destaque` dentro do formulário da parada, se necessário. [guia=roteiros.parada-destaque]
6. Clique em `Salvar alterações`. [guia=roteiros.parada-confirmar]
7. Clique em `Salvar` no formulário do roteiro. [guia=roteiros.salvar]

## resultado
`Salvar alterações` atualiza a montagem na tela; o botão `Salvar` do roteiro envia essa montagem ao servidor. Na edição, a galeria envia cada inclusão ou remoção diretamente, sem depender do salvamento do roteiro.

## desvios
Para incluir novas paradas, veja [cadastrar um roteiro](turismo-roteiros-dicas.md). Para mudar a sequência, veja [reordenar paradas](turismo-roteiros-reordenar-paradas.md). O endereço antigo de fotos do roteiro redireciona para a lista.

## fontes
- Código b2f62d3f: `frontend/src/app/painel/turismo/roteiros/page.tsx:125` — edição; `:146` — parada local; `:340` — galeria; `:389` — confirmar parada; `:418` — editar parada; `:438` — salvar.
- `frontend/src/app/painel/turismo/roteiros/[id]/fotos/page.tsx:1` — redirecionamento.
- `videos/legendas/CMEOWthwqtI.srt` — menu em 7 segundos; o restante demonstra cadastro, não edição.

## lacunas
Sem navegador. Os tempos de criação não foram reutilizados como demonstração de edição.
