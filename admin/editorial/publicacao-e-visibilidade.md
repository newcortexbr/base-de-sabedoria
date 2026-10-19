---
id: editorial-visibilidade
titulo: entender quando o conteúdo aparece ao público
publico:
  - administrador do portal
  - jornalista
  - colunista
modulo: Notícias, Artigos, Turismo e Agenda de Eventos
categoria: conteúdo
aba: não-se-aplica
tipo_problema: visibilidade
status: rascunho-documental
revisado_em: 2026-10-19
validacao: docs-e-codigo
---

## objetivo
distinguir os estados de conteúdo e os fatores que podem ocultá-lo, sem tratar um status isolado como prova visual.

## pré-requisitos/permissões
use a listagem e os detalhes do módulo relevante; acesso depende do papel e da autorização do servidor. A classificação automática futura, se existir, nunca autoriza operações.

## passos

1. Abra a lista do tipo de conteúdo. Notícias: menu `Notícias` → `Listar Notícias` (`/painel/noticias`). Artigos: menu `Artigos` → `Lista de Artigos` (`/painel/blog`). Eventos: menu `Guia Turístico / Eventos` → `Eventos` (`/painel/turismo/eventos`). [guia=menu:/painel/noticias]
2. Na coluna `Status`, veja a situação. Quando houver, compare também a data de publicação ou de término.
3. Em notícias, uma notícia publicada com data no futuro aparece como `agendado`. Ela não aparece para o público antes dessa data.
4. Em artigos, as situações são `Rascunho`, `Agendado`, `Publicado` e `Arquivado` (fora do ar).
5. Em eventos, `No ar` está aparecendo no site, `Encerrado` quer dizer que a data já passou e `Inativo` quer dizer que você tirou do ar.
6. Para ter certeza, abra o conteúdo no site do portal, como um visitante faria. Lembre que colocar algo em destaque não publica o conteúdo.

## resultado
estado, datas e regras de vigência em conjunto determinam se o conteúdo pode aparecer. Destaque e publicação são conceitos diferentes.

## desvios
- `Publicado` em Notícias pode estar agendado para o futuro.
- Evento ativo pode estar encerrado pela data; inativo é outra condição.
- A home pode ter blocos configurados para mostrar somente destaques e sumir quando não houver destaque.
- Módulo desligado fica oculto, mas não apaga conteúdo.

## quando pedir ajuda
peça ajuda se o conteúdo estiver publicado, vigente e no módulo ativo, mas continuar ausente; informe módulo, rota e estado observado. Não altere configuração ou dados fora do seu papel.

## fontes
- `portal-cidade/frontend/src/app/painel/noticias/page.tsx:12` — notícia agendada.
- `portal-cidade/frontend/src/app/painel/blog/page.tsx:27` — estados dos artigos.
- `portal-cidade/frontend/src/app/painel/turismo/eventos/page.tsx:41` — estado de eventos.
- `docs/PRODUCT.md:48` — bloco da home somente com destaques.
- `docs/PRODUCT.md:180` — desligar módulo oculta sem apagar.

## lacunas
sem validação de navegador, ambiente ou conteúdo real. Visibilidade pública também depende de rotas, consultas e configuração por portal, não examinadas em runtime nesta tarefa.
