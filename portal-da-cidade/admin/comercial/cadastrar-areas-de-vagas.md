---
id: cadastrar-areas-de-vagas
titulo: criar áreas de vagas
publico:
  - admin
modulo: vagas e classificados
categoria: admin
aba: nao-se-aplica
tipo_problema: cadastro
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - ufB3QTKfPsM
---

## objetivo

Aqui você cria as áreas que organizam as vagas, como Vendas ou Saúde.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Conteúdo` do menu, em `Vagas de Emprego`, clique em `Áreas de Vagas`. [t=86] [guia=menu:/painel/vagas/areas]
2. Clique em `+ Nova Área`. [t=90] [guia=areas-vagas.nova]
3. Preencha `Nome *`. [t=93] [guia=areas-vagas.nome]
4. Se quiser, escolha `Ícone`. [t=93] [guia=areas-vagas.icone]
5. Deixe `Ativa` marcada para cadastrar uma área ativa. [guia=areas-vagas.ativa]
6. Escolha `Cor`. [t=95] [guia=areas-vagas.cor]
7. Clique em `Salvar`. [t=95] [guia=areas-vagas.salvar]

## resultado

A área é cadastrada e pode ser selecionada no formulário de vaga.

## desvios

- Para alterar uma área, use `Editar` na linha dela. Excluir deixa as vagas vinculadas sem área.

## quando pedir ajuda

Peça ajuda se a tela não carregar ou se a ação mostrar erro. Informe a mensagem e a ação tentada, sem enviar senha.

## fontes

- Código do portal no HEAD `b2f62d3f`; base revisada a partir de `814f097`.
- `frontend/src/app/painel/vagas/areas/page.tsx:48`.
- Vídeo `ufB3QTKfPsM`: catálogo `portal-da-cidade/videos.json`, transcrição `videos/conteudo/ufB3QTKfPsM.md` e legenda `videos/legendas/ufB3QTKfPsM.srt`.

## lacunas

Não houve validação no navegador nem execução do produto. As regras e os rótulos descritos foram conferidos por leitura do código. Tempos indicam o trecho da transcrição/legenda, não uma reprodução validada da interface atual.
