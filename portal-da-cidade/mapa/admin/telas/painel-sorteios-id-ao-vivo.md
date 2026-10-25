# /painel/sorteios/[id]/ao-vivo (Sortear ao vivo)

Arquivo: `app/painel/sorteios/[id]/ao-vivo/page.tsx` (208 linhas)

## o que você vê
Palco do sorteio ao vivo, com link `Voltar para Sorteios`. No palco: título do sorteio, "N participantes · X/Y ganhadores", botão `Tela cheia`, a roleta (mostra nomes ou números, conforme o sorteio) e o botão grande `Sortear 1º ganhador` (depois 2º, 3º…). Ao clicar há uma contagem regressiva e a roleta gira até o ganhador, com confete. Fora de hora aparece o aviso "O sorteio só pode ser feito depois do fim das inscrições." ou "Todos os ganhadores foram sorteados." Abaixo, uma linha por ganhador: posição, número da sorte, nome, WhatsApp, lista `Entrega do prêmio` (Aguardando contato, Contatado, Prêmio entregue, Não respondeu), link `Chamar no WhatsApp` e `Não respondeu? Sortear outro no lugar`.

## rota e gate
- `/painel/sorteios/<id>/ao-vivo`. client, `Header` "Sortear ao vivo". só administrador; módulo `sorteios` (prefixo da rota).

## como chegar
- menu Conteúdo > `Sorteios` > `Sorteios`, botão `Realizar sorteio` (ou `Ganhadores` em sorteio já sorteado).

## o que faz
- sorteia cada ganhador, acompanha a entrega do prêmio e troca ganhador que não responde.

## ações e campos
- `Sortear Nº ganhador`: só com o sorteio encerrado e ainda faltando ganhadores.
- `Tela cheia`: projeta o palco; se o navegador não permitir mostra "Não foi possível abrir a tela cheia neste navegador."
- `Entrega do prêmio` grava na hora.
- `Não respondeu? Sortear outro no lugar`: o ganhador anterior vira "Não respondeu" e sai da lista; o novo é sorteado na roleta.

## estados
- "Carregando sorteio…"; "Erro ao carregar o sorteio: …"; botões desativados enquanto sorteia.

## possíveis problemas
- o resultado vem do servidor, não da animação: a roleta só mostra o ganhador já gravado.
- substituir ganhador é definitivo para o antigo.
- antes do fim das inscrições o botão não aparece; antecipe pela lista (`Realizar sorteio` > `Realizar agora`).
