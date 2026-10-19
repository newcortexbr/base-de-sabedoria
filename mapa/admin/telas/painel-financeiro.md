# /painel/financeiro

Arquivos: `app/painel/financeiro/page.tsx`, `LinhaDaFatura.tsx`, `ModalCompletarDadosAsaas.tsx`, `mensagem-cobranca.ts`, `regras.ts`, `components/painel/ModalConfirmarPagamento.tsx`, `components/painel/ComissoesParceiros.tsx`

## rota e gate
- `/painel/financeiro`, menu Comercial > Financeiro (`components/painel/Sidebar.tsx:228`). client. gate `PainelGuard`; sem gate de módulo.

## o que faz
- responde "quem eu preciso cobrar hoje?": lista as faturas de todas as seções vendáveis (e de parceiros), com cobrança e baixa (comentário `:1-13`). a aba Financeiro dentro da ficha do cliente responde "quanto este cliente me deve".

## o que mostra
- selo "Cobrança automática ligada/desligada" (Asaas conectado ou não) com explicação.
- alertas do financeiro (os 2 primeiros abertos, "ver todos"), com "Ver fatura", "Excluir cobrança no Asaas" (tipo `cobranca_cancelada_aqui`) e dispensar.
- cartões: vencidas, a vencer, recebidas no mês, aguardando Pix (se houver), e "A pagar": comissão de parceiros (abre `ModalComissoesParceiros`).
- abas por `status_efetivo`, filtros Módulo (catálogo + parceiros), De/Até, busca por texto (envia no submit), filtro "como paga" (pix/link), "Ver mais" de 20 em 20 no cliente.

## ações do admin em nome do cliente
- Cobrar: abre WhatsApp com mensagem pronta (`hrefCobrancaWhatsapp`), com link de pagamento ou chave Pix do portal.
- "Já recebi": `ModalConfirmarPagamento` registra o pagamento por fora (meio, data, valor recebido, observação, caixa "Confirmo que recebi…"). efeito: ativa a contratação e o conteúdo vai ao ar (`ModalConfirmarPagamento.tsx:226-236`). chave de idempotência por abertura do modal.
- Gerar/tentar de novo a cobrança no Asaas, "Enviar pelo Asaas" (`window.confirm`: a chave Pix já entregue ao cliente some e passa a valer o link, `page.tsx:174`), copiar link.
- "Completar dados": grava documento/e-mail do cliente (`comercial.clientes.atualizar`) e depois gera a cobrança (`ModalCompletarDadosAsaas.tsx:55-61`).
- comissões de parceiros: dar baixa, anexar comprovante (modal).

## apis (`lib/admin-api.ts`)
- `comercial.faturas.listar/resumo/confirmarPagamento/cancelar/gerarCobranca` (`:1160-1191`)
- `comercial.alertas.listar/excluirCobranca/dispensar`, `comercial.asaas.obter`, `comercial.catalogo.listar`, `comercial.clientes.atualizar`
- `guia.config.pix.get`, `parceiros.comissoes.listar/darBaixa/anexarComprovante` (`:1044-1061`)

## estados
- carregando; erro `data-testid=erro-financeiro`; erro de cargas extras `erro-carga-extra`; vazio "Nenhuma fatura encontrada. Tente ajustar os filtros ou a busca."; aviso se De > Até (não envia ao servidor e mantém a lista).

## possíveis problemas
- fato: busca todas as faturas do período sem paginação no servidor (`faturas.listar` sem página, `page.tsx:206`) e só limita a exibição a 20; portal grande carrega tudo (hipótese de impacto).
- fato: falha em catálogo e Asaas é engolida (`:95,98`). se `asaas.obter` falha, a tela afirma "Cobrança automática desligada" e o texto muda para "cobre pelo WhatsApp" mesmo com Asaas ligado (hipótese; `.catch(() => setContaAsaas(null))`).
- fato: a chave Pix só é carregada uma vez; falha vira `''` e a mensagem de cobrança segue sem chave (`:101-105`).
- fato: `copiarLink` engole falha de área de transferência sem aviso (`:191-194`).
- fato: o admin pode registrar pagamento recebido com valor diferente do da fatura; a tela só mostra `valorDivergente` no modal (cálculo na linha 83); o servidor decide o resultado (regra 5, não verifiquei).
- hipótese: o texto "Quem vence primeiro aparece em cima" depende de `agrupar`/`regras.ts`, não validei a ordem.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-financeiro.png](../prints/painel-financeiro.png) · dados brutos: [json](../prints/json/painel-financeiro.json)
- aberta em `/painel/financeiro`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1142,16,114,34)
- [menu] "23 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Artigos · Orçamentos Online · A Voz do Povo · Melhores da Cidade · Banners Publicitários …" — menu lateral, no topo da página, à esquerda (lista de 23 itens em coluna) (10,18,255,871)
- [título] "Financeiro" — topo, no topo da página, à esquerda (300,19,91,28)
- [título] "Financeiro" — conteúdo, na parte de cima, ao centro (308,91,560,39)
- [botão] "Cobrança automática desligada" — conteúdo, na parte de cima, à direita (991,134,257,44)
- [botão] "Você deve a parceirosR$ 0,000 parceiros · Ver e pagar" — conteúdo, na parte de cima, à direita, logo abaixo de “Cobrança automática desligada” (1016,220,232,96)
- [botão] "R$ 0,000 vencidas" — conteúdo, na parte de cima, à esquerda (308,238,224,78)
- [botão] "R$ 0,000 a vencer" — conteúdo, na parte de cima, ao centro (544,238,224,78)
- [botão] "R$ 0,000 recebidas neste mês" — conteúdo, na parte de cima, à direita, logo abaixo de “Cobrança automática desligada” (780,238,224,78)
- [botão] "A vencer (0)" — conteúdo, na parte de cima, à esquerda, logo abaixo de “R$ 0,000 vencidas” (313,345,100,44)
- [botão] "Vencidas (0)" — conteúdo, na parte de cima, ao centro, logo abaixo de “R$ 0,000 vencidas” (415,345,102,44)
- [botão] "Pagas (0)" — conteúdo, na parte de cima, ao centro, logo abaixo de “R$ 0,000 vencidas” (519,345,84,44)
- [botão] "Canceladas (0)" — conteúdo, na parte de cima, ao centro, logo abaixo de “R$ 0,000 a vencer” (605,345,118,44)
- [lista de opções] "Módulo" — conteúdo, no meio da tela, à direita (783,424,167,44)
- [campo] "De" — conteúdo, no meio da tela, à direita (960,424,139,44)
- [campo] "Até" — conteúdo, no meio da tela, à direita (1109,424,139,44)
- [botão] "Buscar" — conteúdo, no meio da tela, ao centro (728,426,40,40)
- [campo] "Buscar por cliente" — conteúdo, no meio da tela, ao centro, logo abaixo de “A vencer (0)” (347,436,373,21)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
