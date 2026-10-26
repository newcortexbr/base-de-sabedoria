---
id: galeria-evento-legenda-ordem-remover
titulo: "mudar legenda, ordem ou remover mídia de um evento"
publico:
  - admin
modulo: Agenda de Eventos
categoria: conteúdo
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - Hyh3UxHW_jU
---

## objetivo

Aqui você ajusta legendas e ordem ou remove fotos e vídeos da galeria de um evento existente.

## pré-requisitos

- Entrar no painel como administrador.
- Ter um evento com itens na galeria.

## passos

### mudar legenda

1. Na seção `Conteúdo` do menu lateral, em `Guia Turístico / Eventos`, clique em `Eventos`. [t=50] [guia=menu:/painel/turismo/eventos]
2. Na linha do evento, clique em `Editar`. [guia=eventos.editar]
3. Preencha `Legenda (aparece como alt no site)` na foto. No vídeo, use `Legenda deste vídeo`. [guia=galeria.legenda-item]
4. Pressione Enter no campo da legenda. [guia=galeria.legenda-item]

### mudar ordem

1. Na seção `Conteúdo` do menu lateral, em `Guia Turístico / Eventos`, clique em `Eventos`. [t=50] [guia=menu:/painel/turismo/eventos]
2. Na linha do evento, clique em `Editar`. [guia=eventos.editar]
3. No item da galeria, clique na seta `Mover para cima` para antecipar sua posição. [guia=galeria.mover-cima]
4. Se precisar da direção contrária, clique em `Mover para baixo`. [guia=galeria.mover-baixo]

### remover

1. Na seção `Conteúdo` do menu lateral, em `Guia Turístico / Eventos`, clique em `Eventos`. [t=50] [guia=menu:/painel/turismo/eventos]
2. Na linha do evento, clique em `Editar`. [guia=eventos.editar]
3. No item da galeria, clique em `Remover`. [guia=galeria.remover]
4. Na confirmação `Excluir esta foto?` ou `Excluir este vídeo?`, clique em `Excluir`. [guia=confirmacao.confirmar]

## resultado

Na edição do evento existente, legenda, ordem e remoção são gravadas diretamente na galeria. Não dependem do botão `Salvar` do evento. A legenda da foto é usada como texto alternativo da imagem.

## desvios

- Sair do campo também salva a legenda; Enter apenas conclui a edição desse campo.
- A primeira posição não permite subir e a última não permite descer.
- Em caso de erro, leia a mensagem junto à galeria antes de repetir.
- Estes passos são do evento existente; a galeria de um evento novo ainda aguarda o primeiro salvamento.

## fontes

- `frontend/src/app/painel/turismo/GaleriaDoRegistro.tsx:155` — legenda.
- `frontend/src/app/painel/turismo/GaleriaDoRegistro.tsx:169` — ordem.
- `frontend/src/app/painel/turismo/GaleriaDoRegistro.tsx:189` — remoção e confirmação.
- `frontend/src/app/painel/turismo/GaleriaDoRegistro.tsx:236` — campo e setas.
- `frontend/src/components/painel/GaleriaDeMidia.tsx:277` — remover na variante lista.
- Vídeo `Hyh3UxHW_jU`: acesso à lista em 50s; não detalha essas operações.

## lacunas

Não executadas mudanças ou remoções. Não verificada a exibição pública após alteração.
