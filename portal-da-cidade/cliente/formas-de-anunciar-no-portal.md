---
id: cliente-formas-de-anunciar-no-portal
titulo: formas de anunciar no portal
publico:
  - cliente
modulo: geral
aba: Área do cliente
tipo_problema:
  - visao-geral
  - formas-de-anunciar
status: rascunho-documental
revisado_em: 2026-10-24
validacao: video
videos:
  - 4pc8AwOX0hA
---

## objetivo
conhecer as formas de a empresa anunciar no portal e saber qual artigo detalha cada uma.

## pré-requisitos
- ser uma empresa interessada em divulgar o negócio no portal.

## explicação
o vídeo apresenta o portal como um lugar onde a cidade inteira passa: notícias, denúncias na Voz do Povo, pedidos de orçamento, empregos, classificados e agenda de fim de semana. A empresa pode escolher uma ferramenta ou combinar várias. Na área do cliente, cada uma tem o seu item no menu da esquerda.

## passos
1. Guia Comercial: página completa da empresa, com fotos, serviços, localização e WhatsApp. No menu, é `Guia Comercial`. Veja [cadastrar a empresa no guia](guia-comercial/cadastrar-empresa-no-guia.md) e [completar a ficha da empresa](guia-comercial/completar-ficha-da-empresa-no-guia.md). [t=26] [guia=menu:/minha-conta/guia]
2. Orçamentos: clientes publicam o que procuram e a informação chega à empresa. No menu, é `Pedidos recebidos` (quando o plano do Guia inclui). Veja [responder pedidos de orçamento](responder-pedidos-de-orcamento.md). [t=40] [guia=menu:/minha-conta/orcamentos]
3. Vagas de emprego: publicação em poucos minutos para encontrar profissionais da região. No menu, é `Vagas de Emprego`. Veja [criar uma vaga nova](criar-vaga-nova.md) e [gerenciar as vagas](gerenciar-vagas-da-empresa.md). [t=48] [guia=menu:/minha-conta/vagas]
4. Classificados: anúncio do estoque para compradores da região. No menu, é `Classificados`. Veja [publicar um anúncio novo](publicar-anuncio-novo.md) e [acompanhar e editar anúncios próprios](gerenciar-anuncios-proprios.md). [t=57] [guia=menu:/minha-conta/classificados]
5. Eventos: o evento entra na agenda da cidade e em destaque na página inicial. No menu, é `Agenda de Eventos`. Veja [divulgar um evento](divulgar-evento.md). [t=61] [guia=menu:/minha-conta/eventos]
6. Banners de publicidade: a marca nos espaços mais vistos, com toque que leva ao WhatsApp, site ou rede social. No menu, é `Banners Publicitários`. Veja [contratar um banner publicitário](contratar-banner-publicitario.md). [t=72] [guia=menu:/minha-conta/publicidade]
7. Matéria patrocinada: a empresa vira notícia, com a credibilidade de conteúdo jornalístico. No menu, é `Notícias`. Veja [contratar matéria patrocinada](contratar-materia-patrocinada.md). [t=78] [guia=menu:/minha-conta/materia-patrocinada]
8. Coluna de especialista: para profissionais liberais publicarem artigos e serem referência na região. É outra área (de colunista), não faz parte do menu da empresa. Veja [virar colunista](colunista/virar-colunista.md) e [publicar artigo como colunista](colunista/publicar-artigo-como-colunista.md). [t=87] [guia=fora]

## resultado
você sabe quais são as oito formas de anunciar apresentadas no vídeo e abre o artigo certo para cada uma.

## fontes
- `frontend/src/app/minha-conta/ClienteSidebar.tsx:60-225` — itens do menu da área do cliente.
- `frontend/src/app/minha-conta/secoes-do-cliente.ts` — nomes e rotas das seções (`ROTULO_PADRAO`, `MODULOS_FORA_DA_EMPRESA` inclui Artigos).

## lacunas
os itens de menu aparecem conforme o plano e os módulos ligados no portal; `Guia Comercial` e outros rótulos podem vir do servidor. Cada passo desta lista é uma opção, não uma sequência obrigatória.
