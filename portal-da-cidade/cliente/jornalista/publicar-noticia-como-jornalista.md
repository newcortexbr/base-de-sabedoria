---
id: cliente-jornalista-publicar-noticia
titulo: "publicar uma notícia como jornalista"
publico:
  - cliente
modulo: noticias
categoria: noticias
aba: Notícias
tipo_problema:
  - publicar-noticia
status: rascunho-documental
revisado_em: 2026-10-24
validacao: video
videos:
  - by3tA7GUa88
---

## objetivo

preencher o perfil de autor e publicar uma notícia no portal como jornalista.

## pré-requisitos

- ter sido convidado como jornalista: o portal cria o acesso e envia o e-mail e a senha de entrada.
- ter a foto de capa da notícia e, se quiser, fotos para o meio do texto.

## explicação

- na tela de entrada da área do cliente, digite o e-mail e a senha e clique em `Entrar`. Você cai na área do jornalista.
- o menu da esquerda tem três itens: `Notícias`, `Autor` e `Segurança`.
- o perfil de `Autor` é a assinatura que aparece em todas as notícias que você escrever. Vale preenchê-lo antes da primeira matéria.
- o formulário da notícia tem duas colunas: à esquerda o conteúdo; à direita a publicação, a foto de capa e o SEO.

## passos

1. No menu da esquerda, clique em `Autor`. [t=22] [guia=menu:/minha-conta/autor]
2. Envie sua foto em `Foto do autor`. [t=31] [guia=autor.foto]
3. Confira o `Nome`. [t=34] [guia=autor.nome]
4. Confira o `Cargo`. [t=34] [guia=autor.cargo]
5. Escreva uma mini biografia em `Bio`. [t=34] [guia=autor.bio]
6. Se quiser, preencha Site, Instagram, Facebook, LinkedIn, WhatsApp e e-mail público. À direita, `Como aparece na notícia` mostra a assinatura. [t=39] [guia=autor.redes]
7. Clique em `Salvar perfil`. [t=44] [guia=autor.salvar]
8. No menu da esquerda, clique em `Notícias`. [t=46] [guia=menu:/minha-conta/noticias]
9. Clique em `Nova notícia`. [t=49] [guia=noticias-jornalista.nova]
10. Escreva o `Título` (a manchete). [t=61] [guia=noticias-cadastrar.titulo]
11. Escreva o `Subtítulo`. [t=63] [guia=noticias-cadastrar.subtitulo]
12. Se quiser, escreva o `Título curto`, versão menor usada nos cartões da página inicial; em branco, o portal usa o título normal. [t=65] [guia=noticias-cadastrar.titulo-curto]
13. Em `Chamada da matéria`, escreva um resumo de uma ou duas frases. Ela aparece em destaque logo abaixo do título. [t=73] [guia=noticias-cadastrar.chamada]
14. Em `Conteúdo da matéria`, escreva o texto completo. A barra de ferramentas tem itálico, títulos internos, citação, listas, alinhamento, cores, link e vídeo; `Inserir imagem` põe uma foto no ponto do cursor. [t=80] [guia=noticias-cadastrar.conteudo]
15. Em `Tags / Palavras-chave`, digite uma palavra e aperte enter; repita para cada uma. [t=96] [guia=noticias-cadastrar.tags]
16. Em `Fonte da matéria`, informe de onde veio a informação, por exemplo a organização do evento. [t=105] [guia=noticias-cadastrar.fonte]
17. Em `Categorização`, escolha a `Categoria` (como cultura). [t=110] [guia=noticias-cadastrar.categoria]
18. Se quiser, escolha a `Subcategoria`. [t=113] [guia=noticias-cadastrar.subcategoria]
19. Na coluna da direita, em `Foto de capa`, clique ou arraste a imagem principal. Clique na foto para escolher o ponto que deve ficar visível quando ela for recortada nos cartões. [t=118] [guia=noticias-cadastrar.foto-capa]
20. Preencha a `Legenda` da foto. [t=128] [guia=noticias-cadastrar.legenda]
21. Preencha os `Créditos` (o autor da imagem). [t=131] [guia=noticias-cadastrar.creditos]
22. Em `SEO`, escreva o `Título SEO` e a `Descrição SEO` que aparecem no Google, ou deixe em branco para o portal usar o título e a chamada. [t=134] [guia=noticias-cadastrar.seo]
23. Em `Status`, escolha `Publicado` para ir ao ar na hora ou `Rascunho` para continuar depois. [t=143] [guia=noticias-cadastrar.status]
24. Para programar, ligue `Agendar notícia` e escolha a data e a hora. [t=151] [guia=noticias-cadastrar.agendar]
25. Confira tudo e clique em `Adicionar`. [t=153] [guia=noticias-cadastrar.salvar]

## resultado

a notícia aparece em `Minhas notícias`. Os quadros do topo mostram quantas estão publicadas, agendadas e em rascunho. No portal, a notícia mostra categoria, título, subtítulo, chamada, assinatura com foto e redes, foto de capa com legenda, texto, fonte, tags e o quadro sobre o autor.

## desvios

- notícia já criada: o botão passa a se chamar `Salvar`.
- o formulário guarda um rascunho neste navegador enquanto você escreve; se a página fechar, aparece a opção de recuperar.
- para trocar a senha, use `Segurança`.

## quando pedir ajuda

se o convite não chegou ou a notícia não aparece no portal depois de publicada, peça ajuda ao portal.

## fontes

- `portal-cidade/frontend/src/app/minha-conta/perfil-da-area.ts:60-71` — menu do jornalista.
- `portal-cidade/frontend/src/components/painel/noticias/AutorFormBase.tsx:87,258-364,375-378` — perfil de autor.
- `portal-cidade/frontend/src/app/minha-conta/noticias/page.tsx:157,171-186` — `Nova notícia`, `Minhas notícias`, quadros.
- `portal-cidade/frontend/src/components/painel/noticias/NoticiaFormBase.tsx:421-700` — campos, `Status`, `Adicionar`/`Salvar`.

## lacunas

- botões de abrir, editar, despublicar e excluir na lista vêm do vídeo; não conferidos no código.
- o formulário é o mesmo do painel; o que o jornalista não vê (se houver) não foi verificado.
