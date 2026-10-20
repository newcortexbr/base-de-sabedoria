# /painel/utilidade/denuncias (A Voz do Povo — Denúncias)

Arquivo: `app/painel/utilidade/denuncias/page.tsx`

## o que você vê
Caixa de entrada dos relatos enviados por moradores (A Voz do Povo); aqui só se muda a situação de cada relato.
- filtro de status: Em aberto (Recebida e Em análise), Recebida, Em análise, Resolvida, Arquivada ou Todos.
- Recebida: chegou e ninguém olhou. Em análise: alguém está cuidando. Resolvida: problema resolvido. Arquivada: guardada sem ação.
- botões da linha Em análise, Resolvida e Arquivar mudam a situação na hora.
- Desfazer: volta a última mudança.
- Ver detalhes: abre o relato completo, com fotos, áudio e contato.
- não confundir com as denúncias de conteúdo (empresas, vagas, anúncios), que ficam em Aprovações e Denúncias.

## rota e gate
- `/painel/utilidade/denuncias`. client. gate `PainelGuard` + módulo `utilidade`.
- diferente de `/painel/denuncias` (denúncia de conteúdo: empresa/vaga/classificado/evento, ver `painel-aprovacoes.md`). esta é a caixa de entrada de relatos de moradores.

## o que faz
- lista os relatos enviados por moradores, sem mural público nem protocolo; admin só muda o status.

## ações
- filtro de status: Em aberto (padrão, recebida + em análise), Recebida, Em análise, Resolvida, Arquivada, Todos.
- ações rápidas por linha: Em análise, Resolvida, Arquivar (esconde o botão do status atual) e "Ver detalhes".
- "Desfazer" depois de uma mudança (volta ao status anterior, recarrega a lista).

## apis
- `adminApi.utilidade.denuncias.listar({status})` e `atualizarStatus(id, status)` (PATCH) (`lib/admin-api.ts:1331-1339`).

## estados
- carregando; erro dentro da tabela; vazio com três textos (em aberto, todos, filtro); `erroAcao` em `role=alert`.

## possíveis problemas
- fato: lista só a 1ª página (`res.results`, `:70`), sem paginação nem "carregar mais".
- fato: não há botão rápido para voltar uma denúncia a "Recebida"; só pelo Desfazer ou na tela de detalhe (`ACOES_RAPIDAS`, `:30-34`).
- fato: o texto do desfazer é perdido se o admin trocar o filtro (`setUltima(null)`, `:81`).
- fato: não há contagem de pendentes no menu para este módulo (não verifiquei Sidebar).

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-utilidade-denuncias.png](../prints/painel-utilidade-denuncias.png) · dados brutos: [json](../prints/json/painel-utilidade-denuncias.json)
- aberta em `/painel/utilidade/denuncias`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1147,16,109,34)
- [menu] "26 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Artigos · Orçamentos Online · A Voz do Povo · Denúncias · Telefones Úteis …" — menu lateral, no topo da página, à esquerda (lista de 26 itens em coluna) (10,18,255,921)
- [título] "A Voz do Povo — Denúncias" — topo, no topo da página, à esquerda (300,19,243,28)
- [lista de opções] "Filtrar por status" — conteúdo, na parte de cima, à esquerda (300,147,144,36)
- [coluna] "Categoria" — conteúdo, na parte de cima, à esquerda (300,199,247,41)
- [coluna] "Local" — conteúdo, na parte de cima, ao centro (547,199,173,41)
- [coluna] "Recebida em" — conteúdo, na parte de cima, à direita (720,199,278,41)
- [coluna] "Status" — conteúdo, na parte de cima, à direita (997,199,186,41)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
