---
id: editorial-turismo-roteiros
titulo: "cadastrar um roteiro turístico"
publico:
  - administrador do portal
modulo: Turismo
categoria: conteúdo
aba: Roteiros
tipo_problema: cadastro
tags:
  - roteiro
  - turismo
  - parada
  - ponto turistico
  - dica
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - CMEOWthwqtI
---

## objetivo
Montar um passeio com paradas, descrição e tempo sugerido em cada uma. Dicas gerais e pontos turísticos têm cadastros separados.

## pré-requisitos/permissões
Acesso de administrador ao módulo de Turismo.

## passos

1. No menu lateral, dentro de `Guia Turístico / Eventos`, clique em `Roteiros`. [t=7] [guia=menu:/painel/turismo/roteiros]
2. Clique em `+ Novo Roteiro`. [t=18] [guia=roteiros.novo]
3. Se quiser uma capa, clique em `Foto de capa` para selecionar o arquivo. [t=18] [guia=roteiros.foto]
4. Preencha `Título *`. [t=21] [guia=roteiros.titulo]
5. Se quiser um selo, preencha `Badge`. [t=23] [guia=roteiros.badge]
6. Se quiser, preencha `Duração`. [t=23] [guia=roteiros.duracao]
7. Se quiser, escreva a `Descrição`. [t=23] [guia=roteiros.descricao]
8. Se quiser, preencha `Ponto de partida`. [t=25] [guia=roteiros.partida]
9. Se houver vídeo, cole o link em `Vídeo do roteiro (YouTube)`. [t=25] [guia=roteiros.video]
10. Se quiser fotos adicionais, clique em `+ Adicionar fotos` na `Galeria de fotos e vídeos`. [guia=galeria.adicionar-fotos]
11. Em `Paradas do roteiro`, clique em `+ Adicionar parada`. [t=31] [guia=roteiros.adicionar-parada]
12. Preencha `Nome da parada *`. [t=31] [guia=roteiros.parada-nome]
13. Se quiser, preencha a `Descrição` da parada. [t=33] [guia=roteiros.parada-descricao]
14. Se quiser, preencha `Tempo sugerido`. [t=33] [guia=roteiros.parada-tempo]
15. Se quiser dar evidência à parada, marque `Destaque` dentro do formulário dela. [t=38] [guia=roteiros.parada-destaque]
16. Clique em `Adicionar` para incluir a parada no roteiro. Repita os passos de inclusão para as outras paradas. [guia=roteiros.parada-confirmar]
17. Se quiser dar evidência ao roteiro inteiro, marque `Destaque` fora do formulário das paradas. [t=40] [guia=roteiros.destaque]
18. Confira a opção `Ativo`. [t=43] [guia=roteiros.ativo]
19. Clique em `Salvar`. [t=43] [guia=roteiros.salvar]

## resultado
O roteiro é salvo com as paradas montadas. Na criação, a galeria é enviada depois que o roteiro existe; em caso de falha parcial, abra sua edição e envie apenas o que faltou. A leitura pública retorna roteiros ativos do portal.

## lista e página pública

- A lista de roteiros mostra selo, duração, número de paradas e se está ativo.
- Roteiros são passeios prontos para o visitante aproveitar a cidade. Dica: crie um roteiro para cada perfil de visitante.
- O roteiro ativo aparece na página de roteiros do portal, com as paradas em ordem e o tempo de cada uma.

## desvios
O vídeo do roteiro é separado dos vídeos da galeria. Para mudar a ordem das paradas, veja [reordenar paradas](turismo-roteiros-reordenar-paradas.md). Para alterar dados existentes, veja [editar um roteiro](turismo-roteiros-editar.md).

## fontes
- Código b2f62d3f: `frontend/src/components/painel/Sidebar.tsx:186`.
- `frontend/src/app/painel/turismo/roteiros/page.tsx:146` — parada; `:195` — galeria após criação; `:255` — novo; `:271` — campos; `:355` — paradas; `:438` — salvar.
- `backend/turismo/views_public.py:267` — leitura pública de ativos.
- `videos/legendas/CMEOWthwqtI.srt` — 7 a 46 segundos.

## lacunas
Sem navegador ou upload real. O vídeo menciona incluir paradas, mas não narra o clique em `Adicionar`; esse passo foi obtido do código, sem tempo inventado.
