---
id: marcar-classificado-como-vendido
titulo: "marcar um classificado como vendido"
publico:
  - admin
modulo: classificados
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - Ps1cgdLQ1FI
---

## objetivo

Aqui você tira do site um anúncio que já foi vendido sem apagar o texto, as fotos e o histórico.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Conteúdo` do menu, em `Classificados`, clique em `Listar Anúncios`. [t=18] [guia=menu:/painel/classificados]
2. Digite o título em `Buscar por título ou descrição...`. [t=31] [guia=classificados.busca]
3. Clique em `Filtrar`. [guia=classificados.filtrar]
4. Na linha de um anúncio ativo, clique em `Marcar como vendido`. [t=49] [guia=classificados.vendido]
5. Na janela de confirmação, clique em `Marcar como vendido`. [guia=confirmacao.confirmar]

## resultado

O anúncio passa para `vendido` e sai do site. O painel mostra `Anúncio marcado como vendido`.

## desvios

- A ação `Marcar como vendido` aparece na linha de anúncios ativos; não é a mesma coisa que `Excluir`.

## quando pedir ajuda

Peça ajuda se a tela não carregar ou se a ação mostrar erro. Informe a mensagem e a ação tentada, sem enviar senha.

## fontes

- Código do portal no HEAD `b2f62d3f`; base revisada a partir de `814f097`.
- `frontend/src/app/painel/classificados/page.tsx:194`.
- `frontend/src/app/painel/classificados/page.tsx:360`.
- Vídeo `Ps1cgdLQ1FI`: catálogo `portal-da-cidade/videos.json`, transcrição `videos/conteudo/Ps1cgdLQ1FI.md` e legenda `videos/legendas/Ps1cgdLQ1FI.srt`.

## lacunas

Não houve validação no navegador nem execução do produto. As regras e os rótulos descritos foram conferidos por leitura do código. Tempos indicam o trecho da transcrição/legenda, não uma reprodução validada da interface atual.
