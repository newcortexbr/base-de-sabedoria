---
id: gerenciar-classificados
titulo: localizar e gerenciar classificados no painel
publico:
  - admin
modulo: classificados
categoria: admin
aba: nao-se-aplica
tipo_problema: cadastro
tags:
  - classificado
  - anuncio
  - filtrar
  - editar
  - ver
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - Ps1cgdLQ1FI
---

## objetivo

Aqui você encontra um anúncio classificado e abre a edição. Vagas de emprego ficam no menu `Vagas de Emprego`.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Em `Conteúdo`, em `Classificados`, clique em `Listar Anúncios`. [t=18] [guia=menu:/painel/classificados]
2. Digite o título ou a descrição em `Buscar por título ou descrição...`. [t=31] [guia=classificados.busca]
3. Se quiser, escolha uma opção em `Todos os status`. [t=31] [guia=classificados.situacao]
4. Clique em `Filtrar`. [guia=classificados.filtrar]
5. Na linha do anúncio, clique em `Editar`. [t=49] [guia=classificados.editar]

## resultado

O formulário do anúncio escolhido é aberto.

## desvios

- Para tirar do site um anúncio que já foi vendido sem apagar os dados, veja “marcar um classificado como vendido”.
- Para apagar o cadastro, veja “excluir um anúncio classificado”.
- `Categorias` e `Anunciantes` ficam no grupo `Classificados`; os preços para anunciar ficam em `Meus Planos`.

## quando pedir ajuda

Peça ajuda se a tela não carregar ou se a ação mostrar erro. Informe a mensagem e a ação tentada, sem enviar senha.

## fontes

- Código do portal no HEAD `b2f62d3f`; base revisada a partir de `814f097`.
- `frontend/src/app/painel/classificados/page.tsx:265`.
- `frontend/src/app/painel/classificados/page.tsx:359`.
- Vídeo `Ps1cgdLQ1FI`: catálogo `portal-da-cidade/videos.json`, transcrição `videos/conteudo/Ps1cgdLQ1FI.md` e legenda `videos/legendas/Ps1cgdLQ1FI.srt`.

## lacunas

Não houve validação no navegador nem execução do produto. As regras e os rótulos descritos foram conferidos por leitura do código. Tempos indicam o trecho da transcrição/legenda, não uma reprodução validada da interface atual.
