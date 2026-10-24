# /painel/melhores-da-cidade (Melhores da Cidade)

Arquivo: `app/painel/melhores-da-cidade/page.tsx` (373 linhas)

## o que você vê
Painel das votações em que o público escolhe os melhores comércios do Guia ("Votações em que o público escolhe os melhores comércios do Guia."). Botão `Criar votação` no alto. Com votações: campo "Buscar pelo nome — ex.: Natal ou Melhor Pizza" e filtros `Todas`, `No ar`, `Agendadas`, `Encerradas` (cada um com a contagem). Em "Ativas e agendadas", cada votação é um cartão com a situação (`AGENDADA`, `NO AR AGORA`, `PLACAR CONGELADO NO SITE`), título, período, competições, números (`votos`, `hoje`, `para terminar`; se agendada, quanto falta `para começar`), barra de andamento e quem está liderando. Botões do cartão no ar: `Ver placar`, `Votos suspeitos`, `Encerrar agora`; sempre `Ver no site`; ícones lápis (`Editar`) e lixeira (`Excluir`). Em "Encerradas": cartões com data, número de competições e fotos dos campeões. Sem nenhuma votação: "Nenhuma votação acontecendo" com 3 passos (escolha as datas, monte as competições, o público vota).

## rota e gate
- `/painel/melhores-da-cidade`. client, `Header` "Melhores da Cidade", layout próprio (`layout.tsx`, estilo `melhores.css`). só administrador; módulo `melhores` (`lib/painel-menu.ts:46,116`).

## como chegar
- menu lateral, parte Conteúdo: item `Melhores da Cidade` (`Sidebar.tsx:242`).

## o que faz
- lista, edita, encerra e exclui votações; leva ao placar e aos votos suspeitos.

## ações e campos
- `Editar`: janela "Editar votação": `Nome da votação` (opcional; vazio usa "Os Melhores da Cidade" + ano do fim), `Começa em` (só muda se agendada; "Já começou: não muda mais."), `Termina em`, nome de cada competição (participantes não mudam). `Salvar` / `Cancelar`; se no ar, também `Encerrar agora`.
- `Encerrar agora`: "Encerrar a votação agora?" — para na hora e os campeões aparecem no site; não dá para desfazer. Botão `Encerrar e mostrar campeões`.
- `Excluir`: o texto muda conforme a situação; no ar apaga a votação e todos os votos; encerrada apaga resultado e campeões do site, home, Guia e área dos clientes. Sem desfazer.
- ordem: no ar primeiro (a que termina antes no topo), depois agendadas.

## estados
- "Carregando…"; erro em alerta vermelho; busca sem resultado "Nada encontrado com esse nome."; vazio por filtro "Nenhuma votação no ar ou agendada." / "Nenhuma votação encerrada ainda."; sucessos "Votação salva", "Votação encerrada", "Votação excluída".

## possíveis problemas
- o placar some do site 1 hora antes do fim (estado "placar congelado"); no painel o número continua completo.
- encerrar e excluir são definitivos.
- não há botão de placar nas votações agendadas (só depois que entram no ar).
