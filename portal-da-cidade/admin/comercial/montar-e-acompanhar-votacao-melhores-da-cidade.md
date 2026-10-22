---
id: montar-e-acompanhar-votacao-melhores-da-cidade
titulo: "montar e acompanhar uma votação Melhores da Cidade"
publico:
  - admin
modulo: melhores da cidade
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-21
validacao: video
videos:
  - ajzmuupRJMM
---

## objetivo

aqui você cria uma votação em que o público escolhe os melhores comércios do Guia, acompanha o placar e decide o que fazer com votos suspeitos.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.
- Ter empresas cadastradas no Guia, nas categorias que vão disputar.

## explicação

- Cada votação tem uma ou mais competições. Cada competição é uma categoria do Guia e, se você quiser, uma subcategoria.
- No site, o visitante vota quantas vezes quiser, sem cadastro. Ao votar, o portal pede para confirmar o voto e passar por uma verificação de segurança, que impede votos automáticos.
- Quem tiver mais votos quando o cronômetro zerar leva o troféu. O campeão de cada disputa fica no site e no bloco da home até a próxima votação terminar.
- Na última hora, o placar já não aparece no site. O painel continua mostrando os números completos.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Melhores da Cidade`. [guia=menu:/painel/melhores-da-cidade]
2. Na lista, busque uma votação pelo nome e use as abas para filtrar: todas, no ar, agendadas e encerradas. [guia=menu:/painel/melhores-da-cidade]
3. Para criar, clique em `Criar votação`. São dois passos: datas e competições, e revisar. [guia=menu:/painel/melhores-da-cidade]
4. Dê um nome à votação (é opcional) e escolha quando ela começa e quando termina. [guia=menu:/painel/melhores-da-cidade]
5. Monte as competições: escolha a categoria e, se quiser, uma subcategoria. O nome é sugerido sozinho, e o aviso mostra como vai aparecer no site e quantas empresas vão concorrer. [guia=menu:/painel/melhores-da-cidade]
6. Clique em `Adicionar competição`. Repita para cada disputa. [guia=menu:/painel/melhores-da-cidade]
7. Clique em `Próximo`, revise e crie a votação. [guia=menu:/painel/melhores-da-cidade]
8. Para acompanhar uma votação no ar, olhe o cartão dela: nome, período, competições, total de votos, votos de hoje, tempo que falta e, no quadro `Liderando`, quem está em primeiro em cada disputa. [guia=menu:/painel/melhores-da-cidade]
9. Clique em `Ver placar` para ver os números completos: votos válidos, tempo que falta, votos anulados e alertas esperando decisão. A tabela mostra cada participante, a distância para o primeiro colocado, o total de votos e os votos de hoje. Quem recebe votos estranhos ganha a etiqueta suspeito. [guia=menu:/painel/melhores-da-cidade]
10. Clique em `Votos suspeitos` para ver os alertas do sistema sobre votos que não parecem de gente de verdade. Para cada um, escolha `Anular` (tira esses votos do placar) ou `Manter` (deixa como está). Dá para desfazer a decisão até a votação terminar. [guia=menu:/painel/melhores-da-cidade]
11. Para mudar a votação, clique no lápis. Com ela no ar, o início não muda mais, mas dá para estender ou encurtar o fim e trocar o nome das competições. [guia=menu:/painel/melhores-da-cidade]
12. Para terminar antes da hora, clique em `Encerrar agora` (no cartão ou na janela de edição). [guia=menu:/painel/melhores-da-cidade]

## resultado

a votação aparece no site com cronômetro e botão de votar ao lado de cada empresa. Quando termina, o cartão dela, nas encerradas, mostra o resultado final: votos válidos, competições, votos anulados e o pódio com o campeão de cada disputa.

## desvios

- O botão `Ver no site` abre a página pública da votação.
- A lixeira do cartão exclui a votação.
- Um voto anulado só volta ao placar se a decisão for desfeita antes de a votação terminar.

## quando pedir ajuda

peça ajuda se a votação não aparecer no site, se o placar parecer errado ou se houver dúvida sobre anular votos. Não peça à IA para anular votos ou encerrar votações.

## fontes

- vídeo `ajzmuupRJMM`.
- `portal-cidade/frontend/src/app/painel/melhores-da-cidade/` (rótulos conferidos no código).

## lacunas

não verificado visualmente no navegador; passos tirados do vídeo de suporte e dos rótulos do código. Não foram conferidas as regras de duração mínima da votação. Inferência, não dita no vídeo: o pré-requisito de ter empresas cadastradas nas categorias e a orientação de não pedir à IA para anular votos.
