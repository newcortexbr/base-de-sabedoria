# /minha-conta/guia

Arquivo: `src/app/minha-conta/guia/page.tsx` (2495 linhas; lido por trechos: cabeçalho, estados de acesso, salvar, avisos e início do formulário. Campos além da linha ~1790 foram mapeados por `secoes-da-ficha.ts`, não lidos um a um).

## quem acessa
- empresa. Perfis reduzidos (colunista, pessoa física, jornalista) não têm a rota (`perfil-da-area.ts`).
- login obrigatório (`layout.tsx`). Item "Guia Comercial" do menu via `rotaDaSecao('guia')` (`secoes-do-cliente.ts:46`).

## gate de módulo/plano
- a tela decide por `acessoDaSecao(secaoGuia, temGratuitoNaSecao)` (`page.tsx:752-763`; `secoes-do-cliente.ts:152-170`):
  - contratação ativa: abre o formulário.
  - sem contratação mas com plano gratuito na seção (e sem pendente de plano pago): abre o formulário no piso Grátis.
  - pendente de plano pago: só a faixa "Aguardando confirmação do pagamento" + "Ir para o pagamento" (`:1610-1623`). Campos não aparecem antes do pagamento (decisão do dono, 2026-08-22, `:745-751`).
  - vencida, cancelada ou nunca contratou sem plano grátis: `SemPlano` com botão "Ver os planos" (`:487-527`). Texto: "Seu plano terminou, então sua empresa saiu do ar. Os dados que você preencheu continuam salvos…".
- campos individuais: o servidor devolve `campos_liberados` e `ficha_completa`; campo não liberado não tem entrada, a seção aparece trancada dizendo qual plano a libera (`:6-17`). Seções (títulos exatos): Dados da empresa, Categoria e horário, Telefone, WhatsApp e redes, Logo, capa e galeria de fotos, Comodidades e pagamento, Cupom de desconto, Pedidos de orçamento, Links e páginas (`secoes-da-ficha.ts:31-111`).
- delivery e orçamento vêm deste plano (`delivery_liberado`, `orcamentos_liberado`); o formulário tem blocos para Delivery (`ConfigDoDelivery`, `AreasDoDelivery`).
- `AvisoBloqueioCliente modulo="guia"` mostra aviso se a conta/módulo está bloqueado (`:1603`).

## o que faz
- ficha da empresa no Guia Comercial: cadastra e edita a empresa única do cliente (não há "nova empresa"). Mostra estado de publicação.

## ações e campos
- seções (acordeão, uma aberta por vez): dados (`Nome da empresa *`, `Descrição`, CEP, cidade, bairro, `Endereço`; razão social fora da tela), `Categoria *` e `Subcategoria *`, `Horário de funcionamento` (com atalho para repetir o horário nos outros dias), por dia da semana (fechado, 24h, abre/fecha), telefone (máscara), e-mail, WhatsApp, Instagram, site, logo, capa, galeria (até 10 fotos), comodidades, formas de pagamento, cupom (código, tipo, valor, validade), orçamento, links e páginas, delivery.
- busca no Google (`BuscaNoGoogle`, faixa no topo de "Dados da empresa"; janela "Buscar no Google Meu Negócio" com `Buscar`, `Cadastrar manualmente`, `Tentar outro nome`): preenche campos e pode importar fotos (custo e importação única, regra do projeto).
- botão do cabeçalho `Publicar` (primeira vez) ou `Salvar`; `Ver no site` quando no ar. No fim do formulário: `Publicar no Guia` (primeira vez) ou `Salvar alterações`; entre as seções do acordeão: `Continuar` e `Salvar e ir para a próxima`.
- apagar foto: `window.confirm("Apagar esta foto? Ela some do seu perfil na hora e não há como recuperar depois.")` (`:1564`).
- após salvar, janela `JanelaAposSalvar` (salvando, pronto, erro; com link público e atalho para a galeria).
- avisos de estado: "Seu cadastro está em análise" (`aguardando_aprovacao`), "Sua empresa ainda não está no ar", reprovada com "O que precisa mudar: …", inativa, e contagem regressiva do rascunho apagado ("será apagado em N dias", `:1670-1675`); verde "Sua empresa está publicada no site." (`:1680`).

## APIs
- `GET /{portal}/comercial/minhas-secoes/` (hub, `buscarMinhasSecoes`) e `GET /{portal}/comercial/planos/?secao=guia`.
- `GET|POST|PATCH /{portal}/comercial/minha-empresa/` (`buscarMinhaEmpresa`, `criarMinhaEmpresa`, `salvarMinhaEmpresa`, `cliente-api.ts:835-993`).
- `.../minha-empresa/fotos/` (listar, adicionar, apagar) e horários (`buscarHorariosEmpresa`, `salvarHorariosEmpresa`).
- busca no Google: `buscarNoGoogle`, `fichaDoGoogle`, `importarFotosDoGoogle`, `googleDisponivelNoPortal`.
- bairros do cliente: `buscarBairrosDoCliente`, para o seletor de local sem sair da área.
- `createPortalApi(portal)` (config, cidades); `revalidarFichaDaEmpresa` (Server Action, best-effort, `:95-104`).

## estados de erro/vazio
- hub: sem slug "Não foi possível identificar o portal da sua sessão."; 403 "Sua conta não tem acesso à área de clientes deste portal."; outros "Não foi possível carregar seus dados. Tente novamente em instantes." (`:710-726`).
- dados da empresa: 403 igual; outros "Não foi possível carregar seus dados agora…" (`:801-803`).
- carregando: "Carregando…" / "Carregando dados da empresa…".
- empresa não cadastrada: título "Cadastre sua empresa".
- salvar: validação no cliente (campos e horários) abre a seção com erro e mostra a janela de erro; erros do servidor por campo + faixa geral; horários têm erro à parte ("Corrija os horários destacados abaixo antes de salvar.").
- salvar empresa e horários são independentes: a empresa pode salvar e os horários falhar (`:1395-1425`).

## possíveis problemas para leigo
- fato: tela muito longa (2495 linhas, 8 seções, delivery, Google). Hipótese: leigo se perde; o acordeão ajuda.
- fato: cadastro novo vai para "Seu cadastro está em análise" depois de "Publicar". O botão fala em "Publicar", mas pode não ir ao ar na hora; a janela pós-salvar diz se está no ar ou em análise (`:1298-1303,1433`).
- fato: com plano vencido o formulário some, mas a empresa sai do ar; texto explica e dados ficam salvos.
- fato: pendente de pagamento: tela só mostra "aguardando" e nenhum campo; "A confirmação pode levar alguns minutos" (`:1619`). Hipótese: leigo que já pagou e vê isso acha que perdeu dinheiro.
- fato: rascunho sem plano confirmado é apagado em N dias (`:1672`); aviso só aparece na tela do Guia.
- fato: horários são opcionais, mas basta mexer em um dia para a semana inteira ser validada (`:1286-1292`). Erro "informe abertura e fechamento" em dias não tocados pode confundir.
- fato: o campo "Razão social" saiu da tela, mas continua no cadastro (`:1713`); quem precisava editar não consegue. Hipótese.
- fato: apagar foto usa `confirm()` do navegador e não tem desfazer.
- fato: botão de salvar fica no cabeçalho (`requestSubmit`), não no rodapé do formulário; em tela longa o leigo pode não achar. Hipótese.
- fato: seções trancadas mostram o plano que libera; mas o pedido de upgrade passa por outra tela (`/minha-conta/planos/guia`), sem botão direto verificado aqui.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [minha-conta-guia.png](../prints/minha-conta-guia.png) · versão celular: [minha-conta-guia-390.png](../prints/minha-conta-guia-390.png) · dados brutos: [json](../prints/json/minha-conta-guia.json)
- aberta em `/minha-conta/guia`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "Guia Comercial" — conteúdo, no topo da página, ao centro (382,46,317,39)
- [botão] "Publicar" — conteúdo, no topo da página, à direita (1111,55,111,44)
- [menu/links] "9 itens: Início · Guia Comercial · Vagas de Emprego · Banners Publicitários · Classificados · Minha empresa · Planos e assinaturas · Segurança · Sair" — menu, na parte de cima, à esquerda (lista de 9 itens em coluna) (14,96,227,786)
- [link] "Sair do grátis" — conteúdo, na parte de cima, à direita (1095,170,134,44)
- [título] "Cadastre sua empresa" — conteúdo, na parte de cima, à esquerda (288,256,192,27)
- [título] "Sua ficha no site" — menu lateral, na parte de cima, à direita (965,273,266,21)
- [título] "Dados da empresaNome, descrição e endereço da sua empresa" — conteúdo, na parte de cima, ao centro (305,312,464,44)
- [botão] "Dados da empresaNome, descrição e endereço da sua empresa" — conteúdo, na parte de cima, ao centro, logo abaixo de “Cadastre sua empresa” (305,312,464,44)
- [campo] "Nome da empresa" — conteúdo, no meio da tela, ao centro, logo abaixo de “Dados da empresaNome, descrição e e” (305,415,608,42)
- [campo] "00000-000" — conteúdo, no meio da tela, ao centro (305,627,296,38)
- [campo] "Cidade" — conteúdo, no meio da tela, ao centro, logo abaixo de “00000-000” (305,725,296,42)
- [campo] "Bairro" — conteúdo, no meio da tela, ao centro (617,725,296,42)
- [campo] "" — conteúdo, no meio da tela, ao centro, logo abaixo de “Cidade” (305,809,608,42)
- [botão] "Publicar no Guia" — conteúdo, no meio da tela, à esquerda, logo abaixo de “Cidade” (305,833,159,44)
- [botão] "Continuar" — conteúdo, no meio da tela, à direita (818,887,95,44)
- [título] "Categoria e horáriosem horário" — conteúdo, mais abaixo (rolando a página), ao centro (305,977,464,44)
- [botão] "Categoria e horáriosem horário" — conteúdo, mais abaixo (rolando a página), ao centro (305,977,464,44)
- [link] "Ver planos" — conteúdo, mais abaixo (rolando a página), à direita (799,1067,114,44)
- [título] "Telefone, WhatsApp e redes" — conteúdo, mais abaixo (rolando a página), ao centro (360,1068,426,22)
- [título] "Logo, capa e galeria de fotosSem logo" — conteúdo, mais abaixo (rolando a página), ao centro (305,1157,464,44)
- [botão] "Logo, capa e galeria de fotosSem logo" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Telefone, WhatsApp e redes” (305,1157,464,44)
- [link] "Ver planos" — conteúdo, mais abaixo (rolando a página), à direita (799,1247,114,44)
- [título] "Comodidades e pagamento" — conteúdo, mais abaixo (rolando a página), ao centro (360,1248,426,22)
- [link] "Ver planos" — conteúdo, mais abaixo (rolando a página), à direita (799,1337,114,44)
- [título] "Cupom de desconto" — conteúdo, mais abaixo (rolando a página), ao centro (360,1338,426,22)
- [link] "Ver planos" — conteúdo, mais abaixo (rolando a página), à direita (799,1427,114,44)
- [título] "Pedidos de orçamento" — conteúdo, mais abaixo (rolando a página), ao centro (360,1428,426,22)
- [link] "Ver planos" — conteúdo, mais abaixo (rolando a página), à direita (799,1517,114,44)
- [título] "Links e páginas" — conteúdo, mais abaixo (rolando a página), ao centro (360,1518,426,22)

## o que você vê
Ficha da sua empresa no Guia Comercial: aqui você cadastra e muda os dados que o público vê. Cada conta tem uma empresa.
- Seções que abrem e fecham: Dados da empresa, Categoria e horário, Telefone, WhatsApp e redes, Logo, capa e galeria de fotos, Comodidades e pagamento, Cupom de desconto, Pedidos de orçamento, Links e páginas (e blocos de Delivery, quando o plano libera).
- Nome da empresa, Categoria e Subcategoria são obrigatórios.
- No fim: `Publicar no Guia` (primeira vez) ou `Salvar alterações`; entre seções, `Continuar` ou `Salvar e ir para a próxima`.
- Seção com cadeado: seu plano não libera; ela diz qual plano libera.
- Nome: obrigatório. Horários: por dia da semana (fechado, 24h, ou abre/fecha).
- Galeria: até 10 fotos. Apagar foto não tem volta.
- Buscar no Google Meu Negócio: preenche os dados com o que está no Google (`Cadastrar manualmente` se não achar).
- Publicar (primeira vez) / Salvar; Ver no site quando está no ar.
- Avisos: "Seu cadastro está em análise", "ainda não está no ar", reprovada com "O que precisa mudar", rascunho que "será apagado em N dias", e em verde "Sua empresa está publicada no site".
- Sem plano: "Ver os planos"; seus dados continuam salvos.
