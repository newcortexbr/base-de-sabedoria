# quem contrata planos, o que contrata e como paga

Caminhos relativos a `portal-cidade/`. Só leitura de código.

## a peça central: Cliente

- Toda contratação pertence a um `Cliente` do portal (`backend/comercial/models.py:242`). Campos úteis: `tipo` (pf/pj), `origem` (`painel` = dono cadastrou; `autocadastro` = a própria pessoa), `modulo_de_entrada` (seção da página de venda pela qual entrou), `area_completa`, `usuario` (login).
- Os "papéis" (empresa, contratante, anunciante, colunista, organizador) são cadastros ligados ao Cliente. Mapa: `backend/comercial/acesso_proprietario.py:80-86` (`PAPEIS`).

## tipos de cliente e o que cada um contrata

- Empresa do Guia (`guia.Empresa`): Guia Comercial (gratis, plano_a, plano_b). Também compra eventos e banners e vagas, se quiser. Benefícios do Guia incluem orçamentos e cupom.
- Contratante de Vagas (`classificados.Contratante`): Vagas (gratis, pagamento_unico, assinatura_mensal).
- Anunciante de Classificados (`anuncios.Anunciante`): Classificados (gratis, assinatura_mensal, assinatura_mensal_50). Pessoa física costuma entrar por aqui.
- Colunista (`blog.Colunista`, sem proprietário próprio): Artigos (plano único `unico`, mensal).
- Organizador de evento (`turismo.OrganizadorEvento`): Eventos, pago por evento ou pacote de 5.
- Anunciante de banner: qualquer Cliente; compra por posição em Publicidade (sem cadastro de papel próprio, o banner liga ao cliente).
- Comprador de matéria patrocinada: qualquer Cliente; Notícias (pagamento único, uma matéria por pagamento).
- Parceiro (indicador): conta de outra área (`AREA_PARCEIRO`, `backend/portais/contas.py:23`) com `PlanoParceiro` (plano_1 grátis, plano_2, plano_3). NÃO é cliente do portal: tem uma "ficha de cobrança" (`Cliente.parceiro_cobrado`, `models.py:358`) que fica fora da carteira do dono (`da_carteira()`, `models.py:223`), sem login (`ficha_de_parceiro_sem_login`, `:392`) e sem comissão sobre a própria mensalidade (`parceiros/assinatura.py:16-26`).
- Jornalista (área de notícias): entra por `/minha-conta/login` mas não contrata plano; escreve. Matéria patrocinada é comprada por Cliente comum (`frontend/.../secoes-do-cliente.ts:41`).
- Não contratam: dono/administrador do portal (vende ao cliente pelo painel, "Meus Clientes"), visitante sem conta.

## área reduzida x completa (o que o cliente enxerga)

- Perfis: `colunista`, `pessoa_fisica`, `empresa` — `backend/comercial/perfil_area.py:12-19`.
- Colunista (entrou por `modulo_de_entrada='blog'`) e pessoa física de classificados veem área reduzida (`perfil_area.py:65-72`). Qualquer outro, ou quem tem algo de empresa, ou quem contratou fora do perfil, ou pediu `area_completa`, vê a completa (`perfil_area.py:73-84`). Na dúvida devolve `empresa`.

## fluxo de entrada (criar conta)

1. Visitante abre uma página de venda em `frontend/src/app/anuncie/<seção>` e escolhe plano; cadastro em `anuncie/cadastro`.
2. Pede código por e-mail: `POST comercial/cadastro/codigo/`.
3. `POST comercial/cadastro/` (`backend/comercial/views_public.py:70`): consome o código, cria a conta (`portais.contas.criar_conta`), cria `Cliente(origem='autocadastro', modulo_de_entrada=...)`, manda boas-vindas, vincula parceiro indicador se o código valer (`:117-125`). O cadastro NÃO cria a contratação.
4. Cadastros de papel (empresa, contratante, anunciante etc.) são feitos na área do cliente depois; o dono também pode criar acesso pelo painel (`acesso_proprietario.criar_acesso`, `:247`).

## fluxo de contratação (assinatura de seção: guia, vagas, classificados, artigos)

1. Tela `minha-conta/planos/[secao]` chama `POST comercial/contratar/` com `plano_id` (e CPF/CNPJ e e-mail se faltarem na ficha) — `backend/comercial/views_contratacao.py:228`.
2. O servidor valida: plano do portal e ativo; seção por item recusada aqui (exceto noticias); módulo ligado; plano contratável (`:112-122`). Preço vem do plano no banco, nunca do corpo.
3. Transação com trava no cliente. Mesmo plano já ativo → 400 (ou "continuar neste plano" se havia cancelamento pedido). Plano de preço menor que o ativo → "descida" agendada para o fim do período; voltar ao grátis é `cancelar/`. Preço zero não se compra (`:337-343`).
4. Cria `Contratacao` com status `pendente` e snapshot do plano, e emite a fatura (`emitir_fatura`, `backend/comercial/faturas.py:121`). Resposta traz fatura e dados de pagamento.
5. Nada libera benefício antes do pagamento confirmado (`models.py:558-566`, `status_efetivo`).

## fluxo por item

- Evento: cadastro do evento junto com a compra (`comercial/meus-eventos/`, `views_eventos.py:399`). Pacote de 5 gasta um uso por evento sem cobrar de novo (`:430-437`). Cada evento é uma venda própria.
- Banner: `POST comercial/publicidade/contratar/` (`views_publicidade.py:238`) cria banner em `aguardando_pagamento`, contratação pendente e fatura em uma transação. Posição sai do item comprado, não do corpo. Sem DELETE: parar é cancelar (`CancelarBannerView`, `:503`), que cancela só a fatura do próximo ciclo e deixa o banner até o fim do período.
- Matéria patrocinada: `contratar/` com plano de noticias; depois do pagamento a equipe do portal escreve e publica (`views_contratacao.py:96`, `views_materias.py`).

## fatura e pagamento

- Fatura nasce junto com a contratação (`faturas.py:121`); no máximo uma aberta por contratação. Numeração por portal.
- Meios: (a) Asaas (Pix/cartão) quando o portal tem conta conectada e cobrando (`comercial/asaas/cobranca.py`, link/modal em `comercial/pagamento_modal.py`, rotas `urls_contratacao.py:23-25`); (b) Pix manual com chave do portal e comprovante por WhatsApp (`comercial/pix_manual.py`), confirmado à mão pelo dono; (c) venda registrada pelo dono no painel (nasce ativa).
- Confirmação única: `comercial/faturas.py:467` (`confirmar_fatura`). Marca paga, ativa a contratação pendente (e encerra a anterior da mesma seção, `:197-236`, `:254`), avança período se for ciclo seguinte (`:342`), chama ganchos por seção (parceiro, publicar evento, publicar banner — `:~560-575`), gera comissão de parceiro, e emite a fatura do próximo ciclo (o "carnê", `:424`). Pagamento único não gera próximo ciclo.
- Webhook do Asaas é só sinal; o servidor relê a cobrança e decide (`comercial/asaas/eventos.py:301-318`, `confirmar_se_paga`).
- Vencimento: job `vencer_contratacoes` atualiza status; a leitura correta é sempre `status_efetivo`. Vencido/cancelado → cai no gratuito da seção (se houver).
- Cancelar pelo cliente: `POST comercial/cancelar/` — conteúdo continua até `data_fim`; fatura do próximo ciclo é cancelada (`models.py:578-596`).
- Troca para plano maior: cria pendente; ao pagar encerra o antigo na hora. Para menor: vale no fim do período (D-254), `troca_de_plano.py`.

## parceiro (fluxo à parte)

- Parceiro escolhe plano em `parceiro/` (`escolher_plano`, `parceiros/assinatura.py:173`): gera contratação pendente + fatura (vence em prazo curto, `PRAZO_PRIMEIRA_FATURA_DIAS`). Voltar ao grátis = cancelamento no fim do período. Dono pode vincular plano à mão (`vincular_plano_pelo_dono`, `:280`).
- Pagamento pelo modal em `backend/parceiros/pagamento.py` (Pix e cartão), mesma `confirmar_fatura`.
