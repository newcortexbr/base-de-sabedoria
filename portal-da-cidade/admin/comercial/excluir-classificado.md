---
id: excluir-classificado
titulo: "excluir um anúncio classificado"
publico:
  - admin
modulo: classificados
categoria: admin
aba: nao-se-aplica
tipo_problema: cadastro
tags:
  - excluir
  - classificado
  - anuncio
  - remover
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - Ps1cgdLQ1FI
---

## objetivo

Aqui você apaga permanentemente um anúncio classificado.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Em `Conteúdo`, em `Classificados`, clique em `Listar Anúncios`. [t=18] [guia=menu:/painel/classificados]
2. Digite o título ou a descrição em `Buscar por título ou descrição...`. [t=31] [guia=classificados.busca]
3. Clique em `Filtrar`. [guia=classificados.filtrar]
4. Clique em `Excluir` na linha do anúncio. [t=52] [guia=classificados.excluir]
5. Na pergunta `Excluir este anúncio permanentemente?`, clique em `Excluir`. [guia=confirmacao.confirmar]

## resultado

O anúncio é removido da lista após a exclusão.

## desvios

- Se o produto já foi vendido e você quer guardar o cadastro, veja “marcar um classificado como vendido”.

## quando pedir ajuda

Peça ajuda se a tela não carregar ou se a ação mostrar erro. Informe a mensagem e a ação tentada, sem enviar senha.

## fontes

- Código do portal no HEAD `b2f62d3f`; base revisada a partir de `814f097`.
- `frontend/src/app/painel/classificados/page.tsx:168`.
- `frontend/src/app/painel/classificados/page.tsx:365`.
- `frontend/src/components/painel/ModalAvisoConfirmacao.tsx:153`.
- Vídeo `Ps1cgdLQ1FI`: catálogo `portal-da-cidade/videos.json`, transcrição `videos/conteudo/Ps1cgdLQ1FI.md` e legenda `videos/legendas/Ps1cgdLQ1FI.srt`.

## lacunas

Não houve validação no navegador nem execução do produto. As regras e os rótulos descritos foram conferidos por leitura do código. Tempos indicam o trecho da transcrição/legenda, não uma reprodução validada da interface atual.

O vídeo cita a exclusão, mas não demonstra a confirmação. Não há tempo atribuído ao que não foi demonstrado.
