# /painel/sorteios (Sorteios)

Arquivo: `app/painel/sorteios/page.tsx` (314 linhas)

## o que você vê
Lista dos sorteios do portal ("Crie, acompanhe e sorteie ao vivo os prêmios do portal."). Botão `Novo sorteio`. Quatro números: `Abertos agora`, `Participantes somados`, `Aguardando sorteio` e `Ganhadores sorteados`. Abas `Todos`, `Abertos`, `Para sortear`, `Sorteados`, `Rascunhos` e busca "Buscar pelo título". Cada sorteio mostra capa, título, situação (rascunho, breve, aberto, encerrado, sorteado), datas ("Inscrições até … · Sorteio em …"), ganhadores (ex.: 1/3), inscritos e uma barra de ganhadores sorteados. Botões por situação: `Realizar sorteio` (aberto ou encerrado), `Participantes` (aberto), `Ganhadores` (sorteado), `Publicar` (rascunho); sempre lápis (`Editar`) e lixeira (`Excluir`); fora de rascunho, `Copiar link`. Sem sorteios: "Você ainda não criou nenhum sorteio" e `Criar primeiro sorteio`.

## rota e gate
- `/painel/sorteios`. client, `Header` "Sorteios". só administrador; módulo `sorteios` (`lib/painel-menu.ts:84,121`).

## como chegar
- menu lateral, parte Conteúdo: grupo `Sorteios` > `Sorteios` (`Sidebar.tsx:225-231`).

## o que faz
- cria, publica, edita, exclui e dispara o sorteio ao vivo.

## ações e campos
- `Novo sorteio` / `Editar` abrem a janela "Novo sorteio" / "Editar sorteio": `Capa do sorteio`, `Título`, `Descrição do prêmio`, `Regras (opcional)`, `Vídeo do YouTube (opcional)`, `Link da live no YouTube (opcional)`, `Inscrições de` (vazio abre ao publicar), `Inscrições até`, `Sorteio em`, `Quantidade de ganhadores`, `Oferecido por (opcional)` (empresa do Guia), `A roleta mostra` (`Nomes` ou `Números`), caixa `Mostrar a contagem de participantes no site`. Botões `Salvar rascunho` e `Publicar`. Depois que alguém se inscreveu, início das inscrições, quantidade de ganhadores e roleta não mudam.
- `Publicar` (na lista, em rascunho): "Sorteio publicado".
- `Realizar sorteio`: abre `/painel/sorteios/<id>/ao-vivo`. Se a data do sorteio ainda não chegou, pergunta "Realizar o sorteio antes da data?" e, confirmando, encerra as inscrições agora e a data passa a ser agora (`Realizar agora`).
- `Excluir`: "Excluir sorteio" — apaga também participantes e ganhadores.
- `Copiar link`: copia `/sorteios/<slug>` do portal.

## estados
- "Carregando sorteios…"; "Erro ao carregar sorteios: …"; "Nenhum sorteio encontrado com esse filtro."; sucessos "Sorteio salvo", "Sorteio publicado", "Sorteio excluído".

## possíveis problemas
- sorteio em rascunho não aparece no site nem tem link para copiar.
- antecipar o sorteio fecha as inscrições: ninguém mais participa.
- não li o formulário completo do `ModalSorteio.tsx` (regras de data); os campos acima vêm do rótulo de cada um.
