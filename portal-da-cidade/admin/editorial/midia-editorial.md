---
id: editorial-midia
titulo: "adicionar fotos à galeria de um evento"
publico:
  - admin
modulo: Agenda de Eventos
categoria: conteúdo
aba: não-se-aplica
tipo_problema: mídia
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - Hyh3UxHW_jU
---

## objetivo

Aqui você adiciona fotos à galeria de um evento já cadastrado. Capa e galeria são controles separados.

## pré-requisitos

- Entrar no painel como administrador.
- Ter o evento cadastrado.

## passos

1. Na seção `Conteúdo` do menu lateral, em `Guia Turístico / Eventos`, clique em `Eventos`. [t=44] [guia=menu:/painel/turismo/eventos]
2. Na linha do evento, clique em `Editar`. [guia=eventos.editar]
3. Em `Galeria de fotos e vídeos`, clique em `+ Adicionar fotos`. [guia=galeria.adicionar-fotos]
4. Escolha as fotos no seletor de arquivos. [guia=galeria.adicionar-fotos]

## resultado

No evento existente, as fotos são enviadas e gravadas ao selecionar os arquivos, sem depender do botão `Salvar` do evento.

## desvios

- Em evento novo, os itens aguardam o primeiro `Salvar` do evento para serem enviados.
- Se um arquivo falhar, o envio para nesse arquivo; as fotos anteriores já salvas permanecem, e os arquivos seguintes não são enviados.
- Para legenda, ordem ou remoção, veja “mudar legenda, ordem ou remover mídia de um evento”.
- Para vídeo, veja “colocar um vídeo do YouTube na galeria”.
- Notícias e Artigos têm capa no formulário e mídia dentro do editor de texto; não use este caminho de galeria para eles.
- Pontos turísticos e roteiros têm suas galerias nos formulários próprios; os passos acima são de Eventos.

## fontes

- `frontend/src/app/painel/turismo/eventos/page.tsx:598` — galeria do evento existente.
- `frontend/src/app/painel/turismo/eventos/page.tsx:921` — Editar.
- `frontend/src/app/painel/turismo/GaleriaDoRegistro.tsx:105` — envio e falha parcial.
- `frontend/src/components/painel/GaleriaDeMidia.tsx:195` — seletor de fotos.
- Vídeo `Hyh3UxHW_jU`, legenda: acesso à lista a partir de 44s; a demonstração de galeria é geral.

## lacunas

Não realizados upload nem inspeção visual. O vídeo não detalha a sequência de envio na edição; não há tempos atribuídos a esses passos.
