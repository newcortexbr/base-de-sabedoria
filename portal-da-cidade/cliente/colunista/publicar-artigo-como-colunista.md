---
id: cliente-colunista-publicar-artigo
titulo: "publicar um artigo como colunista"
publico:
  - cliente
modulo: artigos
categoria: artigos
aba: Artigos
tipo_problema:
  - publicar-artigo
tags:
  - publicar
  - artigo
  - colunista
  - criar
  - perfil
  - area do cliente
status: rascunho-documental
revisado_em: 2026-10-24
validacao: video
videos:
  - 8VRaUwhuhO0
---

## objetivo

completar o perfil de colunista e publicar um artigo no portal.

## pré-requisitos

- ter uma coluna (plano de Artigos) ativa no portal e estar logado na área do cliente. Sem plano ativo, o botão `Novo artigo` não aparece.

## explicação

- no topo da tela `Artigos` aparece o seu plano, com quantos artigos você já usou nesta semana ("X de N artigos desta semana usados"), e os quadros `No ar` e `Agendados`.
- na primeira vez, ao clicar em `Novo artigo`, o portal mostra `Complete seu cadastro` com o perfil de colunista, que aparece ao lado de todos os seus artigos. Dá para pular com `Preencher depois` e completar mais tarde em `Meus dados`.
- o plano limita quantos artigos você publica por semana; o contador mostra quando a próxima semana fica livre.

## passos

1. No menu da esquerda, clique em `Artigos`. [t=6] [guia=menu:/minha-conta/colunista-blog]
2. Clique em `Novo artigo`. [t=19] [guia=colunista.novo-artigo]
3. Na tela `Complete seu cadastro`, envie sua foto em `Foto`. [t=29] [guia=colunista-perfil.foto]
4. Escreva seu nome em `Seu nome`. [t=32] [guia=colunista-perfil.nome]
5. Escreva o cargo ou a especialidade em `Cargo ou especialidade`. [t=32] [guia=colunista-perfil.cargo]
6. Escreva um texto curto em `Descrição breve`. [t=34] [guia=colunista-perfil.bio]
7. Clique em `Salvar perfil`. [t=39] [guia=colunista-perfil.salvar]
8. No editor, escreva o `Título`. [t=47] [guia=colunista-artigo.titulo]
9. Escreva o `Subtítulo`, um complemento que aparece logo abaixo do título. [t=50] [guia=colunista-artigo.subtitulo]
10. Escreva a `Chamada`, um resumo de uma ou duas frases que aparece em destaque no topo do artigo e nas listagens. [t=52] [guia=colunista-artigo.chamada]
11. Em `Texto do artigo`, escreva o conteúdo. A barra de ferramentas tem itálico, sublinhado, subtítulos, citação, listas, alinhamento, cores, link e vídeo do YouTube; `Inserir imagem` põe uma foto no ponto do cursor. [t=60] [guia=colunista-artigo.texto]
12. Em `Categoria`, escolha o tema (como economia, saúde ou tecnologia). [t=92] [guia=colunista-artigo.categoria]
13. Se quiser programar, escolha data e hora em `Agendar publicação (opcional)`; em branco, o artigo vai ao ar assim que você publicar. [t=98] [guia=colunista-artigo.agendar]
14. Em `Foto de capa`, clique ou arraste a imagem principal e preencha `Legenda da foto` e `Créditos da foto`. [t=105] [guia=colunista-artigo.capa]
15. Em `Para os buscadores`, escreva o `Título SEO` e a `Descrição SEO` que aparecem no Google, ou deixe em branco para o portal usar o título e a chamada. [t=112] [guia=colunista-artigo.buscadores]
16. Confira tudo e clique em `Publicar` (o botão vira `Agendar` se você marcou uma data). [t=121] [guia=colunista-artigo.publicar]

## resultado

a tela mostra `Artigo publicado` (ou `Artigo agendado`) e o artigo aparece em `Seus artigos`. No portal ele mostra categoria, título, subtítulo, chamada, assinatura, foto de capa com legenda e o texto, com o quadro sobre o autor ao lado.

## desvios

- artigo já publicado ou agendado: ao editar, o botão passa a ser `Salvar alterações`.
- perfil depois de pular: em `Meus dados` (veja "atualizar o perfil de colunista").
- semana cheia: o contador mostra "Próxima semana livre a partir de…"; não dá para publicar mais naquela semana.

## quando pedir ajuda

se o botão `Novo artigo` não aparecer mesmo com plano pago, ou o plano estiver `Aguardando pagamento`, veja "pagar uma cobrança pendente" ou peça ajuda ao portal.

## fontes

- `portal-cidade/frontend/src/app/minha-conta/colunista-blog/page.tsx:120-135,184-190` — `Artigos`, `Novo artigo`, quadros, `Seus artigos`.
- `portal-cidade/frontend/src/app/minha-conta/colunista-blog/novo/page.tsx:63-96` e `_completar/EtapaCompletarPerfil.tsx:138-153` — `Complete seu cadastro`, `Preencher depois`.
- `portal-cidade/frontend/src/app/minha-conta/colunista-blog/ColunistaPerfil.tsx:162-285` — campos do perfil e `Salvar perfil`.
- `portal-cidade/frontend/src/app/minha-conta/colunista-blog/ArtigoForm.tsx:286-448,462` — campos, `Publicar`/`Agendar`, `Salvar alterações`.
- `portal-cidade/frontend/src/app/minha-conta/colunista-blog/PainelPlanoBlog.tsx:128-131` — contador semanal.

## lacunas

- "botões da direita abrem o artigo no portal" vem do vídeo, não conferido no código desta lista.
- a etapa `Complete seu cadastro` aparece só na primeira vez; a condição exata de reaparecer não foi verificada.
