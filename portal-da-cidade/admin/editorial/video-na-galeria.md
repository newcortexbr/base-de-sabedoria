---
id: video-na-galeria
titulo: "colocar um vídeo do YouTube na galeria"
publico:
  - admin
modulo: Agenda de Eventos
categoria: conteúdo
aba: não-se-aplica
tipo_problema: mídia
tags:
  - video
  - galeria
  - evento
  - link
  - midia
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - Hyh3UxHW_jU
---

## objetivo

Aqui você adiciona um vídeo do YouTube à galeria de um evento já cadastrado.

## pré-requisitos

- Entrar no painel como administrador.
- Ter o evento cadastrado e o link do vídeo.

## passos

1. Na seção `Conteúdo` do menu lateral, em `Guia Turístico / Eventos`, clique em `Eventos`. [t=44] [guia=menu:/painel/turismo/eventos]
2. Na linha do evento, clique em `Editar`. [guia=eventos.editar]
3. Em `Galeria de fotos e vídeos`, clique em `Vídeo do YouTube`. [guia=galeria.modo-video]
4. Cole o endereço em `Link do vídeo no YouTube`. [guia=galeria.link-video]
5. Se quiser, preencha `Legenda (opcional)`. [guia=galeria.legenda-video]
6. Clique em `Adicionar vídeo`. [guia=galeria.enviar-video]

## resultado

No evento existente, o vídeo é gravado na galeria ao adicionar, sem depender do botão `Salvar` do evento.

## desvios

- O campo `Vídeo do YouTube` do evento, fora da galeria, alimenta um bloco próprio; não é o mesmo controle.
- Em evento novo, o vídeo da galeria só é enviado após o primeiro `Salvar`.
- Em caso de erro, o link permanece no campo para correção.
- Para alterar legenda, ordem ou remover, veja “mudar legenda, ordem ou remover mídia de um evento”.
- Pontos turísticos e roteiros têm galerias nas telas próprias. Este artigo descreve Eventos, não Notícias ou Artigos.

## fontes

- `frontend/src/app/painel/turismo/eventos/page.tsx:598` — galeria na edição.
- `frontend/src/app/painel/turismo/eventos/page.tsx:660` — vídeo próprio do evento.
- `frontend/src/components/painel/GaleriaDeMidia.tsx:172` — modo de vídeo.
- `frontend/src/components/painel/GaleriaDeMidia.tsx:209` — link, legenda e envio.
- `frontend/src/app/painel/turismo/GaleriaDoRegistro.tsx:147` — gravação imediata.
- Vídeo `Hyh3UxHW_jU`, legenda: acesso à lista a partir de 44s; menciona galeria de fotos e vídeos.

## lacunas

Não executado no navegador. A legenda do vídeo de orientação não detalha os cliques para adicionar YouTube; esses passos ficam sem tempo.
