---
id: usuario-doacoes-instituicoes-de-caridade
titulo: "conhecer e ajudar instituições de caridade na seção doações"
publico:
  - usuario
modulo: doacoes
categoria: doacoes
aba: nao-se-aplica
tipo_problema:
  - doacoes
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - 8v1W-gtTRow
---

## objetivo
encontrar instituições de caridade da cidade e falar com elas. A página se chama `Corrente do bem`.

## pré-requisitos
- a seção `Doações` precisa estar ligada no portal.

## explicação
- a seção reúne projetos sociais, ONGs e entidades da cidade; cada uma mostra o que faz e como ajudar.
- a forma de ajudar (doação, alimentos, roupas ou tempo) é combinada com a instituição.

- entram ONGs, projetos sociais, abrigos de animais e casas de acolhimento.
- a página da instituição mostra o trabalho, as fotos, onde fica e o contato direto por WhatsApp.

## passos
1. No menu do topo do portal, clique em `Doações`. [guia=topo.doacoes] [t=6]
2. Para procurar uma instituição, escreva no campo `Busque por nome, cidade ou o que a instituição faz...`. A lista se atualiza enquanto você digita. [guia=doacoes.busca] [t=19]
3. Para filtrar pela causa, clique no botão `Causas` (ou em `Todas as causas`) e escolha a causa. [guia=doacoes.causa] [t=19]
4. Clique no cartão da instituição (botão `Conheça a instituição`). [guia=doacoes.instituicao] [t=24]
5. Na página da instituição, role para ver o trabalho dela, a `Galeria` de fotos e o mapa `Onde fica`. [guia=doacoes.pagina] [t=26]
6. Clique em `Falar no WhatsApp` (no celular, no botão `WhatsApp` fixo no rodapé) para conversar com a instituição. [guia=doacoes.whatsapp] [t=28]

## resultado
você conversa diretamente com a instituição para combinar a ajuda.

## desvios
- a página mostra quantas `instituições encontradas` há; sem resultado aparece `Nenhuma instituição encontrada para essa busca.`
- o botão `Falar no WhatsApp` só aparece se a instituição cadastrou WhatsApp; o botão `Conheça a instituição` da página abre o site dela, quando existe.
- se a lista não carregar, aparece `Não foi possível buscar agora. Tente de novo em instantes.`

## fontes
- `portal-cidade/frontend/src/app/doacoes/page.tsx:12-33`
- `portal-cidade/frontend/src/components/doacoes/ListagemDoacoes.tsx:91-145`
- `portal-cidade/frontend/src/components/doacoes/SeletorDeCausa.tsx:21,54-66`
- `portal-cidade/frontend/src/components/doacoes/CardInstituicao.tsx:8-35`
- `portal-cidade/frontend/src/components/doacoes/AcoesInstituicao.tsx:5-20`
- vídeo `8v1W-gtTRow`.

## lacunas
não verificado em navegador. A página individual da instituição (`app/doacoes/[slug]/page.tsx`) só foi lida por alto; os blocos exibidos dependem do que cada instituição preencheu.
