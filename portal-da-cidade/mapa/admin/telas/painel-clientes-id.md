# /painel/clientes/[id] (ficha do cliente)

Arquivos: `app/painel/clientes/[id]/page.tsx` (1110 linhas); usa `ModalConfirmarPagamento` compartilhado com `/painel/financeiro`

## como chegar
- na parte Comercial do menu, clique em `Meus Clientes` e depois no nome do cliente. `← Meus Clientes` volta para a lista.

## o que você vê
Ficha de um cliente: contato, planos contratados, faturas e o que ele tem no portal.
- topo: nome, documento, telefone, WhatsApp, e-mail e observações; Editar muda esses dados.
- três abas: `Contratações`, `Financeiro` e `No portal`.
- aba `Contratações`: planos ativos e pendentes com `Plano`, `Preço`, `Período` e `Status`; `Histórico` guarda os cancelados.
- botão `+ Registrar contratação`: escolhe `Seção`, `Onde aparece` (só em publicidade), `Plano`, `Data de início`, `Validade`/`Data de fim`, `Preço cobrado (R$)` e `Observações`; `Registrar` grava.
- botão `Confirmar pagamento` na linha: marca como pago um plano que esperava pagamento e libera o conteúdo (pede confirmação).
- botão `Renovar`: cria uma nova contratação do mesmo plano (pede confirmação). `Cancelar` abre a janela `Cancelar contratação`, que pede um `Motivo *`; `Confirmar cancelamento` fecha.
- aba `Financeiro`: filtros `Todas as contratações` e `Todos os status`; tabela com `Fatura`, `Contratação`, `Vencimento`, `Valor` e `Status` (`Em aberto`, `Vencida`, `Paga`, `Cancelada`); dá para confirmar o pagamento ou `Cancelar` a fatura (janela `Cancelar fatura`, com `Motivo *`).
- aba No portal: empresas do Guia, contratantes de vagas, anunciantes de classificados e banners ligados a este cliente.
- bloquear, excluir e trocar senha ficam na lista de clientes, não nesta ficha.

## rota e gate
- `/painel/clientes/<id>`. client, `Header titulo="Meus Clientes"`. mesmo gate de `/painel/clientes`: `PainelGuard`, sem gate de módulo. o `id` vem de `params` (promise) e vira `Number(id)` sem validar (`:839`).

## o que faz
- ficha de um cliente comercial: dados de contato, contratações (planos), financeiro (faturas) e o que ele tem no portal. aqui o admin age em nome do cliente.

## o que exibe
- cabeçalho: nome, fantasia, documento formatado, telefone, WhatsApp (link), e-mail, observações; botão Editar.
- três abas (`aba-contratacoes|financeiro|portal`):
- Contratações: tabela "ativas" (tudo que não é `cancelada`, inclui pendentes) com plano, rótulo da seção, preço, período, status; seção "Histórico" com as canceladas.
- Financeiro (`AbaFinanceiro`, `:675`): cartões de resumo, filtro por contratação e por status, tabela de faturas (número, plano, vencimento, valor, status, meio/data/quem confirmou, motivo de cancelamento).
- No portal: listas de vínculos com link ao painel: empresas do Guia, contratantes de Vagas, anunciantes de Classificados, banners.

## o que o admin pode fazer em nome do cliente
- editar o cadastro (`ModalEditarCliente`, `:87`): nome, contato etc., com validação de telefone/WhatsApp.
- registrar contratação (`ModalContratacao`, `:181`): seção, local/item (publicidade), plano, data início, data fim (quando o plano não vence por data), preço cobrado (editável), observações. pré-visualiza a vigência pelo servidor (`planos.vigencia`). com Asaas cobrando, avisa quando o preço é menor que R$ 5,00 (`aviso-minimo-asaas`, `:404`).
- confirmar pagamento de contratação pendente (Pix manual): confirmação (`avisos.confirmar`), depois POST sem corpo; o servidor recalcula datas a partir de hoje e libera o conteúdo (`:911`). sem "desfazer".
- renovar contratação (`handleRenovar`, `:891`): confirmação (`avisos.confirmar`), cria nova contratação.
- cancelar contratação com motivo obrigatório (`ModalCancelar`, `:429`).
- fatura aberta/vencida: confirmar pagamento (modal com meio, data, valor, observação e `idempotency_key`) e cancelar com motivo obrigatório (`ModalCancelarFatura`, `:555`).
- o que NÃO existe aqui: bloquear/desbloquear, excluir e resetar senha (só na lista `/painel/clientes`); trocar plano de uma contratação existente (só cancelar e registrar outra, ou renovar); excluir contratação (`contratacoes.excluir` existe na API mas a tela não usa).

## apis (`lib/admin-api.ts`)
- `comercial.clientes.obter` (`:1114`), `.atualizar` (`:1117`)
- `comercial.contratacoes.listar({cliente})`, `.criar`, `.renovar` (`:1136`), `.cancelar`, `.confirmarPagamento` (POST, sem corpo)
- `comercial.faturas.listar({cliente})` (`:1164`), `.resumo` (`:1170`), `.confirmarPagamento` (`:1176`, com `idempotency_key`), `.cancelar` (`:1181`)
- `comercial.catalogo.listar`, `comercial.planos.listar({secao})`, `comercial.planos.vigencia`, `comercial.asaas.obter`

## estados
- carregando ("Carregando…"); erro de carga sem cliente: `erro-ficha` com link de volta; erro de ação: `erro-ficha-acao`; na aba financeiro: `erro-financeiro` (falha total) e `erro-financeiro-acao`.
- vazio: "Nenhuma contratação ativa." (`:1020`), "Nenhuma fatura ainda." (`:771`), vínculos vazios pela `ListaVinculos`. sem plano cadastrado: "Nenhum plano cadastrado para esta seção. Cadastre em Meus Planos." (`:361`).
- confirmação de pagamento já feito em outra aba: o servidor devolve 400, a tela recarrega e mostra o erro (`:926-932`).

## possíveis problemas
- fato: duas formas de confirmar pagamento convivem: a contratação (um clique, `confirm()`, sem valor/meio/data, `:904`) e a fatura (modal com valor e `idempotency_key`). a contratação pendente não passa pela fatura no código da tela; se o backend convergir ambas em `confirmar_fatura`, a tela não mostra isso (hipótese, não verifiquei backend).
- fato: confirmação de pagamento e renovação usam `window.confirm`; não há idempotency_key em `contratacoes.confirmarPagamento` e `renovar` (proteção só por estado do botão, `confirmandoId`/`renovandoId`).
- fato: `catalogo.listar` e `asaas.obter` falham em silêncio (`.catch(() => {})`, `:856`, `:691-692`); rótulo da seção cai na chave crua e o aviso de mínimo do Asaas some.
- fato: `id` não numérico na URL gera `Number(id)=NaN` e chama `/clientes/NaN/`; cai em `erro-ficha` com mensagem da API (hipótese sobre o texto).
- fato: variável com zero no nome, `setVenceP0rData` (`:196` aprox.); só estético, mas atrapalha busca.
- fato: não há botão de bloquear nesta ficha; quem está na ficha precisa voltar à lista.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-clientes-id.png](../prints/painel-clientes-id.png) · dados brutos: [json](../prints/json/painel-clientes-id.json)
- aberta em `/painel/clientes/1` com dados do banco de teste; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1147,16,109,34)
- [menu] "23 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Artigos · Orçamentos Online · A Voz do Povo · Melhores da Cidade · Banners Publicitários …" — menu lateral, no topo da página, à esquerda (lista de 23 itens em coluna) (10,18,255,871)
- [título] "Meus Clientes" — topo, no topo da página, à esquerda (300,19,121,28)
- [link] "← Meus Clientes" — conteúdo, na parte de cima, à esquerda (354,103,112,16)
- [título] "QA Loja Sintetica" — conteúdo, na parte de cima, ao centro (375,156,198,32)
- [botão] "Editar" — conteúdo, na parte de cima, à direita (1147,156,34,16)
- [botão] "Contratações" — conteúdo, na parte de cima, à esquerda, logo abaixo de “QA Loja Sintetica” (354,273,121,38)
- [botão] "Financeiro" — conteúdo, na parte de cima, ao centro, logo abaixo de “QA Loja Sintetica” (479,273,103,38)
- [botão] "No portal" — conteúdo, na parte de cima, ao centro (586,273,93,38)
- [botão] "+ Registrar contratação" — conteúdo, na parte de cima, à direita (1044,331,158,28)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
