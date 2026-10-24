---
id: criar-subcategoria-de-classificados
titulo: "criar uma subcategoria de classificados"
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

Aqui você cria uma subdivisão dentro de uma categoria de classificados.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Conteúdo` do menu, em `Classificados`, clique em `Categorias`. [t=66] [guia=menu:/painel/classificados/categorias]
2. Na categoria desejada, clique em `▼ Subs`. [guia=classificados-categorias.subs]
3. Clique em `+ Nova Subcategoria`. [guia=classificados-categorias.nova-sub]
4. Preencha `Nome *` na janela `Nova Subcategoria`. [guia=classificados-categorias.nome-sub]
5. Deixe `Ativa` marcada para cadastrar uma subcategoria ativa. [guia=classificados-categorias.ativa-sub]
6. Clique em `Salvar`. [guia=classificados-categorias.salvar-sub]

## resultado

A subcategoria é cadastrada; o painel mostra `Subcategoria salva`.

## desvios

- Para criar a categoria principal, veja “criar categorias de classificados”.

## quando pedir ajuda

Peça ajuda se a tela não carregar ou se a ação mostrar erro. Informe a mensagem e a ação tentada, sem enviar senha.

## fontes

- Código do portal no HEAD `b2f62d3f`; base revisada a partir de `814f097`.
- `frontend/src/app/painel/classificados/categorias/page.tsx:134`.
- `frontend/src/app/painel/classificados/categorias/page.tsx:292`.
- Vídeo `Ps1cgdLQ1FI`: catálogo `portal-da-cidade/videos.json`, transcrição `videos/conteudo/Ps1cgdLQ1FI.md` e legenda `videos/legendas/Ps1cgdLQ1FI.srt`.

## lacunas

Não houve validação no navegador nem execução do produto. As regras e os rótulos descritos foram conferidos por leitura do código. Tempos indicam o trecho da transcrição/legenda, não uma reprodução validada da interface atual.
