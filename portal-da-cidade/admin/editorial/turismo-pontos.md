---
id: editorial-turismo-pontos
titulo: "cadastrar um ponto turístico"
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
  - foto
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - QrkL_nJEa-c
---

## objetivo
Cadastrar um ponto turístico com nome, localização, foto e horários. Há vídeo específico de cadastro: é o vídeo associado a este artigo.

## pré-requisitos/permissões
Acesso de administrador ao módulo de Turismo.

## passos

1. No menu lateral, dentro de `Guia Turístico / Eventos`, clique em `Pontos Turísticos`. [t=7] [guia=menu:/painel/turismo/pontos]
2. Na lista de pontos, clique em `+ Novo Ponto`. [t=15] [guia=pontos.novo]
3. Em `Foto principal`, clique em `Escolher foto` para selecionar a capa. [t=18] [guia=pontos-novo.foto]
4. Em `Dados básicos`, preencha `Nome *`. [t=25] [guia=pontos-novo.nome]
5. Se quiser, escolha a `Categoria`. [t=28] [guia=pontos-novo.categoria]
6. Preencha `Descrição`, se houver. [t=30] [guia=pontos-novo.descricao]
7. Se quiser etiquetas, digite uma palavra em `Tags`. [t=35] [guia=pontos-novo.tags]
8. Pressione Enter para adicionar a palavra digitada. [t=38] [guia=pontos-novo.tags]
9. Se quiser dar evidência ao ponto, marque `Destaque`. [t=40] [guia=pontos-novo.destaque]
10. Confira se `Ativo` está marcado para permitir a publicação. [t=45] [guia=pontos-novo.ativo]
11. Ajuste `Entrada gratuita` conforme o local. [t=47] [guia=pontos-novo.entrada_gratuita]
12. Se desmarcou a gratuidade, preencha `Preço da entrada`. [guia=pontos-novo.preco]
13. Se quiser um resumo dos horários, preencha `Horário (texto livre)`. [guia=pontos-novo.horario-texto]
14. Em `Informações`, informe o `CEP`, se souber. [t=50] [guia=campo-cep.cep]
15. Confira ou escolha a `Cidade`. [guia=local:cidade]
16. Confira ou escolha o `Bairro`, se houver. [guia=local.bairro]
17. Complete `📍 Endereço completo` com o endereço do ponto. [guia=pontos-novo.endereco]
18. Em `Horários de funcionamento`, preencha a hora de abertura de cada dia de expediente. [t=57] [guia=pontos-novo.horarios]
19. Preencha a hora de fechamento dos mesmos dias. [t=57] [guia=pontos-novo.horarios]
20. Nos dias sem funcionamento, marque `Fechado`. [t=59] [guia=pontos-novo.horarios]
21. Nos dias de funcionamento contínuo, marque `24 horas`. [t=59] [guia=pontos-novo.horarios]
22. Se quiser outras fotos, clique em `+ Adicionar fotos`, na `Galeria de fotos e vídeos`. [t=69] [guia=galeria.adicionar-fotos]
23. Se quiser, preencha `Título SEO`, o título para buscadores. [guia=pontos-novo.seo-titulo]
24. Se quiser, preencha `Descrição SEO`, o resumo para buscadores. [guia=pontos-novo.seo-descricao]
25. Clique em `Cadastrar ponto`. [t=80] [guia=pontos-novo.cadastrar]

## resultado
O ponto é criado antes do envio da galeria, dicas e horários. Se esses complementos falharem, o sistema informa a falha e abre a edição do ponto já criado; não repita o cadastro. A leitura pública exige que o ponto esteja ativo.

## desvios
- A foto principal fica separada da galeria. A tela recomenda JPG, PNG ou WebP em 1200×800px.
- O CEP pode ajudar a preencher a localização; confira os dados. Não é garantia de encontrar todo endereço ou posicionar todo local corretamente.
- Para recomendações específicas, veja [adicionar dicas a um ponto turístico](turismo-pontos-dicas.md). Na criação, elas também podem ser incluídas no bloco `Dicas para visitantes` antes do cadastro.
- Para vídeo na galeria, veja [colocar um vídeo do YouTube na galeria](video-na-galeria.md).
- As dicas gerais da página inicial têm [outro cadastro](turismo-dicas.md).

## fontes
- Código b2f62d3f: `frontend/src/components/painel/Sidebar.tsx:181` — grupo; `:183` — pontos; `:184` — Novo Ponto.
- `frontend/src/app/painel/turismo/pontos/page.tsx:74` — botão.
- `frontend/src/app/painel/turismo/pontos/novo/page.tsx:209` — criação e complementos; `:290` — capa; `:304` — dados; `:350` — localização; `:386` — horários; `:522` — cadastrar.
- `backend/turismo/views_public.py:225` — ponto ativo do portal.
- `videos/legendas/QrkL_nJEa-c.srt` — cadastro, 7 a 85 segundos.

## lacunas
Sem navegador ou upload real. A existência da tentativa de preenchimento do endereço não prova disponibilidade do serviço externo nem a qualidade do mapa. As marcas propostas ainda não existem.
