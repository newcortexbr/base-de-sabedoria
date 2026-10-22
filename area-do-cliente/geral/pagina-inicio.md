---
id: ac-inicio-o-que-aparece
titulo: "o que aparece na página Início"
publico:
  - cliente
modulo: geral
aba: Início
tipo_problema:
  - pagina-inicial
  - inicio
  - resumo
  - o-que-e-isso
  - painel
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
videos:
  - dbFUi5ENvOg
---

## objetivo
entender cada parte da página `Início` e o que fazer a partir dela.

## pré-requisitos
- ter entrado na Área do Cliente.

## explicação
o `Início` mostra um negócio por vez. Com mais de um negócio, escolha qual no seletor do topo (`Negócio selecionado`); a opção `Ver meus negócios…` leva à lista completa.

de cima para baixo, você pode ver:
- a saudação "Olá, <seu nome>." e uma frase com a situação: "Vamos colocar seu portal de <cidade> no ar.", "Seu portal está pronto. Vamos fazê-lo crescer?" ou "Seu portal em <cidade> está suspenso. Regularize para reativar.". Ao lado, a pílula `Portal no ar`, `Instalação pendente` ou `Portal suspenso`.
- um aviso de pagamento, quando há cobrança vencida ("<Mensalidade ou Reserva territorial> vencida em <dia>.") ou negócio suspenso, com `Pagar agora` e `Falar com o suporte` (veja `ac-pagar-cobranca-pendente`).
- o quadro da instalação, enquanto o portal não está no ar, com o botão do próximo passo (por exemplo `Iniciar instalação`, `Ver o que fazer` ou `Conferir e confirmar`).
- `Comece por aqui · Start`: o tour em vídeo (`Assistir ao tour`) e `Ver todas as aulas do Start` (veja `ac-treinamento-start`).
- a busca `Qual é a sua dúvida?` (`Busca no treinamento`), que procura nas aulas (veja `ac-treinamento-buscar`).
- `Seu portal e seus links`: o domínio, os botões `Painel administrativo` e `Ver portal` e os links do portal, depois que ele é publicado.
- `Explore os treinamentos`: atalhos para alguns módulos.
- `Próxima live`: a próxima live marcada (veja `ac-lives-ver-agenda`).
- `Seus pagamentos`: a mensalidade e a reserva territorial, com valor, vencimento e situação (`Em dia`, `Vence em <dia>` ou `Vencida há N dias`).

## passos
1. No menu da esquerda, clique em `Início`.
2. Se tiver mais de um negócio, escolha a cidade no seletor do topo.
3. Clique no botão do quadro que você quer usar.

## resultado
você vê o resumo do negócio escolhido e chega ao próximo passo com um clique.

## desvios
- "Você ainda não tem nenhum negócio ativo. Se esperava ver algo aqui, fale com o suporte.": a conta não tem negócio (veja `ac-negocio-nao-aparece`).
- "O painel administrativo e os links do seu portal ficam disponíveis após a publicação.": o portal ainda não está no ar.
- "Os acessos ficam indisponíveis enquanto o portal estiver suspenso.": o negócio está suspenso.
- "Não foi possível consultar seus pagamentos agora.": recarregue a página depois de alguns minutos.
- "Sem assinatura ativa": aquela cobrança ainda não foi criada para o negócio (comum antes da instalação). Confira em `Pagamentos`.
- o sino do topo (`Notificações`) só leva a `Meus negócios`; não há lista de notificações.
- o `Início` fala em "Atraso superior a 5 dias" fixo. O prazo que vale é o mostrado em `Pagamentos` (veja `ac-atraso-e-suspensao`).

## quando pedir ajuda
se o `Início` mostrar uma situação que não bate com a de `Meus negócios` ou de `Pagamentos`, abra um chamado em `Suporte` com um print.

## fontes
- `src/app/(cliente)/inicio/page.tsx:106` — seletor de negócio; `:111` — sino `Notificações`; `:127` — sem negócio; `:202`–`:221` — saudação e pílulas; `:225`–`:247` — aviso de pagamento; `:257`–`:281` — quadro da instalação; `:313`–`:346` — Start e tour; `:354` — busca; `:403`–`:428` — `Seu portal e seus links`; `:435` — `Explore os treinamentos`; `:476` — `Próxima live`; `:491`–`:525` — `Seus pagamentos`.
- `src/app/(cliente)/inicio/SeletorNegocio.tsx:28` — `Negócio selecionado`, `Ver meus negócios…`.

## lacunas
tela não validada no navegador; a ordem visual dos quadros em telas pequenas pode ser outra. O que significa "Sem assinatura ativa" foi deduzido do código (não há cobrança do tipo para o negócio).
