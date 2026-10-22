---
id: pj-filtros-termo-e-cnae
titulo: "filtrar por termo ou por CNAE (ramo de atividade)"
publico:
  - cliente
modulo: lista
aba: Gerar Lista de Empresas
tipo_problema:
  - cnae
  - termo-de-busca
  - nicho
  - ramo-de-atividade
  - razao-social
  - nome-fantasia
  - dados-pj
status: rascunho-documental
revisado_em: 2026-10-21
validacao: codigo-e-video
videos:
  - IKdKLgi-e94
produto: dados-pj
---

## objetivo
escolher o tipo de empresa da lista pelo nome ou pelo CNAE.

## pré-requisitos
- estar na tela `Gerar Lista de Empresas`.

## explicação
- `Buscar por termo (razão social ou fantasia)`: traz empresas com o termo na razão social ou no nome fantasia. ex.: `barbearia` traz só quem tem "barbearia" no nome; um MEI registrado só com o nome do dono não vem.
- com 3 letras ou mais, cada palavra é buscada pelo começo (`barbear` acha "barbearia"). com várias palavras, vem quem tiver qualquer uma delas. use poucas palavras.
- não use o termo para procurar uma empresa específica: o Dados PJ gera listas.
- `CNAEs`: código da atividade principal da empresa na Receita. um CNAE pode juntar vários nichos (o de barbearia inclui cabeleireiros e manicures).
- pode marcar vários CNAEs. a janela `Selecionar CNAEs` busca por código ou descrição e mostra até 150 resultados por vez; refine a busca se não achar.
- dica do vídeo: se não souber o CNAE, pesquise no Google "qual CNAE de ..." e depois busque o número na janela.
- termo e CNAE juntos: a empresa precisa ter o CNAE e o termo no nome.
- deixar os dois vazios traz todas as atividades das cidades escolhidas.

## passos
1. digite o termo no campo de busca, ou
2. clique em `CNAEs`, busque por código ou descrição, clique nos itens desejados e em `Salvar`.
3. para tirar um CNAE, clique no `×` dele; `Limpar` tira todos.

## resultado
a lista traz só o tipo de empresa que você quer.
