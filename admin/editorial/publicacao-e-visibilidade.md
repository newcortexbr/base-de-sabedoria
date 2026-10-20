---
id: editorial-visibilidade
titulo: "publicação e visibilidade: notícias"
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
aqui você descobre por que um conteúdo aparece ou não aparece para o público. Rascunho, data no futuro, evento encerrado e módulo desligado deixam o conteúdo escondido. Colocar em destaque não publica nada.

## pré-requisitos/permissões
Entrar no painel como administrador, ou na área do cliente se você for jornalista ou colunista.

## veja também
- para conferir a situação de um artigo, veja o artigo "ver se um artigo está no ar".
- para conferir a situação de um evento, veja o artigo "ver se um evento está no ar".

## passos

1. Abra a lista do tipo de conteúdo. Para notícias, no menu `Notícias`, clique em `Listar Notícias`. [guia=menu:/painel/noticias]
2. Na coluna `Status`, veja a situação. Quando houver, compare também a data de publicação ou de término. [guia=noticias.status-linha]
3. Em notícias, uma notícia publicada com data no futuro aparece como `agendado` e não aparece para o público antes dessa data. [guia=noticias.status-linha]
4. Para ter certeza, abra o conteúdo no site do portal, como um visitante faria. [guia=fora]

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
