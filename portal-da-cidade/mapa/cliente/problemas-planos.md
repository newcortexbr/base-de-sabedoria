# problemas possíveis em planos e contratação

Leitura estática de `portal-cidade/` (nada rodou). "Fato" = visto no código. "Hipótese" = inferência que precisa de teste ou confirmação do dono. Caminhos relativos a `portal-cidade/`.

## fatos (comportamento real que pode surpreender o suporte)

- Plano novo nasce sem preço e desligado. O provisionamento cria cada plano fixo com `preco=0` e `ativo=False` (só o "padrão" nasce ativo): `backend/comercial/provisionamento.py:~95-100`. Efeito: portal novo não vende nada até o dono definir preço e ativar. Cliente reclama de "não aparece plano".
- Seção sem plano ativo some para o cliente (regra do dono, `views_public.py:363-437`: `tem_planos` só se há plano ativo). Dono que desativa todos os planos de uma seção faz o cartão sumir do hub de quem não tem contratação.
- Preço zero não se compra: `ContratarView` recusa (`views_contratacao.py:~337-343`, `backend/comercial/gratuito.py:45`). Quem clica "contratar" o grátis vê erro/mensagem; o grátis já vale sozinho. Voltar ao grátis é "cancelar", só vale no fim do período pago (`views_contratacao.py:375-379`).
- Cancelar não corta na hora: conteúdo fica até `data_fim` (`models.py:578-596`). Já cancelamento feito pelo dono no painel derruba na hora. Ticket típico: "cancelei e continua aparecendo/cobrando".
- Descida (trocar para plano mais barato) só vale no fim do período; pagar antes não troca (`views_contratacao.py:375`, `troca_de_plano.py`). Desistir depois de pagar não devolve dinheiro (aviso na tela, `planos/[secao]/page.tsx`).
- Pagamento único não vence por data: `data_fim` nulo, acaba por uso (`esgotada`). Vagas "Pagamento Único" = 5 vagas no total; apagar não devolve crédito (`models.py:535-557`, `limites.py:393-502`). Ticket típico: "apaguei a vaga e não voltou".
- Nada libera benefício antes de a fatura ser confirmada (`models.py:558-566`, `faturas.py:467`). Pix manual depende do dono confirmar; até lá o status é `pendente` e a tela mostra "Pendente"/"aguardando pagamento" (`secoes-do-cliente.ts:221`).
- Vencido sem pagar volta ao gratuito da seção, não some: `limites.py:94-130`, `direitos.py:564-669`. No Guia, se o dono apagar/desligar a linha do Grátis, a empresa de autocadastro deixa de aparecer (`catalogo.py:1250-1256`).
- Banner: sem exclusão, só cancelar; o cancelamento corta apenas a fatura do próximo ciclo e o banner fica até o fim do período (`views_publicidade.py:30-38`, `:503-566`). Posições de categoria/ponto/roteiro do turismo não são vendidas pelo cliente (`catalogo.py:943-977`); só o dono as vende.
- Posição `home_classificados_inline` foi retirada da venda (`catalogo.py:979-986`). Contratação antiga com essa chave fica no banco como histórico.
- Matéria patrocinada: depois do pagamento ninguém publica automaticamente; a equipe do portal escreve e publica à mão (`catalogo.py:57-72`). Cliente que pagou e "não vê nada" é esperado até a equipe agir. A tela manda falar com a equipe (`secoes-do-cliente.ts:305-309`).
- Cartão e Pix pelo site só funcionam com conta Asaas conectada e "cobrando" no portal; senão aparece "Este portal não aceita pagamento pelo site. Use a chave Pix" (`pagamento_modal.py:MSG_SEM_COBRANCA`). Fatura aberta de cobrança já emitida continua confirmável com a cobrança desligada (`pagamento_modal.py:~58`).
- Cobrança exige CPF/CNPJ, e-mail e (cartão) celular com DDD (`pagamento_modal.py` e `asaas/cobranca.py:108-132`). Documento duplicado no portal dá erro (`views_contratacao.py`, `uniq_cliente_documento_portal`, `models.py:383-387`).
- Parceiro não aparece nos clientes do dono nem ganha comissão da própria mensalidade (`models.py:223-239,388-395`, `assinatura.py:16-26`).
- Artigos não é oferecido na conta de empresa; só aparece a quem já tem (`secoes-do-cliente.ts:250-257`). Quem quer ser colunista entra por `anuncie/colunista`.

## hipóteses (precisam confirmação)

1. Descida decidida pelo preço bruto, sem normalizar o período. `plano.preco < existente_ativa.preco_cobrado` (`views_contratacao.py:375`). Um anual de R$ 300 contra um mensal de R$ 50 conta como "subida", e semestral contra mensal pode contar como "descida" mesmo ficando mais caro por mês. Confirmar com o dono se isso é intencional. Evidência: a vitrine já calcula equivalente mensal (`_planos/vitrine.ts:255`, `equivalenteMensal`), mas o servidor não usa.
2. Pagamento único ativo é invisível para a lógica de troca. O filtro de plano existente exige `data_fim__isnull=False` (`views_contratacao.py:345`), então quem tem Vagas "Pagamento Único" ativo (data_fim nula) não entra no ramo de subida/descida; ao pagar outro plano, `_ativar_contratacao` encerra o antigo (`faturas.py:197-236, 254`), possivelmente com usos ainda sobrando. Confirmar se comprar a assinatura com crédito restante deve cancelar o crédito. Risco de ticket "paguei e perdi minhas vagas".
3. Comprar de novo o mesmo pagamento único com crédito sobrando: nova pendente + ativação encerra a anterior (mesma seção, não é vendida por item; `catalogo.py:1393` só inclui eventos/publicidade/noticias). Mesmo risco da hipótese 2.
4. `ROTULO_PADRAO` do front não tem `noticias` (`secoes-do-cliente.ts:~262-269`), só entra rótulo do servidor/resumo; se faltar, o menu mostra a chave crua "noticias" (`rotuloDoModulo`, `:~318`). Baixo impacto, só se o servidor não mandar rótulo.
5. Duas listas em lugares diferentes decidem o que é "vendido por item": `catalogo.py:1393` (`SECOES_VENDIDAS_POR_ITEM`) e `secoes-do-cliente.ts:243` (`MODULOS_POR_ITEM`); mais `SECOES_COM_PAGAMENTO_UNICO` (`catalogo.py:1330`). Nova seção por item que esqueça uma delas fica com comportamento divergente (em especial: contratação anterior cancelada em silêncio, `faturas.py:233`). Já há testes de varredura em outras listas (modulos); não confirmei se cobrem esta.
6. Painel do dono e catálogo são independentes de módulo: `MinhasSecoesView` mostra seção pelo plano ativo, `_secao_a_venda_no_portal` barra na compra. Portal que desliga um módulo depois de ter vendido deixa o cliente vendo cartão sem poder renovar (a contratação existente entra mesmo sem plano, `views_public.py:430`, mas `contratar/` responde "indisponível", `views_contratacao.py:112,~320`). Confirmar mensagem vista pelo cliente.
7. Fatura de ciclo seguinte do pagamento único: não existe (por desenho). Mas "Pacote 5 eventos" é cíclico (mensal) e zera `usos` a cada pagamento (`faturas.py:342-385`). Cliente que não consome tudo perde o saldo ao renovar; verificar se isso está claro no texto da vitrine.
8. Os dois fluxos de venda self-service sem papel cadastrado: banner e matéria patrocinada funcionam para qualquer Cliente, sem `PAPEIS` (`acesso_proprietario.py:80-86` não lista banner nem noticias). Suporte não achará "perfil" para o comprador de banner no cadastro de papéis; a pista é `BannerPublicitario.cliente`/`contratacao`.
9. Perfis reduzidos (colunista, pessoa física) escondem planos de empresa. Se esse cliente só contratou algo de empresa fora do perfil, a área alarga (`perfil_area.py:73-84`); mas quem for reduzido e não souber que existe "área completa" (`area_completa`, `views_public.py:309`) pode achar que o portal não vende outros planos.

## o que o suporte deve conferir primeiro em cada queixa

- "Paguei e não liberou": fatura paga? contratação com `status_efetivo` ativa? Pix manual aguardando confirmação do dono? Webhook Asaas recebido (alerta financeiro, `models.py:1051`)?
- "Não aparece plano": módulo ligado? plano da seção `ativo` e com preço? seção fora da conta de empresa (artigos)? área reduzida do perfil?
- "Cobrou de novo": plano cíclico emite próximo ciclo ao confirmar pagamento (`faturas.py:424`); cancelamento pelo cliente cancela só a fatura do ciclo seguinte.
- "Perdi vagas/anúncios": plano rebaixado ao gratuito aplica limites de ativos/prazo/fotos só a novos envios; fotos já enviadas acima do limite não são apagadas (`models.py:130-135`, `limites.py`).
