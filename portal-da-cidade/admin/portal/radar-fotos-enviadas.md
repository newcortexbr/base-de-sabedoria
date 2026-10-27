---
id: radar-fotos-enviadas
titulo: "aprovar as fotos enviadas ao Radar de Preços"
publico:
  - admin
modulo: radar
categoria: radar
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - aprovar
  - recusar
  - editar
  - radar
  - foto
  - preco
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - CSYITekPVcw
---

## objetivo

Confira as fotos de preços enviadas pelos moradores antes de aprová-las.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Conteúdo` do menu, em `Radar de Preços`, clique em `Fotos enviadas`. [guia=menu:/painel/radar/fotos]
2. Clique na aba `Aguardando`.  [guia=radar-fotos.aguardando]
3. Clique na foto para ampliar e conferir.  [guia=radar-fotos.ampliar]
4. Clique em `Fechar a foto`.  [guia=radar-fotos.fechar-foto]
5. Na foto conferida, clique em `Aprovar e ler`; se o estabelecimento é novo, o botão se chama `Aprovar foto e estabelecimento`; em foto de preços de combustível, `Aprovar preços` ou `Aprovar preços e posto`. [t=93] [guia=radar-fotos.aprovar]

## resultado

O envio segue para leitura. O resultado informa o que foi lido, e preços retidos exigem revisão separada.

## o que chega e o que a tela mostra

- Origem: o morador envia pelo site uma foto de produto ou um encarte, informa o preço e o estabelecimento; se o estabelecimento não existe, ele mesmo cadastra um novo.
- Quadros do topo: `Aguardando você`, `Preços retidos`, `Preços no site` e `Envios na semana`.
- Abas: `Aguardando`, `Lidos` (histórico das aprovadas, com o resumo de cada leitura) e `Recusados`.
- Cada cartão mostra o tipo (`Encarte`, `Foto de produto` ou `Só preço (posto)`), o estabelecimento, o preço informado e `Enviado por` (nome e WhatsApp para tirar dúvidas); esses dados só a equipe vê.
- Foto deitada: use os botões de girar (esquerda/direita) antes de aprovar; a leitura fica mais precisa com a foto em pé.
- Estabelecimento novo: aparece a etiqueta `estabelecimento novo` e a aprovação vale para a foto e o estabelecimento juntos. Se o morador recadastrou um estabelecimento que já existe, use `Corrigir`: o cadastro duplicado é descartado e a foto passa a apontar para o certo.
- `Recusar` (foto repetida, ilegível ou fora do tema): nada é lido e o morador não é avisado.
- `Aprovar e ler`: a IA lê o encarte na hora; o resultado informa quantos produtos foram lidos, quantos são novos, quantos foram atualizados e quantos ficaram retidos para conferência.
- No site, os preços lidos aparecem atualizados com a foto do encarte e a data da atualização.

## corrigir antes de aprovar

1. Na parte `Conteúdo` do menu, em `Radar de Preços`, clique em `Fotos enviadas`. [guia=menu:/painel/radar/fotos]
2. Clique em `Corrigir` na foto. [t=65] [guia=radar-fotos.corrigir]
3. Escolha o `Estabelecimento *` correto.  [t=65] [guia=radar-fotos.estabelecimento]
4. Se necessário, ajuste `Preço informado`.  [t=69] [guia=radar-fotos.preco]
5. Clique em `Salvar`. [t=74] [guia=radar-fotos.salvar]

## recusar uma foto

1. Na parte `Conteúdo` do menu, em `Radar de Preços`, clique em `Fotos enviadas`. [guia=menu:/painel/radar/fotos]
2. Clique em `Recusar` na foto. [t=82] [guia=radar-fotos.recusar]
3. Na janela `Recusar esta foto?`, clique em `Recusar`. [t=82] [guia=confirmacao.confirmar]

## desvios

- Use `Lidos` e `Recusados` para consultar os outros envios.
- Uma foto recusada não segue para leitura.
- O tempo de leitura não foi medido; não há garantia de publicação em minutos.

## fontes

- `frontend/src/app/painel/radar/fotos/page.tsx:274`
- `frontend/src/app/painel/radar/fotos/page.tsx:310`

- Catálogo: `portal-da-cidade/videos.json`; legendas: `videos/legendas/CSYITekPVcw.srt`.

## lacunas

- Conferido por leitura do código no HEAD b2f62d3f. Sem execução do produto ou validação visual nesta auditoria.
