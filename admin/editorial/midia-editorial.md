---
id: editorial-midia
titulo: imagens e galerias editoriais
publico:
  - administrador do portal
  - jornalista
  - colunista
modulo: Notícias, Artigos, Turismo e Agenda de Eventos
categoria: conteúdo
aba: não-se-aplica
tipo_problema: mídia
status: rascunho-documental
revisado_em: 2026-10-15
validacao: docs-e-codigo
---

## objetivo
orientar o uso de capas e galerias vinculadas a conteúdo editorial, sem presumir uma biblioteca geral de arquivos.

## pré-requisitos/permissões
abra o formulário ou registro do próprio conteúdo e use as opções de mídia ali disponíveis. O acesso é limitado pelo papel e pelo servidor; artigo de suporte não autoriza uma ação.

## passos

1. Em notícia ou artigo, use o campo da foto de capa que fica no próprio formulário da notícia ou do artigo.
2. Em evento, ponto turístico ou roteiro, abra a lista da tela correspondente e clique em `Editar` no item.
3. Dentro do formulário, desça até a parte `Galeria de fotos e vídeos`.
4. Adicione ou remova fotos ali. Num evento novo, as fotos são enviadas assim que você salvar o evento.
5. Para colocar um vídeo, cole o link do YouTube no campo de vídeo da galeria.
6. Clique em `Salvar`.

## resultado
A mídia fica associada ao registro em edição. Remover uma imagem por campo/formulário não é a mesma coisa que apagar arquivos manualmente; a limpeza de arquivos segue proteção contra referências compartilhadas.

## desvios
- Não foi identificada uma tela única de biblioteca editorial reutilizável; as galerias são por tipo de conteúdo.
- Uma prévia local não prova que o arquivo foi salvo nem que está visível ao público.
- Não faça exclusão em lote nem tente corrigir arquivo diretamente no servidor.
- A galeria de evento novo depende de salvar o evento antes.

## quando pedir ajuda
peça ajuda se upload falhar, a prévia desaparecer após salvar, ou remoção afetar mídia compartilhada. Informe tipo de conteúdo e mensagem, sem encaminhar dados pessoais.

## fontes
- `portal-cidade/frontend/src/app/painel/turismo/eventos/page.tsx:101` — prévia e remoção da capa.
- `portal-cidade/frontend/src/app/painel/turismo/eventos/page.tsx:110` — galeria do evento novo após criação.
- `portal-cidade/frontend/src/components/painel/GaleriaDeMidia.tsx:1` — componente de galeria.
- `AGENTS.md:46` — limpeza protegida de mídia e exigência de backup para operações em lote.
- `docs/PRODUCT.md:41` — vídeo YouTube nas galerias de Turismo.

## lacunas
não verificado visualmente nem por upload real. Formatos e limites variam por formulário e não foram generalizados.
- revisão 2026-10-19: galerias de evento, ponto e roteiro ficam dentro do formulário de edição; as rotas `[id]/fotos` de evento e roteiro só redirecionam.
