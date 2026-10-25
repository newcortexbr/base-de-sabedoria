---
id: cliente-geral-visao-geral-area-cliente
titulo: "visão geral da Área do Cliente do Portal da Cidade"
publico:
  - cliente
modulo: geral
categoria: geral
aba: Início
tipo_problema:
  - orientacao
status: rascunho-documental
revisado_em: 2026-10-24
validacao: video
videos:
  - UwPhKSt-mvM
---

## objetivo

conhecer onde fica cada coisa na área do cliente.

## pré-requisitos

- estar logado na área do cliente.

## explicação

- ao entrar, você cai na tela `Início`: um resumo do que você publica, com um cartão por área contratada (Guia Comercial, Agenda de Eventos, Vagas de Emprego, Banners Publicitários e Classificados), mostrando quantos itens estão no ar e quantos aguardam aprovação. Em cada cartão, `Gerenciar` leva à área e `Mudar plano` (ou `Melhorar plano`, no Grátis) mostra as outras opções. Avisos importantes, como pedidos de orçamento novos e `Esperando pagamento`, aparecem no topo.
- o menu da esquerda é dividido em grupos. Ao lado de cada item, uma etiqueta mostra o plano que você tem na área.
- `O que eu publico`:
  - `Guia Comercial`: a ficha da empresa no guia da cidade, com contatos, fotos e as páginas de serviços, cardápio ou catálogo.
  - `Cupons`: aparece logo abaixo do Guia só quando o plano do Guia libera o cupom.
  - `Agenda de Eventos`: shows, festas, cursos e qualquer evento da empresa.
  - `Vagas de Emprego`: publicar vagas e receber candidatos.
  - `Banners Publicitários`: contratar e acompanhar os banners nos espaços do portal.
  - `Notícias`: contratar uma matéria patrocinada sobre a empresa.
  - `Classificados`: anunciar produtos e serviços, como imóveis, veículos e equipamentos.
  - `Artigos`: publicar textos como especialista.
- `Orçamentos` (só aparece se o plano libera): em `Pedidos recebidos` chegam os pedidos de quem procura o seu serviço; o número no item mostra quantos são novos.
- `Delivery` (só aparece se a empresa tem delivery): `Pedidos`, a fila de pedidos da loja.
- `Minha conta`: `Minha empresa` guarda o logo, a descrição e os contatos que valem para tudo o que você publica; `Planos e assinaturas` mostra os planos, a data de renovação e o que mais dá para contratar; `Segurança` troca a senha.
- contas de colunista, anunciante pessoa física e jornalista têm menu menor: colunista (`Artigos`, `Planos de Artigos`, `Meus dados`, `Segurança`), pessoa física (`Classificados`, `Planos de Classificados`, `Meus dados`, `Segurança`) e jornalista (`Notícias`, `Autor`, `Segurança`).

## passos

1. No menu da esquerda, clique em `Início` para ver o resumo do que você publica. [t=10] [guia=menu:/minha-conta]
2. Em um cartão de área, clique em `Gerenciar` para abrir a área. [t=22] [guia=inicio.gerenciar]
3. Para ver outras opções de plano, clique em `Mudar plano` no cartão. [t=25] [guia=inicio.mudar-plano]
4. Para ver os pedidos de orçamento, clique em `Pedidos recebidos`, na parte `Orçamentos` do menu. [t=90] [guia=menu:/minha-conta/orcamentos]
5. Para mudar logo, descrição e contatos, clique em `Minha empresa`, na parte `Minha conta` do menu. [t=106] [guia=menu:/minha-conta/minha-empresa]
6. Para ver seus planos, clique em `Planos e assinaturas`. [t=114] [guia=menu:/minha-conta/planos]
7. Para trocar a senha, clique em `Segurança`. [t=118] [guia=menu:/minha-conta/seguranca]
8. Para ajuda, use as opções de suporte no canto inferior direito da tela: um assistente de inteligência artificial responde na hora e, se ele não resolver, você é encaminhado ao WhatsApp do suporte do portal. [t=122] [guia=fora]

## resultado

você sabe onde achar cada área. O passo a passo de cada tela está nos outros artigos.

## fontes

- `portal-cidade/frontend/src/app/minha-conta/ClienteSidebar.tsx:104-222` — grupos e itens do menu; `Cupons` e `Orçamentos` condicionais.
- `portal-cidade/frontend/src/app/minha-conta/_inicio/HeroiDoInicio.tsx:51-52,197-200` — cartões, `Gerenciar`, `Mudar plano`/`Melhorar plano`.
- `portal-cidade/frontend/src/app/minha-conta/_inicio/BlocoAvisos.tsx:87` — `Esperando pagamento`.
- `portal-cidade/frontend/src/app/minha-conta/perfil-da-area.ts:36-84` — menus por perfil.
- `portal-cidade/frontend/src/app/minha-conta/secoes-do-cliente.ts:63-66,222-262` e `portal-cidade/frontend/src/lib/modulos.ts:44-59` — nomes das áreas.

## lacunas

- o botão de suporte no canto inferior direito vem do vídeo; a posição na tela não foi conferida no código (o componente é `SuporteFlutuante`).
- Artigos e Notícias não têm cartão no `Início` (só no menu).
- a descrição de cada área é a do vídeo; o conteúdo das telas está nos outros artigos.
