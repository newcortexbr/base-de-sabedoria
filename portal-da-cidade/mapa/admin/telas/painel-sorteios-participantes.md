# /painel/sorteios/participantes (Participantes de Sorteios)

Arquivo: `app/painel/sorteios/participantes/page.tsx` (195 linhas)

## o que você vê
Tabela de todas as pessoas inscritas nos sorteios, com colunas `Nome`, `WhatsApp`, `Número da sorte`, `Sorteio`, `Inscrito em` e `Ganhador` (selo "Ganhador" ou "Não"). No alto: campo `Buscar` ("Nome ou WhatsApp"), lista `Sorteio` ("Todos os sorteios" ou um sorteio específico), caixa `Só ganhadores` e os botões `CSV` e `Excel` para baixar a lista. Abaixo da tabela, paginação com `Anterior`, "Página X de Y" e `Próxima` (20 por página). Sem inscritos: "Ainda não há participantes"; com filtros sem resultado: "Nenhum participante com esses filtros".

## rota e gate
- `/painel/sorteios/participantes`. client, `Header` "Participantes de Sorteios". só administrador; módulo `sorteios`.

## como chegar
- menu lateral, parte Conteúdo: grupo `Sorteios` > `Participantes de Sorteios`; ou na lista de sorteios, botão `Participantes` de um sorteio aberto (abre já filtrado).

## o que faz
- consulta e exporta os inscritos.

## ações e campos
- filtros: busca (espera ~0,35 s), sorteio, só ganhadores; a página volta para a 1 ao mudar filtro.
- `CSV` e `Excel` baixam todos os resultados do filtro atual (não só a página), em `participantes-sorteios.csv` / `.xlsx`; desativados sem resultado. Células com fórmula são neutralizadas.
- tela só de leitura: não edita nem exclui inscrito.

## estados
- "Carregando participantes…"; "Erro ao carregar participantes: …"; botões de exportar desativados durante o download.

## possíveis problemas
- se a lista de sorteios do filtro não carregar, a lista fica só com "Todos os sorteios".
- WhatsApp e nome são dados pessoais de visitantes: use só para entregar o prêmio.
