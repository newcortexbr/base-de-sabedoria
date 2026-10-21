# /minha-conta/noticias

Arquivo: `src/app/minha-conta/noticias/page.tsx`

## quem acessa
- jornalista (área do jornalista; página inicial dele — `perfil-da-area.ts:60-69`). Entra por `/minha-conta/login`.
- empresa, colunista e pessoa física: a rota não está na lista dos perfis reduzidos (colunista, pessoa física) e fica fora do perfil; empresa "alcança tudo" na guarda de navegação (`rotaPermitida`, `perfil-da-area.ts:113-116`), mas o menu dela não leva para cá (leva a `materia-patrocinada`). Autorização real é do servidor.
- login exigido (`layout.tsx`).

## gate de módulo/plano
- nenhum gate de plano: o jornalista não tem plano (`etiquetaDoModuloDoPerfil`, `perfil-da-area.ts:139`).
- o gate é o papel: a API é a do painel (`/painel/{portal}/noticias/`), "o servidor já limita o jornalista às suas próprias" notícias (`noticias-jornalista-api.ts:2`). Não verifiquei o que o servidor responde para outros papéis.
- `secoes-do-cliente.ts:43-45`: `/minha-conta/noticias` é a área do JORNALISTA; a pasta da venda tem outro nome (`materia-patrocinada`).

## o que faz
- lista as notícias escritas pelo jornalista, com situação, busca e ações.

## ações e campos
- botão "Nova notícia".
- cartões: Publicadas, Agendadas, Rascunhos.
- filtros: Todas, Publicadas, Agendadas, Rascunhos, Arquivadas (com contagem); busca pelo título (sem acento); paginação de 20 em 20.
- por item: "Ver no site" (só publicada, nova aba), Editar, Publicar/Despublicar (alternar), Excluir (com `confirm()` do navegador: `page.tsx:123`).
- "Agendada" é derivada: publicada com data futura (`situacao.ts:13-18`).

## APIs
- `GET /painel/{portal}/noticias/?page=N` (todas as páginas, até 500) — `noticias-jornalista-api.ts:78`.
- `POST /painel/{portal}/noticias/{id}/toggle_status/` — `:88`.
- `DELETE /painel/{portal}/noticias/{id}/` — `:85`.
- `revalidarNoticias` (Server Action de `@/app/painel/noticias/actions`), best-effort.

## estados de erro/vazio
- carregando "Carregando…".
- erro de carga: `formatApiError(err, 'carregar as suas notícias')` (`:75`).
- vazio total: "Escreva sua primeira notícia" + "Antes, vale preencher o seu perfil em Autor — é a assinatura que aparece na matéria." + botões (`:206-214`).
- filtro vazio: "Nenhuma notícia encontrada com este título." / "Nenhuma notícia nesta situação."
- ação com erro: faixa de erro; excluir com 404: "Esta notícia já tinha sido excluída." (`:132`).
- truncado a 500: "Mostrando as 500 notícias mais recentes de N…" (`:278`).

## possíveis problemas para leigo
- fato: "Publicar/Despublicar" é um ícone de play/pause sem texto (só `title` e `aria-label`, `:250-254`). Hipótese: leigo não entende; "Excluir" é permanente.
- fato: botão "Nova notícia" some enquanto carrega e quando há erro de carga (`:155`); sem erro a tela não oferece "tentar de novo". Hipótese: precisa recarregar a página.
- fato: excluir usa `confirm()` do navegador, diferente do resto da área.
- fato: "Arquivada" e "Rascunho" têm o mesmo tom visual ("parado") — `situacao.ts:40-41`. Hipótese: confusão.
- fato: notícia agendada aparece como "Agendada", mas o botão ao lado mostra o ícone de pausa (status 'publicado'), que o leigo lê como "pausar", e o servidor diz "Despublicar". Hipótese.
- fato: o aviso do vazio manda preencher "Autor" antes, mas não impede criar sem autor.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [minha-conta-noticias.png](../prints/minha-conta-noticias.png) · versão celular: [minha-conta-noticias-390.png](../prints/minha-conta-noticias-390.png) · dados brutos: [json](../prints/json/minha-conta-noticias.json)
- aberta em `/minha-conta/noticias`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "Notícias" — conteúdo, no topo da página, ao centro (382,46,243,39)
- [menu/links] "9 itens: Início · Guia Comercial · Vagas de Emprego · Banners Publicitários · Classificados · Minha empresa · Planos e assinaturas · Segurança · Sair" — menu, na parte de cima, à esquerda (lista de 9 itens em coluna) (14,96,227,786)
- [aviso] "Não foi possível carregar as suas notícias: Acesso restrito a administ" — conteúdo, faixa larga na parte de cima (288,144,960,59)

## o que você vê
Lista das notícias que você, jornalista, escreveu.
- Publicadas / Agendadas / Rascunhos: quantas notícias em cada situação. Agendada é publicada com data futura.
- Filtros: Todas, Publicadas, Agendadas, Rascunhos, Arquivadas (fora do site, mas guardadas).
- Busca: procura pelo título. A lista mostra 20 por página.
- Nova notícia: abre o formulário.
- Ver no site: só para notícia publicada.
- Editar, Publicar/Despublicar (põe ou tira do site) e Excluir (pede confirmação).
- Sem nenhuma notícia: sugere preencher antes o seu perfil em Autor, que é a assinatura da matéria.
