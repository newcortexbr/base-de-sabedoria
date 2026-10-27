---
id: sorteios
titulo: criar, publicar e realizar sorteios
publico:
  - admin
modulo: sorteios
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - criar
  - publicar
  - sorteio
  - premio
  - participante
  - datas
  - painel
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - uN4FHHHGgEs
  - REgRSXekqpA
---

## objetivo

Crie um sorteio e publique as inscrições no portal.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Conteúdo` do menu, em `Sorteios`, clique em `Sorteios`. [t=17] [guia=menu:/painel/sorteios]
2. Clique em `Novo sorteio`. [t=54] [guia=sorteios.novo]
3. Escolha a imagem de `Capa`. [t=56] [guia=sorteios.capa]
4. Preencha `Título`. [t=65] [guia=sorteios.titulo]
5. Preencha `Descrição do prêmio`. [t=68] [guia=sorteios.premio]
6. Se quiser, preencha `Regras (opcional)`. [t=70] [guia=sorteios.regras]
7. Se quiser, preencha `Vídeo do YouTube (opcional)`. [t=75] [guia=sorteios.video]
8. Se quiser, preencha `Link da live no YouTube (opcional)`. [t=80] [guia=sorteios.live]
9. Se quiser definir quando abre, preencha `Inscrições de`; vazio abre ao publicar. [t=85] [guia=sorteios.inscricoes-de]
10. Preencha `Inscrições até`. [t=91] [guia=sorteios.inscricoes-ate]
11. Preencha `Sorteio em`. [t=94] [guia=sorteios.data-sorteio]
12. Preencha `Quantidade de ganhadores`. [t=97] [guia=sorteios.qtd-ganhadores]
13. Se houver patrocinador, escolha a empresa em `Oferecido por (opcional)`. [t=99] [guia=sorteios.oferecido-por]
14. Em `A roleta mostra`, escolha `Nomes` ou `Números`. [t=107] [guia=sorteios.roleta]
15. Clique em `Publicar`. [t=118] [guia=sorteios.publicar]

## resultado

O sorteio fica publicado. As inscrições seguem as datas definidas.

## desvios

- No topo da tela `Sorteios` ficam os totais `Abertos agora`, `Participantes somados`, `Aguardando sorteio` e `Ganhadores sorteados`. As abas `Abertos`, `Para sortear`, `Sorteados` e `Rascunhos` filtram por situação; a busca procura pelo título.
- Cada linha mostra capa, situação, datas, inscritos e ganhadores, com botões de participantes ou ganhadores, editar e excluir.
- `Capa`: 1600 × 900 px, deitada; deixe o principal no centro, porque as bordas podem ser cortadas no celular.
- `Regras (opcional)`: ex.: idade mínima e cidade. Aparecem na página do sorteio.
- `Vídeo do YouTube (opcional)` abre na página do sorteio; `Link da live no YouTube (opcional)` mostra o botão para assistir à live.
- `Oferecido por (opcional)`: empresa do Guia que patrocina o prêmio. A página do sorteio mostra a empresa com link para o Guia e WhatsApp.
- `A roleta mostra` `Nomes` ou `Números` da sorte.
- `Mostrar a contagem de participantes no site` liga ou desliga a contagem pública. A transparência é a razão da trava após a primeira inscrição.
- Na página do sorteio o visitante vê capa, empresa, prêmio, regras e contagem regressiva para o fim das inscrições. Cada aparelho se inscreve uma vez por sorteio.
- Para guardar sem publicar, use `Salvar rascunho` em vez de `Publicar`.
- Depois da primeira inscrição, início das inscrições, quantidade de ganhadores e roleta ficam travados. Depois do primeiro ganhador, as datas finais também ficam travadas.
- Para tirar um sorteio do ar sem apagá-lo, veja “tirar um sorteio do ar sem excluir”. Para esconder toda a seção, veja “desligar o módulo Sorteios”. Encerrar inscrições não é o mesmo que retirar a publicação.

## fontes

- `frontend/src/components/painel/sorteios/ModalSorteio.tsx:97`
- `backend/sorteios/serializers.py:267`

- Catálogo: `portal-da-cidade/videos.json`; legendas: `videos/legendas/uN4FHHHGgEs.srt`, `videos/legendas/REgRSXekqpA.srt`.

## lacunas

- Conferido por leitura do código no HEAD b2f62d3f. Sem execução do produto ou validação visual nesta auditoria.
