---
id: montar-e-acompanhar-votacao-melhores-da-cidade
titulo: "montar e acompanhar uma votação Melhores da Cidade"
publico:
  - admin
modulo: melhores da cidade
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - melhores da cidade
  - votacao
  - criar
  - voto
  - categoria
  - subcategoria
  - ver
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - ajzmuupRJMM
---

## objetivo

Aqui você cria uma votação do Melhores da Cidade e abre o placar. Cada competição reúne empresas de uma categoria ou subcategoria do Guia.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.
- Ter pelo menos 2 empresas elegíveis na categoria ou subcategoria da competição.

## passos

1. Na parte `Conteúdo` do menu, clique em `Melhores da Cidade`. [t=13] [guia=menu:/painel/melhores-da-cidade]
2. Clique em `Criar votação`. [t=114] [guia=melhores.criar]
3. Se quiser, preencha `Nome da votação (opcional)`. [t=120] [guia=melhores-nova.nome]
4. Preencha `Começa em`. [t=122] [guia=melhores-nova.inicio]
5. Preencha `Termina em` com uma data e hora depois do começo. [t=122] [guia=melhores-nova.fim]
6. Escolha `Categoria` em `Nova competição`. [t=127] [guia=melhores-nova.categoria]
7. Se quiser restringir a disputa, escolha `Subcategoria`; deixe `Todas` para usar a categoria inteira. [t=129] [guia=melhores-nova.subcategoria]
8. Se quiser mudar o nome sugerido, altere `Nome da competição`. [guia=melhores-nova.nome-competicao]
9. Clique em `Adicionar competição`. Repita a montagem para cada disputa. [t=137] [guia=melhores-nova.adicionar]
10. Clique em `Próximo` para abrir `Revisar`. [t=139] [guia=melhores-nova.proximo]
11. Depois de conferir o período e as competições em `Revisar`, clique em `Criar votação`. [t=139] [guia=melhores-nova.criar]

## acompanhar o placar

1. Na parte `Conteúdo` do menu, clique em `Melhores da Cidade`. [t=13] [guia=menu:/painel/melhores-da-cidade]
2. No cartão de uma votação no ar, clique em `Ver placar`. [t=57] [guia=melhores.placar]

## resultado

O painel mostra `Votação criada` e volta à lista. A votação pode ficar agendada ou no ar, de acordo com o período.

## desvios

- Cada competição precisa de pelo menos 2 empresas; o formulário aceita até 30 competições por votação.
- A primeira tela cadastra `Datas e competições`; `Próximo` só abre a revisão e ainda não cria a votação.
- Para mudar o prazo, veja “alterar as datas de uma votação Melhores da Cidade”. Para avaliar alertas, veja “decidir sobre votos suspeitos no Melhores da Cidade”.

## quando pedir ajuda

Peça ajuda se a tela não carregar ou se a ação mostrar erro. Informe a mensagem e a ação tentada, sem enviar senha.

## fontes

- Código do portal no HEAD `b2f62d3f`; base revisada a partir de `814f097`.
- `frontend/src/app/painel/melhores-da-cidade/nova/page.tsx:54`.
- `frontend/src/app/painel/melhores-da-cidade/nova/page.tsx:98`.
- `frontend/src/app/painel/melhores-da-cidade/nova/page.tsx:111`.
- `frontend/src/app/painel/melhores-da-cidade/nova/page.tsx:122`.
- `frontend/src/app/painel/melhores-da-cidade/page.tsx:325`.
- Vídeo `ajzmuupRJMM`: catálogo `portal-da-cidade/videos.json`, transcrição `videos/conteudo/ajzmuupRJMM.md` e legenda `videos/legendas/ajzmuupRJMM.srt`.

## lacunas

Não houve validação no navegador nem execução do produto. As regras e os rótulos descritos foram conferidos por leitura do código. Tempos indicam o trecho da transcrição/legenda, não uma reprodução validada da interface atual.

As regras de duração mínima e desempate no backend não foram auditadas. O artigo não promete vencedor nem prazo mínimo.
