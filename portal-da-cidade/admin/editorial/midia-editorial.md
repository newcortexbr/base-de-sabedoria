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
revisado_em: 2026-10-19
validacao: docs-e-codigo
---

## objetivo
aqui você coloca capa, fotos e vídeos no conteúdo do portal. Não existe uma biblioteca geral de arquivos: cada foto fica dentro do próprio conteúdo.

## pré-requisitos/permissões
Entrar no painel como administrador e abrir o formulário do conteúdo que vai receber a mídia.

## veja também
- para colocar um vídeo do YouTube, veja o artigo "colocar um vídeo do YouTube na galeria".

## passos

1. Em evento, ponto turístico ou roteiro, abra a lista da tela correspondente. Aqui o exemplo é `Eventos`: no menu `Guia Turístico / Eventos`, clique em `Eventos`. [guia=menu:/painel/turismo/eventos]
2. Clique em `Editar` na linha do item que você quer. [guia=eventos.editar]
3. Dentro do formulário, desça até a parte `Galeria de fotos e vídeos`. [guia=galeria.adicionar-fotos]
4. Para adicionar fotos, clique em `+ Adicionar fotos`. Num evento novo, as fotos são enviadas assim que você salvar o evento. [guia=galeria.adicionar-fotos]
5. Para tirar uma foto, use o botão de remover no próprio item. [guia=galeria.adicionar-fotos]
6. Clique em `Salvar`. [guia=eventos.salvar]

## resultado
A mídia fica associada ao registro em edição. Remover uma imagem por campo/formulário não é a mesma coisa que apagar arquivos manualmente; a limpeza de arquivos segue proteção contra referências compartilhadas.

## desvios
- Não foi identificada uma tela única de biblioteca editorial reutilizável; as galerias são por tipo de conteúdo.
- Uma prévia local não prova que o arquivo foi salvo nem que está visível ao público.
- Não faça exclusão em lote nem tente corrigir arquivo diretamente no servidor.
- Em notícia ou artigo, a foto de capa fica no próprio formulário, não na galeria.
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
