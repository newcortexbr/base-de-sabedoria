# /painel/planos (Meus Planos)

Arquivos: `app/painel/planos/page.tsx`, `hub.css`

## rota e gate
- `/painel/planos`. client, `Header`. gate `PainelGuard`; a rota não está em `lib/painel-menu.ts`, sem gate de módulo.

## o que faz
- visão geral dos planos comerciais que o admin vende aos clientes do portal, por seção (vagas, guia, classificados, eventos, blog, notícias, turismo, publicidade). só definição e gestão: nome, preço, duração (comentário `:3-15`).
- seções e itens vêm do catálogo do servidor, nada fixo na tela; o ícone é o único dado local, com fallback (`ICONE_DA_SECAO`, `:30-39`).

## o que exibe
- indicadores animados (contagem de seções, "seções sem nada à venda" em alerta etc.).
- um cartão por seção (`/painel/planos/<chave>`) com até 5 planos e o que está à venda; "à venda" = `ativo`, ou preço > 0 nas seções sem `ativo` (`estaAVenda`, `:56-58`).
- bloco "Espaço de publicidade (banners)" para seções do tipo banner, com "espaços com preço".

## apis
- `adminApi.comercial.catalogo.listar` (GET `/painel/<slug>/comercial/catalogo/`, `lib/admin-api.ts:1078`) e `comercial.planos.listar` (`:1081`).

## estados
- carregando; `data-testid=erro-catalogo` e `erro-planos` (erros separados: se só os planos falham os cartões ficam `sem-dados`); vazio "Nenhuma seção vendável neste portal ainda."

## em nome do cliente
- esta tela não age em nome do cliente. o que o admin define aqui é o preço que o cliente verá ao contratar. mudanças valem para novas contratações; o efeito em contratações já ativas não é tratado na tela (hipótese, depende do backend).

## possíveis problemas
- fato: o comentário `:12-14` afirma que nenhuma rota pública lê `PlanoComercialAdmin` e por isso não há revalidação; se a página pública de contratação passou a ler planos, o preço novo pode demorar (hipótese, não verifiquei).
- fato: `Contador` anima com `requestAnimationFrame` e respeita `prefers-reduced-motion` (ok).

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-planos.png](../prints/painel-planos.png) · dados brutos: [json](../prints/json/painel-planos.json)
- aberta em `/painel/planos`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1147,16,109,34)
- [menu] "23 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Artigos · Orçamentos Online · A Voz do Povo · Melhores da Cidade · Banners Publicitários …" — menu lateral, no topo da página, à esquerda (lista de 23 itens em coluna) (10,18,255,871)
- [título] "Meus Planos" — topo, no topo da página, à esquerda (300,19,110,28)
- [título] "Meus Planos" — conteúdo, faixa larga na parte de cima (300,99,956,32)
- [título] "Planos por seção do portal" — conteúdo, na parte de cima, à esquerda (300,348,232,20)
- [link] "NotíciasNada à venda aindaO plano de Notícias está sem preço. Enquanto" — conteúdo, na parte de cima, ao centro (300,379,308,209)
- [link] "Vagas de EmpregoNada à venda aindaO plano de Vagas de Emprego está sem" — conteúdo, na parte de cima, ao centro (624,379,308,209)
- [link] "ClassificadosNada à venda aindaO plano de Classificados está sem preço" — conteúdo, na parte de cima, à direita (948,379,308,209)
- [título] "Notícias" — conteúdo, no meio da tela, ao centro (373,396,125,24)
- [título] "Vagas de Emprego" — conteúdo, no meio da tela, ao centro (697,396,143,24)
- [título] "Classificados" — conteúdo, no meio da tela, à direita (1021,396,125,24)
- [link] "Guia Comercial1 plano à vendaGrátis/mêsR$ 0,00Plano A/mêsfora de venda" — conteúdo, no meio da tela, ao centro (300,605,308,238)
- [link] "Agenda de EventosNada à venda aindaO plano de Agenda de Eventos está s" — conteúdo, no meio da tela, ao centro (624,605,308,238)
- [link] "ArtigosNada à venda aindaO plano de Artigos está sem preço. Enquanto e" — conteúdo, no meio da tela, à direita (948,605,308,238)
- [título] "Guia Comercial" — conteúdo, no meio da tela, ao centro (373,622,117,24)
- [título] "Agenda de Eventos" — conteúdo, no meio da tela, ao centro (697,622,148,24)
- [título] "Artigos" — conteúdo, no meio da tela, à direita (1021,622,125,24)
- [selo] "fora de venda" — conteúdo, no meio da tela, ao centro (406,722,80,20)
- [selo] "fora de venda" — conteúdo, no meio da tela, ao centro (406,759,80,20)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
- [título] "Espaço de publicidade (banners)" — conteúdo, no meio da tela, ao centro (300,874,265,20)
- [link] "PublicidadeCada posição de banner do portal tem preço próprio, por sem" — conteúdo, faixa larga mais abaixo (rolando a página) (300,906,956,121)
- [título] "Publicidade" — conteúdo, no fim da página, ao centro (324,930,373,29)

## o que você vê
Resumo do que o seu portal vende aos clientes, seção por seção; clique numa seção para definir preços.
- planos à venda: quantos planos estão disponíveis para contratar, somando todas as seções.
- seções vendendo: quantas seções têm pelo menos um plano à venda, do total.
- seções sem nada à venda: seções onde ninguém consegue contratar (fica em alerta quando é maior que zero).
- espaços de banner com preço: quantas posições de banner já têm preço, do total.
- cartão de cada seção: nome da seção, quantos planos estão à venda e a lista de planos com nome, período (semanal, mensal, único etc.) e preço. "fora de venda" marca plano que existe mas não pode ser contratado.
- "Nada à venda ainda": o plano da seção está sem preço; enquanto estiver assim, ninguém contrata.
- "Planos indisponíveis": a tela não conseguiu carregar os planos dessa seção.
- Espaço de publicidade (banners): cada posição de banner tem preço próprio; mostra quantos espaços já têm preço. "Gerenciar espaços" abre os preços.
- "—" no lugar de um número: os planos não carregaram.
