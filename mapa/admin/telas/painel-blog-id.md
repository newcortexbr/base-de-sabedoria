# /painel/blog/[id] — editar artigo (`src/app/painel/blog/[id]/page.tsx`)
- gate: módulo `blog`. - permissão: só papéis admin/master entram no painel (`src/lib/painel-permissoes.ts`); lojista/cliente/jornalista são recusados no login do painel.
- faz: edita o artigo (mesmos campos de `ArtigoCamposForm`), arquiva (despublica) e exclui.
- ações: salvar (:160), arquivar com confirmação (:230-237 via `atualizar` com status), excluir (:204), voltar à lista (:211).
- APIs: `blog.artigos.detalhe` (:72), `blog.categorias.listar`, `blog.colunistas.listar` (:73-77, com catch e aviso `avisoListas`), `blog.artigos.atualizar`, `blog.artigos.excluir`.
- cache: revalida URL antiga se estava publicado e o slug mudou (:175) e a categoria antiga (:183).
- estados: erro em `error` (:97,187,213,243); carga com spinner.
- problemas: nenhum confirmado. fato — arquivar usa `atualizar` e não rota própria.
- admin vs cliente: cliente edita em `/minha-conta/colunista-blog/[id]`; o admin tem excluir/arquivar além disso e vê qualquer colunista.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-blog-id.png](../prints/painel-blog-id.png) · dados brutos: [json](../prints/json/painel-blog-id.json)
- aberta em `/painel/blog/[id`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1147,16,109,34)
- [menu] "27 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Artigos · Lista de Artigos · Novo Artigo · Colunistas · Categorias …" — menu lateral, no topo da página, à esquerda (lista de 27 itens em coluna) (10,18,255,953)
- [título] "Artigos" — topo, no topo da página, à esquerda (300,19,63,28)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
