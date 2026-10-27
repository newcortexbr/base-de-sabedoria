---
id: usuario-votar-melhores-da-cidade
titulo: "votar em Melhores da Cidade"
publico:
  - usuario
modulo: melhores-da-cidade
categoria: melhores-da-cidade
aba: nao-se-aplica
tipo_problema:
  - votar
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - Be_8j63JLwI
---

## objetivo
votar no favorito de cada categoria em Melhores da Cidade. Não precisa de cadastro.

## pré-requisitos
- haver uma votação aberta: a página mostra `Competições em Andamento`. Fora do período, a página mostra os últimos campeões.

## explicação
- o vídeo diz que dá para votar quantas vezes quiser; quanto mais votos, mais perto do topo o favorito fica.
- quando o cronômetro zera, a votação termina e quem tiver mais votos leva o troféu de melhor da cidade.
- o ranking é atualizado na página e um cronômetro mostra quanto falta para a votação acabar. Na última hora o placar fica congelado: os votos continuam valendo, mas as posições ficam secretas até o resultado.

## passos
1. No menu do topo do portal, clique em `Melhores da Cidade`. [guia=topo.melhores] [t=8]
2. Para achar a empresa direto, escreva o nome no campo `Procure a empresa em que você quer votar...`. [guia=melhores.busca] [t=12]
3. Ou, em `Todas as competições`, abra a categoria (por exemplo, restaurante, pousada ou oficina) em `Ver todos e votar`. [guia=melhores.competicao] [t=12]
4. Encontre o seu favorito e clique em `Votar`. [guia=melhores.votar] [t=14]
5. Se aparecer a janela `Confirme seu voto`, faça a verificação de segurança e clique em `Confirmar voto`. [guia=melhores.confirmar]
6. Espere `Voto registrado com sucesso!`. Depois de uns segundos o portal volta à página inicial; `Ir agora` vai na hora e `Chamar amigos` abre o WhatsApp com um convite. [guia=melhores.sucesso]

## resultado
o voto é contado no ranking do favorito.

## desvios
- muitos votos em pouco tempo mostram `Muitos votos em pouco tempo. Aguarde um instante e tente de novo.`
- fechar a janela de sucesso cancela a ida para a página inicial; para votar de novo, volte a Melhores da Cidade.
- quem recebe um link de convite vê a janela `Votar em ...` com o nome da empresa.

## fontes
- `portal-cidade/frontend/src/app/melhores-da-cidade/MelhoresClient.tsx:24,144-215,244-300,345-376`
- `portal-cidade/frontend/src/app/melhores-da-cidade/SecoesVotacao.tsx:36-80,206-278`
- `portal-cidade/frontend/src/app/melhores-da-cidade/melhores-util.ts:80-94`
- `portal-cidade/frontend/src/components/layout/HeaderClient.tsx:597`
- vídeo `Be_8j63JLwI`.

## lacunas
não verificado em navegador. O limite de votos por pessoa e por período é regra do servidor (`api.melhores.votar`), não lida nesta rodada; a frase "quantas vezes quiser" vem do vídeo e do aviso de placar congelado (`MelhoresClient.tsx:390`). A verificação de segurança só aparece quando o portal tem a chave configurada.
