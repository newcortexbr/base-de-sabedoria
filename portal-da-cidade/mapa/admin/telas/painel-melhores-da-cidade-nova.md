# /painel/melhores-da-cidade/nova (Criar votação)

Arquivo: `app/painel/melhores-da-cidade/nova/page.tsx` (323 linhas)

## o que você vê
Assistente de dois passos, "Dois passos e a votação está pronta.", com link `Voltar`. Passo 1 "Datas e competições": `Nome da votação (opcional)` (ex.: Melhores do Natal; vazio usa "Os Melhores da Cidade" + ano do fim), `Começa em` e `Termina em` (data e hora). Com as duas datas aparece o resumo: quanto tempo dura, quando o placar se esconde no site (1 hora antes do fim) e a hora em que os campeões aparecem sozinhos. Abaixo, "Competições da votação": lista das já adicionadas (nome, categoria, empresas, lixeira) e o bloco "Nova competição" com `Categoria`, `Subcategoria` ("Todas" disputa a categoria inteira), `Nome da competição` (sugerido sozinho) e a prévia "No site vai aparecer…". Botões `Adicionar competição` e `Próximo`. Passo 2 "Revisar": nome, período, total de empresas e competições; botões `Anterior` e `Criar votação`.

## rota e gate
- `/painel/melhores-da-cidade/nova`. client, `Header` "Criar votação". só administrador; módulo `melhores`.

## como chegar
- menu Conteúdo > `Melhores da Cidade`, botão `Criar votação` (também aparece no estado vazio).

## o que faz
- cria uma votação com datas e competições; volta para a lista com "Votação criada".

## ações e campos
- regras: fim depois do começo ("O fim precisa ser depois do começo."); pelo menos 1 competição ("Adicione pelo menos uma competição."); no máximo 30 competições; cada competição precisa de 2 empresas ou mais; só entram categorias do Guia com 2 empresas ou mais, e subcategorias com menos de 2 aparecem como "N · precisa de 2" e não podem ser escolhidas.
- erro do servidor volta ao passo 1 com a mensagem nos campos.

## estados
- "Carregando…"; "Nenhuma categoria do Guia com empresas ativas. Cadastre empresas no Guia Comercial para montar competições."; botão "Criando…".

## possíveis problemas
- nenhuma categoria aparece: faltam empresas ativas no Guia (mínimo 2 por categoria/subcategoria).
- o nome da competição vem sugerido; apagar e deixar vazio dá "Escreva o nome da competição.".
